'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './WebDevHero.module.css';

export default function WebDevHero() {

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textLineVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out
      },
    },
  };

  const sideColVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.45,
      },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Image and Shadow Overlay */}
      <div className={styles.bgImageWrapper}>
        <motion.img
          src="https://images.unsplash.com/photo-1748019784450-e3c9a1aa433e?q=80&w=1600&auto=format&fit=crop"
          className={styles.bgImage}
          alt="Technical abstract background"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline with Embedded Inline Buttons */}
        <motion.h1 className={styles.title} variants={textLineVariants}>
          Modern Websites <br />
          built for{' '}
          <motion.a
            href="#work"
            className={styles.inlineBanner1}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            View Recent Work
          </motion.a>{' '}
          performance <br />
          <motion.a
            href="#contact"
            className={styles.inlineBanner2}
            whileHover={{ rotate: 0, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Start Your Project
          </motion.a>{' '}
          & growth.
        </motion.h1>

        {/* Right-aligned Descriptive Label Column */}
        <motion.div className={styles.rightCol} variants={sideColVariants}>
          <p className={styles.description}>
            We design and develop fast, scalable, and conversion-focused digital
            experiences that help modern brands stand out online.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
