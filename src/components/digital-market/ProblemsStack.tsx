'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import styles from './ProblemsStack.module.css';

interface ProblemCardData {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  bg: string;
  textColor: string;
  iconColor: string;
  rotation: number;
  /** X offset from the wrapper anchor (px) — positive = right */
  x: number;
  /** Final Y position offset from anchor (px) — positive = down */
  y: number;
}

const PixelGridIcon = () => (
  <svg viewBox="0 0 16 16" width="60" height="60" fill="currentColor">
    <rect x="2" y="2" width="2" height="4" />
    <rect x="2" y="8" width="2" height="6" />
    <rect x="7" y="4" width="2" height="8" />
    <rect x="12" y="2" width="2" height="6" />
    <rect x="12" y="10" width="2" height="4" />
  </svg>
);

const PixelHookIcon = () => (
  <svg viewBox="0 0 16 16" width="60" height="60" fill="currentColor">
    <rect x="2" y="2" width="2" height="4" />
    <rect x="4" y="6" width="2" height="2" />
    <rect x="6" y="8" width="4" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="12" y="12" width="2" height="2" />
    <rect x="10" y="6" width="2" height="2" />
    <rect x="12" y="8" width="2" height="2" />
  </svg>
);

const PixelCrossIcon = () => (
  <svg viewBox="0 0 16 16" width="60" height="60" fill="currentColor">
    <rect x="2" y="2" width="2" height="2" />
    <rect x="12" y="2" width="2" height="2" />
    <rect x="4" y="4" width="2" height="2" />
    <rect x="10" y="4" width="2" height="2" />
    <rect x="6" y="6" width="4" height="4" />
    <rect x="4" y="10" width="2" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="2" y="12" width="2" height="2" />
    <rect x="12" y="12" width="2" height="2" />
  </svg>
);

const PixelQuestionIcon = () => (
  <svg viewBox="0 0 16 16" width="60" height="60" fill="currentColor">
    <rect x="4" y="2" width="8" height="2" />
    <rect x="10" y="4" width="2" height="4" />
    <rect x="8" y="8" width="2" height="2" />
    <rect x="8" y="12" width="2" height="2" />
  </svg>
);

const PixelSadIcon = () => (
  <svg viewBox="0 0 16 16" width="60" height="60" fill="currentColor">
    <rect x="4" y="4" width="2" height="2" />
    <rect x="10" y="4" width="2" height="2" />
    <rect x="4" y="12" width="8" height="2" />
    <rect x="2" y="10" width="2" height="2" />
    <rect x="12" y="10" width="2" height="2" />
  </svg>
);

/**
 * Card coordinates are relative to a zero-size anchor at the centre of the viewport.
 * Cards are 260 × 340 px and already offset -130px / -170px in CSS so they
 * centre on the anchor. x/y here add additional spread from that centre.
 *
 * Positive x → moves right, negative x → moves left
 * Positive y → moves down, negative y → moves up
 */
const problemCards: ProblemCardData[] = [
  {
    id: 1,
    title: 'BUDGETS ARE GROWING, BUT ROI IS FALLING',
    desc: 'Ad spend is climbing every quarter, but customer acquisition costs are rising faster than revenue. Without a clear attribution model, you have no idea which channels are actually working — and which are silently burning your budget.',
    icon: <PixelGridIcon />,
    bg: '#1a0066',
    textColor: '#ffffff',
    iconColor: '#ffd859',
    rotation: -14,
    x: -430,
    y: 60,
  },
  {
    id: 2,
    title: 'CREATIVE AD DESIGN IS LACKING',
    desc: 'Generic, template-style ads fail to stop the scroll. When your creative does not match the energy of your audience, CTR tanks and cost-per-click spikes — wasting money on impressions that never convert.',
    icon: <PixelHookIcon />,
    bg: '#330099',
    textColor: '#ffffff',
    iconColor: '#ffd5e1',
    rotation: -5,
    x: -200,
    y: -80,
  },
  {
    id: 3,
    title: 'TRAFFIC IS COMING, BUT THERE ARE NO SALES',
    desc: 'You are driving real clicks and page views, yet revenue stays flat. Leaky landing pages, unclear CTAs, and misaligned offers turn expensive traffic into zero return — a funnel problem disguised as a traffic problem.',
    icon: <PixelCrossIcon />,
    bg: '#ffd5e1',
    textColor: '#1a0066',
    iconColor: '#330099',
    rotation: 13,
    x: 120,
    y: -90,
  },
  {
    id: 4,
    title: 'DATA IS SCATTERED AND UNRELIABLE',
    desc: 'Analytics from five platforms tell five different stories. Without a single source of truth, every campaign decision is a guess — and you end up optimising for metrics that have nothing to do with actual profit.',
    icon: <PixelQuestionIcon />,
    bg: '#e6e0f8',
    textColor: '#1a0066',
    iconColor: '#330099',
    rotation: 12,
    x: -30,
    y: 160,
  },
  {
    id: 5,
    title: 'NO ONE IS ACCOUNTABLE FOR THE RESULT',
    desc: 'Your SEO agency, paid media team, and web developer each own a slice — but no one owns the outcome. When results disappoint, everyone points elsewhere, and you are left carrying the cost of misalignment alone.',
    icon: <PixelSadIcon />,
    bg: '#181326',
    textColor: '#ffffff',
    iconColor: '#c084fc',
    rotation: 9,
    x: 340,
    y: 50,
  },
];

