'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './DesignProcess.module.css';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: '01',
    title: 'Brief',
    description: 'We gather your brand guidelines, project objectives, and creative requirements to establish a clear and aligned design brief.'
  },
  {
    id: '02',
    title: 'Concepts',
    description: 'Developing initial mood boards, visual directions, and rough layout concepts to explore the best creative paths for your brand.'
  },
  {
    id: '03',
    title: 'Design',
    description: 'Crafting high-fidelity mockups, vector artwork, and typography layouts with strict attention to grid alignment and visual hierarchy.'
  },
  {
    id: '04',
    title: 'Revisions',
    description: 'Collaborating on feedback through quick design iterations to refine details, polish execution, and perfect every pixel.'
  },
  {
    id: '05',
    title: 'Delivery',
    description: 'Exporting clean, production-ready assets in all requested formats along with complete design source files and style documentation.'
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

export default function DesignProcess() {
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
