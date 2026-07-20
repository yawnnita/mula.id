import type { Metadata } from "next";
import TemplateGrid from "@/components/templates/TemplateGrid";
import CTASection from "@/components/home/CTA";
import { templates } from "@/lib/data";

export const metadata: Metadata = {
  title: "Template Gallery",
  description:
    "Jelajahi koleksi template website profesional kami. Dari company profile hingga toko online, temukan template yang tepat untuk bisnis Anda.",
  keywords: [
    "template website",
    "galeri template",
    "template company profile",
    "template e-commerce",
    "template landing page",
  ],
};

/**
 * Templates page displaying the template gallery with category filtering.
 */
export default function TemplatesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-teal-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Galeri <span className="text-teal">Template</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Pilih dari koleksi template profesional kami.
              Setiap template bisa dikustom sesuai kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TemplateGrid templates={templates} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
