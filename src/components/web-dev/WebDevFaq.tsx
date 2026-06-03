'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge, Heading, Paragraph } from '@/components/ui/Typography';
import styles from './WebDevFaq.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

function FaqRow({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
      <button
        className={styles.itemHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <motion.div
          className={styles.iconWrapper}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={styles.plusIcon}
          >
            <line x1="10" y1="3" x2="10" y2="17" />
            <line x1="3" y1="10" x2="17" y2="10" />
          </svg>
        </motion.div>
        <span className={styles.question}>{faq.question}</span>
      </button>

      <motion.div
        className={styles.itemBody}
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.42, ease: [0.33, 1, 0.68, 1] },
          opacity: { duration: isOpen ? 0.28 : 0.18, delay: isOpen ? 0.08 : 0 },
        }}
        style={{ overflow: 'hidden' }}
      >
        <div ref={bodyRef} className={styles.answerWrapper}>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function WebDevFaq() {
  const faqData: FaqItem[] = [
    {
      question: 'What is your primary web development stack?',
      answer: 'We specialize in Next.js, React, TypeScript, and TailwindCSS for the frontend, wordpress and shopify for e-commerce websites, coupled with Node.js, Express, Firebase, and Supabase for backend infrastructure. This stack ensures optimum performance, safety, and scalability.'
    },
    {
      question: 'How do you ensure my website is search-engine optimized (SEO) and fast?',
      answer: 'We utilize React Server Components (RSC), static generation, image optimization, and structured metadata schemas. Every project is optimized to hit near 100 scores in Lighthouse performance, accessibility, and SEO metrics.'
    },
    {
      question: 'Do you build custom admin dashboards or integrate CMS platforms?',
      answer: 'Yes. We integrate headless CMS platforms (like Sanity, Prismic, or custom markdown solutions) and build tailored, secure client administrative dashboards for easy content management.'
    },
    {
      question: 'How do you handle website responsiveness and mobile layouts?',
      answer: 'We adopt a mobile-first responsive coding workflow. Every grid, slider, and interactive asset is styled with fluid CSS units (like clamp and viewport dimensions) and tested across standard mobile viewports.'
    },
    {
      question: 'What is your process for website redesigns or performance audits?',
      answer: 'We run a detailed audit of your core web vitals, layout shifts, and bundle payloads. We then refactor codebase structures, optimize assets, and upgrade legacy stacks to Next.js for instant speed boosts.'
    },
    {
      question: 'Do you provide hosting, maintenance, and post-launch support?',
      answer: 'Absolutely. We assist with deployment configurations on modern hosts like Vercel, Netlify, or AWS, and offer ongoing maintenance plans to ensure security patches and libraries remain up to date.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column — Header */}
          <div className={styles.leftCol}>
            <Badge>FAQ</Badge>
            <Heading>
              Frequently<br />Asked Questions.
            </Heading>
          </div>

          {/* Right Column — Accordion List */}
          <div className={styles.rightCol}>
            <div className={styles.accordion}>
              {faqData.map((faq, index) => (
                <FaqRow
                  key={index}
                  faq={faq}
                  isOpen={activeIndex === index}
                  onToggle={() => toggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
