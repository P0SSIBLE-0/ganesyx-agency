'use client';

import React from "react";
import styles from "./DesignHero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectMarquee, { type ProjectCard } from "@/components/ui/ProjectMarquee";

// ── Design artwork items for the marquee ────────────────────────────────────
const marqueeItems: ProjectCard[] = [
  {
    id: "d1",
    name: "Collage Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    tagline: "Mixed Media",
    tags: ["Illustration", "Collage"],
  },
  {
    id: "d2",
    name: "Sketch Series",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    tagline: "@coplin",
    tags: ["Pencil", "Concept Art"],
  },
  {
    id: "d3",
    name: "Pop Art",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop",
    tagline: "Cigarettes",
    tags: ["Pop", "Vintage"],
    wide: true,
  },
  {
    id: "d4",
    name: "Abstract Fluid",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    tags: ["Abstract", "Digital"],
  },
  {
    id: "d5",
    name: "Surrealist Portrait",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
    tagline: "Hand Study",
    tags: ["Surrealism", "Portrait"],
  },
  {
    id: "d6",
    name: "Route 66",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tagline: "Graphic Print",
    tags: ["Retro", "Typography"],
  },
  {
    id: "d7",
    name: "Poster Design",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    tagline: "@andrea",
    tags: ["Poster", "Streetwear"],
    wide: true,
  },
  {
    id: "d8",
    name: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop",
    tags: ["Branding", "Editorial"],
  },
  {
    id: "d9",
    name: "Motion Grid",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    tagline: "Grid System",
    tags: ["Layout", "Design"],
  },
];

export default function DesignHero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgGlow} />
      <div className={styles.bgVignette} />

      <div className={styles.wrapper}>

        {/* ── HEADING ─────────────────────────────── */}
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Graphics that make your brand look premium everywhere
        </motion.h1>

        {/* ── FOOTER ──────────────────────────────── */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.description}>
            We design marketing visuals that are clean, consistent, and built to grab attention.
          </p>
          <div className={styles.ctas}>
            <Link href="#join" className={styles.btnDark}>
              Get Started
            </Link>
            <Link href="#read-more" className={styles.btnGhost}>
              Read more
            </Link>
          </div>
        </motion.div>

        {/* ── MARQUEE ──────────────────────────────── */}
        <motion.div
          className={styles.marqueeWrapper}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectMarquee
            items={marqueeItems}
            speed={38}
            direction="left"
          />
        </motion.div>



      </div>
    </section>
  );
}
