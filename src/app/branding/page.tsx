'use client';

import { brandingData } from '@/data/branding';
import {
  BrandingHero,
  BrandingProjects,
  BrandingGallery,
  BrandingTrust,
  BrandingTrustIntro,
  BrandingBento,
  BrandingTestimonials,
  BrandingFaq,
  BrandingPricing,
  BrandingCta
} from '@/components/branding';
import ContactUs from '@/components/common/ContactUs';

export default function BrandingPage() {
  const data = brandingData;

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* 1. Hero */}
      <BrandingHero />

      {/* 2. Featured Projects Marquee */}
      <BrandingProjects />

      {/* 3. Brand Gallery Carousel */}
      <BrandingGallery />

      {/* 5. Trust Intro Title with Morphing Text */}
      <BrandingTrustIntro />
      {/* 4. Brand Trust Typing & Gradient section */}
      <BrandingTrust />


      {/* 6. What We Build — Bento */}
      <BrandingBento />

      {/* 6. Testimonials */}
      <BrandingTestimonials />

      {/* 7. FAQ */}
      <BrandingFaq data={data.faq} />

      {/* 8. Pricing */}
      <BrandingPricing />

      {/* 9. Contact Us Form */}
      <ContactUs />

      {/* 10. Final CTA */}
      <BrandingCta data={data.cta} />
    </main>
  );
}
