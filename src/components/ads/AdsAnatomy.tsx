'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AdsAnatomy.module.css';

interface HotspotDetails {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  metricVal: string;
  metricLabel: string;
  altMetricVal: string;
  altMetricLabel: string;
}

const hotspotData: Record<string, HotspotDetails> = {
  hook: {
    id: 'hook',
    label: 'Visual Hook',
    number: '01',
    title: 'The 3-Second Scroll Stopper',
    description: 'We place high-contrast, dynamic visual elements in the top 30% of the frame to capture split-second attention in fast social feeds. This disrupts cognitive scroll-inertia and forces viewers to pause.',
    metricVal: '+37%',
    metricLabel: 'Stop Rate Lift',
    altMetricVal: '0.15s',
    altMetricLabel: 'Gaze Capture Speed',
  },
  offer: {
    id: 'offer',
    label: 'Core Value Prop',
    number: '02',
    title: 'High-Contrast Value Copy',
    description: 'Clean typographic hierarchy featuring bold font weights and high-contrast color highlights. Your core value proposition is understood in a fraction of a second, without requiring the user to read external post captions.',
    metricVal: '+22%',
    metricLabel: 'Message Retention',
    altMetricVal: '1.8s',
    altMetricLabel: 'Focus Duration',
  },
  proof: {
    id: 'proof',
    label: 'Social Proof Stack',
    number: '03',
    title: 'Instant Trust & Rating Triggers',
    description: 'Layering organic customer star ratings, user counts, and review snippets directly inside the ad template. This dissolves shopper skepticism instantly, validating product credibility before the click.',
    metricVal: '+18%',
    metricLabel: 'Conversion Trust',
    altMetricVal: '4.9 ★',
    altMetricLabel: 'Star Validation',
  },
  cta: {
    id: 'cta',
    label: 'High-Contrast CTA',
    number: '04',
    title: 'Thumb-Optimized Interaction',
    description: 'The call-to-action button uses maximal visual contrast and is positioned in the lower-third region of the mobile screen for comfortable, natural thumb clicks. Prominent visual cues guide the user to take action.',
    metricVal: '+45%',
    metricLabel: 'CTR Improvement',
    altMetricVal: '2.4x',
    altMetricLabel: 'Conversion ROAS',
  },
};

export default function AdsAnatomy() {
  const [activeHotspot, setActiveHotspot] = useState<string>('hook');

  const current = hotspotData[activeHotspot] || hotspotData.hook;

  return (
    <section className={styles.section} id="ads-anatomy">
      {/* Background Glow Effects */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <motion.span
            className={styles.subTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ad Engineering
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Anatomy of a High-Converting Ad
          </motion.h2>
          <motion.p
            className={styles.headerDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dissecting the specific performance design principles Ganesyx applies to make ad campaigns stand out, engage users, and generate ROAS.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className={styles.grid}>
          
          {/* Left Column: Interactive Mobile Mockup */}
          <div className={styles.deviceArea}>
            <motion.div 
              className={styles.phoneWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.phoneScreen}>
                <div className={styles.phoneDynamicIsland} />
                
                {/* Ad Design Mockup */}
                <div className={styles.adContent}>
                  
                  {/* Hotspot 1: Visual Hook Area */}
                  <div className={styles.adHook}>
                    <div className={styles.adHookGraphic}>
                      <div className={styles.hookMesh} />
                      <svg className={styles.hookIllustration} viewBox="0 0 100 100" fill="none">
                        {/* Layered glowing rings */}
                        <motion.circle 
                          cx="50" cy="50" r="28" stroke="#b3aaf2" strokeWidth="1.5" strokeDasharray="4 4"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        />
                        <motion.circle 
                          cx="50" cy="50" r="20" stroke="#f07191" strokeWidth="2" 
                          animate={{ scale: [0.95, 1.05, 0.95] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                        <circle cx="50" cy="50" r="10" fill="#ffffff" />
                        <polygon points="50,45 54,53 46,53" fill="#b3aaf2" />
                      </svg>
                    </div>
                  </div>

                  {/* Hotspot 2: Headline copy */}
                  <div className={styles.adHeadline}>
                    Aesthetic visuals,<br />
                    engineered <span className={styles.adCopyHighlights}>to scale ROAS.</span>
                  </div>

                  {/* Hotspot 3: Ratings & Social Proof */}
                  <div className={styles.adSocialProof}>
                    <div className={styles.starsRow}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={styles.starIcon} viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className={styles.adSocialText}>10,000+ brands scaled</span>
                  </div>

                  {/* Hotspot 4: CTA Button */}
                  <button className={styles.adCtaButton} type="button">
                    Boost Your Campaign
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                </div>

                {/* Hotspot Overlays */}
                {/* Hotspot 1: Hook */}
                <div 
                  className={`${styles.hotspot} ${styles.hotspot1} ${activeHotspot === 'hook' ? styles.hotspotActive : ''}`}
                  onMouseEnter={() => setActiveHotspot('hook')}
                  onClick={() => setActiveHotspot('hook')}
                >
                  <div className={styles.hotspotRing} />
                  <div className={styles.hotspotCore} />
                </div>

                {/* Hotspot 2: Copy */}
                <div 
                  className={`${styles.hotspot} ${styles.hotspot2} ${activeHotspot === 'offer' ? styles.hotspotActive : ''}`}
                  onMouseEnter={() => setActiveHotspot('offer')}
                  onClick={() => setActiveHotspot('offer')}
                >
                  <div className={styles.hotspotRing} />
                  <div className={styles.hotspotCore} />
                </div>

                {/* Hotspot 3: Proof */}
                <div 
                  className={`${styles.hotspot} ${styles.hotspot3} ${activeHotspot === 'proof' ? styles.hotspotActive : ''}`}
                  onMouseEnter={() => setActiveHotspot('proof')}
                  onClick={() => setActiveHotspot('proof')}
                >
                  <div className={styles.hotspotRing} />
                  <div className={styles.hotspotCore} />
                </div>

                {/* Hotspot 4: CTA */}
                <div 
                  className={`${styles.hotspot} ${styles.hotspot4} ${activeHotspot === 'cta' ? styles.hotspotActive : ''}`}
                  onMouseEnter={() => setActiveHotspot('cta')}
                  onClick={() => setActiveHotspot('cta')}
                >
                  <div className={styles.hotspotRing} />
                  <div className={styles.hotspotCore} />
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Teardown Details Card */}
          <div className={styles.detailsArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className={styles.detailsCard}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.detailsCardHeader}>
                  <span className={styles.detailsLabel}>{current.label}</span>
                  <span className={styles.detailsNumber}>/{current.number}</span>
                </div>

                <h3 className={styles.detailsTitle}>{current.title}</h3>
                <p className={styles.detailsDesc}>{current.description}</p>

                <div className={styles.metricsRow}>
                  <div className={styles.metricBlock}>
                    <span className={styles.metricValue}>{current.metricVal}</span>
                    <span className={styles.metricLabel}>{current.metricLabel}</span>
                  </div>
                  <div className={styles.metricBlock}>
                    <span className={styles.metricValue}>{current.altMetricVal}</span>
                    <span className={styles.metricLabel}>{current.altMetricLabel}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Manual Toggle Tabs for Accessibility & Mobile Clickability */}
            <div className={styles.navTabs}>
              {Object.values(hotspotData).map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.navTabButton} ${activeHotspot === tab.id ? styles.navTabButtonActive : ''}`}
                  onClick={() => setActiveHotspot(tab.id)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
