'use client';

import { ArrowUpRight } from 'lucide-react';
import ProjectMarquee, { type ProjectCard } from '@/components/ui/ProjectMarquee';
import styles from './BrandingProjects.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

import { brandingProjects as projects } from '@/data/work';

export default function BrandingProjects() {
  return (
    <section className={styles.section}>

      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Badge>Our Work</Badge>
          <Heading >Featured Projects</Heading>
          <Paragraph>Transformations Exposed</Paragraph>
        </div>

        {/* <a href="#portfolio" className={styles.portfolioLink}>
          View Our Portfolio
          <ArrowUpRight size={14} />
        </a> */}
      </div>

      {/* Scrolling Marquee */}
      <div className={styles.marqueeWrap}>
        <ProjectMarquee items={projects} speed={38} direction="left" />
      </div>

    </section>
  );
}
