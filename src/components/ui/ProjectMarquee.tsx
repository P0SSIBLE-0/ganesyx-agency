'use client';

import React from 'react';
import styles from './ProjectMarquee.module.css';

export interface ProjectCard {
  id: string;
  name: string;
  image: string;
  tagline?: string;    // optional bold overlay text
  tags: string[];
  bgColor?: string;    // fallback background color if no image
  wide?: boolean;      // wider card variant
}

interface ProjectMarqueeProps {
  items: ProjectCard[];
  speed?: number;       // seconds for one full loop (default 40)
  direction?: 'left' | 'right';
}

export default function ProjectMarquee({
  items,
  speed = 40,
  direction = 'left',
}: ProjectMarqueeProps) {
  // Duplicate the list to create a seamless infinite scroll
  const doubled = [...items, ...items];

  const trackClass = [
    styles.marqueeTrack,
    direction === 'right' ? styles.reverse : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={styles.marqueeOuter}
      style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
    >
      <div className={trackClass}>
        {doubled.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className={`${styles.card} ${project.wide ? styles.wide : ''}`}
            style={project.bgColor ? { backgroundColor: project.bgColor } : {}}
          >
            {/* Background image */}
            {project.image && (
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url('${project.image}')` }}
              />
            )}

            {/* Gradient overlay */}
            <div className={styles.cardOverlay} />

            {/* Content layer */}
            <div className={styles.cardBody}>
              {/* Name top-left */}
              <span className={styles.cardName}>{project.name}</span>

              {/* Optional tagline mid */}
              {project.tagline && (
                <span className={styles.cardTagline}>{project.tagline}</span>
              )}

              {/* Tags bottom */}
              <div className={styles.cardTags}>
                {project.tags.map((tag, ti) => (
                  <span key={ti} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
