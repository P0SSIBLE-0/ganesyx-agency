import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './PrivacyPolicy.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | Ganesyx Agency",
  description: "Learn how Ganesyx Agency collects, uses, and safeguards your personal data when utilizing our web development, branding, paid ads, SEO, and AI services.",
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className={styles.wrapper}>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: May 26, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            At Ganesyx Agency (“we”, “our”, or “us”), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our Web Development, Search Engine Optimization (SEO), Paid Ads, Video Production, Branding, and AI Solutions services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or submit personal information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the website includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, company name, and project requirements, which you voluntarily provide when contacting us or submitting inquiry forms.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the site and improve your experience.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul>
            <li>Deliver web development, branding, advertising, and optimization services.</li>
            <li>Respond to client inquiries, send project updates, and manage consultations.</li>
            <li>Deliver newsletters, marketing materials, and industry insights.</li>
            <li>Analyze usage trends to improve our platform’s user experience.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information we have collected about you in certain situations, including:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including hosting providers, analytics tools (such as Google Analytics), email delivery, and customer relationship management (CRM) software.
            </li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul>
            <li>The right to access and receive a copy of the personal data we hold about you.</li>
            <li>The right to request correction or rectification of any inaccurate personal data.</li>
            <li>The right to request the deletion or erasure of your personal data under certain conditions.</li>
            <li>The right to object to or restrict our processing of your personal data.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details provided below.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please email us at <a href="mailto:hello@ganesyx.com">hello@ganesyx.com</a> or reach out through our <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
