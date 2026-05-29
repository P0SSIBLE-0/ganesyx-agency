'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import styles from './AdsCaseStudies.module.css';

interface CaseStudyItem {
  id: string;
  brand: string;
  industry: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  highlightMetric: string; // The primary result badge shown on the sidebar item
  secondaryStat: string; // The secondary metric shown in the tab footer (e.g. "+152% Rev")
  tabSummary: string; // Concise one-liner for the sidebar tab card
  metrics: {
    value: string;
    label: string;
  }[];
  channels: string[];
  image: string;
}

const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-ecommerce',
    brand: 'Valentine Carry',
    industry: 'D2C E-COMMERCE',
    subtitle: 'Scaling Luxury Carry to 4.8x ROAS',
    description: 'A premium leather goods brand struggling with high CAC and stagnating social ad returns.',
    challenge: 'Rising cost-per-acquisition (CPA) on standard Meta ads due to ad creative fatigue and broad targeting overlap.',
    solution: 'Designed high-contrast, thumb-stopping product static hook banners combined with lookalike scaling structures on Meta Ads.',
    highlightMetric: '4.8x ROAS',
    secondaryStat: '+152% Revenue',
    tabSummary: 'Meta Ad creative scaling and high-intent lookalike targeting.',
    metrics: [
      { value: '4.8x', label: 'Average ROAS' },
      { value: '-32%', label: 'CAC Reduction' },
      { value: '+152%', label: 'Revenue Lift' }
    ],
    channels: ['Meta Feed', 'Instagram Stories', 'Google Shopping'],
    image: '/ads/wallet.png'
  },
  {
    id: 'case-saas',
    brand: 'Metricly AI',
    industry: 'B2B SAAS / TECH',
    subtitle: 'From High CPCs to 3.9x Pipeline ROAS',
    description: 'An AI-driven marketing analytics SaaS requiring high-intent conversions and pipeline leads.',
    challenge: 'Generic keyword bids driving up Cost-Per-Click (CPC) to $15+ with a low click-to-lead signup conversion rate.',
    solution: 'Built target intent-matched Google Search ad groups and optimized Performance Max (PMax) templates with bespoke high-speed landing pages.',
    highlightMetric: '3.9x ROAS',
    secondaryStat: '-66% CPL',
    tabSummary: 'Intent-matched Google search campaigns and landing page funnels.',
    metrics: [
      { value: '3.9x', label: 'Pipeline ROAS' },
      { value: '+180%', label: 'Lead Signups' },
      { value: '-66%', label: 'Cost Per Lead' }
    ],
    channels: ['Google Search', 'Google PMax', 'LinkedIn Ads'],
    image: '/ads/saas.png'
  },
  {
    id: 'case-bootcamp',
    brand: 'Nexus Academy',
    industry: 'EDUCATION / COHORTS',
    subtitle: 'CPMs Cut in Half via Creative Retainer',
    description: 'A high-tier design education academy launching professional UI/UX cohort bootcamps.',
    challenge: 'Fast creative wear-out causing click-through-rates (CTR) to drop and CPMs to skyrocket after 7 days of campaign launch.',
    solution: 'Deployed a continuous creative refresh retainer, batch testing multiple copy hooks and aspect-ratio layouts (1:1 and 9:16).',
    highlightMetric: '+5.2% CTR',
    secondaryStat: '300+ Students',
    tabSummary: 'Continuous creative refresh retainer combating ad fatigue.',
    metrics: [
      { value: '4.3x', label: 'Campaign ROAS' },
      { value: '5.2%', label: 'Average CTR' },
      { value: '300+', label: 'Cohort Students' }
    ],
    channels: ['Meta Ads', 'YouTube Shorts', 'TikTok Ads'],
    image: '/ads/bootcamp.png'
  }
];

export default function AdsCaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState<string>('case-ecommerce');

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
          
          {/* Left Side: Vertical Brand Tabs */}
          <div className={styles.sidebarList}>
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
                    <p className={styles.tabSummaryText}>{item.tabSummary}</p>
                    <div className={styles.tabFooterRow}>
                      <span className={styles.tabSecondaryStat}>{item.secondaryStat}</span>
                      <span className={styles.tabViewDetails}>View Strategy →</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Showcase Card */}
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
                    <div className={styles.imageContainer}>
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

        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBlock}>
          <h3 className={styles.bottomSubtitle}>Ready to replicate these metrics for your brand?</h3>
          <a href="#consultation" className={styles.ctaBtn}>
            Get a free audit
            <ArrowRight size={18} className={styles.ctaIcon} />
          </a>
        </div>

      </div>
    </section>
  );
}
