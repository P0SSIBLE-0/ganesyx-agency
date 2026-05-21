'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectMarquee, { type ProjectCard } from '@/components/ui/ProjectMarquee';
import styles from './Work.module.css';

const projectsList: ProjectCard[] = [
  {
    id: 'metro-banners',
    name: 'Invent Elevator',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Brand Identity', 'Brand Design', 'Brand strategy'],
  },
  {
    id: 'elevator-construction',
    name: 'Invent Elevator',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Brand Identity', 'Brand Design', 'Brand strategy'],
  },
  {
    id: 'abstract-wing',
    name: 'Invent Elevator',
    image: 'https://images.unsplash.com/photo-1618005198143-e528346d9a59?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Brand Identity', 'Brand Design', 'Brand strategy'],
  },
  {
    id: 'laptop-setup',
    name: 'Invent Elevator',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Brand Identity', 'Brand Design', 'Brand strategy'],
  },
  {
    id: 'designer-office',
    name: 'Invent Elevator',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    tags: ['Branding', 'Brand Identity', 'Brand Design', 'Brand strategy'],
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
        <span className={styles.badge}>Our Work</span>

        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Case Studies</h2>
            <p className={styles.description}>
              Explore how Ganesyx helped brands increase visibility, drive engagement, and elevate market presence.
            </p>
          </div>

          <a href="#portfolio" className={styles.viewAll}>
            View All Projects
          </a>
        </div>
      </div>

      {/* Marquee wrap */}
      <div className={styles.marqueeWrap}>
        <ProjectMarquee items={projectsList} speed={35} direction="left" />
      </div>
    </section>
  );
}
