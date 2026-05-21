export interface ServiceHero {
  preHeading: string;
  title: string;
  highlightedText: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
}

export interface ProblemSection {
  title: string;
  description: string;
  items: ProblemCard[];
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface DeliverablesSection {
  includes: DeliverableItem[];
  gets: DeliverableItem[];
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProofSection {
  title: string;
  before: string;
  after: string;
  testimonial: Testimonial;
  mockups: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FinalCta {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export interface ServicePageData {
  id: string;
  name: string;
  hero: ServiceHero;
  problem: ProblemSection;
  deliverables: DeliverablesSection;
  process: ProcessStep[];
  proof: ProofSection;
  faq: FaqItem[];
  cta: FinalCta;
}
