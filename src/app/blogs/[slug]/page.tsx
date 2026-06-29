import { blogs, getBlogBySlug } from "@/lib/blogs";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return <BlogDetailClient blog={blog} slug={slug} />;
}