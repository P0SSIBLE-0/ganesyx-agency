'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import styles from './CaseStudies.module.css';

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  headline: string;
  metrics: { value: string; label: string }[];
  imageUrl: string;
}

const caseStudiesData: CaseStudy[] = [
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

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>CASE STUDIES</span>
            <h2 className={styles.heading}>
              Growth that <br />
              speaks for itself
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.leadParagraph}>
              Real results achieved for high-growth brands through unified digital marketing systems, predictive attribution maps, and multi-channel campaign architectures.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.grid}>
          {caseStudiesData.map((study) => (
            <motion.div
              key={study.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              {/* Image Container with Zoom effect */}
              <div className={styles.imageContainer}>
                <img
                  src={study.imageUrl}
                  alt={study.headline}
                  className={styles.image}
                  loading="lazy"
                />
                <span className={styles.categoryBadge}>{study.category}</span>
              </div>

              {study.metrics && (study.metrics.length > 0) && (
                <div className={styles.metricsBox}>
                  {study.metrics.map((metric, i) => (
                    <div key={i} className={styles.metricItem}>
                      <span className={study.id === '1' && i === 0 ? styles.featuredMetricVal : styles.metricVal}>
                        {metric.value}
                      </span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Title & Copy Info */}
              <div className={styles.content}>
                <span className={styles.clientName}>{study.client}</span>
                <h3 className={styles.studyHeadline}>{study.headline}</h3>

                {/* <div className={styles.footerLink}>
                  <span>Explore full case study</span>
                  <ArrowRight size={15} className={styles.arrow} />
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
