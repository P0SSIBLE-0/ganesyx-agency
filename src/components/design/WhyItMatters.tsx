'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyItMatters.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

// Inline SVGs for tool logos to ensure 100% build reliability
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" width="14" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0C8.5 0 0 8.5 0 19C0 24.3 2.2 29.1 5.7 32.5C2.2 35.9 0 40.7 0 46C0 56.5 8.5 65 19 65C24.3 65 29.1 62.8 32.5 59.3C35.9 62.8 40.7 65 46 65C56.5 65 65 56.5 65 46C65 40.7 62.8 35.9 59.3 32.5C62.8 29.1 65 24.3 65 19C65 8.5 56.5 0 46 0H19Z" fill="none" />
    <path d="M9.5 47.5C9.5 42.25 13.75 38 19 38V57C13.75 57 9.5 52.75 9.5 47.5Z" fill="#0ACF83" />
    <path d="M9.5 28.5C9.5 23.25 13.75 19 19 19V38H9.5V28.5Z" fill="#A259FF" />
    <path d="M9.5 9.5C9.5 4.25 13.75 0 19 0V19H9.5V9.5Z" fill="#F24E1E" />
    <path d="M19 0H28.5C33.75 0 38 4.25 38 9.5C38 14.75 33.75 19 28.5 19H19V0Z" fill="#FF7262" />
    <path d="M38 28.5C38 33.75 33.75 38 28.5 38H19V19H28.5C33.75 19 38 23.25 38 28.5Z" fill="#1ABC9C" />
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.74 11.53c0-.98-.63-1.85-1.58-2.18.23-.74.19-1.55-.13-2.27-.47-1.07-1.54-1.77-2.71-1.78-.4-.73-1.08-1.28-1.9-1.53-1.18-.36-2.45-.06-3.37.79-.81-.59-1.84-.79-2.82-.55-1.14.28-2.07 1.09-2.52 2.19-.74-.18-1.53-.05-2.19.38-.97.63-1.52 1.72-1.46 2.87-.73.34-1.28.98-1.53 1.78-.36 1.18-.06 2.45.79 3.37-.59.81-.79 1.84-.55 2.82.28 1.14 1.09 2.07 2.19 2.52-.18.74-.05 1.53.38 2.19.63.97 1.72 1.52 2.87 1.46.34.73.98 1.28 1.78 1.53 1.18.36 2.45.06 3.37-.79.81.59 1.84.79 2.82.55 1.14-.28 2.07-1.09 2.52-2.19.74.18 1.53.05 2.19-.38.97-.63 1.52-1.72 1.46-2.87.73-.34 1.28-.98 1.53-1.78.36-1.17.06-2.43-.79-3.36.56-.79.76-1.81.54-2.78zm-4.32 6.57l-1.92-1.11v-2.22l1.92 1.11c.96.55 1.55 1.58 1.55 2.69s-.59 2.14-1.55 2.69l-1.92-1.11.02-2.05zM5.38 8.94c.55-.96 1.58-1.55 2.69-1.55s2.14.59 2.69 1.55l-1.92 1.11H6.62L4.7 8.94c.96-.55 1.55-1.58 1.55-2.69s-.59-2.14-1.55-2.69l1.92 1.11-.24 2.27zm3.17 11.08c-.96-.55-1.55-1.58-1.55-2.69s.59-2.14 1.55-2.69l1.92 1.11v2.22l-1.92-1.11v3.16zM12 13.38l-1.92-1.11 1.92-1.11 1.92 1.11L12 13.38zm5.38.94c-.55.96-1.58 1.55-2.69 1.55s-2.14-.59-2.69-1.55l1.92-1.11h2.22l1.92 1.11c-.96.55-1.55 1.58-1.55 2.69s.59 2.14 1.55 2.69l-1.92-1.11.24-2.27z" />
  </svg>
);

const MidjourneyLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 20H22L12 2Z" />
  </svg>
);

// SVG Icons for the 4 Benefits Cards
const BrandRecallIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const AdPerformanceIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const CommunicationIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </svg>
);

const ProfessionalImageIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  tagColor: string;
  hoverColor: string;
}

