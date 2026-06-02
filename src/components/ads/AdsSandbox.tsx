'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Search, Sparkles, Info, Heart, MessageCircle, Send, Bookmark, Globe } from 'lucide-react';
import styles from './AdsSandbox.module.css';

interface AdTemplate {
  headline: string;
  description: string;
  primaryText: string;
  ctaText: string;
  image: string;
  tagline: string;
  profileName: string;
  profileAvatar: string;
  googleUrl: string;
}

const templates: Record<string, AdTemplate> = {
  ecommerce: {
    headline: "Minimalist Leather Wallet — Engineered for Modern Carry",
    description: "Crafted from full-grain vegetable-tanned leather, this slim wallet keeps your cards secure and pocket bulk-free. Shop our limited run today.",
    primaryText: "Tired of bulky pockets? Our minimalist leather wallet is designed to hold up to 10 cards and cash while keeping a slim profile. Get 15% off your first purchase.",
    ctaText: "Shop Now",
    image: "/ads/wallet.png",
    tagline: "LUXURY REDEFINED",
    profileName: "VALENTINE CARRY",
    profileAvatar: "VC",
    googleUrl: "www.valentinecarry.com/wallet/slim"
  },
  saas: {
    headline: "Stop Guessing Your CAC — Real-Time Marketing Dashboards",
    description: "Track all your marketing channels in one unified, modern dashboard. Integrate Google, Meta, and TikTok ads in 2 clicks. Start free.",
    primaryText: "Are you wasting budget on ad campaigns that don't convert? Get absolute clarity over your performance marketing ROI. Start your 14-day free trial today.",
    ctaText: "Sign Up",
    image: "/ads/saas.png",
    tagline: "INTELLIGENT ANALYTICS",
    profileName: "METRICLY AI",
    profileAvatar: "M",
    googleUrl: "www.metricly.ai/dashboards/marketing"
  },
  bootcamp: {
    headline: "Master UI/UX Design — Learn by Building Real Products",
    description: "Join our intensive 12-week design cohort. Build a job-ready portfolio, learn Figma, and get mentored by lead designers. Apply today.",
    primaryText: "Break into tech with our design bootcamp. Learn directly from industry experts, work on real projects, and access our exclusive partner hiring network.",
    ctaText: "Apply Now",
    image: "/images/ganesyx_social.png",
    tagline: "CAREER ACCELERATION",
    profileName: "NEXUS ACADEMY",
    profileAvatar: "N",
    googleUrl: "www.nexusacademy.com/design/bootcamp"
  }
};

const performanceMetrics: Record<string, { ctr: string; convRate: string; roas: string }> = {
  ecommerce: { ctr: "4.8% - 6.2%", convRate: "3.8%", roas: "4.8x" },
  saas: { ctr: "2.9% - 4.1%", convRate: "4.5%", roas: "3.9x" },
  bootcamp: { ctr: "3.6% - 5.0%", convRate: "5.2%", roas: "4.3x" }
};

interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  text: string;
}

