'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Play, ChevronLeft, ChevronRight,
  Eye, Heart, Flame, Layers, TrendingUp, Zap
} from 'lucide-react';
import styles from './ContentShowcase.module.css';
import { SHOWCASE_ITEMS, type ShowcaseItem } from '@/data/social';

// ─── Stat icon helper ─────────────────────────────────────────────────────────
function StatIcon({ type, size = 11 }: { type: ShowcaseItem['stats']['icon']; size?: number }) {
  switch (type) {
    case 'heart': return <Heart size={size} />;
    case 'flame': return <Flame size={size} />;
    case 'trend': return <TrendingUp size={size} />;
    case 'zap': return <Zap size={size} />;
    default: return <Eye size={size} />;
  }
}

// ─── Floating emoji ───────────────────────────────────────────────────────────
interface FloatingEmoji { id: number; char: string; left: number }

// ─── Individual Card ──────────────────────────────────────────────────────────
function ShowcaseCard({ item, index }: { item: ShowcaseItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [reactions, setReactions] = useState<FloatingEmoji[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reactionCounter = useRef(0);
  const reactionTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hover autoplay
  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered && item.videoUrl) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, item.videoUrl]);

  // Floating emoji emitter
  useEffect(() => {
    const EMOJIS = ['❤️', '🔥', '✨', '🚀', '😮', '💯', '🎯'];
    if (isHovered) {
      reactionTimer.current = setInterval(() => {
        const emoji: FloatingEmoji = {
          id: reactionCounter.current++,
          char: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          left: 10 + Math.random() * 80,
        };
        setReactions(prev => [...prev.slice(-12), emoji]);
      }, 400);
    } else {
      if (reactionTimer.current) clearInterval(reactionTimer.current);
      const t = setTimeout(() => setReactions([]), 1400);
      return () => clearTimeout(t);
    }
    return () => { if (reactionTimer.current) clearInterval(reactionTimer.current); };
  }, [isHovered]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.images) setCarouselIndex(p => (p + 1) % item.images!.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.images) setCarouselIndex(p => (p - 1 + item.images!.length) % item.images!.length);
  };

  const isVideo = !!item.videoUrl;
  const isCarousel = !!(item.images && item.images.length > 0);

  // Derive aspect-ratio padding for the media container
  const paddingMap = {
    portrait: '150%',
    square: '100%',
    landscape: '62.5%',
  };

  return (
    <motion.div
      className={styles.cardWrapper}
      style={{
        '--accent': item.accentColor,
        '--accent-bg': item.accentBg,
        '--accent-border': item.accentBorder,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Media area with enforced aspect-ratio ── */}
      <div
        className={styles.mediaContainer}
        style={{ paddingBottom: paddingMap[item.aspectRatio] }}
      >
        {/* Badge */}
        <span className={styles.badgeLabel}>{item.badge}</span>

        {/* Video */}
        {isVideo && (
          <video
            ref={videoRef}
            className={`${styles.videoPlayer} ${isHovered ? styles.videoActive : ''}`}
            src={item.videoUrl}
            muted
            loop
            playsInline
            poster={item.image}
            preload="metadata"
          />
        )}

        {/* Carousel */}
        {isCarousel && (
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {item.images!.map((src, i) => (
                <img key={i} src={src} alt={`${item.title} – slide ${i + 1}`} className={styles.mediaImage} loading="lazy" />
              ))}
            </div>

            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.button
                    className={`${styles.carouselBtn} ${styles.prevBtn}`}
                    onClick={prev}
                    aria-label="Previous"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronLeft size={16} />
                  </motion.button>
                  <motion.button
                    className={`${styles.carouselBtn} ${styles.nextBtn}`}
                    onClick={next}
                    aria-label="Next"
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            <div className={styles.carouselDots}>
              {item.images!.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${carouselIndex === i ? styles.dotActive : ''}`}
                  onClick={e => { e.stopPropagation(); setCarouselIndex(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Static image (non-carousel, non-video) */}
        {!isVideo && !isCarousel && item.image && (
          <img src={item.image} alt={item.title} className={styles.mediaImage} loading="lazy" />
        )}

        {/* Play overlay for idle video */}
        {isVideo && !isHovered && (
          <div className={styles.playOverlay}>
            <div className={styles.playCircle}>
              <Play size={20} fill="#0c051e" color="#0c051e" style={{ marginLeft: 2 }} />
            </div>
            <span className={styles.playHint}>Hover to play</span>
          </div>
        )}

        {/* Gradient scrim at bottom */}
        <div className={styles.mediaScrim} />

        {/* Stat badge */}
        <div className={styles.statBadge}>
          <StatIcon type={item.stats.icon} />
          <span className={styles.statLabel}>{item.stats.label}</span>
          <span className={styles.statValue}>{item.stats.value}</span>
        </div>

        {/* Floating reactions */}
        {reactions.map(r => (
          <span key={r.id} className={styles.floatingEmoji} style={{ left: `${r.left}%` }}>
            {r.char}
          </span>
        ))}
      </div>

      {/* ── Card footer ── */}
      <div className={styles.cardFooter}>
        <div className={styles.footerInner}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
        </div>
        {item.type === 'ad' && (
          <a
            href="#contact"
            className={styles.ctaBtn}
            onClick={e => {
              const el = document.getElementById('contact');
              if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
            }}
          >
            Launch Campaign →
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ContentShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'video' | 'visual'>('all');

  const filtered = SHOWCASE_ITEMS.filter(item =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section className={styles.sectionContainer} id="showcase">
      <div className={styles.containerInner}>

        {/* Header */}
        <div className={styles.sectionHeader}>
          <motion.div
            className={styles.sectionBadge}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={11} />
            <span>Showcase Gallery</span>
          </motion.div>

          <motion.h2
            className={styles.sectionHeadline}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Content Designed To Stop The Scroll.
          </motion.h2>

          <motion.p
            className={styles.sectionSupportingText}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From high-performing reels to premium carousel systems, every asset is designed for engagement and recognition.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {([
            { key: 'all', label: 'Show All', icon: <Layers size={13} /> },
            { key: 'video', label: 'Video & Motion', icon: <Play size={13} /> },
            { key: 'visual', label: 'Visuals & Ads', icon: <Sparkles size={13} /> },
          ] as const).map(({ key, label, icon }) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${activeCategory === key ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Pinterest grid */}
        <div className={styles.masonryGrid}>
          {filtered.map((item, i) => (
            <div key={item.id} className={styles.masonryItem}>
              <ShowcaseCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
