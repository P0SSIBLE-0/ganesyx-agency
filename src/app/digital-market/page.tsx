import type { Metadata } from 'next';
import DigitalMarketHero from '@/components/digital-market/DigitalMarketHero';
import MarketMetrics from '@/components/digital-market/MarketMetrics';
import ContactUs from '@/components/common/ContactUs';
import BrandMarquee from '@/components/home/BrandMarquee';

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

export default function DigitalMarketPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* 1. Staggered Hero Section with 3D Background */}
      <DigitalMarketHero />
      <BrandMarquee />

      {/* 2. Key Business Growth Metrics Strip */}
      <MarketMetrics />


      {/* 3. Standard Contact Form Section */}
      <ContactUs id="contact" />
    </main>
  );
}

