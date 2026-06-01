'use client';

import React from 'react';
import styles from './WorkMarqueeSection.module.css';

export interface WorkMarqueeItem {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

interface WorkMarqueeSectionProps {
  tagline?: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  items?: WorkMarqueeItem[];
  speed?: number; // duration in seconds for one full loop
}

const defaultItems: WorkMarqueeItem[] = [
  {
    id: 'edtech',
    title: 'EdTech & E-Learning Platforms',
    image: '/images/gk-pro.webp',
    tags: ['#PORTALS', '#DASHBOARDS', '#ACADEMY']
  },
  {
    id: 'brand',
    title: 'Brand & Visual Systems',
    image: '/images/sifars_4.png',
    tags: ['#LOGO', '#GUIDELINES', '#STATIONERY']
  },
  {
    id: 'marketing',
    title: 'Social & Performance Ads',
    image: '/images/fathers_day.png',
    tags: ['#ADCREATIVE', '#SOCIALMEDIA', '#HOOKS']
  },
  {
    id: 'uiux',
    title: 'UI/UX & Interactive Design',
    image: '/images/sifars_3.png',
    tags: ['#MOBILEAPP', '#PRODUCTDESIGN', '#PROTOTYPE']
  },
  {
    id: 'packaging',
    title: 'Tactile Product Packaging',
    image: '/images/kanishk_oil_4.png',
    tags: ['#BOXDESIGN', '#LABEL', '#FMCG']
  },
  {
    id: 'merch',
    title: 'Lifestyle & Apparel',
    image: '/images/reggal.png',
    tags: ['#TEEDESIGN', '#HOODIE', '#STREETWEAR']
  }
];

export default function WorkMarqueeSection({
  tagline = 'WHAT WE CREATE',
  title = 'EVERYTHING YOU NEED, IN ONE CREATIVE PLATFORM',
  buttonText = 'Get started',
  buttonLink = '#contact',
  items = defaultItems,
  speed = 35
}: WorkMarqueeSectionProps) {
  // Duplicate the list multiple times to ensure seamless infinite looping on wider viewports
  const repeatedItems = [...items, ...items, ...items];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.tagline}>{tagline}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.headerRight}>
            <a href={buttonLink} className={styles.button}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Track Outer Container */}
      <div 
        className={styles.marqueeOuter}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <div className={styles.marqueeTrack}>
          {repeatedItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className={styles.card}>
              {/* Card Image Container with rounded borders */}
              <div className={styles.imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              {/* Title & Info beneath the image */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.tagsContainer}>
                  {item.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
