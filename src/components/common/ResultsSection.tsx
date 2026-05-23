'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './ResultsSection.module.css';

export interface ResultCard {
  value: string;
  label: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

export interface ResultsSectionProps {
  badgeText?: string;
  heading?: string;
  subheading?: string;
  cards: ResultCard[];
}

const CardGridOverlay = ({ isFeatured }: { isFeatured?: boolean }) => (
  <svg
    className={styles.cardGrid}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke={isFeatured ? 'rgba(255, 255, 255, 0.08)' : 'rgba(97, 95, 255, 0.05)'} strokeWidth="1">
      {/* Skewed horizontal lines */}
      <line x1="-50" y1="20" x2="250" y2="120" />
      <line x1="-50" y1="60" x2="250" y2="160" />
      <line x1="-50" y1="100" x2="250" y2="200" />
      <line x1="-50" y1="140" x2="250" y2="240" />
      <line x1="-50" y1="-20" x2="250" y2="80" />

      {/* Skewed vertical lines */}
      <line x1="20" y1="-50" x2="120" y2="250" />
      <line x1="60" y1="-50" x2="160" y2="250" />
      <line x1="100" y1="-50" x2="200" y2="250" />
      <line x1="140" y1="-50" x2="240" y2="250" />
      <line x1="-20" y1="-50" x2="80" y2="250" />
    </g>
  </svg>
);

export default function ResultsSection({
  badgeText = 'Stats',
  heading = 'Results achieved from client',
  subheading = 'Measurable outcomes delivered for our clients across real campaigns and projects',
  cards
}: ResultsSectionProps) {

  // Framer Motion animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.sectionWrapper}>
      <motion.div
        className={styles.innerContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header Block */}
        <div className={styles.headerBlock}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>{badgeText}</span>
          </div> */}
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cards.map((card, index) => {
            const isFeatured = card.isFeatured;
            return (
              <motion.div
                key={index}
                className={`${styles.card} ${isFeatured ? styles.featuredCard : styles.normalCard}`}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Skewed background grid overlay */}
                <CardGridOverlay isFeatured={isFeatured} />

                {/* Card Content wrapper to sit above background grid */}
                <div className={styles.cardContent}>
                  {/* Icon Container */}
                  <div
                    className={`${styles.iconContainer} ${isFeatured ? styles.featuredIconContainer : styles.normalIconContainer
                      }`}
                  >
                    {card.icon}
                  </div>

                  {/* Value & Label */}
                  <div className={styles.cardMeta}>
                    <h3 className={styles.cardValue}>{card.value}</h3>
                    <p className={styles.cardDescription}>{card.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
