'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teamData, type TeamMember } from '@/data/team';
import styles from './TeamSection.module.css';

interface TeamSliderRowProps {
  members: TeamMember[];
  index: number;
}

function TeamSliderRow({ members, index }: TeamSliderRowProps) {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const showControls = members.length > 3;

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const cardEl = sliderRef.current.querySelector(`.${styles.teamCardSlider}`);
      const cardWidth = cardEl?.clientWidth || 240;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const currentScroll = sliderRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.sliderWrapper} style={{ marginTop: index > 0 ? '48px' : '0' }}>
      {showControls && (
        <>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div
        ref={sliderRef}
        className={styles.slider}
      >
        {members.map((member, idx) => (
          <motion.div
            key={member.id}
            className={styles.teamCardSlider}
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, ease: [0.1, 0.3, 0.5, 0.955], delay: idx * 0.05 }}
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
  );
}

export default function TeamSection() {
  const firstRowMembers = teamData.filter((m) => m.department === 'leadership');
  const otherMembers = teamData.filter((m) => m.department !== 'leadership');

  // Split otherMembers in half for two parallel specialist rows
  const halfLength = Math.ceil(otherMembers.length / 2);
  const row1Members = otherMembers.slice(0, halfLength);
  const row2Members = otherMembers.slice(halfLength);

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
                "Two completely different brands, yet one seamless design language. Ganesyx translated our vision into a premium identity system that drove trust instantly."
              </p>

              <div className={styles.authorBox}>
                <img
                  src="/avatar/avatar-priya-sharma.png"
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
          {/* First Row: Leadership prominent cards */}
          <div className={styles.firstRow}>
            {firstRowMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.teamCardFirstRow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, ease: [0.455, 0.03, 0.515, 0.955], delay: index * 0.1 }}
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

          {/* Specialists Slider Row 1 */}
          <TeamSliderRow members={row1Members} index={0} />

          {/* Specialists Slider Row 2 */}
          <TeamSliderRow members={row2Members} index={1} />
        </div>

      </div>
    </section>
  );
}
