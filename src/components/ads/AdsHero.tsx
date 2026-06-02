'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
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
    const handle = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(handle);
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

      {/* Premium Floating Brand Logos */}
      <motion.div
        className={`${styles.floatingLogo} ${styles.floatMeta}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.75,
          scale: 1,
          y: [0, -12, 0],
          x: [0, 6, 0],
          rotate: [0, 4, 0]
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 },
          scale: { duration: 1 }
        }}
      >
        <Image
          src="/logos/meta.svg"
          alt="Meta Logo"
          width={160}
          height={100}
          style={{ objectFit: 'contain', width: 'auto', height: '60px' }}
        />
      </motion.div>

      <motion.div
        className={`${styles.floatingLogo} ${styles.floatGoogle}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: [0, 12, 0],
          x: [0, -8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          x: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          opacity: { duration: 1 },
          scale: { duration: 1 }
        }}
      >
        <Image
          src="/logos/google-wordmark.svg"
          alt="Google Logo"
          width={65}
          height={20}
          style={{ objectFit: 'contain', width: 'auto', height: '40px' }}
        />
      </motion.div>

      <motion.div
        className={`${styles.floatingLogoCircle} ${styles.floatInstagram}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.8,
          scale: 1,
          y: [0, -15, 0],
          x: [0, -5, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          x: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { duration: 1 },
          scale: { duration: 1 }
        }}
      >
        <Image
          src="/logos/instagram-icon.svg"
          alt="Instagram Logo"
          width={64}
          height={60}
        />
      </motion.div>

      <motion.div
        className={`${styles.floatingLogoCircle} ${styles.floatWhatsapp}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.8,
          scale: 1,
          y: [0, 14, 0],
          x: [0, 7, 0],
          rotate: [0, -6, 0]
        }}
        transition={{
          y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
          x: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
          rotate: { duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
          opacity: { duration: 1 },
          scale: { duration: 1 }
        }}
      >
        <Image
          src="/logos/whatsapp-icon.svg"
          alt="WhatsApp Logo"
          width={64}
          height={64}
        />
      </motion.div>

      <div className={styles.wrapper}>

        {/* Header content section */}
        <div className={styles.headerContent}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            We don&apos;t give up on your brand,<br />
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
          <p className={styles.partnersLabel}>Partner with</p>

          <div className={styles.partnerLogos}>
            {/* Meta Partner */}
            <div className={styles.partnerLogo}>
              <Image
                src="/logos/meta.svg"
                alt="Meta Partner"
                width={100}
                height={26}
                style={{ objectFit: 'contain', width: 'auto', height: '26px' }}
              />
            </div>

            {/* Shopify Partner */}
            <div className={styles.partnerLogo}>
              <Image
                src="/logos/shopify-wordmark-light.svg"
                alt="Shopify Partner"
                width={90}
                height={26}
                style={{ objectFit: 'contain', width: 'auto', height: '26px' }}
              />
            </div>

            {/* Google Partner */}
            <div className={styles.partnerLogo}>
              <Image
                src="/logos/google-wordmark.svg"
                alt="Google Partner"
                width={75}
                height={25}
                style={{ objectFit: 'contain', width: 'auto', height: '25px' }}
              />
            </div>
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
                src="/video/rolls_with_bonds.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className={styles.videoOverlay}>
                <h3 className={styles.videoHeadline}>Scroll. Stop. Sell.</h3>
                <p className={styles.videoSub}>Watch how we turn casual viewers into loyal buyers.</p>
              </div>
            </motion.div>

            {/* Card 2: Purple Card */}
            <motion.div className={`${styles.card} ${styles.purpleCard}`} variants={fadeInUp}>
              <p className={styles.purpleText}>
                Paid Ads that convert, not just generate clicks.
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
                    <Image
                      className={styles.avatarImage}
                      src={src}
                      alt={`Team avatar ${index + 1}`}
                      width={40}
                      height={40}
                    />
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
                <h4 className={styles.leadsNumber}>4.5x</h4>
                <p className={styles.leadsLabel}>Average ROAS</p>
                <p className={styles.leadsDesc}>
                  We transform paid advertising budgets into profitable, sustainable growth.
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
                <span className={styles.videoTag}>ROAS OPTIMIZATION</span>
              </div>
              <div className={styles.videoOverlay}>
                <h3 className={styles.videoHeadline}>Hook. Angle. Scale.</h3>
                <p className={styles.videoSub}>Watch how we build high-converting paid campaign structures.</p>
                <a href="#consultation" className={styles.readMoreLink}>Book a call</a>
              </div>
            </motion.div>

          </motion.div>
        )}

      </div>
    </section>
  );
}
