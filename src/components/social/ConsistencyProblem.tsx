'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, TrendingDown, Compass, EyeOff, Target, ZapOff, Sparkles } from 'lucide-react';
import styles from './ConsistencyProblem.module.css';

interface ProblemCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
  delay: number;
}

function ProblemCard({ number, title, description, icon, bgClass, delay }: ProblemCardProps) {
  return (
    <motion.div
      className={`${styles.problemCard} ${bgClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <span className={styles.cardNumber}>{number}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </motion.div>
  );
}

export default function ConsistencyProblem() {
  const problems = [
    {
      number: '01',
      title: 'Inconsistent Branding',
      description: 'Your content looks disconnected across platforms, diluting brand recall and confusing potential clients.',
      icon: <Layers size={20} className={styles.iconPurple} />,
      bgClass: styles.bgPurple,
    },
    {
      number: '02',
      title: 'Low Engagement',
      description: 'Followers scroll past instead of interacting, leaving you with silent feeds and poor organic reach.',
      icon: <TrendingDown size={20} className={styles.iconRed} />,
      bgClass: styles.bgRed,
    },
    {
      number: '03',
      title: 'Weak Content Direction',
      description: 'Creating without a platform-native strategy or content systems, producing content that fails to resonate.',
      icon: <Compass size={20} className={styles.iconIndigo} />,
      bgClass: styles.bgIndigo,
    },
    {
      number: '04',
      title: 'Generic Visuals',
      description: 'Aesthetic-deprived assets that blend into crowded feeds instead of stopping thumbs in their tracks.',
      icon: <EyeOff size={20} className={styles.iconPurple} />,
      bgClass: styles.bgPurple,
    },
    {
      number: '05',
      title: 'No Conversion Focus',
      description: 'Generating empty views and impressions that fail to translate into tangible sales pipelines, leads, or revenue.',
      icon: <Target size={20} className={styles.iconIndigo} />,
      bgClass: styles.bgIndigo,
    },
    {
      number: '06',
      title: 'Burnout',
      description: 'The relentless demand of constant content creation becomes exhausting without streamlined publishing systems.',
      icon: <ZapOff size={20} className={styles.iconRed} />,
      bgClass: styles.bgRed,
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.containerInner}>
        <div className={styles.gridWrapper}>
          
          {/* Left Column: Headline and Visual Graph */}
          <div className={styles.pitchColumn}>
            {/* Section Badge */}
            <motion.div
              className={styles.sectionBadge}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={12} />
              <span>The Consistency Paradox</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className={styles.sectionHeadline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Posting Consistently Doesn’t Mean Growing Consistently.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className={styles.sectionSupportingText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Most brands create content without strategy, storytelling, or platform understanding — resulting in low engagement, flatlines, and a forgettable digital footprint.
            </motion.p>

            {/* "Strategy vs. Noise" CSS Graph Visualization */}
            <motion.div
              className={styles.visualCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.visualCardHeader}>
                <div className={styles.visualCardBadge}>Performance Comparison</div>
                <div className={styles.legendContainer}>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.dotRed}`} />
                    <span>Consistency Trap</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.dotPurple}`} />
                    <span>Native System</span>
                  </div>
                </div>
              </div>

              {/* Graphic Chart Area */}
              <div className={styles.chartArea}>
                <svg className={styles.chartSvg} viewBox="0 0 400 180" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="45" x2="400" y2="45" stroke="rgba(51, 0, 153, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(51, 0, 153, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="135" x2="400" y2="135" stroke="rgba(51, 0, 153, 0.03)" strokeWidth="1" />

                  {/* Red Path: Consistency without strategy */}
                  <motion.path
                    d="M 10 135 C 100 120, 200 130, 390 145"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                  />

                  {/* Purple Path: Ganesyx Growth System */}
                  <motion.path
                    d="M 10 135 C 100 120, 180 50, 390 20"
                    stroke="url(#purpleGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.6 }}
                  />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#330099" />
                      <stop offset="60%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  {/* Pulsing Dot at current system peak */}
                  <circle cx="390" cy="20" r="5" fill="#a855f7" />
                  <circle cx="390" cy="145" r="4" fill="#ef4444" />
                </svg>

                {/* SVG Floating Callouts */}
                <div className={`${styles.chartCallout} ${styles.calloutRed}`} style={{ left: '60%', top: '75%' }}>
                  <span>Volume Trap (flat engagement)</span>
                </div>
                <div className={`${styles.chartCallout} ${styles.calloutPurple}`} style={{ left: '50%', top: '15%' }}>
                  <span>Platform Native (+4.2x ROI)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid of cards */}
          <div className={styles.cardsColumn}>
            <div className={styles.cardsGrid}>
              {problems.map((prob, idx) => (
                <ProblemCard
                  key={idx}
                  number={prob.number}
                  title={prob.title}
                  description={prob.description}
                  icon={prob.icon}
                  bgClass={prob.bgClass}
                  delay={0.1 * idx}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
