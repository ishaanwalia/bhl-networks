"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bhl-gray-50">
      <div className="bg-white border-b border-gray-100 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-bhl-gray-500 hover:text-bhl-orange transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-bhl-orange/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-bhl-orange" />
              </div>
              <span className="text-sm font-medium text-bhl-orange">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-bhl-gray-500">
              Last updated: January 1, 2026
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-sm">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">1. Introduction</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  BHL Networks (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us via WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">2. Information We Collect</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Contact Information:</strong> Name, phone number, email address, and business details provided via WhatsApp or contact forms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Order Information:</strong> Product inquiries, quotations, purchase history, and shipping addresses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website (via cookies and analytics).</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">3. How We Use Your Information</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Process and fulfill your product orders and inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Provide customer support and technical assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Send order updates, product announcements, and promotional offers (with consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Improve our website, products, and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Comply with legal obligations and prevent fraud</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">4. WhatsApp Business</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  We use WhatsApp Business API to communicate with customers. By contacting us via WhatsApp, you consent to receiving messages from us. You can opt out at any time by replying &quot;STOP&quot; or contacting us directly. We do not share your WhatsApp number with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">5. Cookies & Tracking</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookies through your browser settings. We do not use cookies to collect personally identifiable information without your consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">6. Data Sharing</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Logistics Partners:</strong> Shipping companies to deliver your orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Payment Processors:</strong> For secure transaction processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Legal Authorities:</strong> When required by law or to protect our rights</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">7. Data Security</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">8. Your Rights</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  Under Indian data protection laws, you have the right to:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Access, correct, or delete your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Withdraw consent for marketing communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Request data portability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Lodge a complaint with the relevant data protection authority</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">9. Contact Us</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or your data rights, please contact us via WhatsApp or email at <a href="mailto:privacy@bhlnetworks.com" className="text-bhl-orange hover:underline">privacy@bhlnetworks.com</a>.
                </p>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}