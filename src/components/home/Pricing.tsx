'use client';

import React from 'react';
import styles from './Pricing.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

interface FeatureItem {
  text: string;
  isBold?: boolean;
}

interface FeatureGroup {
  header: string;
  items: FeatureItem[];
}

interface PricingPlan {
  badge: string;
  title: string;
  price: string;
  interval: string;
  delivery: string;
  isHighlighted?: boolean;
  featureGroups: FeatureGroup[];
}

const plans: PricingPlan[] = [
  {
    badge: 'Branding',
    title: 'Essential Brand Kit',
    price: '15,000',
    interval: '/ Kit',
    delivery: '1 – 2 Weeks*',
    featureGroups: [
      {
        header: 'Visual Identity',
        items: [
          { text: 'Logo Design (Primary & Alternate)', isBold: true },
          { text: 'Custom Color Palette & System' },
          { text: 'Modern Typography Selection' }
        ]
      },
      {
        header: 'Brand Assets',
        items: [
          { text: 'Business Card & Letterhead', isBold: true },
          { text: 'Social Media Cover Kit' },
          { text: 'Brand Guidelines PDF' }
        ]
      },
      {
        header: 'Perfect if you are:',
        items: [
          { text: 'A startup launching a new product' },
          { text: 'Ready to establish a premium aesthetic' }
        ]
      }
    ]
  },
  {
    badge: 'Web Suite',
    title: 'Next-Gen Web Suite',
    price: '35,000',
    interval: '/ Suite',
    delivery: '3 – 4 Weeks*',
    isHighlighted: true,
    featureGroups: [
      {
        header: 'Design & Code',
        items: [
          { text: 'Custom Next.js & React App', isBold: true },
          { text: 'Responsive Layout (Mobile First)' },
          { text: 'Lightning-Fast Speed (99/100)' }
        ]
      },
      {
        header: 'Lead Funnel & Tech',
        items: [
          { text: 'WhatsApp estimation chatbot', isBold: true },
          { text: 'Advanced Analytics Dashboard' },
          { text: 'SEO Core Optimization' },
          { text: '1-Year Free Domain & Hosting' }
        ]
      },
      {
        header: 'Perfect if you are:',
        items: [
          { text: 'B2B/B2C scaling lead capture' },
          { text: 'Looking for a state-of-the-art web app' }
        ]
      }
    ]
  },
  {
    badge: 'Marketing',
    title: 'Paid Ads Accelerator',
    price: '28,000',
    interval: '/ Month',
    delivery: 'Ongoing / Monthly*',
    featureGroups: [
      {
        header: 'Campaign Funnel',
        items: [
          { text: 'Meta & Google Ads Funnel Setup', isBold: true },
          { text: 'Custom Audience & Targeting' },
          { text: 'Pixel & API Conversion Tracking' }
        ]
      },
      {
        header: 'Creative & Copy',
        items: [
          { text: '4 Scroll-Stopping Video Reels', isBold: true },
          { text: 'High-Converting Copywriting' },
          { text: 'WhatsApp Lead Nurturing Chatbot' },
          { text: 'Weekly Analytics & A/B Testing' }
        ]
      },
      {
        header: 'Perfect if you are:',
        items: [
          { text: 'Struggling with high lead costs' },
          { text: 'Ready to generate immediate sales' }
        ]
      }
    ]
  }
];

interface PricingProps {
  plans?: PricingPlan[];
  currency?: string;
}

export default function Pricing({ plans: customPlans, currency = '₹' }: PricingProps) {
  const displayPlans = customPlans || plans;

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        {/* Centered Header */}
        <div className={styles.header}>
          <Badge >Pricing</Badge>
          <Heading className='mb-2' >Flexible Plans For Growing Brands</Heading>
          <Paragraph>
            From startups to established businesses, our customized digital solutions are designed to
            drive growth, engagement, and measurable results.
          </Paragraph>
        </div>

        {/* Pricing Cards Grid */}
        <div className={styles.grid}>
          {displayPlans.map((plan, index) => (
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
                {plan.price && /^[0-9,.]+$/.test(plan.price) ? (
                  <div className={styles.priceValue}>
                    <span className={styles.currency}>{currency}</span>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.interval}>{plan.interval}</span>
                  </div>
                ) : (
                  <div className={styles.priceValue}>
                    <span className={styles.amount}>{plan.price || "Let's Talk"}</span>
                    <span className={styles.interval}>{plan.interval}</span>
                  </div>
                )}

                {/* Card 2 Custom circular badge graphic */}
                {plan.isHighlighted && (
                  <div className={styles.decorativeBadge}>
                    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              {/* Dynamic Feature Groups */}
              {plan.featureGroups.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.featureSection}>
                  <h4 className={styles.featureHeader}>{group.header}</h4>
                  <ul className={styles.featureList}>
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`${styles.featureItem} ${item.isBold ? styles.boldText : ''}`}
                      >
                        <span className={styles.check}>✓</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Divider Line */}
              <div className={styles.divider} />

              {/* Delivery Time Info */}
              <div className={styles.deliveryInfo}>
                Delivery Time: {plan.delivery}
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
