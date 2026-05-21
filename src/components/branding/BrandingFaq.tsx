'use client';

import { useState, useRef, useEffect } from 'react';
import { FaqItem } from '@/data/types';
import { motion } from 'framer-motion';
import styles from './BrandingFaq.module.css';

interface BrandingFaqProps {
  data: FaqItem[];
}

/** Single accordion row that measures its own content height for silky smooth animation */
function FaqRow({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
      <button
        className={styles.itemHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <motion.div
          className={styles.iconWrapper}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={styles.plusIcon}
          >
            <line x1="10" y1="3" x2="10" y2="17" />
            <line x1="3" y1="10" x2="17" y2="10" />
          </svg>
        </motion.div>
        <span className={styles.question}>{faq.question}</span>
      </button>

      {/* Animate to measured pixel height — avoids height:'auto' layout thrashing */}
      <motion.div
        className={styles.itemBody}
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.42, ease: [0.33, 1, 0.68, 1] },
          opacity: { duration: isOpen ? 0.28 : 0.18, delay: isOpen ? 0.08 : 0 },
        }}
        style={{ overflow: 'hidden' }}
      >
        <div ref={bodyRef} className={styles.answerWrapper}>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function BrandingFaq({ data }: BrandingFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column — Header */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Frequently<br />asked questions
            </h2>
          </div>

          {/* Right Column — Accordion List */}
          <div className={styles.rightCol}>
            <div className={styles.accordion}>
              {data.map((faq, index) => (
                <FaqRow
                  key={index}
                  faq={faq}
                  isOpen={activeIndex === index}
                  onToggle={() => toggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
