'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Milestone, 
  Search, 
  MapPin, 
  Code, 
  ShieldCheck, 
  GitCompare, 
  LineChart, 
  Plus, 
  Minus,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight
} from 'lucide-react';
import styles from './GeoProcess.module.css';

export default function GeoProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'AI Visibility Audit',
      description: 'Analyze current brand citation rates and semantic discoverability across Perplexity, Gemini, ChatGPT Search, and Claude.'
    },
    {
      num: '02',
      title: 'Entity Mapping',
      description: 'Establish and reinforce clear semantic relationships between your brand, founders, services, and core concepts in target search databases.'
    },
    {
      num: '03',
      title: 'Content Structuring',
      description: 'Format data clusters, Q&A blocks, and semantic hierarchies so AI crawler pipelines can ingest and parse details without friction.'
    },
    {
      num: '04',
      title: 'Authority Expansion',
      description: 'Produce high-depth, expert content silos that position your site as a high-trust reference index for conversational searches.'
    },
    {
      num: '05',
      title: 'Optimization & Alignment',
      description: 'Integrate advanced JSON-LD structured schemas, references, and citation footprints designed to support LLM citations.'
    },
    {
      num: '06',
      title: 'Monitoring & Evolution',
      description: 'Continuous monitoring of your AI Visibility Index. We refine schemas and entity linkages as language models and search engines update.'
    }
  ];

  // Helper to render console content based on active step
  const renderConsoleContent = () => {
    switch (activeStep) {
      case 0: // Audit
        return (
          <motion.div 
            key="audit"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={styles.auditLog}
          >
            <div className={styles.auditLine}>
              <span className={styles.promptSymbol}>$</span>
              <span>ganesyx-geo audit --target=ganesyx.agency</span>
            </div>
            <div className={styles.auditLine}>
              <span className={styles.promptSymbol}>&gt;</span>
              <span className={styles.auditInfo}>Scanning Perplexity, Gemini & ChatGPT citations...</span>
            </div>
            <div className={styles.auditLine}>
              <span className={styles.promptSymbol}>&gt;</span>
              <span>Running entity linkage calculations...</span>
            </div>
            <div className={`${styles.auditLine} ${styles.auditWarning}`}>
              <AlertTriangle size={12} style={{ marginTop: 3 }} />
              <span>[WARN] Entity connection 'Ganesyx Agency' is ambiguous.</span>
            </div>
            <div className={`${styles.auditLine} ${styles.auditWarning}`}>
              <AlertTriangle size={12} style={{ marginTop: 3 }} />
              <span>[WARN] Citation occurrence rate on GPT-4o search: &lt; 8%.</span>
            </div>
            <div className={`${styles.auditLine} ${styles.auditWarning}`}>
              <AlertTriangle size={12} style={{ marginTop: 3 }} />
              <span>[WARN] Missing service schemas for core portfolio items.</span>
            </div>
            <div className={styles.auditLine}>
              <span className={styles.promptSymbol}>&gt;</span>
              <span>Calculating baseline authority scores...</span>
            </div>
            <div className={`${styles.auditLine} ${styles.auditSuccess}`}>
              <CheckCircle2 size={12} style={{ marginTop: 3 }} />
              <span>Audit complete: AI Visibility Score = 14% (Critical)</span>
            </div>
          </motion.div>
        );

      case 1: // Entity Mapping
        return (
          <motion.div 
            key="entity"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.entityMapContainer}
          >
            <svg className={styles.entitySvg} viewBox="0 0 400 300" fill="none">
              {/* Connection Lines */}
              <line x1="200" y1="150" x2="80" y2="70" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
              <line x1="200" y1="150" x2="320" y2="70" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
              <line x1="200" y1="150" x2="80" y2="230" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
              <line x1="200" y1="150" x2="320" y2="230" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />

              {/* Animated flowing points */}
              <motion.circle cx="200" cy="150" r="40" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1.5" className={styles.pulseCircle} />
              
              {/* Central Node */}
              <circle cx="200" cy="150" r="32" fill="#a855f7" />
              <text x="200" y="154" textAnchor="middle" fill="#ffffff" className={styles.centralNodeText}>Brand</text>

              {/* Surrounding Nodes */}
              <circle cx="80" cy="70" r="22" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
              <text x="80" y="73" textAnchor="middle" className={styles.childNodeText}>Founder</text>

              <circle cx="320" cy="70" r="22" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
              <text x="320" y="73" textAnchor="middle" className={styles.childNodeText}>Location</text>

              <circle cx="80" cy="230" r="22" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
              <text x="80" y="233" textAnchor="middle" className={styles.childNodeText}>Category</text>

              <circle cx="320" cy="230" r="22" fill="#ffffff" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
              <text x="320" y="233" textAnchor="middle" className={styles.childNodeText}>Industry</text>
            </svg>
          </motion.div>
        );

      case 2: // Content Structuring
        return (
          <motion.div 
            key="structure"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.structureContainer}
          >
            <div className={styles.structurePane}>
              <div className={styles.paneHeader}>Unstructured Content</div>
              <div className={styles.paneBody}>
                We are Ganesyx, an agency based in New York. We help brands improve how they appear on AI search engines like ChatGPT, Gemini, and Perplexity using GEO.
              </div>
            </div>
            <div className={styles.structurePane}>
              <div className={styles.paneHeader}>Structured Output</div>
              <div className={styles.paneBody}>
                <span className={styles.tagHighlighted}>{"{"}</span><br />
                {"  "}<span className={styles.attrHighlighted}>"@context"</span>: <span className={styles.valHighlighted}>"https://schema.org"</span>,<br />
                {"  "}<span className={styles.attrHighlighted}>"@type"</span>: <span className={styles.valHighlighted}>"ProfessionalService"</span>,<br />
                {"  "}<span className={styles.attrHighlighted}>"name"</span>: <span className={styles.valHighlighted}>"Ganesyx"</span>,<br />
                {"  "}<span className={styles.attrHighlighted}>"address"</span>: {"{"}<br />
                {"    "}<span className={styles.attrHighlighted}>"addressLocality"</span>: <span className={styles.valHighlighted}>"New York"</span><br />
                {"  "}{"}"},<br />
                {"  "}<span className={styles.attrHighlighted}>"knowsAbout"</span>: <span className={styles.valHighlighted}>"GEO"</span><br />
                <span className={styles.tagHighlighted}>{"}"}</span>
              </div>
            </div>
          </motion.div>
        );

      case 3: // Authority Expansion
        return (
          <motion.div 
            key="authority"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.authorityDashboard}
          >
            <div className={styles.authCard}>
              <Search className={styles.authIcon} size={24} />
              <div className={styles.authVal}>98%</div>
              <div className={styles.authLabel}>Topical Coverage</div>
            </div>
            <div className={styles.authCard}>
              <ShieldCheck className={styles.authIcon} size={24} />
              <div className={styles.authVal}>A+</div>
              <div className={styles.authLabel}>Trust Score</div>
            </div>
            <div className={styles.authCard}>
              <GitCompare className={styles.authIcon} size={24} />
              <div className={styles.authVal}>14.2k</div>
              <div className={styles.authLabel}>Semantic Citations</div>
            </div>
            <div className={styles.authCard}>
              <LineChart className={styles.authIcon} size={24} />
              <div className={styles.authVal}>8.4x</div>
              <div className={styles.authLabel}>Discovery Lift</div>
            </div>
          </motion.div>
        );

      case 4: // Optimization & Alignment
        return (
          <motion.div 
            key="optimization"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className={styles.diffWindow}
          >
            <div className={`${styles.diffLine} ${styles.diffRemoved}`}>
              <Minus size={11} style={{ marginTop: 3 }} />
              <span>{"- <meta name=\"keywords\" content=\"seo agency, nyc marketing\">"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffRemoved}`}>
              <Minus size={11} style={{ marginTop: 3 }} />
              <span>{"- <h1>Ganesyx Agency NYC</h1>"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffAdded}`}>
              <Plus size={11} style={{ marginTop: 3 }} />
              <span>{"+ <meta name=\"description\" content=\"Ganesyx structures digital entity assets to optimize RAG parsing systems.\">"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffAdded}`}>
              <Plus size={11} style={{ marginTop: 3 }} />
              <span>{"+ <script type=\"application/ld+json\">"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffAdded}`}>
              <Plus size={11} style={{ marginTop: 3 }} />
              <span>{"  { \"@type\": \"Corporation\", \"name\": \"Ganesyx\" }"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffAdded}`}>
              <Plus size={11} style={{ marginTop: 3 }} />
              <span>{"+ </script>"}</span>
            </div>
            <div className={`${styles.diffLine} ${styles.diffNormal}`}>
              <span>{"  <body itemscope itemtype=\"https://schema.org/WebPage\">"}</span>
            </div>
          </motion.div>
        );

      case 5: // Monitoring
        return (
          <motion.div 
            key="monitoring"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.chartContainer}
          >
            <svg className={styles.chartSvg} viewBox="0 0 400 200" fill="none">
              {/* Grid Lines */}
              <line x1="50" y1="30" x2="350" y2="30" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
              <line x1="50" y1="80" x2="350" y2="80" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
              <line x1="50" y1="130" x2="350" y2="130" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
              <line x1="50" y1="180" x2="350" y2="180" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
              <line x1="50" y1="30" x2="50" y2="180" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />

              {/* Chart Line Path */}
              <motion.path 
                d="M 50 160 Q 110 145 170 110 T 290 50 T 350 40"
                fill="none"
                stroke="url(#chartLineGrad)"
                strokeWidth="3.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* Area Gradient under curve */}
              <path 
                d="M 50 180 L 50 160 Q 110 145 170 110 T 290 50 T 350 40 L 350 180 Z"
                fill="url(#chartAreaGrad)"
              />

              {/* Data points */}
              <circle cx="50" cy="160" r="4.5" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="170" cy="110" r="4.5" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="350" cy="40" r="4.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />

              {/* Label Values */}
              <text x="50" y="194" textAnchor="middle" className={styles.chartLabel}>Month 1</text>
              <text x="170" y="194" textAnchor="middle" className={styles.chartLabel}>Month 3</text>
              <text x="350" y="194" textAnchor="middle" className={styles.chartLabel}>Month 6</text>

              <text x="35" y="164" textAnchor="end" className={styles.chartLabel}>14%</text>
              <text x="35" y="114" textAnchor="end" className={styles.chartLabel}>45%</text>
              <text x="35" y="44" textAnchor="end" className={styles.chartLabel}>92%</text>
              <text x="350" y="25" textAnchor="middle" className={styles.chartValueText}>92% Visibility</text>

              {/* Gradients */}
              <defs>
                <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(168, 85, 247, 0.12)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className={styles.section} id="geo-process">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.div 
            className={styles.pill}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Milestone size={12} className={styles.pillIcon} />
            <span>Optimization Roadmap</span>
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our GEO Optimization Framework.
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A multi-layered systematic process to transform unorganized website assets into highly structured, contextually connected data engines.
          </motion.p>
        </div>

        {/* Stepper split layout */}
        <div className={styles.grid}>
          {/* Stepper Timeline list */}
          <div className={styles.stepper}>
            <div className={styles.stepperLine} />
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={idx}
                  className={`${styles.stepRow} ${isActive ? styles.stepRowActive : ''}`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className={`${styles.stepNumberWrapper} ${isActive ? styles.stepNumberWrapperActive : ''}`}>
                    {step.num}
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={`${styles.stepTitle} ${isActive ? styles.stepTitleActive : ''}`}>
                      {step.title}
                    </h3>
                    <p className={`${styles.stepDesc} ${isActive ? styles.stepDescActive : ''}`}>
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight 
                    size={16} 
                    style={{ 
                      marginLeft: 'auto', 
                      alignSelf: 'center', 
                      color: isActive ? '#a855f7' : 'rgba(0,0,0,0.15)',
                      transform: isActive ? 'translateX(4px)' : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }} 
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Console visual */}
          <div className={styles.consoleColumn}>
            <div className={styles.consoleWindow}>
              {/* Header */}
              <div className={styles.consoleHeader}>
                <div className={styles.consoleDots}>
                  <div className={`${styles.consoleDot}`} style={{ backgroundColor: 'rgba(255, 95, 86, 0.7)' }} />
                  <div className={`${styles.consoleDot}`} style={{ backgroundColor: 'rgba(255, 189, 46, 0.7)' }} />
                  <div className={`${styles.consoleDot}`} style={{ backgroundColor: 'rgba(39, 201, 63, 0.7)' }} />
                </div>
                <div className={styles.consoleTitle}>
                  Console: Phase_{steps[activeStep].num}
                </div>
                <div style={{ width: 42 }} /> {/* balance spacing */}
              </div>

              {/* Dynamic Console body */}
              <div className={styles.consoleBody}>
                <AnimatePresence mode="wait">
                  {renderConsoleContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
