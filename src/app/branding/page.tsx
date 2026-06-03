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
  BrandingCta
} from '@/components/branding';
import Pricing from '@/components/home/Pricing';
import ContactUs from '@/components/common/ContactUs';

const brandingPricingPlans = [
  {
    badge: 'Foundation',
    title: 'Brand Foundation',
    price: '799',
    interval: '/ Project',
    delivery: '2 – 3 Weeks*',
    featureGroups: [
      {
        header: 'Visual Identity',
        items: [
          { text: 'Logo design (primary + alternate mark)', isBold: true },
          { text: 'Brand color palette (5 colors)' },
          { text: 'Typography selection & pairing guide' }
        ]
      },
      {
        header: 'Collateral & Workshop',
        items: [
          { text: 'Business card & letterhead design', isBold: true },
          { text: 'Brand discovery workshop session' },
          { text: 'Final asset delivery (SVG, PNG, PDF)' }
        ]
      }
    ]
  },
  {
    badge: 'Identity',
    title: 'Brand Identity',
    price: '1,999',
    interval: '/ Project',
    delivery: '4 – 6 Weeks*',
    isHighlighted: true,
    featureGroups: [
      {
        header: 'Visual System',
        items: [
          { text: 'Everything in Brand Foundation' },
          { text: 'Full brand guidelines (30+ pages)', isBold: true },
          { text: 'Social media identity kit (12 templates)' },
          { text: 'Brand voice & messaging guide' }
        ]
      },
      {
        header: 'Packaging & Stationery',
        items: [
          { text: 'Packaging design (up to 2 variants)', isBold: true },
          { text: 'Custom pattern / texture design' },
          { text: 'Stationery suite (3 items)' },
          { text: 'Unlimited revision rounds' }
        ]
      }
    ]
  },
  {
    badge: 'System',
    title: 'Brand System',
    price: "Let's Talk",
    interval: '',
    delivery: 'Ongoing / Custom*',
    featureGroups: [
      {
        header: 'Strategy & Audit',
        items: [
          { text: 'Everything in Brand Identity' },
          { text: 'Brand strategy & market positioning', isBold: true },
          { text: 'Full competitor & audience audit' },
          { text: 'Motion design guidelines' }
        ]
      },
      {
        header: 'Direction & Support',
        items: [
          { text: 'Multi-product sub-brand architecture', isBold: true },
          { text: 'Campaign art direction' },
          { text: '30-day post-launch support' }
        ]
      }
    ]
  }
];

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
      <Pricing plans={brandingPricingPlans} currency="$" />

      {/* 9. Contact Us Form */}
      <ContactUs />

      {/* 10. Final CTA */}
      <BrandingCta data={data.cta} />
    </main>
  );
}
