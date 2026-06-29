"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
}

interface InteractiveProcessProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export default function InteractiveProcess({
  steps,
  title = "How It Works",
  subtitle = "A streamlined process for exceptional results",
}: InteractiveProcessProps) {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-bhl-orange uppercase tracking-wider">
              {subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-bhl-gray-900 mt-2">
              {title}
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? "bg-white border-bhl-orange shadow-lg shadow-bhl-orange/10"
                    : "bg-white/50 border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-bold transition-colors ${
                    activeStep === index ? "text-bhl-orange" : "text-gray-300"
                  }`}>
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${
                      activeStep === index ? "text-bhl-gray-900" : "text-bhl-gray-600"
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${
                      activeStep === index ? "text-bhl-orange" : "text-gray-400"
                    }`} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-12">
                        <p className="text-bhl-gray-500 mb-3">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-bhl-gray-600">
                              <span className="w-1.5 h-1.5 bg-bhl-orange rounded-full mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}