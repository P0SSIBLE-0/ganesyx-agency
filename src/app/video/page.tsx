import type { Metadata } from 'next';
import { VideoHero, WhatWeMake, VideoWork, VideoProcess, WhyWorkWithUs } from '@/components/video';
import { BrandingFaq } from '@/components/branding';
import CtaSection from '@/components/common/CtaSection';
import { videoData } from '@/data/video';

export const metadata: Metadata = {
    title: "Video Production & Ad Creative Services | Ganesyx Agency",
    description: "We create scroll-stopping brand videos, high-converting ad creatives, and engaging short-form content designed for immediate attention and action.",
    keywords: ["Video Production", "Ad Creative Services", "Short-form Video Content", "Social Media Video Ads", "Scroll Stopping Video", "Ganesyx Agency"],
};

export default function VideoPage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--brand)' }}>
            {/* 1. Hero */}
            <VideoHero />

            {/* 2. What We Make */}
            <WhatWeMake />

            {/* 3. Video Work Portfolio */}
            <VideoWork />

            {/* 4. Collaborative Process */}
            <VideoProcess />

            {/* 5. Why Work With Us */}
            <WhyWorkWithUs />

            {/* 6. FAQ */}
            <BrandingFaq data={videoData.faq} />

            {/* 7. Final CTA */}
            <CtaSection data={videoData.cta} />
        </main>
    );
}

