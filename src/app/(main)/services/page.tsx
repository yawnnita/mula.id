import type { Metadata } from "next";
import ServiceCard from "@/components/services/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/home/CTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Pilih paket pembuatan website yang sesuai kebutuhan Anda: Pakai Template (Rp 100rb-600rb), Semi Custom (Rp 1.5jt-3.5jt), atau Full System Custom (Rp 7.5jt+).",
  keywords: [
    "jasa pembuatan website",
    "paket website murah",
    "template website",
    "custom website",
    "website profesional",
  ],
};

/**
 * Services page displaying 3 service tiers in a grid layout.
 */
export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-teal-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Pilih <span className="text-teal">Paket</span> Website Anda
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Tiga pilihan fleksibel untuk berbagai kebutuhan bisnis.
              Mulai dari yang paling hemat hingga full custom.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pertanyaan Umum"
            subtitle="Belum yakin? Temukan jawabannya di sini."
          />
          <div className="space-y-4">
            {[
              {
                q: "Berapa lama pengerjaan website?",
                a: "Untuk paket template: 3-5 hari kerja. Semi custom: 1-2 minggu. Full custom: 3-8 minggu tergantung kompleksitas.",
              },
              {
                q: "Apakah sudah termasuk hosting dan domain?",
                a: "Ya! Semua paket sudah termasuk gratis hosting 1 tahun, domain (.com/.id), dan SSL certificate.",
              },
              {
                q: "Bisa revisi berapa kali?",
                a: "Template: 2x revisi. Semi custom: 5x revisi. Full custom: unlimited revisi.",
              },
              {
                q: "Bagaimana cara pembayarannya?",
                a: "Pembayaran via transfer bank atau e-wallet. DP 50% di awal, sisanya setelah website selesai.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-6 group"
              >
                <summary className="font-semibold text-charcoal cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
