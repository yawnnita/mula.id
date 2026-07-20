import type { Service, Template, Testimonial, TechStack, Stat, WhyUsFeature, NavLink } from "@/types";

const WA_NUMBER = "628123456789";
export const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo%20Bikin.In%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.`;

/** Navigation links for main site */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
];

/** Site statistics */
export const siteStats: Stat[] = [
  { label: "Projects Completed", value: "2,500", suffix: "++" },
  { label: "Client Satisfaction", value: "99", suffix: "%" },
  { label: "Years Experience", value: "8", suffix: "+" },
  { label: "Templates Available", value: "50", suffix: "+" },
];

/** Services offered - 3 types only */
export const services: Service[] = [
  {
    id: "1",
    title: "Pakai Template",
    slug: "template",
    description:
      "Website profesional menggunakan template premium yang sudah kami siapkan. Cepat, murah, dan tetap terlihat menarik. Cocok untuk UMKM, landing page, atau company profile sederhana.",
    features: [
      "Pilihan 50+ Template Premium",
      "Responsive & Mobile Friendly",
      "SEO Basic Setup",
      "Gratis Hosting 1 Tahun",
      "Gratis Domain .com / .id",
      "SSL Certificate Gratis",
      "Revisi 2x",
      "Pengerjaan 3-5 Hari",
    ],
    price: "Rp 100,000 - 600,000",
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
      "Revisi 5x",
      "Pengerjaan 1-2 Minggu",
    ],
    price: "Rp 1,500,000 - 3,500,000",
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
    price: "Rp 7,500,000 +",
    icon: "Code2",
  },
];

/** Website templates */
export const templates: Template[] = [
  {
    id: "t1",
    title: "Starter Business",
    slug: "starter-business",
    category: "Company Profile",
    description: "Clean and professional template for startups and small businesses looking to establish their online presence.",
    image: "/images/template-1.jpg",
    features: ["Hero Section", "About Us", "Services", "Contact Form", "Responsive"],
    price: "Rp 150,000",
    popular: true,
  },
  {
    id: "t2",
    title: "Modern Agency",
    slug: "modern-agency",
    category: "Agency",
    description: "Bold and creative template designed for digital agencies and creative studios.",
    image: "/images/template-2.jpg",
    features: ["Portfolio Grid", "Team Section", "Testimonials", "Blog Ready", "Dark Mode"],
    price: "Rp 250,000",
  },
  {
    id: "t3",
    title: "E-Commerce Pro",
    slug: "ecommerce-pro",
    category: "E-Commerce",
    description: "Feature-rich e-commerce template with product catalog, cart, and checkout flow.",
    image: "/images/template-3.jpg",
    features: ["Product Grid", "Shopping Cart", "Checkout Flow", "Filter System", "Wishlist"],
    price: "Rp 350,000",
    popular: true,
  },
  {
    id: "t4",
    title: "Tech Startup",
    slug: "tech-startup",
    category: "SaaS",
    description: "Sleek template for SaaS companies and tech startups with pricing tables and feature showcases.",
    image: "/images/template-4.jpg",
    features: ["Pricing Tables", "Feature Showcase", "Integration Section", "FAQ Accordion", "CTA Sections"],
    price: "Rp 300,000",
  },
  {
    id: "t5",
    title: "Restaurant Elite",
    slug: "restaurant-elite",
    category: "Food & Beverage",
    description: "Appetizing template for restaurants, cafes, and food businesses with menu display.",
    image: "/images/template-5.jpg",
    features: ["Menu Display", "Reservation Form", "Gallery", "Location Map", "Online Ordering"],
    price: "Rp 200,000",
  },
  {
    id: "t6",
    title: "Health Clinic",
    slug: "health-clinic",
    category: "Healthcare",
    description: "Trust-building template for clinics, doctors, and healthcare providers.",
    image: "/images/template-6.jpg",
    features: ["Doctor Profiles", "Service List", "Appointment Booking", "Testimonials", "Health Blog"],
    price: "Rp 250,000",
  },
];

/** Tech stack used to build websites */
export const techStack: TechStack[] = [
  { id: "ts1", name: "HTML5", logo: "/images/tech/html5.svg" },
  { id: "ts2", name: "CSS3", logo: "/images/tech/css3.svg" },
  { id: "ts3", name: "JavaScript", logo: "/images/tech/javascript.svg" },
  { id: "ts4", name: "React", logo: "/images/tech/react.svg" },
  { id: "ts5", name: "Vue.js", logo: "/images/tech/vuejs.svg" },
  { id: "ts6", name: "Next.js", logo: "/images/tech/nextjs.svg" },
  { id: "ts7", name: "Tailwind CSS", logo: "/images/tech/tailwindcss.svg" },
  { id: "ts8", name: "Figma", logo: "/images/tech/figma.svg" },
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
