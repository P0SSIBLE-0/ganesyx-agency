'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './BrandGrow.module.css';
import { Badge, Heading, SubHeading, Paragraph } from '@/components/ui/Typography';

export interface BrandGrowProps {
  imageUrl?: string;
  title?: React.ReactNode;
  descriptions?: string[];
  ctaText?: string;
  ctaLink?: string;
  floatingImageLeft?: string;
  floatingImageRight?: string;
}

export default function BrandGrow({
  imageUrl = '/grow-brand.jpg',
  title = (
    <>
      Everything We do to <br />
      Grow Your Brand Online
    </>
  ),
  descriptions = [
    "Explore how Ganesyx has helped businesses strengthen their digital presence, increase brand visibility, and build meaningful connections with their audience through innovative and result-driven strategies. We combine creativity, technology, and data-driven marketing solutions to create impactful campaigns that deliver measurable growth and long-term success.",
    "From branding and social media management to website development and performance marketing, our tailored solutions are designed to help businesses stand out in today's competitive digital landscape. We focus on delivering real results that not only increase engagement but also drive conversions and accelerate business growth."
  ],
  ctaText = 'Book a free Consultation',
  ctaLink = '#contact',
  floatingImageLeft = 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&q=80',
  floatingImageRight = 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=687&auto=format&fit=crop'
}: BrandGrowProps) {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left Content Block */}
          <div className={styles.leftContent}>
            <div>
              <Badge>Brand Growth</Badge>
              <Heading>
                {title}
              </Heading>
            </div>

            {descriptions.map((desc, idx) => (
              <Paragraph key={idx}>
                {desc}
              </Paragraph>
            ))}

            <a href={ctaLink} className={styles.ctaBtn}>
              {ctaText}
            </a>
          </div>

          {/* Right Graphics Overlapping Layout */}
          <div className={styles.rightGraphics}>

            {/* 1. Large Central Image Background with modern rounded corners */}
            <div className={styles.mainImageWrapper}>
              <div
                className={styles.mainImage}
                style={{ backgroundImage: `url('${imageUrl}')` }}
              />
            </div>

            {/* 2. Top-Left Feature Card */}
            {floatingImageLeft && (
              <motion.div
                className={styles.floatingCardLeft}
                animate={{
                  y: [0, -22, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={floatingImageLeft}
                  alt="Brand growth showcase"
                  className={styles.cardImage}
                />
              </motion.div>
            )}

            {/* 3. Bottom-Right Feature Card */}
            {floatingImageRight && (
              <motion.div
                className={styles.floatingCardRight}
                animate={{
                  y: [0, 19, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <img
                  src={floatingImageRight}
                  alt="Digital marketing results"
                  className={styles.cardImage}
                />
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}


