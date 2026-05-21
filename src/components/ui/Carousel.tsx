'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  showArrows?: boolean;
  showProgress?: boolean;
  className?: string;
  trackClassName?: string;
}

export default function Carousel({
  children,
  showArrows = true,
  showProgress = true,
  className = '',
  trackClassName = '',
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Use a small tolerance of 5px to avoid subpixel rounding issues
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Scroll by 70% of the visible container width to move to the next set of items
    const scrollAmount = container.clientWidth * 0.7;
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScroll();
    
    // Add scroll and resize listeners
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    // Initial delay check in case assets are still rendering
    const timer = setTimeout(checkScroll, 200);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [children]);

  return (
    <div className={`${styles.carouselWrapper} ${className}`}>
      {/* Scrollable Container */}
      <div ref={scrollRef} className={`${styles.scrollContainer} ${trackClassName}`}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.slideItem}>
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => handleScroll('left')}
            className={`${styles.navButton} ${styles.prevButton} ${!canScrollLeft ? styles.disabled : ''}`}
            disabled={!canScrollLeft}
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className={`${styles.navButton} ${styles.nextButton} ${!canScrollRight ? styles.disabled : ''}`}
            disabled={!canScrollRight}
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </>
      )}

      {/* Scroll Progress Bar at the Bottom */}
      {showProgress && (
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </div>
  );
}
