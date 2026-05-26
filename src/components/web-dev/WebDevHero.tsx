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

  return (
    <section className={styles.hero}>
      {/* Background Image and Shadow Overlay */}
      <div className={styles.bgImageWrapper}>
        <motion.img
          src="https://images.unsplash.com/photo-1706523869158-8fcf6ad998ad?q=80&w=2070&auto=format&fit=crop"
          className={styles.bgImage}
          alt="Technical abstract background"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.95 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
        {/* <div className={styles.bgOverlay} /> */}
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.content}>
          {/* Tagline / Subtitle */}
          <motion.span className={styles.tagline} variants={textLineVariants}>
            WEB DEVELOPMENT & ENGINEERING
          </motion.span>

          {/* Clean Headline */}
          <motion.h1 className={styles.title} variants={textLineVariants}>
            Modern Websites Built for Performance & Growth
          </motion.h1>

          {/* Description */}
          <motion.p className={styles.description} variants={textLineVariants}>
            We design and develop fast, scalable, and conversion-focused digital
            experiences that help modern brands stand out online.
          </motion.p>

          {/* CTA Row */}
          <motion.div className={styles.ctaRow} variants={textLineVariants}>
            <motion.a
              href="#contact"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <span>Start Your Project</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
            <motion.a
              href="#work"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <span>View Recent Work</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
