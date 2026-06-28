"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Tag, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { blogs, getBlogCategories } from "@/data/blogs";
import FadeIn from "@/components/animations/FadeIn";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getBlogCategories();

  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    if (selectedCategory) {
      result = result.filter((b) => b.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const featuredBlogs = blogs.filter((b) => b.featured);

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-bhl-gray-900 mb-4">
                Networking <span className="text-gradient">Insights</span>
              </h1>
              <p className="text-lg text-bhl-gray-500">
                Expert guides, buying tips, and technical deep-dives for networking professionals.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && !selectedCategory && !searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeIn>
            <h2 className="text-xl font-semibold text-bhl-gray-900 mb-6">Featured Articles</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, i) => (
              <FadeIn key={blog.id} delay={i * 0.1}>
                <Link href={`/blogs/${blog.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="h-48 bg-gradient-to-br from-bhl-orange-light to-white flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-bhl-orange/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-bhl-orange/40">{blog.title.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-bhl-orange bg-bhl-orange-light px-2.5 py-1 rounded-full">
                          {blog.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {blog.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-bhl-gray-900 mb-2 line-clamp-2 group-hover:text-bhl-orange transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-bhl-gray-500 line-clamp-3 flex-1">{blog.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-bhl-orange text-sm font-medium">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Bar */}
        <FadeIn>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-bhl-orange"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    !selectedCategory
                      ? "bg-bhl-orange text-white"
                      : "bg-gray-100 text-bhl-gray-600 hover:bg-bhl-orange-light hover:text-bhl-orange"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-bhl-orange text-white"
                        : "bg-gray-100 text-bhl-gray-600 hover:bg-bhl-orange-light hover:text-bhl-orange"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          {filteredBlogs.length > 0 ? (
            <motion.div
              key={selectedCategory || searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredBlogs.map((blog, i) => (
                <FadeIn key={blog.id} delay={i * 0.05}>
                  <Link href={`/blogs/${blog.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="h-40 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-bhl-orange/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-bhl-orange/40">{blog.title.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-bhl-orange bg-bhl-orange-light px-2 py-0.5 rounded-full">
                            {blog.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {blog.readTime}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-bhl-gray-900 mb-2 line-clamp-2 hover:text-bhl-orange transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-bhl-gray-500 line-clamp-2 flex-1">{blog.excerpt}</p>
                        <div className="mt-3 flex items-center gap-1 flex-wrap">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-400 flex items-center gap-0.5">
                              <Tag className="w-2.5 h-2.5" /> {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 text-bhl-orange text-sm font-medium flex items-center gap-1">
                          Read More <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl border border-gray-100"
            >
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-bhl-gray-500 font-medium">No articles found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
