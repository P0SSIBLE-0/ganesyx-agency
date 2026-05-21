'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './WhyChooseUs.module.css';

interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: 50, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
  { value: 10, suffix: 'K+', label: 'Leads Created' },
  { value: 500, suffix: '+', label: 'Active Clients' },
  { value: 98, suffix: '%', label: 'Retention Rate' },
];

const cardsData = [
  {
    badge: '3x',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L16.5 7.5 12 3 4.5 16.5z" />
        <path d="m12 3 4.5 4.5" />
        <path d="M9 15 3 9" />
      </svg>
    ),
    title: 'Fast Results',
    description: 'See measurable growth within the first 90 days',
    tag: 'Faster Growth',
  },
  {
    badge: '15+',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    title: 'Proven Expertise',
    description: 'Award-winning strategies from industry veterans',
    tag: 'Years Experience',
  },
  {
    badge: '100+',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Transparent Reporting',
    description: 'Real-time dashboards with complete visibility',
    tag: 'Transparency',
  },
  {
    badge: '24/7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Support',
    description: 'A committed team working as an extension of yours',
    tag: 'Support',
  },
  {
    badge: '250',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Data-Driven',
    description: 'Every decision backed by analytics and insights',
    tag: 'Avg ROI',
  },
];

const AnimatedCounter = ({ target, prefix = '', suffix }: { target: number; prefix?: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Centered Header */}
        <div className={styles.header}>
          <div className={styles.badgePill}>Why choose Us</div>
          <h2 className={styles.title}>Built for Performance</h2>
          <p className={styles.subtitle}>
            We don't just create campaigns, we build revenue-generating systems
          </p>
        </div>

        {/* Staggered Cards Grid */}
        <div className={styles.grid}>
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${index === 2 ? styles.highlightedCard : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Floating Top-Right Badge */}
              <div className={styles.cardBadge}>{card.badge}</div>

              {/* White Icon Box */}
              <div className={styles.iconContainer}>{card.icon}</div>

              {/* Card Details */}
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              
              {/* Bottom Tag */}
              <div className={styles.cardTag}>{card.tag}</div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={styles.statCard}
              style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
            >
              <div className={styles.statValue}>
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
