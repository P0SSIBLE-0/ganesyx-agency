'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Award, Users, TrendingUp, Shield, Layers } from 'lucide-react';
import styles from './MarketplaceWhy.module.css';

export default function MarketplaceWhy() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>
            <Award size={12} style={{ marginRight: 4 }} />
            Why Choose Us
          </span>
          <h2 className={styles.title}>
            Why Choose <span className={styles.brandText}>Ganesyx</span>?
          </h2>
        </div>

        {/* Layout Grid */}
        <div className={styles.layout}>
          {/* Left Column: Featured Card */}
          <motion.div
            className={styles.featuredCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.featuredTop}>
              <div className={styles.iconBox}>
                <Award size={24} color="#ffffff" strokeWidth={1.5} />
              </div>
              <h3 className={styles.featuredTitle}>
                India&apos;s #1 Marketplace Onboarding & Growth Partner
              </h3>
              <p className={styles.featuredDesc}>
                We are India&apos;s leading e-commerce growth agency for premium brands. With over
                175+ brands scaled, we handle end-to-end cataloging, SEO listings, and performance advertising to ensure top search ranks.
              </p>
            </div>

            {/* Translucent statistics boxes */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>175+</span>
                <span className={styles.statLabel}>Brands Scaled</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.5x</span>
                <span className={styles.statLabel}>Average ROAS</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Cards Grid */}
          <motion.div
            className={styles.rightGrid}
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Card 1: Expert Team */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.rightIconBox}>
                <Users size={18} strokeWidth={2} />
              </div>
              <h4 className={styles.cardTitle}>Expert Team</h4>
              <p className={styles.cardDesc}>
                Dedicated marketplace specialists with years of experience driving channel growth.
              </p>
            </motion.div>

            {/* Card 2: Growth Focus */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.rightIconBox}>
                <TrendingUp size={18} strokeWidth={2} />
              </div>
              <h4 className={styles.cardTitle}>Growth Focus</h4>
              <p className={styles.cardDesc}>
                Data-driven advertising, keyword mappings, and listing strategies for maximum visibility.
              </p>
            </motion.div>

            {/* Card 3: Full Support */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.rightIconBox}>
                <Shield size={18} strokeWidth={2} />
              </div>
              <h4 className={styles.cardTitle}>Full Support</h4>
              <p className={styles.cardDesc}>
                End-to-end account management from initial listing design to cataloging and logistics advice.
              </p>
            </motion.div>

            {/* Card 4: 30+ Platforms */}
            <motion.div className={styles.card} variants={cardVariants}>
              <div className={styles.rightIconBox}>
                <Layers size={18} strokeWidth={2} />
              </div>
              <h4 className={styles.cardTitle}>30+ Platforms</h4>
              <p className={styles.cardDesc}>
                Access and scale sales across all premium e-commerce channels in the country.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
