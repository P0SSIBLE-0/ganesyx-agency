'use client';

import React from 'react';
import styles from './Pricing.module.css';

interface PricingPlan {
  badge: string;
  title: string;
  price: string;
  isHighlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    badge: 'Testimonial',
    title: 'Launch Brand Kit',
    price: '6000',
  },
  {
    badge: 'Testimonial',
    title: 'Launch Brand Kit',
    price: '9000',
  },
  {
    badge: 'Testimonial',
    title: 'Launch Brand Kit',
    price: '6400',
    isHighlighted: true,
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        {/* Centered Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Flexible Plans For Growing Brands</h2>
          <p className={styles.subtitle}>
            From startups to established businesses, our customized digital solutions are designed to
            drive growth, engagement, and measurable results.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.isHighlighted ? styles.highlightedCard : ''}`}
            >
              {/* Badge Pill */}
              <div className={styles.badgePill}>{plan.badge}</div>

              {/* Card Header */}
              <h3 className={styles.planTitle}>{plan.title}</h3>

              {/* Price Block */}
              <div className={styles.priceContainer}>
                <div className={styles.priceValue}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.interval}>/ Kit</span>
                </div>

                {/* Card 3 Custom circular badge graphic */}
                {plan.isHighlighted && (
                  <div className={styles.decorativeBadge}>
                    <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="45" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" strokeDasharray="5 5" fill="none" />
                      <circle cx="50" cy="50" r="38" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" fill="none" />
                      {/* Colon (two vertical dots on the left) */}
                      <circle cx="38" cy="44" r="3.5" fill="#ffffff" />
                      <circle cx="38" cy="56" r="3.5" fill="#ffffff" />
                      {/* Star (on the right) */}
                      <path d="M64 39 L66.5 45.5 L73.5 46 L68.5 50.5 L70 57 L64 53.5 L58 57 L59.5 50.5 L54.5 46 L61.5 45.5 Z" fill="#ffffff" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Features List Section 1 */}
              <div className={styles.featureSection}>
                <h4 className={styles.featureHeader}>Brand Basics (Design Only)</h4>
                <ul className={styles.featureList}>
                  <li className={`${styles.featureItem} ${styles.boldText}`}>
                    <span className={styles.check}>✓</span> Logo + Variations + Color Palette
                  </li>
                </ul>
              </div>

              {/* Features List Section 2 */}
              <div className={styles.featureSection}>
                <h4 className={styles.featureHeader}>Brand Basics (Design Only)</h4>
                <ul className={styles.featureList}>
                  <li className={`${styles.featureItem} ${styles.boldText}`}>
                    <span className={styles.check}>✓</span> Catalogue Design (7 pages)
                  </li>
                  <li className={`${styles.featureItem} ${styles.boldText}`}>
                    <span className={styles.check}>✓</span> Brochure Design (2 pages)
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> 1 Visiting Card design
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> Letterhead + Envelope Designs
                  </li>
                </ul>
              </div>

              {/* Features List Section 3 */}
              <div className={styles.featureSection}>
                <h4 className={styles.featureHeader}>Launch is perfect if you:</h4>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> Catalogue Design (7 pages)
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> Brochure Design (2 pages)
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> 1 Visiting Card design
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.check}>✓</span> Letterhead + Envelope Designs
                  </li>
                </ul>
              </div>

              {/* Divider Line */}
              <div className={styles.divider} />

              {/* Delivery Time Info */}
              <div className={styles.deliveryInfo}>
                Delivery Time: 2 – 3 Weeks*
              </div>

              {/* Call to Action Button */}
              <button className={styles.ctaButton}>
                Book a consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
