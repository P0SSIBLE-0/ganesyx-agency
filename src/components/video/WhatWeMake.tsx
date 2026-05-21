'use client';

import { motion, type Variants, useMotionValue, useSpring } from 'framer-motion';
import { videoOfferings } from '@/data/video';
import styles from './WhatWeMake.module.css';
import { useState } from 'react';

const videoOfferingsMedia = [
  'https://cdn.pixabay.com/video/2025/11/06/314351_large.mp4', // EXPLAINERS
  'https://cdn.pixabay.com/video/2025/09/03/301430_large.mp4', // PRODUCT VIDEOS
  'https://cdn.pixabay.com/video/2016/09/21/5388-183788591_medium.mp4', // REELS / SHORTS
  'https://cdn.pixabay.com/video/2022/12/30/144763-785265042_large.mp4', // AD CREATIVES
  'https://cdn.pixabay.com/video/2015/10/19/1112-142930259_medium.mp4', // TESTIMONIALS
  'https://cdn.pixabay.com/video/2025/08/20/298732_large.mp4', // MOTION GRAPHICS
  'https://cdn.pixabay.com/video/2017/06/06/9615-220523787_large.mp4', // BRAND FILMS
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function WhatWeMake() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Set up Framer Motion values for the cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs to add a slight lag/inertia to the floating window for a premium fluid feel
  const springConfig = { damping: 25, stiffness: 180 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Keep coordinates relative to viewport so that it tracks cursor position correctly
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section className={styles.section} onMouseMove={handleMouseMove}>
      <div className={styles.container}>

        {/* Header Block */}
        <div className={styles.headerGrid}>
          <span className={styles.subTitle}>Services</span>
          <h2 className={styles.title}>Editing Solutions Tailored to Your Needs</h2>
        </div>

        {/* Offerings list with Staggered Scroll Animation */}
        <motion.div
          className={styles.listContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {videoOfferings.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.listItem}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.number}>/{item.id}</div>
              <div className={styles.category}>{item.title}</div>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cursor Floating Video Poster */}
        <motion.div
          className={styles.floatingMedia}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: 24, // position it to the right of the cursor
            translateY: -80, // center vertically with respect to the cursor
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 100,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: hoveredIndex !== null ? 1 : 0.8,
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 24,
          }}
        >
          {hoveredIndex !== null && (
            <video
              key={hoveredIndex}
              src={videoOfferingsMedia[hoveredIndex]}
              autoPlay
              loop
              muted
              playsInline
              className={styles.floatingVideo}
            />
          )}
        </motion.div>

      </div>
    </section>
  );
}
