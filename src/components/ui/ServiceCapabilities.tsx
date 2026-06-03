'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Settings,
  FileText,
  Sparkles,
  MapPin,
  Link2,
  Activity,
  BarChart3,
  Check,
  HelpCircle,
  Code,
  Database,
  Search,
  Globe,
  Image,
  Pencil,
  ShoppingBag,
  Share2,
  Users,
  ArrowRight,
  type LucideIcon
} from 'lucide-react';
import { Heading, Paragraph, Badge } from '@/components/ui/Typography';
import styles from './ServiceCapabilities.module.css';

// Type mapping for dynamic icons
const iconMap: Record<string, LucideIcon> = {
  settings: Settings,
  fileText: FileText,
  sparkles: Sparkles,
  mapPin: MapPin,
  link2: Link2,
  activity: Activity,
  barChart: BarChart3,
  code: Code,
  database: Database,
  search: Search,
  globe: Globe,
  image: Image,
  pencil: Pencil,
  shoppingBag: ShoppingBag,
  share: Share2,
  users: Users
};

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  details?: string[];
}

interface ServiceCapabilitiesProps {
  subHeading: string;
  title: string;
  description: string;
  items: CapabilityItem[];
  backgroundColor?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function ServiceCapabilities({
  subHeading,
  title,
  description,
  items,
  backgroundColor = '#f7f6fc' // Default brand-tint background
}: ServiceCapabilitiesProps) {
  return (
    <section className={styles.section} style={{ backgroundColor }}>
      <div className={styles.container}>

        {/* Header Section */}
        <div className={styles.header}>
          <Badge>{subHeading}</Badge>
          <Heading level={2} className={styles.title}>{title}</Heading>
          <Paragraph variant="lead" className={styles.description}>{description}</Paragraph>
        </div>

        {/* Flat Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || HelpCircle;
            return (
              <motion.div
                key={index}
                className={`${styles.card} ${styles['card' + (index % 6)]}`}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.number}>{item.number}</span>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={20} />
                  </div>
                </div>

                <Heading level={3} className={styles.cardTitle}>{item.title}</Heading>
                <Paragraph variant="default" className={styles.cardText}>{item.description}</Paragraph>

                {/* Details List */}
                {item.details && item.details.length > 0 && (
                  <ul className={styles.bulletList}>
                    {item.details.map((detail, dIndex) => (
                      <li key={dIndex} className={styles.bulletItem}>
                        <Check size={12} className={styles.bulletIcon} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}

          {/* Hardcoded GEO Card */}
          <motion.div
            className={`${styles.card} ${styles['card' + (items.length % 6)]}`}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.number}>09</span>
              <div className={styles.iconWrapper}>
                <Sparkles size={20} />
              </div>
            </div>

            <Heading level={3} className={styles.cardTitle}>Generative Engine Optimization (GEO)</Heading>
            <Paragraph variant="default" className={styles.cardText}>
              Optimize your digital footprint to ensure your brand is cited, sourced, and recommended by AI generative search engines like ChatGPT Search, Gemini, and Perplexity.
            </Paragraph>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <Check size={12} className={styles.bulletIcon} />
                <span>AI citation tracking & sentiment audits</span>
              </li>
              <li className={styles.bulletItem}>
                <Check size={12} className={styles.bulletIcon} />
                <span>Content structuring for LLM extraction</span>
              </li>
              <li className={styles.bulletItem}>
                <Check size={12} className={styles.bulletIcon} />
                <span>Brand citation density & authority building</span>
              </li>
            </ul>

            <a href="/geo" className={styles.cardButton}>
              <span>Explore GEO Solutions</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
