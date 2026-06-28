"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Clock, Send, Check, Truck, ArrowRight } from "lucide-react";
import FadeIn from "@/src/components/FadeIn";
import StaggerContainer, { StaggerItem } from "@/src/components/StaggerContainer";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 8196963329",
    description: "Fastest response. Available 9 AM – 8 PM IST.",
    href: "https://wa.me/918196963329?text=Hi%20BHL%20Networks%2C%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20your%20networking%20products.",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@bhlnetworks.com",
    description: "We reply within 2 hours during business hours.",
    href: "mailto:sales@bhlnetworks.com",
    color: "bg-bhl-orange",
    lightColor: "bg-bhl-orange-light",
    textColor: "text-bhl-orange",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "India",
    description: "All India Delivery. Same-day dispatch available.",
    href: null,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi BHL Networks,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}\n\nPlease get back to me.`
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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg text-bhl-gray-500">
                Have questions about products, pricing, or bulk orders? We're here to help.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 ${card.lightColor} rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className={`w-6 h-6 ${card.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-bhl-gray-900 mb-1">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-bhl-orange font-semibold hover:underline block mb-2"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-bhl-orange font-semibold mb-2">{card.value}</p>
                )}
                <p className="text-sm text-bhl-gray-500">{card.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-bhl-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-bhl-gray-500 mb-4">We've opened WhatsApp with your message. Expect a reply within 2 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "" }); }}
                    className="text-bhl-orange font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-bhl-gray-900 mb-2">Send a Message</h2>
                  <p className="text-bhl-gray-500 mb-6">Fill out the form below and we'll get back to you quickly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Name *</label>
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
                        <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Email *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bhl-gray-700 mb-1.5">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bhl-orange/20 focus:border-bhl-orange transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-bhl-orange text-white rounded-xl font-semibold hover:bg-bhl-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>

          {/* Info Panel */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="bg-bhl-black rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Response Time Promise</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-bhl-orange" />
                  <span className="text-gray-300">We reply within <span className="text-white font-semibold">2 hours</span> during business hours</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-bhl-orange" />
                  <span className="text-gray-300">Business hours: <span className="text-white font-semibold">9 AM – 8 PM IST</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-bhl-orange" />
                  <span className="text-gray-300">Same-day dispatch for orders before <span className="text-white font-semibold">3 PM</span></span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-bhl-gray-900 mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/products" className="flex items-center gap-2 text-bhl-gray-600 hover:text-bhl-orange transition-colors py-1.5">
                    <ArrowRight className="w-4 h-4" /> Browse Products
                  </a>
                  <a href="/bulk-orders" className="flex items-center gap-2 text-bhl-gray-600 hover:text-bhl-orange transition-colors py-1.5">
                    <ArrowRight className="w-4 h-4" /> Bulk Order Enquiry
                  </a>
                  <a href="/blogs" className="flex items-center gap-2 text-bhl-gray-600 hover:text-bhl-orange transition-colors py-1.5">
                    <ArrowRight className="w-4 h-4" /> Read Our Blog
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
