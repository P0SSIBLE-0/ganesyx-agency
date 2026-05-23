'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Check, 
  Play, 
  Sparkles, 
  TrendingUp, 
  Search, 
  Layout, 
  Image as ImageIcon, 
  Video, 
  BarChart3, 
  X,
  Target
} from 'lucide-react';
import styles from './MarketplaceServices.module.css';

export default function MarketplaceServices() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>
            <Sparkles size={12} style={{ marginRight: 4 }} />
            Services Suite
          </span>
          <h2 className={styles.title}>Everything Needed To Grow On Marketplaces.</h2>
          <p className={styles.desc}>
            Skip standard grid lists. Explore our custom, full-funnel bento services tailored to scale traffic and convert buyer searches on leading channels.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.grid}>
          {/* Card 1: Product Listing Optimization (Horizontal, Span 2) */}
          <motion.div 
            className={`${styles.card} ${styles.span2} ${styles.cardColor1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardContent}>
              <span className={styles.cardBadge}>Conversion Copy</span>
              <h3 className={styles.cardTitle}>Product Listing Optimization</h3>
              <p className={styles.cardDesc}>
                SEO-friendly titles, bullet points, descriptions, and backend search terms designed to increase ranking velocity and buyer conversion rates.
              </p>
            </div>
            <div className={styles.visualWrapper}>
              <div className={styles.listingMock}>
                {/* Bad title */}
                <div className={styles.mockRow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <X size={14} color="#dc3545" strokeWidth={3} />
                    <span className={styles.mockTitleBad}>Generic Shoe V2 Black</span>
                  </div>
                  <span className={styles.badgeBad}>Poor CTR</span>
                </div>
                {/* Optimized title */}
                <div className={styles.mockRow} style={{ borderLeft: '3px solid #28a745' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={14} color="#28a745" strokeWidth={3} />
                    <span className={styles.mockTitleGood}>Ultralight Breathable Running Shoes...</span>
                  </div>
                  <span className={styles.badgeGood}>98% Optimized</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Product Image Design (Vertical, Span 1) */}
          <motion.div 
            className={`${styles.card} ${styles.cardColor2}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.cardBadge}>Visual Design</span>
            <h3 className={styles.cardTitle}>Product Image Design</h3>
            <p className={styles.cardDesc} style={{ marginBottom: 16 }}>
              High-converting product visuals, lifestyle hero shots, and dimension maps that communicate core value propositions instantly.
            </p>
            <div className={styles.visualWrapper} style={{ height: '160px' }}>
              <div className={styles.photoContainer}>
                <Image
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400&auto=format&fit=crop"
                  alt="Product Photoshoot"
                  fill
                  className={styles.img}
                />
                <div className={`${styles.annotation} ${styles.anno1}`}>Organic Glow</div>
                <div className={`${styles.annotation} ${styles.anno2}`}>Hydrating Serum</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Brand Store Design (Vertical, Span 1) */}
          <motion.div 
            className={`${styles.card} ${styles.cardColor3}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.cardBadge}>Development</span>
            <h3 className={styles.cardTitle}>Brand Store Design</h3>
            <p className={styles.cardDesc}>
              Premium storefront designs and tailored layouts that build direct credibility and encourage customer basket size growth.
            </p>
            <div className={styles.visualWrapper} style={{ height: '160px' }}>
              <div className={styles.tabletMock}>
                <div className={styles.tabletHeader}>
                  <div className={styles.tabDot} />
                  <div className={styles.tabDot} />
                  <div className={styles.tabDot} />
                </div>
                <div className={styles.tabletContent}>
                  <div className={styles.mockStoreBanner}>Cosmetics Store</div>
                  <div className={styles.mockStoreGrid}>
                    <div className={styles.mockStoreItem} />
                    <div className={styles.mockStoreItem} />
                    <div className={styles.mockStoreItem} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Marketplace SEO (Vertical, Span 1) */}
          <motion.div 
            className={`${styles.card} ${styles.cardColor4}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.cardBadge}>Ranking SEO</span>
            <h3 className={styles.cardTitle}>Marketplace SEO</h3>
            <p className={styles.cardDesc}>
              Improve visibility and organic discoverability. We research niche keywords and map backend parameters for top search ranks.
            </p>
            <div className={styles.visualWrapper} style={{ height: '160px' }}>
              <div className={styles.seoRankCard}>
                <div className={styles.seoHeader}>
                  <span className={styles.seoKeyword}>[Smartwatch Active]</span>
                  <span className={styles.seoEngine}>Search Rank</span>
                </div>
                <div className={styles.seoMetricRow}>
                  <span className={styles.seoMetricLabel}>Current Position:</span>
                  <span className={styles.seoMetricValue}>#1 Organic</span>
                </div>
                <div className={styles.seoMetricRow} style={{ marginTop: 2 }}>
                  <span className={styles.seoMetricLabel}>Monthly Growth:</span>
                  <span className={styles.seoMetricValue} style={{ color: '#28a745' }}>+240%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: A+ Content / Enhanced Content (Vertical, Span 1) */}
          <motion.div 
            className={`${styles.card} ${styles.cardColor5}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.cardBadge}>Rich Content</span>
            <h3 className={styles.cardTitle}>A+ Content / Enhanced Content</h3>
            <p className={styles.cardDesc}>
              Rich product storytelling, comparison modules, and graphics that enhance confidence and lower purchase friction.
            </p>
            <div className={styles.visualWrapper} style={{ height: '160px' }}>
              <div className={styles.aplusBannerStack}>
                <div className={`${styles.aplusBanner} ${styles.aplusBannerColor1}`}>
                  <div className={styles.aplusMiniImg} />
                  <div className={styles.aplusMiniText}>
                    <div className={styles.aplusLine1} />
                    <div className={styles.aplusLine2} />
                  </div>
                </div>
                <div className={`${styles.aplusBanner} ${styles.aplusBannerColor2}`}>
                  <div className={styles.aplusMiniImg} />
                  <div className={styles.aplusMiniText}>
                    <div className={styles.aplusLine1} style={{ width: '80%' }} />
                    <div className={styles.aplusLine2} style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Marketplace Advertising (Horizontal, Span 2) */}
          <motion.div 
            className={`${styles.card} ${styles.span2} ${styles.cardColor6}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardContent}>
              <span className={styles.cardBadge}>PPC Campaigns</span>
              <h3 className={styles.cardTitle}>Marketplace Advertising</h3>
              <p className={styles.cardDesc}>
                Data-backed advertising execution (Sponsored Products, Sponsored Brands) targeted to lower ad fatigue, scale sales volume, and boost overall ROAS.
              </p>
            </div>
            <div className={styles.visualWrapper}>
              <div className={styles.adsGraphContainer}>
                <div className={styles.adsGraphHeader}>
                  <span className={styles.adsMetricBadge}>ROAS: 5.8x</span>
                  <span className={styles.adsMetricBadge} style={{ background: 'rgba(40, 167, 69, 0.05)', color: '#28a745' }}>ACoS: 11%</span>
                </div>
                {/* SVG Live-looking Curve */}
                <svg className={styles.svgGraph} viewBox="0 0 200 90">
                  <path 
                    d="M10 80 Q50 65 80 50 T150 25 T190 10" 
                    fill="none" 
                    stroke="var(--brand, #330099)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    className={styles.graphLine}
                  />
                  <circle cx="190" cy="10" r="4" fill="#615FFF" className={styles.graphPoint} />
                  <circle cx="80" cy="50" r="4" fill="#ad46ff" className={styles.graphPoint} />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Product Videos (Vertical, Span 1) */}
          <motion.div 
            className={`${styles.card} ${styles.cardColor7}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.cardBadge}>Media & Reels</span>
            <h3 className={styles.cardTitle}>Product Videos</h3>
            <p className={styles.cardDesc}>
              Short-form video assets, motion layouts, and product engagement videos optimized to grab buyer focus in feeds.
            </p>
            <div className={styles.visualWrapper} style={{ height: '160px' }}>
              <div className={styles.videoPlayerMock}>
                <Image
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop"
                  alt="Video Shoot"
                  fill
                  className={styles.img}
                />
                <span className={styles.videoBadge}>+64% CTR</span>
                <div className={styles.videoPlayOverlay}>
                  <Play size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 8: Analytics & Reporting (Horizontal, Span 3) */}
          <motion.div 
            className={`${styles.card} ${styles.span3} ${styles.cardColor8}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardContent}>
              <span className={styles.cardBadge}>Business Intelligence</span>
              <h3 className={styles.cardTitle}>Analytics & Reporting</h3>
              <p className={styles.cardDesc}>
                Comprehensive reporting cycles mapping session counts, buy box splits, keyword rank improvements, conversion leaks, and operational trends.
              </p>
            </div>
            <div className={styles.visualWrapper}>
              <div className={styles.analyticsMock}>
                <div className={styles.analyticsGrid}>
                  <div className={styles.analyticsItem}>
                    <span className={styles.analyticsLabel}>Traffic</span>
                    <span className={styles.analyticsValue}>142K</span>
                    <span className={styles.analyticsTrend}>
                      <TrendingUp size={10} /> +32%
                    </span>
                  </div>
                  <div className={styles.analyticsItem}>
                    <span className={styles.analyticsLabel}>Sales Revenue</span>
                    <span className={styles.analyticsValue}>$48.2K</span>
                    <span className={styles.analyticsTrend}>
                      <TrendingUp size={10} /> +44%
                    </span>
                  </div>
                  <div className={styles.analyticsItem}>
                    <span className={styles.analyticsLabel}>Conv. Rate</span>
                    <span className={styles.analyticsValue}>4.8%</span>
                    <span className={styles.analyticsTrend}>
                      <TrendingUp size={10} /> +1.2%
                    </span>
                  </div>
                </div>
                {/* Horizontal custom bar charts */}
                <div className={styles.analyticsChartArea}>
                  <div className={`${styles.chartBar} ${styles.chartBar1}`} />
                  <div className={`${styles.chartBar} ${styles.chartBar2}`} />
                  <div className={`${styles.chartBar} ${styles.chartBar3}`} />
                  <div className={`${styles.chartBar} ${styles.chartBar4}`} />
                  <div className={`${styles.chartBar} ${styles.chartBar5}`} />
                  <div className={`${styles.chartBar} ${styles.chartBar6}`} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