export default function ProblemsStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: raw } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Spring-smooth the raw scroll so animation feels physical, not snappy
  const sp = useSpring(raw, { stiffness: 100, damping: 22, mass: 0.5, restDelta: 0.001 });

  // Each card slides up from 600px below its final Y into place.
  // Card 1 is always visible (it is the base layer).
  const y2 = useTransform(sp, [0.05, 0.25], [600, 0]);
  const o2 = useTransform(sp, [0.05, 0.22], [0, 1]);

  const y3 = useTransform(sp, [0.25, 0.45], [600, 0]);
  const o3 = useTransform(sp, [0.25, 0.42], [0, 1]);

  const y4 = useTransform(sp, [0.45, 0.65], [600, 0]);
  const o4 = useTransform(sp, [0.45, 0.62], [0, 1]);

  const y5 = useTransform(sp, [0.65, 0.85], [600, 0]);
  const o5 = useTransform(sp, [0.65, 0.82], [0, 1]);

  // Giant title drifts up and fades as all cards are in
  const titleY = useTransform(sp, [0, 1], ['0px', '-120px']);
  const titleOpacity = useTransform(sp, [0.75, 1], [1, 0.3]);

  const motion_y = [
    useMotionValue(0), // card 1 — static
    y2,
    y3,
    y4,
    y5,
  ];
  const motion_o = [
    useMotionValue(1), // card 1 always visible
    o2,
    o3,
    o4,
    o5,
  ];

  // Combined final Y for each card: final resting offset + entrance slide
  // Fixed React hook rule violation (calling custom hooks inside loop)
  const combinedY1 = useTransform(motion_y[0], (v: number) => problemCards[0].y + v);
  const combinedY2 = useTransform(motion_y[1], (v: number) => problemCards[1].y + v);
  const combinedY3 = useTransform(motion_y[2], (v: number) => problemCards[2].y + v);
  const combinedY4 = useTransform(motion_y[3], (v: number) => problemCards[3].y + v);
  const combinedY5 = useTransform(motion_y[4], (v: number) => problemCards[4].y + v);

  const combinedY = [combinedY1, combinedY2, combinedY3, combinedY4, combinedY5];

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyWrapper}>

        {/* Background giant text — sits behind cards */}
        <motion.div
          className={styles.titleContainer}
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 className={styles.giantTitle}>
            DOES YOUR <br />
            <span className={styles.accentText}>MARKETING</span> LOOK <br />
            LIKE THIS?
          </h2>
        </motion.div>

        {/* Zero-size anchor; cards spread out via CSS top/left + JS translate */}
        <div className={styles.cardsWrapper}>
          {problemCards.map((card, i) => (
            <motion.div
              key={card.id}
              className={styles.card}
              style={{
                backgroundColor: card.bg,
                color: card.textColor,
                zIndex: 10 + i,
                // Spread offset from the anchor centre
                x: card.x,
                // Stacking Y = final position offset + entrance slide
                y: combinedY[i],
                rotate: card.rotation,
                opacity: motion_o[i],
                borderColor: card.textColor === '#ffffff'
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(51, 0, 153, 0.1)',
              }}
            >
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconWrapper} style={{ color: card.iconColor }}>
                  {card.icon}
                </div>

                {/* Copy */}
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
