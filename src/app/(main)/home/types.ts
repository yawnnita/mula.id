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
