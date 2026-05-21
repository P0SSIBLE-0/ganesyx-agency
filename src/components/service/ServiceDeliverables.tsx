'use client';

import { useState } from 'react';
import { DeliverablesSection } from '@/data/types';
import { Check, Layers, Briefcase } from 'lucide-react';
import styles from './ServiceDeliverables.module.css';

interface ServiceDeliverablesProps {
  data: DeliverablesSection;
}

export default function ServiceDeliverables({ data }: ServiceDeliverablesProps) {
  const [activeTab, setActiveTab] = useState<'includes' | 'gets'>('includes');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>WHAT WE DELIVER</span>
          <h2 className={styles.title}>
            Bespoke systems, <span className={styles.serifTitle}>not templated outputs.</span>
          </h2>
          <p className={styles.desc}>
            We combine high-level strategic alignment with pixel-perfect asset packages ready to scale.
          </p>

          {/* Premium Tab Buttons */}
          <div className={styles.tabsWrapper}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'includes' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('includes')}
            >
              <Layers size={14} />
              <span>Strategy & Core Identity</span>
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'gets' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('gets')}
            >
              <Briefcase size={14} />
              <span>Tangible Deliverables</span>
            </button>
          </div>
        </div>

        {/* Tab Content Grid */}
        <div className={styles.gridContainer}>
          <div key={activeTab} className={styles.grid}>
            {(activeTab === 'includes' ? data.includes : data.gets).map((item, index) => (
              <div 
                key={index} 
                className={styles.card}
                style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
              >
                <div className={styles.iconCircle}>
                  <Check size={15} className={styles.checkIcon} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
