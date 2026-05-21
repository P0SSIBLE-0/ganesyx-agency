'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import styles from './ContactUs.module.css';

interface ContactUsProps {
  id?: string;
}

export default function ContactUs({ id = 'contact' }: ContactUsProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Contact Form Data Submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          
          {/* Left Column: Moving Gradient Card */}
          <div className={styles.leftCol}>
            <div className={styles.gradientBg} />
            <div className={styles.glassOverlay} />
            
            <div className={styles.leftContent}>
              <h2 className={styles.leftTitle}>Get in touch</h2>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Visit us</h4>
                    <p>Come say hello at our office HQ.</p>
                    <span>67 Wisteria Way Croydon South VIC 3136 AU</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <Mail size={18} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Chat to us</h4>
                    <p>Our friendly team is here to help.</p>
                    <a href="mailto:hello@ganesyx.com">hello@ganesyx.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <Phone size={18} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>Call us</h4>
                    <p>Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+1234567890">(+995) 555-55-55-55</a>
                  </div>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4>Social media</h4>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Theme Form */}
          <div className={styles.rightCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* First & Last Name */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Randomfirst"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Randomlast"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className={styles.field}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="RandomCompany"
                  required
                />
              </div>

              {/* Email */}
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Random@gmail.com"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className={styles.field}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(+995) 555-55-55-55"
                  required
                />
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what we can help you with"
                  required
                />
              </div>

              {/* Checkbox Agreement */}
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <span className={styles.checkboxCustom}>
                    {formData.consent && <Check size={14} strokeWidth={3} className={styles.checkIcon} />}
                  </span>
                  <span className={styles.checkboxText}>
                    I&apos;d like to receive more information about company. I understand and agree to the{' '}
                    <a href="/privacy" className={styles.privacyLink}>
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''}`}
                disabled={isSubmitting || submitSuccess}
              >
                {submitSuccess ? (
                  <span className={styles.successText}>Message Sent Successfully!</span>
                ) : isSubmitting ? (
                  <span className={styles.loader}>Sending...</span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
