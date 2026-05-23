'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

interface Reason {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const reasonsData: Reason[] = [
  {
    num: '01',
    title: 'Data-Backed Strategy (No Guesswork)',
    desc: 'We map out exact customer acquisition channels, conversion rates, and revenue impact before launching campaigns, ensuring every dollar spent has a clear purpose.',
    icon: <Target size={20} />
  },
  {
    num: '02',
    title: 'Multi-Touch Attribution Maps',
    desc: 'We track user behavior across organic search (SEO), AI chat recommendations (GEO), paid ads, and emails, eliminating dark spots in your marketing funnel.',
    icon: <TrendingUp size={20} />
  },
  {
    num: '03',
    title: 'Integrated Channel Compound',
    desc: 'Instead of isolated tactics, our channels are connected. Your SEO content fuels your paid ads search intent, and your email flows nurture retargeted leads automatically.',
    icon: <Zap size={20} />
  },
  {
    num: '04',
    title: 'Pure Revenue Focus (No Vanity Metrics)',
    desc: 'We optimize campaigns for pipeline value, qualified demo signups, and customer acquisition cost (CAC) rather than clicks, impressions, or likes.',
    icon: <Sparkles size={20} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.layout}>
          
          {/* Left Column: Premium Image Block */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Why Choose Ganesyx digital marketing team"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.accentBorder}></div>
              {/* Float badge */}
              <div className={styles.floatBadge}>
                <span className={styles.badgeNum}>+340%</span>
                <span className={styles.badgeLabel}>Average ROAS Increase</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reasons List */}
          <div className={styles.contentColumn}>
            <span className={styles.tag}>THE GANESYX ADVANTAGE</span>
            <h2 className={styles.heading}>
              Why brands trust Ganesyx <br />
              to scale
            </h2>
            <p className={styles.lead}>
              We replace standard guesswork with high-fidelity analytics, integrated digital marketing channels, and conversion-optimized systems built for long-term revenue growth.
            </p>

            <div className={styles.reasonsList}>
              {reasonsData.map((reason, index) => (
                <motion.div
                  key={reason.num}
                  className={styles.reasonItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <div className={styles.numIconWrapper}>
                    <span className={styles.num}>{reason.num}</span>
                  </div>
                  <div className={styles.reasonText}>
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonDesc}>{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
