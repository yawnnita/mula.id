import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Bikin.In untuk konsultasi gratis, request penawaran harga, atau tanyakan layanan pembuatan website kami.",
  keywords: [
    "hubungi bikin.in",
    "konsultasi website",
    "penawaran harga website",
    "chat whatsapp",
  ],
};

/**
 * Contact page with a form and contact information sidebar.
 * Form submissions redirect to WhatsApp.
 */
export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-teal-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Hubungi <span className="text-teal">Kami</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Punya project website? Isi form di bawah atau chat langsung
              via WhatsApp. Konsultasi gratis!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
