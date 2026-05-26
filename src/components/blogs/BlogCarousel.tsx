'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { blogsData, BlogPost } from '@/data/blogs';
import styles from './BlogCarousel.module.css';

interface BlogCarouselProps {
  blogs?: BlogPost[];
  title?: string;
  subtitle?: string;
}

export default function BlogCarousel({
  blogs = blogsData,
  title = "STAY AHEAD OF WHAT’S NEXT",
  subtitle = "RESOURCES"
}: BlogCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      // 2px threshold to avoid sub-pixel layout rounding issues
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollLimits();
      container.addEventListener('scroll', checkScrollLimits);
      window.addEventListener('resize', checkScrollLimits);
      
      // Secondary check after layout renders
      const timer = setTimeout(checkScrollLimits, 150);

      return () => {
        container.removeEventListener('scroll', checkScrollLimits);
        window.removeEventListener('resize', checkScrollLimits);
        clearTimeout(timer);
      };
    }
  }, [blogs]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <header className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.subtitle}>
              {subtitle} ({blogs.length})
            </span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          
          {/* Slider Controls */}
          <div className={styles.controls}>
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`${styles.arrowBtn} ${!canScrollLeft ? styles.disabledBtn : ''}`}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`${styles.arrowBtn} ${!canScrollRight ? styles.disabledBtn : ''}`}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </header>

        {/* Carousel Tracks */}
        <div ref={containerRef} className={styles.track}>
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                <div className={styles.cardFooter}>
                  {blog.tags && blog.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
