'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServicesShowcase.module.css';

interface Service {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  urlBar: string;
}

const servicesList: Service[] = [
  {
    id: 'seo',
    title: 'SEO',
    desc: 'Increase organic search traffic with technical optimizations, in-depth keyword analysis, and authority-building content that ranks.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'google.com/search?q=best+growth+agency'
  },
  {
    id: 'geo',
    title: 'GEO',
    desc: 'Optimize your brand content to be cited and recommended by AI engines like ChatGPT, Perplexity, and Gemini.',
    imageUrl: 'https://images.unsplash.com/photo-1677691824304-279660ceece3?q=80&w=1074&auto=format&fit=crop',
    urlBar: 'ai-engine.chat/search'
  },
  {
    id: 'social',
    title: 'Social Media',
    desc: 'Engage your audience with native social campaigns, signature design systems, and consistent visual storytelling across feeds.',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'instagram.com/ganesyx'
  },
  {
    id: 'paid',
    title: 'Paid Ads',
    desc: 'Scale customer acquisition instantly with high-intent Search Ads, retargeting campaigns, and high-ROAS paid media funnels.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'ads.manager/dashboard'
  },
  {
    id: 'content',
    title: 'Content Marketing',
    desc: 'Build authority and customer trust through thought leadership articles, research papers, and case studies that convert.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'medium.com/ganesyx-thoughts'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    desc: 'Nurture incoming leads, build automated customer flows, and deliver high-converting campaigns to maximize retention and lifetime value.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'klaviyo.com/campaigns'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    desc: 'Unify your data streams to track exact customer journeys, multi-touch attribution, and pipeline revenue.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    urlBar: 'ganesyx.com/analytics'
  }
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>SERVICES</span>
          <h2 className={styles.heading}>
            Growth services <br />
            that we provide
          </h2>
          <p className={styles.description}>
            Explore our range of growth services designed to go beyond vanity metrics. We specialize in building unified systems that align with your brand's vision and revenue goals.
          </p>
        </div>

        {/* Layout: Services Cards and Mockups Showcase */}
        <div className={styles.contentLayout}>

          {/* Left Column: Interactive Cards Grid */}
          <div className={styles.servicesGrid}>
            {servicesList.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${isActive ? styles.activeCard : ''} ${index === 6 ? styles.spanFull : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Container */}
          <div className={styles.showcaseColumn}>
            <div className={styles.stickyShowcase}>
              <div className={styles.mockupWindow}>
                {/* Browser bar stays static */}
                <div className={styles.mockupHeader}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <div className={styles.mockupUrl}>{servicesList[activeIndex].urlBar}</div>
                </div>

                {/* Image transitions seamlessly inside viewport */}
                <div className={styles.imageViewport}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={servicesList[activeIndex].id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.imageWrapper}
                    >
                      <img
                        src={servicesList[activeIndex].imageUrl}
                        alt={servicesList[activeIndex].title}
                        className={styles.showcaseImage}
                        loading="eager"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
