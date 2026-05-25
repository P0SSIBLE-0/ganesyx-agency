'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TrendingUp, Layers, Shield, Cpu } from 'lucide-react';
import styles from './GeoWhy.module.css';

// === Motion Animation Components ===

function TrendChartAnim() {
  return (
    <svg viewBox="0 0 200 120" className={styles.motionSvg} aria-hidden="true">
      {/* Grid lines */}
      <line x1="20" y1="20" x2="20" y2="100" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="100" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="20" x2="140" y2="100" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Animating Graph Line */}
      <motion.path
        d="M 20 85 Q 60 70 100 45 T 180 25"
        fill="none"
        stroke="url(#blueGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      {/* Glowing tracer dot tracking the path end */}
      <motion.circle
        r="4.5"
        fill="#3b82f6"
        filter="url(#glowBlue)"
        animate={{
          cx: [20, 60, 100, 140, 180],
          cy: [85, 70, 45, 33, 25],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      {/* Gradient and Filter Definitions */}
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
        </linearGradient>
        <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

function LayerStackAnim() {
  return (
    <svg viewBox="0 0 200 120" className={styles.motionSvg} aria-hidden="true">
      {/* Ambient background particle points */}
      <circle cx="40" cy="30" r="1.5" fill="rgba(139, 92, 246, 0.2)" />
      <circle cx="160" cy="90" r="1.5" fill="rgba(139, 92, 246, 0.2)" />
      <circle cx="170" cy="35" r="1.5" fill="rgba(139, 92, 246, 0.2)" />

      {/* Vertical Center Laser Scanner Beam */}
      <motion.line
        x1="100" y1="10" x2="100" y2="110"
        stroke="rgba(167, 139, 250, 0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
      />

      {/* Stacking isometric plates */}
      {/* Bottom Layer */}
      <motion.path
        d="M 50 85 L 100 70 L 150 85 L 100 100 Z"
        fill="rgba(139, 92, 246, 0.08)"
        stroke="rgba(139, 92, 246, 0.25)"
        strokeWidth="1"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Middle Layer */}
      <motion.path
        d="M 50 60 L 100 45 L 150 60 L 100 75 Z"
        fill="rgba(139, 92, 246, 0.15)"
        stroke="rgba(139, 92, 246, 0.4)"
        strokeWidth="1.2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
      />

      {/* Top Layer */}
      <motion.path
        d="M 50 35 L 100 20 L 150 35 L 100 50 Z"
        fill="rgba(167, 139, 250, 0.25)"
        stroke="rgba(167, 139, 250, 0.75)"
        strokeWidth="1.5"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />

      {/* Pulse beam dot passing through the stack */}
      <motion.circle
        r="4"
        fill="#a78bfa"
        filter="url(#glowPurple)"
        animate={{
          cx: 100,
          cy: [10, 110],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      <defs>
        <filter id="glowPurple" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

function RadarScanAnim() {
  return (
    <svg viewBox="0 0 200 120" className={styles.motionSvg} aria-hidden="true">
      {/* Sonar Center Anchor */}
      <circle cx="100" cy="60" r="2" fill="#10b981" />

      {/* Sonar Rings */}
      <circle cx="100" cy="60" r="20" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
      <circle cx="100" cy="60" r="40" fill="none" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
      <circle cx="100" cy="60" r="50" fill="none" stroke="rgba(16, 185, 129, 0.06)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Sonar Pulse Wave */}
      <motion.circle
        cx="100"
        cy="60"
        fill="none"
        stroke="rgba(16, 185, 129, 0.35)"
        strokeWidth="1.5"
        animate={{
          r: [10, 55],
          opacity: [0.8, 0]
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
          repeat: Infinity
        }}
      />

      {/* Radar sweep beam */}
      <motion.line
        x1="100" y1="60" x2="100" y2="10"
        stroke="url(#radarSweep)"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transformOrigin: "100px 60px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      {/* Highlighting target nodes (in-sync radar detection) */}
      <motion.g
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Verified Node 1 */}
        <circle cx="70" cy="40" r="4.5" fill="#10b981" filter="url(#glowGreen)" />
        <line x1="100" y1="60" x2="70" y2="40" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />

        {/* Verified Node 2 */}
        <circle cx="140" cy="80" r="3.5" fill="#10b981" opacity="0.8" />
        <line x1="100" y1="60" x2="140" y2="80" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
      </motion.g>

      <defs>
        <linearGradient id="radarSweep" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
        </linearGradient>
        <filter id="glowGreen" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

function CpuMatrixAnim() {
  return (
    <svg viewBox="0 0 200 120" className={styles.motionSvg} aria-hidden="true">
      {/* Central CPU socket background */}
      <rect x="75" y="35" width="50" height="50" rx="8" fill="rgba(236, 72, 153, 0.02)" stroke="rgba(236, 72, 153, 0.12)" strokeWidth="1" />

      {/* Central CPU core node */}
      <motion.rect
        x="82" y="42" width="36" height="36" rx="6"
        fill="rgba(236, 72, 153, 0.1)"
        stroke="#ec4899"
        strokeWidth="2"
        filter="url(#glowPink)"
        animate={{
          fillOpacity: [0.1, 0.4, 0.1],
          strokeWidth: [2, 3, 2]
        }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Core Bus Traces */}
      {/* Top Pins */}
      <line x1="90" y1="20" x2="90" y2="35" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="100" y1="15" x2="100" y2="35" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="110" y1="20" x2="110" y2="35" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      {/* Bottom Pins */}
      <line x1="90" y1="85" x2="90" y2="100" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="100" y1="85" x2="100" y2="105" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="110" y1="85" x2="110" y2="100" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      {/* Left Pins */}
      <line x1="55" y1="50" x2="75" y2="50" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="60" y1="60" x2="75" y2="60" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="55" y1="70" x2="75" y2="70" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      {/* Right Pins */}
      <line x1="125" y1="50" x2="145" y2="50" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="125" y1="60" x2="140" y2="60" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />
      <line x1="125" y1="70" x2="145" y2="70" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" />

      {/* Moving packet data pulses */}
      {/* Packet 1 */}
      <motion.circle
        r="2" fill="#f472b6"
        animate={{
          cx: 100,
          cy: [15, 60],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 1.8, ease: "easeIn", repeat: Infinity }}
      />
      {/* Packet 2 */}
      <motion.circle
        r="2" fill="#f472b6"
        animate={{
          cx: [145, 100],
          cy: 70,
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2.2, ease: "easeIn", repeat: Infinity, delay: 0.6 }}
      />
      {/* Packet 3 */}
      <motion.circle
        r="2" fill="#f472b6"
        animate={{
          cx: [55, 100],
          cy: 50,
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2, ease: "easeIn", repeat: Infinity, delay: 1.1 }}
      />

      <defs>
        <filter id="glowPink" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

// === Main Component ===

export default function GeoWhy() {
  const cards = [
    {
      title: 'AI Search Is Growing',
      description: 'More users rely on AI-generated recommendations and summaries instead of scanning lists.',
      icon: <TrendingUp size={24} className={styles.cardIcon} />,
      colorClass: styles.blueGlow,
      motionAnim: <TrendChartAnim />
    },
    {
      title: 'Visibility Is Shifting',
      description: 'Ranking alone is no longer enough. Your brand must be directly integrated into AI conversational answers.',
      icon: <Layers size={24} className={styles.cardIcon} />,
      colorClass: styles.purpleGlow,
      motionAnim: <LayerStackAnim />
    },
    {
      title: 'Authority Matters More',
      description: 'Trusted, structured content performs better. AI models cite reference libraries with verified domain trust.',
      icon: <Shield size={24} className={styles.cardIcon} />,
      colorClass: styles.greenGlow,
      motionAnim: <RadarScanAnim />
    },
    {
      title: 'Entity Recognition',
      description: 'AI systems prioritize clarity. Correctly configured schemas help LLMs build context mapping for your brand.',
      icon: <Cpu size={24} className={styles.cardIcon} />,
      colorClass: styles.pinkGlow,
      motionAnim: <CpuMatrixAnim />
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
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

  return (
    <section className={styles.section} id="why-geo">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Search Is Changing Faster Than Most Brands Realize.
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Users are increasingly discovering products, services, and answers through AI-generated experiences instead of traditional search results.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`${styles.card} ${card.colorClass}`}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Custom SVG Motion Graphic Canvas */}
              <div className={styles.motionContainer}>
                {card.motionAnim}
              </div>

              {/* Card Meta Content */}
              {/* <div className={styles.iconWrapper}>
                {card.icon}
              </div> */}
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
