'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import styles from './SeoHero.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
      delayChildren: 0.25,
    }
  }
};

const charVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const dashboardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    }
  }
};

export default function SeoHero() {
  const headingText = "SEO that brings in qualified traffic month after month.";
  const highlightWord = "qualified traffic";

  const renderTitle = (text: string, highlight: string) => {
    const parts = text.split(highlight);

    const renderWords = (phrase: string, isHighlighted: boolean) => {
      return phrase.split(' ').map((word, wordIdx) => {
        if (!word && wordIdx === 0) return null;
        return (
          <span key={wordIdx} className={styles.wordWrapper}>
            {Array.from(word).map((char, charIdx) => (
              <span key={charIdx} className={styles.charWrapper}>
                <motion.span
                  variants={charVariants}
                  className={`${styles.char} ${isHighlighted ? styles.headingItalic : ''}`}
                >
                  {char}
                </motion.span>
              </span>
            ))}
            <span className={styles.space}>&nbsp;</span>
          </span>
        );
      });
    };

    return (
      <span className={styles.headingLine}>
        {renderWords(parts[0], false)}
        <span className={styles.headingItalic}>{renderWords(highlight, true)}</span>
        {renderWords(parts[1], false)}
      </span>
    );
  };

  return (
    <section className={styles.hero}>
      {/* Dynamic Background */}
      <div className={styles.ambientCanvas}>
        <div className={styles.radialGlow1} />
        <div className={styles.radialGlow2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.container}>
        {/* Main Content */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <Sparkles size={11} className={styles.badgeIcon} />
            <span>Organic Traffic Engine</span>
          </motion.div>

          <motion.h1
            className={styles.mainTitle}
            variants={titleContainerVariants}
          >
            {renderTitle(headingText, highlightWord)}
          </motion.h1>

          <motion.p className={styles.description} variants={itemVariants}>
            We improve your search visibility with technical SEO, content strategy, and authority building.
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.a
              href="#audit"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Get Free Audit Proposal</span>
              <div className={styles.btnArrow}>
                <ArrowRight size={14} />
              </div>
            </motion.a>
            <motion.a
              href="#services"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Our Strategy</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Clean Dashboard Panel */}
        <motion.div
          className={styles.dashboardConsole}
          variants={dashboardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <div className={styles.consoleHeader}>
            <div className={styles.windowDots}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <div className={styles.windowURL}>
              ganesyx.com/seo-performance
            </div>
            <div className={styles.statusIndicator}>
              <span className={styles.statusPulse} />
              <span>Live Feed</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className={styles.overviewStats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Organic Sessions</span>
              <span className={styles.statValue}>142.8k</span>
              <div className={styles.statTrend}>
                <TrendingUp size={11} />
                <span>+184.2% MoM</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Avg. Domain Authority</span>
              <span className={styles.statValue}>58 / 100</span>
              <div className={styles.statTrend}>
                <TrendingUp size={11} />
                <span>+8 positions</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>SEO Health Score</span>
              <span className={styles.statValue}>98 / 100</span>
              <div className={styles.statTrend}>
                <TrendingUp size={11} />
                <span>Good standing</span>
              </div>
            </div>
          </div>

          {/* Elegant SVG Area Graph */}
          <div className={styles.chartWrapper}>
            <svg className={styles.chartSvg} viewBox="0 0 900 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="premiumChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#330099" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#330099" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              <line x1="0" y1="50" x2="900" y2="50" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
              <line x1="0" y1="100" x2="900" y2="100" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
              <line x1="0" y1="150" x2="900" y2="150" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />

              {/* Gradient Area Fill */}
              <path
                d="M 0 170 C 150 160, 300 120, 450 110 C 600 100, 750 50, 900 30 L 900 200 L 0 200 Z"
                fill="url(#premiumChartGrad)"
                className={styles.chartFill}
              />

              {/* Minimal Line Drawing */}
              <path
                d="M 0 170 C 150 160, 300 120, 450 110 C 600 100, 750 50, 900 30"
                fill="none"
                stroke="#330099"
                strokeWidth="2"
                strokeLinecap="round"
                className={styles.chartLine}
              />

              {/* Pulsing endpoint */}
              <circle cx="900" cy="30" r="4" fill="#330099" />
              <circle cx="900" cy="30" r="10" fill="none" stroke="#330099" opacity="0.3">
                <animate attributeName="r" values="4;14;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
