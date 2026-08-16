export type { Stat, WhyUsFeature, Testimonial, TechStack } from "@/app/(main)/home/types";
export type { Service } from "@/app/(main)/services/types";
export type { Template } from "@/app/(main)/templates/types";

import type { Service } from "@/app/(main)/services/types";
import type { Template } from "@/app/(main)/templates/types";

/** Navigation link type */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/** Contact form data type */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/** CMS Service type (with admin fields) */
export interface CMSService extends Service {
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

/** CMS Template type (with admin fields) */
export interface CMSTemplate extends Template {
  createdAt: string;
  updatedAt: string;
  published: boolean;
}
