'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BrandingTrustIntro.module.css';

const words = [
  'Disruptors.',
  'Visionaries.',
  'Innovators.',
  'Pioneers.',
  'Creators.',
  'Founders.',
  'Builders.',
];

export default function BrandingTrustIntro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <div className={styles.ambientBlob} />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h3 
            className={styles.subheading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Trusted by
          </motion.h3>
          <div className={styles.wordWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.word}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {currentWord.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    style={{ display: 'inline-block' }}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: 'blur(12px)', scale: 0.85 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)', 
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          delay: i * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }
                      },
                      exit: { 
                        opacity: 0, 
                        y: -20, 
                        filter: 'blur(12px)', 
                        scale: 0.85,
                        transition: {
                          duration: 0.45,
                          delay: i * 0.02,
                          ease: [0.16, 1, 0.3, 1],
                        }
                      }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
