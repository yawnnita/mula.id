"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

/**
 * Reusable Button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="outline" size="sm">Learn More</Button>
 * <Button variant="ghost">Click Me</Button>
 * ```
 *
 * @props
 * - `variant`: "primary" | "outline" | "ghost" | "secondary"
 * - `size`: "sm" | "md" | "lg"
 * - `className`: Additional CSS classes
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 ease-out cursor-pointer whitespace-nowrap",
          "focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          variant === "primary" &&
            "bg-teal text-white hover:bg-teal-dark shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
          variant === "outline" &&
            "border-2 border-teal text-teal hover:bg-teal hover:text-white",
          variant === "ghost" &&
            "text-charcoal hover:bg-teal-50 hover:text-teal",
          variant === "secondary" &&
            "bg-charcoal text-white hover:bg-charcoal-light shadow-md hover:shadow-lg",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
