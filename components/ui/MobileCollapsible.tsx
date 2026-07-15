"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileCollapsibleProps {
  /** Section title shown as the tappable accordion row on mobile. */
  title: string;
  /** Full section content — always visible on lg+ screens. */
  children: ReactNode;
  /** Open by default on mobile. */
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Reference mobile pattern: on phones this section collapses to a
 * title row with a chevron; on desktop it always renders in full.
 */
export function MobileCollapsible({
  title,
  children,
  defaultOpen = false,
  className,
}: MobileCollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 border-b border-mist pb-4 text-left lg:hidden"
      >
        <span className="font-display text-xl font-bold">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-forest transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      <div className={cn(open ? "block pt-6" : "hidden", "lg:block lg:pt-0")}>
        {children}
      </div>
    </div>
  );
}
