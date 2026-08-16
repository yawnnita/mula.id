"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/app/(main)/home/data";
import { fadeIn } from "@/lib/animations";

/**
 * Client testimonials carousel section.
 * Features auto-rotating testimonials with manual navigation.
 *
 * @example
 * ```tsx
 * <Testimonials />
 * ```
 */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const testimonial = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of businesses across Indonesia."
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center relative"
            >
              <Quote className="h-12 w-12 text-teal/20 mx-auto mb-6" />

              <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal hover:text-white hover:border-teal transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-teal" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal hover:text-white hover:border-teal transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
