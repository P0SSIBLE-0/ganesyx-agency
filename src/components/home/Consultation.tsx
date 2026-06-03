'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Consultation.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

export default function Consultation() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dynamically load Calendly assets
  useEffect(() => {
    // If Calendly is already loaded
    if ((window as any).Calendly) {
      setCalendlyLoaded(true);
      return;
    }

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    const handleLoad = () => {
      setCalendlyLoaded(true);
    };

    script.addEventListener('load', handleLoad);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) {
        script.removeEventListener('load', handleLoad);
        document.head.removeChild(script);
      }
    };
  }, []);

  // Initialize Inline Widget
  useEffect(() => {
    if (calendlyLoaded && containerRef.current) {
      containerRef.current.innerHTML = ''; // Prevent duplicate embeds

      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/ganesyx/consultation',
          parentElement: containerRef.current,
          prefill: {},
          pageSettings: {
            backgroundColor: 'ffffff',
            textColor: '111827',
            primaryColor: '330099',
          },
        });
      }
    }
  }, [calendlyLoaded]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header Title & Subtitle */}
        <div className={styles.headerBlock}>
          <Badge className='mb-4'>CONSULTATION</Badge>
          <Heading className='mb-2'>
            Book your Consultation <br />
            below, we&apos;ll handle the rest.
          </Heading>
          <Paragraph>
            Trusted by businesses to deliver impactful digital marketing strategies, <br />
            measurable growth, and results that make a difference.
          </Paragraph>
        </div>

        {/* Embedded Inline Calendly Widget */}
        <div id='consultation' className={styles.widgetWrapper}>
          {!calendlyLoaded && (
            <div className={styles.loaderOverlay}>
              <div className={styles.spinner} />
              <p className={styles.loaderText}>Loading calendar...</p>
            </div>
          )}
          <div
            ref={containerRef}
            id="calendly-inline-container"
            className={styles.widgetContainer}
          />
        </div>
      </div>
    </section>
  );
}

