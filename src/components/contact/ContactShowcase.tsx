'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactShowcase.module.css';

export default function ContactShowcase() {
  return (
    <section className={styles.section}>
      {/* Giant Translucent Brand Watermarks in the background */}
      <div className={styles.watermarkContainer}>
        <div className={styles.watermarkLeft}>G</div>
        <div className={styles.watermarkCenter}>A</div>
        <div className={styles.watermarkRight}>N</div>
        <div className={styles.watermarkBottom}>S</div>
      </div>

      <div className={styles.container}>
        {/* Animated Main Square Box */}
        <motion.div
          className={styles.squareBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Thin White Border Frame */}
          <div className={styles.borderFrame} />

          {/* Top-Right Text Content */}
          <motion.div
            className={styles.topText}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.line}>WE’RE YOUR</span>
            <span className={styles.line}>DIGITAL GROWTH</span>
            <span className={styles.line}>PARTNER</span>
          </motion.div>

          {/* Handshake Image - Bleeds horizontally over the borders */}
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.92, x: '-50%', y: '-42%' }}
            whileInView={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/handshake.png"
              alt="Exceptional digital presence growth handshake"
              className={styles.handshakeImg}
            />
          </motion.div>

          {/* Bottom-Left Text Content */}
          <motion.div
            className={styles.bottomText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.smallLabel}>WITH AN</span>
            <h3 className={styles.mainHeading}>
              EXCEPTIONAL <br />
              DIGITAL PRESENCE
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
