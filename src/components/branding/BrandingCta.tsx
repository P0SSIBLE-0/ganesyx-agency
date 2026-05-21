'use client';

import { FinalCta } from '@/data/types';
import { motion } from 'framer-motion';
import styles from './BrandingCta.module.css';

interface BrandingCtaProps {
  data: FinalCta;
}

export default function BrandingCta({ data }: BrandingCtaProps) {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
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
                <span className={styles.chevron}>&gt;</span>
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
