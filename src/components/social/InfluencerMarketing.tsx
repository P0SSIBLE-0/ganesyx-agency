'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Users, Target, Shield, Sparkles } from 'lucide-react';
import { Heading, SubHeading, Paragraph } from '@/components/ui/Typography';
import styles from './InfluencerMarketing.module.css';

interface Creator {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  engagement: string;
  image: string;
  platforms: string[];
}

const creators: Creator[] = [
  {
    name: "Avery Chen",
    handle: "@avery.tech",
    niche: "Tech & Productivity",
    followers: "240K",
    engagement: "5.8%",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    platforms: ["tiktok", "instagram"]
  },
  {
    name: "Marcus Vance",
    handle: "@marcus.vance",
    niche: "Lifestyle & Design",
    followers: "180K",
    engagement: "4.2%",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    platforms: ["instagram", "youtube"]
  },
  {
    name: "Sarah Lin",
    handle: "@sarah.lin",
    niche: "Beauty & Wellness",
    followers: "310K",
    engagement: "6.1%",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    platforms: ["tiktok", "instagram"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const leftColVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const creatorCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function InfluencerMarketing() {
  return (
    <section className={styles.section} id="influencer-marketing">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left Column — Text & Strategy info */}
          <motion.div
            className={styles.leftCol}
            variants={leftColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SubHeading className={styles.tagline}>Influencer Marketing</SubHeading>
            <Heading level={2} className={styles.title}>
              Creator Partnerships That Drive Conversions.
            </Heading>
            <Paragraph variant="default" className={styles.description}>
              We don't just buy follower counts. We match your brand with creator personalities who produce native, high-trust content that actually converts audiences into buyers.
            </Paragraph>

            <div className={styles.benefits}>
              <div className={styles.benefitItem}>
                <div className={styles.iconBox}>
                  <Users size={16} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Sourcing & Curation</h4>
                  <p className={styles.benefitText}>Niche audience analysis to pair you with authentic voices.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconBox}>
                  <Target size={16} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Paid Amplification</h4>
                  <p className={styles.benefitText}>Scaling winning organic creator posts via Spark and Partnership Ads.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconBox}>
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>Rights Management</h4>
                  <p className={styles.benefitText}>Seamless contract handling, usage permissions, and briefs control.</p>
                </div>
              </div>
            </div>

            {/* Campaign Summary Metrics */}
            <div className={styles.metricsRow}>
              <div className={styles.metricValGroup}>
                <span className={styles.metricVal}>15M+</span>
                <span className={styles.metricLabel}>Campaign Reach</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.metricValGroup}>
                <span className={styles.metricVal}>4.8%</span>
                <span className={styles.metricLabel}>Avg. Engagement</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.metricValGroup}>
                <span className={styles.metricVal}>3.2×</span>
                <span className={styles.metricLabel}>Average ROAS</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Premium Creator Mockup Cards */}
          <div className={styles.rightCol}>
            <motion.div
              className={styles.creatorList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {creators.map((creator, idx) => (
                <motion.div
                  key={idx}
                  className={styles.creatorCard}
                  variants={creatorCardVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      width={70}
                      height={70}
                      className={styles.avatar}
                      priority={idx === 0}
                    />
                  </div>

                  <div className={styles.creatorInfo}>
                    <div className={styles.creatorTop}>
                      <span className={styles.creatorName}>{creator.name}</span>
                      <span className={styles.creatorHandle}>{creator.handle}</span>
                    </div>
                    <span className={styles.creatorNiche}>{creator.niche}</span>

                    <div className={styles.creatorStats}>
                      <span className={styles.statLabel}>Followers: <strong>{creator.followers}</strong></span>
                      <span className={styles.statDot} />
                      <span className={styles.statLabel}>Engagement: <strong>{creator.engagement}</strong></span>
                    </div>
                  </div>

                  <div className={styles.platformBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.platformIcon}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
