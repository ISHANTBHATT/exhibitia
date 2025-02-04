import React from "react";
import { motion } from "framer-motion";
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
function ServicesGrid() {
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
      image: "/images/custom2.png",
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
      image: "/images/construction2.png",
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
      image: "/images/project2.png",
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
      image: "/images/installation2.png",
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
      image: "/images/technology.png",
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
      image: "/images/branding2.png",
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
      image: "/images/rental.png",
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
      image: "/images/photography2.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-20 px-10 mt-10 overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`w-full flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-1/2 flex justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={service.image}
                width={1000}
                height={300}
                alt="boxes"
                className="w-96 h-96"
              />
            </motion.div>
            <motion.div
              className="w-1/2 flex flex-col  text-left gap-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? 500 : -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <service.icon className="w-12 h-12 text-[#0089f2]" /> */}
              <h1 className="text-2xl font-bold text-[#142752] text-center">
                {service.title}
              </h1>
              <h1 className="text-lg text-black/50">{service.description}</h1>
              <ul
                className={`space-y-2 ${service.textColor} text-lg text-black/50`}
              >
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
            </motion.div>
          </motion.div>
        ))}
      </div>
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Providing top-notch branding, digital experiences, and web
              development through tailored solutions that fit your unique needs.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    key={index}
                    className="group overflow-hidden transition-all hover:shadow-lg w-full"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`flex flex-col ${
                          isEven ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-6 items-center`}
                      >
                        <div className="w-full md:w-1/2 space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.details.map((detail, i) => (
                              <Badge
                                key={i}
                                className="px-3 py-1 bg-white text-black hover:bg-slate-50"
                              >
                                {detail}
                              </Badge>
                              // <motion.li
                              //   key={i}
                              //   initial={{ opacity: 0, x: -10 }}
                              //   animate={{ opacity: 1, x: 0 }}
                              //   transition={{ delay: index * 0.1 + i * 0.05 }}
                              //   className="flex items-center gap-2"
                              // >
                              //   <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                              //   <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                              //     {detail}
                              //   </span>
                              // </motion.li>
                            ))}
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-contain transition-transform group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesGrid;
