"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { whatsappUrl } from "@/lib/data";

/**
 * Call-to-action section encouraging visitors to start a project via WhatsApp.
 */
export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-teal to-teal-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Siap Bikin Website
            <span className="block">Impian Anda?</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
            Konsultasi gratis, tanpa komitmen. Langsung chat WhatsApp kami
            untuk dapat penawaran terbaik.
          </p>
          <div className="mt-10 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-teal hover:bg-gray-100 shadow-xl text-lg px-10"
              >
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
