'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Heading } from '@/components/ui/Typography';
import styles from './BrandingHero.module.css';

const avatars = [
  '/avatar/avatar-ananya-kapoor.png',
  '/avatar/avatar-arjun-singhania.png',
  '/avatar/avatar-ishita-verma.png',
  '/avatar/avatar-priya-sharma.png',
  '/avatar/avatar-rohan.png',
  '/avatar/avatar-sneha-gupta.png',
  '/avatar/avatar-vikram-malhotra.png',
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.012,
      delayChildren: 0.1,
    }
  }
};

const charVariants: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1],
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.65,
    }
  }
};

const galleryVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.9,
    }
  }
};

// Animates each word character by character
function AnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, wordIdx, arr) => (
        <span key={wordIdx} className={styles.wordWrapper}>
          {Array.from(word).map((char, charIdx) => (
            <span key={charIdx} className={styles.charWrapper}>
              <motion.span variants={charVariants} className={styles.char}>
                {char}
              </motion.span>
            </span>
          ))}
          {wordIdx < arr.length - 1 && (
            <span className={styles.space}>&nbsp;</span>
          )}
        </span>
      ))}
    </>
  );
}

export default function BrandingHero() {
  return (
    <section className={styles.hero}>

      {/* Floating Retro Camera Images (Left Side) */}
      <motion.div
        className={`${styles.retroFrame} ${styles.leftTop}`}
        animate={{
          y: [0, -16, 0],
          rotate: [-6, -4, -8, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className={styles.retroTape} />
        <div className={styles.retroImgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=1332&auto=format&fit=crop"
            alt="Design Grid"
            className={styles.retroImg}
          />
        </div>
        <span className={styles.retroCaption}>GRID_SYSTEM.JPG</span>
      </motion.div>

      <motion.div
        className={`${styles.retroFrame} ${styles.leftBottom}`}
        animate={{
          y: [0, -12, 0],
          rotate: [4, 6, 2, 4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className={styles.retroTape} />
        <div className={styles.retroImgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?q=80&w=1170&auto=format&fit=crop"
            alt="Branding Stationery"
            className={styles.retroImg}
          />
        </div>
        <span className={styles.retroCaption}>MOCKUP_V02.PNG</span>
      </motion.div>

      {/* Floating Retro Camera Images (Right Side) */}
      <motion.div
        className={`${styles.retroFrame} ${styles.rightTop}`}
        animate={{
          y: [0, -14, 0],
          rotate: [8, 6, 10, 8],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className={styles.retroTape} />
        <div className={styles.retroImgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1706881811917-6590b1054050?q=80&w=1170&auto=format&fit=crop"
            alt="Brand Identity Presentation"
            className={styles.retroImg}
          />
        </div>
        <span className={styles.retroCaption}>PALETTE_09.PNG</span>
      </motion.div>

      <motion.div
        className={`${styles.retroFrame} ${styles.rightBottom}`}
        animate={{
          y: [0, -18, 0],
          rotate: [-5, -3, -7, -5],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className={styles.retroTape} />
        <div className={styles.retroImgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"
            alt="Aesthetic Geometry"
            className={styles.retroImg}
          />
        </div>
        <span className={styles.retroCaption}>ART_DIR_01.PNG</span>
      </motion.div>

      {/* === Above-fold Centered Content === */}
      <motion.div
        className={styles.top}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <h1 className={styles.heading}>
          <span className={styles.headingLine}>
            <AnimatedText text="Build a Brand that" />
          </span>
          <span className={styles.headingLine}>
            <AnimatedText text="Demands Attention" />
          </span>
        </h1>

        {/* CTA Buttons */}
        <motion.div className={styles.ctaButtons} variants={itemVariants}>
          <a href="#offerings" className={styles.primaryBtn}>
            Explore Kit
          </a>
          <a href="#gallery" className={styles.secondaryBtn}>
            <span>Our Work</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Social Proof - Avatar Stack */}
        <motion.div className={styles.socialProof} variants={itemVariants}>
          <div className={styles.avatarStack}>
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Happy brand owner ${i + 1}`}
                className={styles.avatar}
                loading="lazy"
              />
            ))}
          </div>
          <p className={styles.socialProofText}>
            <strong>+2k</strong> Happy Brand Owners
          </p>
        </motion.div>
      </motion.div>

      {/* === 3-Column Image Gallery === */}
      <motion.div
        className={styles.gallery}
        variants={galleryVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Panel 1: Dark card with statement text */}
        <div className={`${styles.panel} ${styles.panelDark}`}>
          <Heading level={2} className={styles.panelDarkText}>
            Built for founders serious about growth, clarity, and consistency.
          </Heading>
        </div>

        {/* Panel 2: Single video replacing images */}
        <div className={`${styles.panel} ${styles.panelVideo}`}>
          <video
            src="https://cdn.pixabay.com/video/2021/02/17/65494-514501826_large.mp4"
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </motion.div>

    </section>
  );
}
