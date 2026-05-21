'use client';

import { useState } from 'react';
import { FaqItem } from '@/data/types';
import { Plus } from 'lucide-react';
import styles from './ServiceFaq.module.css';

interface ServiceFaqProps {
  data: FaqItem[];
}

export default function ServiceFaq({ data }: ServiceFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>OBJECTIONS HANDLING</span>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.serifTitle}>Questions</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className={styles.accordion}>
          {data.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${activeIndex === index ? styles.itemActive : ''}`}
              onClick={() => toggle(index)}
            >
              {/* Question Click Header */}
              <div className={styles.itemHeader}>
                <h3 className={styles.question}>{faq.question}</h3>
                <div className={styles.iconCircle}>
                  <Plus size={16} className={styles.plusIcon} />
                </div>
              </div>

              {/* Answer Content Panel */}
              <div 
                className={styles.itemBody}
                style={{ 
                  maxHeight: activeIndex === index ? '280px' : '0px',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
