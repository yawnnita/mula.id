"use client";

import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

/**
 * Reusable Card component with hover effects and optional padding.
 *
 * @example
 * ```tsx
 * <Card className="p-6">
 *   <h3>Title</h3>
 *   <p>Content</p>
 * </Card>
 * <Card hover={false} className="bg-teal-50">
 *   No hover effect card
 * </Card>
 * ```
 *
 * @props
 * - `hover`: Enable hover animation (default: true)
 * - `padding`: Card padding size
 * - `className`: Additional CSS classes
 */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, padding = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300",
          hover && "hover:shadow-xl hover:-translate-y-1 hover:border-teal/30",
          padding === "none" && "",
          padding === "sm" && "p-4",
          padding === "md" && "p-6",
          padding === "lg" && "p-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
