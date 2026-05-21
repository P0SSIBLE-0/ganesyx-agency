'use client';

import { Check } from 'lucide-react';
import { SubHeading } from '@/components/ui/Typography';
import styles from './BrandingPricing.module.css';

interface PricePlan {
  name: string;
  price: string | null;  // null = "Let's talk"
  priceUnit?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
  trialNote?: string;
}

const plans: PricePlan[] = [
  {
    name: 'Brand Foundation',
    price: '$799',
    priceUnit: 'one-time project',
    description:
      'For startups and solo founders establishing their first professional brand identity.',
    features: [
      'Logo design (primary + alternate mark)',
      'Brand color palette (5 colors)',
      'Typography selection & pairing guide',
      'Business card & letterhead design',
      'Brand discovery workshop session',
      'Final asset delivery (SVG, PNG, PDF)',
    ],
    ctaLabel: 'Get started',
    ctaHref: '#contact',
    trialNote: 'Delivered in 2 – 3 weeks',
  },
  {
    name: 'Brand Identity',
    price: '$1,999',
    priceUnit: 'one-time project',
    description:
      'Full visual identity system for growing businesses ready to build serious brand authority.',
    features: [
      'Everything in Brand Foundation',
      'Full brand guidelines document (30+ pages)',
      'Social media identity kit (12 templates)',
      'Brand voice & messaging guide',
      'Packaging design (up to 2 variants)',
      'Custom pattern / texture design',
      'Stationery suite (3 items)',
      'Unlimited revision rounds',
    ],
    ctaLabel: 'Get started',
    ctaHref: '#contact',
    isPopular: true,
    trialNote: 'Delivered in 4 – 6 weeks',
  },
  {
    name: 'Brand System',
    price: null, // Let's talk
    description:
      'Enterprise-scale brand transformation with strategic positioning for complex, multi-channel organizations.',
    features: [
      'Everything in Brand Identity',
      'Brand strategy & market positioning',
      'Full competitor & audience audit',
      'Motion design guidelines',
      'Multi-product sub-brand architecture',
      'Campaign art direction',
      '30-day post-launch support',
    ],
    ctaLabel: 'Get a quote',
    ctaHref: '#contact',
    isEnterprise: true,
  },
];

export default function BrandingPricing() {
  return (
    <section className={styles.section}>

      {/* Section Header */}
      <div className={styles.header}>
        <span className={styles.badge}>Pricing</span>
        <h2 className={styles.heading}>Pricing made simple.</h2>
        <p className={styles.subheading}>
          Ganesyx branding packages are priced per project — no hourly surprises, no hidden fees.
        </p>
      </div>

      {/* 3-Column Pricing Grid */}
      <div className={styles.grid}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={[
              styles.card,
              plan.isPopular ? styles.cardPopular : '',
              plan.isEnterprise ? styles.cardEnterprise : '',
            ].filter(Boolean).join(' ')}
          >
            {/* Popular badge */}
            {plan.isPopular && (
              <span className={styles.popularBadge}>Popular</span>
            )}

            {/* Plan name */}
            <p className={styles.planName}>{plan.name}</p>

            {/* Price */}
            {plan.price !== null ? (
              <div className={styles.priceBlock}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.priceUnit}>{plan.priceUnit}</span>
              </div>
            ) : (
              <p className={styles.priceTalk}>Let&apos;s talk</p>
            )}

            {/* Description */}
            <p className={styles.planDesc}>{plan.description}</p>

            {/* Feature list */}
            <ul className={styles.featureList}>
              {plan.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <Check size={14} className={styles.checkIcon} strokeWidth={2.5} />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA area */}
            <div className={styles.ctaArea}>
              {plan.trialNote && (
                <p className={styles.trialNote}>{plan.trialNote}</p>
              )}
              <a
                href={plan.ctaHref}
                className={[
                  styles.ctaBtn,
                  plan.isPopular
                    ? styles.ctaBtnBrand
                    : plan.isEnterprise
                    ? styles.ctaBtnOutline
                    : styles.ctaBtnDark,
                ].join(' ')}
              >
                {plan.ctaLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
