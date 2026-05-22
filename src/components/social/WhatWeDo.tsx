'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Film, Palette, PenTool, Calendar, Megaphone, BarChart3 } from 'lucide-react';
import styles from './WhatWeDo.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  themeClass: string;
  delay: number;
}

function ServiceCard({ title, description, icon, image, themeClass, delay }: ServiceCardProps) {
  return (
    <motion.div
      className={`${styles.serviceCard} ${themeClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.iconWrapper}>
            {icon}
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const services = [
    {
      title: 'Content Strategy',
      description: 'We craft high-yield organic strategies, audience persona mapping, and content pillar matrices tailored to each specific channel.',
      icon: <Compass size={20} className={styles.iconIndigo} />,
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgIndigo,
    },
    {
      title: 'Content Creation',
      description: 'High-fidelity production of vertical Reels, TikToks, Shorts, interactive carousels, and stories built to command feed attention.',
      icon: <Sparkles size={20} className={styles.iconViolet} />,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgViolet,
    },
    {
      title: 'Video Editing',
      description: 'Retention-optimized post-production with dynamic cuts, animated caption overlays, premium sound design, and custom hook frames.',
      icon: <Film size={20} className={styles.iconRose} />,
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgRose,
    },
    {
      title: 'Creative Direction',
      description: 'Establishing signature style templates, grid layouts, and visual pacing rules that maintain a premium brand aesthetic on all feeds.',
      icon: <Palette size={20} className={styles.iconAmber} />,
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgAmber,
    },
    {
      title: 'Copywriting',
      description: 'Writing scroll-stopping copy: high-CTR headline hooks, engaging captions, and conversion-focused CTAs that turn readers into buyers.',
      icon: <PenTool size={20} className={styles.iconEmerald} />,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgEmerald,
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end channel operations, including publishing schedules, keyword-rich SEO description tags, and community comments moderation.',
      icon: <Calendar size={20} className={styles.iconBlue} />,
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgBlue,
    },
    {
      title: 'Paid Social Campaigns',
      description: 'Targeted audience ad distribution campaigns designed to amplify organic top-performers and scale direct-response metrics.',
      icon: <Megaphone size={20} className={styles.iconCyan} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgCyan,
    },
    {
      title: 'Analytics & Reporting',
      description: 'Granular monthly reporting tracking follower growth, profile interactions, watch times, and direct conversion attribution.',
      icon: <BarChart3 size={20} className={styles.iconPurple} />,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&h=400&q=80',
      themeClass: styles.bgPurple,
    },
  ];

  return (
    <section className={styles.sectionContainer} id="services">
      <div className={styles.containerInner}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div
            className={styles.sectionBadge}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={12} />
            <span>What We Do</span>
          </motion.div>
          
          <motion.h2
            className={styles.sectionHeadline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built For Modern Content Ecosystems.
          </motion.h2>

          <motion.p
            className={styles.sectionSupportingText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We create social systems designed for visibility, engagement, and long-term brand growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              themeClass={service.themeClass}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
