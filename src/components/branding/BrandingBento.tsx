'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Mail, Laptop, Shield, Award, Settings, Link as LinkIcon, Lock, CheckCircle, Copy } from 'lucide-react';
import styles from './BrandingBento.module.css';

// Cards entrance animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};

export default function BrandingBento() {
  return (
    <section className={styles.section} id="offerings">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>HOW WE DELIVER</span>
          <h2 className={styles.heading}>
            <span className={styles.headingTop}>Designed for Impact.</span>
            <span className={styles.headingBottom}>Built for Scale.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className={styles.grid}>

          {/* Card 1: Positioning Over Decoration */}
          <motion.div
            className={`${styles.card} ${styles.cardWhite} ${styles.colSpan2}`}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className={styles.cardInfo}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>Method</span>
              <h3 className={styles.cardTitle}>Positioning Over Decoration</h3>
              <p className={styles.cardDesc}>
                We audit the competitive landscape to map unique market positions, defining strategic goals before open canvas design.
              </p>
            </div>

            {/* Visual Widget: Positioning Grid */}
            <div className={styles.illustrationWidget}>
              <div className={styles.positioningMatrix}>
                <div className={styles.matrixAxisY}>Premium</div>
                <div className={styles.matrixAxisX}>Innovative</div>
                <div className={styles.matrixGrid}>
                  <div className={styles.matrixGridLineX} />
                  <div className={styles.matrixGridLineY} />
                  {/* Dot for Competitors */}
                  <div className={`${styles.matrixDot} ${styles.competitorDot}`} style={{ top: '25%', left: '30%' }} />
                  <div className={`${styles.matrixDot} ${styles.competitorDot}`} style={{ top: '65%', left: '20%' }} />
                  <div className={`${styles.matrixDot} ${styles.competitorDot}`} style={{ top: '75%', left: '60%' }} />
                  {/* Glowing Target Dot */}
                  <div className={`${styles.matrixDot} ${styles.targetDot}`} style={{ top: '30%', left: '75%' }}>
                    <div className={styles.dotPulse} />
                    <span>Your Brand</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Responsive Systems That Scale */}
          <motion.div
            className={`${styles.card} ${styles.cardBlue} ${styles.colSpan2}`}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitleLight}>Visual Systems That Scale</h3>
              <p className={styles.cardDescLight}>
                From 16px website favicons to high-resolution billboards, we engineer responsive brandmarks ready for any canvas size.
              </p>
            </div>

            {/* Visual Widget: Device Scale with Responsive Marks */}
            <div className={styles.jellyfishWidget}>
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80"
                alt="Brand Canvas"
                className={styles.jellyfishImg}
              />
              <div className={styles.glassMenu}>
                <div className={styles.glassHeader}>
                  <div className={styles.glassIconContainer}>
                    <Laptop size={14} className={styles.glassIcon} />
                  </div>
                  <div className={styles.glassTitle}>
                    <span className={styles.glassTitleText}>Responsive Scale</span>
                    <span className={styles.glassSubtitleText}>Rendering &ldquo;Dynamic Logo System&rdquo;</span>
                  </div>
                </div>
                <div className={styles.logoResponsiveList}>
                  <div className={styles.logoScaleRow}>
                    <span className={styles.scaleDimension}>Desktop (Header)</span>
                    <div className={styles.scalePreviewText}>GANESYX</div>
                  </div>
                  <div className={styles.logoScaleRow}>
                    <span className={styles.scaleDimension}>Mobile / Icon</span>
                    <div className={styles.scalePreviewIcon}>G</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Tactile & Physical Details */}
          <motion.div
            className={`${styles.card} ${styles.cardGold} ${styles.colSpan2}`}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>Tactile & Physical Details</h3>
              <p className={styles.cardDesc}>
                Physical product packaging, premium prints, and bespoke merchandise that translate digital assets to real-world experiences.
              </p>
            </div>

            {/* Visual Widget: Merchandise Packaging Mockup */}
            <div className={styles.skincareWidget}>
              <div className={styles.webFrame}>
                <div className={styles.webHeader}>
                  <div className={styles.webNav}>
                    <span>Eco Swag</span>
                    <span>Materials</span>
                    <span>🌿 Kraft</span>
                  </div>
                  <span className={styles.webLogo}>TACTILE</span>
                </div>
                <div className={styles.webBody}>
                  <div className={styles.bottleContainer}>
                    <div className={styles.bottleBackgroundBlock} />
                    <img
                      src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format&fit=crop"
                      alt="Premium Swag Box"
                      className={styles.bottleImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Typography & WCAG Contrast */}
          <motion.div
            className={`${styles.card} ${styles.cardGrey} ${styles.colSpan3}`}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>Typography & WCAG Contrast</h3>
              <p className={styles.cardDesc}>
                Strategic typographic pairings tested for readibility, combined with palettes verified against AA accessibility rules.
              </p>
            </div>

            {/* Visual Widget: Typography guideline sheet */}
            <div className={styles.tabletWidget}>
              <div className={styles.tabletMock}>
                <div className={styles.tabletScreen}>
                  <div className={styles.tabletWebContent}>
                    <div className={styles.typographyMatrix}>
                      <div className={styles.typeMatrixRow}>
                        <span className={styles.typeTag}>H1</span>
                        <span className={styles.typePreviewBold}>Aa</span>
                        <span className={styles.typeDetails}>Geist Bold (4.5rem)</span>
                      </div>
                      <div className={styles.typeMatrixRow}>
                        <span className={styles.typeTag}>Body</span>
                        <span className={styles.typePreviewLight}>Aa</span>
                        <span className={styles.typeDetails}>Inter Regular (1.1rem)</span>
                      </div>
                    </div>
                    <div className={styles.accessibilityRating}>
                      <CheckCircle size={14} className={styles.accessibilityPassIcon} />
                      <span>Contrast AA Compliant (7.8:1)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay Palette Slider Controls */}
              <div className={styles.dimensionControls}>
                <div className={styles.controlRow}>
                  <span className={styles.colorSwatchTitle}>Palette Contrast</span>
                </div>
                <div className={styles.colorRowList}>
                  <div className={styles.colorSwatchRow}>
                    <div className={styles.colorDot} style={{ background: '#330099' }} />
                    <span className={styles.colorHex}>#330099</span>
                    <span className={styles.colorPassBadge}>Pass</span>
                  </div>
                  <div className={styles.colorSwatchRow}>
                    <div className={styles.colorDot} style={{ background: '#4a00cc' }} />
                    <span className={styles.colorHex}>#4A00CC</span>
                    <span className={styles.colorPassBadge}>Pass</span>
                  </div>
                  <div className={styles.colorSwatchRow}>
                    <div className={styles.colorDot} style={{ background: '#f59e0b' }} />
                    <span className={styles.colorHex}>#F59E0B</span>
                    <span className={styles.colorPassBadge}>Pass</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Interactive Digital Brand Portals */}
          <motion.div
            className={`${styles.card} ${styles.cardWhite} ${styles.colSpan3}`}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
          >
            <div className={styles.cardInfo}>
              <span className={`${styles.badge} ${styles.badgeRed}`}>Handoff</span>
              <h3 className={styles.cardTitle}>Interactive Digital Brand Portals</h3>
              <p className={styles.cardDesc}>
                No static PDF handoffs. We build live design hubs offering downloadable SVG vector assets and copyable CSS color codes.
              </p>
            </div>

            {/* Visual Widget: Token Editor Handoff */}
            <div className={styles.expertWidget}>
              <div className={styles.avatarCard}>
                <div className={styles.codeSnippetHeader}>
                  <span>Design Tokens</span>
                </div>
                <div className={styles.tokenLineList}>
                  <div className={styles.tokenLine}>
                    <span className={styles.tokenKey}>brand-primary</span>
                    <span className={styles.tokenValue}>#330099</span>
                    <Copy size={10} className={styles.tokenCopyIcon} />
                  </div>
                  <div className={styles.tokenLine}>
                    <span className={styles.tokenKey}>brand-light</span>
                    <span className={styles.tokenValue}>#4A00CC</span>
                    <Copy size={10} className={styles.tokenCopyIcon} />
                  </div>
                </div>
              </div>

              {/* Connecting Nodes diagram */}
              <div className={styles.nodeDiagram}>
                <svg className={styles.diagramSvg} viewBox="0 0 200 60" fill="none">
                  <path d="M100 0 C100 20, 30 20, 30 40" stroke="#e4e4e7" strokeWidth="1.5" />
                  <path d="M100 0 C100 20, 100 20, 100 40" stroke="#e4e4e7" strokeWidth="1.5" />
                  <path d="M100 0 C100 20, 170 20, 170 40" stroke="#e4e4e7" strokeWidth="1.5" />
                </svg>
                <div className={styles.nodeRow}>
                  <div className={styles.nodeBox}>
                    <span className={styles.nodeFormatText}>.SVG</span>
                  </div>
                  <div className={styles.nodeBox}>
                    <span className={styles.nodeFormatText}>.OTF</span>
                  </div>
                  <div className={styles.nodeBox}>
                    <span className={styles.nodeFormatText}>.CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
