'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Branding', href: '/branding' },
  { label: 'Video', href: '/video' },
  { label: 'Design', href: '/design' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when mobile menu is open
    if (!isOpen) {
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
              {navLinks.map((link) => (
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
              ))}
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
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerActive : ''}`}>
        <div className={styles.drawerContainer}>

          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link, index) => (
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
              ))}
              <li
                className={styles.mobileNavItem}
                style={{ '--index': navLinks.length } as React.CSSProperties}
              >
                <a
                  href="#contact"
                  className={`${styles.mobileNavLink} ${styles.mobileCtaLink}`}
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  <span className={styles.navNumber}>0{navLinks.length + 1}</span>
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Footer Widget inside Drawer */}
          <div className={styles.drawerFooter}>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Connect with us</span>
              <a href="mailto:hello@ganesyx.com" className={styles.footerValue}>hello@ganesyx.com</a>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Call us</span>
              <a href="tel:+1234567890" className={styles.footerValue}>+1 (234) 567-890</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
