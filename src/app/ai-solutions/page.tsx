// app/ai-solutions/page.tsx
import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { AISolutionsHeroSection } from "@/components/Hero/AISolutionsHeroSection";
import { AISolutionsCatalogueSection } from "@/components/Sections/AISolutionsSections/AISolutionsCatalogueSection";
import { CTASection } from "@/components/Sections/CTASection/CTASection";
import { buildMetadata } from "@/lib/seo";
import { jsonLdScriptProps, breadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = buildMetadata({
  title: "AI Solutions for Businesses | AI Automation & AI Systems | ERIN",
  description:
    "Explore practical AI solutions for customer support, sales, operations, HR, research, legal, healthcare, real estate, hospitality and more. Built around your organisation and existing workflows.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Solutions", path: "/ai-solutions" },
          ])
        )}
      />
      <AISolutionsHeroSection />
      <AISolutionsCatalogueSection />
      <CTASection variant="default" />
      <Footer />
    </div>
  );
}
