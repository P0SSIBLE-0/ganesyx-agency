'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import styles from './BrandPhilosophy.module.css';

export default function BrandPhilosophy() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants: Variants = {
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      },
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: 'easeInOut',
        delay: 0.7,
      },
    },
  };

  return (
    <section className={styles.section}>
      {/* Dynamic drifting glow backgrounds */}
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />

      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className={styles.line} variants={lineVariants}>
            We{' '}
            <span className={styles.underlinedWrapper}>
              Scale
              <svg
                className={styles.underlineSvg}
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 2 8 C 35 12, 70 3, 98 6"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={pathVariants}
                />
              </svg>
            </span>{' '}
            Brands with
          </motion.span>
          <motion.span className={styles.line} variants={lineVariants}>
            Strategy, Design,
          </motion.span>
          <motion.span className={styles.line} variants={lineVariants}>
            and Marketing
          </motion.span>
        </motion.h2>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link href="/contact" className={styles.button} aria-label="Work With Us">
            Work With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

