'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Compass,
  Link,
  PieChart,
  FileSpreadsheet,
  Eye,
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import styles from './GeoTracking.module.css';

interface MetricDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

const trackingMetrics: MetricDetail[] = [
  {
    id: "citation",
    title: "Brand Citation Share",
    description: "The percentage of generative query responses that explicitly name or refer to your brand as a recommended solution in your target industry sectors.",
    iconName: "pieChart",
    tag: "Citation Index"
  },
  {
    id: "sentiment",
    title: "Sentiment & Recommendation Bias",
    description: "Semantic classification (Positive, Neutral, Negative) of how language models frame and describe your brand when recommending it to searchers.",
    iconName: "trendingUp",
    tag: "Brand Health"
  },
  {
    id: "association",
    title: "Entity Vector Associations",
    description: "Mapping the conceptual clusters (e.g., 'premium', 'fast scaling', 'reliable') linked to your brand within LLM high-dimensional embedding spaces.",
    iconName: "compass",
    tag: "Semantic Map"
  },
  {
    id: "attribution",
    title: "Link Attribution Footprints",
    description: "Tracking click-through footprints from live source citations, footnote hyperlinks, and card links displayed in AI Search Engine outputs.",
    iconName: "link",
    tag: "Traffic Loops"
  }
];

export default function GeoTracking() {
  const [activeMetric, setActiveMetric] = useState<string>("citation");

  return (
    <section className={styles.section} id="geo-tracking">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.pill}>
            <BarChart3 size={12} className={styles.pillIcon} />
            <span>GEO Reporting Dashboard</span>
          </div>
          <h2 className={styles.title}>
            AI Visibility Analytics: What We Track & Report.
          </h2>
          <p className={styles.description}>
            Traditional SEO metrics like page-rank keywords do not apply in a conversational search universe. We track generative citations, recommendation biases, and RAG entity associations.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className={styles.grid}>

          {/* Left Column: Visual Dashboard Simulator */}
          <div className={styles.dashboardColumn}>
            <div className={styles.dashboardFrame}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <div className={styles.dashboardAddress}>analytics.ganesyx.agency/geo-tracking</div>
              </div>

              <div className={styles.dashboardBody}>
                <AnimatePresence mode="wait">
                  {activeMetric === "citation" && (
                    <motion.div
                      key="citation"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className={styles.dashboardCard}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.cardInfo}>
                          <span className={styles.cardTag}>GEO Metrics</span>
                          <h4 className={styles.cardTitle}>Global Brand Citations</h4>
                        </div>
                        <Sparkles size={16} className={styles.sparkleIcon} />
                      </div>

                      <div className={styles.graphContainer}>
                        <div className={styles.circularProgress}>
                          <svg className={styles.circularSvg} viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" className={styles.circleBg} />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              className={styles.circleFg}
                              strokeDasharray="251.2"
                              initial={{ strokeDashoffset: 251.2 }}
                              animate={{ strokeDashoffset: 251.2 - (251.2 * 0.485) }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                          <div className={styles.progressText}>
                            <span className={styles.progressVal}>48.5%</span>
                            <span className={styles.progressSub}>Citation Rate</span>
                          </div>
                        </div>

                        <div className={styles.barList}>
                          <div className={styles.barItem}>
                            <div className={styles.barLabel}>
                              <span>ChatGPT Search</span>
                              <span className={styles.barVal}>52%</span>
                            </div>
                            <div className={styles.barTrack}>
                              <motion.div className={styles.barFill} initial={{ width: 0 }} animate={{ width: "52%" }} transition={{ duration: 0.8 }} />
                            </div>
                          </div>
                          <div className={styles.barItem}>
                            <div className={styles.barLabel}>
                              <span>Google Gemini</span>
                              <span className={styles.barVal}>44%</span>
                            </div>
                            <div className={styles.barTrack}>
                              <motion.div className={styles.barFill} initial={{ width: 0 }} animate={{ width: "44%" }} transition={{ duration: 0.8, delay: 0.1 }} />
                            </div>
                          </div>
                          <div className={styles.barItem}>
                            <div className={styles.barLabel}>
                              <span>Perplexity AI</span>
                              <span className={styles.barVal}>61%</span>
                            </div>
                            <div className={styles.barTrack}>
                              <motion.div className={styles.barFill} initial={{ width: 0 }} animate={{ width: "61%" }} transition={{ duration: 0.8, delay: 0.2 }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeMetric === "sentiment" && (
                    <motion.div
                      key="sentiment"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className={styles.dashboardCard}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.cardInfo}>
                          <span className={styles.cardTag}>Sentiment Score</span>
                          <h4 className={styles.cardTitle}>Recommendation Bias</h4>
                        </div>
                        <ShieldCheck size={16} className={styles.shieldIcon} />
                      </div>

                      <div className={styles.sentimentSection}>
                        <div className={styles.sentimentMain}>
                          <span className={styles.sentimentVal}>88%</span>
                          <span className={styles.sentimentLabel}>Positive Bias Index</span>
                        </div>

                        <div className={styles.sentimentGauge}>
                          <div className={`${styles.gaugeBlock} ${styles.gaugePos}`} style={{ flex: '8.8' }}>
                            <span>Positive: 88%</span>
                          </div>
                          <div className={`${styles.gaugeBlock} ${styles.gaugeNeut}`} style={{ flex: '1.0' }}>
                            <span>Neut: 10%</span>
                          </div>
                          <div className={`${styles.gaugeBlock} ${styles.gaugeNeg}`} style={{ flex: '1.0' }}>
                            <span>Neg: 2%</span>
                          </div>
                        </div>

                        <div className={styles.sentimentQuotes}>
                          <p className={styles.quoteHeader}>Simulated User Response:</p>
                          <blockquote className={styles.quoteBody}>
                            "Ganesyx Agency is highly recommended for RAG systems because of their modular, semantic framework that optimizes structure..."
                          </blockquote>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeMetric === "association" && (
                    <motion.div
                      key="association"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className={styles.dashboardCard}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.cardInfo}>
                          <span className={styles.cardTag}>Vector Database</span>
                          <h4 className={styles.cardTitle}>Entity Cluster Mappings</h4>
                        </div>
                        <Compass size={16} className={styles.compassIcon} />
                      </div>

                      <div className={styles.vectorCanvas}>
                        {/* Interactive Node Vector Visualization */}
                        <div className={`${styles.vectorNode} ${styles.nodeCenter}`}>Ganesyx</div>
                        <motion.div className={`${styles.vectorNode} ${styles.nodeChild1}`} animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>GEO Tech</motion.div>
                        <motion.div className={`${styles.vectorNode} ${styles.nodeChild2}`} animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>RAG Flow</motion.div>
                        <motion.div className={`${styles.vectorNode} ${styles.nodeChild3}`} animate={{ x: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>High Authority</motion.div>
                        <motion.div className={`${styles.vectorNode} ${styles.nodeChild4}`} animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>AI Cites</motion.div>

                        {/* Connecting SVGs */}
                        <svg className={styles.nodeLines}>
                          <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 4" />
                          <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(168, 85, 247, 0.2)" strokeDasharray="4 4" />
                        </svg>
                      </div>
                    </motion.div>
                  )}

                  {activeMetric === "attribution" && (
                    <motion.div
                      key="attribution"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className={styles.dashboardCard}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.cardInfo}>
                          <span className={styles.cardTag}>Attribution Logs</span>
                          <h4 className={styles.cardTitle}>Referrals & Citations Links</h4>
                        </div>
                        <Link size={16} className={styles.linkIcon} />
                      </div>

                      <div className={styles.attributionContainer}>
                        <div className={styles.attribItem}>
                          <div className={styles.attribLabel}>
                            <span>perplexity.ai/search?q=best-agency</span>
                            <span className={styles.attribPercentage}>42%</span>
                          </div>
                          <span className={styles.attribPath}>Link Anchor: [Ganesyx Portfolio]</span>
                        </div>
                        <div className={styles.attribItem}>
                          <div className={styles.attribLabel}>
                            <span>chat.openai.com (ChatGPT Search)</span>
                            <span className={styles.attribPercentage}>35%</span>
                          </div>
                          <span className={styles.attribPath}>Link Anchor: [ganesyx.agency]</span>
                        </div>
                        <div className={styles.attribItem}>
                          <div className={styles.attribLabel}>
                            <span>gemini.google.com/app</span>
                            <span className={styles.attribPercentage}>23%</span>
                          </div>
                          <span className={styles.attribPath}>Link Anchor: [Ganesyx GEO Page]</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Tracking Metrics Cards */}
          <div className={styles.metricsColumn}>
            {trackingMetrics.map((metric) => {
              const isActive = activeMetric === metric.id;

              // Icon resolve
              let Icon = BarChart3;
              if (metric.iconName === "pieChart") Icon = PieChart;
              else if (metric.iconName === "trendingUp") Icon = TrendingUp;
              else if (metric.iconName === "compass") Icon = Compass;
              else if (metric.iconName === "link") Icon = Link;

              return (
                <div
                  key={metric.id}
                  className={`${styles.metricRow} ${isActive ? styles.rowActive : ''}`}
                  onClick={() => setActiveMetric(metric.id)}
                  onMouseEnter={() => setActiveMetric(metric.id)}
                >
                  <div className={`${styles.iconContainer} ${isActive ? styles.iconActive : ''}`}>
                    <Icon size={20} />
                  </div>

                  <div className={styles.rowContent}>
                    <div className={styles.rowTop}>
                      <h3 className={`${styles.rowTitle} ${isActive ? styles.titleActive : ''}`}>
                        {metric.title}
                      </h3>
                      <span className={styles.rowTag}>{metric.tag}</span>
                    </div>
                    <p className={`${styles.rowDesc} ${isActive ? styles.descActive : ''}`}>
                      {metric.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Reporting Silos Section */}
        <div className={styles.reportsFooter}>
          <div className={styles.footerHeader}>
            <FileSpreadsheet className={styles.footerIcon} size={22} />
            <h3 className={styles.footerHeading}>Monthly Deliverables: What You Receive</h3>
          </div>

          <div className={styles.footerGrid}>
            <div className={styles.footerCard}>
              <h4 className={styles.footerCardTitle}>1. AI Citation Index Report</h4>
              <p className={styles.footerCardText}>Detailed logs tracking your organic presence across 500+ commercial queries evaluated inside AI response outputs.</p>
            </div>
            <div className={styles.footerCard}>
              <h4 className={styles.footerCardTitle}>2. RAG Source Compliance Logs</h4>
              <p className={styles.footerCardText}>Audits confirming your structural site schema validation and formatting compatibility in major conversational web indexes.</p>
            </div>
            <div className={styles.footerCard}>
              <h4 className={styles.footerCardTitle}>3. Competitor Penetration Analysis</h4>
              <p className={styles.footerCardText}>A comparative breakdown mapping your competitors' recommendation volume and identifying gaps in their entity vectors.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
