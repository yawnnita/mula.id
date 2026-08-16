import type { Stat, WhyUsFeature, Testimonial, TechStack } from "@/types";

/** Site statistics */
export const siteStats: Stat[] = [
  { label: "Projects Completed", value: "50", suffix: "+" },
  { label: "Client Satisfaction", value: "99", suffix: "%" },
  { label: "Years Experience", value: "1", suffix: "+" },
  { label: "Templates Available", value: "20", suffix: "+" },
];

/** Tech stack used to build websites */
export const techStack: TechStack[] = [
  { id: "ts1", name: "HTML", logo: "/images/tech/html.webp" },
  { id: "ts2", name: "CSS", logo: "/images/tech/css.webp" },
  { id: "ts3", name: "JavaScript", logo: "/images/tech/js.webp" },
  { id: "ts4", name: "Next js", logo: "/images/tech/next.webp" },
  { id: "ts5", name: "React js", logo: "/images/tech/react.webp" },
  { id: "ts6", name: "Tailwind CSS", logo: "/images/tech/tailwind.webp" },
  { id: "ts7", name: "Framer Motion", logo: "/images/tech/motion.webp" },
  { id: "ts8", name: "Figma", logo: "/images/tech/figma.webp" },
];

/** Client testimonials */
export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Andi Pratama",
    role: "CEO",
    company: "TechCorp Indonesia",
    avatar: "/images/avatar-1.jpg",
    content:
      "Bikin.In menghasilkan website yang luar biasa untuk bisnis kami. Prosesnya cepat, hasilnya profesional, dan harganya sangat terjangkau.",
    rating: 5,
  },
  {
    id: "test2",
    name: "Sari Dewi",
    role: "Marketing Director",
    company: "InnovateLab",
    avatar: "/images/avatar-2.jpg",
    content:
      "Website kami langsung naik di Google setelah pakai jasa Bikin.In. Traffik organik meningkat 300% dalam 6 bulan. Sangat recommended!",
    rating: 5,
  },
  {
    id: "test3",
    name: "Rizky Mahendra",
    role: "Founder",
    company: "StartupHub",
    avatar: "/images/avatar-3.jpg",
    content:
      "Dari awal konsultasi sampai launch, tim Bikin.In luar biasa. Mereka paham visi kami dan mewujudkannya jadi website yang cantik dan fungsional.",
    rating: 5,
  },
  {
    id: "test4",
    name: "Maya Putri",
    role: "Operations Manager",
    company: "GlobalFin",
    avatar: "/images/avatar-4.jpg",
    content:
      "Profesional, fast response, dan kreatif. Bikin.In jadi partner tetap kami untuk semua kebutuhan website. Konsisten dan selalu berkualitas.",
    rating: 5,
  },
];

/** Why choose us features */
export const whyUsFeatures: WhyUsFeature[] = [
  {
    title: "50+ Premium Templates",
    description: "Pilih dari koleksi template premium kami yang profesional dan modern.",
    icon: "Layout",
  },
  {
    title: "Free Hosting & Domain",
    description: "Gratis hosting dan domain di setiap proyek website.",
    icon: "Globe",
  },
  {
    title: "SEO Optimized",
    description: "Setiap website dibangun dengan SEO best practice untuk visibilitas maksimal.",
    icon: "Search",
  },
  {
    title: "24/7 Support via WhatsApp",
    description: "Tim support kami siap membantu kapan saja melalui WhatsApp.",
    icon: "Headphones",
  },
  {
    title: "Garansi Selamanya",
    description: "Kami menjamin kualitas semua proyek website yang kami buat.",
    icon: "Shield",
  },
  {
    title: "Fast Delivery",
    description: "Website Anda bisa online hanya dalam 3 hari kerja.",
    icon: "Zap",
  },
];
