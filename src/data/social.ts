// ─────────────────────────────────────────────────────────────────────────────
// Social Media service – Content Showcase data
// All video URLs are confirmed working (cross-referenced from other components)
// All Unsplash images use explicit dimension params for reliability
// ─────────────────────────────────────────────────────────────────────────────

import { ProcessStep } from './types';

export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'video' | 'visual';
  type:
    | 'reel'
    | 'carousel'
    | 'motion'
    | 'short-form'
    | 'story'
    | 'campaign'
    | 'thumbnail'
    | 'ad'
    | 'branded-content'
    | 'ugc';
  videoUrl?: string;
  images?: string[];
  image?: string;
  /** Drives padding-bottom on the media container to lock the aspect ratio */
  aspectRatio: 'portrait' | 'square' | 'landscape';
  stats: {
    label: string;
    value: string;
    icon: 'heart' | 'eye' | 'flame' | 'trend' | 'zap';
  };
  badge: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

// ─── Video URLs – all confirmed working in sibling components ─────────────────
// 272903_large.mp4      → used in SocialHero.tsx  (portrait phone reel)
// 5157-183300197        → used in ContentShowcase original (landscape motion)
// 5388-183788591_medium → used in VideoHero, WhatWeMake, AdsHero
// 144763-785265042      → used in WhatWeMake (ad creatives)
// 277097_large.mp4      → used in VideoHero.tsx
// 65494-514501826       → used in BrandingHero.tsx, AdsHero.tsx
// 273883_large.mp4      → used in VideoWork.tsx (×4 cards)

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // ── REEL 1 – portrait ────────────────────────────────────────────────────
  {
    id: 'reel-1',
    title: 'Fintech App Launch Reel',
    category: 'video',
    type: 'reel',
    videoUrl: 'https://cdn.pixabay.com/video/2025/04/19/272903_large.mp4',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=960&fit=crop&q=80',
    aspectRatio: 'portrait',
    stats: { label: 'Reactions', value: '45.2K', icon: 'heart' },
    badge: 'REEL',
    accentColor: '#4F46E5',
    accentBg: '#EEF2FF',
    accentBorder: '#C7D2FE',
  },

  // ── CAROUSEL 1 – square ──────────────────────────────────────────────────
  {
    id: 'carousel-1',
    title: 'UX Psychology Slide Deck',
    category: 'visual',
    type: 'carousel',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=600&fit=crop&q=80',
    ],
    aspectRatio: 'square',
    stats: { label: 'Saves', value: '2.4K', icon: 'flame' },
    badge: 'CAROUSEL',
    accentColor: '#DB2777',
    accentBg: '#FDF2F8',
    accentBorder: '#FBCFE8',
  },

  // ── MOTION GRAPHICS – landscape ──────────────────────────────────────────
  {
    id: 'motion-1',
    title: 'SaaS Product Interface Reveal',
    category: 'video',
    type: 'motion',
    videoUrl: 'https://cdn.pixabay.com/video/2016/09/13/5157-183300197_large.mp4',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    aspectRatio: 'landscape',
    stats: { label: 'Retention', value: '92%', icon: 'eye' },
    badge: 'MOTION',
    accentColor: '#059669',
    accentBg: '#ECFDF5',
    accentBorder: '#A7F3D0',
  },

  // ── STORY SYSTEM – portrait ───────────────────────────────────────────────
  {
    id: 'story-1',
    title: 'Nike Running Story System',
    category: 'visual',
    type: 'story',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=960&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595909315602-3b5a6e14e85d?w=600&h=960&fit=crop&q=80',
    ],
    aspectRatio: 'portrait',
    stats: { label: 'CTR', value: '11.8%', icon: 'trend' },
    badge: 'STORY',
    accentColor: '#DC2626',
    accentBg: '#FEF2F2',
    accentBorder: '#FECACA',
  },

  // ── SHORT-FORM EDIT – portrait ────────────────────────────────────────────
  {
    id: 'short-form-1',
    title: 'Founder Storytelling Edit',
    category: 'video',
    type: 'short-form',
    videoUrl:
      'https://cdn.pixabay.com/video/2016/09/21/5388-183788591_medium.mp4',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=960&fit=crop&q=80',
    aspectRatio: 'portrait',
    stats: { label: 'Shares', value: '18.5K', icon: 'zap' },
    badge: 'SHORT-FORM',
    accentColor: '#9333EA',
    accentBg: '#FAF5FF',
    accentBorder: '#E9D5FF',
  },

  // ── CAMPAIGN VISUAL – landscape ───────────────────────────────────────────
  {
    id: 'campaign-1',
    title: 'Web3 Rebrand Campaign Visual',
    category: 'visual',
    type: 'campaign',
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=420&fit=crop&q=80',
    aspectRatio: 'landscape',
    stats: { label: 'Impressions', value: '1.2M', icon: 'eye' },
    badge: 'CAMPAIGN',
    accentColor: '#0891B2',
    accentBg: '#ECFEFF',
    accentBorder: '#A5F3FC',
  },

  // ── THUMBNAIL – landscape ─────────────────────────────────────────────────
  {
    id: 'thumbnail-1',
    title: 'High-CTR YouTube Thumbnails',
    category: 'visual',
    type: 'thumbnail',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=340&fit=crop&q=80',
    ],
    aspectRatio: 'landscape',
    stats: { label: 'CTR Boost', value: '+14.8%', icon: 'trend' },
    badge: 'THUMBNAIL',
    accentColor: '#D97706',
    accentBg: '#FFFBEB',
    accentBorder: '#FDE68A',
  },

  // ── AD CREATIVE – square ──────────────────────────────────────────────────
  {
    id: 'ad-1',
    title: 'DTC Skincare TikTok Spark Ad',
    category: 'visual',
    type: 'ad',
    videoUrl:
      'https://cdn.pixabay.com/video/2022/12/30/144763-785265042_large.mp4',
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop&q=80',
    aspectRatio: 'square',
    stats: { label: 'ROAS', value: '4.8×', icon: 'flame' },
    badge: 'AD CREATIVE',
    accentColor: '#2563EB',
    accentBg: '#EFF6FF',
    accentBorder: '#BFDBFE',
  },

  // ── REEL 2 – portrait ────────────────────────────────────────────────────
  {
    id: 'reel-2',
    title: 'Fashion Brand Story Reel',
    category: 'video',
    type: 'reel',
    videoUrl: 'https://cdn.pixabay.com/video/2025/05/06/277097_large.mp4',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=960&fit=crop&q=80',
    aspectRatio: 'portrait',
    stats: { label: 'Reach', value: '820K', icon: 'trend' },
    badge: 'REEL',
    accentColor: '#BE185D',
    accentBg: '#FDF2F8',
    accentBorder: '#FBCFE8',
  },

  // ── BRANDED CONTENT – landscape ───────────────────────────────────────────
  {
    id: 'branded-1',
    title: 'Luxury Hotel Brand Film',
    category: 'video',
    type: 'branded-content',
    videoUrl:
      'https://cdn.pixabay.com/video/2021/02/17/65494-514501826_large.mp4',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&q=80',
    aspectRatio: 'landscape',
    stats: { label: 'Watch Time', value: '3m 42s', icon: 'eye' },
    badge: 'BRAND FILM',
    accentColor: '#B45309',
    accentBg: '#FFFBEB',
    accentBorder: '#FDE68A',
  },

  // ── CAROUSEL 2 – portrait ────────────────────────────────────────────────
  {
    id: 'carousel-2',
    title: 'B2B Sales Funnel Carousel',
    category: 'visual',
    type: 'carousel',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=960&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=960&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=960&fit=crop&q=80',
    ],
    aspectRatio: 'portrait',
    stats: { label: 'Leads Gen', value: '340+', icon: 'zap' },
    badge: 'CAROUSEL',
    accentColor: '#0369A1',
    accentBg: '#F0F9FF',
    accentBorder: '#BAE6FD',
  },

  // ── UGC – square ─────────────────────────────────────────────────────────
  {
    id: 'ugc-1',
    title: 'Skincare UGC Bundle',
    category: 'video',
    type: 'ugc',
    videoUrl:
      'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop&q=80',
    aspectRatio: 'square',
    stats: { label: 'Conv. Rate', value: '8.3%', icon: 'flame' },
    badge: 'UGC',
    accentColor: '#7C3AED',
    accentBg: '#F5F3FF',
    accentBorder: '#DDD6FE',
  },

  // ── CAMPAIGN 2 – square ───────────────────────────────────────────────────
  {
    id: 'campaign-2',
    title: 'SaaS Product Hunt Launch Kit',
    category: 'visual',
    type: 'campaign',
    images: [
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&q=80',
    ],
    aspectRatio: 'square',
    stats: { label: 'Upvotes', value: '#1 Day', icon: 'trend' },
    badge: 'CAMPAIGN',
    accentColor: '#EA580C',
    accentBg: '#FFF7ED',
    accentBorder: '#FED7AA',
  },

  // ── STORY 2 – portrait ────────────────────────────────────────────────────
  {
    id: 'story-2',
    title: 'E-commerce Flash Sale Stories',
    category: 'visual',
    type: 'story',
    images: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=960&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=960&fit=crop&q=80',
    ],
    aspectRatio: 'portrait',
    stats: { label: 'Revenue', value: '$48K', icon: 'zap' },
    badge: 'STORY',
    accentColor: '#16A34A',
    accentBg: '#F0FDF4',
    accentBorder: '#BBF7D0',
  },

  // ── AD 2 – landscape ──────────────────────────────────────────────────────
  {
    id: 'ad-2',
    title: 'SaaS Meta Ads Creative Pack',
    category: 'visual',
    type: 'ad',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=380&fit=crop&q=80',
    aspectRatio: 'landscape',
    stats: { label: 'CPA Drop', value: '−62%', icon: 'flame' },
    badge: 'AD CREATIVE',
    accentColor: '#4338CA',
    accentBg: '#EEF2FF',
    accentBorder: '#C7D2FE',
  },
];

