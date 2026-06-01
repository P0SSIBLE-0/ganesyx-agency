import { ServicePageData } from './types';

export interface BrandingTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface BrandingStat {
  value: string;
  label: string;
}

export interface BrandingService {
  title: string;
  description: string;
  icon: string;
  span?: 'wide' | 'tall' | 'default';
}

export interface BrandingShowcaseProject {
  id: string;
  client: string;
  category: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
}

export const brandingServices: BrandingService[] = [
  {
    title: 'Brand Strategy',
    description: 'Deep market positioning, audience mapping, and competitive intelligence that forms the strategic foundation of your visual identity.',
    icon: '◆',
    span: 'wide',
  },
  {
    title: 'Visual Identity',
    description: 'Complete aesthetic systems incorporating visual hierarchy, imagery style, and cohesive brand direction.',
    icon: '◎',
  },
  {
    title: 'Logo Systems',
    description: 'Custom responsive marks — primary, secondary, and sub-marks — designed for every media scale.',
    icon: '✦',
  },
  {
    title: 'Typography Direction',
    description: 'Curated typeface pairings with hierarchy rules that define your brand\'s verbal tone visually.',
    icon: '▣',
    span: 'tall',
  },
  {
    title: 'Color Systems',
    description: 'Strategic palettes with accessibility checks, dark/light variants, and gradient definitions.',
    icon: '●',
  },
  {
    title: 'Packaging Design',
    description: 'Physical product packaging that translates digital identity into tactile brand experiences.',
    icon: '□',
    span: 'wide',
  },
  {
    title: 'Social Identity',
    description: 'Template systems for Instagram, LinkedIn, and TikTok that maintain brand consistency at scale.',
    icon: '◇',
  },
  {
    title: 'Brand Guidelines',
    description: 'Comprehensive digital rulebooks mapping logo usage, spacing, grids, voice, and visual rules.',
    icon: '▲',
  },
  {
    title: 'Creative Direction',
    description: 'High-level art direction for campaigns, photoshoots, and content creation that stays on-brand.',
    icon: '★',
  },
];

export const brandingShowcaseProjects: BrandingShowcaseProject[] = [
  {
    id: '01',
    client: 'Kanishk Oil',
    category: 'FMCG Branding',
    description: 'Complete brand identity system for a premium mustard oil brand, including custom typography, packaging, and retail digital assets.',
    image: '/images/kanishk_oil_2.png',
    color: '#1c1b18',
    tags: ['Identity', 'Packaging', 'Typography'],
  },
  {
    id: '02',
    client: 'Sifars',
    category: 'Tech Identity',
    description: 'Strategic rebrand for a next-gen software platform. Modernized visual language establishing authority and design precision in equal measure.',
    image: '/images/sifars_2.png',
    color: '#111111',
    tags: ['Strategy', 'Visual System', 'Digital'],
  },
  {
    id: '03',
    client: 'Reggal',
    category: 'Apparel & Lifestyle',
    description: 'Tactile lifestyle brand built from the ground up — from naming to digital/print storefront packaging systems.',
    image: '/images/reggal.png',
    color: '#2d0a4e',
    tags: ['Naming', 'Packaging', 'Guidelines'],
  },
  {
    id: '04',
    client: 'Invent Elevator',
    category: 'Industrial B2B',
    description: 'Bold identity and visual system for an elevator solutions manufacturer, bringing robust engineering aesthetics to their brand.',
    image: '/images/invent_1.png',
    color: '#0c2340',
    tags: ['Branding', 'Identity', 'Digital'],
  },
];

