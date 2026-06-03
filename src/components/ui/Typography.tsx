import React from 'react';
import styles from './Typography.module.css';

// === Heading Component ===
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export function Heading({ level = 2, children, className = '', ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  
  // Resolve class name
  let levelClass = styles.h2;
  if (level === 1) levelClass = styles.h1;
  else if (level === 3) levelClass = styles.h3;
  else if (level === 4) levelClass = styles.h4;

  const combinedClass = `${levelClass} ${className}`.trim();

  return (
    <Tag className={combinedClass} {...props}>
      {children}
    </Tag>
  );
}

// === SubHeading Component ===
interface SubHeadingProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SubHeading({ children, className = '', ...props }: SubHeadingProps) {
  const combinedClass = `${styles.subHeading} ${className}`.trim();

  return (
    <span className={combinedClass} {...props}>
      {children}
    </span>
  );
}

// === Paragraph Component ===
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'lead' | 'small';
  children: React.ReactNode;
}

export function Paragraph({ variant = 'default', children, className = '', ...props }: ParagraphProps) {
  let variantClass = styles.pDefault;
  if (variant === 'lead') variantClass = styles.pLead;
  else if (variant === 'small') variantClass = styles.pSmall;

  const combinedClass = `${variantClass} ${className}`.trim();

  return (
    <p className={combinedClass} {...props}>
      {children}
    </p>
  );
}

// === Badge Component ===
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  const combinedClass = `${styles.badge} ${className}`.trim();

  return (
    <span className={combinedClass} {...props}>
      {children}
    </span>
  );
}
