'use client';

import { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from './VideoWork.module.css';

interface Project {
  id: string;
  title: string;
  image: string;
  video: string;
  tags: string[];
  gridClass: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Techvision Ad Campaign',
    image: '/work-vr.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Campaign', 'Video Ad', 'Branding'],
    gridClass: styles.card1
  },
  {
    id: '02',
    title: "Short Film 'Echoes'",
    image: '/work-nature.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Movie', 'Documentary', 'Editing'],
    gridClass: styles.card2
  },
  {
    id: '03',
    title: 'Fitpro Youtube Series',
    image: '/work-fitness.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Strategy', 'Video Ad', 'Branding'],
    gridClass: styles.card3
  },
  {
    id: '04',
    title: 'Wedding Highlights for Elite Events',
    image: '/work-wedding.png',
    video: 'https://cdn.pixabay.com/video/2025/04/23/273883_large.mp4',
    tags: ['Event', 'Personal', 'Intimate'],
    gridClass: styles.card4
  }
];

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

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
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
        
        <span className={styles.subTitle}>Notable Projects</span>
        <h2 className={styles.title}>Transforming Raw Footage Into Masterpieces</h2>

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
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className={project.gridClass}
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