export const brandingTestimonials: BrandingTestimonial[] = [
  {
    quote: 'Ganesyx helped us move away from looking like a commodity software script to a professional, enterprise-ready platform. Our sales cycles shortened immediately because prospects trusted our presentation.',
    author: 'Sarah Jenkins',
    role: 'Co-Founder',
    company: 'Elevate Ledger',
  },
  {
    quote: 'The brand system they delivered wasn\'t just visually stunning — it was strategically airtight. Every design decision traced back to business objectives. Truly world-class work.',
    author: 'Marcus Chen',
    role: 'CEO',
    company: 'Meridian Capital',
  },
  {
    quote: 'Working with Ganesyx felt like having a strategic partner, not just a design vendor. They challenged our assumptions and delivered an identity that exceeded every expectation.',
    author: 'Amara Okafor',
    role: 'Brand Director',
    company: 'Verde Naturals',
  },
  {
    quote: 'Our rebrand with Ganesyx resulted in a 40% increase in inbound leads within the first quarter. The identity they built commands attention and communicates authority instantly.',
    author: 'David Rossi',
    role: 'Founder',
    company: 'Aether Studios',
  },
];

export const brandingStats: BrandingStat[] = [
  { value: '100+', label: 'Identities Created' },
  { value: '12+', label: 'Industries Served' },
  { value: '3.2×', label: 'Avg. Value Perception Lift' },
  { value: '94%', label: 'Client Retention Rate' },
];

