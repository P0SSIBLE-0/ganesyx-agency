'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './WhatWeDesign.module.css';

interface DesignItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const designOfferings: DesignItem[] = [
  {
    id: '01',
    title: 'Social Media Creatives',
    description: 'Scroll-stopping graphics, curated carousels, and visual templates that command attention on Instagram, LinkedIn, and Twitter.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    tag: 'Social Growth',
  },
  {
    id: '02',
    title: 'Ad Banners',
    description: 'High-converting display ad suites optimized for CTR across Google Ads, Meta Ads, and premium programmatic networks.',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1074&auto=format',
    tag: 'Paid Media',
  },
  {
    id: '03',
    title: 'Presentation Decks',
    description: 'Sleek, brand-aligned pitch decks, sales keynotes, and investor presentations designed to win deals and influence minds.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    tag: 'Business',
  },
  {
    id: '04',
    title: 'Brochures',
    description: 'Premium print layouts and digital PDF brochures featuring bespoke typesetting, sophisticated grid systems, and layouts.',
    image: 'https://images.unsplash.com/photo-1651164653520-010c766aebf1?q=80&w=800&auto=format&fit=crop',
    tag: 'Print & PDF',
  },
  {
    id: '05',
    title: 'Posters',
    description: 'Bespoke event posters, street apparel prints, and modern typography campaigns designed to capture imagination in physical scale.',
    image: 'https://images.unsplash.com/photo-1563050860-87d45eaaeabb?q=80&w=800&auto=format&fit=crop',
    tag: 'Campaigns',
  },
  {
    id: '06',
    title: 'Infographics',
    description: 'Bite-sized data visualizations, system workflow diagrams, and statistical stories engineered for clarity and virality.',
    image: 'https://images.unsplash.com/photo-1767350510090-137a6ce252c0?q=80&w=800&auto=format&fit=crop',
    tag: 'Data Viz',
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WhatWeDesign() {
  return (
    <section className={styles.section} id="what-we-design">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <motion.span
            className={styles.subTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Capabilities
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What We Design
          </motion.h2>
          <motion.p
            className={styles.headerDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We deliver aesthetic, pixel-perfect, and conversions-focused marketing designs tailored to elevate your brand standard.
          </motion.p>
        </div>

        {/* Offerings Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {designOfferings.map((item) => (
            <motion.div
              key={item.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Card Media Wrapper with Soft Border Radius */}
              <div className={styles.mediaWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.badge}>
                  {item.tag}
                </span>

                {/* Glass Title Bar */}
                <div className={styles.glassTitleBar}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.number}>/{item.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}