'use client';

import { motion, type Variants } from 'framer-motion';
import { Clapperboard, Zap, LayoutGrid, Wand2 } from 'lucide-react';
import styles from './WhyWorkWithUs.module.css';

interface WhyItem {
  title: string;
  description: string;
  Icon: React.ComponentType<any>;
}

const whyItems: WhyItem[] = [
  {
    title: 'Creative Excellence',
    description: 'A team of expert editors delivering top-tier visuals.',
    Icon: Clapperboard
  },
  {
    title: 'Fast & Reliable',
    description: 'Efficient workflow to meet deadlines without compromising quality.',
    Icon: Zap
  },
  {
    title: 'Attention to Detail',
    description: 'Precision editing for seamless transitions and flow.',
    Icon: LayoutGrid
  },
  {
    title: 'Custom Approach',
    description: 'Each project is uniquely crafted to fit your vision.',
    Icon: Wand2
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
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

export default function WhyWorkWithUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.subTitle}>Why Work With Me?</span>
          <h2 className={styles.title}>Editing That Elevates Your Vision</h2>
        </div>

        {/* Value Cards Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {whyItems.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <motion.div 
                key={index}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
