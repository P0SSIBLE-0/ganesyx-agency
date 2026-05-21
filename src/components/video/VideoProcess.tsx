'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './VideoProcess.module.css';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: '01',
    title: 'Idea',
    description: 'We collaborate on creative direction, mapping core angles, hooks, and video objectives to set a solid strategic foundation.'
  },
  {
    id: '02',
    title: 'Script',
    description: 'Drafting conversion-focused scripts with strong hooks, key messaging, and explicit calls-to-action designed to capture and hold attention.'
  },
  {
    id: '03',
    title: 'Visual Plan',
    description: 'Creating detailed storyboards and shot-lists outlining frame transitions, text overlays, sound cues, and visual beats before production starts.'
  },
  {
    id: '04',
    title: 'Edit',
    description: 'Pacing the footage dynamically with professional color grading, custom sound design, and kinetic typography overlays.'
  },
  {
    id: '05',
    title: 'Final Delivery',
    description: 'Exporting clean files in multiple aspect ratios — 9:16 vertical, 1:1 square, 16:9 horizontal — ready for direct publishing and ads.'
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function VideoProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top label bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span className={styles.pipe}>|</span> Our Process
          </div>
          <div className={styles.topBarRight}>How We Work</div>
        </div>

        {/* Two-column layout */}
        <div className={styles.grid}>

          {/* ── Sticky Left ── */}
          <div className={styles.stickyContent}>
            <h2 className={styles.title}>
              A simple collaborative workflow that guides projects from first conversation to final delivery
            </h2>
          </div>

          {/* ── Scrolling Cards (Right) ── */}
          <motion.div
            className={styles.cardsList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {steps.map((step) => (
              <motion.div key={step.id} variants={cardVariants}>
                <div className={styles.card}>
                  {/* Title at the top */}
                  <h3 className={styles.cardTitle}>{step.title}</h3>

                  {/* Bottom row: description left, big number right */}
                  <div className={styles.cardBottom}>
                    <p className={styles.cardDescription}>{step.description}</p>
                    <div className={styles.number}>{step.id}</div>
                  </div>

                  {/* Thin separator line */}
                  <div className={styles.separator} />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
