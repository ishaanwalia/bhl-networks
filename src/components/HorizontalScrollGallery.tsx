"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Product } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface HorizontalScrollGalleryProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function HorizontalScrollGallery({
  products,
  title = "Featured Collection",
  subtitle = "Scroll to explore our handpicked selection",
}: HorizontalScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-bhl-orange uppercase tracking-wider">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900 mt-2">
            {title}
          </h2>
        </motion.div>
      </div>

      <motion.div 
        style={{ x }} 
        className="flex gap-6 px-4 sm:px-6 lg:px-8"
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-80">
            <Link href={`/products/${product.slug}`}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-card-hover transition-shadow duration-300 h-full group"
              >
                <div className="h-56 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative">
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-bhl-orange text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="w-20 h-20 rounded-full bg-bhl-orange/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-bhl-orange/40">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-bhl-gray-400">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-bhl-gray-900 mb-2 line-clamp-2 group-hover:text-bhl-orange transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {product.shortSpecs?.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="text-xs px-2 py-0.5 bg-gray-100 text-bhl-gray-500 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-bhl-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-bhl-orange font-medium flex items-center gap-1">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
}