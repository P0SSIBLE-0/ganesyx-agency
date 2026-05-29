import GeoHero from '@/components/geo/GeoHero';
import WhatIsGeo from '@/components/geo/WhatIsGeo';
import GeoWhy from '@/components/geo/GeoWhy';
import GeoProblem from '@/components/geo/GeoProblem';
import GeoHow from '@/components/geo/GeoHow';
import GeoProcess from '@/components/geo/GeoProcess';
import GeoTracking from '@/components/geo/GeoTracking';
import GeoIndustries from '@/components/geo/GeoIndustries';
import { BrandingFaq } from '@/components/branding';
import { FaqItem } from '@/data/types';
import type { Metadata } from 'next';
import ContactUs from '@/components/common/ContactUs';
import CtaSection from '@/components/common/CtaSection';

export const metadata: Metadata = {
  title: "GEO Services | Ganesyx Agency - Optimize for AI Search & Engines",
  description: "Improve visibility, recommendations, and citation share across AI conversational search models, including ChatGPT, Google Gemini, Claude, and Perplexity.",
  keywords: ["GEO Services", "Generative Engine Optimization", "LLM Optimization", "AI Search Visibility", "RAG Pipeline Tuning", "ChatGPT Citation building", "Gemini Visibility Index"],
};

const geoFaq: FaqItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "Generative Engine Optimization (GEO) is the process of optimizing website content, structures, and trust signals to ensure your brand is cited and recommended in AI-generated answers on platforms like ChatGPT, Google Gemini, Claude, and Perplexity."
  },
  {
    question: "How does GEO differ from traditional SEO?",
    answer: "While traditional SEO focuses on ranking blue links on search engine result pages (SERPs) by keyword density and backlinks, GEO focuses on structured entity relevance, conversational context, topical authority depth, and references within RAG (Retrieval-Augmented Generation) pipelines."
  },
  {
    question: "What is a RAG pipeline and why does it matter?",
    answer: "Retrieval-Augmented Generation (RAG) is the method AI models use to fetch external, verified documents to ground their answers in fact. Optimization ensures that your content is formatted and structured correctly to be pulled into these context windows."
  },
  {
    question: "How do you measure GEO visibility?",
    answer: "We measure your visibility through brand citation rate (how often your brand is mentioned when a query is run), semantic sentiment (positive/neutral framing of suggestions), and database co-occurrence indices on target AI engines."
  },
  {
    question: "How long does it take to see results from GEO?",
    answer: "Since LLMs are periodically retrained or updated via live web browsing integrations (like ChatGPT Search or Gemini Live Search), entity-level optimizations can show impact within a few weeks, while deep semantic authority alignment builds over 2-3 months."
  },
  {
    question: "Do we still need traditional SEO if we do GEO?",
    answer: "Yes. Traditional SEO forms the technical foundation (fast load speeds, mobile friendliness, indexability) that search crawlers require. GEO builds on top of this by preparing that indexed content for conversational AI parsing."
  }
];

export default function GeoPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Dynamic Conversational Hero Visual */}
      <GeoHero />

      {/* What Is GEO Comparative Explanation Section */}
      <WhatIsGeo />

      {/* Why GEO Matters Section */}
      <GeoWhy />

      {/* The Problem Section */}
      <GeoProblem />

      {/* How AI Search Works Section */}
      <GeoHow />

      {/* GEO Process Section */}
      <GeoProcess />

      {/* GEO Tracking & Reporting Section */}
      <GeoTracking />

      {/* GEO Industries Section */}
      <GeoIndustries />

      {/* FAQ Section */}
      <BrandingFaq data={geoFaq} />

      <CtaSection />
      <ContactUs />
    </main>
  );
}
