'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './StatsSection.module.css';

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface StatsSectionProps {
  subHeading?: string;
  title?: string;
  description?: string;
  items: StatItem[];
  theme?: 'light' | 'dark';
  backgroundColor?: string;
}

const AnimatedCounter = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds animation
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
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className={styles.counterValue}>
      {prefix && <span className={styles.counterPrefix}>{prefix}</span>}
      {count}
      {suffix && <span className={styles.counterSuffix}>{suffix}</span>}
    </span>
  );
};

export default function StatsSection({
  subHeading,
  title,
  description,
  items,
  theme = 'light',
  backgroundColor,
}: StatsSectionProps) {
  // Determine dynamic column class based on number of items
  const gridStyle = {
    gridTemplateColumns: `repeat(${items.length}, 1fr)`,
  };

  return (
    <section 
      className={`${styles.section} ${styles[theme]}`} 
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={styles.container}>
        {/* Header Block (Optional) */}
        {(subHeading || title || description) && (
          <div className={styles.header}>
            <motion.div 
              className={styles.headerLeft}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {subHeading && <span className={styles.tagline}>{subHeading}</span>}
              {title && <h2 className={styles.titleText}>{title}</h2>}
            </motion.div>
            {description && (
              <motion.div 
                className={styles.headerRight}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <p className={styles.descriptionText}>{description}</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div 
          className={`${styles.grid} ${items.length === 3 ? styles.cols3 : ''} ${items.length === 4 ? styles.cols4 : ''}`}
          style={items.length <= 4 ? undefined : gridStyle}
        >
          {items.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
            >
              <div className={styles.statNumber}>
                <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
