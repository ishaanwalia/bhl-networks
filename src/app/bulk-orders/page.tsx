"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Percent, Truck, Clock, Shield, Package, Check } from "lucide-react";
import FadeIn from "@/src/components/FadeIn";
import StaggerContainer, { StaggerItem } from "@/src/components/StaggerContainer";

const benefits = [
  { icon: Percent, title: "15-25% Distributor Margin", desc: "Competitive margins for bulk distributors" },
  { icon: Percent, title: "20-35% Dealer Margin", desc: "Attractive margins for authorized dealers" },
  { icon: Truck, title: "Same-Day Dispatch", desc: "Orders dispatched within 24 hours" },
  { icon: Clock, title: "2-Hour Response", desc: "Get quotes within 2 hours on WhatsApp" },
  { icon: Shield, title: "1-Year Warranty", desc: "Full replacement warranty on all products" },
  { icon: Package, title: "MOQ Flexibility", desc: "Flexible minimum order quantities" },
];

const categories = [
  "SFP Modules",
  "Fiber Products",
  "Switches",
  "Cabling",
  "FTTH Accessories",
  "GPON Products",
];

export default function BulkOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    products: "",
    quantity: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi BHL Networks,\n\nI want to place a bulk order.\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nProducts: ${formData.products}\nQuantity: ${formData.quantity}\nCity: ${formData.city}\nMessage: ${formData.message}\n\nPlease share distributor pricing and MOQ details.`
    );
    window.open(`https://wa.me/918196963329?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bhl-gray-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-bhl-gray-900 mb-4">
                Bulk Orders & <span className="text-gradient">Distributor Pricing</span>
              </h1>
              <p className="text-lg text-bhl-gray-500">
                Partner with BHL Networks for dealer-friendly pricing on SFP modules, fiber products, switches, and structured cabling.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Benefits */}
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-2xl font-bold text-bhl-gray-900 mb-6">Why Partner With Us?</h2>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {benefits.map((benefit, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-bhl-orange/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-bhl-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-bhl-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bhl-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-bhl-gray-500 mt-0.5">{benefit.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Stats */}
            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-bhl-black rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bhl-orange">1000+</div>
                  <div className="text-sm text-gray-400 mt-1">Active Dealers</div>
                </div>
                <div className="bg-bhl-black rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-bhl-orange">20+</div>
                  <div className="text-sm text-gray-400 mt-1">States Covered</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-bhl-gray-900 mb-2">Enquiry Sent!</h3>
                    <p className="text-bhl-gray-500 mb-4">We've opened WhatsApp with your details. Our team will respond within 2 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", category: "", products: "", quantity: "", city: "", message: "" }); }}
                      className="text-bhl-orange font-semibold hover:underline"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-bhl-gray-900 mb-6">Get Your Quote</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Full Name *</label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Company Name</label>
                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Email *</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Phone *</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Product Category</label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all bg-white"
                          >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Approximate Quantity</label>
                          <input
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                            placeholder="e.g. 50 units"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Products Interested In</label>
                        <input
                          name="products"
                          value={formData.products}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                          placeholder="e.g. SFP 1G LC LX, Cat6 Patch Cords, PoE Switches"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Delivery City</label>
                        <input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                          placeholder="Your city"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Additional Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all resize-none"
                          placeholder="Any specific requirements, target price, timeline..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Send Enquiry via WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to be contacted via WhatsApp and email.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
