'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './MarketMetrics.module.css';

// Animated Counter Sub-Component
interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trigger: boolean;
}

function AnimatedCounter({
  value,
  duration = 2200,
  prefix = '',
  suffix = '',
  decimals = 0,
  trigger
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing outQuad: f(t) = t * (2 - t)
      const easedProgress = progress * (2 - progress);
      const currentVal = easedProgress * value;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [value, duration, trigger]);

  return (
    <span className={styles.counterValue}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function MarketMetrics() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metricsData = [
    {
      value: 5,
      decimals: 0,
      prefix: '₹',
      suffix: 'Cr+',
      label: 'Campaign Revenue Influenced',
    },
    {
      value: 4.5,
      decimals: 1,
      prefix: '',
      suffix: 'x',
      label: 'Average Marketing ROI',
    },
    {
      value: 200,
      decimals: 0,
      prefix: '',
      suffix: '+',
      label: 'Growth Campaigns Launched',
    },
    {
      value: 300,
      decimals: 0,
      prefix: '',
      suffix: '%',
      label: 'Average Visibility Increase',
    },
  ];

  return (
    <div ref={containerRef} className={styles.metricsStrip}>
      {/* Subtle animated background graph motion */}
      <div className={styles.graphContainer}>
        <svg
          className={styles.graphSvg}
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="metricGraphGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
            </linearGradient>
            <linearGradient id="metricLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.45)" />
              <stop offset="90%" stopColor="rgba(239, 68, 68, 0.15)" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 Q200,120 400,140 T800,80 T1200,100 L1200,200 L0,200 Z"
            fill="url(#metricGraphGrad)"
          />
          <path
            d="M0,160 Q200,120 400,140 T800,80 T1200,100"
            fill="none"
            stroke="url(#metricLineGrad)"
            strokeWidth="2.5"
            className={`${styles.graphLine} ${isInView ? styles.animateLine : ''}`}
          />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {metricsData.map((item, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.counterWrapper}>
                <AnimatedCounter
                  value={item.value}
                  decimals={item.decimals}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  trigger={isInView}
                />
              </div>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
