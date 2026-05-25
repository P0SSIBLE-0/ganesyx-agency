import type { Metadata } from 'next';
import WebDevHero from '@/components/web-dev/WebDevHero';
import WebDevTrust from '@/components/web-dev/WebDevTrust';
import BrandMarquee from '@/components/home/BrandMarquee';
import WebDevService from '@/components/web-dev/WebDevService';
import WebDevWork from '@/components/web-dev/WebDevWork';
import WebDevTech from '@/components/web-dev/WebDevTech';
import WebDevTestimonials from '@/components/web-dev/WebDevTestimonials';
import WebDevFaq from '@/components/web-dev/WebDevFaq';
import ContactUs from '@/components/common/ContactUs';

export const metadata: Metadata = {
    title: 'Next-Gen Web Development | Ganesyx Agency',
    description: 'We build digital experiences that perform beautifully and scale confidently. Modern, lightning-fast, and conversion-focused web development built for performance and growth.',
    keywords: [
        'Web Development',
        'Next.js Development',
        'High Performance Websites',
        'Fast Loading Sites',
        'Scalable Web Apps',
        'Ganesyx Agency Services'
    ],
};

export default function WebDevPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <WebDevHero />
            <BrandMarquee />
            <WebDevTrust />
            <WebDevService />
            <WebDevWork />
            <WebDevTech />
            <WebDevTestimonials />
            <WebDevFaq />
            <ContactUs />
        </main>
    );
}
