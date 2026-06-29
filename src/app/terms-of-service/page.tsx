"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
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
                <FileText className="w-5 h-5 text-bhl-orange" />
              </div>
              <span className="text-sm font-medium text-bhl-orange">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900 mb-4">
              Terms of Service
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
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  By accessing or using the BHL Networks website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, dealers, and customers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">2. About Our Services</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  BHL Networks is a B2B networking products distributor based in India. We supply SFP modules, fiber optic products, ethernet switches, structured cabling, GPON equipment, and FTTH accessories to dealers, ISPs, enterprises, and system integrators. All orders are subject to availability and confirmation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">3. Dealer Registration</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  To access dealer pricing and bulk order benefits:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>You must provide accurate business information including GST number (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Dealer pricing is confidential and may not be disclosed to non-dealers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>We reserve the right to approve or reject dealer applications</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">4. Pricing & Payment</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  All prices are quoted in Indian Rupees (INR) unless otherwise specified:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Prices displayed on the website are indicative; final pricing is confirmed via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>GST (18%) is applicable on all orders unless exempted under law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Payment terms: 100% advance for new dealers; credit terms available for established partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>We accept bank transfer, UPI, and major credit/debit cards</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">5. Shipping & Delivery</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  We aim for same-day dispatch on orders placed before 2:00 PM IST:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Delivery timelines vary by location (typically 2-7 business days within India)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Shipping costs are calculated based on order weight and destination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Risk of loss passes to the buyer upon delivery to the courier</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">6. Warranty & Returns</h2>
                <p className="text-bhl-gray-600 leading-relaxed mb-3">
                  All BHL Networks products carry a 1-year replacement warranty against manufacturing defects:
                </p>
                <ul className="space-y-2 text-bhl-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Warranty covers manufacturing defects only; not physical damage, misuse, or improper installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Return requests must be made within 7 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Products must be returned in original packaging with all accessories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-2 flex-shrink-0" />
                    <span>Refunds are processed within 7-10 business days after inspection</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">7. Product Specifications</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  All product specifications, images, and descriptions are provided for reference. We make reasonable efforts to ensure accuracy but do not guarantee that all specifications are error-free. Compatibility with third-party equipment is the buyer's responsibility. MSA compliance is stated where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">8. Intellectual Property</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  All content on this website — including text, images, logos, and product information — is the property of BHL Networks or its licensors. You may not reproduce, distribute, or create derivative works without our express written permission. Third-party trademarks belong to their respective owners.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">9. Limitation of Liability</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  BHL Networks shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the amount paid for the specific product giving rise to the claim. This limitation applies to the fullest extent permitted by Indian law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">10. Governing Law</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India. We encourage amicable resolution through mediation before pursuing legal action.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">11. Changes to Terms</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms. We will notify dealers of material changes via WhatsApp or email.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-bhl-gray-900 mb-3">12. Contact</h2>
                <p className="text-bhl-gray-600 leading-relaxed">
                  For questions about these Terms, contact us via WhatsApp or email at <a href="mailto:legal@bhlnetworks.com" className="text-bhl-orange hover:underline">legal@bhlnetworks.com</a>.
                </p>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}