import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import Clients from "@/components/home/Clients";
import CTASection from "@/components/home/CTA";

/**
 * Home page - the main landing page of the website.
 * Composes all home sections in order: Hero, Services, Process, Why Us, Testimonials, Clients, CTA.
 *
 * SEO metadata is defined here for the home page.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <WhyUs />
      <Testimonials />
      <Clients />
      <CTASection />
    </>
  );
}
