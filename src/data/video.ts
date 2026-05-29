import { ServicePageData } from './types';

export interface OfferingItem {
  id: string;
  title: string;
  description: string;
}

export const videoOfferings: OfferingItem[] = [
  { id: '01', title: 'EXPLAINERS', description: 'Complex ideas made simple, engaging, and easy to understand.' },
  { id: '02', title: 'PRODUCT VIDEOS', description: "Showcase your product's value, features, and utility in action." },
  { id: '03', title: 'REELS / SHORTS', description: 'Snappy, high-retention vertical content engineered for organic reach.' },
  { id: '04', title: 'AD CREATIVES', description: 'Scroll-stopping assets optimized for performance marketing and conversions.' },
  { id: '05', title: 'TESTIMONIALS', description: 'Build trust with high-fidelity customer stories and social proof.' },
  { id: '06', title: 'MOTION GRAPHICS', description: 'Dynamic animation, kinetic type, and visual elements that pop.' },
  { id: '07', title: 'BRAND FILMS', description: 'High-production narratives that establish your brand identity.' }
];

export const videoData: ServicePageData = {
  id: 'video',
  name: 'Video Production & Ad Creative',
  hero: {
    preHeading: 'VIDEO & CREATIVE',
    title: 'Videos that stop the scroll and explain the value fast.',
    highlightedText: 'stop the scroll',
    description: 'We create brand videos, ad creatives, and short-form content designed for attention and action.',
    primaryCta: {
      text: "Let's Tell Your Story",
      href: '#contact',
    },
    secondaryCta: {
      text: 'Watch Reel',
      href: '#reel',
    },
  },
  problem: {
    title: 'Attention Span is at an All-Time Low.',
    description: 'If you fail to hook the user in the first 3 seconds, they are gone forever. Generic videos waste budget and kill conversions.',
    items: [
      {
        id: '01',
        title: 'High Drop-Off Rates',
        description: 'Viewers drop off before you make your pitch. You are losing potential buyers because your hook is too slow.',
      },
      {
        id: '02',
        title: 'Unoptimized Ad Spend',
        description: 'Paying for impressions but getting no clicks. Unengaging creatives mean high CPMs and negative ROI.',
      },
      {
        id: '03',
        title: 'Dull Explainer Videos',
        description: 'Explaining features instead of benefits. If your product demo is boring, customers assume your product is too.',
      },
    ],
  },
  deliverables: {
    includes: [
      {
        title: 'Brand Anthem Videos',
        description: 'High-production brand stories that establish emotional connection and build long-term trust.',
      },
      {
        title: 'Direct Response Ads',
        description: 'Scroll-stopping ads engineered specifically to generate leads and sales on Meta, TikTok, and YouTube.',
      },
      {
        title: 'Product Walkthroughs',
        description: 'Sleek explainer videos showing your software or physical product in action clearly and beautifully.',
      },
    ],
    gets: [
      {
        title: 'Full Scriptwriting & Storyboards',
        description: 'Strategic scripting focused on hooks, core value propositions, and clear CTAs.',
      },
      {
        title: 'Professional Editing & Motion Graphics',
        description: 'Dynamic pacing, custom transitions, sound design, and premium typography overlay.',
      },
    ],
  },
  process: [
    {
      phase: 'Phase 01',
      title: 'Scripting & Strategy',
      description: 'We map out the hook, the pitch, and the CTA, writing copy that converts.',
    },
    {
      phase: 'Phase 02',
      title: 'Storyboarding',
      description: 'Creating visual outlines to plan every transition, frame, and graphical callout.',
    },
    {
      phase: 'Phase 03',
      title: 'Editing & Sound Design',
      description: 'Pacing the footage dynamically with premium sound effects, music, and voiceover.',
    },
    {
      phase: 'Phase 04',
      title: 'Motion & Delivery',
      description: 'Overlaying clean text animations, subtitles, and branding before final delivery in multiple aspect ratios.',
    },
  ],
  proof: {
    title: 'Scroll-Stoppers in Action',
    before: 'Viewers scrolling past, average watch time under 2 seconds, high ad fatigue.',
    after: 'Hooking viewers instantly, average watch time 18s+, 45% reduction in customer acquisition cost.',
    testimonial: {
      quote: 'The ad creatives Ganesyx produced transformed our performance campaigns. Our CTR jumped by 180% and we finally have creatives that represent our brand beautifully.',
      author: 'Evelyn Reed',
      role: 'Head of Growth at Veloce Soft',
    },
    mockups: [],
  },
  faq: [
    {
      question: 'What is your typical turnaround time for video projects?',
      answer: 'Typically, a standard ad creative pack or brand video takes between 2 to 4 weeks from script approval to final edit delivery.',
    },
    {
      question: 'What aspect ratios do you deliver?',
      answer: 'We deliver in all formats required for modern campaigns: 9:16 (vertical for TikTok/Reels), 1:1 (square), and 16:9 (horizontal for YouTube/Websites).',
    },
    {
      question: 'Do you provide scriptwriting and storyboarding services?',
      answer: 'Yes, every project includes full strategy, scriptwriting, and visual storyboards before we start editing or production to ensure alignment.',
    },
    {
      question: 'Can you work with our existing raw footage?',
      answer: 'Absolutely. We can take your existing raw footage, product demos, or raw recordings and edit them into highly polished, scroll-stopping creatives.',
    },
    {
      question: 'What is your revision process?',
      answer: 'Every project package includes two comprehensive rounds of revisions to tweak pacing, graphical overlays, music choices, and copy callouts to your satisfaction.',
    },
  ],
  cta: {
    title: 'Stop the scroll. Start converting.',
    description: 'Transform your marketing campaigns with production-oriented videos built for attention and action.',
    primaryCta: {
      text: 'Get A Quote',
      href: '/contact#consultation',
    },
  },
};
