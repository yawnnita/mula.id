/** Service item type */
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
  image?: string;
  popular?: boolean;
}

/** Template/Portfolio item type */
export interface Template {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  demoUrl?: string;
  features: string[];
  price: string;
  popular?: boolean;
}

/** Testimonial type */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

/** Tech stack item type */
export interface TechStack {
  id: string;
  name: string;
  logo: string;
}

/** Contact form data type */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/** Navigation link type */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
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

/** Stats counter type */
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

/** Why Us feature type */
export interface WhyUsFeature {
  title: string;
  description: string;
  icon: string;
}
