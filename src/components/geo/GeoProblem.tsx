'use client';

import { motion, type Variants } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import styles from './GeoProblem.module.css';

export default function GeoProblem() {
  const problems = [
    {
      index: '01',
      title: 'Weak Entity Signals',
      description: 'Search systems do not fully recognize your brand, products, or founders as distinct semantic entities.'
    },
    {
      index: '02',
      title: 'Unstructured Content',
      description: 'Your pages are laid out for manual reading, missing clear formatting optimized for AI parsing models.'
    },
    {
      index: '03',
      title: 'Low Topical Authority',
      description: 'Content covers shallow keywords without the depth, source citations, or context RAG systems require.'
    },
    {
      index: '04',
      title: 'Missing Schema & Metadata',
      description: 'Critical structured JSON-LD schemas and reference metadata are absent, leaving LLMs to guess your data.'
    },
    {
      index: '05',
      title: 'Generic Info Architecture',
      description: 'Poorly organized hierarchies and standard site maps limit how efficiently AI crawlers digest your database.'
    },
    {
      index: '06',
      title: 'Inconsistent Brand Signals',
      description: 'Conflicting facts across different web properties reduce database verification trust, leading to response omission.'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className={styles.section} id="geo-problem">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.pill}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertCircle size={12} className={styles.pillIcon} />
            <span>The Discovery Barrier</span>
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Most Brands Aren’t Optimized <br />
            For AI Discovery.
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Even strong businesses struggle to appear in AI-generated answers because their content lacks structure, clarity, and topical authority.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.3)' }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.index}>{problem.index}</span>
                <span className={styles.indexDot} />
              </div>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDesc}>{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
