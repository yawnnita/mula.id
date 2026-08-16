"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerChild } from "@/lib/animations";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "Share your vision and requirements. We'll analyze your needs and provide a tailored solution.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design",
    description: "Our team creates stunning mockups and prototypes that align with your brand identity.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "We build your website with clean code, optimized performance, and responsive design.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your website and provide ongoing maintenance to ensure peak performance.",
  },
];

/**
 * Step-by-step process section showing how the studio works.
 * Displays 4 steps in a horizontal timeline with connecting lines.
 *
 * @example
 * ```tsx
 * <Process />
 * ```
 */
export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proses pembuatan website"
          subtitle="Our streamlined process ensures your project is delivered on time and exceeds expectations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerChild}
              className="relative text-center"
            >
              <div className="relative inline-flex mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal text-white relative z-10">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center z-20">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
