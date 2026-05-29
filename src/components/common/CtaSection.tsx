'use client';

import { FinalCta } from '@/data/types';
import { motion } from 'framer-motion';
import styles from './CtaSection.module.css';
import { ChevronRight } from 'lucide-react';

interface CtaSectionProps {
  data?: FinalCta;
}

const DEFAULT_CTA_DATA: FinalCta = {
  title: 'Enhance brand experience and maximize value with Ganesyx.',
  description: "Use Ganesyx's premium design systems and visual standards to build memorable brand identities.",
  primaryCta: {
    text: 'Book a call',
    href: '/contact#consultation',
  },
  secondaryCta: {
    text: 'Explore our work',
    href: '#portfolio',
  },
};

export default function CtaSection({ data = DEFAULT_CTA_DATA }: CtaSectionProps) {

  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.5, 1] }}
        >
          {/* Layered glowing horizon gradient coming from bottom */}
          <div className={styles.glow} />
          <div className={styles.glowSecondary} />

          <div className={styles.content}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data.title}
            </motion.h2>

            <motion.p
              className={styles.desc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {data.description}
            </motion.p>

            <motion.div
              className={styles.ctaRow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href={data.primaryCta.href}
                className={styles.primaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{data.primaryCta.text}</span>
                <span className={styles.chevron}>
                  <ChevronRight />
                </span>
              </motion.a>

              {data.secondaryCta && (
                <motion.a
                  href={data.secondaryCta.href}
                  className={styles.secondaryBtn}
                  whileHover={{ opacity: 0.8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {data.secondaryCta.text}
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
