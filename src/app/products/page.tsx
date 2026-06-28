"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, List, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { products, categories } from "@/data/product";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Read category from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setSelectedCategory(hash);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const activeFiltersCount = (selectedCategory ? 1 : 0) + (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">
                  All Products
                </h1>
                <p className="mt-2 text-bhl-gray-500">
                  {filteredProducts.length} products available across {categories.length} categories
                </p>
              </div>
              <div className="text-sm text-bhl-gray-500">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl mb-4 hover:border-bhl-orange/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-bhl-gray-700" />
                <span className="font-medium text-bhl-gray-700">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-bhl-orange text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
            </button>

            <div className={`${showMobileFilters ? "block" : "hidden"} lg:block space-y-6`}>
              {/* Search */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-bhl-gray-900 mb-3 text-sm uppercase tracking-wider">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
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
              </div>

              {/* Categories */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-bhl-gray-900 mb-3 text-sm uppercase tracking-wider">Categories</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex justify-between items-center ${
                      !selectedCategory
                        ? "bg-bhl-orange text-white shadow-md"
                        : "text-bhl-gray-700 hover:bg-bhl-orange-light hover:text-bhl-orange"
                    }`}
                  >
                    <span className="font-medium">All Categories</span>
                    <span className={`text-xs ${!selectedCategory ? "text-white/70" : "text-gray-400"}`}>
                      {products.length}
                    </span>
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex justify-between items-center ${
                        selectedCategory === cat.id
                          ? "bg-bhl-orange text-white shadow-md"
                          : "text-bhl-gray-700 hover:bg-bhl-orange-light hover:text-bhl-orange"
                      }`}
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className={`text-xs ${selectedCategory === cat.id ? "text-white/70" : "text-gray-400"}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <AnimatePresence>
                {activeFiltersCount > 0 && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery("");
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-bhl-orange border-2 border-bhl-orange rounded-xl hover:bg-bhl-orange hover:text-white transition-all duration-200 font-medium"
                  >
                    <X className="w-4 h-4" /> Clear All Filters
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange bg-white cursor-pointer font-medium text-bhl-gray-700"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A-Z</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "grid" ? "bg-bhl-orange text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
                  title="Grid view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "list" ? "bg-bhl-orange text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div
                  key={`${viewMode}-${selectedCategory}-${sortBy}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredProducts.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-white rounded-2xl border border-gray-100"
                >
                  <div className="w-16 h-16 bg-bhl-orange-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-bhl-orange" />
                  </div>
                  <p className="text-bhl-gray-500 text-lg font-medium">No products found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your filters or search query</p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery("");
                    }}
                    className="mt-4 text-bhl-orange font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}