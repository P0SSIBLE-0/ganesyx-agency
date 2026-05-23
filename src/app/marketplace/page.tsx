import type { Metadata } from 'next';
import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import MarketplaceLogos from '@/components/marketplace/MarketplaceLogos';
import MarketplaceServices from '@/components/marketplace/MarketplaceServices';
import MarketplaceCategories from '@/components/marketplace/MarketplaceCategories';
import MarketplaceProcess from '@/components/marketplace/MarketplaceProcess';
import MarketplaceWhy from '@/components/marketplace/MarketplaceWhy';
import MarketplaceSuccess from '@/components/marketplace/MarketplaceSuccess';
import { BrandingFaq } from '@/components/branding';
import ContactUs from '@/components/common/ContactUs';

export const metadata: Metadata = {
    title: 'Marketplace E-commerce Strategies | Ganesyx Agency',
    description: 'Scale your sales on Amazon, Shopify, and Flipkart. We help brands optimize product listings, improve discoverability, create high-converting creatives, and scale sales across leading e-commerce marketplaces.',
    keywords: [
        'E-commerce Marketplace',
        'Amazon Optimization',
        'Shopify Growth',
        'Flipkart Marketing',
        'Product Listing Optimization',
        'E-commerce Creatives',
        'Marketplace Strategy',
        'Ganesyx Agency'
    ],
};

const faqData = [
    {
        question: "Which marketplaces do you support?",
        answer: "Amazon, Flipkart, Myntra, Etsy, Shopify, Walmart, and more."
    },
    {
        question: "Do you create product images?",
        answer: "Yes. We create marketplace-ready visuals and infographics."
    },
    {
        question: "Do you manage marketplace ads?",
        answer: "Yes. We handle campaign setup, optimization, and scaling."
    },
    {
        question: "Can you optimize existing listings?",
        answer: "Absolutely. We improve SEO, visuals, and conversion performance."
    },
    {
        question: "Do you create A+ content?",
        answer: "Yes. Enhanced product storytelling and branded layouts are included."
    },
    {
        question: "How long before results?",
        answer: "Performance improvements usually begin within the first few weeks after optimization."
    }
];

export default function MarketplacePage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <MarketplaceHero />
            <MarketplaceLogos />
            <MarketplaceSuccess />
            <MarketplaceServices />
            <MarketplaceCategories />
            <MarketplaceProcess />
            <MarketplaceWhy />
            <BrandingFaq data={faqData} />
            <ContactUs />
        </main>
    );
}

