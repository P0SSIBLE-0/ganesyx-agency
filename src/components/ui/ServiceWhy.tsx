'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  TrendingDown, 
  TrendingUp, 
  Award, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { Heading, SubHeading, Paragraph } from '@/components/ui/Typography';
import styles from './ServiceWhy.module.css';

// Type mapping for dynamic icons
const iconMap: Record<string, React.ComponentType<any>> = {
  trendingDown: TrendingDown,
  trendingUp: TrendingUp,
  award: Award,
  users: Users,
  dollarSign: DollarSign,
  shieldCheck: ShieldCheck,
  checkCircle: CheckCircle
};

export interface WhyItem {
  title: string;
  description: string;
  iconName: string;
}

interface ServiceWhyProps {
  subHeading: string;
  title: string;
  description: string;
  items: WhyItem[];
  theme?: 'light' | 'dark';
  backgroundColor?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
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

export default function ServiceWhy({
  subHeading,
  title,
  description,
  items,
  backgroundColor
}: ServiceWhyProps) {
  const sectionClass = styles.section;
  const cardClass = styles.card;
  
  // Custom override logic
  const inlineStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <section className={sectionClass} style={inlineStyle}>
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <SubHeading className={styles.subHeading}>{subHeading}</SubHeading>
          <Heading level={2} className={styles.title}>{title}</Heading>
          <Paragraph variant="lead" className={styles.description}>{description}</Paragraph>
        </div>

        {/* Value Cards Grid */}
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
                className={cardClass}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={22} />
                </div>
                
                <div>
                  <Heading level={3} className={styles.cardTitle}>{item.title}</Heading>
                  <Paragraph variant="default" className={styles.cardText}>{item.description}</Paragraph>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
