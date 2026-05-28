'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import { Heading, SubHeading, Paragraph } from '@/components/ui/Typography';
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
    client: "Lumière Luxury Skincare",
    industry: "E-Commerce",
    primaryMetric: "+320%",
    primaryLabel: "Traffic Surge",
    secondaryMetric: "5.4×",
    secondaryLabel: "ROAS Lift",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1170&auto=format&fit=crop",
    highlights: [
      "Technical optimization of product catalogs",
      "Schema implementation for merchant center",
      "Crawl budget tuning & duplicate URL fixes"
    ]
  },
  {
    client: "Azoth Fintech Systems",
    industry: "SaaS",
    primaryMetric: "#1",
    primaryLabel: "Positions Secured",
    secondaryMetric: "140+",
    secondaryLabel: "Keywords Ranked",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop",
    highlights: [
      "Structured data implementation",
      "Page speed tuning & Core Web Vitals pass",
      "High-authority backlink outreach profiles"
    ]
  },
  {
    client: "LifeRise Health Networks",
    industry: "Local & Enterprise",
    primaryMetric: "12K+",
    primaryLabel: "Monthly Leads",
    secondaryMetric: "98%",
    secondaryLabel: "Core Web Vitals Pass",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop",
    highlights: [
      "Local search targeting across 50+ locations",
      "Google Business Profile optimization",
      "Mobile-first UX page optimization"
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
          <SubHeading className={styles.tagline}>Case Studies</SubHeading>
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
