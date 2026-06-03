'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Trophy, Plus, CheckCircle2, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import styles from './SeoInsights.module.css';
import { Badge } from '../ui/Typography';

interface MetricDetail {
  id: string;
  name: string;
  subText: string;
  value: number;
  color: string;
  status: 'error' | 'warning' | 'success';
  explanation: string;
}

const metricsData: MetricDetail[] = [
  {
    id: 'presence',
    name: 'Keyword presence',
    subText: 'Optimize content keywords enhance search results.',
    value: 12,
    color: '#ef4444', // Red
    status: 'error',
    explanation: 'Critical: Only 1 out of 6 core keywords found in your body content. Search bots cannot identify the primary topic of your page.'
  },
  {
    id: 'position',
    name: 'Keyword position',
    subText: "Keyword's location crucial for search ranking.",
    value: 48,
    color: '#eab308', // Yellow
    status: 'warning',
    explanation: 'Warning: Core keywords are missing in key H1/H2 header tags and the first 100 words. They are mostly placed in lower-value paragraphs.'
  },
  {
    id: 'character',
    name: 'Character count',
    subText: 'Ensure optimal title length within the 50-60 character range.',
    value: 92,
    color: '#22c55e', // Green
    status: 'success',
    explanation: 'Optimal: Meta title (58 chars) and meta description (152 chars) fit search snippet limits perfectly, maximizing click-through rates.'
  }
];

const checklistData = [
  {
    title: 'Utilize keyword research tools',
    description: 'Utilize keyword research tools to refine content strategies and enhance online visibility effectively by targeting search query volume and searcher intent.'
  },
  {
    title: 'Analyze competitor strategies',
    description: 'Analyzing competitor strategies is crucial for business growth, offering insights to refine tactics, anticipate moves, and gain a competitive edge in search engine results pages.'
  },
  {
    title: 'Stay updated on algorithm changes',
    description: 'Staying updated on algorithm changes is crucial for online success, ensuring strategies align with current search guidelines, optimizing traffic, and maintaining search competitiveness.'
  },
  {
    title: 'Monitor and improve site speed',
    description: 'Monitoring and enhancing site speed is vital for search rankings and user retention, ensuring fast load times and a seamless user experience across all devices.'
  }
];

