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
import Image from "next/image";
function ServicesGrid() {
  //   const services = [
  //     {
  //       title: "GROUND FREIGHT",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: TramFront,
  //       image: "/images/"
  //     },
  //     {
  //       title: "AIRFREIGHT",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: PlaneTakeoff,
  //     },
  //     {
  //       title: "OCEAN FREIGHT",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: Ship,
  //     },
  //     {
  //       title: "MULTI MODAL",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: TramFront,
  //     },
  //     {
  //       title: "CUSTOM BROKERAGE",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: TramFront,
  //     },
  //     {
  //       title: "CROSS BOARDER",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
  //       icon: TramFront,
  //     },
  //   ];
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
  );
}

export default ServicesGrid;
