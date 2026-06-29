"use client";

import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/lib/blogs";
import FadeIn from "@/components/FadeIn";

export default function BlogDetailClient({ blog }: { blog: Blog }) {
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
          <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-bhl-orange-light to-white rounded-2xl flex items-center justify-center mb-10 border border-gray-100">
            <div className="w-24 h-24 rounded-full bg-bhl-orange/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-bhl-orange/40">{blog.title.charAt(0)}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-bhl-gray-500 leading-relaxed mb-8">{blog.excerpt}</p>

            <div className="bg-bhl-orange-light rounded-2xl p-6 sm:p-8 mb-8 border border-bhl-orange/10">
              <p className="text-bhl-gray-700 font-medium text-center">
                Full article content coming soon. This is a placeholder for the complete blog post.
              </p>
            </div>

            <div className="space-y-4 text-bhl-gray-600 leading-relaxed">
              <p>Networking infrastructure forms the backbone of modern connectivity. Whether you are an ISP building out FTTH networks, an enterprise upgrading your data center, or a system integrator deploying CCTV systems, understanding the right products for your use case is critical.</p>
              <p>At BHL Networks, we specialize in providing high-quality, MSA-compliant networking products at dealer-friendly prices. Our catalog spans SFP modules, fiber patch cords, ethernet switches, PoE equipment, GPON products, and structured cabling solutions.</p>
              <h2 className="text-2xl font-bold text-bhl-gray-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" /><span>Always verify compatibility with your existing infrastructure before purchasing.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" /><span>Consider future bandwidth needs when selecting fiber grades and switch capacities.</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 bg-bhl-orange rounded-full mt-2 flex-shrink-0" /><span>Bulk orders qualify for distributor pricing — reach out via WhatsApp for quotes.</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-bhl-gray-600 rounded-full text-sm font-medium hover:bg-bhl-orange-light hover:text-bhl-orange transition-colors cursor-pointer">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors"><Share2 className="w-4 h-4" /> Share</button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors"><Bookmark className="w-4 h-4" /> Save</button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}