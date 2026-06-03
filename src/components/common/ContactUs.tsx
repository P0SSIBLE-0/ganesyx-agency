'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, type LucideIcon } from 'lucide-react';
import styles from './ContactUs.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

interface ContactUsProps {
  id?: string;
}

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: Phone,
    label: 'CALL US',
    value: '(+91) 920-546-6534',
    href: 'tel:+919205466534',
  },
  {
    icon: Mail,
    label: 'MAIL US',
    value: 'info.ganesyx@gmail.com',
    href: 'mailto:info.ganesyx@gmail.com',
  },
  {
    icon: MapPin,
    label: 'FIND US',
    value: 'Prashant Vihar, Sector 14, Rohini, Delhi, 110085, India',
    href: 'https://www.google.com/maps/place/Ganesyx+Private+Limited+%7C+Best+Digital+Marketing+Agency+in+Delhi/@28.7148831,77.1387015,17z/data=!3m1!4b1!4m6!3m5!1s0x390d013cad083af7:0xee3c42742c8c8191!8m2!3d28.7148831!4d77.1387015!16s%2Fg%2F11m67l4vm3?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: Clock,
    label: 'WORKING HOURS',
    value: 'Mon - Sat: 08.00 - 7.00',
  },
];

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
              <Badge>CONTACT US</Badge>
              <Heading>Let's Build Something <span className={styles.brandText}>Iconic</span> Together</Heading>
              <Paragraph>
                Connect with Ganesyx to discuss your branding, web development, or creative project. Our team is ready to guide your vision with expertise and creativity.
              </Paragraph>
            </div>

            <div className={styles.infoArea}>
              <h3 className={styles.infoTitle}>Contact Info</h3>
              <div className={styles.infoGrid}>
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className={styles.infoItem}>
                    <div className={styles.iconCircle}>
                      <Icon size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{label}</span>
                      {href ? (
                        <a href={href} className={styles.infoValue}>{value}</a>
                      ) : (
                        <span className={styles.infoValue}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
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