export const socialProcess: ProcessStep[] = [
  {
    phase: '01',
    title: 'Discovery',
    description: 'We audit your historical content performance, research target demographic behaviors, perform competitor gap audits, and clarify core brand goals to build a rock-solid growth foundation.',
  },
  {
    phase: '02',
    title: 'Strategy',
    description: 'Mapping out channel-specific content pillars, custom hooks matrices, conversion pathways, and editorial calendars tailored for high-volume growth on TikTok, Instagram, and LinkedIn.',
  },
  {
    phase: '03',
    title: 'Creative Production',
    description: 'Our design and editing team crafts scroll-stopping vertical layouts, retention-engineered video cuts with kinetic captions, sound design, and copy assets built to capture and hold feed attention.',
  },
  {
    phase: '04',
    title: 'Publishing',
    description: 'Distributing assets at peak engagement times, applying SEO-optimized tags and keyword descriptions, and setting up automated scheduling systems to maintain perfect publishing discipline.',
  },
  {
    phase: '05',
    title: 'Optimization',
    description: 'Tracking watch times, CTRs, and conversion actions to isolate winners. We iterate quickly on successful visual hooks and captions to continuously improve performance metrics.',
  },
  {
    phase: '06',
    title: 'Scaling',
    description: 'Amplifying winning organic assets through targeted paid social ads, launching cross-channel brand campaigns, and expanding formats to build broad-reach compound growth.',
  },
];


