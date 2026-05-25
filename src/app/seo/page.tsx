import type { Metadata } from 'next';
import { SeoHero, SeoWorkflow, SeoInsights } from '@/components/seo';
import ServiceCapabilities, { CapabilityItem } from '@/components/ui/ServiceCapabilities';
import ServiceWhy, { WhyItem } from '@/components/ui/ServiceWhy';
import ContactUs from '@/components/common/ContactUs';

export const metadata: Metadata = {
  title: "SEO Services | Ganesyx Agency - Grow Organic Search Visibility",
  description: "Improve your organic search rankings, attract qualified traffic, and drive measurable revenue growth with technical audits, content strategies, and authority building.",
  keywords: ["SEO Services", "Search Engine Optimization", "Technical SEO Audit", "Content Strategy", "Authority Building", "Organic Search Traffic"],
};

const seoCapabilities: CapabilityItem[] = [
  {
    number: "01",
    title: "Technical SEO",
    description: "Optimizing code and server architecture to ensure search engine crawlers index your site efficiently.",
    iconName: "settings",
    details: [
      "Core Web Vitals & page speed tuning",
      "Structured data & schema markup injection",
      "Site structure & crawl budget management"
    ]
  },
  {
    number: "02",
    title: "On-Page SEO",
    description: "Aligning individual page elements to match user search intent and target search phrases precisely.",
    iconName: "fileText",
    details: [
      "Title tags, meta descriptions, and header tuning",
      "Keyword mapping & search intent matching",
      "URL structure design & internal link trees"
    ]
  },
  {
    number: "03",
    title: "Content Optimization",
    description: "Refining editorial assets to satisfy query relevance, search depth, and modern readability standards.",
    iconName: "sparkles",
    details: [
      "Semantic content audits & topic gap analysis",
      "Readability, format optimization, and NLP optimization",
      "E-E-A-T guideline styling & structural updates"
    ]
  },
  {
    number: "04",
    title: "Local SEO",
    description: "Boosting search visibility for localized intents and geographically targeted audiences.",
    iconName: "mapPin",
    details: [
      "Google Business Profile setup & optimization",
      "Local citation sync & directory listing audits",
      "Location-specific page generation & targeting"
    ]
  },
  {
    number: "05",
    title: "Link Strategy",
    description: "Developing a premium profile of high-quality backlinks to bolster domain trustworthiness.",
    iconName: "link2",
    details: [
      "Editorial link building & targeted guest outreach",
      "Unlinked brand mentions & broken link recovery",
      "High-value resource asset ideation & design"
    ]
  },
  {
    number: "06",
    title: "SEO Audits",
    description: "Comprehensive deep-dives to uncover barriers preventing organic search growth.",
    iconName: "activity",
    details: [
      "Full site crawlers indexing checks & error logs",
      "Competitor organic share-of-voice benchmarks",
      "Actionable roadmap prioritized by impact"
    ]
  }
];

const whySeoItems: WhyItem[] = [
  {
    title: "Paid ads stop when budget stops",
    description: "PPC campaigns drive instant traffic, but the moment your budget runs dry, your visibility goes to zero. SEO creates a permanent digital asset that generates traffic 24/7 without a cost-per-click.",
    iconName: "trendingDown"
  },
  {
    title: "Organic traffic compounds",
    description: "Unlike advertising where cost scales linearly with traffic, SEO value compounds. The authority built today serves as a foundation that makes ranking future content easier and cheaper over time.",
    iconName: "trendingUp"
  },
  {
    title: "Better ranking improves trust",
    description: "Users naturally trust organic search results over sponsored banners. Ranking in top positions signals credibility, authority, and industry leadership, increasing conversion rates.",
    iconName: "shieldCheck"
  },
  {
    title: "More qualified leads over time",
    description: "By targeting high-intent search terms, you attract users actively seeking your solutions. These visitors convert at a significantly higher rate than generic social media ads.",
    iconName: "users"
  }
];

export default function SeoPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Crisp White Section with Brand-colored Interactive Dashboard */}
      <SeoHero />

      {/* Dynamic Dark Section with Real-Time Content Score speedometer & SEO Checklist */}
      <SeoInsights />

      {/* Soft Tinted Section with Crisp White Cards */}
      <ServiceCapabilities
        subHeading="What We Do"
        title="Comprehensive SEO capabilities tailored for quality growth."
        description="We tackle search engine optimization from every angle—ensuring technical health, high-value content optimization, and authoritative backlink profiles to deliver sustainable organic revenue."
        items={seoCapabilities}
        backgroundColor="#f6f5fb" /* Soft brand lavender tint */
      />

      {/* Value Proposition Section with Sharp-Border Grid Layout */}
      <ServiceWhy
        subHeading="The Case for Organic Search"
        title="Why businesses need a compounding traffic strategy."
        description="Traditional advertising is transactional; search engine optimization is an investment. Establish authority that builds permanent value month over month."
        items={whySeoItems}
      />

      {/* Custom Stepper Workflow Section matching the beige design layout */}
      <SeoWorkflow />

      {/* Contact CTA Section */}
      <ContactUs />
    </main>
  );
}