const benefits: BenefitItem[] = [
  {
    id: '01',
    title: 'Better brand recall',
    description: 'Consistent high-fidelity design choices carve a recognizable visual identity in a cluttered market, boosting retention and user recall instantly.',
    icon: BrandRecallIcon,
    tagColor: '#ccff00',
    hoverColor: '#111111',
  },
  {
    id: '02',
    title: 'Higher ad performance',
    description: 'Stop the infinite scroll with conversion-optimized creatives and structured visual hooks that elevate Click-Through Rates and lower conversion cost.',
    icon: AdPerformanceIcon,
    tagColor: '#3d00cc',
    hoverColor: '#ffffff',
  },
  {
    id: '03',
    title: 'Cleaner communication',
    description: 'Complex data points and services are simplified through neat typographic hierarchy and clear layout grids. Readability increases, friction drops.',
    icon: CommunicationIcon,
    tagColor: '#00f2fe',
    hoverColor: '#111111',
  },
  {
    id: '04',
    title: 'More professional image',
    description: 'Premium assets project quality. Build instant credibility with stakeholders and clients through bespoke designs that showcase absolute category leadership.',
    icon: ProfessionalImageIcon,
    tagColor: '#ff2a5f',
    hoverColor: '#ffffff',
  },
];

export default function WhyItMatters() {
  return (
    <section className={styles.section} id="why-it-matters">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <Badge>Value Proposition</Badge>
          <Heading>Why It Matters</Heading>
          <Paragraph>
            Design is the silent ambassador of your brand. The right layout structures, aesthetic hierarchies, and asset precision drive direct business outcomes.
          </Paragraph>
        </div>

        {/* Main Section Content Grid */}
        <div className={styles.contentGrid}>

          {/* Highlight Left Card (Quality talent/process) */}
          <div className={styles.highlightCard}>

            {/* Visual Portrait + Neon Blob Container */}
            <div className={styles.visualContainer}>
              {/* Abstract Neon Lime Shape */}
              <div className={styles.neonBlob} />

              {/* Premium Abstract Design System Asset */}
              <img
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80"
                alt="Abstract 3D Design System Element"
                className={styles.assetImage}
              />

              {/* Interactive Label Badge with Arrow Pointer */}
              <div className={styles.nameBadge}>
                <span className={styles.nameBadgeText}>Design System</span>
                <span className={styles.nameBadgeRole}>v1.0</span>
                {/* Visual Arrow Pointer */}
                <svg className={styles.pointerArrow} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M3 3l18 9-7 2-2 7-9-18z" />
                </svg>
              </div>

              {/* Floating Annotation Pill */}
              <div className={styles.paperPlaneAnnotation}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={styles.planeIcon}>
                  <path d="M21.88 2.15a1 1 0 0 0-1-.18l-18 7a1 1 0 0 0-.1 1.82l6.18 3.09 3.09 6.18a1 1 0 0 0 1.8 0l7-18a1 1 0 0 0-.17-.91z" />
                </svg>
                <span className={styles.planeText}>Specs approved</span>
              </div>
            </div>

            {/* Bottom Section with Tool Badges & Core Messaging */}
            <div className={styles.highlightContent}>
              {/* Badges Row */}
              <div className={styles.badgeRow}>
                <div className={styles.toolBadge} title="Figma">
                  <FigmaLogo />
                </div>
                <div className={styles.toolBadge} title="ChatGPT">
                  <ChatGPTLogo />
                </div>
                <div className={styles.toolBadge} title="Midjourney">
                  <MidjourneyLogo />
                </div>
                <div className={styles.toolBadge} title="Vercel">
                  <VercelLogo />
                </div>
                <span className={styles.toolsLabel}>Toolchain</span>
              </div>

              {/* Copy */}
              <h3 className={styles.highlightTitle}>
                Quality guaranteed by talent and process
              </h3>
              <p className={styles.highlightDesc}>
                Vetted creatives supported by automated feedback processes and industry-leading AI tools to deliver pixel-perfect outputs on time, every time.
              </p>
            </div>
          </div>

          {/* Right 2x2 Grid of 4 Smaller Benefit Cards */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className={styles.benefitCard}>
                  <div className={styles.cardHeader}>
                    {/* Icon Container with Accent Color */}
                    <div
                      className={styles.iconContainer}
                      style={{
                        '--accent-color': benefit.tagColor,
                        '--accent-hover-text': benefit.hoverColor
                      } as React.CSSProperties}
                    >
                      <Icon />
                    </div>
                    <span className={styles.benefitNumber}>/{benefit.id}</span>
                  </div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitText}>{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
