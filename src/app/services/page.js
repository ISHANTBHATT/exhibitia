"use client";

import { motion } from "framer-motion";
// import { Building2, Calendar, HomeIcon, Megaphone } from "lucide-react";
import {
  Building2,
  Hammer,
  ClipboardList,
  Truck,
  Tv2,
  PenTool,
  Store,
  Camera,
} from "lucide-react";
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
import { Trophy, ShieldCheck, Target, PiggyBank } from "lucide-react";

// const services = [
//   {
//     title: "CUSTOM BOOTH DESIGN",
//     icon: Building2,
//     description:
//       "We work closely with you to create booth designs that reflect your brand identity and goals. From concept to final design, our expert designers deliver innovative and functional layouts tailored to your needs.",
//     details: [
//       "Bespoke booth concepts",
//       "3D renderings and floor plans",
//       "Branding and graphic design integration",
//     ],
//     color: "bg-black",
//     hoverColor: "hover:bg-black/90",
//     textColor: "text-white",
//   },
//   {
//     title: "BOOTH FABRICATION AND CONSTRUCTION",
//     icon: Calendar,
//     description:
//       "Our skilled team builds high-quality booths using premium materials and precise craftsmanship, ensuring durability and a flawless finish.",
//     details: [
//       "Custom booth construction",
//       "Modular and portable booth systems",
//       "Eco-friendly material options",
//     ],
//     color: "bg-slate-600",
//     hoverColor: "hover:bg-slate-600/90",
//     textColor: "text-white",
//   },
//   {
//     title: "PROJECT MANAGEMENT",
//     icon: HomeIcon,
//     description:
//       "From initial planning to on-site delivery, we handle all the details so you can focus on engaging with your audience.",
//     details: [
//       "Timeline and budget management",
//       "Coordination with event organizers",
//       "Logistics and transportation",
//     ],
//     color: "bg-white",
//     hoverColor: "hover:bg-slate-50",
//     textColor: "text-slate-900",
//   },
//   {
//     title: "INSTALLATION AND DISMANTLING",
//     icon: Megaphone,
//     description:
//       "Our team ensures a seamless setup and teardown process, allowing you to concentrate on making connections and achieving your event goals.",
//     details: [
//       "Professional on-site installation",
//       "Efficient dismantling and packing",
//       "Storage solutions for reusable booths",
//     ],
//     color: "bg-emerald-500",
//     hoverColor: "hover:bg-emerald-400",
//     textColor: "text-white",
//   },
//   {
//     title: "AUDIOVISUAL AND TECHNOLOGY INTEGRATION",
//     icon: Megaphone,
//     description:
//       "Enhance your booth experience with cutting-edge technology and interactive elements to engage your visitors.",
//     details: [
//       "LED screens and video walls",
//       "Interactive kiosks and touchscreens",
//       "Lighting and sound systems",
//     ],
//     color: "bg-black",
//     hoverColor: "hover:bg-black/90",
//     textColor: "text-white",
//   },
//   {
//     title: "BRANDING AND GRAPHIC DESIGN",
//     icon: Megaphone,
//     description:
//       "We provide striking visuals that make a lasting impression. Our graphic solutions align with your brand’s message and resonate with your audience.",
//     details: [
//       "High-resolution printing",
//       "Custom signage and banners",
//       "Backlit displays and wraps",
//     ],
//     color: "bg-slate-600",
//     hoverColor: "hover:bg-slate-600/90",
//     textColor: "text-white",
//   },
//   {
//     title: "RENTAL BOOTH SOLUTIONS",
//     icon: Megaphone,
//     description:
//       "For exhibitors seeking flexibility, we offer a wide selection of rental booths that are customizable to fit your event requirements.",
//     details: [
//       "Cost-effective options",
//       "Pre-designed modular systems",
//       "Full-service rental packages",
//     ],
//     color: "bg-white",
//     hoverColor: "hover:bg-slate-50",
//     textColor: "text-black",
//   },
//   {
//     title: "PHOTOGRAPHY",
//     icon: Megaphone,
//     description:
//       "Visual that captures the essence of brands, highlights intricate details, and creates visually impactful narratives to engage audiences.",
//     details: [
//       "Cost-effective options",
//       "Pre-designed modular systems",
//       "Full-service rental packages",
//     ],
//     color: "bg-emerald-500",
//     hoverColor: "hover:bg-emerald-400",
//     textColor: "text-white",
//   },
// ];

