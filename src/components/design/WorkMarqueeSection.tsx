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
    id: 'corporate',
    title: 'Corporate & Internal Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    tags: ['#HANDBOOKS', '#MATERIALS', '#TRAININGDECKS']
  },
  {
    id: 'brand',
    title: 'Brand & Identity',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    tags: ['#LOGO', '#GUIDELINES', '#STATIONERY']
  },
  {
    id: 'marketing',
    title: 'Marketing & Advertising',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    tags: ['#ADCREATIVE', '#SOCIALMEDIA', '#EMAIL']
  },
  {
    id: 'digital',
    title: 'Digital & Web',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    tags: ['#WEBSITE', '#LANDING']
  },
  {
    id: 'packaging',
    title: 'Product Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    tags: ['#BOXDESIGN', '#LABEL', '#SUSTAINABLE']
  },
  {
    id: 'merch',
    title: 'Merchandise & Apparel',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
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
