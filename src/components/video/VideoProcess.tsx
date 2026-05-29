'use client';

import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Heart, MessageCircle, Share2, Music, Volume2, VolumeX } from 'lucide-react';
import styles from './VideoProcess.module.css';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: '01',
    title: 'Idea',
    description: 'We collaborate on creative direction, mapping core angles, hooks, and video objectives to set a solid strategic foundation.'
  },
  {
    id: '02',
    title: 'Script',
    description: 'Drafting conversion-focused scripts with strong hooks, key messaging, and explicit calls-to-action designed to capture and hold attention.'
  },
  {
    id: '03',
    title: 'Visual Plan',
    description: 'Creating detailed storyboards and shot-lists outlining frame transitions, text overlays, sound cues, and visual beats before production starts.'
  },
  {
    id: '04',
    title: 'Edit',
    description: 'Pacing the footage dynamically with professional color grading, custom sound design, and kinetic typography overlays.'
  },
  {
    id: '05',
    title: 'Final Delivery',
    description: 'Exporting clean files in multiple aspect ratios — 9:16 vertical, 1:1 square, 16:9 horizontal — ready for direct publishing and ads.'
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

interface VideoProcessProps {
  steps?: ProcessStep[];
  title?: string;
  reelVideoUrl?: string;
}

export default function VideoProcess({
  steps: customSteps,
  title = 'A simple collaborative workflow that guides projects from first conversation to final delivery',
  reelVideoUrl = 'https://cdn.pixabay.com/video/2025/02/12/257851_large.mp4'
}: VideoProcessProps = {}) {
  const activeSteps = customSteps || steps;
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState(842);
  const [hasLiked, setHasLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => (hasLiked ? prev - 1 : prev + 1));
    setHasLiked(!hasLiked);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top label bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span className={styles.pipe}>|</span> Our Process
          </div>
          <div className={styles.topBarRight}>How We Work</div>
        </div>

        {/* Two-column layout */}
        <div className={styles.grid}>

          {/* ── Sticky Left ── */}
          <div className={styles.stickyContent}>
            <h2 className={styles.title}>
              {title}
            </h2>

            {/* Phone Mockup Container */}
            <div className={styles.phoneContainer}>
              <div className={styles.phoneNotch}>
                <div className={styles.notchCamera} />
                <div className={styles.notchSpeaker} />
              </div>

              <div className={styles.phoneScreen}>
                <video
                  ref={videoRef}
                  src={reelVideoUrl}
                  className={styles.reelVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Simulated Screen UI Overlay */}
                <div className={styles.phoneOverlay}>
                  {/* Top: Badges & Sound Toggle */}
                  <div className={styles.overlayTop}>
                    <span className={styles.liveBadge}>
                      <span className={styles.livePulseDot} />
                      REEL
                    </span>
                    <button
                      className={styles.soundToggle}
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>

                  {/* Right side interaction buttons */}
                  <div className={styles.overlayRight}>
                    <button className={styles.actionButton} onClick={handleLike} aria-label="Like Video">
                      <div className={styles.actionIconWrapper}>
                        <Heart size={16} fill={hasLiked ? '#ff2a54' : 'transparent'} stroke={hasLiked ? '#ff2a54' : '#ffffff'} />
                      </div>
                      <span>{likes}</span>
                    </button>
                    <div className={styles.actionButton}>
                      <div className={styles.actionIconWrapper}>
                        <MessageCircle size={16} stroke="#ffffff" />
                      </div>
                      <span>142</span>
                    </div>
                    <div className={styles.actionButton}>
                      <div className={styles.actionIconWrapper}>
                        <Share2 size={16} stroke="#ffffff" />
                      </div>
                      <span>Share</span>
                    </div>
                  </div>

                  {/* Bottom: Caption & creator tag */}
                  <div className={styles.overlayBottom}>
                    <div className={styles.creatorName}>@ganesyxagency</div>
                    <div className={styles.captionText}>Workflow details built for high performance campaigns 🚀</div>
                    <div className={styles.musicTrack}>
                      <Music size={10} className={styles.musicNoteIcon} />
                      <span>Original Audio • Ganesyx</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Scrolling Cards (Right) ── */}
          <motion.div
            className={styles.cardsList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {activeSteps.map((step) => (
              <motion.div key={step.id} variants={cardVariants}>
                <div className={styles.card}>
                  {/* Title at the top */}
                  <h3 className={styles.cardTitle}>{step.title}</h3>

                  {/* Bottom row: description left, big number right */}
                  <div className={styles.cardBottom}>
                    <p className={styles.cardDescription}>{step.description}</p>
                    <div className={styles.number}>{step.id}</div>
                  </div>

                  {/* Thin separator line */}
                  <div className={styles.separator} />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

