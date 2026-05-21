'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  impact: string;
  metricLabel: string;
  service: string;
  logo: React.ReactNode;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Finflow',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
    quote: "Ganesyx didn't just redesign our platform; they completely re-engineered how our users interact with financial services. Their deep understanding of behavioral patterns helped us cut our onboarding drop-off by half. They operate as an extension of our team, obsessed with real user outcomes.",
    impact: '+140%',
    metricLabel: 'Onboarding conversion rate',
    service: 'Product Design & UX',
    logo: (
      <svg className={styles.companyLogoSvg} viewBox="0 0 120 30" fill="currentColor">
        <path d="M10 5 C 20 5, 25 15, 35 15 C 45 15, 50 5, 60 5 L 60 10 C 50 10, 45 20, 35 20 C 25 20, 20 10, 10 10 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="70" y="20" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.5">FINFLOW</text>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'HyperScale',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80',
    quote: "Most agencies deliver clean layouts; Ganesyx delivers compounded growth. They took our complex, enterprise-facing SaaS and distilled it into a narrative so compelling that our demo requests doubled in weeks. Their frontend performance optimizations are exceptional.",
    impact: '2.4x',
    metricLabel: 'Increase in demo conversions',
    service: 'Brand Strategy & Dev',
    logo: (
      <svg className={styles.companyLogoSvg} viewBox="0 0 130 30" fill="currentColor">
        <path d="M5 25 L 20 5 L 30 17 L 45 5 L 50 25 L 38 25 L 34 14 L 25 25 Z" />
        <text x="58" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.8">HYPER</text>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Head of Growth',
    company: 'Zenith',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80',
    quote: "Their integration of strategy and engineering is incredibly rare. They didn't wait for rigid product specifications—they proactively audited our funnel, spotted bottlenecks, and shipped elegant functional code. We've scaled our active users without a single major bug.",
    impact: '4.8x',
    metricLabel: 'Monthly active user growth',
    service: 'Growth Marketing & Eng',
    logo: (
      <svg className={styles.companyLogoSvg} viewBox="0 0 120 30" fill="currentColor">
        <polygon points="20,5 35,25 5,25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="20,12 28,22 12,22" />
        <text x="45" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="1">ZENITH</text>
      </svg>
    )
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'PulseAI',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80',
    quote: "We had a highly complex dashboard suffering from severe latency and Web3 rendering issues. Ganesyx stepped in, refactored our state architecture, and delivered a beautifully smooth experience. Load times dropped 60%, raising our NPS scores instantly.",
    impact: '-60%',
    metricLabel: 'Reduction in dashboard latency',
    service: 'Web3 & App Engineering',
    logo: (
      <svg className={styles.companyLogoSvg} viewBox="0 0 120 30" fill="currentColor">
        <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M9 15 L 12 15 L 14 9 L 16 21 L 18 13 L 21 15 L 23 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="35" y="20" fontFamily="sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.8">PULSE.AI</text>
      </svg>
    )
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleTestimonialChange = useCallback((index: number) => {
    if (index === activeIndex || isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsChanging(false);
    }, 350);
  }, [activeIndex, isChanging]);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonialsData.length;
    handleTestimonialChange(nextIndex);
  }, [activeIndex, handleTestimonialChange]);

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + testimonialsData.length) % testimonialsData.length;
    handleTestimonialChange(prevIndex);
  }, [activeIndex, handleTestimonialChange]);

  // Auto-scroll logic with visibility check and hover pause
  useEffect(() => {
    if (!isVisible || isHovered) return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonialsData.length;
      handleTestimonialChange(nextIndex);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(timer);
  }, [activeIndex, isVisible, isHovered, handleTestimonialChange]);

  // Cursor spotlight tracking logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section ref={sectionRef} id="testimonials" className={`${styles.testimonials} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgePulse}></span>
            Client Proof
          </div>
          <h2 className={styles.heading}>
            Stories of Growth, <br />
            Told by Our Partners
          </h2>
          <p className={styles.subheading}>
            We build lasting partnerships. Here is how we helped visionary brands scale, optimize, and dominate their categories.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div
          className={styles.dashboard}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Left Column: Quantitative Impact Widget */}
          <div className={styles.impactCol}>
            <div className={styles.metricCard}>
              <div className={styles.metricGlow} />

              <span className={styles.metricCategory}>Key Achievement</span>

              <div className={`${styles.metricValueWrapper} ${isChanging ? styles.fadeOut : ''}`}>
                <span className={styles.metricValue}>{current.impact}</span>
              </div>

              <div className={`${styles.metricLabelWrapper} ${isChanging ? styles.fadeOut : ''}`}>
                <p className={styles.metricLabel}>{current.metricLabel}</p>
                <div className={styles.tag}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.tagIcon}>
                    <path d="M9.5 2.5L2.5 9.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {current.service}
                </div>
              </div>

              {/* Mini Pagination Indicators */}
              <div className={styles.indicatorRow}>
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleTestimonialChange(idx)}
                    className={`${styles.indicatorDot} ${activeIndex === idx ? styles.indicatorActive : ''}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Aesthetic Ambient Elements */}
            <div className={styles.ambientQuote}>
              &ldquo;
            </div>
          </div>

          {/* Right Column: Hero Spotlight Testimonial Card */}
          <div className={styles.contentCol}>
            <div
              ref={cardRef}
              className={styles.testimonialCard}
              onMouseMove={handleMouseMove}
            >
              {/* Vercel-style hover light beam is rendered via CSS using these properties */}
              <div className={styles.cardGlowOverlay} />

              <div className={styles.cardHeader}>
                <div className={`${styles.companyLogo} ${isChanging ? styles.fadeOut : ''}`}>
                  {current.logo}
                </div>
                <div className={styles.verifiedBadge}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" fill="var(--brand)" />
                    <path d="M4.5 7L6 8.5L9.5 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified Outcome
                </div>
              </div>

              {/* Testimonial Quote Text with Crossfade */}
              <div className={`${styles.cardBody} ${isChanging ? styles.fadeOut : ''}`}>
                <p className={styles.quoteText}>
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Author & Navigator Footer */}
              <div className={styles.cardFooter}>

                {/* Author Info */}
                <div className={`${styles.authorWrapper} ${isChanging ? styles.fadeOut : ''}`}>
                  <div className={styles.avatarContainer}>
                    <div className={styles.avatarRing} />
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      width={52}
                      height={52}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.authorMeta}>
                    <h4 className={styles.authorName}>{current.name}</h4>
                    <p className={styles.authorRole}>{current.role} at <span className={styles.companyNameHighlight}>{current.company}</span></p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className={styles.navigationControls}>
                  <button
                    onClick={handlePrev}
                    className={styles.navButton}
                    aria-label="Previous Testimonial"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className={styles.navButton}
                    aria-label="Next Testimonial"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>

            </div>

            {/* Mini Avatar Switcher below the main card */}
            <div className={styles.avatarSwitcherContainer}>
              <p className={styles.switcherLabel}>Meet our partners:</p>
              <div className={styles.avatarSwitcherGrid}>
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleTestimonialChange(idx)}
                    className={`${styles.switcherAvatarBtn} ${activeIndex === idx ? styles.switcherActive : ''}`}
                    style={{ '--btn-delay': `${idx * 0.1}s` } as React.CSSProperties}
                  >
                    <div className={styles.switcherAvatarWrapper}>
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={38}
                        height={38}
                        className={styles.switcherAvatar}
                      />
                    </div>
                    <div className={styles.avatarTooltip}>
                      <strong>{item.name}</strong>
                      <span>{item.role}, {item.company}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
