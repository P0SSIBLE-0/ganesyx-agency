'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'SEO & Content Marketing',
    description: 'Dominate search rankings with strategic SEO and compelling content that converts visitors into customers.',
    bgImage: '/images/seo_marketing.png',
    href: '/seo',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Paid Ads (Google & Meta)',
    description: 'Maximize ROI with data-driven ad campaigns on Google, Facebook, and Instagram that deliver results.',
    bgImage: '/images/ads.png',
    href: '/ads',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive brand awareness across all major social platforms.',
    bgImage: '/images/social_media.png',
    href: '/social',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Design & Development',
    description: 'Create stunning, high-converting websites that provide exceptional user experiences.',
    bgImage: 'https://images.unsplash.com/photo-1642142785744-261a5f663d12?q=80&w=1170&auto=format&fit=crop',
    href: '/design',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 5 5" />
        <path d="m11 11 .01-.01" />
      </svg>
    ),
    title: 'Branding & Creative',
    description: 'Craft memorable brand identities and creative assets that make you stand out from the competition.',
    bgImage: '/images/brand_creative.png',
    href: '/branding',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Video Production',
    description: 'Scroll-stopping reels, brand films, and ad creatives that capture attention and drive action across every platform.',
    bgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1170&auto=format&fit=crop',
    href: '/video',
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      {/* Background soft glowing orb */}
      <div className={styles.glowingOrb} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Our Services</div>
          <h2 className={styles.heading}>
            Everything You Need to <br />
            <span className={styles.highlight}>Dominate</span>
          </h2>
          <p className={styles.subHeading}>
            Full-spectrum digital marketing services designed to accelerate your growth
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ '--index': index } as React.CSSProperties}
            >
              {/* Default Content (Visible normally, fades out on hover) */}
              <div className={styles.defaultContent}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <Link href={service.href} className={styles.cardLink}>
                  Learn More <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>

              {/* Hover Content (Fades in + scales on hover) */}
              <div className={styles.hoverContent}>
                <div
                  className={styles.bgImage}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                <div className={styles.bgOverlay} />
                <Link href={service.href} className={styles.learnMoreBtn}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

