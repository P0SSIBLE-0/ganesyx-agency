'use client';

import React, { useState } from 'react';
import { Mail, Phone, Globe, Check } from 'lucide-react';
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

          {/* Left Column: Form & Info */}
          <div className={styles.leftCol}>
            <div className={styles.formHeader}>
              <h2 className={styles.title}>
                Get in <span className={styles.purpleText}>touch</span>
              </h2>
              <p className={styles.subtitle}>
                Whether you're launching a brand, scaling your content, or running performance campaigns — tell us where you're at and we'll map out exactly how we can help. Expect a response within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* First & Last Name Side by Side */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    aria-label="First Name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    aria-label="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className={styles.field}>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  aria-label="Company Name"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className={styles.field}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contact Phone"
                  aria-label="Phone Number"
                  required
                />
              </div>

              {/* Email */}
              <div className={styles.field}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  aria-label="Email"
                  required
                />
              </div>

              {/* Message */}
              <div className={styles.field}>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Let's talk about your idea"
                  aria-label="Message"
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
                    I accept the terms of service and privacy policy
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
                  'Submit'
                )}
              </button>
            </form>

            {/* Footer Contacts Row */}
            <div className={styles.footerContacts}>
              <div className={styles.footerContactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+1234567890" className={styles.contactValue}>(+995) 555-55-55-55</a>
                </div>
              </div>
              <div className={styles.footerContactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>E-MAIL</span>
                  <a href="mailto:hello@ganesyx.com" className={styles.contactValue}>hello@ganesyx.com</a>
                </div>
              </div>
              <div className={styles.footerContactItem}>
                <Globe size={18} className={styles.contactIcon} />
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>HELPDESK</span>
                  <a href="https://helpdesk.com" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>https://helpdesk.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map & Headquarters Box */}
          <div className={styles.rightCol}>
            <div className={styles.mapWrapper}>
              <img src="/map.png" alt="Ganesyx Office Map Location" className={styles.mapImage} />
              <div className={styles.mapOverlay}>
                <span className={styles.overlayLabel}>Headquarters</span>
                <h4 className={styles.overlayTitle}>Ganesyx Agency</h4>
                <p className={styles.overlayText}>67 Wisteria Way</p>
                <p className={styles.overlayText}>Croydon South VIC 3136</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
