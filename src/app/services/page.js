"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, HomeIcon, Megaphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "EXHIBITIONS",
    icon: Building2,
    description: "Professional Exhibition Stand Design & Fabrication",
    details: [
      "Exhibition stand designing and booth fabrication",
      "Portable display systems",
      "Years of stand building experience in India and worldwide markets",
    ],
    color: "bg-black",
    hoverColor: "hover:bg-black/90",
    textColor: "text-white",
  },
  {
    title: "EVENTS",
    icon: Calendar,
    description: "Superb Corporate Events Management",
    details: [
      "Creatively conceived and strategically planned events",
      "Perfect platform for brand building",
      "Client dinners, awards ceremonies, and product launches",
    ],
    color: "bg-slate-600",
    hoverColor: "hover:bg-slate-600/90",
    textColor: "text-white",
  },
  {
    title: "INTERIORS",
    icon: HomeIcon,
    description: "Corporate Interior Design & Build Services",
    details: [
      "Comprehensive woodwork and modular furniture",
      "Painting, polishing, and flooring solutions",
      "Complete electrical and networking installations",
    ],
    color: "bg-white",
    hoverColor: "hover:bg-slate-50",
    textColor: "text-slate-900",
  },
  {
    title: "ACTIVATIONS",
    icon: Megaphone,
    description: "Brand Activation Solutions",
    details: [
      "Mall Promotions",
      "New Product Launches",
      "Corporate Promotions",
      "Road Shows",
      "Modern Trade",
    ],
    color: "bg-emerald-500",
    hoverColor: "hover:bg-emerald-400",
    textColor: "text-white",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-secondary z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
              Comprehensive solutions for exhibitions, events, interiors, and
              brand activations
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href=""
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-neutral-700 hover:text-white transition duration-150 ease-in-out"
              >
                Explore Services
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100/50 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for exhibitions, events, interiors, and
              brand activations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full transition-colors duration-300 ${service.color} ${service.hoverColor} border-none shadow-lg group`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg ${service.textColor} bg-white/10`}
                      >
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle
                          className={`text-2xl font-bold ${service.textColor}`}
                        >
                          {service.title}
                        </CardTitle>
                        <CardDescription
                          className={`${service.textColor} opacity-90`}
                        >
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className={`space-y-2 ${service.textColor}`}>
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                          <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BeforeAfterSlider />
      {/* <section className="bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to elevate your brand?
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            Let's work together to create unforgettable experiences and spaces
            that leave a lasting impression.
          </p>
          <div className="mt-8 flex justify-center ">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-neutral-700 hover:text-white"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
}
