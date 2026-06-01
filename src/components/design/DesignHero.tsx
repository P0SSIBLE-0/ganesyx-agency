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
    name: "Sifars Interface",
    image: "/images/sifars_3.png",
    tags: ["Mobile", "Product Design"],
  },
  {
    id: "d2",
    name: "Kanishk Branding",
    image: "/images/kanishk_oil_3.png",
    tagline: "FMCG Brand",
    tags: ["Identity", "Visual Design"],
  },
  {
    id: "d3",
    name: "Invent Elevator",
    image: "/images/invent_2.webp",
    tagline: "Product Catalog",
    tags: ["Web Dev", "B2B Layout"],
    wide: true,
  },
  {
    id: "d4",
    name: "Sifars Identity",
    image: "/images/sifars_4.png",
    tags: ["Brand Guide", "Vector"],
  },
  {
    id: "d5",
    name: "Father's Day Campaign",
    image: "/images/fathers_day.png",
    tagline: "Social Ad",
    tags: ["Creative", "Social Graphics"],
  },
  {
    id: "d6",
    name: "NJ Classes Promo",
    image: "/images/nj_classes.png",
    tagline: "Ad Creative",
    tags: ["Education", "Typography"],
  },
  {
    id: "d7",
    name: "Kanishk Labeling",
    image: "/images/kanishk_oil_4.png",
    tagline: "Packaging Design",
    tags: ["Print Layout", "Labeling"],
    wide: true,
  },
  {
    id: "d8",
    name: "Reggal Identity",
    image: "/images/reggal.png",
    tagline: "Apparel Brand",
    tags: ["Logo Design", "Clothing"],
  },
  {
    id: "d9",
    name: "GKPro Academy",
    image: "/images/gk-pro.webp",
    tagline: "EdTech Interface",
    tags: ["UI/UX Design", "Platform"],
  },
  {
    id: "d10",
    name: "Kanishk ",
    image: "/images/kanishk_oil_2.png",
    tags: ["Identity", "Visual Design"],
  }
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
