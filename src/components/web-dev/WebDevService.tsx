'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './WebDevService.module.css';

interface ServiceItem {
  title: string;
  desc: string;
  tag: string;
  imageUrl: string;
}

export default function WebDevBuild() {
  const services: ServiceItem[] = [
    {
      title: 'Business Websites',
      desc: 'Professional websites designed for visibility, clean layouts, and brand trust.',
      tag: 'Visibility',
      imageUrl: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=1460&auto=format&fit=crop',
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting layout paths optimized to support targeted marketing campaigns and ads.',
      tag: 'Campaigns',
      imageUrl: 'https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=1332&auto=format&fit=crop',
    },
    {
      title: 'E-Commerce Stores',
      desc: 'Modern online shopping systems and checkouts custom-built to maximize transactions.',
      tag: 'Sales',
      imageUrl: 'https://images.unsplash.com/photo-1674027392851-7b34f21b07ee?q=80&w=1332&auto=format&fit=crop',
    },
    {
      title: 'Web Applications',
      desc: 'Custom-tailored scalable web platforms, SaaS products, and custom digital software.',
      tag: 'Scalable',
      imageUrl: 'https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?q=80&w=1170&auto=format&fit=crop',
    },
    {
      title: 'LMS Development',
      desc: 'Highly interactive creative experiences tailored for premium brands and individuals.',
      tag: 'Creative',
      imageUrl: 'https://images.unsplash.com/photo-1617469955236-7f13d137a4f0?q=80&w=1170&auto=format&fit=crop',
    },
    {
      title: 'CMS Development',
      desc: 'Easy-to-manage headless content hubs, custom dashboards, and markdown systems.',
      tag: 'Headless',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Website Redesigns',
      desc: 'Performance overhauls and visual modernizations focused on core web vitals and UX.',
      tag: 'Optimize',
      imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop',
    },
    {
      title: 'Custom Coded',
      desc: 'websites from scratch, tailored precisely to your requirements.',
      tag: 'Custom Coded',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop',
    },
  ];

  // Divide services into two rows of 4
  const row1 = services.slice(0, 4);
  const row2 = services.slice(4, 8);

  // Stagger children transition
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
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
    <section className={styles.section} id="offerings">
      <div className={styles.container}>
        {/* Split Header block */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariants}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>Services</span>
            <h2 className={styles.title}>Digital Experiences Built Around Your Business Goals.</h2>
          </div>
          <p className={styles.supportText}>
            From high-converting marketing sites to scalable web applications, we build
            systems designed for modern digital growth.
          </p>
        </motion.div>

        {/* Accordion Flex Rows */}
        <div className={styles.gridContainer}>
          {/* Row 1 */}
          <motion.div
            className={styles.row}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {row1.map((service, i) => (
              <motion.div
                key={i}
                className={styles.cardWrapper}
                variants={cardVariants}
              >
                <div className={styles.imageCard}>
                  <img
                    src={service.imageUrl}
                    className={styles.image}
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className={styles.overlay} />
                  <div className={styles.cardInfo}>
                    <div className={styles.cardHeader}>
                      <span className={styles.tag}>{service.tag}</span>
                      <ArrowRight size={16} className={styles.hoverArrow} />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className={styles.row}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {row2.map((service, i) => (
              <motion.div
                key={i}
                className={styles.cardWrapper}
                variants={cardVariants}
              >
                <div className={styles.imageCard}>
                  <img
                    src={service.imageUrl}
                    className={styles.image}
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className={styles.overlay} />
                  <div className={styles.cardInfo}>
                    <div className={styles.cardHeader}>
                      <span className={styles.tag}>{service.tag}</span>
                      <ArrowRight size={16} className={styles.hoverArrow} />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
