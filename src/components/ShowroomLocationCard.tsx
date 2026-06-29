"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Building2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ShowroomLocationCard() {
  return (
    <div className="py-20 bg-bhl-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-bhl-orange uppercase tracking-wider">
              Visit Our Showroom
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900 mt-2">
              Experience BHL Networks In Person
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm h-full min-h-[400px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bhl-orange-light to-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-bhl-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-bhl-orange" />
                  </div>
                  <p className="text-bhl-gray-500 font-medium">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-400 mt-1">Sector 17, Chandigarh</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Location Details */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bhl-orange-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-bhl-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bhl-gray-900">BHL Networks Showroom</h3>
                    <p className="text-bhl-gray-500 mt-1">SCO-12, 1st Floor, Sector-17-E</p>
                    <p className="text-bhl-gray-500">Chandigarh - 160017</p>
                    <p className="text-sm text-gray-400 mt-1">Above Indian Coffee House</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bhl-gray-900">Business Hours</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-bhl-gray-500">Monday – Saturday</span>
                        <span className="text-bhl-gray-900 font-medium">10:00 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-bhl-gray-500">Sunday</span>
                        <span className="text-bhl-gray-900 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-bhl-gray-900">Contact</h3>
                    <p className="text-bhl-orange font-medium mt-1">+91 81969 63329</p>
                    <p className="text-sm text-bhl-gray-500 mt-1">sales@bhlnetworks.com</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Sector+17+Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-bhl-orange text-white rounded-xl font-semibold hover:bg-bhl-orange-dark transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}