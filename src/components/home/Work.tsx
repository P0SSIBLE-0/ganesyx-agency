'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectMarquee, { type ProjectCard } from '@/components/ui/ProjectMarquee';
import styles from './Work.module.css';
import { Badge, Heading, Paragraph } from '@/components/ui/Typography';

const projectsList: ProjectCard[] = [
  {
    id: 'nutribray',
    name: 'Nutribray E-Commerce',
    image: '/images/braymil.webp',
    tags: ['E-Commerce', 'Brand Design', 'Shopify Development', 'Web Design'],
  },
  {
    id: 'invent-elevator',
    name: 'Invent Elevator',
    image: '/images/invent-website.webp',
    tags: ['Next.js', 'React', 'TailwindCSS', 'B2B Sales Operations'],
  },
  {
    id: 'gkpro-academy',
    name: 'GKPro Academy',
    image: '/images/gk-pro.webp',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Admin Automation'],
  },
  {
    id: 'sifars',
    name: 'Sifars Brand Identity',
    image: '/images/sifars_1.png',
    tags: ['Brand Identity', 'UI/UX Design', 'Visual Strategy'],
  },
  {
    id: 'kanishk-oil',
    name: 'Kanishk Oil Packaging',
    image: '/images/kanishk_oil.png',
    tags: ['Branding', 'Packaging Design', 'Social Media Strategy'],
  },
  {
    id: 'reggal',
    name: 'Reggal Branding',
    image: '/images/reggal.png',
    tags: ['Branding', 'Brand Communication', 'Identity Design'],
  },
];

export default function Work() {
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
      id="work"
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Our Work badge pill */}
        <Badge>Our Work</Badge>

        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Heading>Featured Works</Heading>
            <Paragraph>Explore how Ganesyx helped brands increase visibility, drive engagement, and elevate market presence.</Paragraph>
          </div>

          {/* <a href="#portfolio" className={styles.viewAll}>
            View All Projects
          </a> */}
        </div>
      </div>

      {/* Marquee wrap */}
      <div className={styles.marqueeWrap}>
        <ProjectMarquee items={projectsList} speed={35} direction="left" />
      </div>
    </section>
  );
}