const hotspotsData: Record<string, Hotspot[]> = {
  'meta-feed': [
    {
      id: 'meta-primary',
      x: '30%',
      y: '16%',
      title: 'Primary Copy Hook',
      text: 'Ganesyx designs these hooks to capture attention in the first 3 lines before the "See More" button truncates the copy on mobile.'
    },
    {
      id: 'meta-media',
      x: '50%',
      y: '50%',
      title: 'Scroll-Stopping Asset',
      text: 'High-contrast, brand-aligned visual assets optimized to disrupt feed-scrolling speed and command viewer attention.'
    },
    {
      id: 'meta-headline',
      x: '40%',
      y: '87%',
      title: 'Direct-Value Headline',
      text: 'We focus on clear value propositions or direct offers to give users immediate context within 0.5 seconds.'
    },
    {
      id: 'meta-cta',
      x: '85%',
      y: '87%',
      title: 'Action Trigger CTA',
      text: 'High-contrast conversion button placed strategically to guide users directly into the marketing funnel.'
    }
  ],
  'meta-story': [
    {
      id: 'story-branding',
      x: '25%',
      y: '6%',
      title: 'Immediate Brand Recall',
      text: 'Clear avatar placement and logo branding ensuring organic recall even during rapid story-tapping.'
    },
    {
      id: 'story-media',
      x: '50%',
      y: '45%',
      title: '9:16 Full Screen Layout',
      text: 'Immersive vertical video or static structure designed with "safe zones" in mind so key elements are never cut off by platform UI.'
    },
    {
      id: 'story-swipe',
      x: '50%',
      y: '93%',
      title: 'Thumb-Optimized Interaction',
      text: 'We position interactive overlays and CTA prompts in the bottom 20% safe zone for natural mobile navigation.'
    }
  ],
  'google-search': [
    {
      id: 'google-adlabel',
      x: '15%',
      y: '10%',
      title: 'Sponsored Transparency',
      text: 'Complies with official Google policies while maintaining a highly professional visual profile to establish trust.'
    },
    {
      id: 'google-headline',
      x: '50%',
      y: '28%',
      title: 'Search Intent Match',
      text: 'We split-test dynamic search terms to match the exact query keywords. This increases CTR and lowers CPC by improving Quality Score.'
    },
    {
      id: 'google-desc',
      x: '50%',
      y: '55%',
      title: 'Benefit-Rich Snippets',
      text: 'Highly descriptive copy with exact secondary search terms to occupy maximum screen real-estate in Search Results.'
    },
    {
      id: 'google-sitelinks',
      x: '50%',
      y: '80%',
      title: 'Interactive Extensions',
      text: 'Custom sitelinks that deep-link directly to category pages. Adds visual footprint and increases CTR by up to 20%.'
    }
  ]
};

