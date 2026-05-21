'use client';

import { useEffect, useState } from 'react';
import { ServiceHero as HeroType } from '@/data/types';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
  data: HeroType;
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
      {/* Light Ambient Canvas */}
      <div className={styles.ambientCanvas}>
        <div className={styles.radialGlow1} />
        <div className={styles.radialGlow2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Text Column */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={13} className={styles.badgeIcon} />
              <span>{data.preHeading}</span>
            </div>
            
            <h1 className={styles.mainTitle}>
              {data.title.split(data.highlightedText)[0]}
              <span className={styles.highlightText}>
                {data.highlightedText}
                <span className={styles.titleUnderline} />
              </span>
              {data.title.split(data.highlightedText)[1]}
            </h1>
            
            <p className={styles.description}>{data.description}</p>
            
            <div className={styles.actions}>
              <a href={data.primaryCta.href} className={styles.primaryBtn}>
                <span>{data.primaryCta.text}</span>
                <div className={styles.btnArrow}>
                  <ArrowRight size={15} />
                </div>
              </a>
              <a href={data.secondaryCta.href} className={styles.secondaryBtn}>
                <span>{data.secondaryCta.text}</span>
                <span className={styles.btnHoverLine} />
              </a>
            </div>
          </div>

          {/* Premium Visual Collage (Replaces vector artboard) */}
          <div className={styles.visualWrapper}>
            <div className={styles.collageContainer}>
              {/* Back Card (Brand guidelines packaging) */}
              <div className={`${styles.collageCard} ${styles.cardBack}`}>
                <div 
                  className={styles.cardImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=80')" }} 
                />
                <div className={styles.cardCaption}>GRID ARCHITECTURE</div>
              </div>

              {/* Middle Card (Stationery & Business cards) */}
              <div className={`${styles.collageCard} ${styles.cardMiddle}`}>
                <div 
                  className={styles.cardImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561070791-26c113006238?w=500&auto=format&fit=crop&q=80')" }} 
                />
                <div className={styles.cardCaption}>IDENTITY SYSTEM</div>
              </div>

              {/* Front Card (Brand guide book on desk) */}
              <div className={`${styles.collageCard} ${styles.cardFront}`}>
                <div 
                  className={styles.cardImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=80')" }} 
                />
                <div className={styles.cardCaption}>VISUAL GUIDELINES</div>
              </div>

              {/* Decorative HUD Floating Tag */}
              <div className={styles.hudBadge}>
                <span className={styles.hudDot} />
                <span className={styles.hudText}>CURATED DESIGN DIRECTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
