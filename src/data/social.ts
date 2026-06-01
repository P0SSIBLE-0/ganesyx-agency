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
    title: 'GKPro Academy Admissions Reel',
    category: 'video',
    type: 'reel',
    videoUrl: '/video/nj_infinity.mp4',
    image: '/images/nj_classes.png',
    aspectRatio: 'portrait',
    stats: { label: 'Capacity', value: '5,000+', icon: 'trend' },
    badge: 'EDTECH REEL',
    accentColor: '#4F46E5',
    accentBg: '#EEF2FF',
    accentBorder: '#C7D2FE',
  },

  // ── CAROUSEL 1 – square ───────────
  {
    id: 'carousel-1',
    title: 'Sifars Strategic Brand Identity Deck',
    category: 'visual',
    type: 'carousel',
    images: [
      '/images/sifars_1.png',
      '/images/sifars_2.png',
      '/images/sifars_3.png',
    ],
    aspectRatio: 'square',
    stats: { label: 'Saves', value: '2.4K', icon: 'flame' },
    badge: 'BRAND SLIDES',
    accentColor: '#DB2777',
    accentBg: '#FDF2F8',
    accentBorder: '#FBCFE8',
  },

  // ── MOTION GRAPHICS – landscape ──────────────────────────────────────────
  {
    id: 'motion-1',
    title: 'Ganesyx Web Interface Motion Showreel',
    category: 'visual',
    type: 'motion',
    image: '/images/ganesyx_websites.png',
    aspectRatio: 'square',
    stats: { label: 'Retention', value: '92%', icon: 'eye' },
    badge: 'MOTION REVEAL',
    accentColor: '#059669',
    accentBg: '#ECFDF5',
    accentBorder: '#A7F3D0',
  },

  // ── STORY SYSTEM – portrait ───────────────────────────────────────────────
  {
    id: 'story-1',
    title: 'Kanishk Oil Brand Storytelling System',
    category: 'visual',
    type: 'story',
    images: [
      '/images/kanishk_oil.png',
      '/images/kanishk_oil_2.png',
      '/images/kanishk_oil_3.png',
    ],
    aspectRatio: 'portrait',
    stats: { label: 'CTR', value: '11.8%', icon: 'trend' },
    badge: 'BRAND STORY',
    accentColor: '#DC2626',
    accentBg: '#FEF2F2',
    accentBorder: '#FECACA',
  },

  // ── SHORT-FORM EDIT – portrait ────────────────────────────────────────────
  {
    id: 'short-form-1',
    title: 'College Time Student Storytelling Edit',
    category: 'video',
    type: 'short-form',
    videoUrl: '/video/rolls_with_bonds.mp4',
    image: '/images/college-time.png',
    aspectRatio: 'portrait',
    stats: { label: 'Shares', value: '18.5K', icon: 'zap' },
    badge: 'GROWTH EDIT',
    accentColor: '#9333EA',
    accentBg: '#FAF5FF',
    accentBorder: '#E9D5FF',
  },

  // ── CAMPAIGN VISUAL – landscape ───────────────────────────────────────────
  {
    id: 'campaign-1',
    title: 'Reggal Identity Launch Campaign Visual',
    category: 'visual',
    type: 'campaign',
    image: '/images/reggal.png',
    aspectRatio: 'square',
    stats: { label: 'Impressions', value: '1.2M', icon: 'eye' },
    badge: 'CAMPAIGN',
    accentColor: '#0891B2',
    accentBg: '#ECFEFF',
    accentBorder: '#A5F3FC',
  },
  // ── AD CREATIVE – square ──────────────────────────────────────────────────
  {
    id: 'ad-1',
    title: 'Ganesyx Performance Marketing Ad',
    category: 'visual',
    type: 'ad',
    videoUrl:
      'https://cdn.pixabay.com/video/2022/12/30/144763-785265042_large.mp4',
    image: '/ads/saas.png',
    aspectRatio: 'square',
    stats: { label: 'ROAS', value: '4.8×', icon: 'flame' },
    badge: 'PERFORMANCE AD',
    accentColor: '#2563EB',
    accentBg: '#EFF6FF',
    accentBorder: '#BFDBFE',
  },

  // ── REEL 2 – portrait ────────
  {
    id: 'reel-2',
    title: 'Invent Elevator Reel',
    category: 'video',
    type: 'reel',
    videoUrl: '/video/Invent_Elevator.mp4',
    image: '/images/reggal.png',
    aspectRatio: 'portrait',
    stats: { label: 'Reach', value: '820K', icon: 'trend' },
    badge: 'LIFESTYLE REEL',
    accentColor: '#BE185D',
    accentBg: '#FDF2F8',
    accentBorder: '#FBCFE8',
  },

  // ── BRANDED CONTENT – landscape ───────────────────────────────────────────
  {
    id: 'branded-1',
    title: 'Madhuban Kidney Care',
    category: 'visual',
    type: 'branded-content',
    image: '/images/mkc_2.jpeg',
    aspectRatio: 'square',
    stats: { label: 'Inquiries', value: '3X Boost', icon: 'eye' },
    badge: 'HEALTH',
    accentColor: '#B45309',
    accentBg: '#FFFBEB',
    accentBorder: '#FDE68A',
  },

  // ── LOGO DESIGN – portrait ────────────────────────────────────────────────
  {
    id: 'carousel-2',
    title: 'NJ Classes Brand Identity Visual',
    category: 'visual',
    type: 'ad',
    image: '/images/nj_classes.png',
    aspectRatio: 'portrait',
    stats: { label: 'Design', value: '100% Custom', icon: 'zap' },
    badge: 'Social media',
    accentColor: '#0369A1',
    accentBg: '#F0F9FF',
    accentBorder: '#BAE6FD',
  },

  // ── CAMPAIGN 2 – square ───────────────────────────────────────────────────
  {
    id: 'campaign-2',
    title: 'Sifars viusal deck',
    category: 'visual',
    type: 'campaign',
    images: [
      '/images/sifars_3.png',
      '/images/sifars_4.png',
    ],
    aspectRatio: 'square',
    stats: { label: 'Upvotes', value: '#1 Day', icon: 'trend' },
    badge: 'Social Media',
    accentColor: '#EA580C',
    accentBg: '#FFF7ED',
    accentBorder: '#FED7AA',
  },

  // ── STORY 2 – portrait ────────────────────────────────────────────────────
  {
    id: 'story-2',
    title: 'Braymil & Kanishk Oil Social Story Ads',
    category: 'visual',
    type: 'story',
    images: [
      '/images/braymil.webp',
      '/images/kanishk_oil_3.png',
    ],
    aspectRatio: 'portrait',
    stats: { label: 'Revenue', value: '$48K', icon: 'zap' },
    badge: 'SOCIAL STORIES',
    accentColor: '#16A34A',
    accentBg: '#F0FDF4',
    accentBorder: '#BBF7D0',
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


