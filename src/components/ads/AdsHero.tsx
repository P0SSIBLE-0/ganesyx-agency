'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, ArrowUpRight } from 'lucide-react';
import styles from './AdsHero.module.css';

const avatarImages = [
  '/avatar/avatar-ananya-kapoor.png',
  '/avatar/avatar-arjun-singhania.png',
  '/avatar/avatar-ishita-verma.png',
  '/avatar/avatar-priya-sharma.png',
];

export default function AdsHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Decorative premium background elements */}
      <div className={styles.bgDotPattern} />
      <div className={styles.bgGlow} />

      <div className={styles.wrapper}>

        {/* Header content section */}
        <div className={styles.headerContent}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            We don't give up on your brand,<br />
            <span className={styles.gradientText}>even when you do.</span>
          </motion.h1>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get real results, no fluff, no excuses with leading Digital Marketing Agency
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="#consultation" className={styles.ctaBtn}>
              Schedule a consultation
              <ArrowRight size={18} className={styles.ctaIcon} />
            </a>
          </motion.div>
        </div>

        {/* Partners Row */}
        <motion.div
          className={styles.partnersRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Meta Partner */}
          <div className={styles.partnerLogo}>
            <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '130px', height: '26px' }}>
              <path d="M19.38 6.46c-1.89 0-3.56.96-4.52 2.45a5.457 5.457 0 0 0-4.52-2.45C7.26 6.46 4.75 8.92 4.75 11.95s2.51 5.49 5.59 5.49c1.89 0 3.56-.96 4.52-2.45 1.05 1.63 2.87 2.45 4.52 2.45 3.08 0 5.59-2.46 5.59-5.49s-2.51-5.49-5.59-5.49zm0 8.52c-1.68 0-3.04-1.33-3.04-2.98s1.36-2.98 3.04-2.98 3.04 1.33 3.04 2.98-1.36 2.98-3.04 2.98zm-9.04 0c-1.68 0-3.04-1.33-3.04-2.98s1.36-2.98 3.04-2.98 3.04 1.33 3.04 2.98-1.36 2.98-3.04 2.98z" fill="#0064E0" />
              <text x="36" y="14" fill="#000000" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11" letterSpacing="-0.2px">Meta</text>
              <text x="36" y="23" fill="#666666" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6.5">Business Partner</text>
            </svg>
          </div>

          {/* Shopify Partner */}
          <div className={styles.partnerLogo}>
            <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '110px', height: '26px' }}>
              <path d="M12.5 4.5c-.8 0-1.5.7-1.5 1.5v.5h3v-.5c0-.8-.7-1.5-1.5-1.5z" stroke="#95BF47" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M7.5 7.5l1.5 13c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5l1.5-13h-14z" fill="#95BF47" />
              <path d="M12 9.5c.3-1.8 1.8-3 3-2.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
              <text x="30" y="14" fill="#000000" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11.5" letterSpacing="-0.2px">shopify</text>
              <text x="30" y="23" fill="#666666" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.8px">partner</text>
            </svg>
          </div>

          {/* Google Partner */}
          <div className={styles.partnerLogo}>
            <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100px', height: '26px' }}>
              <rect x="4" y="4" width="3.5" height="20" rx="1.5" fill="#4285F4" />
              <text x="14" y="14" fill="#000000" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11" letterSpacing="-0.2px">
                <tspan fill="#4285F4">G</tspan>
                <tspan fill="#EA4335">o</tspan>
                <tspan fill="#FBBC05">o</tspan>
                <tspan fill="#4285F4">g</tspan>
                <tspan fill="#34A853">l</tspan>
                <tspan fill="#EA4335">e</tspan>
              </text>
              <text x="14" y="23" fill="#666666" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="0.8px">Partner</text>
            </svg>
          </div>
        </motion.div>

        {/* Cards container section */}
        {isMounted && (
          <motion.div
            className={styles.cardsContainer}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1: Left Portrait Video */}
            <motion.div className={`${styles.card} ${styles.videoCard}`} variants={fadeInUp}>
              <video
                className={styles.cardVideo}
                src="https://cdn.pixabay.com/video/2021/02/17/65494-514501826_large.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className={styles.videoOverlay}>
                <h3 className={styles.videoHeadline}>Scroll. Stop. Sell.</h3>
                <p className={styles.videoSub}>Watch how we turn viewers into customers.</p>
              </div>
            </motion.div>

            {/* Card 2: Purple Card */}
            <motion.div className={`${styles.card} ${styles.purpleCard}`} variants={fadeInUp}>
              <p className={styles.purpleText}>
                Process driven services that deliver every time.
              </p>
              <div className={styles.bulbIconContainer}>
                <div className={styles.bulbGlow} />
                <Lightbulb size={28} strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Card 3: Gray Avatar Card */}
            <motion.div className={`${styles.card} ${styles.grayCard}`} variants={fadeInUp}>
              <div className={styles.avatarGroup}>
                {avatarImages.map((src, index) => (
                  <div className={styles.avatarItem} key={index}>
                    <img className={styles.avatarImage} src={src} alt={`Team avatar ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className={styles.brandStats}>
                <span className={styles.statsNumber}>175+</span>
                <span className={styles.statsLabel}>Trusted brands</span>
              </div>
            </motion.div>

            {/* Card 4: Lavender Leads Card */}
            <motion.div className={`${styles.card} ${styles.lavenderCard}`} variants={fadeInUp}>
              <div>
                <h4 className={styles.leadsNumber}>250,000+</h4>
                <p className={styles.leadsLabel}>Leads Generated</p>
                <p className={styles.leadsDesc}>
                  Watch how we boost ROAS with innovative, data-driven campaigns
                </p>
              </div>
              <div className={styles.arrowIconContainer}>
                <ArrowUpRight size={32} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Card 5: Right Portrait Video */}
            <motion.div className={`${styles.card} ${styles.videoCard}`} variants={fadeInUp}>
              <video
                className={styles.cardVideo}
                src="https://cdn.pixabay.com/video/2016/09/21/5388-183788591_medium.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className={styles.videoOverlayTop}>
                <span className={styles.videoTag}>LADDOO SKIPPING IS IMPOSSIBLE</span>
              </div>
              <div className={styles.videoOverlay}>
                <h3 className={styles.videoHeadline}>Ad-ventures in Success</h3>
                <p className={styles.videoSub}>Swipe through our chart-topping ad performances</p>
                <a href="#read-more" className={styles.readMoreLink}>Read more</a>
              </div>
            </motion.div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
