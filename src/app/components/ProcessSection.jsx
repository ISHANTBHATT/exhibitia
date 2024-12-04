"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  PencilRuler,
  ThumbsUp,
  ShoppingCart,
  HandshakeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesignProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      icon: Users,
      number: "1",
      title: "Initial Consultation",
      description:
        "Discuss project requirements and assess client needs.Review budget and timeline expectations.",
    },
    {
      icon: PencilRuler,
      number: "2",
      title: "Schematic Design",
      description:
        "Develop preliminary design concepts and layouts. Present visual representations and design intent for feedback.",
    },
    {
      icon: ThumbsUp,
      number: "3",
      title: "Design Approval",
      description:
        "Finalize design details based on thorough feedback.Ensure client satisfaction with the approved plans.",
    },
    {
      icon: ShoppingCart,
      number: "4",
      title: "Purchase & Installation",
      description:
        "Procure necessary materials and products within budget. Coordinate installation design elements.",
    },
    {
      icon: HandshakeIcon,
      number: "5",
      title: "Project HandOver",
      description:
        "Conduct a final walkthrough to verify all work.Ensure client satisfaction any final concerns.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#6A1E55] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-gray-100 mb-2">DESIGN APPROACH</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Designing Process
          </h2>
          <p className="text-gray-200 max-w-2xl">
            Vehicula bibendum diam enim facilisis hac ligula. Dui facilisi
            condimentum nisl dictum ligula. Erat condimentum curae pharetra
            fringilla cursus. Suspendisse nibh cubilia augue augue aptent
            turpis. Malesuada donec maximus morbi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/demo1.jpg"
                alt="Interior Design Preview"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                className="bg-[#6A1E55] hover:bg-[#A64D79] text-white hover:text-white border-white"
              >
                Get A Quote
                <span className="ml-2">→</span>
              </Button>
            </div>
          </motion.div>

          <div ref={ref} className="space-y-6 overflow-hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-6 p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#A64D79] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-150 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
