import type { Metadata } from 'next';
import BlogsContainer from '@/components/blogs/BlogsContainer';
import { blogsData } from '@/data/blogs';

export const metadata: Metadata = {
  title: "Insights & Digital Strategies | Ganesyx Agency",
  description: "Explore the latest insights, strategies, and tutorials on web development, SEO, branding, paid ads, video production, and AI solutions from the experts at Ganesyx.",
  keywords: ["Ganesyx Blogs", "Web Development Blog", "Digital Marketing Insights", "SEO Strategies", "AI Solutions Guide", "Branding Design Trends"],
};

export default function BlogsPage() {
  return (
    <main style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <BlogsContainer initialBlogs={blogsData} />
    </main>
  );
}
