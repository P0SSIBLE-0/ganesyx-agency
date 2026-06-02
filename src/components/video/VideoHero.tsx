'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { videoData } from '@/data/video';
import styles from './VideoHero.module.css';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Track the scroll progress of the videoSectionContainer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  // Map the scroll progress to width, height, and border-radius
  // It starts slightly boxed and expands to fill the screen
  const videoWidth = useTransform(scrollYProgress, [0, 1], ['80%', '100%']);
  const videoHeight = useTransform(scrollYProgress, [0, 1], ['75vh', '100vh']);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 1], ['32px', '0px']);

  const hero = videoData.hero;
  // User selected Pixabay CDN link
  const videoSrc = "https://www.pexels.com/download/video/36604686/";

  // Prevent scroll propagation issue by waiting for component mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log('Autoplay error', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.heroWrapper}>

      {/* 1. TOP SECTION (Vibrant Blue Background) */}
      <section className={styles.topSection}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            Videos that{' '}
            <span className={styles.inlineVideoWrapper}>
              <video
                src="https://cdn.pixabay.com/video/2025/11/06/314351_large.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.inlineVideo}
              />
            </span>{' '}
            stop the scroll and{' '}
            <span className={styles.inlineVideoWrapper}>
              <video
                src="https://cdn.pixabay.com/video/2016/09/21/5388-183788591_medium.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.inlineVideo}
              />
            </span>{' '}
            explain the value fast.
          </h1>
          <div className={styles.bottomRow}>
            <p className={styles.description}>{hero.description}</p>
            <a href={hero.primaryCta.href} className={styles.ctaButton}>
              {hero.primaryCta.text}
            </a>
          </div>
        </div>
      </section>

      {/* 2. VIDEO SCROLL SECTION */}
      <section className={styles.videoSectionContainer} ref={containerRef}>

        {/* Sticky wrapper to hold the video in place while scrolling */}
        <div className={styles.videoSticky}>

          {/* Blue backdrop to seamlessly connect with the top section visually */}
          <div className={styles.blueBackdrop} />

          {/* Animated Video Container */}
          <motion.div
            className={styles.videoWrapper}
            style={{
              width: mounted ? videoWidth : '100%',
              height: mounted ? videoHeight : '100vh',
              borderRadius: mounted ? videoBorderRadius : '0px'
            }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className={styles.videoElement}
            />

            {/* Player Controls */}
            <div className={styles.controls}>
              <button className={styles.iconBtn} onClick={togglePlay} aria-label="Toggle Play">
                {isPlaying ? <Pause size={22} style={{ fill: '#ffffff' }} /> : <Play size={22} style={{ fill: '#ffffff', marginLeft: 3 }} />}
              </button>
              <button className={styles.iconBtn} onClick={toggleMute} aria-label="Toggle Mute">
                {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
            </div>

            {/* Giant Overlaid Text */}
            <div className={styles.giantTextContainer}>
              <h2 className={styles.giantText}>GANESYX</h2>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
