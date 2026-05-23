'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import styles from './MarketplaceSuccess.module.css';

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  platforms: string[];
  image: string;
  stats: Stat[];
  color: string;
  glowColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    category: 'Beauty & Skincare',
    title: 'GlowRx Botanicals',
    subtitle: 'Expanding Marketplace Footprint & ROAS Optimization',
    platforms: ['Amazon', 'Nykaa'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
    color: '#ff6b8b',
    glowColor: 'rgba(255, 107, 139, 0.15)',
    stats: [
      { value: '+188%', label: 'Revenue Growth' },
      { value: '-56%', label: 'ACOS Reduction' },
      { value: '4.8x', label: 'Average ROAS' }
    ]
  },
  {
    id: '2',
    category: 'Consumer Tech',
    title: 'AeroSound Labs',
    subtitle: 'From Launch to Bestseller Status',
    platforms: ['Amazon', 'Flipkart'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    color: '#615fff',
    glowColor: 'rgba(97, 95, 255, 0.15)',
    stats: [
      { value: '+240%', label: 'Organic Traffic' },
      { value: '+115%', label: 'Conversion Rate' },
      { value: '#1 Rank', label: 'Main Keywords' }
    ]
  },
  {
    id: '3',
    category: 'Healthy Snacks',
    title: 'BiteFuel Foods',
    subtitle: 'Dominating Quick Commerce Channels',
    platforms: ['Zepto', 'Blinkit', 'Amazon'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop',
    color: '#28a745',
    glowColor: 'rgba(40, 167, 105, 0.15)',
    stats: [
      { value: '+310%', label: 'Q-Commerce Sales' },
      { value: '+45%', label: 'Add-To-Cart CTR' },
      { value: '50k+', label: 'Monthly Orders' }
    ]
  },
  {
    id: '4',
    category: 'Fashion & Activewear',
    title: 'Veloce Apparel',
    subtitle: 'Optimizing Global Direct-to-Consumer Funnels',
    platforms: ['Myntra', 'Ajio', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',
    color: '#e83e8c',
    glowColor: 'rgba(232, 62, 140, 0.15)',
    stats: [
      { value: '+210%', label: 'Sales Growth' },
      { value: '-40%', label: 'Customer Acq. Cost' },
      { value: '6.2x', label: 'Ad ROAS' }
    ]
  },
  {
    id: '5',
    category: 'Home & Living',
    title: 'ZenHome Decor',
    subtitle: 'Revamping Branded Storefront Conversions',
    platforms: ['Amazon', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop',
    color: '#fd7e14',
    glowColor: 'rgba(253, 126, 20, 0.15)',
    stats: [
      { value: '+175%', label: 'Conversion Rate' },
      { value: '+85%', label: 'Average Order Value' },
      { value: '5.2x', label: 'Ad ROAS' }
    ]
  }
];

export default function MarketplaceSuccess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Track viewport sizes to change visible card layout count dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index remains in bounds when resizing visible count
  useEffect(() => {
    const maxIdx = Math.max(0, caseStudies.length - visibleCards);
    if (currentIndex > maxIdx) {
      setCurrentIndex(maxIdx);
    }
  }, [visibleCards, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(caseStudies.length - visibleCards, prev + 1));
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentIndex < caseStudies.length - visibleCards) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  const totalDots = caseStudies.length - visibleCards + 1;

  return (
    <section className={styles.section} id="success-stories">
      <div className={styles.container}>
        {/* Section Header with Carousel Actions */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.subTitle}>
              <Sparkles size={12} style={{ marginRight: 4 }} />
              CASE STUDIES
            </span>
            <h2 className={styles.title}>
              Proven Growth. <span className={styles.brandText}>Real Numbers.</span>
            </h2>
            <p className={styles.desc}>
              Read how we partner with leading brands to optimize listings, drive performance campaigns, and scale revenue across e-commerce marketplaces.
            </p>
          </div>
          
          {/* Slider Navigation Buttons */}
          <div className={styles.carouselNav}>
            <button 
              className={`${styles.navButton} ${currentIndex === 0 ? styles.navButtonDisabled : ''}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Success Story"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className={`${styles.navButton} ${currentIndex >= caseStudies.length - visibleCards ? styles.navButtonDisabled : ''}`}
              onClick={handleNext}
              disabled={currentIndex >= caseStudies.length - visibleCards}
              aria-label="Next Success Story"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div 
          className={styles.carouselViewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / caseStudies.length)}%)`,
              width: `${(caseStudies.length / visibleCards) * 100}%`
            }}
          >
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className={styles.carouselSlide}
                style={{ width: `${100 / caseStudies.length}%` }}
              >
                <div
                  className={styles.card}
                  style={{ '--glow-color': caseStudy.glowColor } as React.CSSProperties}
                >
                  {/* Image Banner */}
                  <div className={styles.imgWrapper}>
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImg}
                    />
                    <div className={styles.imgOverlay} />
                    <span className={styles.categoryBadge} style={{ backgroundColor: caseStudy.color }}>
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className={styles.cardBody}>
                    {/* Platforms List */}
                    <div className={styles.platforms}>
                      {caseStudy.platforms.map((plat) => (
                        <span key={plat} className={styles.platformBadge}>
                          {plat}
                        </span>
                      ))}
                    </div>

                    <h3 className={styles.cardTitle}>{caseStudy.title}</h3>
                    <p className={styles.cardSubtitle}>{caseStudy.subtitle}</p>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                      {caseStudy.stats.map((stat, sIdx) => (
                        <div key={sIdx} className={styles.statBox}>
                          <span className={styles.statValue} style={{ color: caseStudy.color }}>
                            {stat.value}
                          </span>
                          <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Action Link */}
                    <div className={styles.actionWrapper}>
                      <a href="#contact" className={styles.actionLink}>
                        Scale Your Brand
                        <ArrowRight size={14} className={styles.arrow} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        {totalDots > 1 && (
          <div className={styles.dotsContainer}>
            {Array.from({ length: totalDots }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`${styles.dot} ${currentIndex === dotIdx ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide group ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
