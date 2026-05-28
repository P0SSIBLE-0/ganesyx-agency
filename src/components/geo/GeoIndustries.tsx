'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import styles from './GeoIndustries.module.css';

const industries = [
  "E-Commerce & Retail",
  "SaaS & Technology",
  "Professional Services",
  "Healthcare & Life Sciences",
  "Real Estate & Development",
  "Education & EdTech",
  "Financial Technology",
  "Logistics & Supply Chain",
  "Travel & Hospitality",
  "Venture Capital & Private Equity",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function GeoIndustries() {
  return (
    <section className={styles.section} id="geo-industries">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.pillTag}>
            <Sparkles size={12} className={styles.pillIcon} />
            <span>Industries We Serve</span>
          </div>
          <h2 className={styles.title}>
            Optimized for major sectors.
          </h2>
        </div>

        {/* Minimalist Pills Flex Container */}
        <motion.div
          className={styles.pillsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((name, idx) => (
            <motion.div
              key={idx}
              className={styles.industryPill}
              variants={pillVariants}
            >
              <span className={styles.dot} />
              {name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
