"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface AnimatedButtonProps {
  href?: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function AnimatedButton({
  href,
  variant = "primary",
  children,
  icon = true,
  className,
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  const base = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
    variant === "primary"
      ? "bg-copper text-white hover:shadow-glow-copper"
      : "border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/30",
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {variant === "primary" && (
        <motion.span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-copper-700 via-copper to-copper-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {content}
    </button>
  );
}
