import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyUsSection from "@/components/home/WhyUsSection";
import CTASection from "@/components/home/CTASection";
import { generateLocalBusinessSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export default function Home() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <SchemaMarkup schema={schema} />
      <HeroSection />
      <WhyUsSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
