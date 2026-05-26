'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Search } from 'lucide-react';
import styles from './SeoHero.module.css';

// Framer motion variants for staggered entry of the text column
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

// Variants for the floating card and node elements
const elementVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.8 // Appear after the graph line animates
    }
  }
};

export default function SeoHero() {
  return (
    <section className={styles.hero}>
      {/* Background Decorative Gradients & Mesh */}
      <div className={styles.backgroundContainer}>
        <div className={styles.gridOverlay} />
        <div className={styles.ambientGlow1} />
        <div className={styles.ambientGlow2} />
        {/* Subtle geometric lines */}
        <div className={styles.geometricLine1} />
        <div className={styles.geometricLine2} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Content */}
          <div className={styles.contentColumn}>
            {/* Pill Badge */}
            <motion.div className={styles.badge} variants={itemVariants}>
              <Sparkles size={12} className={styles.badgeIcon} />
              <span>Stop guessing. Start growing.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className={styles.headline} variants={itemVariants}>
              SEO Built For <br className={styles.desktopBr} />
              <span className={styles.highlightText}>Long-Term Organic Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p className={styles.description} variants={itemVariants}>
              We help businesses improve search visibility, attract qualified traffic, and build sustainable growth through strategic SEO systems.
            </motion.p>

            {/* Call to Actions */}
            <motion.div className={styles.actions} variants={itemVariants}>
              <motion.a
                href="#services"
                className={styles.primaryBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start SEO Growth</span>
                <span className={styles.btnArrow}>
                  <ArrowRight size={15} />
                </span>
              </motion.a>
              <motion.a
                href="#audit"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get SEO Audit</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Animated Graph and Stats */}
          <div className={styles.visualColumn}>
            {/* Background Grid Lines inside the graph area */}
            <div className={styles.graphGrid}>
              <div className={styles.gridRow} />
              <div className={styles.gridRow} />
              <div className={styles.gridRow} />
              <div className={styles.gridRow} />
            </div>

            {/* SVG Line Graph */}
            <svg
              className={styles.graphSvg}
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Vibrant Purple Line Gradient */}
                <linearGradient id="purpleLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6d28d9" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>

                {/* Subtle area fill gradient below line */}
                <linearGradient id="areaFillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Dotted target markers */}
              <line
                x1="485" y1="110" x2="485" y2="400"
                stroke="rgba(124, 58, 237, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              <line
                x1="0" y1="110" x2="485" y2="110"
                stroke="rgba(124, 58, 237, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Area Fill under the path */}
              <motion.path
                d="M 0 380 L 100 290 L 160 320 L 240 210 L 300 245 L 390 130 L 440 160 L 530 60 L 600 30 L 600 400 L 0 400 Z"
                fill="url(#areaFillGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.0 }}
              />

              {/* Blur Glow Effect Path */}
              <motion.path
                d="M 0 380 L 100 290 L 160 320 L 240 210 L 300 245 L 390 130 L 440 160 L 530 60 L 600 30"
                stroke="#8b5cf6"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.12"
                style={{ filter: 'blur(8px)' }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* Primary Neon Path */}
              <motion.path
                d="M 0 380 L 100 290 L 160 320 L 240 210 L 300 245 L 390 130 L 440 160 L 530 60 L 600 30"
                stroke="url(#purpleLineGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </svg>

            {/* Pulsing Intersecting Node (positioned exactly at x=485, y=110 on 600x400 SVG) */}
            {/* Coordinates in percent: left = (485/600)*100% = 80.83%, top = (110/400)*100% = 27.5% */}
            <motion.div
              className={styles.graphNode}
              style={{ '--node-left': '79.83%', '--node-top': '24.5%' } as React.CSSProperties}
              variants={elementVariants}
            >
              <div className={styles.nodeCore} />
              <div className={styles.nodePulse} />
            </motion.div>

            {/* Floating Glass Stats Card */}
            {/* Positioned relative to node (placed to the left and slightly higher) */}
            <motion.div
              className={styles.statsCard}
              style={{ '--card-left': '46%', '--card-top': '16%' } as React.CSSProperties}
              variants={elementVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className={styles.cardHeader}>
                <Search size={12} className={styles.cardIcon} />
                <span className={styles.cardScope}>Organic Traffic</span>
              </div>
              <div className={styles.cardValueRow}>
                <span className={styles.cardValue}>98.8K</span>
                <div className={styles.cardBadge}>
                  <TrendingUp size={10} className={styles.badgeArrow} />
                  <span>+24.8%</span>
                </div>
              </div>
              <span className={styles.cardPeriod}>Last 30 days</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