export default function SeoInsights() {
  const [activeMetricId, setActiveMetricId] = useState<string | null>(null);
  const [hoveredChecklistIndex, setHoveredChecklistIndex] = useState<number | null>(null);

  // Default overall content score
  const defaultScore = 69;

  // Active score calculation
  const activeMetric = metricsData.find(m => m.id === activeMetricId);
  const currentScore = activeMetric ? activeMetric.value : defaultScore;

  // Speedometer mathematics
  // Angle runs from Math.PI (left, 180deg) to 0 (right, 0deg)
  const cx = 150;
  const cy = 130;
  const r = 90;
  const angle = Math.PI - (currentScore / 100) * Math.PI;
  const dotX = cx + r * Math.cos(angle);
  const dotY = cy - r * Math.sin(angle);
  const initialDotX = cx - r;
  const initialDotY = cy;
  const circumference = Math.PI * r;

  // Dynamic arc colors based on active score
  const getScoreColor = (score: number) => {
    if (score < 35) return '#ef4444'; // Red
    if (score < 75) return '#eab308'; // Yellow/Orange
    return '#22c55e'; // Green
  };

  return (
    <section className={styles.section}>
      {/* Mesh Background Lights */}
      <div className={styles.backgroundMesh}>
        <div className={styles.glowOverlay} />
        <div className={styles.radialGlow1} />
        <div className={styles.radialGlow2} />
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <Badge className={styles.headerBadge}>
            <Sparkles size={12} className={styles.sparkleIcon} />
            <span>REAL-TIME ANALYSIS</span>
          </Badge>
          <h2 className={styles.title}>
            Best Unlock SEO power <br className={styles.mobileBr} />
            <span className={styles.highlight}>real-time insights</span>
          </h2>
          <p className={styles.subtitle}>
            Unlock the best SEO power with real-time insights, driving success and enhancing your online visibility efficiently.
          </p>
        </div>

        {/* Content Layout */}
        <div className={styles.grid}>
          {/* Left Column: Content Score Card */}
          <div className={styles.cardContainer}>
            <div className={styles.scoreCard}>
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                  <span>Content score</span>
                  <div className={styles.infoWrapper}>
                    <Info size={14} className={styles.infoIcon} />
                    <div className={styles.tooltip}>
                      Overall content optimization health index based on search keyword coverage and metadata accuracy.
                    </div>
                  </div>
                </div>
                <div className={styles.cardStats}>
                  <span className={styles.statPlus}><Plus size={10} /> 67</span>
                  <span className={styles.statTrophy}><Trophy size={12} style={{ color: '#eab308' }} /> 88</span>
                </div>
              </div>

              {/* Gauge Gauge Visualizer */}
              <div className={styles.gaugeContainer}>
                <svg className={styles.gaugeSvg} viewBox="0 0 300 170" width="100%">
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="35%" stopColor="#ef4444" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="70%" stopColor="#eab308" />
                      <stop offset="85%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                    <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Main Gauge Arc Track */}
                  <path
                    d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Colored Arc overlay */}
                  <motion.path
                    d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                    stroke="url(#gaugeGradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    animate={{
                      strokeDashoffset: circumference - (currentScore / 100) * circumference
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 70,
                      damping: 15
                    }}
                  />

                  {/* Needle Indicator dot */}
                  <motion.circle
                    cx={cx - r}
                    cy={cy}
                    r="9"
                    fill="#ffffff"
                    stroke={getScoreColor(currentScore)}
                    strokeWidth="3.5"
                    filter="url(#glow)"
                    style={{
                      originX: cx,
                      originY: cy
                    }}
                    animate={{
                      rotate: (currentScore / 100) * 180
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 70,
                      damping: 15
                    }}
                  />
                </svg>

                {/* Score numbers absolute centered */}
                <div className={styles.scoreText}>
                  <motion.span
                    className={styles.scoreNumber}
                    animate={{ color: getScoreColor(currentScore) }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentScore}
                  </motion.span>
                  <span className={styles.scoreLabel}>Suggested 85+</span>
                </div>
              </div>

              {/* Description Link */}
              <div className={styles.learnMoreRow}>
                <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target='_blank' className={styles.learnMoreLink}>
                  Learn more about how content SEO score works.
                </a>
              </div>

              {/* Sub-metrics Checklist */}
              <div className={styles.metricsList}>
                {metricsData.map((metric) => {
                  const isActive = activeMetricId === metric.id;
                  return (
                    <button
                      key={metric.id}
                      className={`${styles.metricItem} ${isActive ? styles.metricItemActive : ''}`}
                      onClick={() => setActiveMetricId(isActive ? null : metric.id)}
                      onMouseEnter={() => setActiveMetricId(metric.id)}
                      onMouseLeave={() => setActiveMetricId(null)}
                    >
                      <div className={styles.metricLeft}>
                        <div className={styles.metricName}>{metric.name}</div>
                        <div className={styles.metricSub}>{metric.subText}</div>
                      </div>
                      <div
                        className={styles.metricBadge}
                        style={{
                          backgroundColor: `${metric.color}15`,
                          color: metric.color,
                          borderColor: `${metric.color}35`
                        }}
                      >
                        {metric.value}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed explanation pane when hover/click active */}
              <div className={styles.explanationPane}>
                <AnimatePresence mode="wait">
                  {activeMetric ? (
                    <motion.div
                      key={activeMetric.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={styles.explanationContent}
                    >
                      <AlertCircle size={14} style={{ color: activeMetric.color, flexShrink: 0, marginTop: '2px' }} />
                      <p>{activeMetric.explanation}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={styles.explanationDefault}
                    >
                      Hover over any metric above to analyze specific content optimization issues.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Right Column: Best-8 SEO checker list */}
          <div className={styles.checkerCol}>
            <div className={styles.checkerHeader}>
              <h3 className={styles.checkerTitle}>Best-in-class SEO checklist</h3>
              <p className={styles.checkerSub}>
                Achieving a top position requires continuous technical, on-page, and authority optimization.
              </p>
            </div>

            <div className={styles.checklist}>
              {checklistData.map((item, idx) => {
                const isHovered = hoveredChecklistIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.checklistItem} ${isHovered ? styles.checklistItemActive : ''}`}
                    onMouseEnter={() => setHoveredChecklistIndex(idx)}
                    onMouseLeave={() => setHoveredChecklistIndex(null)}
                  >
                    <div className={styles.checklistStatus}>
                      <CheckCircle2
                        size={20}
                        className={styles.checkIcon}
                        style={{
                          color: isHovered ? '#22c55e' : 'rgba(255, 255, 255, 0.2)',
                          transition: 'color 0.3s ease'
                        }}
                      />
                    </div>
                    <div className={styles.checklistContent}>
                      <h4 className={styles.checklistTitleText}>{item.title}</h4>
                      <p className={styles.checklistDescription}>{item.description}</p>
                    </div>
                    <div className={styles.checklistArrow}>
                      <ChevronRight
                        size={16}
                        className={styles.arrowIcon}
                        style={{
                          opacity: isHovered ? 1 : 0.2,
                          transform: isHovered ? 'translateX(3px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
