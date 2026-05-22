'use client';

import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, AlertCircle } from 'lucide-react';
import styles from './AdsBento.module.css';

// Avatars for the connection graph (same as Hero to keep brand design consistent)
const teamAvatars = {
  marketer: '/avatar/avatar-ananya-kapoor.png',
  strategist: '/avatar/avatar-arjun-singhania.png',
  analyst: '/avatar/avatar-ishita-verma.png',
  retention: '/avatar/avatar-priya-sharma.png'
};

export default function AdsBento() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Animation state for Chat Card
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    // Loop chat states to create a persistent, looping typing story
    const chatInterval = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(chatInterval);
  }, []);

  // Framer Motion reveal variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.15, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      }
    })
  };

  // Sparkline line-drawing settings (continuous loop)
  const pathAnimation: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: [0, 1, 1, 0],
      transition: { 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.45, 0.9, 1]
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Centered Header */}
        <div className={styles.headerBlock}>
          <span className={styles.preHeading}>Why Us</span>
          <h2 className={styles.title}>Got a Killer Product? We’ve Got the Perfect Audience</h2>
        </div>

        {/* Bento Grid (Grid-based layout instead of stacked columns) */}
        {isMounted && (
          <div className={styles.grid}>
            
            {/* Card 1: Chat Ghosting (ROW 1, SPAN 2 COLS) */}
            <motion.div 
              className={`${styles.card} ${styles.cardGhosting}`} 
              variants={cardVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Tired of agencies ghosting you after promising the world?
                </h3>
                <p className={styles.cardDesc}>
                  We're here to stay and deliver results.
                </p>
              </div>

              {/* Skeleton Chat Widget */}
              <div className={styles.chatSkeleton}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatDotRed} />
                  <span className={styles.chatHeaderName}>Slack Campaign Thread</span>
                  <span className={styles.chatHeaderStatus}>Live updates</span>
                </div>
                
                <div className={styles.chatBody}>
                  {/* Message 1: Client */}
                  <div className={styles.msgLeft}>
                    <div className={styles.chatAvatar}>Client</div>
                    <div className={styles.msgBubbleLeft}>
                      Are our Meta Ads live yet? Spent $5k but see 0 sales...
                    </div>
                  </div>

                  {/* Message 2: Client again (Ghosted) */}
                  <div className={`${styles.msgLeft} ${chatStep >= 1 ? styles.visibleMsg : styles.hiddenMsg}`}>
                    <div className={styles.chatAvatar}>Client</div>
                    <div className={styles.msgBubbleLeft}>
                      Hello? Any update?
                    </div>
                  </div>

                  {/* Ghost Status Indicator */}
                  <div className={`${styles.ghostAlert} ${chatStep >= 2 ? styles.visibleMsg : styles.hiddenMsg}`}>
                    <AlertCircle size={13} />
                    <span>Read 2 days ago • No response</span>
                  </div>

                  {/* Typing Indicator */}
                  <div className={`${styles.msgTypingRow} ${chatStep === 3 ? styles.visibleMsg : styles.hiddenMsg}`}>
                    <div className={styles.chatAvatarAgency}>G</div>
                    <div className={styles.typingIndicator}>
                      <span className={styles.typingDot}></span>
                      <span className={styles.typingDot}></span>
                      <span className={styles.typingDot}></span>
                    </div>
                    <span className={styles.typingText}>Ganesyx typing...</span>
                  </div>

                  {/* Message 3: Ganesyx Responds */}
                  <div className={`${styles.msgRight} ${chatStep >= 4 ? styles.visibleMsg : styles.hiddenMsg}`}>
                    <div className={styles.msgBubbleRight}>
                      Hey! Yes, ROAS is at 4.5x today. We scaled the top performing ad set by 25%. Here is the dashboard.
                    </div>
                    <div className={styles.chatAvatarAgency}>G</div>
                  </div>

                  {/* Message 4: Client replies happily */}
                  <div className={`${styles.msgLeft} ${chatStep >= 5 ? styles.visibleMsg : styles.hiddenMsg}`}>
                    <div className={styles.chatAvatar}>Client</div>
                    <div className={styles.msgBubbleLeft}>
                      Wow! Appreciate the quick update and optimization! Let's scale further.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Growth Comparison Bar Chart (ROW 1, SPAN 1 COL) */}
            <motion.div 
              className={`${styles.card} ${styles.cardFailures}`} 
              variants={cardVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Our clients had enough of failures.
                </h3>
                <p className={styles.cardDesc}>
                  See how we turned their businesses around.
                </p>
              </div>

              {/* Graphic Skeleton: Comparison Bar Chart (Continuous loop) */}
              <div className={styles.chartSkeleton}>
                <div className={styles.chartTitleRow}>
                  <span className={styles.chartMetric}>Revenue Growth Metric</span>
                  <span className={styles.chartPeriod}>Live tracker</span>
                </div>

                <div className={styles.chartBodyGrid}>
                  {/* Y-axis Labels */}
                  <div className={styles.yAxis}>
                    <span className={styles.chartLabelText}>Ganesyx</span>
                    <span className={styles.chartLabelText}>Others</span>
                  </div>

                  {/* Chart Bars */}
                  <div className={styles.barArea}>
                    <div className={styles.gridLinesContainer}>
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />
                    </div>

                    {/* Ganesyx Bar (Looping) */}
                    <div className={styles.barRow}>
                      <motion.div 
                        className={styles.barPurple}
                        animate={{ width: ['0%', '85%', '85%', '0%'] }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          times: [0, 0.35, 0.9, 1] 
                        }}
                      >
                        <span className={styles.barPercent}>85%</span>
                      </motion.div>
                    </div>

                    {/* Others Bar (Looping) */}
                    <div className={styles.barRow}>
                      <motion.div 
                        className={styles.barGray}
                        animate={{ width: ['0%', '30%', '30%', '0%'] }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          times: [0, 0.35, 0.9, 1],
                          delay: 0.2
                        }}
                      >
                        <span className={styles.barPercent}>30%</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* X-axis ticks */}
                <div className={styles.xAxis}>
                  <span>0%</span>
                  <span>30%</span>
                  <span>60%</span>
                  <span>90%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Discounts Done Right (ROW 2-3, SPAN 1 COL, TALL CARD) */}
            <motion.div 
              className={`${styles.card} ${styles.cardDiscounts}`} 
              variants={cardVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Discounts Done Right:
                </h3>
                <p className={styles.cardDesc}>
                  Think your brand deserves more than mediocre marketing?
                </p>
              </div>

              {/* Graphic Skeleton: Discounts done right layout */}
              <div className={styles.discountGraphicArea}>
                
                {/* Outer circle layout */}
                <div className={styles.glowRing}>
                  
                  {/* Delivery Truck Circle badge */}
                  <motion.div 
                    className={styles.truckBadge}
                    animate={{ 
                      x: [0, 2, -1, 2, 0],
                      y: [0, -1, 1, 0, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.truckIcon}>
                      <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </motion.div>

                  {/* Rupee Circle Badge */}
                  <motion.div 
                    className={styles.rupeeBadge}
                    animate={{ 
                      y: [0, -6, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  >
                    <span className={styles.currencySymbol}>₹</span>
                  </motion.div>

                  {/* 10% Off Label tag */}
                  <motion.div 
                    className={styles.percentOffTag}
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  >
                    <span className={styles.dotHole} />
                    <span className={styles.tagText}>10% Off</span>
                  </motion.div>

                  {/* Purple Price Pill */}
                  <motion.div 
                    className={styles.pricePill}
                    animate={{ 
                      scale: [1, 1.03, 1] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <span className={styles.priceText}>₹ 99</span>
                  </motion.div>

                </div>

              </div>
            </motion.div>

            {/* Card 4: Battle Tested Strategies (ROW 2, SPAN 1 COL) */}
            <motion.div 
              className={`${styles.card} ${styles.cardStrategies}`} 
              variants={cardVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Battle tested strategies:
                </h3>
                <p className={styles.cardDesc}>
                  We use advanced data analytics tools to track your campaign performance and tailor strategies that work.
                </p>
              </div>

              {/* Graphic Skeleton: Coordinate Grid Sparkline */}
              <div className={styles.sparklineGridSkeleton}>
                <div className={styles.gridOverlay}>
                  {/* Horizontal & Vertical gridlines */}
                  {[...Array(6)].map((_, i) => (
                    <div key={`h-${i}`} className={styles.hGridline} style={{ top: `${i * 20}%` }} />
                  ))}
                  {[...Array(13)].map((_, i) => (
                    <div key={`v-${i}`} className={styles.vGridline} style={{ left: `${i * 8.33}%` }} />
                  ))}
                </div>

                {/* Sparkline Drawing wave (looping) */}
                <svg className={styles.sparklineSvg} viewBox="0 0 500 110">
                  <motion.path
                    d="M 0 95 Q 60 85, 120 75 T 240 70 T 360 35 T 500 20"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="6"
                    fill="none"
                    variants={pathAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d="M 0 95 Q 60 85, 120 75 T 240 70 T 360 35 T 500 20"
                    stroke="#ffffff"
                    strokeWidth="3.2"
                    fill="none"
                    variants={pathAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  
                  {/* Pulsing indicator dot */}
                  <motion.circle
                    cx="500"
                    cy="20"
                    r="5.5"
                    className={styles.glowingDot}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Card 6: Creative Hook Testing (ROW 2, SPAN 1 COL) */}
            <motion.div 
              className={`${styles.card} ${styles.cardCreative}`} 
              variants={cardVariants}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  A/B Creative Testing
                </h3>
                <p className={styles.cardDesc}>
                  We test multiple hooks and visual styles to pinpoint the highest converting winners for your brand.
                </p>
              </div>

              {/* Graphic Skeleton: Creative A/B testing (Continuous loop) */}
              <div className={styles.creativeSkeleton}>
                <div className={styles.creativeHeader}>
                  <span className={styles.creativeMetric}>CTR Performance</span>
                  <span className={styles.creativeStatus}>A/B Split Test</span>
                </div>

                <div className={styles.creativeBody}>
                  {/* Ad A Box (Winner) */}
                  <div className={styles.adBox}>
                    <div className={styles.adBoxHeader}>
                      <span className={styles.adLabel}>Ad A: Emotional Hook</span>
                      <motion.span 
                        className={styles.winnerBadge}
                        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.9, 1] }}
                      >
                        Winner
                      </motion.span>
                    </div>
                    <div className={styles.adBarContainer}>
                      <motion.div 
                        className={styles.adBarPurple}
                        animate={{ width: ['0%', '75%', '75%', '0%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.9, 1] }}
                      />
                      <motion.span 
                        className={styles.adCtrText}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}
                      >
                        4.8% CTR
                      </motion.span>
                    </div>
                  </div>

                  {/* Ad B Box (Paused) */}
                  <div className={styles.adBox}>
                    <div className={styles.adBoxHeader}>
                      <span className={styles.adLabel}>Ad B: Benefit Hook</span>
                      <motion.span 
                        className={styles.pausedBadge}
                        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.35, 0.9, 1], delay: 0.15 }}
                      >
                        Paused
                      </motion.span>
                    </div>
                    <div className={styles.adBarContainer}>
                      <motion.div 
                        className={styles.adBarGray}
                        animate={{ width: ['0%', '22%', '22%', '0%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.9, 1], delay: 0.15 }}
                      />
                      <motion.span 
                        className={styles.adCtrText}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.9, 1], delay: 0.15 }}
                      >
                        1.2% CTR
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Team Bubble Partner Graph (ROW 3, SPAN 3 COLS) */}
            <motion.div 
              className={`${styles.card} ${styles.cardTeam}`} 
              variants={cardVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  We're not just another agency.
                </h3>
                <p className={styles.cardDesc}>
                  We're your partner in growth, dedicated to boosting retention rates and profitability.
                </p>
              </div>

              {/* Graphic Skeleton: Node Network */}
              <div className={styles.networkSkeleton}>
                {/* Desktop SVG connections (Horizontal layout - viewBox 0 0 800 180) */}
                <svg className={`${styles.networkLines} ${styles.networkLinesDesktop}`} viewBox="0 0 800 180">
                  <line x1="120" y1="54" x2="496" y2="54" className={styles.connectingLine} />
                  <line x1="304" y1="126" x2="496" y2="54" className={styles.connectingLine} />
                  <line x1="680" y1="126" x2="496" y2="54" className={styles.connectingLine} />
                </svg>

                {/* Mobile SVG connections (Y-shape layout - viewBox 0 0 500 120) */}
                <svg className={`${styles.networkLines} ${styles.networkLinesMobile}`} viewBox="0 0 500 120">
                  <line x1="80" y1="30" x2="250" y2="54" className={styles.connectingLine} />
                  <line x1="160" y1="90" x2="250" y2="54" className={styles.connectingLine} />
                  <line x1="390" y1="90" x2="250" y2="54" className={styles.connectingLine} />
                </svg>

                {/* Node 1: Performance Marketer */}
                <div className={`${styles.node} ${styles.nodeMarketer}`}>
                  <img src={teamAvatars.marketer} alt="Performance Marketer" className={styles.nodeAvatar} />
                  <span className={styles.nodeLabel}>Performance Marketer</span>
                </div>

                {/* Node 2: Data Analyst */}
                <div className={`${styles.node} ${styles.nodeAnalyst}`}>
                  <img src={teamAvatars.analyst} alt="Data Analyst" className={styles.nodeAvatar} />
                  <span className={styles.nodeLabel}>Data Analyst</span>
                </div>

                {/* Node 3: Creative Strategist (Center Node) */}
                <div className={`${styles.node} ${styles.nodeStrategist}`}>
                  <img src={teamAvatars.strategist} alt="Creative Strategist" className={styles.nodeAvatar} />
                  <span className={styles.nodeLabel}>Creative Strategist</span>
                </div>

                {/* Node 4: Retention Specialist */}
                <div className={`${styles.node} ${styles.nodeRetention}`}>
                  <img src={teamAvatars.retention} alt="Retention Specialist" className={styles.nodeAvatar} />
                  <span className={styles.nodeLabel}>Retention Specialist</span>
                </div>
              </div>
            </motion.div>

          </div>
        )}

        {/* Bottom Banner */}
        <div className={styles.bottomBlock}>
          <h3 className={styles.bottomSubtitle}>Think your brand deserves more than mediocre marketing?</h3>
          <a href="#consultation" className={styles.ctaBtn}>
            Schedule a call
            <ArrowRight size={18} className={styles.ctaIcon} />
          </a>
        </div>

      </div>
    </section>
  );
}
