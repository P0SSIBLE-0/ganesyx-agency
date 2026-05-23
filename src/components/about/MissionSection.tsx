'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './MissionSection.module.css';

interface MissionItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const missionData: MissionItem[] = [
  {
    id: 'mission',
    number: '01',
    title: 'Our Mission',
    description:
      'Our mission is to empower businesses with innovative digital solutions that create meaningful connections and deliver measurable results. We focus on combining creativity, technology, and strategy to help brands grow, stand out, and succeed in an ever-evolving digital world. Through dedication and excellence, we strive to turn ideas into impactful experiences.',
  },
  {
    id: 'vision',
    number: '02',
    title: 'Our Vision',
    description:
      'Our vision is to become a trusted digital partner for businesses worldwide by shaping the future through innovation and creativity. We aim to build powerful brands, inspire growth, and create digital experiences that leave a lasting impact on people and businesses.',
  },
  {
    id: 'values',
    number: '03',
    title: 'Our Values',
    description:
      'Our vision is to become a trusted digital partner for businesses worldwide by shaping the future through innovation and creativity. We aim to build powerful brands, inspire growth, and create digital experiences that leave a lasting impact on people and businesses.',
  },
];

export default function MissionSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.rowsWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {missionData.map((item) => (
            <motion.div
              key={item.id}
              className={styles.row}
              variants={rowVariants}
            >
              <div className={styles.numberContainer}>
                <span className={styles.number}>{item.number}</span>
              </div>
              <div className={styles.contentBlock}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
