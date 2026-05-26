import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Work', href: '/#work' },
  { label: 'Contact Us', href: '/contact' },
];

const servicesLinks: FooterLink[] = [
  { label: 'Web Development', href: '/web-dev' },
  { label: 'SEO Optimization', href: '/seo' },
  { label: 'Paid Ads', href: '/ads' },
  { label: 'Social Media', href: '/social' },
  { label: 'Branding & Creative', href: '/branding' },
  { label: 'Marketplace SEO', href: '/marketplace' },
  { label: 'UI/UX Design', href: '/design' },
  { label: 'Digital Marketing', href: '/digital-market' },
  { label: 'Video Production', href: '/video' },
];

const resourcesLinks: FooterLink[] = [
  { label: 'Latest Insights', href: '/blogs' },
  { label: 'Case Studies', href: '/#work' },
  { label: 'Agency Story', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'FAQs & Support', href: '/faq' },
];

const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="GANESYX Logo" className={styles.logoImage} />
            </Link>
            <p className={styles.tagline}>
              Building bold digital experiences that drive real growth for ambitious brands worldwide.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <div className={styles.links}>
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <div className={styles.links}>
              {servicesLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <div className={styles.links}>
              {resourcesLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Ganesyx Agency. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.legalLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
