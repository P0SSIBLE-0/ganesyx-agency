'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { Heading, SubHeading, Paragraph, Badge } from '@/components/ui/Typography';
import styles from './SeoResults.module.css';

interface CaseStudy {
  client: string;
  industry: string;
  primaryMetric: string;
  primaryLabel: string;
  secondaryMetric: string;
  secondaryLabel: string;
  image: string;
  highlights: string[];
}

const caseStudies: CaseStudy[] = [
  {
    client: "Sifars",
    industry: "SaaS & Tech",
    primaryMetric: "DA 23",
    primaryLabel: "Domain Authority",
    secondaryMetric: "1%",
    secondaryLabel: "Spam Score",
    image: "/images/seo_sifars.png",
    highlights: [
      "Built high-authority backlinks & domain profile",
      "Maintained spam score at an exceptional 1%",
      "Authority age of 8+ years leveraged for rankings"
    ]
  },
  {
    client: "Braymil",
    industry: "Healthcare & Retail",
    primaryMetric: "AI Citation",
    primaryLabel: "Google AI Overview Citation",
    secondaryMetric: "#1 Rank",
    secondaryLabel: "High-Intent Brand Keywords",
    image: "/images/seo_braymil.png",
    highlights: [
      "Secured citations in Google AI Overviews",
      "Ranked #1 for baby food & infant formula in India",
      "Optimized brand visibility across major online pharmacies"
    ]
  },
  {
    client: "Madhuban Kidney Care",
    industry: "Clinical Healthcare",
    primaryMetric: "1.96M",
    primaryLabel: "Impressions (Last 3 Months)",
    secondaryMetric: "36×",
    secondaryLabel: "Total Clicks Increase",
    image: "/images/seo_mkc_performance.png",
    highlights: [
      "YoY impressions grew from 23.2K to 1.96M",
      "Average ranking position jumped from 13.2 to 5.5",
      "Focused local clinical search intent optimization"
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function SeoResults() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>Case Studies</Badge>
          <Heading level={2} className={styles.title}>
            Campaign achievements and results delivered
          </Heading>
          <Paragraph variant="default" className={styles.description}>
            We design custom organic search strategies that translate directly to market share, customer acquisitions, and transparent business growth.
          </Paragraph>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
            >
              {/* Image Container with Zoom effect */}
              <div className={styles.imageWrapper}>
                <Image
                  src={study.image}
                  alt={`${study.client} Case Study`}
                  width={600}
                  height={375}
                  className={styles.image}
                  priority={idx === 0}
                />
                <span className={styles.badge}>{study.industry}</span>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.clientName}>{study.client}</h3>

                {/* Metrics Row */}
                <div className={styles.metricsRow}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricVal}>{study.primaryMetric}</span>
                    <span className={styles.metricLabel}>{study.primaryLabel}</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metricItem}>
                    <span className={styles.metricVal}>{study.secondaryMetric}</span>
                    <span className={styles.metricLabel}>{study.secondaryLabel}</span>
                  </div>
                </div>

                <div className={styles.divider} />

                {/* Highlights Checklist */}
                <ul className={styles.checkList}>
                  {study.highlights.map((point, pIdx) => (
                    <li key={pIdx} className={styles.checkItem}>
                      <span className={styles.checkIconWrapper}>
                        <Check size={12} className={styles.checkIcon} />
                      </span>
                      <span className={styles.checkText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