export const brandingData: ServicePageData = {
  id: 'branding',
  name: 'Branding & Identity Strategy',
  hero: {
    preHeading: 'BRANDING & IDENTITY',
    title: "Brands That Don't Just Look Good — They Stay Remembered.",
    highlightedText: 'Stay Remembered',
    description: 'We build strategic visual identities that create trust, recognition, and emotional connection across every customer touchpoint.',
    primaryCta: {
      text: 'Start Your Brand',
      href: '#contact',
    },
    secondaryCta: {
      text: 'View Branding Work',
      href: '#showcase',
    },
  },
  problem: {
    title: 'Most Brands Blend In.',
    description: 'Weak branding is a silent tax on your growth. When you lack differentiation, sales friction increases, and customer trust decays.',
    items: [
      {
        id: '01',
        title: 'Inconsistent Identity',
        description: 'Your website, pitch decks, and social media look like they were made by three different companies. You lose visual equity and confuse your audience.',
      },
      {
        id: '02',
        title: 'Weak Recognition',
        description: 'Without distinct visual hooks and a unique voice, your brand becomes invisible in the sea of sameness that defines most industries.',
      },
      {
        id: '03',
        title: 'Generic Visuals',
        description: 'Copying competitor trends makes you invisible. Modern branding demands distinct visual hooks that cannot be easily replicated.',
      },
      {
        id: '04',
        title: 'No Emotional Connection',
        description: 'Without a premium perception and emotional resonance, you cannot charge premium prices or build lasting customer loyalty.',
      },
      {
        id: '05',
        title: 'Forgettable Presence',
        description: 'Your brand fails to leave an impression. People interact and forget — no recall, no referral, no return visit.',
      },
      {
        id: '06',
        title: 'Low Perceived Value',
        description: 'Without strategic branding, you\'re forced to compete on price alone. You become a commodity in a market that rewards differentiation.',
      },
    ],
  },
  deliverables: {
    includes: [
      {
        title: 'Brand Strategy',
        description: 'Defining your target audience, core values, market positioning, and brand archetype.',
      },
      {
        title: 'Visual Identity',
        description: 'A complete aesthetic system incorporating visual hierarchy and styling directions.',
      },
      {
        title: 'Logo Systems',
        description: 'Designing custom, responsive marks for all media scales.',
      },
      {
        title: 'Typography Direction',
        description: 'Curated typeface pairings with accessibility checks.',
      },
      {
        title: 'Color Systems',
        description: 'Curated color palettes with accessibility checks and specific usage rules.',
      },
      {
        title: 'Packaging Design',
        description: 'Physical product packaging for tactile brand experiences.',
      },
      {
        title: 'Social Identity',
        description: 'Template systems for all social platforms.',
      },
      {
        title: 'Brand Guidelines',
        description: 'Comprehensive digital rulebook for brand consistency.',
      },
    ],
    gets: [
      {
        title: 'Brand Discovery Workshop',
        description: 'A collaborative onboarding session.',
      },
      {
        title: 'Strategic Moodboards',
        description: 'Three distinct creative directions.',
      },
      {
        title: 'Custom Identity System',
        description: 'Complete vector exports of all approved assets.',
      },
      {
        title: 'Brand Usage Guide',
        description: 'Multi-page interactive guideline document.',
      },
    ],
  },
  process: [
    {
      phase: 'Phase 01',
      title: 'Discovery',
      description: 'Deep-dive immersion into your business, audience, and competitive landscape through structured workshops and research.',
    },
    {
      phase: 'Phase 02',
      title: 'Research',
      description: 'Comprehensive audit of competitor positioning, market trends, and audience psychology to inform strategic decisions.',
    },
    {
      phase: 'Phase 03',
      title: 'Positioning',
      description: 'Crafting your unique value proposition, brand narrative, and messaging architecture that separates you from alternatives.',
    },
    {
      phase: 'Phase 04',
      title: 'Identity Exploration',
      description: 'Our design team drafts custom typography pairings, color systems, and logo concepts across multiple creative directions.',
    },
    {
      phase: 'Phase 05',
      title: 'System Design',
      description: 'Building the comprehensive visual system — guidelines, templates, and asset libraries that ensure consistency at scale.',
    },
    {
      phase: 'Phase 06',
      title: 'Refinement',
      description: 'Iterative polishing of every element. Pixel-perfect attention to detail until the identity achieves its full potential.',
    },
    {
      phase: 'Phase 07',
      title: 'Launch',
      description: 'Organized handoff of high-resolution assets, onboarding session, and ongoing support to guide your team\'s rollout.',
    },
  ],
  proof: {
    title: 'Identity in action.',
    before: 'Unfocused visual aesthetic, generic templates, no messaging guidelines, inconsistent typography.',
    after: 'Custom geometric mark, restricted palette, cohesive typography structure scaling value perception by 3×.',
    testimonial: {
      quote: 'Ganesyx helped us move away from looking like a commodity software script to a professional, enterprise-ready platform. Our sales cycles shortened immediately because prospects trusted our presentation.',
      author: 'Sarah Jenkins',
      role: 'Co-Founder of Elevate Ledger',
    },
    mockups: [
      '/images/branding/guidelines-mockup.jpg',
      '/images/branding/stationery-mockup.jpg',
      '/images/branding/digital-assets.jpg',
    ],
  },
  faq: [
    {
      question: 'How long does the branding process typically take?',
      answer: 'A comprehensive branding engagement takes between 4 to 8 weeks depending on scope. This includes strategy sessions, moodboard exploration, design refinement, and final documentation handoff.',
    },
    {
      question: 'What deliverables are included?',
      answer: 'You receive a complete brand system: logo suite (primary, secondary, sub-marks), color palette, typography system, brand guidelines document, social media templates, stationery design, and organized asset library in SVG, PNG, and WebP formats.',
    },
    {
      question: 'How many revision rounds do we get?',
      answer: 'Our process includes unlimited revisions within each phase. We align on strategic direction before any design work begins, which dramatically reduces misalignment and ensures the final output matches your vision.',
    },
    {
      question: 'Is brand strategy included or separate?',
      answer: 'Brand strategy is integrated into every engagement. Before designing a single asset, we establish your positioning, target audience, competitive differentiation, and messaging architecture. Strategy without design is theory — design without strategy is decoration.',
    },
    {
      question: 'Can we get just a logo without the full brand system?',
      answer: 'While we can accommodate logo-only projects, we strongly recommend the full identity system. A logo without a supporting system is like a movie poster without the movie — it promises something but can\'t deliver the full experience.',
    },
    {
      question: 'Do you provide ongoing brand guideline support?',
      answer: 'Yes. Every project includes a comprehensive brand guideline document and a 30-day post-launch support period. Extended brand management retainers are available for teams that need ongoing creative direction and quality assurance.',
    },
  ],
  cta: {
    title: 'Enhance brand experience and maximize value with Ganesyx.',
    description: "Use Ganesyx's premium design systems and visual standards to build memorable brand identities.",
    primaryCta: {
      text: 'Book a call',
      href: '/contact#consultation',
    },
    secondaryCta: {
      text: 'Explore our work',
      href: '#portfolio',
    },
  },
};
