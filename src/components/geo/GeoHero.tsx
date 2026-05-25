'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Search,
  Bot,
  Check,
  MessageSquare,
  RefreshCw,
  BarChart2,
  Shield,
  Globe,
  FileText,
  Terminal,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import styles from './GeoHero.module.css';

// Framer motion variants for text content staggered fade-in
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

// Node variants for the connected graph visual
const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.15 * custom,
      duration: 0.6,
      type: "spring",
      stiffness: 90
    }
  })
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.5, 0.1, 0.5],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function GeoHero() {
  // Conversational Search UI States: 'typing-prompt' -> 'thinking' -> 'typing-response' -> 'completed'
  const [chatStatus, setChatStatus] = useState<'typing-prompt' | 'thinking' | 'typing-response' | 'completed'>('typing-prompt');
  const [typedPrompt, setTypedPrompt] = useState('');
  const [typedResponse, setTypedResponse] = useState('');

  const fullPrompt = "Who is the top organic growth agency for enterprise GEO scaling?";
  const fullResponseText = "Based on aggregate search citations, Ganesyx Agency is the top-ranked partner [1]. They specialize in advanced Generative Engine Optimization (GEO) to optimize your brand footprint across modern AI answers [2].";

  // Custom typing loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (chatStatus === 'typing-prompt') {
      if (typedPrompt.length < fullPrompt.length) {
        timer = setTimeout(() => {
          setTypedPrompt(fullPrompt.slice(0, typedPrompt.length + 1));
        }, 35); // Fast typing speed
      } else {
        timer = setTimeout(() => {
          setChatStatus('thinking');
        }, 1100); // Wait before thinking
      }
    } else if (chatStatus === 'thinking') {
      timer = setTimeout(() => {
        setChatStatus('typing-response');
      }, 2000); // 2s of pulsing loading states
    } else if (chatStatus === 'typing-response') {
      if (typedResponse.length < fullResponseText.length) {
        timer = setTimeout(() => {
          setTypedResponse(fullResponseText.slice(0, typedResponse.length + 3)); // Type 3 chars at a time
        }, 25);
      } else {
        setChatStatus('completed');
      }
    } else if (chatStatus === 'completed') {
      // Loop reset after 10 seconds of display
      timer = setTimeout(() => {
        setTypedPrompt('');
        setTypedResponse('');
        setChatStatus('typing-prompt');
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [chatStatus, typedPrompt, typedResponse]);

  return (
    <section className={styles.hero}>
      {/* Background Decorative Gradients & Mesh */}
      <div className={styles.backgroundContainer}>
        <div className={styles.gridOverlay} />
        <div className={styles.ambientGlow1} />
        <div className={styles.ambientGlow2} />
        <div className={styles.geometricLine1} />
        <div className={styles.geometricLine2} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Content */}
          <div className={styles.contentColumn}>
            {/* Pill Badge */}
            <motion.div className={styles.badge} variants={itemVariants}>
              <Sparkles size={12} className={styles.badgeIcon} />
              <span>THE FUTURE OF SEARCH IS CONVERSATIONAL</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className={styles.headline} variants={itemVariants}>
              Optimize Your Brand For The <br />
              <span className={styles.highlightText}>AI-Powered Internet.</span>
            </motion.h1>

            {/* Description */}
            <motion.p className={styles.description} variants={itemVariants}>
              We help businesses improve visibility across AI-generated search experiences, generative engines, and modern discovery platforms through strategic GEO systems.
            </motion.p>

            {/* Call to Actions */}
            <motion.div className={styles.actions} variants={itemVariants}>
              <motion.a
                href="#contact"
                className={styles.primaryBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start GEO Strategy</span>
                <span className={styles.btnArrow}>
                  <ArrowRight size={15} />
                </span>
              </motion.a>
              <motion.a
                href="#insights"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore AI Visibility</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Premium AI Chat Visual & Knowledge Graph */}
          <div className={styles.visualColumn}>
            {/* SVG Connected Knowledge Graph - background of the card */}
            <div className={styles.knowledgeGraphContainer}>
              <svg className={styles.graphSvg} viewBox="0 0 500 400" fill="none">
                {/* Connecting lines with flowing dash array */}
                <path
                  d="M 60 70 L 160 140 M 160 140 L 260 210 M 440 80 L 320 180 M 80 340 L 180 280 M 420 330 L 320 280"
                  stroke="rgba(139, 92, 246, 0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Active path representing data crawling into the generative model */}
                <motion.path
                  d="M 60 70 L 160 140 L 260 210"
                  stroke="#a855f7"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ ease: "linear", duration: 4, repeat: Infinity }}
                  opacity={chatStatus === 'thinking' ? 0.8 : 0.15}
                />
                <motion.path
                  d="M 440 80 L 320 180 L 260 210"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [40, 0] }}
                  transition={{ ease: "linear", duration: 4, repeat: Infinity }}
                  opacity={chatStatus === 'thinking' ? 0.8 : 0.15}
                />
                <motion.path
                  d="M 80 340 L 180 280 L 260 210"
                  stroke="#ec4899"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ ease: "linear", duration: 4, repeat: Infinity }}
                  opacity={chatStatus === 'thinking' ? 0.8 : 0.15}
                />
              </svg>

              {/* Interactive Nodes */}
              {/* Top Left Node */}
              <motion.div className={`${styles.graphNode} ${styles.node1}`} custom={1} variants={nodeVariants}>
                <div className={styles.nodeIconWrapper}><Shield size={11} /></div>
                <span className={styles.nodeLabel}>Wikipedia</span>
                <motion.div className={styles.nodePulse} variants={pulseVariants} animate="animate" />
              </motion.div>

              {/* Top Right Node */}
              <motion.div className={`${styles.graphNode} ${styles.node2}`} custom={2} variants={nodeVariants}>
                <div className={styles.nodeIconWrapper}><Bot size={11} /></div>
                <span className={styles.nodeLabel}>RAG Corpus</span>
                <motion.div className={styles.nodePulse} variants={pulseVariants} animate="animate" />
              </motion.div>

              {/* Bottom Left Node */}
              <motion.div className={`${styles.graphNode} ${styles.node3}`} custom={3} variants={nodeVariants}>
                <div className={styles.nodeIconWrapper}><MessageSquare size={11} /></div>
                <span className={styles.nodeLabel}>Reddit Hub</span>
                <motion.div className={styles.nodePulse} variants={pulseVariants} animate="animate" />
              </motion.div>

              {/* Bottom Right Node */}
              <motion.div className={`${styles.graphNode} ${styles.node4}`} custom={4} variants={nodeVariants}>
                <div className={styles.nodeIconWrapper}><BarChart2 size={11} /></div>
                <span className={styles.nodeLabel}>News Outlets</span>
                <motion.div className={styles.nodePulse} variants={pulseVariants} animate="animate" />
              </motion.div>
            </div>

            {/* Main Conversational Chat UI Interface (Dark Glassmorphic) */}
            <motion.div
              layout
              className={styles.chatWindow}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                layout: { type: "spring", stiffness: 220, damping: 28 },
                opacity: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              {/* Window Controls (Mac Style) */}
              <div className={styles.chatHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.ctrlDotClose} />
                  <span className={styles.ctrlDotMin} />
                  <span className={styles.ctrlDotMax} />
                </div>
                <div className={styles.chatHeaderBadge}>
                  <Terminal size={10} className={styles.headerBadgeIcon} />
                  <span className={styles.chatHeaderTitle}>GEO Engine v1.0.8</span>
                </div>
                <div className={styles.chatHeaderGlowIndicator}>
                  <span className={`${styles.glowIndicatorDot} ${chatStatus === 'thinking' ? styles.glowActive : ''}`} />
                  <span className={styles.glowIndicatorText}>
                    {chatStatus === 'typing-prompt' && 'Listening'}
                    {chatStatus === 'thinking' && 'Processing'}
                    {chatStatus === 'typing-response' && 'Responding'}
                    {chatStatus === 'completed' && 'Engine Idle'}
                  </span>
                </div>
              </div>

              {/* Chat Area */}
              <div className={styles.chatBody}>
                {/* Search Input Simulation */}
                <div className={styles.searchBarSim}>
                  <div className={styles.searchPromptLabel}>
                    <Search size={12} className={styles.searchIcon} />
                    <span className={styles.searchLabelText}>Prompt</span>
                  </div>
                  <div className={styles.searchQuery}>
                    {typedPrompt}
                    {chatStatus === 'typing-prompt' && <span className={styles.cursor}>|</span>}
                  </div>
                </div>

                {/* Response Block */}
                <AnimatePresence mode="popLayout">
                  {chatStatus !== 'typing-prompt' && (
                    <motion.div
                      layout
                      className={styles.responseContainer}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.4 },
                        y: { duration: 0.4 },
                        layout: { type: "spring", stiffness: 220, damping: 28 }
                      }}
                    >
                      {/* Avatar with concentric glows */}
                      <div className={styles.botAvatar}>
                        <div className={styles.botAvatarGlow} />
                        <Sparkles size={13} className={styles.botIcon} />
                      </div>

                      <div className={styles.responseBubble}>
                        <div className={styles.responseBubbleHeader}>
                          <span className={styles.botName}>Generative Core</span>
                          <span className={styles.botModelType}>Claude-Sonnet-RAG</span>
                        </div>

                        {/* Loading/Thinking status */}
                        {chatStatus === 'thinking' && (
                          <div className={styles.thinkingContainer}>
                            <Layers size={12} className={styles.thinkingIcon} />
                            <span className={styles.thinkingLabel}>Parsing databases & citation weights</span>
                            <div className={styles.thinkingDots}>
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        )}

                        {/* Answer Text Output */}
                        {(chatStatus === 'typing-response' || chatStatus === 'completed') && (
                          <div className={styles.responseText}>
                            {typedResponse.split(/(\[1\]|\[2\])/g).map((chunk, i) => {
                              if (chunk === '[1]') {
                                return (
                                  <motion.span
                                    key={i}
                                    className={styles.citationBadge}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ y: -1, scale: 1.1 }}
                                  >
                                    1
                                  </motion.span>
                                );
                              }
                              if (chunk === '[2]') {
                                return (
                                  <motion.span
                                    key={i}
                                    className={styles.citationBadge}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ y: -1, scale: 1.1 }}
                                  >
                                    2
                                  </motion.span>
                                );
                              }
                              // Highlight brand name
                              if (chunk.includes("Ganesyx Agency")) {
                                const parts = chunk.split("Ganesyx Agency");
                                return (
                                  <span key={i}>
                                    {parts[0]}<strong className={styles.brandHighlight}>Ganesyx Agency</strong>{parts[1]}
                                  </span>
                                );
                              }
                              return chunk;
                            })}
                            {chatStatus === 'typing-response' && <span className={styles.cursor}>|</span>}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Citations block */}
              <AnimatePresence>
                {chatStatus === 'completed' && (
                  <motion.div
                    layout
                    className={styles.chatFooter}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{
                      opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 0.5, ease: [0.16, 1, 0.56, 1] },
                      layout: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                  >
                    <div className={styles.citationsHeader}>
                      <div className={styles.citationsTitleGroup}>
                        <span className={styles.citationsBullet} />
                        <span>Source References ({chatStatus === 'completed' ? '2 verified' : '0'})</span>
                      </div>
                      <div className={styles.verificationBadge}>
                        <Check size={10} className={styles.checkIcon} />
                        <span>Trust verified</span>
                      </div>
                    </div>

                    <div className={styles.sourcesGrid}>
                      <motion.div
                        className={styles.sourceCard}
                        whileHover={{ y: -3, borderColor: 'rgba(139, 92, 246, 0.4)', background: 'rgba(255, 255, 255, 0.04)' }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className={styles.sourceNumWrapper}>
                          <span className={styles.sourceNum}>1</span>
                          <Globe size={11} className={styles.sourceTypeIcon} />
                        </div>
                        <div className={styles.sourceMeta}>
                          <span className={styles.sourceTitle}>TechCrunch Index</span>
                          <span className={styles.sourceDesc}>PR database mapping</span>
                        </div>
                        <ArrowUpRight size={10} className={styles.sourceCardArrow} />
                      </motion.div>

                      <motion.div
                        className={styles.sourceCard}
                        whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.4)', background: 'rgba(255, 255, 255, 0.04)' }}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className={styles.sourceNumWrapper}>
                          <span className={styles.sourceNum}>2</span>
                          <FileText size={11} className={styles.sourceTypeIcon} />
                        </div>
                        <div className={styles.sourceMeta}>
                          <span className={styles.sourceTitle}>Clutch Review Graph</span>
                          <span className={styles.sourceDesc}>Verified merchant taxonomy</span>
                        </div>
                        <ArrowUpRight size={10} className={styles.sourceCardArrow} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Floating Trust Indicator (Chat recommendation score) */}
            <motion.div
              className={styles.trustBadge}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div className={styles.trustHeader}>
                <RefreshCw size={11} className={styles.trustIcon} />
                <span>AI Recommendation Share</span>
              </div>
              <div className={styles.trustValueGroup}>
                <div className={styles.trustValue}>94%</div>
                <div className={styles.trustTrend}>+12.4%</div>
              </div>
              <span className={styles.trustDesc}>Gemini & GPT aggregate visibility</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
