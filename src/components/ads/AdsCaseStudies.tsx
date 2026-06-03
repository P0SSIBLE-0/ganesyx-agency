'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './AdsCaseStudies.module.css';

import { adsCaseStudies as caseStudiesData } from '@/data/work';


export default function AdsCaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState<string>('case-kr-college');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCaseId((currentId) => {
        const currentIndex = caseStudiesData.findIndex((item) => item.id === currentId);
        const nextIndex = (currentIndex + 1) % caseStudiesData.length;
        return caseStudiesData[nextIndex].id;
      });
    }, 4000); // changes every 4 seconds

    return () => clearInterval(timer);
  }, [activeCaseId]);

  // Center active tab in the scroll view when activeCaseId changes
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const activeTabEl = scrollContainerRef.current.querySelector(
        `.${styles.brandTabActive}`
      ) as HTMLElement;

      if (activeTabEl) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const tabOffsetLeft = activeTabEl.offsetLeft;
        const tabWidth = activeTabEl.offsetWidth;

        // Calculate targeted scroll position to center the active tab card
        const targetScrollLeft = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);

        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCaseId]);

  const activeCase = caseStudiesData.find((item) => item.id === activeCaseId) || caseStudiesData[0];

  // Framer Motion panel animation variants
  const panelVariants: Variants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    exit: {
      opacity: 0,
      x: -25,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section className={styles.section} id="ads-case-studies">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.preHeading}>Success Stories</span>
          <h2 className={styles.title}>Data-Backed Brand Case Studies</h2>
          <p className={styles.headerDesc}>
            See how Ganesyx combines creative design and algorithmic optimization to scale actual advertising campaigns.
          </p>
        </div>

        {/* Split Pane Interface */}
        <div className={styles.splitPane}>

          {/* Top: Active Showcase Card */}
          <div className={styles.showcasePanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseId}
                className={styles.showcaseCard}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >

                {/* Details layout */}
                <div className={styles.showcaseGrid}>

                  {/* Left Column: Metrics and Copy */}
                  <div className={styles.detailsCol}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardIndustry}>{activeCase.industry}</span>
                      <h3 className={styles.cardBrandName}>{activeCase.brand}</h3>
                      <p className={styles.cardSubtitle}>{activeCase.subtitle}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className={styles.metricsGrid}>
                      {activeCase.metrics.map((metric, idx) => (
                        <div key={idx} className={styles.metricItem}>
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Challenges and Solutions */}
                    <div className={styles.strategyBlock}>
                      <div className={styles.strategyHeading}>
                        <TrendingUp size={14} className={styles.strategyIcon} />
                        <span>Scaling Framework</span>
                      </div>

                      <div className={styles.strategyRow}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        <p className={styles.strategyText}>
                          <strong>Challenge:</strong> {activeCase.challenge}
                        </p>
                      </div>

                      <div className={styles.strategyRow}>
                        <CheckCircle size={14} className={styles.checkIcon} />
                        <p className={styles.strategyText}>
                          <strong>Solution:</strong> {activeCase.solution}
                        </p>
                      </div>
                    </div>

                    {/* Footer Channels badges */}
                    <div className={styles.channelsRow}>
                      <span className={styles.channelsLabel}>Channels:</span>
                      <div className={styles.channelBadges}>
                        {activeCase.channels.map((chan, idx) => (
                          <span key={idx} className={styles.channelBadge}>{chan}</span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Creative Mockup Thumbnail */}
                  <div className={styles.mediaCol}>
                    <div
                      className={styles.imageContainer}
                      onClick={() => setIsModalOpen(true)}
                      style={{ cursor: 'zoom-in' }}
                    >
                      <img
                        src={activeCase.image}
                        alt={`${activeCase.brand} Ad Creative`}
                        className={styles.mockupImage}
                      />
                      <div className={styles.imageOverlay} />
                      <div className={styles.creativeBadge}>Ad Creative</div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom: Vertical Brand Tabs with Left/Right Buttons */}
          <div className={styles.tabsSliderContainer}>
            {caseStudiesData.length > 3 && (
              <>
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.navBtnLeft}`}
                  onClick={() => scroll('left')}
                  aria-label="Scroll case studies left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.navBtnRight}`}
                  onClick={() => scroll('right')}
                  aria-label="Scroll case studies right"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div
              ref={scrollContainerRef}
              className={`${styles.sidebarList} ${caseStudiesData.length > 3 ? styles.sidebarListScrollable : ''}`}
            >
              {caseStudiesData.map((item) => {
                const isActive = item.id === activeCaseId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.brandTab} ${isActive ? styles.brandTabActive : ''}`}
                    onClick={() => setActiveCaseId(item.id)}
                  >
                    {/* Left border line for active state */}
                    {isActive && <motion.div className={styles.activeLine} layoutId="activeLine" />}

                    <div className={styles.brandTabContent}>
                      <div className={styles.brandTabHeader}>
                        <span className={styles.tabIndustry}>{item.industry}</span>
                        <span className={styles.tabResultBadge}>{item.highlightMetric}</span>
                      </div>
                      <span className={styles.tabBrandName}>{item.brand}</span>
                      {/* <p className={styles.tabSummaryText}>{item.tabSummary}</p> */}
                      <div className={styles.tabFooterRow}>
                        <span className={styles.tabSecondaryStat}>{item.secondaryStat}</span>
                        <span className={styles.tabViewDetails}>View Strategy →</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBlock}>
          <h3 className={styles.bottomSubtitle}>Ready to replicate these metrics for your brand?</h3>
          <a href="/contact#consultation" className={styles.ctaBtn}>
            Get a free audit
            <ArrowRight size={18} className={styles.ctaIcon} />
          </a>
        </div>

      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalCloseBtn}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
              <img
                src={activeCase.image}
                alt={`${activeCase.brand} Ad Creative Preview`}
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
