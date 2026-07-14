"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Loader2, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;
      if (!res.ok || !payload?.ok) {
        throw new Error(
          payload?.error ?? "Something went wrong. Please try again.",
        );
      }
      setSent(true);
      reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Feel free to reach out to us for any inquiries or assistance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-copper/10 text-copper ring-1 ring-copper/30">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-white transition hover:text-copper"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-3">
            <GlassCard className="p-8" id="submit">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-copper" />
                    <h3 className="font-display text-2xl text-white">
                      Message sent
                    </h3>
                    <p className="max-w-sm text-pretty text-muted">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 1–2 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="btn-ghost mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingField
                        label="First name"
                        name="firstName"
                        register={register}
                        error={errors.firstName?.message}
                      />
                      <FloatingField
                        label="Last name"
                        name="lastName"
                        register={register}
                        error={errors.lastName?.message}
                      />
                    </div>
                    <FloatingField
                      label="Email"
                      name="email"
                      type="email"
                      register={register}
                      error={errors.email?.message}
                    />
                    <FloatingField
                      label="Message"
                      name="message"
                      textarea
                      register={register}
                      error={errors.message?.message}
                    />

                    {errorMessage && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FloatingFieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  textarea?: boolean;
  register: ReturnType<typeof useForm<FormData>>["register"];
  error?: string;
}

function FloatingField({
  label,
  name,
  type = "text",
  textarea = false,
  register,
  error,
}: FloatingFieldProps) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={name}
        type={textarea ? undefined : type}
        placeholder=" "
        {...register(name)}
        className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-3 pt-5 text-white outline-none transition placeholder:text-transparent focus:border-copper/50 focus:bg-white/[0.05]"
        rows={textarea ? 5 : undefined}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-1.5 text-[10px] uppercase tracking-[0.2em] text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:tracking-[0.2em] peer-focus:text-copper"
      >
        {label}
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}
