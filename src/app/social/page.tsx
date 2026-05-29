import type { Metadata } from 'next';
import { SocialHero, ConsistencyProblem, WhatWeDo, ContentShowcase, InfluencerMarketing } from '@/components/social';
import ContactUs from '@/components/common/ContactUs';
import BrandMarquee from '@/components/home/BrandMarquee';
import { VideoProcess } from '@/components/video';
import { socialProcess } from '@/data/social';
import CtaSection from '@/components/common/CtaSection';

export const metadata: Metadata = {
    title: "Social Media Content Systems & Growth | Ganesyx Agency",
    description: "We help brands build platform-native content systems that attract organic audiences, increase active engagement, and turn user attention into measurable business growth.",
    keywords: [
        "Social Media Marketing",
        "Platform Native Content",
        "Short Form Video",
        "TikTok Marketing",
        "Instagram Growth",
        "B2B LinkedIn Campaigns",
        "Organic Growth System",
        "Ganesyx Agency"
    ],
};

export default function SocialPage() {
    const processSteps = socialProcess.map(step => ({
        id: step.phase,
        title: step.title,
        description: step.description
    }));

    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            {/* 1. Interactive Hero Section */}
            <SocialHero />

            <BrandMarquee />

            {/* 2. Consistency vs Growth Problem Gap */}
            <ConsistencyProblem />

            {/* 3. Services Grid Section */}
            <WhatWeDo />

            {/* 4. Content Showcase (Pinterest-Style Masonry) */}
            <ContentShowcase />

            {/* 4.5. Influencer Marketing Section */}
            <InfluencerMarketing />

            {/* 5. Our Social Growth Process */}
            <VideoProcess
                steps={processSteps}
                title="Our Social Growth Process."
            />

            {/* 6. Standard Contact Form Section */}
            <ContactUs id="contact" />
            <CtaSection />
        </main>
    );
}

