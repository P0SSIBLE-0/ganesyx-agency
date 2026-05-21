'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';

const faqData = {
  general: [
    {
      question: 'Do you offer post-launch support?',
      answer: 'Absolutely. We offer ongoing maintenance and retainer packages to ensure your application remains secure, up-to-date, and performs optimally as you scale and add new features.',
    },
    {
      question: 'Can you rescue an existing codebase?',
      answer: 'Yes. We regularly audit and refactor legacy systems. Our team will assess the current state, identify bottlenecks, and implement improvements without disrupting your live operations.',
    },
    {
      question: 'Where are you located?',
      answer: 'We are a remote-first team with members across multiple time zones. This allows us to provide near-continuous support and collaborate effectively with clients worldwide.',
    },
    {
      question: 'How do I get started with Ganesyx?',
      answer: 'Simply reach out through our contact form or book a discovery call. We will discuss your goals, evaluate your needs, and propose a tailored approach within 48 hours.',
    },
  ],
  services: [
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across fintech, healthcare, e-commerce, SaaS, and creative industries. Our adaptable methodology allows us to deliver results regardless of sector complexity.',
    },
    {
      question: 'Do you handle both design and development?',
      answer: 'Yes. We are a full-service agency. Our integrated teams handle everything from brand strategy and UI/UX design to frontend and backend development.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely. We frequently embed with in-house teams to augment capacity, bring specialized expertise, or accelerate specific initiatives.',
    },
  ],
  process: [
    {
      question: 'What is your typical project timeline?',
      answer: 'Timelines vary by scope. A typical MVP takes 8-12 weeks, while larger platform builds may take 4-6 months. We provide detailed timelines during the proposal phase.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We use Slack for daily communication, weekly video check-ins, and a shared project dashboard for transparency. You will always know the status of your project.',
    },
    {
      question: 'What happens if I need to change scope mid-project?',
      answer: 'We embrace agile methodology. Scope changes are evaluated for impact, and we adjust timelines and resources accordingly. No rigid contracts, just flexible partnership.',
    },
  ],
  pricing: [
    {
      question: 'How do you structure your pricing?',
      answer: 'We offer both fixed-price projects and time-and-materials engagements. The best model depends on your project clarity and flexibility needs. We will recommend the optimal approach.',
    },
    {
      question: 'Do you require upfront payment?',
      answer: 'Typically, we structure payments in milestones: 30% upfront, 40% at midpoint, and 30% upon completion. This ensures alignment and shared commitment.',
    },
    {
      question: 'Are there any hidden costs?',
      answer: 'No. Our proposals are transparent and itemized. Any additional costs outside the agreed scope are discussed and approved before work begins.',
    },
  ],
};

const tabs = ['General', 'Services', 'Process', 'Pricing'] as const;

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<string>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = tabs.findIndex(t => t.toLowerCase() === activeTab);
    const activeTabElement = tabsRef.current[activeIndex];
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    if (tab.toLowerCase() === activeTab) return;
    setIsTransitioning(true);
    setOpenIndex(null);
    setTimeout(() => {
      setActiveTab(tab.toLowerCase());
      setIsTransitioning(false);
    }, 300);
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentQuestions = faqData[activeTab as keyof typeof faqData] || [];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Everything you need to know about our services, process, and billing.
          </p>
        </div>

        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => { tabsRef.current[index] = el; }}
              className={`${styles.tab} ${activeTab === tab.toLowerCase() ? styles.active : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
          <div 
            className={styles.tabIndicator} 
            style={{ 
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }} 
          />
        </div>

        <div
          ref={contentRef}
          className={`${styles.content} ${isTransitioning ? styles.fadeOut : ''}`}
        >
          {currentQuestions.map((item, index) => (
            <div key={`${activeTab}-${index}`} className={styles.question}>
              <button
                className={styles.questionButton}
                onClick={() => toggleQuestion(index)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
              >
                <p className={styles.answerText}>{item.answer}</p>
              </div>
              <div className={styles.divider} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
