'use client';

import { ArrowUpRight } from 'lucide-react';
import ProjectMarquee, { type ProjectCard } from '@/components/ui/ProjectMarquee';
import styles from './BrandingProjects.module.css';
import { Heading } from '../ui/Typography';

const projects: ProjectCard[] = [
  {
    id: 'manup',
    name: 'ManUp',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=800&fit=crop',
    tags: ['Brand Strategy', 'Packaging Design'],
    bgColor: '#e8c84a',
    wide: true,
  },
  {
    id: 'burp',
    name: 'Burp',
    image: 'https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?w=500&h=700&fit=crop',
    tagline: 'LET THE SODA\nSAY IT ALL.',
    tags: ['Brand Design', 'Brand Strategy', 'Brand Identity', 'Packaging Design'],
    bgColor: '#1a3bcc',
  },
  {
    id: 'unisquad',
    name: 'Unisquad',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=700&fit=crop&crop=center',
    tags: ['Branding', 'Brand Communication', 'Brand Identity', 'Packaging Designing'],
  },
  {
    id: 'lyteplus',
    name: 'Lyteplus',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=700&fit=crop',
    tags: ['Logo Design', 'Brand Strategy', 'Packaging Design', 'Visual Identity'],
  },
  {
    id: 'liferise',
    name: 'LifeRise',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=700&fit=crop',
    tags: ['Brand Strategy', 'Brand Identity', 'Packaging Design', 'Doctor-led'],
    bgColor: '#1a4a1a',
  },
  {
    id: 'novaform',
    name: 'Novaform',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=700&fit=crop',
    tagline: 'TIME BUILT\nPERFECTLY.',
    tags: ['Brand Identity', 'Visual Design', 'Art Direction'],
    bgColor: '#111111',
  },
];

export default function BrandingProjects() {
  return (
    <section className={styles.section}>

      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Heading className={styles.sectionTitle}>Featured Projects</Heading>
          <p className={styles.sectionSubtitle}>Transformations Exposed</p>
        </div>

        <a href="#portfolio" className={styles.portfolioLink}>
          View Our Portfolio
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Scrolling Marquee */}
      <div className={styles.marqueeWrap}>
        <ProjectMarquee items={projects} speed={38} direction="left" />
      </div>

    </section>
  );
}
