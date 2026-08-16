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