export default function AdsSandbox() {
  const [platform, setPlatform] = useState<'meta-feed' | 'meta-story' | 'google-search'>('meta-feed');
  const [templateKey, setTemplateKey] = useState<string>('ecommerce');

  // Ad Copy Custom States
  const [headline, setHeadline] = useState('');
  const [primaryText, setPrimaryText] = useState('');
  const [description, setDescription] = useState('');
  const [ctaText, setCtaText] = useState('');

  // Active Hotspot tooltip state
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  // Sync templates on change
  useEffect(() => {
    const selected = templates[templateKey];
    setHeadline(selected.headline);
    setPrimaryText(selected.primaryText);
    setDescription(selected.description);
    setCtaText(selected.ctaText);
    setActiveHotspot(null);
  }, [templateKey]);

  // Sync active platform transitions
  useEffect(() => {
    setActiveHotspot(null);
  }, [platform]);

  const activeTemplate = templates[templateKey];
  const metrics = performanceMetrics[templateKey];
  const currentHotspots = hotspotsData[platform] || [];

  return (
    <section className={styles.section} id="ads-sandbox">
      <div className={styles.container}>

        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.preHeading}>Ad Simulator</span>
          <h2 className={styles.title}>Interactive Platform Sandbox</h2>
          <p className={styles.subTitle}>
            See how Ganesyx engineers campaigns for maximum conversion. Toggle channels, test custom copy, and discover our design frameworks in real-time.
          </p>
          <div className={styles.partnerLogosRow}>
            <span className={styles.partnerLabel}>Certified Channels:</span>
            <div className={styles.partnerLogos}>
              <img src="/logos/meta.svg" alt="Meta Partner Logo" className={styles.partnerLogoMeta} />
              <img src="/logos/google-wordmark.svg" alt="Google Partner Logo" className={styles.partnerLogoGoogle} />
            </div>
          </div>
        </div>

        {/* Sandbox Grid */}
        <div className={styles.sandboxGrid}>

          {/* Left Column: Sandbox Controls Panel */}
          <div className={styles.controlsPanel}>

            {/* Step 1: Platform Selection */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>1. Select Target Channel</label>
              <div className={styles.platformTabs}>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${platform === 'meta-feed' ? styles.tabBtnActive : ''}`}
                  onClick={() => setPlatform('meta-feed')}
                >
                  <img src="/logos/meta.svg" alt="Meta Logo" className={styles.tabLogo} />
                  Meta Feed
                </button>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${platform === 'meta-story' ? styles.tabBtnActive : ''}`}
                  onClick={() => setPlatform('meta-story')}
                >
                  <img src="/logos/instagram-icon.svg" alt="Instagram Logo" className={styles.tabLogo} style={{ height: '13px' }} />
                  Meta Story
                </button>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${platform === 'google-search' ? styles.tabBtnActive : ''}`}
                  onClick={() => setPlatform('google-search')}
                >
                  <img src="/logos/google-wordmark.svg" alt="Google Logo" className={styles.tabLogo} style={{ height: '11px' }} />
                  Google Search
                </button>
              </div>
            </div>

            {/* Step 2: Template Selection */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>2. Load Industry Preset</label>
              <div className={styles.presetsRow}>
                <button
                  type="button"
                  className={`${styles.presetBtn} ${templateKey === 'ecommerce' ? styles.presetBtnActive : ''}`}
                  onClick={() => setTemplateKey('ecommerce')}
                >
                  E-Commerce
                </button>
                <button
                  type="button"
                  className={`${styles.presetBtn} ${templateKey === 'saas' ? styles.presetBtnActive : ''}`}
                  onClick={() => setTemplateKey('saas')}
                >
                  B2B SaaS
                </button>
                <button
                  type="button"
                  className={`${styles.presetBtn} ${templateKey === 'bootcamp' ? styles.presetBtnActive : ''}`}
                  onClick={() => setTemplateKey('bootcamp')}
                >
                  Design Cohort
                </button>
              </div>
            </div>

            {/* Step 3: Custom Text Inputs */}
            <div className={styles.controlGroup}>
              <label className={styles.controlLabel}>3. Customize Ad Copy (Live Updates)</label>

              {/* Conditional rendering of input fields based on platform */}
              {platform !== 'google-search' && (
                <div className={styles.inputField}>
                  <label className={styles.fieldLabel}>Primary Text / Hook</label>
                  <textarea
                    rows={3}
                    className={styles.textInput}
                    value={primaryText}
                    onChange={(e) => setPrimaryText(e.target.value)}
                    placeholder="Enter copy hook..."
                    maxLength={220}
                  />
                  <span className={styles.charCount}>{primaryText.length}/220 chars</span>
                </div>
              )}

              <div className={styles.inputField}>
                <label className={styles.fieldLabel}>Headline / Main Offer</label>
                <input
                  type="text"
                  className={styles.textInput}
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="Enter ad headline..."
                  maxLength={65}
                />
                <span className={styles.charCount}>{headline.length}/65 chars</span>
              </div>

              {platform === 'google-search' && (
                <div className={styles.inputField}>
                  <label className={styles.fieldLabel}>Description Text</label>
                  <textarea
                    rows={3}
                    className={styles.textInput}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter search description..."
                    maxLength={160}
                  />
                  <span className={styles.charCount}>{description.length}/160 chars</span>
                </div>
              )}

              <div className={styles.inputField}>
                <label className={styles.fieldLabel}>Call to Action</label>
                <select
                  className={styles.selectInput}
                  value={ctaText}
                  onChange={(e) => setCtaText(e.target.value)}
                >
                  <option value="Learn More">Learn More</option>
                  <option value="Shop Now">Shop Now</option>
                  <option value="Sign Up">Sign Up</option>
                  <option value="Apply Now">Apply Now</option>
                  <option value="Book Now">Book Now</option>
                </select>
              </div>
            </div>

            {/* Performance Projection Card */}
            <div className={styles.projectionCard}>
              <div className={styles.projectionHeader}>
                <Sparkles size={16} className={styles.projectionIcon} />
                <span className={styles.projectionTitle}>Ganesyx Optimization Target</span>
              </div>
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>{metrics.ctr}</span>
                  <span className={styles.metricLabel}>Expected CTR</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>{metrics.convRate}</span>
                  <span className={styles.metricLabel}>Avg. Conv. Rate</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricVal}>{metrics.roas}</span>
                  <span className={styles.metricLabel}>Standard ROAS</span>
                </div>
              </div>
              <p className={styles.projectionFootnote}>
                *Projections based on historical averages of optimized Ganesyx campaigns.
              </p>
            </div>

          </div>

          {/* Right Column: Live Mockup Preview Canvas */}
          <div className={styles.previewCanvas}>
            <div className={styles.canvasHeader}>
              <span className={styles.canvasStatus}>Preview Output</span>
              <span className={styles.canvasPlatform}>
                {platform === 'meta-feed' && 'Meta Feed Format'}
                {platform === 'meta-story' && 'Instagram Story Format'}
                {platform === 'google-search' && 'Google Mobile Search'}
              </span>
            </div>

            <div className={styles.mockupContainer}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={platform}
                  className={styles.mockupWrapper}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >

                  {/* HOTSPOTS LAYER */}
                  {currentHotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      className={styles.hotspotAnchor}
                      style={{ left: hotspot.x, top: hotspot.y }}
                    >
                      <button
                        type="button"
                        className={`${styles.hotspotPulse} ${activeHotspot?.id === hotspot.id ? styles.hotspotPulseActive : ''}`}
                        onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                        aria-label={`View details about ${hotspot.title}`}
                      >
                        <span className={styles.hotspotRing} />
                        <span className={styles.hotspotDot} />
                      </button>
                    </div>
                  ))}

                  {/* ACTIVE HOTSPOT TOOLTIP */}
                  <AnimatePresence>
                    {activeHotspot && (
                      <motion.div
                        className={styles.tooltipBox}
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          left: `clamp(15px, ${activeHotspot.x}, calc(100% - 240px))`,
                          top: `calc(${activeHotspot.y} + 25px)`
                        }}
                      >
                        <div className={styles.tooltipHeader}>
                          <Info size={12} className={styles.tooltipIcon} />
                          <span className={styles.tooltipTitle}>{activeHotspot.title}</span>
                        </div>
                        <p className={styles.tooltipText}>{activeHotspot.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* PLATFORM RENDERS */}
                  {platform === 'meta-feed' && (
                    <div className={styles.metaFeedCard}>

                      {/* Meta Card Header */}
                      <div className={styles.metaCardHeader}>
                        <div className={styles.metaAvatar}>
                          {activeTemplate.profileAvatar}
                        </div>
                        <div className={styles.metaHeaderDetails}>
                          <span className={styles.metaProfileName}>{activeTemplate.profileName}</span>
                          <span className={styles.metaSponsoredRow}>
                            Sponsored • <Globe size={11} />
                          </span>
                        </div>
                      </div>

                      {/* Primary Text */}
                      <p className={styles.metaPrimaryText}>
                        {primaryText}
                      </p>

                      {/* Image Block */}
                      <div className={styles.metaImageBlock}>
                        <img
                          src={activeTemplate.image}
                          alt={headline}
                          className={styles.metaImage}
                        />
                      </div>

                      {/* Headline / CTA Bottom bar */}
                      <div className={styles.metaCardBottomBar}>
                        <div className={styles.metaBottomLeft}>
                          <span className={styles.metaDomainTag}>{activeTemplate.googleUrl.split('/')[0].toUpperCase()}</span>
                          <h4 className={styles.metaHeadline}>{headline}</h4>
                        </div>
                        <button type="button" className={styles.metaCtaButton}>
                          {ctaText}
                        </button>
                      </div>

                      {/* Mock Meta Likes / Social bar */}
                      <div className={styles.metaInteractionBar}>
                        <div className={styles.interactionLeft}>
                          <span className={styles.likeIcons}>
                            <span className={`${styles.socialCircle} ${styles.blue}`}>👍</span>
                            <span className={`${styles.socialCircle} ${styles.red}`}>❤️</span>
                          </span>
                          <span className={styles.interactionCount}>142</span>
                        </div>
                        <div className={styles.interactionRight}>
                          <span>24 Comments</span>
                          <span>18 Shares</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className={styles.metaActionsRow}>
                        <button type="button" className={styles.metaActionItem}>
                          <Heart size={16} /> Like
                        </button>
                        <button type="button" className={styles.metaActionItem}>
                          <MessageCircle size={16} /> Comment
                        </button>
                        <button type="button" className={styles.metaActionItem}>
                          <Send size={16} /> Share
                        </button>
                      </div>

                    </div>
                  )}

                  {platform === 'meta-story' && (
                    <div className={styles.metaStoryWrapper}>

                      {/* Top Story Header */}
                      <div className={styles.storyTopHeader}>
                        <div className={styles.storyProgressRow}>
                          <div className={`${styles.storyProgressSegment} ${styles.active}`} />
                        </div>
                        <div className={styles.storyProfileInfo}>
                          <div className={styles.storyAvatar}>
                            {activeTemplate.profileAvatar}
                          </div>
                          <div className={styles.storyProfileText}>
                            <span className={styles.storyProfileName}>{activeTemplate.profileName.toLowerCase().replace(' ', '')}</span>
                            <span className={styles.storySponsoredText}>Sponsored</span>
                          </div>
                        </div>
                      </div>

                      {/* Story Media Background */}
                      <div className={styles.storyBgImageWrapper}>
                        <img
                          src={activeTemplate.image}
                          alt={headline}
                          className={styles.storyBgImage}
                        />
                        <div className={styles.storyGradientOverlay} />
                      </div>

                      {/* Core Content Float Overlay */}
                      <div className={styles.storyContentOverlay}>
                        <span className={styles.storyTagline}>{activeTemplate.tagline}</span>
                        <h3 className={styles.storyHeadline}>{headline}</h3>
                        <p className={styles.storyBodyCopy}>{primaryText}</p>
                      </div>

                      {/* Swipe Up Button */}
                      <div className={styles.storySwipeUpBtn}>
                        <div className={styles.swipeChevron} />
                        <span className={styles.swipeText}>{ctaText}</span>
                      </div>

                    </div>
                  )}

                  {platform === 'google-search' && (
                    <div className={styles.googleSearchCard}>

                      {/* Sponsored Header */}
                      <div className={styles.googleUrlRow}>
                        <span className={styles.googleSponsoredLabel}>Sponsored</span>
                        <span className={styles.googleDomainText}>
                          https://{activeTemplate.googleUrl.split('/')[0]} › {activeTemplate.googleUrl.split('/').slice(1).join(' › ')}
                        </span>
                      </div>

                      {/* Clickable Blue Headline */}
                      <h3 className={styles.googleSearchHeadline}>
                        {headline} | Ganesyx Agency Partner
                      </h3>

                      {/* Black Description Copy */}
                      <p className={styles.googleSearchDescription}>
                        {description}
                      </p>

                      {/* Simulated Google Sitelinks Grid (High CTR Extensions) */}
                      <div className={styles.googleSitelinksGrid}>
                        <div className={styles.sitelinkItem}>
                          <span className={styles.sitelinkTitle}>Get 15% Welcome Discount</span>
                          <span className={styles.sitelinkDesc}>Exclusive promo code applied automatically at payment.</span>
                        </div>
                        <div className={styles.sitelinkItem}>
                          <span className={styles.sitelinkTitle}>View Product Catalog</span>
                          <span className={styles.sitelinkDesc}>Explore best-sellers, new arrivals, and limited editions.</span>
                        </div>
                      </div>

                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hotspot interaction prompt */}
            <div className={styles.hotspotPrompt}>
              <Info size={13} className={styles.promptIcon} />
              <span>Hover or tap the pulsing pink hotspots on the ad to reveal Ganesyx copywriting & design strategies.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
