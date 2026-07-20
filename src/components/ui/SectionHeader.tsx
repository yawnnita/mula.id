"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * Section header with title, subtitle, and optional alignment.
 * Includes fade-in animation on scroll.
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   title="Our Services"
 *   subtitle="We provide top-notch solutions"
 *   align="center"
 * />
 * ```
 *
 * @props
 * - `title`: Main heading text
 * - `subtitle`: Description below heading
 * - `align`: Text alignment - "left" | "center"
 * - `light`: Use light text color for dark backgrounds
 * - `className`: Additional CSS classes
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-gray-300" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
