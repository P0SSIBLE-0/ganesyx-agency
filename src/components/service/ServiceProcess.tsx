'use client';

import { ProcessStep } from '@/data/types';
import styles from './ServiceProcess.module.css';

interface ServiceProcessProps {
  data: ProcessStep[];
}

export default function ServiceProcess({ data }: ServiceProcessProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>THE METRICS</span>
          <h2 className={styles.title}>
            A structured path <span className={styles.serifTitle}>to distinct execution.</span>
          </h2>
          <p className={styles.desc}>
            We minimize creative risk by organizing our visual sprint phases under predictable steps.
          </p>
        </div>

        {/* Process Timeline Wrapper */}
        <div className={styles.timeline}>
          {data.map((step, index) => (
            <div key={index} className={styles.step}>
              {/* Graphic Connector line */}
              <div className={styles.markerColumn}>
                <div className={styles.markerCircle} />
                {index < data.length - 1 && <div className={styles.markerLine} />}
              </div>

              {/* Text Card */}
              <div className={styles.card}>
                <span className={styles.phase}>{step.phase}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
