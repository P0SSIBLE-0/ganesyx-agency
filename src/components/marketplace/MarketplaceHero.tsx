'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import styles from './MarketplaceHero.module.css';


export default function MarketplaceHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // Framer Motion entry animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgDotPattern} />
      <div className={styles.bgGlow} />

      <div className={styles.wrapper}>
        {/* Left Side: Headline, Sub-text, and CTAs */}
        <motion.div
          className={styles.leftSection}
          variants={staggerContainer}
          initial="hidden"
          animate={isMounted ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.tag} variants={fadeInUp}>
            <span className={styles.tagDot} />
            <Sparkles size={13} style={{ marginRight: 4 }} />
            Marketplace Excellence
          </motion.div>

          <motion.h1 className={styles.heading} variants={fadeInUp}>
            Marketplace{' '}
            <span className={styles.inlineLogos}>
              <span className={styles.miniLogoWrapper} title="Amazon">
                <img src="/logos/meesho-com-logo.png" alt="meesho Logo" className={styles.miniLogo} />
              </span>
              <span className={styles.miniLogoWrapper} title="Shopify">
                <img src="/logos/shopify.svg" alt="Shopify Logo" className={styles.miniLogo} />
              </span>
              <span className={styles.miniLogoWrapper} title="Flipkart">
                <img src="/logos/blinkit-com-logo.png" alt="blinkit Logo" className={styles.miniLogo} />
              </span>
            </span>{' '}
            Strategies Built To{' '}
            <span className={styles.gradientText}>Increase Visibility & Sales.</span>
          </motion.h1>

          <motion.p className={styles.subheading} variants={fadeInUp}>
            We help brands optimize product listings, improve discoverability, create
            high-converting creatives, and scale sales across leading e-commerce marketplaces.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={fadeInUp}>
            <a href="#consultation" className={styles.btnPrimary}>
              Start Selling Better
              <ArrowRight size={18} />
            </a>
            <a href="#services" className={styles.btnSecondary}>
              Explore Services
            </a>
          </motion.div>

          {/* Partner marketplace platforms */}
          <motion.div className={styles.partnersMini} variants={fadeInUp}>
            <p className={styles.partnersLabel}>Optimized for major channels</p>
            <div className={styles.partnerLogos}>
              {/* Amazon */}
              <div className={styles.partnerLogo}>
                <Image
                  src="/logos/logo-amazon.svg"
                  alt="Amazon Optimization"
                  width={85}
                  height={22}
                  style={{ objectFit: 'contain', width: 'auto', height: '22px' }}
                />
              </div>

              {/* Shopify */}
              <div className={styles.partnerLogo}>
                <Image
                  src="/logos/shopify.svg"
                  alt="Shopify Growth"
                  width={80}
                  height={22}
                  style={{ objectFit: 'contain', width: 'auto', height: '22px' }}
                />
              </div>

              {/* Flipkart */}
              <div className={styles.partnerLogo}>
                <Image
                  src="/logos/flipkart.svg"
                  alt="Flipkart Sales"
                  width={90}
                  height={22}
                  style={{ objectFit: 'contain', width: 'auto', height: '22px' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Interactive Cards */}
        <div className={styles.rightSection}>
          <div className={styles.decorGrid} />
          <div className={styles.decorGridInner} />

          {isMounted && (
            <div className={styles.cardsContainer}>
              {/* Card 1: Wireless Headphone Card */}
              <motion.div
                className={`${styles.floatingCard} ${styles.cardHeadphones}`}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardImgWrapper}>
                  <div className={`${styles.badge} ${styles.badgePrimary}`}>Best Seller</div>
                  <Image
                    className={styles.cardImg}
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop"
                    alt="AeroSound Max Headphones"
                    fill
                    sizes="250px"
                    priority
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>Premium Audio</span>
                  <h3 className={styles.cardTitle}>AeroSound Max Pro</h3>
                  <div className={styles.cardRow}>
                    <span className={styles.cardPrice}>$249.00</span>
                    <span className={styles.cardRating}>
                      <Star size={12} fill="currentColor" className={styles.cardRatingStar} />
                      4.9 (340)
                    </span>
                  </div>
                  <div className={`${styles.statOverlay} ${styles.statOverlayGreen}`}>
                    <TrendingUp size={12} />
                    <span>Listing Visibity: +188%</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Skincare Bottle Card */}
              <motion.div
                className={`${styles.floatingCard} ${styles.cardSkincare}`}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardImgWrapper}>
                  <div className={`${styles.badge} ${styles.badgeSecondary}`}>Amazon Choice</div>
                  <Image
                    className={styles.cardImg}
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop"
                    alt="HydraGlow Skin Serum"
                    fill
                    sizes="230px"
                    priority
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>Skincare & Organics</span>
                  <h3 className={styles.cardTitle}>HydraGlow Elixir</h3>
                  <div className={styles.cardRow}>
                    <span className={styles.cardPrice}>$45.00</span>
                    <span className={styles.cardRating}>
                      <Star size={12} fill="currentColor" className={styles.cardRatingStar} />
                      4.8 (1.2k)
                    </span>
                  </div>
                  <div className={styles.statOverlay}>
                    <ShieldCheck size={12} />
                    <span>CTR Optimized: 4.8%</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Smartwatch Card */}
              <motion.div
                className={`${styles.floatingCard} ${styles.cardWatch}`}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardImgWrapper}>
                  <Image
                    className={styles.cardImg}
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop"
                    alt="Veloce Smartwatch"
                    fill
                    sizes="240px"
                    priority
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>Wearables</span>
                  <h3 className={styles.cardTitle}>Veloce Active Watch</h3>
                  <div className={styles.cardRow}>
                    <span className={styles.cardPrice}>$199.00</span>
                    <span className={styles.cardRating}>
                      <Star size={12} fill="currentColor" className={styles.cardRatingStar} />
                      4.7 (95)
                    </span>
                  </div>
                  <div className={`${styles.statOverlay} ${styles.statOverlayGreen}`}>
                    <TrendingUp size={12} />
                    <span>Sales: +142% MoM</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
