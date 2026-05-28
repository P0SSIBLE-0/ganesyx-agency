'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import styles from './ContactUs.module.css';

interface ContactUsProps {
  id?: string;
}

export default function ContactUs({ id = 'contact' }: ContactUsProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

          {/* Left Column: Headings & Contact Info */}
          <div className={styles.leftCol}>
            <div className={styles.headerArea}>
              <span className={styles.tagline}>CONTACT US</span>
              <h2 className={styles.title}>
                Let's Build Something <span className={styles.brandText}>Iconic</span> Together
              </h2>
              <p className={styles.subtitle}>
                Connect with Ganesyx to discuss your branding, web development, or creative project. Our team is ready to guide your vision with expertise and creativity.
              </p>
            </div>

            <div className={styles.infoArea}>
              <h3 className={styles.infoTitle}>Contact Info</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>CALL US</span>
                    <a href="tel:+995555555555" className={styles.infoValue}>(+995) 555-55-55-55</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>MAIL US</span>
                    <a href="mailto:hello@ganesyx.com" className={styles.infoValue}>hello@ganesyx.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>FIND US</span>
                    <span className={styles.infoValue}>67 Wisteria Way, VIC 3136</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconCircle}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>WORKING HOURS</span>
                    <span className={styles.infoValue}>Mon - Fri: 08.00 - 20.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Blue Form Card */}
          <div className={styles.rightCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="firstName" className={styles.fieldLabel}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. John"
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="lastName" className={styles.fieldLabel}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Doe"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="email" className={styles.fieldLabel}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. hello@ganesyx.com"
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="phone" className={styles.fieldLabel}>Your Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. (+1) 234-3754-7465"
                    required
                  />
                </div>
              </div>

              <div className={styles.formFieldFull}>
                <label htmlFor="message" className={styles.fieldLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div className={styles.consentContainer}>
                <label className={styles.consentLabel}>
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <span className={styles.customCheckbox}>
                    {formData.consent && <Check size={14} strokeWidth={3} className={styles.checkIcon} />}
                  </span>
                  <span className={styles.consentText}>
                    I have read and accepted terms and privacy.
                  </span>
                </label>
              </div>

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
                  <>
                    Send Message <span className={styles.arrow}>→</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

