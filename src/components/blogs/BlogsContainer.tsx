'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './BlogsContainer.module.css';
import { BlogPost } from '@/data/blogs';
import BlogsHero from './BlogsHero';
import BlogCard from './BlogCard';
import PopularCard from './PopularCard';
import ProjectCTA from './ProjectCTA';

interface BlogsContainerProps {
  initialBlogs: BlogPost[];
}

const CATEGORIES = [
  'All',
  'Web Development',
  'SEO',
  'Branding',
  'Paid Ads',
  'AI Solutions',
  'Video Production'
];

const PAGE_SIZE = 6;

export default function BlogsContainer({ initialBlogs }: BlogsContainerProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Handle instant search trigger
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Filter entire blog catalog based on category and search query
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesCategory =
        activeCategory === 'All' || blog.category === activeCategory;
      
      const matchesSearch =
        searchQuery === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, activeCategory, searchQuery]);

  // Layout split logic
  const isDefaultView = activeCategory === 'All' && searchQuery === '';

  const { featuredPopular, popularList, latestList } = useMemo(() => {
    if (isDefaultView) {
      const featured = initialBlogs.find((b) => b.isFeaturedPopular);
      const popular = initialBlogs.filter((b) => b.isPopular);
      // Exclude featured and popular from the latest grid in default view
      const latest = initialBlogs.filter((b) => !b.isFeaturedPopular && !b.isPopular);
      return { featuredPopular: featured, popularList: popular, latestList: latest };
    } else {
      // In search or filter mode, everything matches goes to the latest list
      return { featuredPopular: undefined, popularList: [], latestList: filteredBlogs };
    }
  }, [initialBlogs, filteredBlogs, isDefaultView]);

  // Paginated latest grid items
  const totalPages = Math.ceil(latestList.length / PAGE_SIZE);
  
  const paginatedLatest = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return latestList.slice(start, start + PAGE_SIZE);
  }, [latestList, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll back to top of latest grid section
      const target = document.getElementById('latest-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Render pagination numbers array
  const paginationRange = useMemo(() => {
    const range: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
    // If total pages is high, we could slice and add '...', but with 2 or 3 pages standard simple range is clean.
    return range;
  }, [totalPages]);

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <>
      <BlogsHero onSearch={handleSearch} initialSearchValue={searchQuery} />

      <section id="popular-section" className={styles.blogsContainer}>
        <div className={styles.innerContainer}>
          {/* Category Navigation Bar */}
          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`${styles.filterTag} ${
                  activeCategory === cat ? styles.activeFilterTag : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Popular Section — Only visible in default 'All' category and empty search */}
          {isDefaultView && (featuredPopular || popularList.length > 0) && (
            <div className={styles.popularSection}>
              <h2 className={styles.sectionHeading}>Popular Articles</h2>
              <div className={styles.popularGrid}>
                {/* Large Featured Card */}
                {featuredPopular && (
                  <Link
                    href={`/blogs/${featuredPopular.slug}`}
                    className={styles.featuredCard}
                  >
                    <div className={styles.featuredImageWrapper}>
                      <span className={styles.featuredTag}>Featured</span>
                      <img
                        src={featuredPopular.image}
                        alt={featuredPopular.title}
                        className={styles.featuredImage}
                      />
                    </div>
                    <div className={styles.featuredContent}>
                      <div className={styles.featuredMeta}>
                        <span>{featuredPopular.date}</span>
                        <span className={styles.dot}></span>
                        <span>{featuredPopular.readTime}</span>
                      </div>
                      <h3 className={styles.featuredTitle}>
                        {featuredPopular.title}
                      </h3>
                      <p className={styles.featuredExcerpt}>
                        {featuredPopular.excerpt}
                      </p>
                      <div className={styles.featuredFooter}>
                        <div className={styles.featuredAuthor}>
                          <img
                            src={featuredPopular.author.avatar}
                            alt={featuredPopular.author.name}
                            className={styles.featuredAvatar}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${featuredPopular.author.name}`;
                            }}
                          />
                          <div className={styles.featuredAuthorInfo}>
                            <span className={styles.featuredAuthorName}>
                              {featuredPopular.author.name}
                            </span>
                            <span className={styles.featuredAuthorRole}>
                              {featuredPopular.author.role}
                            </span>
                          </div>
                        </div>
                        <div className={styles.featuredReadMore}>
                          <span>Read Article</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Popular List (3 cards) */}
                <div className={styles.popularList}>
                  {popularList.map((blog) => (
                    <PopularCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Latest Articles Section */}
          <div id="latest-section" className={styles.latestSection}>
            <h2 className={styles.sectionHeading}>
              {isDefaultView ? 'Latest Articles' : 'Search Results'}
            </h2>

            {paginatedLatest.length > 0 ? (
              <>
                <div className={styles.latestGrid}>
                  {paginatedLatest.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className={styles.paginationRow}>
                    <div className={styles.pagination}>
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.pageBtn}
                      >
                        <ArrowLeft size={16} />
                        <span>Previous</span>
                      </button>

                      {paginationRange.map((page, index) => {
                        if (typeof page === 'number') {
                          return (
                            <button
                              key={index}
                              onClick={() => handlePageChange(page)}
                              className={`${styles.pageNum} ${
                                currentPage === page ? styles.activePageNum : ''
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else {
                          return (
                            <span key={index} className={styles.dots}>
                              {page}
                            </span>
                          );
                        }
                      })}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={styles.pageBtn}
                      >
                        <span>Next</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty state when no blogs match filters */
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>No articles found</h3>
                <p className={styles.emptyText}>
                  We couldn’t find any articles matching your search query or selected category.
                </p>
                <button onClick={clearFilters} className={styles.clearBtn}>
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
