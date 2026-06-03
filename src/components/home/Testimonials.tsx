'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  stars: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Billy Kavanagh',
    role: 'Operations Associate',
    company: 'Healf',
    avatar: '/avatar/avatar-rohan.png',
    stars: 5,
    quote: 'Amazing App. Gives a great visual on current and future inventory. We decreased stockout from 4% to 1% in 2 months with Prediko. That’s hundreds of thousands of extra revenue per year unlocked! Team are super supportive to any requests too! Would highly recommend!'
  },
  {
    id: 2,
    name: 'Alix Beckstrand',
    role: 'Ops manager',
    company: 'Kate Hewko',
    avatar: '/avatar/avatar-sneha-gupta.png',
    stars: 5,
    quote: 'The software and customer service are amazing! Prediko’s advanced analytics and reporting tools empowered us at Kate Hewko to predict demand patterns accurately, optimizing stock replenishment and reducing stockouts.'
  },
  {
    id: 3,
    name: 'Rayan Mroue',
    role: 'Founder and CEO',
    company: 'Cloudsharks',
    avatar: '/avatar/avatar-arjun-singhania.png',
    stars: 5,
    quote: 'Prediko helps me forecast my sales accurately and tells me how much I should order. Plus as a whole it’s much more robust than my previous software (Cogsy), which is something I needed for a business as SKU heavy as mine.'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Finflow',
    avatar: '/avatar/avatar-priya-sharma.png',
    stars: 5,
    quote: 'Ganesyx didn’t just redesign our platform; they completely re-engineered how our users interact with financial services. Their deep understanding of behavioral patterns helped us cut our onboarding drop-off by half.'
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handlePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector(`.${styles.cardWrapper}`)?.clientWidth || 400;
      const gap = 24;
      sliderRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector(`.${styles.cardWrapper}`)?.clientWidth || 400;
      const gap = 24;
      sliderRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className={`${styles.testimonials} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <Badge className='mb-4'>Testimonial</Badge>
          <Heading className='mb-2'>What Our Clients Say About Ganesyx</Heading>
          <Paragraph>
            Trusted by businesses to deliver impactful digital marketing strategies, measurable growth, and results that make a difference.
          </Paragraph>
        </div>

        {/* Carousel Slider */}
        <div className={styles.sliderContainer}>
          <div ref={sliderRef} className={styles.slider}>
            {testimonialsData.map((item) => (
              <div key={item.id} className={styles.cardWrapper}>
                <div className={styles.cardBorderWrapper}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardHeader}>
                      <div className={styles.avatarContainer}>
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={60}
                          height={60}
                          className={styles.avatar}
                        />
                      </div>
                      <div className={styles.authorMeta}>
                        <h4 className={styles.authorName}>{item.name}</h4>
                        <p className={styles.authorRole}>
                          {item.role} at <span className={styles.companyNameHighlight}>{item.company}</span>
                        </p>
                        <div className={styles.stars}>
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <span key={i} className={styles.star}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <p className={styles.quoteText}>
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className={styles.navigationControls}>
          <button
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
