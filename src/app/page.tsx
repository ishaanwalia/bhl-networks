"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Cpu, Cable, Network, Plug, Radio, Router, Zap, Shield, Truck, Headphones } from "lucide-react";
import Link from "next/link";
import Hero3DNetwork from "@/components/Hero3DNetwork";
import FadeIn from "@/components/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { products, categories, getFeaturedProducts } from "@/lib/product";
import { generateBulkOrderLink } from "@/lib/utils";
import { ParticleBackground } from "../components/ParticleBackground";

const stats = [
  { value: 400, suffix: "+", label: "Products" },
  { value: 1000, suffix: "+", label: "Dealers" },
  { value: 20, suffix: "+", label: "States" },
  { value: 99, suffix: "%", label: "Satisfaction" },
];

const features = [
  { icon: Zap, title: "Premium Quality", desc: "MSA compliant, CE & RoHS certified products" },
  { icon: Shield, title: "1-Year Warranty", desc: "Full replacement warranty on all products" },
  { icon: Truck, title: "Same-Day Dispatch", desc: "Fast delivery across all 20+ states" },
  { icon: Headphones, title: "Expert Support", desc: "Technical assistance via WhatsApp" },
];

const processSteps = [
  { num: "001", title: "Browse", desc: "Explore 400+ networking products" },
  { num: "002", title: "WhatsApp", desc: "Chat with us for pricing & availability" },
  { num: "003", title: "Quote", desc: "Get best dealer price instantly" },
  { num: "004", title: "Delivery", desc: "Same-day dispatch to your city" },
];

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "sfp-modules": Cpu,
  "fiber-products": Cable,
  "switches": Network,
  "cabling": Plug,
  "ftth-accessories": Radio,
  "gpon-products": Router,
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-bhl-gray-900 tracking-tight leading-tight">
              India&apos;s Trusted{" "}
              <span className="text-gradient">Networking</span>{" "}
              Partner
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-bhl-gray-500 max-w-2xl mx-auto"
          >
            High-quality SFP modules, fiber products, ethernet switches, and structured cabling at dealer-friendly prices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/products" size="lg">
              Explore Products <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="https://wa.me/918196963329?text=Hi%20BHL%20Networks%2C%20I%20am%20interested%20in%20your%20products."
              variant="whatsapp"
              size="lg"
              external
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Stats in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-bhl-orange">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-bhl-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="py-6 bg-bhl-black overflow-hidden">
        <Marquee speed={25} className="text-white">
          {["BHL", "SFP", "FIBER", "SWITCHES", "CABLING", "GPON", "FTTH", "PoE", "DAC", "AOC"].map((item) => (
            <span key={item} className="text-lg font-semibold tracking-wider flex items-center gap-8">
              {item}
              <span className="w-2 h-2 bg-bhl-orange rounded-full" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">Product Categories</h2>
              <p className="mt-4 text-bhl-gray-500 max-w-2xl mx-auto">
                Comprehensive networking solutions for ISPs, enterprises, and system integrators
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Cpu;
              return (
                <StaggerItem key={cat.id}>
                  <Link href={`/products#${cat.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-bhl-orange-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-bhl-orange transition-colors">
                        <Icon className="w-7 h-7 text-bhl-orange group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-bhl-gray-900 group-hover:text-bhl-orange transition-colors">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-bhl-gray-500">{cat.count} Products</p>
                      <div className="mt-4 flex items-center text-bhl-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View All <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-bhl-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">Featured Products</h2>
                <p className="mt-2 text-bhl-gray-500">Our best-selling networking products</p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-bhl-orange font-semibold hover:underline"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BHL - Dark Section */}
      <section className="py-24 bg-bhl-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose BHL Networks</h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Trusted by 1000+ dealers across India for quality, pricing, and support
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat) => (
              <StaggerItem key={feat.title}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-bhl-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feat.icon className="w-8 h-8 text-bhl-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feat.title}</h3>
                  <p className="text-gray-400">{feat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works - Zera Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">How It Works</h2>
              <p className="mt-4 text-bhl-gray-500">Simple 4-step process to get your networking products</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="relative p-8 rounded-2xl border border-gray-100 bg-bhl-gray-50 hover:border-bhl-orange/30 transition-colors">
                  <span className="text-5xl font-bold text-bhl-orange/20">{step.num}</span>
                  <h3 className="mt-4 text-xl font-semibold text-bhl-gray-900">{step.title}</h3>
                  <p className="mt-2 text-bhl-gray-500">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-bhl-orange/30" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-bhl-orange to-bhl-orange-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Stock Up?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get dealer pricing on bulk orders. Same-day dispatch available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={generateBulkOrderLink()}
                variant="primary"
                size="lg"
                className="bg-white text-bhl-orange hover:bg-gray-100"
                external
              >
                <MessageCircle className="w-5 h-5" /> Enquire on WhatsApp
              </Button>
              <Button
                href="/bulk-orders"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-bhl-orange"
              >
                Bulk Order Form
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}