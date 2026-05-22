'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Heart, MessageCircle, Share2, Sparkles, ArrowUpRight, Music } from 'lucide-react';
import styles from './SocialHero.module.css';

// Motion Typography variants for character reveal
const charVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    }
  }
};

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    }
  }
};

const itemRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.7,
    }
  }
};

// Component to split words and characters for motion typography
function AnimatedText({ text, highlightedWords = [] }: { text: string; highlightedWords?: string[] }) {
  return (
    <motion.span
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
      className={styles.animatedTextContainer}
    >
      {text.split(' ').map((word, wordIdx) => {
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        const isHighlighted = highlightedWords.includes(cleanWord);
        return (
          <span key={wordIdx} style={{ display: 'inline-flex', overflow: 'hidden', marginRight: '0.28em' }}>
            {Array.from(word).map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={charVariants}
                className={isHighlighted ? styles.gradientText : undefined}
                style={{ display: 'inline-block', originY: 1 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}

interface Particle {
  id: number;
  x: number;
  drift: number;
  scale: number;
  delay: number;
}

export default function SocialHero() {
  const [likesCount, setLikesCount] = useState(1420);
  const [hasLiked, setHasLiked] = useState(false);
  const [viewers, setViewers] = useState(3840);
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextParticleId = useRef(0);

  // Auto-ticking viewers to simulate dynamic engagement
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const delta = Math.floor(Math.random() * 30) - 13;
        return Math.max(3700, prev + delta);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handler to simulate live heart pops on phone interaction
  const handleLike = () => {
    setLikesCount(prev => prev + (hasLiked ? -1 : 1));
    setHasLiked(!hasLiked);

    if (!hasLiked) {
      // Trigger 4 floating particles
      const newParticles = Array.from({ length: 4 }).map(() => {
        const id = nextParticleId.current++;
        return {
          id,
          x: 20 + Math.random() * 60, // position within percent width
          drift: (Math.random() - 0.5) * 80, // pixels drift
          scale: 0.6 + Math.random() * 0.8,
          delay: Math.random() * 0.2,
        };
      });

      setParticles(prev => [...prev, ...newParticles]);
    }
  };

  // Clean up finished particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles(prev => prev.filter(p => Date.now() - p.id > 3500)); // approximate animation duration
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <section className={styles.heroContainer}>
      {/* Ambient background glow */}
      <div className={styles.glowAmbient} />

      <div className={styles.mainGrid}>
        {/* Left Column: Typography & Actions */}
        <div className={styles.contentWrapper}>
          {/* Live Badging */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            <span>Platform-Native Content Systems</span>
          </motion.div>

          {/* Headline with Reveal Animation */}
          <h1 className={styles.headline}>
            <AnimatedText
              text="Social Media That Builds Attention, Trust & Growth."
              highlightedWords={["Attention", "Trust", "Growth"]}
            />
          </h1>

          {/* Supporting description */}
          <motion.p
            className={styles.supportingText}
            variants={itemRevealVariants}
            initial="hidden"
            animate="visible"
          >
            We help brands create platform-native content systems that attract audiences, increase engagement, and turn attention into measurable business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctaGroup}
            variants={itemRevealVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#contact" className={styles.primaryBtn}>
              <span>Start Growing</span>
              <Sparkles size={16} />
            </a>
            <a href="#campaigns" className={styles.secondaryBtn}>
              <span>View Social Campaigns</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Brand/Platform Optimization Row */}
          <motion.div
            className={styles.platformRow}
            variants={itemRevealVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.platformRowText}>Optimizing growth across</span>
            <div className={styles.platformIcons}>
              <img src="/logos/instagram-icon.svg" className={styles.platformLogo} alt="Instagram" />
              <img src="/logos/facebook-icon.svg" className={styles.platformLogo} alt="Facebook" />
              <img src="/logos/twitter.svg" className={styles.platformLogo} alt="Twitter/X" />
              <img src="/logos/youtube.svg" className={styles.platformLogo} alt="YouTube" />
              <img src="/logos/whatsapp-icon.svg" className={styles.platformLogo} alt="WhatsApp" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Phone Mockup & Orbiting Pills */}
        <div className={styles.visualCanvas}>
          {/* Particle Overlay (hearts streaming up) */}
          <div className={styles.particleStream}>
            {particles.map(p => (
              <span
                key={p.id}
                className={styles.particle}
                style={{
                  left: `${p.x}%`,
                  transform: `scale(${p.scale})`,
                  animationDelay: `${p.delay}s`,
                  '--drift': `${p.drift}px`,
                } as React.CSSProperties}
              >
                ❤️
              </span>
            ))}
          </div>

          {/* Orbiting Pill 1: Instagram (Top Left) */}
          <motion.div
            className={`${styles.floatingPill} ${styles.pill1}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [-10, 10, -10]
            }}
            transition={{
              x: { duration: 0.8, delay: 0.6 },
              opacity: { duration: 0.8, delay: 0.6 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <img src="/logos/instagram-icon.svg" className={styles.pillIcon} alt="Instagram" />
            <div className={styles.pillContent}>
              <span className={styles.pillTitle}>Instagram Reach</span>
              <span className={`${styles.pillStat} ${styles.pillStatGreen}`}>+458%</span>
            </div>
          </motion.div>

          {/* Orbiting Pill 2: YouTube (Top Right) */}
          <motion.div
            className={`${styles.floatingPill} ${styles.pill2}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [8, -8, 8]
            }}
            transition={{
              x: { duration: 0.8, delay: 0.8 },
              opacity: { duration: 0.8, delay: 0.8 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <img src="/logos/youtube.svg" className={styles.pillIcon} alt="YouTube" />
            <div className={styles.pillContent}>
              <span className={styles.pillTitle}>YouTube Views</span>
              <span className={`${styles.pillStat} ${styles.pillStatRed}`}>1.2M</span>
            </div>
          </motion.div>

          {/* Layered Phone Mockup */}
          <motion.div
            className={styles.phoneWrapper}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <div className={styles.phoneNotch}>
              <div className={styles.notchCamera} />
              <div className={styles.notchSpeaker} />
            </div>
            <div className={styles.phoneScreen}>
              {/* Loop video representing short-form content */}
              <video
                src="https://cdn.pixabay.com/video/2025/04/19/272903_large.mp4"
                className={styles.reelVideo}
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Screen UI Overlay */}
              <div className={styles.screenOverlay}>
                <div className={styles.overlayTop}>
                  <span className={styles.liveBadge}>
                    <span className={styles.livePulseDot} />
                    LIVE
                  </span>
                  <span className={styles.viewerCount}>
                    👁️ {(viewers / 1000).toFixed(1)}k
                  </span>
                </div>

                {/* Interaction Buttons column */}
                <div className={styles.overlayRight}>
                  <button className={styles.actionButton} onClick={handleLike} aria-label="Like Video">
                    <div className={styles.actionIconWrapper}>
                      <Heart size={20} fill={hasLiked ? "#f43f5e" : "transparent"} stroke={hasLiked ? "#f43f5e" : "#ffffff"} />
                    </div>
                    <span>{likesCount}</span>
                  </button>
                  <div className={styles.actionButton}>
                    <div className={styles.actionIconWrapper}>
                      <MessageCircle size={20} stroke="#ffffff" />
                    </div>
                    <span>412</span>
                  </div>
                  <div className={styles.actionButton}>
                    <div className={styles.actionIconWrapper}>
                      <Share2 size={20} stroke="#ffffff" />
                    </div>
                    <span>Share</span>
                  </div>
                </div>

                {/* Bottom Creator Meta */}
                <div className={styles.overlayBottom}>
                  <div className={styles.creatorName}>@ganesyxagency</div>
                  <div className={styles.captionText}>Creating platform-native content systems that scale ⚡</div>
                  <div className={styles.musicTrack}>
                    <Music size={10} className={styles.musicNoteIcon} />
                    <span>Original Audio • Ganesyx</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Orbiting Pill 3: Facebook (Bottom Left) */}
          <motion.div
            className={`${styles.floatingPill} ${styles.pill3}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [-6, 6, -6]
            }}
            transition={{
              x: { duration: 0.8, delay: 1.0 },
              opacity: { duration: 0.8, delay: 1.0 },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <img src="/logos/facebook-icon.svg" className={styles.pillIcon} alt="Facebook" />
            <div className={styles.pillContent}>
              <span className={styles.pillTitle}>FB Conversions</span>
              <span className={`${styles.pillStat} ${styles.pillStatBlue}`}>4.2x ROI</span>
            </div>
          </motion.div>

          {/* Orbiting Pill 4: Twitter (Bottom Right) */}
          <motion.div
            className={`${styles.floatingPill} ${styles.pill4}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [10, -10, 10]
            }}
            transition={{
              x: { duration: 0.8, delay: 1.2 },
              opacity: { duration: 0.8, delay: 1.2 },
              y: {
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <img src="/logos/twitter.svg" className={styles.pillIcon} alt="Twitter/X" />
            <div className={styles.pillContent}>
              <span className={styles.pillTitle}>X Engagement</span>
              <span className={`${styles.pillStat} ${styles.pillStatGreen}`}>+12.8%</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Section (Centered Row below Hero) */}
      <div className={styles.metricsBar}>
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricNum}>50M+</div>
            <div className={styles.metricText}>Impressions Generated</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNum}>500K+</div>
            <div className={styles.metricText}>Active Engagements</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNum}>3.8x</div>
            <div className={styles.metricText}>Average ROI Yield</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricNum}>82%</div>
            <div className={styles.metricText}>Audience Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
