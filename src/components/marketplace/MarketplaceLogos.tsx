'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './MarketplaceLogos.module.css';

interface Platform {
  name: string;
  tag: string;
  glowColor: string;
  glowShadow: string;
  logoSrc: string;
}

export default function MarketplaceLogos() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const platforms: Platform[] = [
    {
      name: 'Amazon',
      tag: 'A+ Content & PPC',
      glowColor: 'rgba(255, 153, 0, 0.25)',
      glowShadow: 'rgba(255, 153, 0, 0.12)',
      logoSrc: '/logos/amazon-com-logo.png',
    },
    {
      name: 'Shopify',
      tag: 'Store Development',
      glowColor: 'rgba(150, 191, 72, 0.25)',
      glowShadow: 'rgba(150, 191, 72, 0.12)',
      logoSrc: '/logos/shopify.svg',
    },
    {
      name: 'Flipkart',
      tag: 'Listing & Ads SEO',
      glowColor: 'rgba(40, 116, 240, 0.25)',
      glowShadow: 'rgba(40, 116, 240, 0.12)',
      logoSrc: '/logos/flipkart-logo.png',
    },
    {
      name: 'Blinkit',
      tag: 'Quick Commerce Growth',
      glowColor: 'rgba(247, 203, 21, 0.25)',
      glowShadow: 'rgba(247, 203, 21, 0.12)',
      logoSrc: '/logos/blinkit-com-logo.png',
    },
    {
      name: 'Zepto',
      tag: 'Dark Store Marketing',
      glowColor: 'rgba(139, 92, 246, 0.25)',
      glowShadow: 'rgba(139, 92, 246, 0.12)',
      logoSrc: '/logos/zeptonow-com-logo.png',
    },
    {
      name: 'Meesho',
      tag: 'Social Commerce Ads',
      glowColor: 'rgba(244, 63, 94, 0.25)',
      glowShadow: 'rgba(244, 63, 94, 0.12)',
      logoSrc: '/logos/meesho-com-logo.png',
    },
    {
      name: 'Myntra',
      tag: 'Fashion & Apparel',
      glowColor: 'rgba(255, 63, 108, 0.25)',
      glowShadow: 'rgba(255, 63, 108, 0.12)',
      logoSrc: '/logos/myntra-com-logo.png',
    },
    {
      name: 'Ajio',
      tag: 'Catalogue & Campaigns',
      glowColor: 'rgba(45, 55, 72, 0.25)',
      glowShadow: 'rgba(45, 55, 72, 0.12)',
      logoSrc: '/logos/ajio-com-logo.png',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Optimized For Leading E-Commerce Platforms.</h2>
          <p className={styles.subheading}>
            We deploy marketplace-specific optimization funnels tailored to each platform&apos;s unique search engine algorithms and buyer patterns.
          </p>
        </div>

        {isMounted && (
          <div className={styles.grid}>
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.name}
                className={styles.card}
                style={
                  {
                    '--glow-color': platform.glowColor,
                    '--glow-shadow': platform.glowShadow,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <div className={styles.glowBg} />
                <div className={styles.logoWrapper}>
                  <Image
                    src={platform.logoSrc}
                    alt={`${platform.name} Logo`}
                    width={140}
                    height={40}
                    style={{ objectFit: 'contain', width: 'auto', height: '100%', maxHeight: '40px' }}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.title}>{platform.name}</h3>
                  <span className={styles.tag}>{platform.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
