import DesignHero from "@/components/design/DesignHero";
import WhatWeDesign from "@/components/design/WhatWeDesign";
import WorkMarqueeSection from "@/components/design/WorkMarqueeSection";
import WhyItMatters from "@/components/design/WhyItMatters";
import ClientSuccessMetrics from "@/components/design/ClientSuccessMetrics";
import DesignProcess from "@/components/design/DesignProcess";
import { BrandingFaq } from "@/components/branding";
import { designFaq } from "@/data/design";
import CtaSection from "@/components/common/CtaSection";

export const metadata = {
  title: "Premium Design Services | Ganesyx Agency",
  description: "Graphics that make your brand look premium everywhere. We design marketing visuals that are clean, consistent, and built to grab attention.",
};

export default function DesignPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen w-full">
      <DesignHero />
      <WhatWeDesign />
      <WorkMarqueeSection />
      <WhyItMatters />
      <ClientSuccessMetrics />
      <DesignProcess />
      <BrandingFaq data={designFaq} />
      <CtaSection />
    </main>
  );
}
