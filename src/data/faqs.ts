import { FaqItem } from './types';

export interface FAQCategory {
  id: string;
  label: string;
  description: string;
  items: FaqItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    label: 'General & Support',
    description: 'General questions about working with Ganesyx, our models, communication, and project starts.',
    items: [
      {
        question: 'How do I get started with Ganesyx?',
        answer: 'Simply reach out through our contact form or book a direct discovery call. We will discuss your high-level goals, evaluate technical requirements, and propose a tailored proposal with transparent pricing and timelines within 48 hours.'
      },
      {
        question: 'Do you require upfront payment?',
        answer: 'Typically, we structure project payments in milestones linked to deliverables: 30% upfront activation, 40% at midpoint approval, and 30% upon final sign-off and deployment. Retainer services are billed monthly in advance.'
      },
      {
        question: 'How do you structure project communication?',
        answer: 'We set up a dedicated Slack channel for day-to-day messaging, hold weekly video syncs to review progress, and provide access to a shared Notion/Trello board where you can see active task progress in real time. Transparency is our core value.'
      },
      {
        question: 'Where is your team located?',
        answer: 'Ganesyx is a remote-first digital agency. Our talent is distributed globally across multiple time zones, allowing us to maintain near-continuous project velocity, support, and responsiveness for international clients.'
      },
      {
        question: 'What happens if we need to adjust project scope mid-build?',
        answer: 'We adopt an agile methodology. If scope changes arise, we evaluate their impact on timeline and resources, document the adjustments transparently, and proceed once you approve. No rigid contracts, just collaborative adaptation.'
      }
    ]
  },
  {
    id: 'webdev',
    label: 'Web Development',
    description: 'Our development stack, server architecture, performance optimization, and site speeds.',
    items: [
      {
        question: 'What is your primary web development stack?',
        answer: 'We specialize in Next.js, React, TypeScript, and TailwindCSS for frontend interfaces, headless CMS platforms (like Sanity or Strapi) for content management, and robust backend integrations using Node.js, Express, Firebase, and Supabase.'
      },
      {
        question: 'How do you ensure websites are ultra-fast and search optimized?',
        answer: 'We enforce static site generation (SSG) and server-side rendering (SSR) strategies using Next.js, optimize all images dynamically, structure correct metadata schemas, and design lightweight DOM hierarchies. Our goal is 95+ scores on all Lighthouse audits.'
      },
      {
        question: 'Do you build custom client admin dashboards?',
        answer: 'Yes, absolutely. We design and build bespoke administrative dashboards using modern frontend stacks, allowing your team to securely manage inventory, review customer data, or publish content without technical friction.'
      },
      {
        question: 'How do you handle responsiveness and mobile viewports?',
        answer: 'We write mobile-first responsive code. Every grid structure, typographic element, and navigation slider is styled using fluid CSS systems (like clamp, min/max formulas, and grid fractions) to render pixel-perfectly on screens from smart watches to desktop monitors.'
      },
      {
        question: 'Can you rescue or audit an existing codebase?',
        answer: 'Yes. We regularly perform comprehensive codebase audits. We run security checks, profile loading bottlenecks, and refactor slow components to restore stability, speed, and safety to legacy systems.'
      }
    ]
  },
  {
    id: 'branding',
    label: 'Branding & Design',
    description: 'Visual identity creation, Figma developer handoffs, revisions, and brand assets.',
    items: [
      {
        question: 'How long does the branding process typically take?',
        answer: 'A comprehensive branding project takes between 4 to 8 weeks. This timeframe covers in-depth strategy research, moodboard workshops, logo conceptualization, color/typography rules creation, and final brand book documentation.'
      },
      {
        question: 'What deliverables are included in a brand system?',
        answer: 'You receive a complete visual system: primary and secondary logos, sub-marks, primary/secondary color schemes, typography rules, brand guidelines booklet, vector assets, and editable Figma source files.'
      },
      {
        question: 'How do design revisions work?',
        answer: 'We work in phase-specific iterations. We align closely on creative direction and benchmarks before designing. Once mockups are shared, you get collaborative review rounds to refine layouts and copy until you are fully satisfied.'
      },
      {
        question: 'Do you design for print assets as well as digital screens?',
        answer: 'Yes. We design high-quality digital assets (banner ads, social grids, presentation keynotes) and print-ready collateral (packaging, brochures, business cards, merchandise) prepared with CMYK color spaces and crop/bleed marks.'
      },
      {
        question: 'Can you work with our existing brand guidelines?',
        answer: 'Absolutely. If you have an established identity, we strictly adhere to your brand book rules, font licenses, and design spacing to produce materials that remain perfectly consistent with your existing assets.'
      }
    ]
  },
  {
    id: 'seo',
    label: 'SEO & GEO',
    description: 'Search rankings, Generative Engine Optimization (AI Search), and authority campaigns.',
    items: [
      {
        question: 'What is the difference between SEO and GEO?',
        answer: 'Search Engine Optimization (SEO) optimizes your site to rank highly on search engines like Google and Bing. Generative Engine Optimization (GEO) is a modern practice focused on optimizing your brand visibility in AI-powered search results like ChatGPT, Perplexity, and Google Gemini.'
      },
      {
        question: 'How long does it take to see organic traffic results?',
        answer: 'SEO is a compounding strategy. Initial technical optimizations and index fixes show results in 4 to 8 weeks, but sustainable organic authority and top-tier rankings for competitive keywords typically require 3 to 6 months of active content and link outreach.'
      },
      {
        question: 'Do you manage backlink acquisition and digital PR?',
        answer: 'Yes. We run ethical, high-quality backlink outreach campaigns. We write editorial articles, design embeddable resources, and connect with reputable publishers to acquire authoritative, relevant backlinks that raise your domain trust.'
      },
      {
        question: 'Can you help recover a site from ranking drops after algorithm updates?',
        answer: 'Yes. We perform core algorithm update recovery audits. We review quality markers, content depth, internal link distribution, and technical speed scores to diagnose drops and implement corrective content and index roadmaps.'
      }
    ]
  },
  {
    id: 'marketing',
    label: 'Paid Ads & Social',
    description: 'Paid search, conversion APIs, ad creative, and organic social growth.',
    items: [
      {
        question: 'Which paid advertising channels do you recommend?',
        answer: 'It depends on your audience. For high-intent capture (users looking to buy), we recommend Google Search and Shopping Ads. For visual discovery and demand generation, Meta (Facebook/Instagram), TikTok, and LinkedIn Ads generate the best returns.'
      },
      {
        question: 'How do you optimize ad campaign ROI?',
        answer: 'We implement Conversions API (CAPI) tracking to feedback accurate data, run persistent multivariate ad creative tests, optimize landing page loading and structure, and target specific lookalike audiences to drive down cost-per-acquisition (CPA).'
      },
      {
        question: 'Do you write the copy and build the ad creatives?',
        answer: 'Yes. Our copywriting, design, and video production teams collaborate directly under an ad strategist to produce all necessary ad copies, display banners, and vertical videos optimized for conversions.'
      },
      {
        question: 'What does your social media management include?',
        answer: 'We cover social strategy, content calendars, copywriting, custom graphic assets, community engagement (answering comments/inquiries), and comprehensive monthly performance analytics reporting across major social channels.'
      }
    ]
  },
  {
    id: 'video',
    label: 'Video Production',
    description: ' Kinetic typography, vertical format UGC, scriptwriting, and editing.',
    items: [
      {
        question: 'What is your typical turnaround time for video edits?',
        answer: 'Standard vertical UGC ad creative packs or kinetic social cut editing ranges between 2 to 3 weeks from script approval to final delivery, depending on graphical complexity.'
      },
      {
        question: 'What aspect ratios do you deliver?',
        answer: 'We deliver formatted files for all distribution channels: 9:16 vertical (for TikTok, Reels, YouTube Shorts), 1:1 square (standard social feed ads), and 16:9 horizontal (for website heroes or desktop YouTube placements).'
      },
      {
        question: 'Do you write scripts and design visual storyboards?',
        answer: 'Yes. We handle scriptwriting, hooks optimization, and storyboard planning. We align on visual structure and textual overlay concepts with you before recording or editing begins.'
      },
      {
        question: 'Can you edit raw video footage we provide?',
        answer: 'Absolutely. Many clients send us raw phone footage, product demos, or Zoom recordings. We add dynamic zoom-ins, typography layouts, color grading, and SFX to convert raw files into professional marketing assets.'
      }
    ]
  },
  {
    id: 'marketplace',
    label: 'Marketplaces & E-commerce',
    description: 'Shopify storefronts, WooCommerce setups, and Amazon listing optimization.',
    items: [
      {
        question: 'Which e-commerce platforms do you design and develop for?',
        answer: 'We develop fully customized storefronts on Shopify (using Liquid or Headless Hydrogen) and WooCommerce (WordPress). We focus on lightning-fast checkout experiences, custom cart functionality, and rich merchandising page layouts.'
      },
      {
        question: 'Do you help optimize marketplace listings like Amazon or Walmart?',
        answer: 'Yes. We design high-converting listing graphics, write SEO-optimized titles and bullet points, build custom A+ content blocks, and establish premium brand store designs to elevate your marketplace visibility.'
      },
      {
        question: 'Can you integrate ERP, shipping, and custom payment processors?',
        answer: 'Yes. We regularly connect storefronts to ERP systems, warehouse fulfillment services (like ShipBob), local shipping API modules, and custom payment gateways to automate operations.'
      }
    ]
  }
];
