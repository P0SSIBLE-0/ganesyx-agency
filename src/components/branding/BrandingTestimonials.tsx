'use client';

import { motion } from 'framer-motion';
import { brandingTestimonials } from '@/data/branding';
import styles from './BrandingTestimonials.module.css';

const avatarMap: { [key: string]: string } = {
  'Sarah Jenkins': '/avatar/avatar-ishita-verma.png',
  'Marcus Chen': '/avatar/avatar-arjun-singhania.png',
  'Amara Okafor': '/avatar/avatar-ananya-kapoor.png',
  'David Rossi': '/avatar/avatar-rohan.png',
};

const getAvatar = (name: string, index: number) => {
  const mapped = avatarMap[name];
  if (mapped) return mapped;
  
  const avatars = [
    '/avatar/avatar-ananya-kapoor.png',
    '/avatar/avatar-arjun-singhania.png',
    '/avatar/avatar-ishita-verma.png',
    '/avatar/avatar-priya-sharma.png',
    '/avatar/avatar-rohan.png',
    '/avatar/avatar-sneha-gupta.png',
    '/avatar/avatar-vikram-malhotra.png'
  ];
  return avatars[index % avatars.length];
};

export default function BrandingTestimonials() {
  // Double the list (exactly 2 copies) for mathematically seamless looping at -50% translation
  const row1Items = [
    ...brandingTestimonials,
    ...brandingTestimonials
  ];

  const row2Items = [
    ...brandingTestimonials,
    ...brandingTestimonials
  ].reverse();

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>CLIENT STORIES</span>
          <h2 className={styles.heading}>
            <span className={styles.headingMain}>What Founders</span>
            <span className={styles.headingItalic}> Say About Us</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Wrapper (Full-bleed edge-to-edge layout) */}
      <div className={styles.marqueeContainer}>
        {/* Row 1: Scrolls Left */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {row1Items.map((testimonial, index) => (
              <div key={`r1-${index}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={styles.quoteDecor}>“</span>
                  <p className={styles.quoteText}>{testimonial.quote}</p>
                  <div className={styles.divider} />
                  <div className={styles.author}>
                    <div className={styles.avatarContainer}>
                      <img 
                        src={getAvatar(testimonial.author, index)} 
                        alt={testimonial.author}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.author}</span>
                      <span className={styles.authorRole}>
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className={styles.marqueeRow + ' ' + styles.marqueeRowRight}>
          <div className={styles.marqueeTrackRight}>
            {row2Items.map((testimonial, index) => (
              <div key={`r2-${index}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={styles.quoteDecor}>“</span>
                  <p className={styles.quoteText}>{testimonial.quote}</p>
                  <div className={styles.divider} />
                  <div className={styles.author}>
                    <div className={styles.avatarContainer}>
                      <img 
                        src={getAvatar(testimonial.author, index)} 
                        alt={testimonial.author}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.author}</span>
                      <span className={styles.authorRole}>
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
