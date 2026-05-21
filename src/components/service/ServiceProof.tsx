'use client';

import { useState, useRef, useEffect } from 'react';
import { ProofSection } from '@/data/types';
import styles from './ServiceProof.module.css';

interface ServiceProofProps {
  data: ProofSection;
}

export default function ServiceProof({ data }: ServiceProofProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>PROOF & IMPACT</span>
          <h2 className={styles.title}>{data.title}</h2>
        </div>

        <div className={styles.grid}>
          {/* Slider Container */}
          <div className={styles.sliderOuter}>
            <div 
              ref={containerRef}
              className={styles.sliderContainer}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* BEFORE IMAGE (Grayscale Wireframes) */}
              <div 
                className={styles.beforeSlide}
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80&sat=-100')` }}
              >
                <div className={styles.slideLabelBefore}>BEFORE</div>
                <div className={styles.cardOverlay}>
                  <h4 className={styles.slideCardTitle}>Unfocused Experience</h4>
                  <p className={styles.slideCardText}>{data.before}</p>
                </div>
              </div>

              {/* AFTER IMAGE (Vibrant Premium Brand Art) */}
              <div 
                className={styles.afterSlide}
                style={{ 
                  clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                  backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80')`
                }}
              >
                <div className={styles.slideLabelAfter}>AFTER</div>
                <div className={styles.cardOverlayAfter} style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                  <div className={styles.afterContentWrapper}>
                    <h4 className={styles.slideCardTitleAfter}>Premium Visual Platform</h4>
                    <p className={styles.slideCardTextAfter}>{data.after}</p>
                  </div>
                </div>
              </div>

              {/* DRAGGER BAR */}
              <div 
                className={styles.handle}
                style={{ left: `${sliderPos}%` }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className={styles.handleLine} />
                <div className={styles.handleButton}>
                  <span className={styles.handleArrow}>‹</span>
                  <span className={styles.handleArrow}>›</span>
                </div>
              </div>
            </div>
            
            <p className={styles.sliderCaption}>
              Drag the horizontal handle to view the visual difference.
            </p>
          </div>

          {/* Testimonial Panel */}
          <div className={styles.testimonialWrapper}>
            <div className={styles.quoteCard}>
              <span className={styles.quoteSign}>“</span>
              <p className={styles.quoteText}>{data.testimonial.quote}</p>
              
              <div className={styles.divider} />
              
              <div className={styles.authorBlock}>
                <div className={styles.avatar}>
                  {/* Styled avatar fallback with author initials */}
                  <span>{data.testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.name}>{data.testimonial.author}</span>
                  <span className={styles.role}>{data.testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
