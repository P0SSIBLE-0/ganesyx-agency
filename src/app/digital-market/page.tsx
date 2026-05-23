import type { Metadata } from 'next';
import DigitalMarketHero from '@/components/digital-market/DigitalMarketHero';
import ResultsSection from '@/components/common/ResultsSection';
import ProblemsStack from '@/components/digital-market/ProblemsStack';
import ServicesShowcase from '@/components/digital-market/ServicesShowcase';
import CaseStudies from '@/components/digital-market/CaseStudies';
import WhyChooseUs from '@/components/digital-market/WhyChooseUs';
import ContactUs from '@/components/common/ContactUs';
import BrandMarquee from '@/components/home/BrandMarquee';
import { DollarSign, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: "Digital Marketing Services | Ganesyx Agency",
  description: "Accelerate your brand growth with data-driven digital marketing campaigns. We build conversion funnels, manage high-ROAS paid ads, and scale organic channels to deliver measurable revenue compound.",
  keywords: [
    "Digital Marketing",
    "Paid Advertising",
    "Growth Marketing",
    "Conversion Rate Optimization",
    "Brand Scaling",
    "Ganesyx Agency"
  ],
};

const resultsCards = [
  {
    value: '$350+',
    label: 'Track how much revenue each qualified lead generates across your campaigns.',
    icon: <DollarSign size={20} strokeWidth={2.2} />,
    isFeatured: true,
  },
  {
    value: '8.46%',
    label: 'Rate at which leads turn into customers.',
    icon: <Users size={20} strokeWidth={2.2} />,
  },
  {
    value: '$1.8M',
    label: 'Output generated during this time frame.',
    icon: <Target size={20} strokeWidth={2.2} />,
  },
];

export default function DigitalMarketPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* 1. Staggered Hero Section with 3D Background */}
      <DigitalMarketHero />


      <BrandMarquee />

      {/* 2. Case Studies Success Stories Section */}
      <CaseStudies />

      {/* 3. Results Achieved Section */}
      <ResultsSection cards={resultsCards} />

      {/* 4. Problems Stacking Section */}
      <ProblemsStack />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Connected Services Showcase Section */}
      <ServicesShowcase />

      {/* 7. Standard Contact Form Section */}
      <ContactUs id="contact" />
    </main>
  );
}
