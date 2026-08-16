"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layout,
  Palette,
  Code2,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { services } from "@/app/(main)/services/data";
import { whatsappUrl } from "@/lib/data";
import { staggerContainer, staggerChild } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Palette,
  Code2,
};

/**
 * Services overview section on the homepage.
 * Displays 3 service cards with icons, pricing, and CTAs.
 */
export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Pilih Paket yang Cocok"
          subtitle="Tiga opsi fleksibel sesuai kebutuhan dan budget bisnis Anda."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div key={service.id} variants={staggerChild}>
                <Card className="h-full flex flex-col relative">
                  {service.popular && (
                    <div className="absolute -top-3 right-4">
                      <Badge>Paling Populer</Badge>
                    </div>
                  )}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 mb-4">
                    <Icon className="h-7 w-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Mulai dari</span>
                      <div className="text-lg font-bold text-teal">{service.price}</div>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-teal transition-colors group">
                        Pesan
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              Lihat Semua Layanan
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
