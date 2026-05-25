'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, type Variants } from 'framer-motion';
import styles from './WebDevTrust.module.css';

interface MetricItem {
  val: string;
  title: string;
  desc: string;
  bgColor: string;
  hoverBgColor: string;
  accentColor: string;
  spotlightColor: string;
  glowColor: string;
}

// 3D Perspective Card Component
function MetricCard({ metric, variants }: { metric: MetricItem; variants: Variants }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map normalized mouse coordinates (-0.5 to 0.5) to tilt rotation angles
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Smooth springs for inertia
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);

    // Set custom CSS variables for the radial spotlight glow position
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${relativeX}px`);
    cardRef.current.style.setProperty('--mouse-y', `${relativeY}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      variants={variants}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        backgroundColor: isHovered ? metric.hoverBgColor : metric.bgColor,
        borderColor: isHovered ? metric.accentColor : 'rgba(0, 0, 0, 0.06)',
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0, 0, 0, 0.05), 0 0 24px ${metric.glowColor}` 
          : 'none',
        // Inject custom spotlight highlight color as React.CSSProperties style variable
        '--spotlight-color': metric.spotlightColor,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Content - Float 3D layers above background */}
      <div className={styles.cardContent} style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        <span className={styles.cardVal}>{metric.val}</span>
        <h3 className={styles.cardTitle}>{metric.title}</h3>
        <p className={styles.cardDesc}>{metric.desc}</p>
      </div>
    </motion.div>
  );
}

export default function WebDevTrust() {
  const metricsList: MetricItem[] = [
    {
      val: '100+',
      title: 'Projects Delivered',
      desc: 'Production-ready web applications deployed globally with robust scaling.',
      bgColor: '#f5f6ff', // Solid soft indigo
      hoverBgColor: '#ebeeff',
      accentColor: 'rgba(99, 102, 241, 0.25)',
      spotlightColor: 'rgba(99, 102, 241, 0.08)',
      glowColor: 'rgba(99, 102, 241, 0.04)'
    },
    {
      val: '100/100',
      title: 'Performance & SEO',
      desc: 'Engineered for search visibility, core web vitals, and near-zero load times.',
      bgColor: '#f0fbf5', // Solid soft emerald
      hoverBgColor: '#e1f5e8',
      accentColor: 'rgba(16, 185, 129, 0.25)',
      spotlightColor: 'rgba(16, 185, 129, 0.08)',
      glowColor: 'rgba(16, 185, 129, 0.04)'
    },
    {
      val: 'Mobile-First',
      title: 'Responsive Design',
      desc: 'Pixel-perfect rendering and fluid layouts across all device screens.',
      bgColor: '#f1fafd', // Solid soft cyan
      hoverBgColor: '#def4f9',
      accentColor: 'rgba(6, 182, 212, 0.25)',
      spotlightColor: 'rgba(6, 182, 212, 0.08)',
      glowColor: 'rgba(6, 182, 212, 0.04)'
    },
    {
      val: 'Results-Driven',
      title: 'Conversion Systems',
      desc: 'Intelligent interfaces mapped to convert traffic into active leads.',
      bgColor: '#faf5ff', // Solid soft purple
      hoverBgColor: '#f3e8ff',
      accentColor: 'rgba(168, 85, 247, 0.25)',
      spotlightColor: 'rgba(168, 85, 247, 0.08)',
      glowColor: 'rgba(168, 85, 247, 0.04)'
    },
  ];

  // Staggered entry animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className={styles.section}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Header Block */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariants}
        >
          <span className={styles.badge}>Trust & Results</span>
          <h2 className={styles.title}>Built For Modern Digital Experiences.</h2>
        </motion.div>

        {/* Metrics Grid Row */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {metricsList.map((metric, i) => (
            <MetricCard key={i} metric={metric} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
