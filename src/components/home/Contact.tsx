'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={sectionRef} className={`${styles.contact} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.noise} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLabel}>
            <span className={styles.labelDot} />
            <span>Start a project</span>
          </div>
          <h2 className={styles.heading}>
            Let&apos;s create<br />
            something<br />
            <span className={styles.headingItalic}>iconic</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <p className={styles.introText}>
              We partner with ambitious brands to build digital products that define categories. Tell us about your vision, and we&apos;ll help you bring it to life.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:hello@ganesyx.com" className={styles.linkItem}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>hello@ganesyx.com</span>
                <svg className={styles.linkArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+1234567890" className={styles.linkItem}>
                <span className={styles.linkLabel}>Phone</span>
                <span className={styles.linkValue}>+1 (234) 567-890</span>
                <svg className={styles.linkArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={styles.socials}>
              <span className={styles.socialLabel}>Socials</span>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>Tw</a>
                <a href="#" className={styles.socialLink}>Li</a>
                <a href="#" className={styles.socialLink}>Ig</a>
                <a href="#" className={styles.socialLink}>Dr</a>
              </div>
            </div>
          </div>

          <div id='contact' className={styles.rightCol}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <label htmlFor="name" className={`${styles.label} ${focusedField === 'name' || formData.name ? styles.active : ''}`}>
                    Name
                  </label>
                  <div className={styles.line} />
                </div>

                <div className={styles.field}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <label htmlFor="email" className={`${styles.label} ${focusedField === 'email' || formData.email ? styles.active : ''}`}>
                    Email
                  </label>
                  <div className={styles.line} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <label htmlFor="company" className={`${styles.label} ${focusedField === 'company' || formData.company ? styles.active : ''}`}>
                    Company
                  </label>
                  <div className={styles.line} />
                </div>

                <div className={styles.field}>
                  <input
                    type="text"
                    name="services"
                    id="services"
                    value={formData.services}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('services')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <label htmlFor="services" className={`${styles.label} ${focusedField === 'services' || formData.services ? styles.active : ''}`}>
                    Services needed
                  </label>
                  <div className={styles.line} />
                </div>
              </div>

              <div className={styles.field}>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <label htmlFor="message" className={`${styles.label} ${focusedField === 'message' || formData.message ? styles.active : ''}`}>
                  Project details
                </label>
                <div className={styles.line} />
              </div>

              <div className={styles.submitWrapper}>
                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  <span className={styles.submitText}>Send inquiry</span>
                  <span className={styles.submitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <p className={styles.note}>We typically respond within 24 hours.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
