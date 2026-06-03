'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Link2, Calendar, Clock, User } from 'lucide-react';
import styles from './BlogPostDetail.module.css';
import { BlogPost } from '@/data/blogs';
import BlogCard from './BlogCard';
import ProjectCTA from './ProjectCTA';

interface BlogPostDetailProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogPostDetail({ blog, relatedBlogs }: BlogPostDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error('Failed to copy link:', err));
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Read "${blog.title}" by Ganesyx Agency`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <article className={styles.pageWrapper}>
      {/* 1. Header Metadata Section */}
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/blogs" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to all articles</span>
          </Link>
          <span className={styles.categoryTag}>{blog.category}</span>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <User size={16} />
              <span>{blog.author.name}</span>
            </div>
            <span className={styles.metaDot}></span>
            <div className={styles.metaItem}>
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <span className={styles.metaDot}></span>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>
      </div>

      {/* 2. Hero banner image */}
      <div className={styles.container}>
        <div className={styles.heroImageWrapper}>
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.heroImage}
          />
        </div>
      </div>

      {/* 3. Main content grid */}
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column: Typography Content */}
          <div className={styles.articleBody}>
            <p>{blog.content}</p>

            <h2>The Role of Integration in Business Strategy</h2>
            <p>
              In modern operations, treating engineering, design, and content creation as isolated silos is a recipe for mediocrity. High-growth brands achieve success by aligning these key pillars under a single unified roadmap. Technology shouldn’t be an afterthought to design, and design shouldn’t be constrained by technical limitations.
            </p>

            <blockquote>
              “Integration is not just about tools speaking to each other; it’s about teams speaking the same language. True digital growth begins when engineers understand design intent, and designers appreciate code constraints.”
            </blockquote>

            <h2>Key Takeaways for Decision Makers</h2>
            <p>
              When evaluating your organization’s digital workflow, keep the following milestones in mind:
            </p>
            <ul>
              <li><strong>Speed is a Core Product Metric:</strong> Users abandon pages that take more than 2 seconds to load. Performance directly dictates your conversion rate.</li>
              <li><strong>Visual Consistency Breeds Credibility:</strong> Design systems guarantee your visual language stays uniform across platforms, building buyer trust.</li>
              <li><strong>Decoupled Infrastructures Scale Better:</strong> Headless setups allow editing content once and deploying it to apps, sites, and marketing campaigns simultaneously.</li>
            </ul>

            <h3>Looking Ahead</h3>
            <p>
              As AI engines and web standards continue to evolve, the brands that invest in clean, performant, and modular technology structures will maintain a substantial competitive advantage. The best time to auditing and integrating your systems is today.
            </p>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className={styles.sidebar}>
            {/* Author Profiling */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.cardTitle}>About the Author</h3>
              <div className={styles.authorProfile}>
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className={styles.authorAvatar}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${blog.author.name}`;
                  }}
                />
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{blog.author.name}</span>
                  <span className={styles.authorRole}>{blog.author.role}</span>
                  <span className={styles.authorEmail}>{blog.author?.email || 'example@gamil.com'}</span>
                </div>
                <p className={styles.authorBio}>
                  Specialist in scaling digital presence, building high-conversion platforms, and defining clean operational standards at Ganesyx.
                </p>
              </div>
            </div>

            {/* Social Share Controls */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.cardTitle}>Share this Article</h3>
              <div className={styles.shareRow}>
                <button onClick={shareOnTwitter} className={styles.shareButton} title="Share on Twitter" aria-label="Share on Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button onClick={shareOnLinkedIn} className={styles.shareButton} title="Share on LinkedIn" aria-label="Share on LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button onClick={handleCopyLink} className={styles.shareButton} title="Copy Link" aria-label="Copy Link">
                  <Link2 size={18} />
                </button>
              </div>
              {copied && <p className={styles.copySuccess}>Link Copied to Clipboard!</p>}
            </div>

            {/* Tags Container Card */}
            {blog.tags && blog.tags.length > 0 && (
              <div className={styles.sidebarCard}>
                <h3 className={styles.cardTitle}>Tags</h3>
                <div className={styles.tagsContainer}>
                  {blog.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* 4. Bottom Related Articles list */}
      {relatedBlogs.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>Read Next</h2>
            <div className={styles.relatedGrid}>
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Business CTA */}
      <ProjectCTA />
    </article>
  );
}
