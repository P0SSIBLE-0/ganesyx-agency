export interface VideoProject {
  id: string;
  title: string;
  image: string;
  video: string;
  tags: string[];
}

export interface AdsMetric {
  value: string;
  label: string;
}

export interface AdsCaseStudy {
  id: string;
  brand: string;
  industry: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  highlightMetric: string;
  secondaryStat: string;
  tabSummary: string;
  metrics: AdsMetric[];
  channels: string[];
  image: string;
}

export interface DigitalMarketingMetric {
  value: string;
  label: string;
}

export interface DigitalMarketingCaseStudy {
  id: string;
  client: string;
  category: string;
  headline: string;
  metrics: DigitalMarketingMetric[];
  imageUrl: string;
}

export interface WebDevMetric {
  label: string;
  value: string;
}

export interface WebDevProject {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  metrics: WebDevMetric[];
  imageUrl: string;
  link: string;
}

export interface BrandingProject {
  id: string;
  name: string;
  image: string;
  tagline?: string;
  tags: string[];
  bgColor?: string;
  wide?: boolean;
}

// ── 1. Video Production Projects ──
export const videoProjects: VideoProject[] = [
  {
    id: '01',
    title: 'Techvision Ad Campaign',
    image: '/work-vr.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Campaign', 'Video Ad', 'Branding']
  },
  {
    id: '02',
    title: "Short Film 'Echoes'",
    image: '/work-nature.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Movie', 'Documentary', 'Editing']
  },
  {
    id: '03',
    title: 'Fitpro Youtube Series',
    image: '/work-fitness.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Strategy', 'Video Ad', 'Branding']
  },
  {
    id: '04',
    title: 'Wedding Highlights for Elite Events',
    image: '/work-wedding.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Event', 'Personal', 'Intimate']
  }
];

// ── 2. Paid Ads Case Studies ──
export const adsCaseStudies: AdsCaseStudy[] = [
  {
    id: 'case-kr-college',
    brand: 'KR College',
    industry: 'EDUCATION / COLLEGE ADMISSIONS',
    subtitle: 'Generating 747+ High-Intent Admissions Leads',
    description: 'A regional higher education college seeking to boost their student enrollment applications through social ad funnels.',
    challenge: 'Traditional offline media channels (newspaper ads, regional banners) failed to engage digital-native students, resulting in empty seats and extremely high acquisition costs.',
    solution: 'Designed localized Meta Lead Ads combined with campus lifestyle Reels and walk-through videos, targeting students within a 50km radius with simple instant-submit admissions forms.',
    highlightMetric: '747+ Leads',
    secondaryStat: '₹75 CPL',
    tabSummary: 'Optimized local admissions leads at ₹75 per lead.',
    metrics: [
      { value: '747+', label: 'Total Leads' },
      { value: '₹75-76', label: 'Average CPL' },
      { value: '₹56.5K+', label: 'Total Spend' }
    ],
    channels: ['Meta Lead Ads', 'Instagram Reels', 'Local Targeting'],
    image: '/images/kr_college.png'
  },
  {
    id: 'case-college-time',
    brand: 'College Time',
    industry: 'EDUCATION / COLLEGE ADMISSIONS',
    subtitle: 'Scaling High-Volume Admissions to 4,148 Leads',
    description: 'A large educational counseling and admissions portal aiming to scale registrations across multiple program streams.',
    challenge: 'High drop-offs on long multi-step web application forms, coupled with ad creative fatigue, led to high cost-per-lead (CPL) and slow pipeline growth.',
    solution: 'Launched a multi-angle performance campaign focused on course benefits and placement stats, directly integrated with an automated WhatsApp conversational qualifier to verify student intent instantly.',
    highlightMetric: '4,148 Leads',
    secondaryStat: '₹39.51 CPL',
    tabSummary: 'Scaled educational registrations at ₹39.51 per lead.',
    metrics: [
      { value: '4,148', label: 'Total Leads' },
      { value: '₹39.51', label: 'Average CPL' },
      { value: '₹1.63L+', label: 'Total Spend' }
    ],
    channels: ['Meta Video Ads', 'WhatsApp Funnels', 'Program Retargeting'],
    image: '/images/college-time.png'
  },
  {
    id: 'case-invent-elevator',
    brand: 'Invent Elevator',
    industry: 'B2B MANUFACTURING / ENGINEERING',
    subtitle: 'Direct WhatsApp Quote Funnel Scaling',
    description: 'A premium elevator installation company looking to capture high-value enquiries from builders, architects, and homeowners.',
    challenge: 'High-ticket B2B engineering projects suffered from long sales cycles and high friction. Generic lead forms failed to capture custom architectural metrics, raising unqualified inquiry counts.',
    solution: 'Created automated click-to-WhatsApp quote estimate systems, enabling prospective builders and homeowners to calculate custom elevator specs and get pricing in under 2 minutes.',
    highlightMetric: '222 Enquiries',
    secondaryStat: '₹1,008 Cost Per Enquiry',
    tabSummary: 'Capturing high-value building quotes through WhatsApp chatbot ads.',
    metrics: [
      { value: '222', label: 'Total Enquiries' },
      { value: '142', label: 'Total Leads' },
      { value: '₹1,008', label: 'Cost Per Enquiry' }
    ],
    channels: ['Google Search', 'WhatsApp Lead Ads', 'Meta Retargeting'],
    image: '/images/invent.png'
  }
];

