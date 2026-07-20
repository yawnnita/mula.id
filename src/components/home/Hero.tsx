"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { siteStats, whatsappUrl } from "@/lib/data";

/**
 * Hero section with animated headline, CTA buttons, stats counter, and gradient background.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-teal-50/50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm font-medium text-teal">
                Jasa Pembuatan Website #1
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-charcoal leading-[1.1]">
              Bikin Website
              <span className="block text-teal">Impian</span>
              <span className="block">Sekarang</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
              Kami bantu wujudkan website profesional untuk bisnis Anda.
              Murah, cepat, dan berkualitas. Mulai dari Rp 100.000.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Mulai Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/templates">
                <Button variant="outline" size="lg">
                  Lihat Template
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {siteStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-charcoal">
                    {stat.value}
                    <span className="text-teal">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal to-teal-dark p-1 shadow-2xl">
              <div className="rounded-2xl bg-white p-2">
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                        bikin.in
                      </div>
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-6">
                    <div className="space-y-4">
                      <div className="h-8 bg-teal/20 rounded-lg w-1/3" />
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="aspect-square bg-teal/10 rounded-lg" />
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <div className="h-8 bg-teal rounded-lg w-24" />
                        <div className="h-8 bg-gray-200 rounded-lg w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <Play className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal">Lihat Demo</div>
                  <div className="text-xs text-gray-400">2:30 min</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-teal/20" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-charcoal">2,500+</div>
                <div className="text-xs text-gray-400">Proyek</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
