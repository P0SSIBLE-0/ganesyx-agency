'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { Layers, Sparkles } from 'lucide-react';
import styles from './MarketplaceCategories.module.css';

interface Category {
  name: string;
  platforms: string;
  metric: string;
  imgSrc: string;
  bullets: string[];
}

export default function MarketplaceCategories() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const categories: Category[] = [
    {
      name: 'Fashion & Apparel',
      platforms: 'Myntra, Ajio, Amazon, Flipkart',
      metric: '+185% Sales Growth',
      imgSrc: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
      bullets: ['A+ Content & Rich Cataloging', 'Sponsored Brand Video ads', 'Visual Storefront curation'],
    },
    {
      name: 'Beauty & Personal Care',
      platforms: 'Amazon, Nykaa, Purplle',
      metric: '5.4x Avg. ROAS',
      imgSrc: 'https://images.unsplash.com/photo-1676570092589-a6c09ecbb373?q=80&w=1074&auto=format&fit=crop',
      bullets: ['Nykaa & Purplle Onboarding', 'Keyword-targeted campaigns', 'Infographics & A+ layouts'],
    },
    {
      name: 'Electronics & Gadgets',
      platforms: 'Amazon, Flipkart, Tata CLiQ',
      metric: '+220% Visibility',
      imgSrc: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop',
      bullets: ['Buy Box & pricing optimization', 'ACoS-focused bidding strategies', 'Listing reviews & Q&A optimization'],
    },
    {
      name: 'Home & Kitchen Decor',
      platforms: 'Amazon, Flipkart, Shopify',
      metric: '4.8x Conversion Lift',
      imgSrc: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop',
      bullets: ['Cross-selling module grids', 'Storefront category banners', 'SEO listing copywriting'],
    },
    {
      name: 'Health & Nutrition',
      platforms: 'Amazon, Flipkart, Zepto',
      metric: '+140% Subscriptions',
      imgSrc: 'https://images.unsplash.com/photo-1683889842937-33f56d28e6e4?q=80&w=1331&auto=format&fit=crop',
      bullets: ['Subscribe & Save strategy', 'Bullet keyword density mappings', 'Sponsored Display advertising'],
    },
    {
      name: 'Food & Q-Commerce',
      platforms: 'Blinkit, Zepto, Instamart',
      metric: 'Q-Commerce Leader',
      imgSrc: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop',
      bullets: ['10-Min catalog listing setups', 'Banner bid management', 'Instamart display campaigns'],
    },
  ];

  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.section} id="categories">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>
            <Layers size={12} style={{ marginRight: 4 }} />
            Marketplace Verticals
          </span>
          <h2 className={styles.title}>Categories We Scale & Dominate.</h2>
          <p className={styles.desc}>
            We customize our listing optimizations, SEO rankings, and performance ad funnels for distinct product verticals, each governed by its own buyer patterns.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className={styles.card}
              variants={cardVariants}
            >
              {/* Cover Photo */}
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.img}
                  src={category.imgSrc}
                  alt={category.name}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                />
              </div>

              {/* Gradient overlay */}
              <div className={styles.overlay} />

              {/* Floating Metric Badge */}
              <div className={styles.metricBadge}>{category.metric}</div>

              {/* Card Details */}
              <div className={styles.content}>
                <span className={styles.cardSub}>{category.platforms}</span>
                <h3 className={styles.cardTitle}>{category.name}</h3>

                {/* Hover-reveal checklist */}
                <div className={styles.hoverDetails}>
                  {category.bullets.map((bullet, idx) => (
                    <div key={idx} className={styles.detailItem}>
                      <span className={styles.bullet} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
