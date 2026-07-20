"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Globe,
  Search,
  Headphones,
  Shield,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyUsFeatures } from "@/lib/data";
import { staggerContainer, staggerChild } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Globe,
  Search,
  Headphones,
  Shield,
  Zap,
};

/**
 * "Why Choose Us" section highlighting key differentiators.
 * Uses a grid layout with icon cards and animations.
 *
 * @example
 * ```tsx
 * <WhyUs />
 * ```
 */
export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We deliver more than just websites. We build digital experiences that drive results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyUsFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal/30 transition-all hover:shadow-lg group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 mb-4 group-hover:bg-teal group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-8 w-8 text-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