const services = [
  {
    title: "CUSTOM BOOTH DESIGN",
    icon: Building2,
    description:
      "We work closely with you to create booth designs that reflect your brand identity and goals. From concept to final design, our expert designers deliver innovative and functional layouts tailored to your needs.",
    details: [
      "Bespoke booth concepts",
      "3D renderings and floor plans",
      "Branding and graphic design integration",
    ],
    color: "bg-black",
    hoverColor: "hover:bg-black/90",
    textColor: "text-white",
  },
  {
    title: "BOOTH FABRICATION AND CONSTRUCTION",
    icon: Hammer,
    description:
      "Our skilled team builds high-quality booths using premium materials and precise craftsmanship, ensuring durability and a flawless finish.",
    details: [
      "Custom booth construction",
      "Modular and portable booth systems",
      "Eco-friendly material options",
    ],
    color: "bg-slate-600",
    hoverColor: "hover:bg-slate-600/90",
    textColor: "text-white",
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: ClipboardList,
    description:
      "From initial planning to on-site delivery, we handle all the details so you can focus on engaging with your audience.",
    details: [
      "Timeline and budget management",
      "Coordination with event organizers",
      "Logistics and transportation",
    ],
    color: "bg-white",
    hoverColor: "hover:bg-slate-50",
    textColor: "text-slate-900",
  },
  {
    title: "INSTALLATION AND DISMANTLING",
    icon: Truck,
    description:
      "Our team ensures a seamless setup and teardown process, allowing you to concentrate on making connections and achieving your event goals.",
    details: [
      "Professional on-site installation",
      "Efficient dismantling and packing",
      "Storage solutions for reusable booths",
    ],
    color: "bg-emerald-500",
    hoverColor: "hover:bg-emerald-400",
    textColor: "text-white",
  },
  {
    title: "AUDIOVISUAL AND TECHNOLOGY INTEGRATION",
    icon: Tv2,
    description:
      "Enhance your booth experience with cutting-edge technology and interactive elements to engage your visitors.",
    details: [
      "LED screens and video walls",
      "Interactive kiosks and touchscreens",
      "Lighting and sound systems",
    ],
    color: "bg-gradient-to-br from-neutral-700 to-neutral-800",
    hoverColor: "hover:from-neutral-800 hover:to-neutral-900",
    textColor: "text-white",
  },
  {
    title: "BRANDING AND GRAPHIC DESIGN",
    icon: PenTool,
    description:
      "We provide striking visuals that make a lasting impression. Our graphic solutions align with your brand's message and resonate with your audience.",
    details: [
      "High-resolution printing",
      "Custom signage and banners",
      "Backlit displays and wraps",
    ],
    color: "bg-gradient-to-br from-rose-500 to-pink-500",
    hoverColor: "hover:from-rose-600 hover:to-pink-600",
    textColor: "text-white",
  },
  {
    title: "RENTAL BOOTH SOLUTIONS",
    icon: Store,
    description:
      "For exhibitors seeking flexibility, we offer a wide selection of rental booths that are customizable to fit your event requirements.",
    details: [
      "Cost-effective options",
      "Pre-designed modular systems",
      "Full-service rental packages",
    ],
    color: "bg-gradient-to-br from-slate-100 to-slate-200",
    hoverColor: "hover:from-slate-200 hover:to-slate-300",
    textColor: "text-black",
  },
  {
    title: "PHOTOGRAPHY",
    icon: Camera,
    description:
      "Visual that captures the essence of brands, highlights intricate details, and creates visually impactful narratives to engage audiences.",
    details: [
      "Professional event and product photography",
      "360° booth and exhibit documentation",
      "Post-production and digital enhancement",
    ],
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    hoverColor: "hover:from-cyan-600 hover:to-blue-600",
    textColor: "text-white",
  },
];

const features = [
  {
    icon: <Trophy className="w-10 h-10 text-neutral-700" />,
    title: "Experienced team of professionals",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-neutral-700" />,
    title: "End-to-end service for hassle-free experience",
  },
  {
    icon: <Target className="w-10 h-10 text-neutral-700" />,
    title: "Commitment to quality and innovation",
  },
  {
    icon: <PiggyBank className="w-10 h-10 text-neutral-700" />,
    title: "Competitive pricing",
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
              At Exhibitia, we specialize in creating impactful exhibition
              booths that elevate your brand presence and captivate your
              audience. Our comprehensive range of services ensures your booth
              stands out at any event. Here’s how we can help:
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

      <div className="max-w-7xl mx-auto pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white h-full border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center pb-10">
          Let us transform your vision into an engaging exhibition experience.
          Ready to get started? Contact us today for a free consultation and
          quote.
        </p>
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
