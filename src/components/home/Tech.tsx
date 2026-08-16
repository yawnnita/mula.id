"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { techStack } from "@/app/(main)/home/data";
import { staggerContainer, staggerChild } from "@/lib/animations";

export default function Tech() {
  const duplicated = [...techStack, ...techStack];

  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Teknologi Web Modern untuk Pengembangan Website Profesional"
          subtitle="Kami membangun website dengan stack teknologi terkini yang menjamin performa cepat, keamanan handal, dan pengalaman pengguna terbaik."
        />
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 sm:gap-8 items-center"
        >
          <div className="flex gap-6 sm:gap-8 animate-marquee whitespace-nowrap">
            {duplicated.map((tech, i) => (
              <motion.div
                key={`${tech.id}-${i}`}
                variants={staggerChild}
                className="flex-shrink-0 h-20 sm:h-24 px-6 sm:px-8 rounded-2xl bg-white border border-gray-100 flex items-center justify-center gap-3 hover:border-teal/30 hover:shadow-md transition-all group cursor-default"
              >
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} - teknologi web yang digunakan Bikin.In`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 48px, 48px"
                  />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-300 group-hover:text-charcoal transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee Row 2 - reverse direction */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 sm:gap-8 items-center"
        >
          <div
            className="flex gap-6 sm:gap-8 items-center whitespace-nowrap"
            style={{ animation: "marquee 35s linear infinite reverse" }}
          >
            {duplicated.map((tech, i) => (
              <motion.div
                key={`rev-${tech.id}-${i}`}
                variants={staggerChild}
                className="flex-shrink-0 h-20 sm:h-24 px-6 sm:px-8 rounded-2xl bg-white border border-gray-100 flex items-center justify-center gap-3 hover:border-teal/30 hover:shadow-md transition-all group cursor-default"
              >
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} - teknologi web yang digunakan Bikin.In`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 48px, 48px"
                  />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-300 group-hover:text-charcoal transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
