'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import styles from './AboutHero.module.css';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  url: string;
  rotation: number;
}

// Curated high-quality, vibrant Unsplash portfolio/branding images
const PORTFOLIO_IMAGES = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1634449278211-eca7f696940e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557858310-9052820906f7?q=80&w=4000&auto=format&fit=crop'
];

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);
  const [trail, setTrail] = useState<TrailImage[]>([]);

  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);
  const trailCounterRef = useRef(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setLoaded(true);
    return () => {
      // Clean up timeouts on unmount to prevent state updates
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastPosition.current.x, y - lastPosition.current.y);

    // Spawn a new image only when mouse moves more than 90px
    if (dist > 90) {
      const id = trailCounterRef.current++;
      const url = PORTFOLIO_IMAGES[imageIndexRef.current % PORTFOLIO_IMAGES.length];
      imageIndexRef.current += 1;
      const rotation = Math.random() * 24 - 12; // organic rotation between -12deg and 12deg

      const newImage: TrailImage = { id, x, y, url, rotation };

      setTrail((prev) => {
        const next = [...prev, newImage];
        // Limit total visible trail items to keep layout lightweight and clean
        if (next.length > 8) {
          return next.slice(next.length - 8);
        }
        return next;
      });

      // Schedule scale down / fade out
      const timeoutId = setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== id));
      }, 850);

      timeoutsRef.current.push(timeoutId);
      lastPosition.current = { x, y };
    }
  };

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
    <section className={styles.heroSection} onMouseMove={handleMouseMove}>
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

      {/* Image Trail container - overlaid behind/in front of text depending on z-index */}
      <div className={styles.trailContainer}>
        <AnimatePresence>
          {trail.map((img) => (
            <motion.div
              key={img.id}
              className={styles.trailImageWrapper}
              style={{
                left: img.x,
                top: img.y,
                x: '-50%',
                y: '-50%',
              }}
              initial={{ scale: 0, opacity: 0, rotate: img.rotation }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: {
                  duration: 0.34,
                  ease: [0.16, 1, 0.56, 1.1], // Premium ease-out
                },
              }}
            >
              <img
                src={img.url}
                className={styles.trailImage}
                alt="Brand showcase"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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

