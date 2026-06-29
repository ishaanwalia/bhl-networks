"use client";

import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { Blog, getBlogContent, blogs } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";

export default function BlogDetailClient({ blog, slug }: { blog: Blog | undefined; slug: string }) {
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

  const content = getBlogContent(slug);

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

          {/* Excerpt */}
          <p className="text-lg text-bhl-gray-500 leading-relaxed mb-8">
            {blog.excerpt}
          </p>

          {/* Full Article Content */}
          <article className="prose prose-lg max-w-none prose-headings:text-bhl-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-bhl-gray-600 prose-p:leading-relaxed prose-strong:text-bhl-gray-800 prose-ul:space-y-2 prose-li:text-bhl-gray-600 prose-li:marker:text-bhl-orange prose-table:border-collapse prose-th:bg-bhl-orange-light prose-th:text-bhl-gray-800 prose-th:font-semibold prose-th:p-3 prose-th:text-left prose-td:p-3 prose-td:text-bhl-gray-600 prose-td:border prose-td:border-gray-200 prose-tr:nth-child(even):bg-gray-50 prose-code:text-bhl-orange prose-code:bg-bhl-orange-light prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-blockquote:border-l-4 prose-blockquote:border-bhl-orange prose-blockquote:bg-bhl-orange-light/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-bhl-gray-700">
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
          </article>

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

// Simple markdown-to-HTML renderer (no external dependency needed)
function renderMarkdown(md: string): string {
  let html = md
    // Escape HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold & Italic
    .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Code blocks
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Blockquotes
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    // Unordered lists
    .replace(/^\s*[-*] (.*$)/gim, "<li>$1</li>")
    // Ordered lists
    .replace(/^\s*\d+\. (.*$)/gim, "<li>$1</li>")
    // Tables (simple)
    .replace(/\|(.+?)\|/g, (match, content) => {
      const cells = content.split("|").map((c: string) => c.trim()).filter(Boolean);
      if (cells.length === 0) return "";
      return "<td>" + cells.join("</td><td>") + "</td>";
    })
    // Line breaks
    .replace(/\n/g, "<br/>");

  // Wrap consecutive li elements in ul
  html = html.replace(/(<li>.*?<\/li>)(?=(<br\/>)?<li>|$)/gs, (match) => {
    return "<ul>" + match.replace(/<br\/>/g, "") + "</ul>";
  });

  // Wrap consecutive td elements in tr
  html = html.replace(/(<td>.*?<\/td>)+/gs, (match) => {
    return "<tr>" + match + "</tr>";
  });

  // Wrap consecutive tr elements in table
  html = html.replace(/(<tr>.*?<\/tr>)+/gs, (match) => {
    return "<table>" + match + "</table>";
  });

  return html;
}