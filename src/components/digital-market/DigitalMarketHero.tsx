'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './DigitalMarketHero.module.css';

export default function DigitalMarketHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={`${styles.heroSection} ${loaded ? styles.loaded : ''}`}>
      {/* Premium Vignette Overlays for Maximum Contrast */}
      <div className={styles.overlayBg} />
      <div className={styles.radialGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Simple Text Heading */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            Digital marketing that <span className={styles.gradientText}>moves your brand forward.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Scale your brand's footprint and capture high-intent buyers with high-performance digital marketing campaigns.
          </motion.p>

          {/* Simple CTA Button at the Bottom */}
          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <a href="#contact" className={styles.ctaButton}>
              <span>Let's Talk</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Ambient Divider */}
      <div className={styles.bottomDivider} />
    </section>
  );
}
