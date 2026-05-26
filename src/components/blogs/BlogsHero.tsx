'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import styles from './BlogsHero.module.css';

interface BlogsHeroProps {
  onSearch: (query: string) => void;
  initialSearchValue?: string;
}

export default function BlogsHero({ onSearch, initialSearchValue = '' }: BlogsHeroProps) {
  const [query, setQuery] = useState(initialSearchValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleScrollDown = () => {
    const popularSection = document.getElementById('popular-section');
    if (popularSection) {
      popularSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Utilization of Technology to Support High-Growth Digital Brands
        </h1>
        
        <form onSubmit={handleSubmit} className={styles.searchWrapper}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for articles..."
              className={styles.input}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // Proactively filter as the user types
                onSearch(e.target.value);
              }}
            />
            <button type="submit" className={styles.searchButton}>
              <span>Search</span>
              <span className={styles.circleArrow}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className={styles.scrollDown} onClick={handleScrollDown}>
        <span>Scroll Down</span>
        <div className={styles.scrollIcon}>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
