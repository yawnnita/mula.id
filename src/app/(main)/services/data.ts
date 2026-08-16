import type { Service } from "@/types";

/** Services offered - 3 types only */
export const services: Service[] = [
  {
    id: "1",
    title: "Pakai Template",
    slug: "template",
    description:
      "Website profesional menggunakan template premium yang sudah kami siapkan. Cepat, murah, dan tetap terlihat menarik. Cocok untuk UMKM, landing page, atau company profile sederhana.",
    features: [
      "Pilihan 10+ Template Premium",
      "Responsive & Mobile Friendly",
      "SEO Basic Setup",
      "Gratis Hosting 1 Tahun",
      "Gratis Domain .com / .id",
      "SSL Certificate Gratis",
      "Revisi 1x",
      "Pengerjaan 3-5 Hari Kerja",
    ],
    price: "Rp 1,000,000",
    icon: "Layout",
  },
  {
    id: "2",
    title: "Semi Custom",
    slug: "semi-custom",
    description:
      "Desain disesuaikan dengan kebutuhan bisnis Anda dengan sentuhan kustom. Cocok untuk perusahaan yang butuh tampilan lebih personal namun tetap efisien.",
    features: [
      "Desain Kustom Sesuai Brand",
      "UI/UX Profesional",
      "Responsive & Mobile First",
      "SEO Advanced Setup",
      "Gratis Hosting 1 Tahun",
      "Gratis Domain & SSL",
      "CMS untuk Kelola Konten",
      "Revisi 3x",
      "Pengerjaan 1-2 Minggu",
    ],
    price: "Rp 2,000,000",
    icon: "Palette",
    popular: true,
  },
  {
    id: "3",
    title: "Full System Custom",
    slug: "full-custom",
    description:
      "Website dan sistem lengkap dibangun dari nol sesuai kebutuhan spesifik bisnis Anda. Fitur unlimited, arsitektur scalable, dan fully tailored.",
    features: [
      "Arsitektur dari Nol",
      "Desain UI/UX Eksklusif",
      "Fitur Sesuai Kebutuhan",
      "Database & API Custom",
      "User Authentication System",
      "Dashboard Admin Lengkap",
      "Integrasi Payment Gateway",
      "Revisi Unlimited",
      "Maintenance 3 Bulan Gratis",
      "Pengerjaan 3-8 Minggu",
    ],
    price: "Rp 7,500,000",
    icon: "Code2",
  },
];
