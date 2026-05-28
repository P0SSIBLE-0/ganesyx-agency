'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { faqCategories, FAQCategory } from '@/data/faqs';
import { FaqItem } from '@/data/types';
import styles from './FaqPage.module.css';

interface FaqRowComponentProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  variants?: Variants;
  initial?: any;
  animate?: any;
}

function FaqRowComponent({
  question,
  answer,
  isOpen,
  onToggle,
  variants,
  initial,
  animate,
}: FaqRowComponentProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <motion.div
      className={`${styles.faqRow} ${isOpen ? styles.faqRowActive : ''}`}
      variants={variants}
      initial={initial}
      animate={animate}
    >
      <button
        className={styles.faqQuestionButton}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.faqQuestionText}>{question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" className={`${styles.verticalLine} ${isOpen ? styles.verticalLineHidden : ''}`}></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.38, ease: [0.16, 1, 0.46, 1] },
          opacity: { duration: isOpen ? 0.25 : 0.15, delay: isOpen ? 0.05 : 0 },
        }}
        style={{ overflow: 'hidden' }}
      >
        <div ref={bodyRef} className={styles.faqAnswerWrapper}>
          <p className={styles.faqAnswerText}>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FaqPageClient() {
  const [activeTab, setActiveTab] = useState<string>('general');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqKey, setOpenFaqKey] = useState<string | null>('tab-0'); // Open first item by default
  const [filteredResults, setFilteredResults] = useState<{ categoryLabel: string; items: FaqItem[] }[]>([]);

  // Reset open item when category changes
  useEffect(() => {
    setOpenFaqKey('tab-0');
  }, [activeTab]);

  // Handle live search updates
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const matches: { categoryLabel: string; items: FaqItem[] }[] = [];

    faqCategories.forEach((cat) => {
      const matchingItems = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );

      if (matchingItems.length > 0) {
        matches.push({
          categoryLabel: cat.label,
          items: matchingItems,
        });
      }
    });

    setFilteredResults(matches);
  }, [searchQuery]);

  // Auto-open first matched search item when results change
  useEffect(() => {
    if (filteredResults.length > 0) {
      setOpenFaqKey('search-0-0');
    }
  }, [filteredResults]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchQuery(''); // Clear search on tab change to go back to category view
  };

  const currentCategory = faqCategories.find((cat) => cat.id === activeTab) || faqCategories[0];
  const isSearching = searchQuery.trim().length > 0;

  // Staggered variants for animations
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.56, 1] },
    },
  };

  return (
    <div className={styles.pageWrapper}>

      {/* Background Orbs */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.breadcrumbs}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbActive}>FAQs</span>
          </motion.div>

          <motion.h1
            className={styles.pageTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Got Questions?<br />
            <span>We Have Answers.</span>
          </motion.h1>

          <motion.p
            className={styles.pageSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Find detailed answers about our services, design processes, billing, and technical methodologies.
          </motion.p>

          {/* Premium Search Bar */}
          <motion.div
            className={styles.searchBarWrapper}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.searchInner}>
              <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search queries (e.g. 'Next.js', 'revisions', 'pricing')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {isSearching && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={styles.clearSearchBtn}
                  aria-label="Clear search"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>

          {!isSearching ? (
            // NORMAL TABBED VIEW
            <div className={styles.twoColumnGrid}>

              {/* Left Column: Sticky Tabs list */}
              <aside className={styles.sidebarColumn}>
                <div className={styles.stickyNavCard}>
                  <h3 className={styles.navHeading}>Service Categories</h3>
                  <div className={styles.tabsList}>
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleTabChange(cat.id)}
                        className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabBtnActive : ''}`}
                      >
                        <span className={styles.tabText}>{cat.label}</span>
                        <svg className={styles.tabChevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Right Column: Accordion Lists */}
              <main className={styles.faqListColumn}>
                <div className={styles.categoryIntro}>
                  <h2 className={styles.categoryTitle}>{currentCategory.label}</h2>
                  <p className={styles.categoryDesc}>{currentCategory.description}</p>
                </div>

                <motion.div
                  className={styles.accordionContainer}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  key={activeTab} // Remounts animation on tab change
                >
                  {currentCategory.items.map((item, index) => {
                    const itemKey = `tab-${index}`;
                    const isOpen = openFaqKey === itemKey;
                    return (
                      <FaqRowComponent
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={isOpen}
                        onToggle={() => setOpenFaqKey(isOpen ? null : itemKey)}
                        variants={itemVariants}
                      />
                    );
                  })}
                </motion.div>
              </main>

            </div>
          ) : (
            // SEARCH RESULTS VIEW
            <div className={styles.searchResultsContainer}>
              <div className={styles.resultsIntro}>
                <h2 className={styles.resultsHeading}>
                  Search Results for &ldquo;{searchQuery}&rdquo;
                </h2>
                <p className={styles.resultsDesc}>
                  Showing matched FAQ pairs across all service structures.
                </p>
              </div>

              {filteredResults.length > 0 ? (
                <motion.div
                  className={styles.searchAccordions}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredResults.map((catResult, catIdx) => (
                    <div key={catIdx} className={styles.searchCatGroup}>
                      <span className={styles.searchCategoryBadge}>{catResult.categoryLabel}</span>

                      <div className={styles.searchItemsList}>
                        {catResult.items.map((item, itemIdx) => {
                          const uniqueKey = `search-${catIdx}-${itemIdx}`;
                          const isOpen = openFaqKey === uniqueKey;
                          return (
                            <FaqRowComponent
                              key={uniqueKey}
                              question={item.question}
                              answer={item.answer}
                              isOpen={isOpen}
                              onToggle={() => setOpenFaqKey(isOpen ? null : uniqueKey)}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                // NO RESULTS STATE
                <motion.div
                  className={styles.noResultsBox}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.noResultsIconWrapper}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                  <h3>No matches found</h3>
                  <p>We couldn&apos;t find any FAQs matching your keyword. Try checking another phrasing or browse by category.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className={styles.backToCategoriesBtn}
                  >
                    Back to Categories
                  </button>
                </motion.div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Premium CTA Panel */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaGlassCard}>
            <div className={styles.ctaText}>
              <h2>Still have questions?</h2>
              <p>Can&apos;t find what you are looking for? Get in touch with our team directly and we will clear up any confusion.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href="/contact" className={styles.primaryCta}>
                <span>Book A Discovery Call</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="mailto:hello@ganesyx.com" className={styles.secondaryCta}>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
