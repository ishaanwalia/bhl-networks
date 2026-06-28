"use client";

import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";
import Link from "next/link";
import { formatPrice, generateWhatsAppLink } from "@/lib/utils";
import Badge from "./Badge";

export default function ProductCard({ product, index = 0 }: { product: any; index?: number }) {
  const whatsappLink = generateWhatsAppLink(product.name, product.price);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8 }} className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant={product.badge === "Best Seller" ? "default" : "success"}>{product.badge}</Badge>
        </div>
      )}
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-48 bg-gradient-to-br from-bhl-orange-light to-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-bhl-orange/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-bhl-orange/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded">Image coming soon</div>
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-bhl-gray-900 mb-2 group-hover:text-bhl-orange transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-3">
          {product.shortSpecs.slice(0, 3).map((spec: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">{spec}</span>
          ))}
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold text-bhl-orange">{formatPrice(product.price)}</span>
          <span className="text-sm text-gray-400 ml-2">MRP</span>
        </div>
        <div className="flex gap-2">
          <Link href={`/products/${product.slug}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            <Eye className="w-4 h-4" />View Details
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
            <MessageCircle className="w-4 h-4" />WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
