'use client';

import React from 'react';
import { ProcessStep } from '@/data/types';
import styles from './ServiceProcess.module.css';

interface ServiceProcessProps {
  data: ProcessStep[];
  label?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function ServiceProcess({
  data,
  label = 'THE METRICS',
  title,
  description = 'We minimize creative risk by organizing our visual sprint phases under predictable steps.',
}: ServiceProcessProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.title}>
            {title || (
              <>
                A structured path <span className={styles.serifTitle}>to distinct execution.</span>
              </>
            )}
          </h2>
          {description && <p className={styles.desc}>{description}</p>}
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
