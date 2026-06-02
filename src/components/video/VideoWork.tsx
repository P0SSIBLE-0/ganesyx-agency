'use client';

import { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from './VideoWork.module.css';
import { videoProjects, type VideoProject } from '@/data/work';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function ProjectCard({ project }: { project: VideoProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div className={styles.mediaWrapper}>
        {/* Play Button Overlay */}
        <div className={styles.playBtn}>
          <Play size={18} className={styles.playIcon} />
        </div>

        {/* Thumbnail Image */}
        <img
          src={project.image}
          alt={project.title}
          className={styles.thumbnail}
          loading="lazy"
        />

        {/* Hover Video Preview */}
        <video
          ref={videoRef}
          src={project.video}
          className={styles.hoverVideo}
          loop
          muted
          playsInline
        />
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <a href="#" className={styles.detailsLink}>
        Project Details <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function VideoWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <span className={styles.subTitle}>Featured Work</span>
        <h2 className={styles.title}>High-Converting Video Ads & Brand Stories</h2>

        {/* 12-Column Asymmetric Stagger Grid */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {videoProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={cardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
