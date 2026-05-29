'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import styles from './CaseStudies.module.css';

import { digitalMarketingCaseStudies as caseStudiesData } from '@/data/work';


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
