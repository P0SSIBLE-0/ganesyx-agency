'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './WebDevWork.module.css';

interface Metric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  metrics: Metric[];
  imageUrl: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: any;
}

function ProjectCard({ project, index, total, scrollYProgress }: ProjectCardProps) {
  // Dynamically build the scroll intervals for stacking
  // If we have N cards, there are N-1 transitions.
  // The scroll progress points are evenly spaced from 0 to 1.
  const input = Array.from({ length: total }, (_, k) => total > 1 ? k / (total - 1) : 0);

  // y: the card enters from the bottom (e.g. translateY = 1000px) and moves to 0
  const yOutput = Array.from({ length: total }, (_, k) => {
    if (k < index) return 1000; // Offscreen below
    return 0; // At its sticky rest position
  });

  // scale: the card is scale 1.0 when active, and scales down slightly when subsequent cards stack on it
  const scaleOutput = Array.from({ length: total }, (_, k) => {
    if (k < index) return 1;
    if (k === index) return 1;
    return 1 - (k - index) * 0.04; // scale down by 4% per stacked card
  });

  // opacity: offscreen = 0, entered/active/stacked = 1 (fully opaque to prevent any layer bleeding)
  const opacityOutput = Array.from({ length: total }, (_, k) => {
    if (k < index) return 0;
    return 1;
  });

  const y = useTransform(scrollYProgress, input, yOutput);
  const scale = useTransform(scrollYProgress, input, scaleOutput);
  const opacity = useTransform(scrollYProgress, input, opacityOutput);

  // Brand gradients for the top accent bar of each card
  const accentGradients = [
    'linear-gradient(90deg, #330099 0%, #6600ff 100%)', // zenith-marketplace (purple/violet)
    'linear-gradient(90deg, #00b4db 0%, #0083b0 100%)', // pulse-analytics (blue/cyan)
    'linear-gradient(90deg, #10b981 0%, #059669 100%)'  // aether-estate (emerald/mint)
  ];
  const accentBarBg = accentGradients[index % accentGradients.length];

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      className={`${styles.card} ${isReversed ? styles.reversed : ''}`}
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1
      }}
    >
      {/* Brand Accent Stripe */}
      <div className={styles.accentBar} style={{ background: accentBarBg }} />

      {/* Card Index Indicator */}
      <div className={styles.cardIndex}>
        <span className={styles.cardNum}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.cardTotal}> / {String(total).padStart(2, '0')}</span>
      </div>

      {/* Project Image */}
      <div className={styles.imagePane}>
        <img
          src={project.imageUrl}
          className={styles.projectImage}
          alt={`${project.title} screenshot preview`}
          loading="lazy"
        />
        <div className={styles.imageTint} />
      </div>

      {/* Project Details */}
      <div className={styles.contentPane}>
        <span className={styles.categoryTag}>{project.category}</span>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.desc}</p>

        {/* Tech Stack List */}
        <div className={styles.techList}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className={styles.metricsRow}>
          {project.metrics.map((metric, i) => (
            <div key={i} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Explore Case Study CTA */}
        <a href={project.link} className={styles.ctaLink}>
          <span>Explore Case Study</span>
          <ArrowUpRight className={styles.ctaArrow} size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function WebDevWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawScrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress with a snappy and responsive physics setting
  const scrollYProgress = useSpring(rawScrollY, {
    stiffness: 400,
    damping: 40,
    mass: 0.2,
    restDelta: 0.001
  });

  const projects: Project[] = [
    {
      id: 'zenith-marketplace',
      title: 'Zenith Marketplace',
      category: 'E-Commerce & Retail',
      desc: 'A high-performance luxury e-commerce engine custom-built for a premium apparel brand. Re-engineered from the ground up to support instant page navigations, fluid media-rich product listing paths, and a single-step checkout flow.',
      tech: ['Next.js 15', 'RSC', 'Shopify Storefront API', 'Framer Motion', 'TailwindCSS'],
      metrics: [
        { label: 'Mobile Speed Score', value: '99/100' },
        { label: 'Conversion Boost', value: '+42%' },
        { label: 'Time-To-Interactive', value: '1.1s' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      link: '#contact',
    },
    {
      id: 'pulse-analytics',
      title: 'PulseAnalytics Dash',
      category: 'SaaS & Enterprise',
      desc: 'A real-time data streaming dashboard aggregating and rendering millions of telemetry events. Tailored for infrastructure monitoring and high-frequency data views with canvas-based visual graphing engines.',
      tech: ['Next.js', 'TypeScript', 'Recharts', 'WebSockets', 'Node.js'],
      metrics: [
        { label: 'Rendering Speed', value: '5x Faster' },
        { label: 'System Uptime', value: '99.99%' },
        { label: 'Daily Events Streamed', value: '3.2M' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      link: '#contact',
    },
    {
      id: 'aether-estate',
      title: 'Aether Estate Portal',
      category: '3D WebGL / Real Estate',
      desc: 'An immersive residential property platform presenting virtual walkthroughs. Users explore photo-realistic interior models directly inside the web browser with zero loading delays and fluid UI paths.',
      tech: ['React Three Fiber', 'Next.js', 'Three.js', 'Prismic CMS', 'Vanilla CSS'],
      metrics: [
        { label: 'Avg Session Duration', value: '+150%' },
        { label: 'Lighthouse SEO', value: '100/100' },
        { label: 'Cumulative Layout Shift', value: '0.00' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      link: '#contact',
    }
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        {/* Header Block */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.badge}>Recent Work</span>
            <h2 className={styles.title}>Digital Experiences Engineered for Premium Performance.</h2>
          </div>
          <p className={styles.supportText}>
            We combine production-grade code structures with pristine aesthetic design to deliver measurable business results for modern digital brands.
          </p>
        </motion.div>
      </div>

      {/* Scroll track for sticky stacking cards */}
      <div
        ref={containerRef}
        className={styles.scrollTrack}
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className={styles.stickyViewport}>
          <div className={styles.container}>
            <div className={styles.cardsStack}>
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  total={projects.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


