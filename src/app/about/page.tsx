"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import CountUp from "@/components/CountUp";

const values = [
  { icon: Target, title: "Quality First", desc: "Every product is tested and certified before it reaches our dealers." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, honest specs, and no hidden costs." },
  { icon: Heart, title: "Dealer Success", desc: "Your growth is our growth. We provide marketing and technical support." },
  { icon: Users, title: "Partnership", desc: "Long-term relationships with 1000+ dealers across India." },
  { icon: Award, title: "Certification", desc: "All products are CE, RoHS, and MSA compliant." },
  { icon: TrendingUp, title: "Innovation", desc: "Constantly expanding our catalog with the latest networking tech." },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "BHL Networks started with a vision to provide affordable networking products." },
  { year: "2020", title: "100+ Dealers", desc: "Crossed 100 active dealer partners across North India." },
  { year: "2022", title: "400+ Products", desc: "Expanded catalog to 400+ SKUs covering all networking categories." },
  { year: "2024", title: "Pan-India", desc: "Serving 1000+ dealers across 20+ states with same-day dispatch." },
  { year: "2026", title: "Industry Leader", desc: "India's trusted networking partner for ISPs, enterprises, and integrators." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bhl-gray-900 mb-6">
                Building India&apos;s{" "}
                <span className="text-gradient">Networking Infrastructure</span>
              </h1>
              <p className="text-lg sm:text-xl text-bhl-gray-500 leading-relaxed">
                BHL Networks is India&apos;s trusted partner for high-quality SFP modules, fiber products, ethernet switches, and structured cabling. We empower 1000+ dealers with dealer-friendly pricing, same-day dispatch, and expert technical support.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 400, suffix: "+", label: "Products" },
                { value: 1000, suffix: "+", label: "Dealers" },
                { value: 20, suffix: "+", label: "States" },
                { value: 99, suffix: "%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="bg-bhl-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-bhl-orange">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-bhl-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="bg-bhl-orange-light rounded-2xl p-8">
                <div className="w-12 h-12 bg-bhl-orange rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-bhl-gray-900 mb-3">Our Mission</h2>
                <p className="text-bhl-gray-500 leading-relaxed">
                  To make high-quality networking products accessible and affordable for every ISP, enterprise, and system integrator in India. We believe that reliable connectivity should not come at a premium.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-bhl-black rounded-2xl p-8">
                <div className="w-12 h-12 bg-bhl-orange rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  To become India&apos;s most trusted networking partner by 2030, with a dealer network spanning every state and a product catalog that covers every networking need from fiber to the home to enterprise data centers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bhl-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">Our Values</h2>
              <p className="mt-3 text-bhl-gray-500 max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-bhl-orange-light rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-bhl-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-bhl-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-bhl-gray-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900">Our Journey</h2>
              <p className="mt-3 text-bhl-gray-500">From a small startup to India&apos;s trusted networking partner</p>
            </div>
          </FadeIn>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bhl-orange to-bhl-orange/20" />
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-8`}>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-bhl-gray-50 rounded-2xl p-6 border border-gray-100">
                        <span className="text-bhl-orange font-bold text-lg">{item.year}</span>
                        <h3 className="text-lg font-semibold text-bhl-gray-900 mt-1">{item.title}</h3>
                        <p className="text-sm text-bhl-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-bhl-orange rounded-full border-4 border-white shadow-lg" />
                    <div className="md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-bhl-orange to-bhl-orange-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join 1000+ dealers who trust BHL Networks for quality products and reliable support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/bulk-orders"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bhl-orange rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Become a Dealer
              </a>
              <a
                href="https://wa.me/918196963329?text=Hi%20BHL%20Networks%2C%20I%20want%20to%20become%20a%20dealer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-bhl-orange transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}