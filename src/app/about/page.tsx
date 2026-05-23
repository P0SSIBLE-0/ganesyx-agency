import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import BrandMarquee from '@/components/home/BrandMarquee';
import BrandGrow from '@/components/home/BrandGrow';
import MissionSection from '@/components/about/MissionSection';
import Testimonials from '@/components/home/Testimonials';
import ContactUs from '@/components/common/ContactUs';
import Consultation from '@/components/home/Consultation';
import TextMarquee from '@/components/home/TextMarquee';

export const metadata: Metadata = {
    title: 'About Our Team | Ganesyx Agency',
    description: 'Meet the brand builders behind Ganesyx Agency. Learn about our vision, our dedicated team, and how we help brands scale with premium designs and marketing strategies.',
    keywords: [
        'About Ganesyx',
        'Brand Builders',
        'Marketing Team',
        'Ganesyx Agency Team',
        'Web Development Team',
        'About Us'
    ],
};

const Track1 = Array(8).fill('DIGITAL FIRST. RESULTS DRIVEN.');
const Track2 = Array(8).fill('CREATIVE STRATEGY. POWERFUL GROWTH.');
export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <AboutHero />
            <BrandMarquee />
            <BrandGrow imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" />
            <MissionSection />
            <TextMarquee track1={Track1} track2={Track2} />
            <Testimonials />
            <Consultation />
            <ContactUs />
        </main>
    );
}


