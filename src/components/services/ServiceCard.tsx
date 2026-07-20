"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Service } from "@/types";
import { fadeInUp } from "@/lib/animations";
import { whatsappUrl } from "@/lib/data";

/**
 * Individual service card displayed on the services page.
 * Shows service details, features list, pricing, and WhatsApp CTA.
 */
interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      id={service.slug}
    >
      <Card className="h-full flex flex-col relative overflow-hidden group">
        {service.popular && (
          <div className="absolute top-4 right-4">
            <Badge>Paling Populer</Badge>
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-teal transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            {service.description}
          </p>

          <ul className="space-y-3 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal/10 shrink-0">
                  <Check className="h-3 w-3 text-teal" />
                </div>
                <span className="text-sm text-charcoal-light">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-400">Mulai dari</span>
            <div className="text-2xl font-bold text-teal">{service.price}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-teal-dark transition-colors cursor-pointer">
              Pesan Sekarang
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
