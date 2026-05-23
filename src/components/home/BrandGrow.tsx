'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './BrandGrow.module.css';

export interface CardData {
  icon: string;
  title: string;
  desc: string;
}

export interface BrandGrowProps {
  imageUrl?: string;
  title?: React.ReactNode;
  descriptions?: string[];
  ctaText?: string;
  ctaLink?: string;
  rightCard?: CardData;
  leftCard?: CardData;
}

export default function BrandGrow({
  imageUrl = '/grow-brand.jpg',
  title = (
    <>
      Everything we do to <br />
      grow your brand online
    </>
  ),
  descriptions = [
    "Explore how Ganesyx has helped businesses strengthen their digital presence, increase brand visibility, and build meaningful connections with their audience through innovative and result-driven strategies. We combine creativity, technology, and data-driven marketing solutions to create impactful campaigns that deliver measurable growth and long-term success.",
    "From branding and social media management to website development and performance marketing, our tailored solutions are designed to help businesses stand out in today's competitive digital landscape. We focus on delivering real results that not only increase engagement but also drive conversions and accelerate business growth."
  ],
  ctaText = 'Book a free Consultation',
  ctaLink = '#contact',
  rightCard = {
    icon: '/icons/target-cross-small.svg',
    title: 'Performance Marketing',
    desc: 'Run targeted ad campaigns designed to generate leads and maximize ROI.'
  },
  leftCard = {
    icon: '/icons/seo-search-symbol.png',
    title: 'SEO Optimization',
    desc: 'Improve your search rankings and bring more organic traffic to your website.'
  }
}: BrandGrowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      {/* Inline SVG Clip Path definition for the custom background shape */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <clipPath id="brandGrowClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.08, 0 L 0.44, 0 A 0.08,0.08 0 0 1 0.52, 0.08 L 0.52, 0.375 A 0.105,0.105 0 0 0 0.625, 0.48 L 0.92, 0.48 A 0.08,0.08 0 0 1 1, 0.56 L 1, 0.92 A 0.08,0.08 0 0 1 0.92, 1 L 0.56, 1 A 0.08,0.08 0 0 1 0.48, 0.92 L 0.48, 0.625 A 0.105,0.105 0 0 0 0.375, 0.52 L 0.08, 0.52 A 0.08,0.08 0 0 1 0, 0.44 L 0, 0.08 A 0.08,0.08 0 0 1 0.08, 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left content block */}
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              {title}
            </h2>

            {descriptions.map((desc, idx) => (
              <p key={idx} className={styles.description}>
                {desc}
              </p>
            ))}

            <a href={ctaLink} className={styles.viewMoreBtn}>
              {ctaText}
            </a>
          </div>

          {/* Right graphics overlapping layout */}
          <div className={styles.rightGraphics}>

            {/* 1. Large Central Image Background with custom shape drop shadow */}
            <div className={styles.largeImageWrapper}>
              <div className={styles.largeImageContainer}>
                <div
                  className={styles.bgImage}
                  style={{ backgroundImage: `url('${imageUrl}')` }}
                />
              </div>
              <svg className={styles.borderOverlay} viewBox="0 0 1 1" preserveAspectRatio="none">
                <path
                  d="M 0.08, 0 L 0.44, 0 A 0.08,0.08 0 0 1 0.52, 0.08 L 0.52, 0.375 A 0.105,0.105 0 0 0 0.625, 0.48 L 0.92, 0.48 A 0.08,0.08 0 0 1 1, 0.56 L 1, 0.92 A 0.08,0.08 0 0 1 0.92, 1 L 0.56, 1 A 0.08,0.08 0 0 1 0.48, 0.92 L 0.48, 0.625 A 0.105,0.105 0 0 0 0.375, 0.52 L 0.08, 0.52 A 0.08,0.08 0 0 1 0, 0.44 L 0, 0.08 A 0.08,0.08 0 0 1 0.08, 0 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.28)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* 2. Top-Right Glass Card (Performance Marketing / Custom) */}
            {rightCard && (
              <div className={styles.glassCardRight}>
                <div className={styles.iconContainer}>
                  <img
                    src={rightCard.icon}
                    alt={`${rightCard.title} Icon`}
                    className={styles.targetIcon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{rightCard.title}</h3>
                <p className={styles.cardDesc}>
                  {rightCard.desc}
                </p>
              </div>
            )}

            {/* 3. Bottom-Left Glass Card (SEO Optimization / Custom) */}
            {leftCard && (
              <div className={styles.glassCardLeft}>
                <div className={styles.iconContainer}>
                  <img
                    src={leftCard.icon}
                    alt={`${leftCard.title} Icon`}
                    className={styles.seoIcon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{leftCard.title}</h3>
                <p className={styles.cardDesc}>
                  {leftCard.desc}
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
