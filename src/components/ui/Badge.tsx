import { cn } from "@/lib/utils";

/**
 * Badge component for labels, categories, and status indicators.
 *
 * @example
 * ```tsx
 * <Badge variant="teal">Popular</Badge>
 * <Badge variant="outline">New</Badge>
 * <Badge variant="gray">Draft</Badge>
 * ```
 *
 * @props
 * - `variant`: "teal" | "outline" | "gray"
 * - `className`: Additional CSS classes
 */
interface BadgeProps {
  variant?: "teal" | "outline" | "gray";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = "teal", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "teal" && "bg-teal-100 text-teal",
        variant === "outline" && "border border-teal text-teal",
        variant === "gray" && "bg-gray-100 text-gray-500",
        className
      )}
    >
      {children}
    </span>
  );
}
