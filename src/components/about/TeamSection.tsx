'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '@/data/team';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>

        {/* Left Column: Pinned Text Content */}
        <div className={styles.leftCol}>
          <div className={styles.stickyWrapper}>
            <h2 className={styles.title}>The Crew Behind The Ganesyx</h2>
            <p className={styles.subtitle}>
              We’re not just designers — Branding is all about gut feeling, what people think, feel, vibe and behave with your brand but It starts with a Tagdi brand strategy.
            </p>

            {/* Divider line and Quote */}
            <div className={styles.quoteArea}>
              <div className={styles.quoteDivider} />
              <p className={styles.quoteText}>
                "Two brands. One clear system. Xcelerate Brand Kit by TFX made both launches look premium and consistent."
              </p>

              <div className={styles.authorBox}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                  alt="Krishna Prasad"
                  className={styles.authorAvatar}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>Krishna Prasad</h4>
                  <p className={styles.authorRole}>Founder, Olden essence, LifeRise</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling Team Grid */}
        <div className={styles.rightCol}>
          <div className={styles.teamGrid}>
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberDetails}>
                  <span className={styles.memberRole}>{member.role}</span>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
