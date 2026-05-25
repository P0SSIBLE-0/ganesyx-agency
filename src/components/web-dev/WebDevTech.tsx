'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TechIcon } from '@/components/ui/TechLogos';
import styles from './WebDevTech.module.css';

interface Technology {
  name: string;
  dataAttr: string;
}

export default function WebDevTech() {
  // Split technology stack into 3 rows for beautiful parallel marquees
  const row1: Technology[] = [
    { name: 'Next.js', dataAttr: 'nextjs' },
    { name: 'React', dataAttr: 'react' },
    { name: 'TypeScript', dataAttr: 'typescript' },
    { name: 'Tailwind', dataAttr: 'tailwind' }
  ];

  const row2: Technology[] = [
    { name: 'CSS Modules', dataAttr: 'cssmodules' },
    { name: 'Framer Motion', dataAttr: 'framermotion' },
    { name: 'Node.js', dataAttr: 'nodejs' },
    { name: 'Express', dataAttr: 'express' },
    { name: 'WordPress', dataAttr: 'wordpress' }
  ];

  const row3: Technology[] = [
    { name: 'Firebase', dataAttr: 'firebase' },
    { name: 'Supabase', dataAttr: 'supabase' },
    { name: 'MongoDB', dataAttr: 'mongodb' },
    { name: 'Shopify', dataAttr: 'shopify' }
  ];

  // Quadruple items to make the track wide enough to prevent gaps during animation
  const repeatArray = <T,>(arr: T[], count = 4): T[] => {
    let result: T[] = [];
    for (let i = 0; i < count; i++) {
      result = [...result, ...arr];
    }
    return result;
  };

  const track1 = repeatArray(row1, 5);
  const track2 = repeatArray(row2, 5);
  const track3 = repeatArray(row3, 6); // Repeated more times since it has fewer items

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.container}>
        
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>Technology Stack</span>
            <h2 className={styles.title}>Powered By Modern Technologies.</h2>
          </div>
          <p className={styles.supportText}>
            We choose technologies based on performance, scalability, maintainability, and long-term flexibility.
          </p>
        </motion.div>

      </div>

      {/* Full width 3-Row marquee sliders */}
      <div className={styles.marqueeWrapper}>
        
        {/* Row 1: Right to Left */}
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {track1.map((tech, idx) => (
              <div
                key={`row1-${tech.name}-${idx}`}
                className={styles.techBadge}
                data-tech={tech.dataAttr}
              >
                <div className={styles.iconWrapper}>
                  <TechIcon name={tech.name} />
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInnerReverse}>
            {track2.map((tech, idx) => (
              <div
                key={`row2-${tech.name}-${idx}`}
                className={styles.techBadge}
                data-tech={tech.dataAttr}
              >
                <div className={styles.iconWrapper}>
                  <TechIcon name={tech.name} />
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Right to Left */}
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {track3.map((tech, idx) => (
              <div
                key={`row3-${tech.name}-${idx}`}
                className={styles.techBadge}
                data-tech={tech.dataAttr}
              >
                <div className={styles.iconWrapper}>
                  <TechIcon name={tech.name} />
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
