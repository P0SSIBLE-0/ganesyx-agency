'use client';

import { useRef, useState } from 'react';
import { FinalCta } from '@/data/types';
import { ArrowUpRight } from 'lucide-react';
import styles from './ServiceCta.module.css';

interface ServiceCtaProps {
  data: FinalCta;
}

export default function ServiceCta({ data }: ServiceCtaProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div 
          ref={cardRef}
          className={styles.card}
          onMouseMove={handleMouseMove}
          style={{ 
            '--glow-x': `${coords.x}px`, 
            '--glow-y': `${coords.y}px` 
          } as React.CSSProperties}
        >
          {/* Glowing cursor highlight layer */}
          <div className={styles.cardGlow} />
          <div className={styles.noiseOverlay} />

          <span className={styles.label}>GET STARTED</span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.desc}>{data.description}</p>
          
          <div className={styles.actions}>
            <a href={data.primaryCta.href} className={styles.primaryBtn}>
              <span>{data.primaryCta.text}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
