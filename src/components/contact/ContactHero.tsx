'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import styles from './ContactHero.module.css';

const services = [
  'branding.',
  'design.',
  'development.',
  'strategy.',
  'video editing.',
  'SEO.',
  'growth.',
];

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentWord = services[serviceIndex];

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
        ease: [0.16, 1, 0.3, 1], // Premium ease-out
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
      {/* Premium left and right gradient circular glows */}
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
              Contact us for
            </motion.span>
            <motion.div className={styles.wordWrapper} variants={textVariants}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={serviceIndex}
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
                        hidden: { opacity: 0, y: 15, filter: 'blur(10px)', scale: 0.85 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                          scale: 1,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.02,
                            ease: [0.16, 1, 0.56, 1],
                          }
                        },
                        exit: {
                          opacity: 0,
                          y: -15,
                          filter: 'blur(10px)',
                          scale: 0.85,
                          transition: {
                            duration: 0.35,
                            delay: i * 0.015,
                            ease: [0.16, 1, 0.56, 1],
                          }
                        }
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
