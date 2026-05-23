'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  };

  const ballVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.heroSection}>
      {/* Premium left and right gradient circular balls */}
      <motion.div
        className={styles.glowLeft}
        variants={ballVariants}
        initial="hidden"
        animate={loaded ? 'visible' : 'hidden'}
      />
      <motion.div
        className={styles.glowRight}
        variants={ballVariants}
        initial="hidden"
        animate={loaded ? 'visible' : 'hidden'}
      />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
        >
          <h1 className={styles.title}>
            <motion.span className={styles.titleRow} variants={textVariants}>
              Meet the
            </motion.span>
            <motion.span className={styles.titleRow} variants={textVariants}>
              Brand Builders
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
