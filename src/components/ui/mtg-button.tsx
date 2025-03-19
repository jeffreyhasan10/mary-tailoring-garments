
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface MTGButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const MTGButton = forwardRef<HTMLButtonElement, MTGButtonProps>(
  ({ className, children, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-mtg-navy text-white hover:bg-mtg-navy/90": variant === "primary",
            "bg-mtg-gold text-mtg-navy hover:bg-mtg-gold/90": variant === "secondary",
            "border border-mtg-navy text-mtg-navy hover:bg-mtg-navy/10": variant === "outline",
            "text-mtg-navy hover:bg-mtg-navy/10": variant === "ghost",
            "text-sm px-3 py-1.5": size === "sm",
            "px-4 py-2": size === "md",
            "text-lg px-6 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MTGButton.displayName = "MTGButton";

export { MTGButton };
