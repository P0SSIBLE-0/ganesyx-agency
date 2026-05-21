'use client';

import { ProblemSection } from '@/data/types';
import styles from './ServiceProblem.module.css';

interface ServiceProblemProps {
  data: ProblemSection;
}

export default function ServiceProblem({ data }: ServiceProblemProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Sticky Left Info */}
          <div className={styles.stickyColumn}>
            <span className={styles.label}>THE FRICTION</span>
            <h2 className={styles.heading}>
              {data.title.split('compete on price')[0]}
              <span className={styles.italicHighlight}>compete on price.</span>
              {data.title.split('compete on price')[1]}
            </h2>
            <div className={styles.divider} />
            <p className={styles.description}>{data.description}</p>
          </div>

          {/* Scrolling Right Cards */}
          <div className={styles.cardsColumn}>
            {data.items.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.glowingDot} />
                  <span className={styles.number}>{item.id}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <div className={styles.cardGlowOverlay} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
