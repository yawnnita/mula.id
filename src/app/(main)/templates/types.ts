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
