import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { templates } from "@/lib/data";

// Company Profile
import StarterBusinessLanding from "@/components/templates/landing/StarterBusinessLanding";
import MinimalCorporateLanding from "@/components/templates/landing/MinimalCorporateLanding";
import CreativeStudioLanding from "@/components/templates/landing/CreativeStudioLanding";
import EnterpriseCorpLanding from "@/components/templates/landing/EnterpriseCorpLanding";

// Agency
import ModernAgencyLanding from "@/components/templates/landing/ModernAgencyLanding";
import MarketingHubLanding from "@/components/templates/landing/MarketingHubLanding";
import DigitalAgencyLanding from "@/components/templates/landing/DigitalAgencyLanding";
import BrandStudioLanding from "@/components/templates/landing/BrandStudioLanding";

// E-Commerce
import ECommerceProLanding from "@/components/templates/landing/ECommerceProLanding";
import FashionStoreLanding from "@/components/templates/landing/FashionStoreLanding";
import TechMarketplaceLanding from "@/components/templates/landing/TechMarketplaceLanding";
import OrganicMarketLanding from "@/components/templates/landing/OrganicMarketLanding";

// SaaS
import TechStartupLanding from "@/components/templates/landing/TechStartupLanding";
import AnalyticsDashboardLanding from "@/components/templates/landing/AnalyticsDashboardLanding";
import ProjectManagerLanding from "@/components/templates/landing/ProjectManagerLanding";
import CrmPlatformLanding from "@/components/templates/landing/CrmPlatformLanding";

// Food & Beverage
import RestaurantEliteLanding from "@/components/templates/landing/RestaurantEliteLanding";
import CoffeeShopLanding from "@/components/templates/landing/CoffeeShopLanding";
import BakerySweetsLanding from "@/components/templates/landing/BakerySweetsLanding";
import BarGrillLanding from "@/components/templates/landing/BarGrillLanding";

// Healthcare
import HealthClinicLanding from "@/components/templates/landing/HealthClinicLanding";
import DentalCareLanding from "@/components/templates/landing/DentalCareLanding";
import PharmaPlusLanding from "@/components/templates/landing/PharmaPlusLanding";
import WellnessCenterLanding from "@/components/templates/landing/WellnessCenterLanding";

const landingPages: Record<string, React.ComponentType> = {
  // Company Profile
  "starter-business": StarterBusinessLanding,
  "minimal-corporate": MinimalCorporateLanding,
  "creative-studio": CreativeStudioLanding,
  "enterprise-corp": EnterpriseCorpLanding,

  // Agency
  "modern-agency": ModernAgencyLanding,
  "marketing-hub": MarketingHubLanding,
  "digital-agency": DigitalAgencyLanding,
  "brand-studio": BrandStudioLanding,

  // E-Commerce
  "ecommerce-pro": ECommerceProLanding,
  "fashion-store": FashionStoreLanding,
  "tech-marketplace": TechMarketplaceLanding,
  "organic-market": OrganicMarketLanding,

  // SaaS
  "tech-startup": TechStartupLanding,
  "analytics-dashboard": AnalyticsDashboardLanding,
  "project-manager": ProjectManagerLanding,
  "crm-platform": CrmPlatformLanding,

  // Food & Beverage
  "restaurant-elite": RestaurantEliteLanding,
  "coffee-shop": CoffeeShopLanding,
  "bakery-sweets": BakerySweetsLanding,
  "bar-grill": BarGrillLanding,

  // Healthcare
  "health-clinic": HealthClinicLanding,
  "dental-care": DentalCareLanding,
  "pharma-plus": PharmaPlusLanding,
  "wellness-center": WellnessCenterLanding,
};

interface TemplateDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) return { title: "Template Not Found" };

  return {
    title: `${template.title} - Template Preview`,
    description: template.description,
  };
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) notFound();

  const LandingPage = landingPages[slug];

  return (
    <div>
      <Link
        href="/templates"
        className="fixed top-4 left-4 z-[100] inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-sm text-gray-600 hover:text-teal px-4 py-2 rounded-full shadow-md border border-gray-200 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali
      </Link>

      {LandingPage ? <LandingPage /> : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{template.title}</h1>
            <p className="text-gray-500">Landing page preview coming soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}
