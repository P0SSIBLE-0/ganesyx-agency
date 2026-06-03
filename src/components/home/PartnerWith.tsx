'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GoogleAds,
  Instagram,
  Shopify,
  Godaddy,
  Hostinger,
  Meta,
  Aws,
  Apple
} from '@/components/ui/TechLogos';
import styles from './PartnerWith.module.css';
import { Badge, Heading } from '../ui/Typography';

export default function PartnerWith() {
  // Array of SVG components for brands
  const partners = [
    { name: 'Google Ads', component: GoogleAds },
    { name: 'Meta', component: Meta },
    { name: 'Instagram', component: Instagram },
    { name: 'Shopify', component: Shopify },
    { name: 'AWS', component: Aws },
    { name: 'Hostinger', component: Hostinger },
    { name: 'GoDaddy', component: Godaddy },
    { name: 'Apple', component: Apple }
  ];

  // Repeat partners array for infinite marquee flow
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className={styles.partnerWith}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>INTEGRATIONS</Badge>
          <Heading className=''>Powering Growth Across Leading Platforms</Heading>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {marqueeItems.map((partner, index) => {
                const LogoComponent = partner.component;
                return (
                  <div key={index} className={styles.logoItem} title={partner.name}>
                    <LogoComponent />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
