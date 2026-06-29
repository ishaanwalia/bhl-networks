"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, Check, Package, Shield, Truck, Zap, Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/product";
import { Blog, getBlogContent } from "@/lib/blogs";
import { formatPrice, generateWhatsAppLink, generateBulkOrderLink } from "@/lib/utils";
import FadeIn from "@/components/FadeIn";
import Badge from "@/components/Badge";
import ReactMarkdown from "react-markdown";

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-bhl-gray-500 hover:text-bhl-orange transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-bhl-orange bg-bhl-orange-light px-3 py-1 rounded-full">{blog.category}</span>
              <span className="text-xs text-gray-400">{blog.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bhl-gray-900 leading-tight mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-sm text-bhl-gray-500">
              <span className="font-medium text-bhl-gray-700">{blog.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime} read</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{blog.content || getBlogContent(blog.slug)}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-gray-400" />
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-bhl-gray-600 rounded-full text-sm font-medium hover:bg-bhl-orange-light hover:text-bhl-orange transition-colors cursor-pointer">{tag}</span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors"><Share2 className="w-4 h-4" /> Share</button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-bhl-gray-600 hover:border-bhl-orange hover:text-bhl-orange transition-colors"><Bookmark className="w-4 h-4" /> Save</button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}