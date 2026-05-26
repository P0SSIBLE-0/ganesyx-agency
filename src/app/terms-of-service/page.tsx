import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './TermsOfService.module.css';

export const metadata: Metadata = {
  title: "Terms of Service | Ganesyx Agency",
  description: "Read the Terms of Service for Ganesyx Agency. Understand client obligations, service deliverables, intellectual property terms, and legal regulations.",
};

export default function TermsOfServicePage() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: May 26, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            Welcome to Ganesyx Agency. These Terms of Service (“Terms”) govern your access to and use of our website and our professional services, including Web Development, Search Engine Optimization (SEO), Paid Ads Management, Video Production, Branding, and AI Solutions development.
          </p>
          <p>
            By accessing our website or engaging with our services, you agree to be bound by these Terms. If you do not agree to all of these Terms, you are prohibited from using the site and our services.
          </p>

          <h2>1. Professional Services & Agreements</h2>
          <p>
            Ganesyx Agency provides professional marketing, design, and software engineering services. Specific project deliverables, budgets, milestones, and timelines will be defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties. In the event of a conflict between these Terms and a signed SOW, the terms of the signed SOW will control.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, Ganesyx Agency retains all right, title, and interest in and to our proprietary tools, software scripts, design systems, and methodologies utilized to build client deliverables. 
          </p>
          <p>
            Upon receipt of full and final payment, the client is granted a perpetual, worldwide, royalty-free, exclusive license to utilize the custom deliverables, graphics, and code built specifically for their project as outlined in the Statement of Work.
          </p>

          <h2>3. Client Responsibilities & Obligations</h2>
          <p>
            To ensure successful project execution, clients agree to:
          </p>
          <ul>
            <li>Provide timely feedback, assets, and approvals as requested.</li>
            <li>Ensure all supplied content, media, and materials do not infringe upon third-party copyrights or intellectual property rights.</li>
            <li>Maintain confidentiality of any proprietary software, strategies, or methodologies shared by Ganesyx during project collaborations.</li>
          </ul>

          <h2>4. Payments and Fees</h2>
          <p>
            Clients agree to pay all fees associated with the selected services in accordance with the billing terms established in the SOW or Service Agreement. Unless otherwise specified, invoices are due within fifteen (15) days of receipt. Late payments may result in suspension of ongoing services or delay in project milestones.
          </p>

          <h2>5. Warranties & Limitation of Liability</h2>
          <p>
            Our services are provided on an “as is” and “as available” basis. Ganesyx Agency makes no warranties, express or implied, regarding the performance, uptime, or conversion results of custom developments or marketing campaigns. 
          </p>
          <p>
            To the maximum extent permitted by law, Ganesyx Agency will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
          </p>

          <h2>6. Termination</h2>
          <p>
            Either party may terminate a project collaboration in accordance with the termination clauses defined in the signed SOW. Upon termination, the client agrees to pay Ganesyx Agency for all work completed and expenses incurred up to the effective date of termination.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms and any dispute arising out of or related to them will be governed by and construed in accordance with the laws of the jurisdiction in which Ganesyx Agency operates, without regard to its conflict of law principles.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate updates by revising the “Last Updated” date at the top of this page. Your continued use of our website or services after any modifications constitutes acceptance of the new Terms.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:hello@ganesyx.com">hello@ganesyx.com</a> or visit our <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
