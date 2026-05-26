import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogsData } from '@/data/blogs';
import BlogPostDetail from '@/components/blogs/BlogPostDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO benefits
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found | Ganesyx Agency",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${blog.title} | Ganesyx Agency Blog`,
    description: blog.excerpt,
    keywords: [blog.category, "Ganesyx Agency", "Tech Insights", blog.author.name],
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Find up to 3 related articles in the same category, excluding the current post
  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <main style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <BlogPostDetail blog={blog} relatedBlogs={relatedBlogs} />
    </main>
  );
}

// Pre-render static paths for performance benefits
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}
