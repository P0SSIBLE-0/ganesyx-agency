'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

// Line-art Sad Monitor Icon matching the design's style
const SadMonitorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.headerIcon}>
    {/* Monitor Frame */}
    <rect x="3" y="4" width="26" height="18" rx="2" stroke="#0f172a" strokeWidth="2.2" />
    {/* Screen stand */}
    <path d="M12 22L9 28H23L20 22" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Stand base line */}
    <line x1="11" y1="28" x2="21" y2="28" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
    {/* Sad face eyes */}
    <circle cx="12" cy="11.5" r="1.5" fill="#0f172a" />
    <circle cx="20" cy="11.5" r="1.5" fill="#0f172a" />
    {/* Sad face mouth */}
    <path d="M13.5 16.5C14.5 15.5 17.5 15.5 18.5 16.5" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Sparkle Star Icon (Agentic Sparkle) matching the design's style
const SparkleStarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.headerIcon}>
    {/* Sparkle Star with black outline and vibrant purple fill */}
    <path d="M16 2C16 9.7 22.3 16 30 16C22.3 16 16 22.3 16 30C16 22.3 9.7 16 2 16C9.7 16 16 9.7 16 2Z" fill="#7c3aed" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// Custom Bullet Icons
const XCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.bulletIcon}>
    <circle cx="10" cy="10" r="9" fill="#cbd5e1" stroke="#cbd5e1" strokeWidth="1" />
    <path d="M7 7L13 13M13 7L7 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.bulletIcon}>
    <circle cx="10" cy="10" r="9" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1" />
    <path d="M6 10L9 13L14 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ComparisonRow {
  freelancer: string;
  agency: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    freelancer: "Siloed tactics that don't talk to each other",
    agency: "Fully connected, multi-channel growth engine"
  },
  {
    freelancer: "Rely on standard vanity traffic metrics",
    agency: "Optimize for actual pipeline revenue and ROAS"
  },
  {
    freelancer: "Campaign freezes if they are sick or busy",
    agency: "Dedicated growth team with zero downtime"
  },
  {
    freelancer: "Guesswork setups and basic pixel tracking",
    agency: "Custom server-side tracking (CAPI) & data APIs"
  },
  {
    freelancer: "Spend weeks launch-testing a single channel",
    agency: "Launch, scale, and compound cross-channels in days"
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* Grid Line 1 */}
      <div className={styles.gridLine} />
      
      <div className={styles.container}>
        {/* Main Header Title */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            The old playbook for <br />
            channel growth <span className={styles.grayText}>is broken.</span>
          </h2>
        </div>
      </div>

      {/* Grid Line 2 */}
      <div className={styles.gridLine} />

      <div className={styles.container}>
        <div className={styles.comparisonGrid}>
          
          {/* Left Column: Traditional Freelancer Card */}
          <motion.div 
            className={styles.leftCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardHeader}>
              <SadMonitorIcon />
              <h3 className={styles.cardTitle}>Traditional Freelancer</h3>
            </div>
            <div className={styles.listContainer}>
              {comparisonRows.map((row, idx) => (
                <div key={`free-${idx}`} className={styles.listItem}>
                  <XCircleIcon />
                  <span className={styles.itemText}>{row.freelancer}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Ganesyx Agency Card */}
          <motion.div 
            className={styles.rightCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardHeader}>
              <SparkleStarIcon />
              <h3 className={styles.cardTitle}>Ganesyx Agency</h3>
            </div>
            <div className={styles.listContainer}>
              {comparisonRows.map((row, idx) => (
                <div key={`agency-${idx}`} className={styles.listItem}>
                  <CheckCircleIcon />
                  <span className={styles.itemText}>{row.agency}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Grid Line 3 */}
      <div className={styles.gridLine} />
    </section>
  );
}
