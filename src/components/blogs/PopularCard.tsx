import React from 'react';
import Link from 'next/link';
import styles from './PopularCard.module.css';
import { BlogPost } from '@/data/blogs';

interface PopularCardProps {
  blog: BlogPost;
}

export default function PopularCard({ blog }: PopularCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={blog.image}
          alt={blog.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{blog.date}</span>
        <h4 className={styles.title}>{blog.title}</h4>
      </div>
    </Link>
  );
}
