"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, Check, Package, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import { Product } from "@/src/lib/product";
import { formatPrice, generateWhatsAppLink, generateBulkOrderLink } from "@/src/lib/utils";
import FadeIn from "@/src/components/FadeIn";
import Badge from "@/src/components/Badge";

const tabs = [
  { id: "description", label: "Description" },
  { id: "specifications", label: "Specifications" },
  { id: "use-cases", label: "Use Cases" },
  { id: "pro-tips", label: "Pro Tips" },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const whatsappLink = generateWhatsAppLink(product.name, product.price);
  const bulkLink = generateBulkOrderLink();

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      <div className="bg-white border-b border-gray-100 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-bhl-orange transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-bhl-orange transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-bhl-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="relative h-80 sm:h-96 bg-gradient-to-br from-bhl-orange-light to-white flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-bhl-orange/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-bhl-orange/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge>{product.badge}</Badge>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">{product.category.replace(/-/g, " ")}</Badge>
                  <Badge variant="outline" className="capitalize">{product.subcategory.replace(/-/g, " ")}</Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-bhl-gray-900 mb-3">{product.name}</h1>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.shortSpecs.map((spec, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-bhl-orange-light text-bhl-orange rounded-full font-medium">{spec}</span>
                  ))}
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-bhl-orange">{formatPrice(product.price)}</span>
                  <span className="text-gray-400 text-sm">MRP</span>
                </div>

                <p className="text-bhl-gray-500 leading-relaxed mb-6">{product.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-bhl-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-gray-50 font-semibold">−</button>
                    <span className="px-4 py-3 font-semibold min-w-[3rem] text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-gray-50 font-semibold">+</button>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all">
                    <MessageCircle className="w-5 h-5" /> Enquire on WhatsApp
                  </a>
                </div>

                <a href={bulkLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-bhl-orange text-bhl-orange rounded-lg font-semibold hover:bg-bhl-orange hover:text-white transition-all">
                  <Package className="w-5 h-5" /> Bulk Order Enquiry
                </a>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center"><Shield className="w-5 h-5 text-bhl-orange mx-auto mb-1" /><span className="text-xs text-bhl-gray-500">1-Year Warranty</span></div>
                  <div className="text-center"><Truck className="w-5 h-5 text-bhl-orange mx-auto mb-1" /><span className="text-xs text-bhl-gray-500">Same-Day Dispatch</span></div>
                  <div className="text-center"><Zap className="w-5 h-5 text-bhl-orange mx-auto mb-1" /><span className="text-xs text-bhl-gray-500">MSA Compliant</span></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-12">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="border-b border-gray-100 overflow-x-auto">
                <div className="flex min-w-max">
                  {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-4 text-sm font-medium whitespace-nowrap relative ${activeTab === tab.id ? "text-bhl-orange" : "text-bhl-gray-500"}`}>
                      {tab.label}
                      {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-bhl-orange" />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    {activeTab === "description" && (
                      <div className="space-y-6">
                        <div><h3 className="text-lg font-semibold mb-3">Product Description</h3><p className="text-bhl-gray-500">{product.description}</p></div>
                        <div><h3 className="text-lg font-semibold mb-3">Key Features</h3><ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">{product.features.map((f, i) => (<li key={i} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-bhl-orange-light flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-bhl-orange" /></div><span className="text-bhl-gray-700">{f}</span></li>))}</ul></div>
                        <div><h3 className="text-lg font-semibold mb-3">What is in the Box</h3><ul className="space-y-2">{product.inBox.map((item, i) => (<li key={i} className="flex items-center gap-3 text-bhl-gray-700"><Package className="w-4 h-4 text-bhl-orange" />{item}</li>))}</ul></div>
                      </div>
                    )}
                    {activeTab === "specifications" && (
                      <div><h3 className="text-lg font-semibold mb-4">Technical Specifications</h3><div className="overflow-x-auto"><table className="w-full"><tbody>{Object.entries(product.specifications).map(([key, value], i) => (<tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}><td className="px-4 py-3 text-sm font-medium text-bhl-gray-700 w-1/3">{key}</td><td className="px-4 py-3 text-sm text-bhl-gray-500">{value}</td></tr>))}</tbody></table></div></div>
                    )}
                    {activeTab === "use-cases" && (
                      <div><h3 className="text-lg font-semibold mb-4">Recommended Use Cases</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{product.useCases.map((useCase, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100"><div className="w-8 h-8 rounded-lg bg-bhl-orange-light flex items-center justify-center flex-shrink-0"><Zap className="w-4 h-4 text-bhl-orange" /></div><span className="text-bhl-gray-700 font-medium">{useCase}</span></div>))}</div></div>
                    )}
                    {activeTab === "pro-tips" && (
                      <div><h3 className="text-lg font-semibold mb-4">Expert Pro Tips</h3><div className="space-y-4">{product.proTips.map((tip, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-bhl-orange-light border border-bhl-orange/20"><div className="w-6 h-6 rounded-full bg-bhl-orange flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-white text-xs font-bold">{i + 1}</span></div><p className="text-bhl-gray-700">{tip}</p></div>))}</div></div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}