'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Badge, Heading, Paragraph } from '@/components/ui/Typography';
import styles from './WebDevTestimonials.module.css';

interface Testimonial {
  id: number;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
  quote: string;
  type: 'white' | 'black' | 'blue';
  gridClass: string;
  logo?: React.ReactNode;
}

const ElasticLogo = () => (
  <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M18 14c0 3.31-2.69 6-6 6S6 17.31 6 14s2.69-6 6-6 6 2.69 6 6z" opacity="0.6" />
      <path d="M22 14c0 5.52-4.48 10-10 10S2 19.52 2 14 6.48 4 12 4s10 4.48 10 10z" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="14" r="2" />
    </g>
    <text x="30" y="19" fontFamily="var(--font-heading), sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">elastic</text>
  </svg>
);

const StatamicLogo = () => (
  <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="22" height="22" rx="5" fill="#ffffff" fillOpacity="0.2" />
    <path d="M9.5 9.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-1v1h1c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5h-3C10.2 19 9.5 18.3 9.5 17.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <text x="32" y="19" fontFamily="var(--font-heading), sans-serif" fontSize="14" fontWeight="700" fill="#ffffff" letterSpacing="-0.02em">statamic</text>
  </svg>
);

export default function WebDevTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      authorName: 'Arjun Singhania',
      authorTitle: 'Search & GenAI Specialist, Elastic',
      avatarUrl: '/avatar/avatar-arjun-singhania.png',
      quote: '“Ganesyx Next.js architecture makes it easy to demo projects to clients. We can deploy a fresh app in seconds. You only pay for what you use, letting you focus on business value instead of infrastructure.”',
      type: 'black',
      gridClass: styles.col1_row1_2,
      logo: <ElasticLogo />
    },
    {
      id: 2,
      authorName: 'Priya Sharma',
      authorTitle: 'Full Stack Developer, Rugged Software',
      avatarUrl: '/avatar/avatar-priya-sharma.png',
      quote: '“Ganesyx Next-Gen Web-Dev exceeded all of my expectations and was so easy to use!”',
      type: 'white',
      gridClass: styles.col2_row1
    },
    {
      id: 3,
      authorName: 'Ishita Verma',
      authorTitle: 'CTO, Devsquad',
      avatarUrl: '/avatar/avatar-ishita-verma.png',
      quote: '“Ganesyx is the next generation platform for powering modern enterprise applications. This is the future of serverless infra for Next.js developers.”',
      type: 'white',
      gridClass: styles.col3_row1
    },
    {
      id: 4,
      authorName: 'Sneha Gupta',
      authorTitle: 'Software Engineer, Snap',
      avatarUrl: '/avatar/avatar-sneha-gupta.png',
      quote: '“Onboarding was smooth. UI is absolute eye candy. Tinkering with scaling, replicas and resources is seamless.”',
      type: 'white',
      gridClass: styles.col2_row2
    },
    {
      id: 5,
      authorName: 'Rohan',
      authorTitle: 'CEO & Founder, Innoge',
      avatarUrl: '/avatar/avatar-rohan.png',
      quote: '“The first deployment is as easy as possible: connect your git, and boom, your page is online and lightning fast.”',
      type: 'white',
      gridClass: styles.col2_row3
    },
    {
      id: 6,
      authorName: 'Ananya Kapoor',
      authorTitle: 'Developer & Consultant',
      avatarUrl: '/avatar/avatar-ananya-kapoor.png',
      quote: '“Wow, Ganesyx Next-Gen Web-Dev is very smooth! Took almost no time to deploy a Filament-like dashboard app with database and custom domain.”',
      type: 'white',
      gridClass: styles.col1_row3
    },
    {
      id: 7,
      authorName: 'Vikram Malhotra',
      authorTitle: 'Software Developer, Statamic',
      avatarUrl: '/avatar/avatar-vikram-malhotra.png',
      quote: '“Selected my repo, hit deploy, and boom. 60 seconds later my site was ready! I didn’t even have to configure anything.”',
      type: 'blue',
      gridClass: styles.col3_row2_3,
      logo: <StatamicLogo />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <Badge>Testimonials</Badge>
          <Heading>Trusted by developers, startups, and enterprises</Heading>
          <Paragraph>Join thousands of developers and companies around the world</Paragraph>
        </div>

        {/* Bento Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((t) => {
            const cardTypeClass =
              t.type === 'black'
                ? styles.cardBlack
                : t.type === 'blue'
                  ? styles.cardBlue
                  : styles.cardWhite;

            return (
              <motion.div
                key={t.id}
                className={`${styles.card} ${cardTypeClass} ${t.gridClass}`}
                variants={cardVariants}
              >
                {/* Brand Logo if present */}
                {t.logo && <div className={styles.logo}>{t.logo}</div>}

                {/* Testimonial Quote */}
                <p className={styles.quote}>{t.quote}</p>

                {/* Card Footer: Author and Avatar */}
                <div className={styles.cardFooter}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{t.authorName}</span>
                    <span className={styles.authorTitle}>{t.authorTitle}</span>
                  </div>
                  <img
                    src={t.avatarUrl}
                    className={styles.avatarImage}
                    alt={`${t.authorName} client profile picture avatar`}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
