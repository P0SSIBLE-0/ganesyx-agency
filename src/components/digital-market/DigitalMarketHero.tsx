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
      {/* Premium Vignette Overlays for Maximum Text Contrast */}
      <div className={styles.overlayBg} />
      <div className={styles.radialGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Staggered Main Headline matching UI design mockup */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            <div className={`${styles.titleRow} ${styles.rowOne}`}>
              <span className={styles.textLight}>Digital Marketing</span>
              <span className={`${styles.capsule} ${styles.capsuleOne}`}>
                <div className={styles.avatarContainer}>
                  <img
                    src="/avatar/avatar-rohan.png"
                    alt="User"
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.darkSubPill} />
              </span>
            </div>

            <div className={`${styles.titleRow} ${styles.rowTwo}`}>
              <span className={styles.textLight}>
                that <span className={styles.underlineText}>moves your</span>
              </span>
            </div>

            <div className={`${styles.titleRow} ${styles.rowThree}`}>
              <a 
                href="#contact" 
                className={`${styles.capsule} ${styles.ctaCapsule}`}
              >
                <span className={styles.ctaText}>Let's Talk</span>
                <span className={styles.lightDot} />
              </a>
              <span className={styles.textLight}>brands forward</span>
            </div>
          </motion.h1>
        </motion.div>
      </div>

      {/* Subtle Bottom Ambient Divider */}
      <div className={styles.bottomDivider} />
    </section>
  );
}
