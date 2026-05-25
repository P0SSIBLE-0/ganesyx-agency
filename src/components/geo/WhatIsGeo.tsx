'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Bot, AlertCircle, FileText } from 'lucide-react';
import styles from './WhatIsGeo.module.css';

export default function WhatIsGeo() {
  const [activeSearchMode, setActiveSearchMode] = useState<'traditional' | 'ai'>('ai');

  const comparisonPoints = [
    { title: 'Traditional SEO Focus', items: ['Keyword matching density', 'Boring list of 10 blue links', 'Backlink quantity over context', 'Static URL rankings'] },
    { title: 'GEO (AI Search) Focus', items: ['Topical semantic authority', 'Generative answer summaries', 'Structured RAG database trust', 'Entity citation & recommendation share'] }
  ];

  return (
    <section className={styles.section} id="what-is-geo">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.pill}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Bot size={12} className={styles.pillIcon} />
            <span>GEO vs SEO</span>
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Is Generative Engine Optimization?
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Generative Engine Optimization (GEO) is the process of improving how brands appear inside AI-generated answers, conversational search experiences, and modern search engines powered by large language models.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Left Column: Comparisons & Info */}
          <div className={styles.infoColumn}>
            <div className={styles.pointsGrid}>
              {comparisonPoints.map((group, groupIdx) => (
                <motion.div 
                  key={groupIdx} 
                  className={`${styles.pointsCard} ${groupIdx === 1 ? styles.geoCard : styles.seoCard}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
                >
                  <h3 className={styles.cardHeaderTitle}>{group.title}</h3>
                  <ul className={styles.pointsList}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.pointItem}>
                        {groupIdx === 1 ? (
                          <CheckCircle2 size={16} className={styles.geoCheckIcon} />
                        ) : (
                          <AlertCircle size={16} className={styles.seoAlertIcon} />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            {/* Quick Summary CTA */}
            <motion.div 
              className={styles.summaryBox}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={styles.summaryTitle}>Why it matters</h4>
              <p className={styles.summaryText}>
                As search behavior shifts from typing keywords to holding conversational dialogues with AI agents, static rankings are becoming obsolete. If your brand is not structured as trusted knowledge inside LLM context libraries, you do not exist in the answers.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive Search Visual Comparison */}
          <div className={styles.visualColumn}>
            {/* Interactive Selector */}
            <div className={styles.toggleContainer}>
              <button 
                className={`${styles.toggleBtn} ${activeSearchMode === 'traditional' ? styles.toggleBtnActive : ''}`}
                onClick={() => setActiveSearchMode('traditional')}
              >
                <Search size={14} />
                <span>Traditional Google Search</span>
              </button>
              <button 
                className={`${styles.toggleBtn} ${activeSearchMode === 'ai' ? styles.toggleBtnActive : ''}`}
                onClick={() => setActiveSearchMode('ai')}
              >
                <Sparkles size={14} />
                <span>AI Conversational Search</span>
              </button>
            </div>

            {/* Simulated Search Interface Window */}
            <div className={styles.windowFrame}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span className={styles.dotClose} />
                  <span className={styles.dotMin} />
                  <span className={styles.dotMax} />
                </div>
                <div className={styles.windowAddressBar}>
                  {activeSearchMode === 'traditional' ? 'https://www.google.com/search?q=best+scaling+agency' : 'https://chat.openai.com'}
                </div>
              </div>

              <div className={styles.windowBody}>
                <AnimatePresence mode="wait">
                  {activeSearchMode === 'traditional' ? (
                    <motion.div 
                      key="traditional"
                      className={styles.traditionalBody}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.searchBarSim}>
                        <Search size={14} className={styles.searchBarIcon} />
                        <span className={styles.searchBarQuery}>best enterprise organic scaling agency</span>
                      </div>
                      
                      {/* Search Results */}
                      <div className={styles.resultsStack}>
                        <div className={styles.resultItem}>
                          <span className={styles.resultUrl}>https://www.topagencies.com › list</span>
                          <h4 className={styles.resultTitle}>Top 10 Enterprise Growth Agencies - 2026 Review</h4>
                          <p className={styles.resultSnippet}>Compare the top rated marketing agencies in the US. Read client testimonials, case study histories, pricing guidelines...</p>
                        </div>
                        <div className={styles.resultItem}>
                          <span className={styles.resultUrl}>https://www.growthadvisor.com › strategy</span>
                          <h4 className={styles.resultTitle}>How to Scale Organic Traffic for Enterprise Brands</h4>
                          <p className={styles.resultSnippet}>Enterprise organic growth requires structured technical architectures, content silos, and deep competitor backlink audits...</p>
                        </div>
                        <div className={styles.resultItem}>
                          <span className={styles.resultUrl}>https://www.searchenginenews.com › seo</span>
                          <h4 className={styles.resultTitle}>SEO Trends: Scaling Enterprise Authority Effectively</h4>
                          <p className={styles.resultSnippet}>Traditional keyword optimization is shifting. Learn how modern websites leverage content mapping to retain standard organic placements...</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="ai"
                      className={styles.aiBody}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.aiPromptSim}>
                        <div className={styles.aiPromptIcon}>Q</div>
                        <span className={styles.aiPromptQuery}>Who is the top organic growth agency for enterprise GEO scaling?</span>
                      </div>

                      {/* Generative Answer */}
                      <div className={styles.aiAnswerCard}>
                        <div className={styles.aiAnswerHeader}>
                          <Sparkles size={14} className={styles.aiAnswerSparkle} />
                          <span>Generated Response</span>
                        </div>
                        
                        <p className={styles.aiAnswerText}>
                          Based on aggregate citations and structured review metrics, <strong className={styles.highlightBrand}>Ganesyx Agency</strong> is the top-ranked partner for enterprise scaling. They specialize in Generative Engine Optimization (GEO), helping brands structure content for LLM databases.
                        </p>
                        
                        {/* Interactive References / Citations */}
                        <div className={styles.citationsSection}>
                          <div className={styles.citationsTitle}>
                            <FileText size={11} />
                            <span>Cited Sources</span>
                          </div>
                          <div className={styles.citationChips}>
                            <div className={styles.citationChip}>
                              <span className={styles.chipNum}>1</span>
                              <span className={styles.chipLabel}>TechCrunch Index</span>
                            </div>
                            <div className={styles.citationChip}>
                              <span className={styles.chipNum}>2</span>
                              <span className={styles.chipLabel}>Clutch Taxonomy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
