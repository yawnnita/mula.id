"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { whatsappUrl } from "@/lib/data";
import type { ContactFormData } from "@/types";

/**
 * Contact form with validation and WhatsApp redirect sidebar.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format email tidak valid";
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const waText = encodeURIComponent(
        `Halo Bikin.In, saya ${formData.name}.\n\nPaket: ${formData.service || "-"}\nPesan: ${formData.message}\n\nEmail: ${formData.email}\nTelp: ${formData.phone || "-"}`
      );
      window.open(`https://wa.me/628123456789?text=${waText}`, "_blank");
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telepon", value: "+62 812-3456-789", href: "tel:+628123456789" },
    { icon: Mail, label: "Email", value: "info@bikin.in", href: "mailto:info@bikin.in" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat Langsung", href: whatsappUrl },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-12">
      {/* Form */}
      <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal/10 mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-teal" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">Terima Kasih!</h3>
            <p className="text-gray-500">Pesan Anda sudah dikirim via WhatsApp. Kami akan merespon segera.</p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
              }}
            >
              Kirim Pesan Lain
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Nama Lengkap *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  } focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50 focus:bg-white`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  } focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50 focus:bg-white`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="+62 812-3456-789"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                  Paket Yang Dipilih
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50 focus:bg-white"
                >
                  <option value="">Pilih paket</option>
                  <option value="template">Pakai Template (mulai Rp 800rb)</option>
                  <option value="semi-custom">Semi Custom (mulai Rp 1.5jt)</option>
                  <option value="full-custom">Full System Custom (Rp 7.5jt+)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                Pesan Anda *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.message ? "border-red-400" : "border-gray-200"
                } focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none`}
                placeholder="Ceritakan tentang project website yang Anda inginkan..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send className="h-5 w-5" />
              Kirim via WhatsApp
            </Button>
          </form>
        )}
      </motion.div>

      {/* Contact Info Sidebar */}
      <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
        <Card className="bg-charcoal text-white h-full">
          <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Isi formulir atau hubungi kami langsung via WhatsApp untuk
            konsultasi gratis dan penawaran harga terbaik.
          </p>
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 group-hover:bg-teal transition-colors shrink-0">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{info.label}</div>
                  <div className="text-sm font-medium">{info.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-teal hover:bg-teal-dark">
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp
              </Button>
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
