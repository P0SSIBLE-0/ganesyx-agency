import React from 'react';
import Link from 'next/link';
import styles from './BlogCard.module.css';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <span className={styles.categoryTag}>{blog.category}</span>
        <img
          src={blog.image}
          alt={blog.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{blog.date}</span>
          <span className={styles.dot}></span>
          <span>{blog.readTime}</span>
        </div>
        <h3 className={styles.title}>{blog.title}</h3>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        
        <div className={styles.footer}>
          <div className={styles.readMore}>
            <span>Read More</span>
            <span className={styles.arrowIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