// ── 3. Digital Marketing Case Studies ──
export const digitalMarketingCaseStudies: DigitalMarketingCaseStudy[] = [
  {
    id: '1',
    client: 'SCALEFLOW SAAS',
    category: 'SEO & GEO Scaling',
    headline: 'Scaling organic demos by 240% via search and generative engine optimization.',
    metrics: [
      { value: '+240%', label: 'Demo Signups' },
      { value: '18%', label: 'AI Engine Citations' },
      { value: '10.2%', label: 'Landing Page CVR' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    client: 'AURA INTERIORS',
    category: 'Paid Media & ROAS',
    headline: 'Scaling DTC ad spend to $150K/mo while securing a stable 4.8x ROAS.',
    metrics: [
      { value: '4.8x', label: 'Average ROAS' },
      { value: '+310%', label: 'E-commerce Revenue' },
      { value: '-32%', label: 'DTC Acquisition Cost' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    client: 'VORTEX ANALYTICS',
    category: 'Unified Lead Funnel',
    headline: 'Generating $2.4M in pipeline revenue through email and attribution flows.',
    metrics: [
      { value: '$2.4M', label: 'Attributed Pipeline' },
      { value: '8.4%', label: 'Lead-to-Customer CVR' },
      { value: '+115%', label: 'Email Click Rate' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
  }
];

// ── 4. Web Development Projects ──
export const webDevProjects: WebDevProject[] = [
  {
    id: 'nutribray',
    title: 'Nutribray | India’s Trusted Infant Formula & Baby Food Brand',
    category: 'E-Commerce & Retail',
    desc: "Nutribray, a renowned infant formula and baby food manufacturer in India, provides premium nourishment for your child's healthy development.",
    tech: ['Shopify', 'WooCommerce'],
    metrics: [
      { label: 'Mobile Speed Score', value: '99/100' },
      { label: 'Conversion Boost', value: '+42%' },
      { label: 'Time-To-Interactive', value: '1.1s' }
    ],
    imageUrl: '/images/braymil.png',
    link: '#contact'
  },
  {
    id: 'invent-elevator',
    title: 'Invent Elevator | Premium Elevator Solutions & Services',
    category: 'Corporate Web App',
    desc: 'Invent Elevator provides high-quality elevator solutions. We optimized their lead handling and digital sales operations through a streamlined web structure.',
    tech: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
    metrics: [
      { label: 'Lead Efficiency', value: '+60%' },
      { label: 'Inquiry Flow', value: 'Increased' },
      { label: 'Sales Operations', value: 'Digital' }
    ],
    imageUrl: '/images/invent-website.png',
    link: '#contact'
  },
  {
    id: 'gkpro-academy',
    title: 'GKPro Academy — CA, IELTS, PTE & Professional Skill Courses',
    category: 'EdTech Platform',
    desc: 'GKPro Academy offers professional courses and skill development. We integrated automated administration and scaled their onboarding capacity.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Onboarding Capacity', value: '5,000+' },
      { label: 'Admin Automation', value: '100+' },
      { label: 'Manual Work Reduction', value: '-70%' }
    ],
    imageUrl: '/images/gk-pro.png',
    link: '#contact'
  },
  {
    id: 'madhuban-kidney',
    title: 'Best Kidney Hospital in Pitampura | Delhi Madhuban Kidney Care',
    category: 'Medical SEO & Web',
    desc: 'Madhuban Kidney Care is the Best Kidney Hospital in Delhi NCR. We boosted their visibility and inquiry flow through specialized medical SEO.',
    tech: ['WordPress', 'SEO Optimization', 'Google Analytics'],
    metrics: [
      { label: 'Patient Inquiries', value: '3X Boost' },
      { label: 'Local SEO Ranking', value: 'Improved' },
      { label: 'Visual Experience', value: 'Trust-Driven' }
    ],
    imageUrl: '/images/mkc.png',
    link: '#contact'
  }
];

// ── 5. Branding Projects ──
export const brandingProjects: BrandingProject[] = [
  {
    id: 'manup',
    name: 'ManUp',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=800&fit=crop',
    tags: ['Brand Strategy', 'Packaging Design'],
    bgColor: '#e8c84a',
    wide: true
  },
  {
    id: 'burp',
    name: 'Burp',
    image: 'https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?w=500&h=700&fit=crop',
    tagline: 'LET THE SODA\nSAY IT ALL.',
    tags: ['Brand Design', 'Brand Strategy', 'Brand Identity', 'Packaging Design'],
    bgColor: '#1a3bcc'
  },
  {
    id: 'unisquad',
    name: 'Unisquad',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=700&fit=crop&crop=center',
    tags: ['Branding', 'Brand Communication', 'Brand Identity', 'Packaging Designing']
  },
  {
    id: 'lyteplus',
    name: 'Lyteplus',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=700&fit=crop',
    tags: ['Logo Design', 'Brand Strategy', 'Packaging Design', 'Visual Identity']
  },
  {
    id: 'liferise',
    name: 'LifeRise',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=700&fit=crop',
    tags: ['Brand Strategy', 'Brand Identity', 'Packaging Design', 'Doctor-led'],
    bgColor: '#1a4a1a'
  },
  {
    id: 'novaform',
    name: 'Novaform',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=700&fit=crop',
    tagline: 'TIME BUILT\nPERFECTLY.',
    tags: ['Brand Identity', 'Visual Design', 'Art Direction'],
    bgColor: '#111111'
  }
];
