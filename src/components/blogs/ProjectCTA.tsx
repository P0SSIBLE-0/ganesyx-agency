import React from 'react';
import Link from 'next/link';
import styles from './ProjectCTA.module.css';

export default function ProjectCTA() {
  return (
    <section className={styles.banner}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <h2 className={styles.title}>Let’s build something exceptional together</h2>
        <p className={styles.description}>
          Partner with Ganesyx to scale your digital presence. Speak with our experts today about Web Development, SEO, and Branding solutions.
        </p>

        <Link href="/contact#contact" className={styles.button}>
          <span>Book a Free Consultation</span>
          <span className={styles.circleArrow}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
