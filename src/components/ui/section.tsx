
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  color?: "light" | "dark" | "gold" | "white";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, color = "light" }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "py-16 md:py-24",
          {
            "bg-mtg-cream text-mtg-navy": color === "light",
            "bg-mtg-navy text-white": color === "dark",
            "bg-mtg-gold/20 text-mtg-navy": color === "gold",
            "bg-white text-mtg-navy": color === "white",
          },
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

export function SectionTitle({ 
  children, 
  className,
  subtitle,
}: { 
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{children}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">{subtitle}</p>
      )}
    </div>
  );
}
