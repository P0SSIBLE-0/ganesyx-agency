import type { Metadata } from 'next';
import { AdsHero, AdsStats, AdsBento, AdsAnatomy, AdsServices, AdsProcess, AdsSandbox, AdsCaseStudies } from '@/components/ads';
import ContactUs from '@/components/common/ContactUs';
import BrandMarquee from '@/components/home/BrandMarquee';

export const metadata: Metadata = {
    title: "Paid Ads & Performance Marketing | Ganesyx Agency",
    description: "Stop wasting ad spend. We design scroll-stopping, high-converting ad creatives and run data-driven campaigns on Meta, Google, and TikTok to scale your brand.",
    keywords: ["Paid Ads", "Performance Marketing", "Meta Ads", "Google Ads", "Ad Creatives", "ROAS Optimization", "Ganesyx Agency"],
};

export default function AdsPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <AdsHero />
            <BrandMarquee />
            <AdsStats />
            <AdsCaseStudies />
            <AdsServices />
            <AdsSandbox />
            <AdsBento />
            <AdsAnatomy />
            <AdsProcess />
            {/* Contact section for lead generation */}
            <ContactUs />
        </main>
    );
}
