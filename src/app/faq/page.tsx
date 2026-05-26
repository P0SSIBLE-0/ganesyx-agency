import type { Metadata } from 'next';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = {
  title: 'FAQs & Support | Ganesyx Agency - Frequently Asked Questions',
  description: 'Got questions about our services? Find comprehensive answers about web development, branding, SEO, GEO, paid advertising, video production, and marketplace solutions.',
  keywords: [
    'Ganesyx FAQs',
    'Web Development questions',
    'SEO FAQ',
    'GEO optimization questions',
    'Branding process timeline',
    'Paid ads optimization pricing',
    'Agency support'
  ],
};

export default function FaqPage() {
  return <FaqPageClient />;
}
