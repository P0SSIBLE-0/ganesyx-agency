'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Heading, SubHeading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import styles from './SeoWorkflow.module.css';

interface WorkflowStep {
  number: string;
  title: string;
  subLabel: string;
  points: string[];
}

const stepsData: WorkflowStep[] = [
  {
    number: "1",
    title: "Deep audit & keyword mapping",
    subLabel: "How we help you scale",
    points: [
      "Crawl error logs diagnostics & Core Web Vitals checks",
      "High-intent commercial search queries mapping",
      "Identify key landing page gaps and competitor indexing"
    ]
  },
  {
    number: "2",
    title: "On-page content sprint",
    subLabel: "How we help you scale",
    points: [
      "Optimize meta tags, header hierarchy, and internal links",
      "Inject natural language processing (NLP) target phrases",
      "Structure high-converting editorial article frameworks"
    ]
  },
  {
    number: "3",
    title: "Authority & link acquisition",
    subLabel: "How we help you scale",
    points: [
      "Run targeted guest outreach campaigns for high-DA placements",
      "Recover broken site links and unlinked brand mentions",
      "Design linkable visual assets to earn shares naturally"
    ]
  },
  {
    number: "4",
    title: "Analytics & ongoing reviews",
    subLabel: "How we help you scale",
    points: [
      "Deliver custom Looker Studio traffic dashboards",
      "Audit and adjust keyword rankings based on search trends",
      "Track conversion achievements and actual monthly ROI"
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function SeoWorkflow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column (Sticky Title & Description) */}
        <div className={styles.leftCol}>
          <Heading level={2} className={styles.leftTitle}>
            How we help you scale
          </Heading>
          <Paragraph variant="default" className={styles.leftDesc}>
            A simple, search-data-backed process designed to uncover competitor 
            traffic gaps and create an organic ranking plan that drives real sales.
          </Paragraph>
          <div className={styles.buttonRow}>
            <Button variant="primary">Get Started</Button>
            <Button 
              variant="circle" 
              aria-label="Go to contact" 
              icon={<ArrowUpRight size={18} />} 
            />
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className={styles.dividerCol}>
          <div className={styles.verticalLine} />
        </div>

        {/* Right Column (Stepper list) */}
        <div className={styles.rightCol}>
          <Heading level={3} className={styles.rightHeader}>
            How it works
          </Heading>
          
          <motion.div 
            className={styles.stepList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stepsData.map((step, index) => (
              <motion.div 
                key={index} 
                className={styles.stepNode}
                variants={stepVariants}
              >
                {/* Number Bubble */}
                <div className={styles.stepNumber}>
                  {step.number}
                </div>

                {/* Details list inside step */}
                <div className={styles.stepContent}>
                  <Heading level={4} className={styles.stepTitle}>
                    {step.title}
                  </Heading>
                  <SubHeading className={styles.stepSubLabel}>
                    {step.subLabel}
                  </SubHeading>
                  
                  <div className={styles.pointList}>
                    {step.points.map((point, pIndex) => (
                      <div key={pIndex} className={styles.pointItem}>
                        {point}
                      </div>
                    ))}
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
