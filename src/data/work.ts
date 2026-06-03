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
    title: 'NJ Infinity',
    image: 'images/nj_classes.png',
    video: '/video/nj_infinity.mp4',
    tags: ['EdTech', 'Social media', 'Education']
  },
  {
    id: '02',
    title: "Invent Elevator",
    image: '/images/invent_2.webp',
    video: '/video/Invent_Elevator.mp4',
    tags: ['Campaign', 'Video Ad', 'Branding']
  },
  {
    id: '03',
    title: 'Roll with Bonds',
    image: 'https://images.unsplash.com/photo-1626242108323-cc46c98acdea?q=80&w=687&auto=format&fit=crop',
    video: '/video/rolls_with_bonds.mp4',
    tags: ['Strategy', 'Video Ad', 'Branding']
  },
  {
    id: '04',
    title: 'Madhuban Kidney Care',
    image: '/images/mkc_2.jpeg',
    video: '/video/Protein_Part3_compressed.mp4',
    tags: ['Healthcare', 'Awareness', 'Campaign']
  }
];

// ── 2. Paid Ads Case Studies ──
export const adsCaseStudies: AdsCaseStudy[] = [
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
  },
  {
    id: 'case-kr-college',
    brand: 'Kasturi Ram College',
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
    image: '/images/kr-college.png'
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
  }
];

// ── 3. Digital Marketing Case Studies ──
export const digitalMarketingCaseStudies: DigitalMarketingCaseStudy[] = [
  {
    id: '1',
    client: 'COLLEGE TIME',
    category: 'Lead Generation Funnel',
    headline: 'Scaling admissions lead generation to 4,148 leads at a cost-efficient ₹39.51 per lead.',
    metrics: [
      { value: '4,148', label: 'Total Leads' },
      { value: '₹39.51', label: 'Average CPL' },
      { value: '1.14M+', label: 'Campaign Reach' }
    ],
    imageUrl: '/images/college-time.png'
  },
  {
    id: '2',
    client: 'KR COLLEGE',
    category: 'Paid Social Ads',
    headline: 'Driving over 800+ qualified admissions leads through hyper-targeted Meta Lead Ad sets.',
    metrics: [
      { value: '800+', label: 'Form Leads' },
      { value: '₹66.78', label: 'Lowest CPL' },
      { value: '490K+', label: 'Ad Impressions' }
    ],
    imageUrl: '/images/kr-college.png'
  },
  {
    id: '3',
    client: 'INVENT ELEVATOR',
    category: 'B2B Lead Generation',
    headline: 'Scaling B2B inquiries for custom elevators via direct WhatsApp chat and instant forms.',
    metrics: [
      { value: '3,777', label: 'Conversions' },
      { value: '201K+', label: 'Targeted Reach' },
      { value: '₹223K+', label: 'Total Ad Spend' }
    ],
    imageUrl: '/images/invent.png'
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
    imageUrl: '/images/braymil.webp',
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
    imageUrl: '/images/invent-website.webp',
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
    imageUrl: '/images/gk-pro.webp',
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
    imageUrl: '/images/mkc.webp',
    link: '#contact'
  }
];

// ── 5. Branding Projects ──
export const brandingProjects: BrandingProject[] = [
  {
    id: 'kanishk-oil',
    name: 'Kanishk Oil',
    image: '/images/kanishk_oil.png',
    tags: ['Brand Strategy', 'Packaging Design', 'Visual Identity'],
    bgColor: '#1c1b18',
    wide: true
  },
  {
    id: 'sifars',
    name: 'Sifars',
    image: '/images/sifars_1.png',
    tagline: 'STRATEGIC DESIGN\nBUILT TO ELEVATE.',
    tags: ['Brand Design', 'Brand Strategy', 'Brand Identity'],
    bgColor: '#111111'
  },
  {
    id: 'reggal',
    name: 'Reggal',
    image: '/images/reggal.png',
    tags: ['Branding', 'Brand Communication', 'Identity Design']
  },
  {
    id: 'nj-classes',
    name: 'NJ Classes',
    image: '/images/nj_classes.png',
    tags: ['Logo Design', 'Brand Strategy', 'Ad Design']
  },
  {
    id: 'braymil',
    name: 'Braymil',
    image: '/images/braymil.webp',
    tags: ['Brand Strategy', 'Brand Identity', 'Packaging Design'],
    bgColor: '#1a4a1a'
  },
  {
    id: 'sifars-packaging',
    name: 'Sifars Packaging',
    image: '/images/sifars_4.png',
    tags: ['Brand Identity', 'Visual Design', 'Art Direction'],
    bgColor: '#111111'
  },
  {
    id: 'invent-mockup',
    name: 'Invent Brand Identity',
    image: '/images/invent-mockup.webp',
    tagline: 'ELEVATING BRAND\nEXPERIENCES.',
    tags: ['Brand Design', 'Brand Strategy', 'Brand Identity'],
    bgColor: '#111111',
    wide: true
  },
  {
    id: 'invent-web-mockup',
    name: 'Invent Web Portal',
    image: '/images/invent-web-mockup.webp',
    tags: ['Web Design', 'Digital Branding', 'UI/UX Design'],
    bgColor: '#0f172a'
  },
  {
    id: 'invent-ipad-mockup',
    name: 'Invent Tablet App',
    image: '/images/invent-ipad-mockup.webp',
    tags: ['App Design', 'UI/UX Design', 'Visual System'],
    bgColor: '#1c1b18'
  },
  {
    id: 'invent-phone-mockup',
    name: 'Invent Mobile App',
    image: '/images/invent-phone-mockup.webp',
    tags: ['Mobile UI', 'Visual Design', 'Brand Guidelines'],
    bgColor: '#1e1e1e'
  }
];
