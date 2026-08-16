import type { NavLink } from "@/types";

const WA_NUMBER = "628123456789";
export const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo%20Bikin.In%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.`;

/** Navigation links for main site */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
];
