'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { LineChart, Banknote, Handshake } from 'lucide-react';
import styles from './AdsStats.module.css';

export default function AdsStats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Framer Motion Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Sparkline animation settings
  const pathAnimation: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.6, ease: "easeInOut" }
    }
  };

  const dotAnimation: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1.4, duration: 0.4, type: "spring", stiffness: 100 }
    }
  };

  // Timelines data
  const months = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'];
  const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.preHeading}>Our Mission</span>
          <h2 className={styles.title}>Uplift. Empower. Grow.</h2>
        </div>

        {/* Stats Grid */}
        {isMounted && (
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1: Ad Spend Managed */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Ad Spend Managed</span>

                <div className={styles.statRow}>
                  <div className={styles.iconWrapper}>
                    <LineChart size={30} strokeWidth={1.8} />
                  </div>
                  <span className={styles.statValue}>$ 25000000+</span>
                </div>

                <div className={styles.graphContainer}>
                  <svg className={styles.sparklineSvg} viewBox="0 0 260 70">
                    {/* Glow backdrop path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 42, 120 42 C 150 42, 150 20, 170 20"
                      stroke="rgba(59, 130, 246, 0.4)"
                      className={styles.sparklineGlowPath}
                      variants={pathAnimation}
                    />
                    {/* Main sparkline path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 42, 120 42 C 150 42, 150 20, 170 20"
                      stroke="#3b82f6"
                      className={styles.sparklinePath}
                      variants={pathAnimation}
                    />
                    {/* Graph dot aligned above Sep (x = 170) */}
                    <motion.circle
                      cx="170"
                      cy="20"
                      r="6"
                      className={styles.sparklineDot}
                      variants={dotAnimation}
                    />
                  </svg>
                </div>

                <div className={styles.timelineRow}>
                  {months.map((month) => (
                    <span
                      key={month}
                      className={`${styles.timelineItem} ${month === 'Sep' ? styles.timelineItemActive : ''}`}
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Revenue Generated */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Revenue Generated</span>

                <div className={styles.statRow}>
                  <div className={styles.iconWrapper}>
                    <Banknote size={30} strokeWidth={1.8} />
                  </div>
                  <span className={styles.statValue}>$ 75000000+</span>
                </div>

                <div className={styles.graphContainer}>
                  <svg className={styles.sparklineSvg} viewBox="0 0 260 70">
                    {/* Glow backdrop path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 42, 120 42 C 150 42, 150 20, 170 20"
                      stroke="rgba(59, 130, 246, 0.4)"
                      className={styles.sparklineGlowPath}
                      variants={pathAnimation}
                    />
                    {/* Main sparkline path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 42, 120 42 C 150 42, 150 20, 170 20"
                      stroke="#3b82f6"
                      className={styles.sparklinePath}
                      variants={pathAnimation}
                    />
                    {/* Graph dot aligned above Sep (x = 170) */}
                    <motion.circle
                      cx="170"
                      cy="20"
                      r="6"
                      className={styles.sparklineDot}
                      variants={dotAnimation}
                    />
                  </svg>
                </div>

                <div className={styles.timelineRow}>
                  {months.map((month) => (
                    <span
                      key={month}
                      className={`${styles.timelineItem} ${month === 'Sep' ? styles.timelineItemActive : ''}`}
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Brands Worked With */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Brands worked with</span>

                <div className={styles.statRow}>
                  <div className={styles.iconWrapper}>
                    <Handshake size={30} strokeWidth={1.8} />
                  </div>
                  <span className={styles.statValue}>175+ Brands</span>
                </div>

                <div className={styles.graphContainer}>
                  <svg className={styles.sparklineSvg} viewBox="0 0 260 70">
                    {/* Glow backdrop path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 45, 130 45 C 170 45, 210 20, 250 20"
                      stroke="rgba(59, 130, 246, 0.4)"
                      className={styles.sparklineGlowPath}
                      variants={pathAnimation}
                    />
                    {/* Main sparkline path */}
                    <motion.path
                      d="M10 55 C 50 55, 90 45, 130 45 C 170 45, 210 20, 250 20"
                      stroke="#3b82f6"
                      className={styles.sparklinePath}
                      variants={pathAnimation}
                    />
                    {/* Graph dot aligned above 2024 (x = 250) */}
                    <motion.circle
                      cx="250"
                      cy="20"
                      r="6"
                      className={styles.sparklineDot}
                      variants={dotAnimation}
                    />
                  </svg>
                </div>

                <div className={styles.timelineRow}>
                  {years.map((year) => (
                    <span
                      key={year}
                      className={`${styles.timelineItem} ${year === '2024' ? styles.timelineItemActive : ''}`}
                    >
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
