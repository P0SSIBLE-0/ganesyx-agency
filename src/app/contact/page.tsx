import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactShowcase from '@/components/contact/ContactShowcase';
import ContactUs from '@/components/common/ContactUs';
import Consultation from '@/components/home/Consultation';

export const metadata: Metadata = {
    title: 'Contact Us | Ganesyx Agency - Start Your Project',
    description: "Get in touch with Ganesyx Agency. Tell us about your project, brand guidelines, content design or performance targets, and we'll craft a custom design.",
    keywords: ['Contact Ganesyx', 'Hire Ganesyx Agency', 'Start Project', 'Marketing Agency Contact'],
};

export default function ContactPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <ContactHero />
            {/* <ContactShowcase /> */}
            <ContactUs />
            <Consultation />
        </main>
    );
}
