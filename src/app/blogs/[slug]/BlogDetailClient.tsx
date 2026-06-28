"use client";

import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { blogs, getBlogBySlug } from "@/src/lib/blogs";
import FadeIn from "@/src/components/FadeIn";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-bhl-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bhl-gray-900 mb-2">Article Not Found</h1>
          <p className="text-bhl-gray-500 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blogs" className="text-bhl-orange font-semibold hover:underline">
            Browse All Articles →
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id && (b.category === blog.category || b.tags.some((t) => blog.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-bhl-gray-500 hover:text-bhl-orange transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-bhl-orange bg-bhl-orange-light px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-xs text-gray-400">{blog.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bhl-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-bhl-gray-500">
              <span className="font-medium text-bhl-gray-700">{blog.author}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {blog.readTime} read
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          {/* Featured Image Placeholder */}
          <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-bhl-orange-light to-white rounded-2xl flex items-center justify-center mb-10 border border-gray-100">
            <div className="w-24 h-24 rounded-full bg-bhl-orange/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-bhl-orange/40">{blog.title.charAt(0)}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-bhl-gray-500 leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            <div className="bg-bhl-orange-light rounded-2xl p-6 sm:p-8 mb-8 border border-bhl-orange/10">
              <p className="text-bhl-gray-700 font-medium text-center">
                Full article content coming soon. This is a placeholder for the complete blog post.
              </p>
            </div>

            <div className="space-y-4 text-bhl-gray-600 leading-relaxed">
              <p>
                Networking infrastructure forms the backbone of modern connectivity. Whether you're an ISP building out FTTH networks, an enterprise upgrading your data center, or a system integrator deploying CCTV systems, understanding the right products for your use case is critical.
              </p>
              <p>
                At BHL Networks, we specialize in providing high-quality, MSA-compliant networking products at dealer-friendly prices. Our catalog spans SFP modules, fiber patch cords, ethernet switches, PoE equipment, GPON products, and structured cabling solutions.
              </p>
              <h2 className="text-2xl font-bold text-bhl-gray-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                  <span>Always verify compatibility with your existing infrastructure before purchasing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                  <span>Consider future bandwidth needs when selecting fiber grades and switch capacities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                  <span>Bulk orders qualify for distributor pricing — reach out via WhatsApp for quotes.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-bhl-gray-600 rounded-full text-sm font-medium hover:bg-bhl-orange-light hover:text-bhl-orange transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors">
              <Bookmark className="w-4 h-4" /> Save
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl font-bold text-bhl-gray-900 mb-8">Related Articles</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((b, i) => (
                <FadeIn key={b.id} delay={i * 0.1}>
                  <Link href={`/blogs/${b.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-bhl-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-card-hover transition-all duration-300"
                    >
                      <span className="text-xs font-medium text-bhl-orange bg-bhl-orange-light px-2.5 py-1 rounded-full">
                        {b.category}
                      </span>
                      <h3 className="text-base font-semibold text-bhl-gray-900 mt-3 mb-2 line-clamp-2 hover:text-bhl-orange transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-sm text-bhl-gray-500 line-clamp-2">{b.excerpt}</p>
                      <div className="mt-3 text-bhl-orange text-sm font-medium flex items-center gap-1">
                        Read More <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}