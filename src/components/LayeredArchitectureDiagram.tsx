"use client";

import { motion } from "framer-motion";
import { Package, Shield, Truck, Headphones, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const layers = [
  {
    icon: Package,
    title: "Product Selection",
    desc: "400+ MSA-compliant networking products",
    color: "bg-bhl-orange",
    lightColor: "bg-bhl-orange-light",
    textColor: "text-bhl-orange",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "CE, RoHS certified & tested before dispatch",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same-day dispatch across 20+ states",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "WhatsApp support & 1-year warranty",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
];

export default function LayeredArchitectureDiagram() {
  return (
    <div className="py-20 bg-bhl-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-bhl-orange uppercase tracking-wider">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              From Product to Partnership
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bhl-orange via-green-500 to-blue-500 hidden md:block" style={{ transform: "translateX(-50%)" }} />

          <div className="space-y-8">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                    <p className="text-gray-400">{layer.desc}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Icon Node */}
                <div className="relative flex-shrink-0 hidden md:flex">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 ${layer.color} rounded-2xl flex items-center justify-center shadow-lg z-10`}
                  >
                    <layer.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}