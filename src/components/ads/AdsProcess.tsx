'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './AdsProcess.module.css';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: '01',
    title: 'Discovery',
    description: 'We audit your historical campaign data, analyze your competitors\' creative strategy, and establish clear, data-driven KPI goals (such as CPA, ROAS, and volume targets).'
  },
  {
    id: '02',
    title: 'Audience Research',
    description: 'We map out your high-value customer avatars, identify core behavioral demographics, and study online search/buying behaviors to establish precise ad targeting profiles.'
  },
  {
    id: '03',
    title: 'Offer Positioning',
    description: 'We translate your core value proposition into high-impact hooks, structures, and promotional angles (e.g., risk reversal, bundling, hook variations) that lower conversion friction.'
  },
  {
    id: '04',
    title: 'Creative Production',
    description: 'Our team writes conversion scripts, directs video creators, and designs scroll-stopping static layouts and kinetic typography videos built to capture split-second focus.'
  },
  {
    id: '05',
    title: 'Campaign Launch',
    description: 'We deploy structured, high-efficiency campaigns on Meta, Google, or TikTok, verifying pixel/CAPI setups and initializing test budgets to isolate winning creative angles.'
  },
  {
    id: '06',
    title: 'Optimization',
    description: 'We analyze real-time account data, eliminate low-performing sets, refine copies and hooks, scale up successful assets, and monitor creative fatigue schedules.'
  },
  {
    id: '07',
    title: 'Scaling',
    description: 'We expand budgets on our proven creative winners, deploy lookalike/broad targeting campaigns, introduce multi-channel expansion, and maintain constant creative refreshes.'
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

export default function AdsProcess() {
  return (
    <section className={styles.section} id="ads-process">
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
              A structured, data-first process to scale your ad creatives and maximize ROAS
            </h2>
            <p className={styles.description}>
              We minimize risk and maximize creative efficiency by guiding every ad campaign through these 7 rigorous sprint phases, keeping design and performance fully aligned.
            </p>
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
