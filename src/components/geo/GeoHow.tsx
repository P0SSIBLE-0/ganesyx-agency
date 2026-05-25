'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Database, Network, ShieldCheck, Milestone } from 'lucide-react';
import styles from './GeoHow.module.css';

export default function GeoHow() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const concepts = [
    {
      title: 'Entities',
      description: 'How AI understands people, brands, and topics as distinct conceptual nodes in its database.',
      icon: <Brain size={18} />,
      nodeLabel: 'Brand Entity',
      coords: { x: 120, y: 110 }
    },
    {
      title: 'Topical Authority',
      description: 'The depth, context, and semantic relevance of your content, showing comprehensive expertise.',
      icon: <Database size={18} />,
      nodeLabel: 'Auth Node',
      coords: { x: 380, y: 110 }
    },
    {
      title: 'Structured Content',
      description: 'Well-organized information, Q&A blocks, and clean hierarchies that improve direct AI parser interpretation.',
      icon: <Milestone size={18} />,
      nodeLabel: 'Structured API',
      coords: { x: 90, y: 280 }
    },
    {
      title: 'Contextual Relationships',
      description: 'The semantic connections that bind your brand to key topics, queries, and niche references.',
      icon: <Network size={18} />,
      nodeLabel: 'Context Mapping',
      coords: { x: 410, y: 280 }
    },
    {
      title: 'Trust Signals',
      description: 'Verifiable data, reviews, and high-trust reference placements that boost LLM citation weights.',
      icon: <ShieldCheck size={18} />,
      nodeLabel: 'Trust Verification',
      coords: { x: 250, y: 60 }
    }
  ];

  const centralNode = { x: 250, y: 220, label: 'Generative Core' };

  return (
    <section className={styles.section} id="geo-how">
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
            <Cpu size={12} className={styles.pillIcon} />
            <span>Search Mechanics</span>
          </motion.div>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Modern Discovery Is Driven By <br />
            Context & Understanding.
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered search systems evaluate entities, relationships, context, authority, and structured information to generate responses.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className={styles.grid}>
          {/* Left Column: Concept Cards */}
          <div className={styles.conceptsColumn}>
            {concepts.map((concept, idx) => (
              <motion.div
                key={idx}
                className={`${styles.conceptCard} ${activeIdx === idx ? styles.conceptCardActive : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <div className={`${styles.iconWrapper} ${activeIdx === idx ? styles.iconWrapperActive : ''}`}>
                  {concept.icon}
                </div>
                <div className={styles.conceptMeta}>
                  <h3 className={styles.conceptTitle}>{concept.title}</h3>
                  <p className={styles.conceptDesc}>{concept.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Knowledge Graph */}
          <div className={styles.graphColumn}>
            <div className={styles.graphContainer}>
              <svg className={styles.svg} viewBox="0 0 500 400" fill="none">
                {/* Connecting lines */}
                {concepts.map((concept, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <g key={idx}>
                      {/* Base static connector */}
                      <line
                        x1={concept.coords.x}
                        y1={concept.coords.y}
                        x2={centralNode.x}
                        y2={centralNode.y}
                        stroke={isActive ? 'rgba(139, 92, 246, 0.4)' : 'rgba(0, 0, 0, 0.06)'}
                        strokeWidth={isActive ? '2' : '1'}
                      />
                      {/* Flowing animated dash path */}
                      {isActive && (
                        <motion.line
                          x1={concept.coords.x}
                          y1={concept.coords.y}
                          x2={centralNode.x}
                          y2={centralNode.y}
                          stroke="#a855f7"
                          strokeWidth="2.5"
                          strokeDasharray="6 6"
                          animate={{ strokeDashoffset: [-20, 0] }}
                          transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central Core Node */}
                <g className={styles.centralNodeGroup}>
                  <circle
                    cx={centralNode.x}
                    cy={centralNode.y}
                    r="24"
                    fill="rgba(255, 255, 255, 0.95)"
                    stroke={activeIdx !== null ? '#a855f7' : 'rgba(139, 92, 246, 0.3)'}
                    strokeWidth="2"
                  />
                  <circle
                    cx={centralNode.x}
                    cy={centralNode.y}
                    r="32"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.15)"
                    strokeWidth="1.5"
                    className={styles.centralPulse}
                  />
                  <text
                    x={centralNode.x}
                    y={centralNode.y + 4}
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="8px"
                    fontFamily="var(--font-mono)"
                    fontWeight="700"
                  >
                    RAG Core
                  </text>
                </g>

                {/* Surrounding Nodes */}
                {concepts.map((concept, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <g key={idx} className={styles.nodeGroup}>
                      <motion.circle
                        cx={concept.coords.x}
                        cy={concept.coords.y}
                        r={isActive ? '14' : '10'}
                        fill={isActive ? 'rgba(168, 85, 247, 0.9)' : 'rgba(255, 255, 255, 0.9)'}
                        stroke={isActive ? '#a855f7' : 'rgba(0, 0, 0, 0.08)'}
                        strokeWidth="1.5"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      {isActive && (
                        <motion.circle
                          cx={concept.coords.x}
                          cy={concept.coords.y}
                          r="22"
                          fill="none"
                          stroke="rgba(139, 92, 246, 0.3)"
                          strokeWidth="1"
                          initial={{ scale: 0.8, opacity: 0.5 }}
                          animate={{ scale: 1.3, opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                        />
                      )}
                      <text
                        x={concept.coords.x}
                        y={concept.coords.y > 200 ? concept.coords.y + 24 : concept.coords.y - 18}
                        textAnchor="middle"
                        fill={isActive ? '#a855f7' : 'rgba(0, 0, 0, 0.54)'}
                        fontSize="9px"
                        fontFamily="var(--font-mono)"
                        fontWeight="600"
                      >
                        {concept.title}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Status HUD Info panel inside graph */}
              <div className={styles.graphHud}>
                <div className={styles.hudHeader}>
                  <div className={styles.hudDot} />
                  <span>Semantic Index Status</span>
                </div>
                <div className={styles.hudBody}>
                  {activeIdx !== null ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className={styles.hudValLabel}>Analyzing</span>
                        <h4 className={styles.hudValue}>{concepts[activeIdx].title}</h4>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div>
                      <span className={styles.hudValLabel}>System</span>
                      <h4 className={styles.hudValue}>Monitoring Graph</h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
