'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ClientSuccessMetrics.module.css';

// Reusable eased-out Animated Counter Component
interface AnimatedCounterProps {
  value: number;
  duration?: number; // duration in ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quad formula for smooth deceleration
            const easeOutQuad = (x: number): number => {
              return 1 - (1 - x) * (1 - x);
            };

            setCount(easeOutQuad(progress) * value);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Custom inline SVG logo for Ganesyx Agency on Card 3
const GanesyxEmblem = () => (
  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#ccff00" />
    <path d="M12 28V12H20C23.3 12 26 14.7 26 18C26 21.3 23.3 24 20 24H16V28H12ZM16 20H20C21.1 20 22 19.1 22 18C22 16.9 21.1 16 20 16H16V20Z" fill="#111111" />
    <circle cx="28" cy="28" r="4" fill="#3300cc" />
  </svg>
);

// Star SVG for Rating
const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={styles.star}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

interface MetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description: string;
}

const metrics: MetricItem[] = [
  {
    id: 'm1',
    value: 120,
    prefix: '$',
    suffix: 'K',
    decimals: 0,
    description: 'Customer-reported average annual savings on design services after switching to Ganesyx.',
  },
  {
    id: 'm2',
    value: 2.5,
    suffix: 'X',
    decimals: 1,
    description: 'Faster turnaround than the average traditional agency. Customers receive first drafts in 24 hours, while most traditional agencies take 2–3 days.',
  },
  {
    id: 'm3',
    value: 3.2,
    suffix: 'X',
    decimals: 1,
    description: 'On average, customers increase their creative production throughput with a Ganesyx design system and active workflow subscription.',
  },
  {
    id: 'm4',
    value: 94,
    suffix: '%',
    decimals: 0,
    description: 'Clients choose Ganesyx as their primary marketing design partner for more than 18 months on average.',
  },
];

export default function ClientSuccessMetrics() {
  return (
    <section className={styles.section} id="client-success">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>The Return You Want</span>
          <h2 className={styles.title}>What Our Clients Achieve</h2>
          <p className={styles.headerDesc}>
            Every metric reflects a client advancing their brand with our partnership. Here's what they've accomplished.
          </p>
        </div>

        {/* 2x2 Metric Numbers Grid with dotted borders */}
        <div className={styles.metricsOuterGrid}>
          <div className={styles.metricsGrid}>
            {metrics.map((metric) => (
              <div key={metric.id} className={styles.metricItem}>
                <div className={styles.metricValue}>
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>
                <p className={styles.metricDescription}>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 3-Card Row */}
        <div className={styles.cardsRow}>

          {/* Card 1: Sleek Mechanical Keyboard */}
          <div className={styles.metricCard}>
            <div className={styles.mediaContainer}>
              <img
                src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
                alt="Sleek mechanical keyboard close-up"
                className={styles.cardImage}
              />
              <div className={styles.darkGradientOverlay} />

              {/* Bottom Text Overlay */}
              <div className={styles.cardOverlayContent}>
                <div className={styles.cardBigMetric}>
                  <AnimatedCounter value={3} suffix="M+" />
                </div>
                <div className={styles.cardMetricLabel}>Designs created for our customers</div>
              </div>
            </div>
          </div>

          {/* Card 2: Warm Designer Workspace with Floating Badges */}
          <div className={styles.metricCard}>
            <div className={styles.mediaContainer}>
              <img
                src="https://plus.unsplash.com/premium_photo-1682125180774-6792938ac2a5?q=80&w=880&auto=format&fit=crop"
                alt="Creative designer working at desk"
                className={styles.cardImage}
              />
              <div className={styles.darkGradientOverlay} />

              {/* Floating Designer Annotations */}
              <div className={`${styles.designerPill} ${styles.pillRoss}`}>
                <span className={styles.designerPillText}>Ross</span>
                <svg className={styles.pillPointer} viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M3 3l18 9-7 2-2 7-9-18z" />
                </svg>
              </div>

              <div className={`${styles.designerPill} ${styles.pillSarah}`}>
                <span className={styles.designerPillText}>Sarah</span>
                <svg className={styles.pillPointer} viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M3 3l18 9-7 2-2 7-9-18z" />
                </svg>
              </div>

              <div className={`${styles.designerPill} ${styles.pillBrian}`}>
                <span className={styles.designerPillText}>Brian</span>
                <svg className={styles.pillPointer} viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M3 3l18 9-7 2-2 7-9-18z" />
                </svg>
              </div>

              <div className={`${styles.designerPill} ${styles.pillJesse}`}>
                <span className={styles.designerPillText}>Jesse</span>
                <svg className={styles.pillPointer} viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M3 3l18 9-7 2-2 7-9-18z" />
                </svg>
              </div>

              {/* Bottom Text Overlay */}
              <div className={styles.cardOverlayContent}>
                <div className={styles.cardBigMetric}>
                  <AnimatedCounter value={320} suffix="+" />
                </div>
                <div className={styles.cardMetricLabel}>Creatives and art directors</div>
              </div>
            </div>
          </div>

          {/* Card 3: Vivid Indigo Rating Card with Grayscale Portrait on Orange BG */}
          <div className={`${styles.metricCard} ${styles.blueCard}`}>

            {/* Top Row with Dotted lines and Emblem */}
            <div className={styles.blueCardHeader}>
              <div className={styles.dottedDividerLeft} />
              <div className={styles.emblemWrapper}>
                <GanesyxEmblem />
              </div>
            </div>

            {/* Central Orange Portrait Container */}
            <div className={styles.portraitOuterContainer}>
              <div className={styles.orangePortraitBg}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
                  alt="Smiling customer portrait"
                  className={styles.portraitGrayscale}
                />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className={styles.blueCardBottom}>
              {/* Star Rating Row */}
              <div className={styles.ratingRow}>
                <div className={styles.starsGroup}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className={styles.ratingNumber}>
                  <AnimatedCounter value={4.8} suffix="/5 ★" decimals={1} />
                </span>
              </div>

              {/* Dotted border indicator on the right */}
              <div className={styles.dottedDividerRight} />

              {/* Label */}
              <div className={styles.blueCardLabel}>
                Customer satisfaction rate (and counting)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
