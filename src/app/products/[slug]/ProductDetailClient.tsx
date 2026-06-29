"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, Check, ArrowRight, Package, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, Product } from "@/src/lib/product";
import { formatPrice, generateWhatsAppLink, generateBulkOrderLink } from "@/src/lib/utils";
import FadeIn from "@/src/components/FadeIn";
import ProductCard from "@/src/components/ProductCard";
import Badge from "@/src/components/Badge";

const tabs = [
  { id: "description", label: "Description" },
  { id: "specifications", label: "Specifications" },
  { id: "use-cases", label: "Use Cases" },
  { id: "types", label: "Types & Classifications" },
  { id: "pro-tips", label: "Pro Tips" },
];

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-bhl-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bhl-gray-900 mb-2">Product Not Found</h1>
          <p className="text-bhl-gray-500 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="text-bhl-orange font-semibold hover:underline">
            Browse All Products →
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);
  const whatsappLink = generateWhatsAppLink(product.name, product.price);
  const bulkLink = generateBulkOrderLink();

  const categoryName = product.category
    .split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-bhl-orange transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-bhl-orange transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/products?category=${product.category}`} className="hover:text-bhl-orange transition-colors capitalize">
              {categoryName}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-bhl-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column — Images */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="relative h-80 sm:h-96 bg-gradient-to-br from-bhl-orange-light to-white flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-bhl-orange/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-bhl-orange/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Product images coming soon
                  </div>
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant={product.badge === "Best Seller" ? "default" : product.badge === "New" ? "success" : "warning"}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                {/* Thumbnail Strip */}
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-lg border-2 flex-shrink-0 flex items-center justify-center cursor-pointer transition-all ${
                        i === 1 ? "border-bhl-orange bg-bhl-orange-light" : "border-gray-200 hover:border-bhl-orange/50"
                      }`}
                    >
                      <span className="text-xs text-gray-400">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Details */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">{product.category.replace(/-/g, ' ')}</Badge>
                  <Badge variant="outline" className="capitalize">{product.subcategory.replace(/-/g, ' ')}</Badge>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-bhl-gray-900 mb-3">
                  {product.name}
                </h1>

                {/* Short Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.shortSpecs.map((spec, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-bhl-orange-light text-bhl-orange rounded-full font-medium">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-bhl-orange">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-gray-400 text-sm">MRP (Dealer pricing on WhatsApp)</span>
                </div>

                {/* Description */}
                <p className="text-bhl-gray-500 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-bhl-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Quantity + Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-gray-50 text-bhl-gray-700 font-semibold transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-3 font-semibold text-bhl-gray-900 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-gray-50 text-bhl-gray-700 font-semibold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </a>
                </div>

                <a
                  href={bulkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-bhl-orange text-bhl-orange rounded-lg font-semibold hover:bg-bhl-orange hover:text-white transition-all duration-200"
                >
                  <Package className="w-5 h-5" />
                  Bulk Order Enquiry
                </a>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <Shield className="w-5 h-5 text-bhl-orange mx-auto mb-1" />
                    <span className="text-xs text-bhl-gray-500">1-Year Warranty</span>
                  </div>
                  <div className="text-center">
                    <Truck className="w-5 h-5 text-bhl-orange mx-auto mb-1" />
                    <span className="text-xs text-bhl-gray-500">Same-Day Dispatch</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-bhl-orange mx-auto mb-1" />
                    <span className="text-xs text-bhl-gray-500">MSA Compliant</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Tab Headers */}
              <div className="border-b border-gray-100 overflow-x-auto">
                <div className="flex min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap relative ${
                        activeTab === tab.id
                          ? "text-bhl-orange"
                          : "text-bhl-gray-500 hover:text-bhl-gray-700"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-bhl-orange"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === "description" && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-bhl-gray-900 mb-3">Product Description</h3>
                          <p className="text-bhl-gray-500 leading-relaxed">{product.description}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-bhl-gray-900 mb-3">Key Features</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-bhl-orange-light flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-bhl-orange" />
                                </div>
                                <span className="text-bhl-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-bhl-gray-900 mb-3">What's in the Box</h3>
                          <ul className="space-y-2">
                            {product.inBox.map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-bhl-gray-700">
                                <Package className="w-4 h-4 text-bhl-orange" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-bhl-orange-light rounded-xl p-4">
                          <p className="text-sm text-bhl-orange-dark font-medium">
                            <Shield className="w-4 h-4 inline mr-2" />
                            {product.warranty}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "specifications" && (
                      <div>
                        <h3 className="text-lg font-semibold text-bhl-gray-900 mb-4">Technical Specifications</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <tbody>
                              {Object.entries(product.specifications).map(([key, value], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                  <td className="px-4 py-3 text-sm font-medium text-bhl-gray-700 w-1/3">{key}</td>
                                  <td className="px-4 py-3 text-sm text-bhl-gray-500">{value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {activeTab === "use-cases" && (
                      <div>
                        <h3 className="text-lg font-semibold text-bhl-gray-900 mb-4">Recommended Use Cases</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {product.useCases.map((useCase, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-bhl-orange/30 transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-bhl-orange-light flex items-center justify-center flex-shrink-0">
                                <Zap className="w-4 h-4 text-bhl-orange" />
                              </div>
                              <span className="text-bhl-gray-700 font-medium">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "types" && (
                      <div className="space-y-6">
                        {product.types.map((type, i) => (
                          <div key={i}>
                            <h3 className="text-lg font-semibold text-bhl-gray-900 mb-3">{type.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              {type.items.map((item, j) => (
                                <span key={j} className="px-3 py-1.5 bg-gray-100 text-bhl-gray-700 rounded-lg text-sm font-medium">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "pro-tips" && (
                      <div>
                        <h3 className="text-lg font-semibold text-bhl-gray-900 mb-4">Expert Pro Tips</h3>
                        <div className="space-y-4">
                          {product.proTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-bhl-orange-light border border-bhl-orange/20">
                              <div className="w-6 h-6 rounded-full bg-bhl-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">{i + 1}</span>
                              </div>
                              <p className="text-bhl-gray-700">{tip}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-bhl-gray-900 mb-2">Compatible With</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.compatibleWith.map((brand, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 text-bhl-gray-600 rounded-full text-xs font-medium">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-bhl-gray-900">Related Products</h2>
                  <p className="mt-1 text-bhl-gray-500">More from {categoryName}</p>
                </div>
                <Link
                  href={`/products?category=${product.category}`}
                  className="hidden sm:flex items-center gap-2 text-bhl-orange font-semibold hover:underline"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}