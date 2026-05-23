'use client';

import React, { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';
import styles from './MarketplaceProcess.module.css';

interface Step {
  num: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  pct: string;
}

export default function MarketplaceProcess() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeHeight, setActiveHeight] = useState('0px');
  const [isHovered, setIsHovered] = useState(false);

  // Initialize
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll Tracking Logic (Only runs when user is NOT hovering to avoid conflict)
  useEffect(() => {
    if (!isMounted || isHovered) return;

    const handleScroll = () => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      if (!cards || cards.length === 0) return;

      const triggerPoint = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check distance to the trigger point
        const distance = Math.abs(rect.top - triggerPoint);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = index;
        }
      });

      setActiveIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isHovered]);

  // Height Offset Recalculation (Runs when active index changes or screen resizes)
  useEffect(() => {
    if (!isMounted) return;

    const updateHeight = () => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      if (cards && cards[activeIdx]) {
        const activeCard = cards[activeIdx] as HTMLElement;
        setActiveHeight(`${activeCard.offsetTop}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Fallback: update again after a small delay to allow DOM render changes
    const timeout = setTimeout(updateHeight, 150);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timeout);
    };
  }, [isMounted, activeIdx]);

  if (!isMounted) return null;

  const steps: Step[] = [
    {
      num: '01',
      title: 'Research',
      shortDesc: 'Market, competitors, and keyword analysis.',
      longDesc: 'We deep-dive into competitors\' listings, identify high-volume search terms, map market demand, and locate immediate opportunities.',
      pct: '16%',
    },
    {
      num: '02',
      title: 'Listing Optimization',
      shortDesc: 'Improving titles, descriptions, and SEO.',
      longDesc: 'We write SEO-indexed product titles, value-driven bullet points, and descriptions optimized for marketplace ranking algorithms.',
      pct: '33%',
    },
    {
      num: '03',
      title: 'Creative Production',
      shortDesc: 'Creating premium visuals and branded assets.',
      longDesc: 'We produce lifestyle infographics, feature callout sheets, and immersive storefront designs that convert visitors into buyers.',
      pct: '50%',
    },
    {
      num: '04',
      title: 'Campaign Launch',
      shortDesc: 'Publishing listings and running ads.',
      longDesc: 'We push all optimized catalog assets live and activate targeted sponsored ads (PPC) built for low acquisition costs.',
      pct: '66%',
    },
    {
      num: '05',
      title: 'Optimization',
      shortDesc: 'Tracking rankings, CTR, and conversions.',
      longDesc: 'We monitor click-through rates, study conversion leaks, adjust keywords bid limits, and optimize budget placements daily.',
      pct: '83%',
    },
    {
      num: '06',
      title: 'Scaling',
      shortDesc: 'Expanding successful products and campaigns.',
      longDesc: 'We duplicate successful listing strategies across other products, scale profitable ad campaigns, and unlock cross-selling channels.',
      pct: '100%',
    },
  ];

  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column: Sticky Headings + Dynamic Gauge Widget */}
          <div className={styles.leftSection}>
            <span className={styles.subTitle}>
              <Compass size={12} style={{ marginRight: 4 }} />
              Methodology
            </span>
            <h2 className={styles.title}>
              Our Marketplace <span className={styles.brandText}>Growth Process</span>.
            </h2>
            <p className={styles.desc}>
              We don&apos;t guess. We follow a highly structured, data-driven optimization funnel engineered to drive repeatable sales velocity.
            </p>

            {/* Dynamic gauge widget updating on hover/active state */}
            <div className={styles.interactiveWidget}>
              <div className={styles.gaugeHeader}>
                <span className={styles.gaugePhase}>Phase {steps[activeIdx].num}</span>
                <span className={styles.gaugePct}>Completion: {steps[activeIdx].pct}</span>
              </div>
              <h4 className={styles.gaugeTitle}>{steps[activeIdx].title}</h4>
              <div className={styles.gaugeProgressTrack}>
                <div 
                  className={styles.gaugeProgressBar} 
                  style={{ width: steps[activeIdx].pct }}
                />
              </div>
              <p className={styles.gaugeDescription}>{steps[activeIdx].longDesc}</p>
            </div>
          </div>

          {/* Right Column: Interactive Timeline Grid */}
          <div 
            className={styles.rightSection}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.timeline}>
              <div className={styles.verticalLine} />
              <div 
                className={styles.activeVerticalLine} 
                style={{ height: activeHeight }}
              />

              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`${styles.card} ${activeIdx === idx ? styles.cardActive : ''}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div className={styles.timelineDot} />
                  <span className={styles.stepNumber}>{step.num}</span>
                  <h4 className={styles.cardTitle}>{step.title}</h4>
                  <p className={styles.cardDesc}>{step.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
