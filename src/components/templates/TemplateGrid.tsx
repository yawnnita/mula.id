"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, Tag } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Template } from "@/types";
import { staggerContainer, staggerChild } from "@/lib/animations";

const categories = ["All", "Company Profile", "Agency", "E-Commerce", "SaaS", "Food & Beverage", "Healthcare"];

interface TemplateGridProps {
  templates: Template[];
}

export default function TemplateGrid({ templates }: TemplateGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-teal text-white shadow-md"
                : "bg-gray-100 text-charcoal-light hover:bg-teal-50 hover:text-teal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filtered.map((template) => (
            <motion.div
              key={template.id}
              variants={staggerChild}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Link href={`/templates/${template.slug}`} className="block h-full">
                <Card padding="none" className="h-full flex flex-col overflow-hidden group">
                  {/* Image / Preview */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-teal-50 to-teal-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-16 w-16 mx-auto rounded-2xl bg-teal/10 flex items-center justify-center mb-2">
                          <Eye className="h-8 w-8 text-teal/40" />
                        </div>
                        <span className="text-sm text-teal/40 font-medium">{template.title}</span>
                      </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-gray-100">
                        <Tag className="h-3.5 w-3.5 text-teal" />
                        <span className="text-sm font-bold text-charcoal">{template.price}</span>
                      </div>
                    </div>

                    {/* Popular badge */}
                    {template.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge>Popular</Badge>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <span className="h-12 w-12 rounded-full bg-white text-teal flex items-center justify-center hover:scale-110 transition-transform">
                        <Eye className="h-5 w-5" />
                      </span>
                      {template.demoUrl && (
                        <span
                          className="h-12 w-12 rounded-full bg-white text-teal flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="gray">{template.category}</Badge>
                      <span className="text-lg font-bold text-teal">{template.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-teal transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {template.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs px-2 py-1 rounded-md bg-gray-50 text-gray-500"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
