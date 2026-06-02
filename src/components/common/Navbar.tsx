'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

interface SubLink {
  label: string;
  href: string;
  description: string;
  image: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: SubLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: "/" },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Branding', href: '/branding', description: 'Bespoke identity design and guidelines', image: 'https://images.unsplash.com/photo-1648260295963-891038acdf99?q=80&w=764&auto=format&fit=crop' },
      { label: 'Web Development', href: '/web-dev', description: 'High-performing, AI-optimized web experiences', image: 'https://images.unsplash.com/photo-1642142785744-261a5f663d12?q=80&w=1170&auto=format&fit=crop' },
      { label: 'SEO', href: '/seo', description: 'Dominate search results with strategic SEO optimization', image: 'https://images.pexels.com/photos/16368540/pexels-photo-16368540.jpeg' },
      { label: 'GEO', href: '/geo', description: 'Optimize your brand visibility across generative engines and AI search', image: 'https://images.unsplash.com/photo-1677691824188-3e266886cb27?q=80&w=735&auto=format&fit=crop' },
      { label: 'Graphic Design', href: '/design', description: 'Scroll-stopping bento grids and templates', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=764&auto=format&fit=crop' },
      { label: 'Video Production', href: '/video', description: 'High-impact kinetic UGC social cuts', image: 'https://images.unsplash.com/photo-1651122555286-ffab5a04131a?q=80&w=1170&auto=format&fit=crop' },
      { label: 'Social Media', href: '/social', description: 'Build engaged communities and drive brand awareness across all major social platforms.', image: 'https://images.pexels.com/photos/33440157/pexels-photo-33440157.jpeg' },
      { label: 'Paid Ads', href: '/ads', description: 'Conversion-optimized performance ads', image: 'https://images.unsplash.com/photo-1654277041042-8927699fcfd2?q=80&w=1162&auto=format&fit=crop' },
      { label: "Digital Marketing", href: "/digital-market", description: "Scale your business with high-performing ad campaigns.", image: 'https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1114&auto=format&fit=crop' },
      { label: "Marketplace", href: "/marketplace", description: "Build engaged communities and drive brand awareness across all major social platforms.", image: 'https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1332&auto=format&fit=crop' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Faqs', href: '/faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState('Branding');
  const pathname = usePathname();
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, []);

  const toggleMenu = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    // Reset mobile accordion on menu toggle
    setMobileServicesOpen(false);

    // Reset scroll position of drawer container if opening
    if (nextOpen && drawerRef.current) {
      drawerRef.current.scrollTop = 0;
    }

    // Prevent body scroll when mobile menu is open
    if (nextOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Handle scroll-to-top / home link
    if (href === '#' || href === '') {
      e.preventDefault();
      setIsOpen(false);
      document.body.style.overflow = '';
      if (pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        router.push('/');
      }
      return;
    }

    // 2. Handle sub-pages (routes that do not start with a hash '#')
    if (!href.startsWith('#')) {
      setIsOpen(false);
      document.body.style.overflow = '';
      // Let standard browser routing occur for external page links
      return;
    }

    // 3. Handle section anchors (starts with '#')
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = '';

    const targetId = href.replace('#', '');

    if (pathname === '/') {
      // If already on homepage, scroll smoothly
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = isScrolled ? 70 : 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with hash anchor
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>

          {/* Brand Logo */}
          <a href="/" className={styles.logo} onClick={(e) => handleLinkClick(e, '#')}>
            <img src="/logo.png" alt="GANESYX Logo" className={styles.logoImage} />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <li key={link.label} className={`${styles.navItem} ${styles.hasDropdown}`}>
                      <a href={link.href} className={styles.navLink} onClick={(e) => e.preventDefault()}>
                        {link.label}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.arrowIcon}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <span className={styles.linkUnderline} />
                      </a>

                      {/* Dropdown Menu Overlay */}
                      <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownGrid}>
                          {/* Left: Link List Column */}
                          <div className={styles.dropdownLinksColumn}>
                            {link.dropdown.map((subLink) => (
                              <a
                                key={subLink.label}
                                href={subLink.href}
                                className={`${styles.dropdownLink} ${hoveredService === subLink.label ? styles.activeLink : ''}`}
                                onClick={(e) => handleLinkClick(e, subLink.href)}
                                onMouseEnter={() => setHoveredService(subLink.label)}
                              >
                                <span className={styles.dropdownLabel}>{subLink.label}</span>
                                <span className={styles.dropdownDesc}>{subLink.description}</span>
                              </a>
                            ))}
                          </div>

                          {/* Right: Image Preview Column */}
                          <div className={styles.dropdownPreviewColumn}>
                            {link.dropdown.map((subLink) => (
                              <div
                                key={`img-${subLink.label}`}
                                className={`${styles.dropdownImageWrapper} ${hoveredService === subLink.label ? styles.activeImage : ''}`}
                              >
                                <img
                                  src={subLink.image}
                                  alt={subLink.label}
                                  className={styles.dropdownImage}
                                />
                                <div className={styles.dropdownImageOverlay} />
                                <span className={styles.dropdownImageCaption}>{subLink.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.label} className={styles.navItem}>
                    <a
                      href={link.href}
                      className={styles.navLink}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                      <span className={styles.linkUnderline} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Actions */}
          <div className={styles.actions}>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Let&apos;s Talk
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={styles.ctaArrow}>
                <path d="M3.5 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Toggle Burger Button for Mobile */}
            <button
              className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div ref={drawerRef} className={`${styles.mobileDrawer} ${isOpen ? styles.drawerActive : ''}`}>
        <div className={styles.drawerContainer}>

          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  return (
                    <li
                      key={link.label}
                      className={styles.mobileNavItem}
                      style={{ '--index': index } as React.CSSProperties}
                    >
                      <button
                        className={styles.mobileNavLinkButton}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        type="button"
                      >
                        <span className={styles.navNumber}>0{index + 1}</span>
                        {link.label}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className={styles.mobileArrow}
                          style={{
                            transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {/* Mobile Dropdown Sub List */}
                      <div className={`${styles.mobileSubList} ${mobileServicesOpen ? styles.mobileSubListActive : ''}`}>
                        {link.dropdown.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            className={styles.mobileSubNavLink}
                            onClick={(e) => handleLinkClick(e, subLink.href)}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </li>
                  );
                }

                return (
                  <li
                    key={link.label}
                    className={styles.mobileNavItem}
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <a
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <span className={styles.navNumber}>0{index + 1}</span>
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li
                className={styles.mobileNavItem}
                style={{ '--index': navLinks.length } as React.CSSProperties}
              >
                <a
                  href="#contact"
                  className={styles.mobileCtaLink}
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  Let&apos;s Talk
                  <svg width="16" height="16" viewBox="0 0 15 15" fill="none" className={styles.mobileCtaArrow}>
                    <path d="M3.5 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Footer Widget inside Drawer */}
          <div className={styles.drawerFooter}>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Connect with us</span>
              <a href="mailto:info.ganesyx@gmail.com" className={styles.footerValue}>info.ganesyx@gmail.com</a>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Call us</span>
              <a href="tel:+919205466534" className={styles.footerValue}>+91 92054 66534</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
