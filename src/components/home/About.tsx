'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const features = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Research-driven planning that aligns with your business goals',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Interfaces that balance beauty with function',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Clean, scalable code built for performance',
  },
  {
    number: '04',
    title: 'Growth',
    description: 'Continuous optimization for measurable results',
  },
];

const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '8+', label: 'Years of experience' },
  { value: '40+', label: 'Team members' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={`${styles.about} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.topBar}>
        <span className={styles.label}>About us</span>
        <div className={styles.line} />
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            We build digital products that people actually want to use
          </h2>
        </div>

        <div className={styles.descriptionBlock}>
          <p className={styles.description}>
            We&apos;re a collective of designers, developers, and strategists who believe great digital experiences come from understanding people first. No templates. No shortcuts. Just thoughtful work that moves the needle.
          </p>
        </div>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.imageLarge}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Modern office space"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.imageSmall}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="Team collaboration"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.featuresRow}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={styles.featureItem}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <span className={styles.featureNumber}>{feature.number}</span>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.statsRow}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
