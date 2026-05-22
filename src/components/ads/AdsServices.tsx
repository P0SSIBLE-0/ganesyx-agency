'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './AdsServices.module.css';

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  illustration: React.ReactNode;
}

const checkIcon = (
  <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const servicesData: ServiceItem[] = [
  {
    id: 'creative',
    badge: 'Creative Suite',
    title: 'Ad Creative Production',
    description: 'Deploy scroll-stopping visual assets at scale. We build bespoke static and graphic design sets engineered to outperform generic ad creatives.',
    deliverables: [
      'High-Impact Static Banners',
      'Meta, Google & TikTok Layouts',
      'Unified Brand Campaign Assets',
      'Aspect-Ratio Resizing (1:1, 9:16)'
    ],
    illustration: (
      <svg className={styles.svgIcon} viewBox="0 0 100 100" fill="none">
        {/* Creative Design Grid Board */}
        <rect x="20" y="20" width="60" height="60" rx="8" stroke="#b3aaf2" strokeWidth="2.5" strokeDasharray="4 4" />
        <motion.rect 
          x="30" y="30" width="40" height="40" rx="4" fill="rgba(179, 170, 242, 0.15)" stroke="#b3aaf2" strokeWidth="2"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        {/* Small design nodes */}
        <circle cx="30" cy="30" r="3.5" fill="#ffffff" stroke="#b3aaf2" strokeWidth="2" />
        <circle cx="70" cy="30" r="3.5" fill="#ffffff" stroke="#b3aaf2" strokeWidth="2" />
        <circle cx="30" cy="70" r="3.5" fill="#ffffff" stroke="#b3aaf2" strokeWidth="2" />
        <circle cx="70" cy="70" r="3.5" fill="#ffffff" stroke="#b3aaf2" strokeWidth="2" />
        
        <circle cx="50" cy="50" r="8" fill="#f07191" />
      </svg>
    )
  },
  {
    id: 'motion',
    badge: 'UGC & Motion',
    title: 'Motion & Video Ads',
    description: 'Capture split-second user focus in fast-paced social feeds with native video layouts, kinetic typography, and animated visual hooks.',
    deliverables: [
      'Scroll-Stopping Hook Graphics',
      'Kinetic Text Overlays & Subtitles',
      '9:16 Video Storyboard Formats',
      'Dynamic Aspect-Ratio Resizing'
    ],
    illustration: (
      <svg className={styles.svgIcon} viewBox="0 0 100 100" fill="none">
        {/* Video Player Mockup */}
        <rect x="15" y="25" width="70" height="50" rx="8" stroke="#b3aaf2" strokeWidth="2.5" />
        <polygon points="45,42 60,50 45,58" fill="#f07191" />
        
        {/* Wavebar Slider */}
        <motion.line 
          x1="25" y1="62" x2="75" y2="62" stroke="#e5e5ea" strokeWidth="3" strokeLinecap="round" 
        />
        <motion.circle 
          cx="45" cy="62" r="5" fill="#b3aaf2" 
          animate={{ cx: [25, 75, 25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </svg>
    )
  },
  {
    id: 'copy',
    badge: 'Copy & Angle',
    title: 'Ad Copy & Angle Strategy',
    description: 'Connect your ad creatives with high-impact copywriting. We mine target audience pain points to draft hooks that resonate and convert.',
    deliverables: [
      'Research-Driven Value Props',
      'Multi-Angle Hook Variations',
      'Typography Overlay Copy',
      'Structured Conversion Copylines'
    ],
    illustration: (
      <svg className={styles.svgIcon} viewBox="0 0 100 100" fill="none">
        {/* Writing Sheet and Pen */}
        <rect x="25" y="20" width="50" height="60" rx="4" stroke="#b3aaf2" strokeWidth="2.5" />
        <motion.line 
          x1="35" y1="35" x2="65" y2="35" stroke="#b3aaf2" strokeWidth="2" strokeLinecap="round" 
          animate={{ strokeDasharray: ["0, 30", "30, 0", "0, 30"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <line x1="35" y1="48" x2="55" y2="48" stroke="#e5e5ea" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="60" x2="65" y2="60" stroke="#e5e5ea" strokeWidth="2" strokeLinecap="round" />
        
        {/* Pen Nib Icon */}
        <motion.polygon 
          points="62,60 74,48 78,52 66,64" fill="#f07191" 
          animate={{ x: [-2, 2, -2], y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </svg>
    )
  },
  {
    id: 'funnel',
    badge: 'Conversions',
    title: 'Performance Funnel Pages',
    description: 'Streamline the post-click experience. We design custom landing page layouts that seamlessly drive clicks to a checkout completion.',
    deliverables: [
      'Direct-to-Checkout Landing Pages',
      'Mobile-First Layout Wireframes',
      'Clean Product Detail Visuals',
      'Core Web Vitals Core Designs'
    ],
    illustration: (
      <svg className={styles.svgIcon} viewBox="0 0 100 100" fill="none">
        {/* Browser Mockup */}
        <rect x="15" y="25" width="70" height="50" rx="8" stroke="#b3aaf2" strokeWidth="2.5" />
        <line x1="15" y1="38" x2="85" y2="38" stroke="#b3aaf2" strokeWidth="1.5" />
        
        {/* Browser Dots */}
        <circle cx="25" cy="31" r="2.5" fill="#f07191" />
        <circle cx="33" cy="31" r="2.5" fill="#ffd60a" />
        <circle cx="41" cy="31" r="2.5" fill="#bedb95" />
        
        {/* Funnel Arrow */}
        <motion.path 
          d="M50 45 L50 65 M44 59 L50 65 L56 59" stroke="#b3aaf2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </svg>
    )
  },
  {
    id: 'refresh',
    badge: 'Scale & Test',
    title: 'Creative Refresh Retainers',
    description: 'Combat ad fatigue and maintain low CPA. We supply continuous creative variations backed by campaign performance feedback cycles.',
    deliverables: [
      'Iterative Multi-Angle Batch Packs',
      'Performance Analytics Feedback',
      'Ad Creative Fatigue Audits',
      'ROAS Optimization Design Variations'
    ],
    illustration: (
      <svg className={styles.svgIcon} viewBox="0 0 100 100" fill="none">
        {/* Rotating Circular Arrows */}
        <motion.path 
          d="M25 50 A25 25 0 0 1 70 30 M75 50 A25 25 0 0 1 30 70" stroke="#b3aaf2" strokeWidth="2.5" strokeLinecap="round" 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ originX: '50px', originY: '50px' }}
        />
        
        <circle cx="50" cy="50" r="10" fill="#f07191" />
        <polygon points="70,24 74,34 64,32" fill="#b3aaf2" />
        <polygon points="30,76 26,66 36,68" fill="#b3aaf2" />
      </svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

export default function AdsServices() {
  return (
    <section className={styles.section} id="ads-services">
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
            What We Offer
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Performance Design Services
          </motion.h2>
          <motion.p
            className={styles.headerDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored creative deliverables optimized to command consumer attention, reduce customer acquisition cost, and scale ROAS.
          </motion.p>
        </div>

        {/* Grid List */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.cardTop}>
                <span className={styles.badge}>{service.badge}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>

              {/* Central Illustration Area */}
              <div className={styles.illustrationArea}>
                {service.illustration}
              </div>

              <div className={styles.cardBottom}>
                <h4 className={styles.listTitle}>Deliverables Included:</h4>
                <ul className={styles.list}>
                  {service.deliverables.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {checkIcon}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
