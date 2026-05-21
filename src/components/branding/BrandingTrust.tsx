'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './BrandingTrust.module.css';

interface BrandItem {
  src: string;
  alt: string;
}

const brandsList: BrandItem[] = [
  // Row 1 (6 cells)
  { src: '/brands/Frame 12.png', alt: 'AminoChain' },
  { src: '/brands/Frame 13.png', alt: 'Simon' },
  { src: '/brands/Frame 14.png', alt: 'Antler' },
  { src: '/brands/Frame 15.png', alt: 'Front' },
  { src: '/brands/Frame 16.png', alt: 'Automox' },
  { src: '/brands/Frame 18.png', alt: 'Catalyst' },

  // Row 2 (2 cells left, then center card spans 2, then 2 cells right)
  { src: '/brands/Frame 19.png', alt: 'Epochal' },
  { src: '/brands/Frame 20.png', alt: 'Whistic' },

  // (Center card goes here)

  { src: '/brands/Frame 21.png', alt: 'Deepfactor' },
  { src: '/brands/Frame 22.png', alt: 'BOXD' },

  // Row 3 (2 cells left, then center card spans 2, then 2 cells right)
  { src: '/brands/Frame 23.png', alt: 'Frate' },
  { src: '/brands/Frame 25.png', alt: 'Measured' },

  { src: '/brands/Frame 26.png', alt: 'Passthrough' },
  { src: '/brands/logo (1).webp', alt: 'Escala' },

  // Row 4 (6 cells)
  { src: '/brands/Frame 12.png', alt: 'GoCanvas' },
  { src: '/brands/Frame 13.png', alt: 'Gather Voices' },
  { src: '/brands/Frame 14.png', alt: 'Uplimit' },
  { src: '/brands/Frame 15.png', alt: 'Demostack' },
  { src: '/brands/Frame 16.png', alt: 'Fidato Health' },
  { src: '/brands/Frame 18.png', alt: 'CollabWORK' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cellVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BrandingTrust() {
  return (
    <section className={styles.section} id="trust">
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Center Card */}
          <motion.div
            className={styles.centerCard}
            variants={cellVariants}
          >
            <h2 className={styles.centerTitle}>
              Trusted By 100+ Forward Thinking Sales Teams
            </h2>
            <a href="#cta" className={styles.centerBtn}>
              <span>Book a call</span>
              <ArrowRight size={14} className={styles.arrowIcon} />
            </a>
          </motion.div>

          {/* Logo Cells */}
          {brandsList.map((brand, idx) => (
            <motion.div
              key={idx}
              className={styles.cell}
              variants={cellVariants}
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className={styles.logoImg}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
