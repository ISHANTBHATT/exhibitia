// import Image from "next/image";
// import React from "react";

// function Page() {
//   return (
//     <div>
//       <div className="w-full h-96">
//         <Image
//           src="/images/1.jpg"
//           width={1000}
//           height={1000}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default Page;

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Testimonials4 } from "../components/Testimonials4";
// import { Team } from "../components/Team";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Sparkles,
//   Shield,
//   Users,
//   Globe,
//   History,
//   Rocket,
//   PhoneCall,
// } from "lucide-react";
// import WhyChooseUs from "../components/WhyChooseUs";
// import Steps from "../components/Steps";
// export default function AboutPage() {
//   // const data = [
//   //   {
//   //     name: "Planning",
//   //     icon: (
//   //       <Image
//   //         src="/images/Planning.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     name: "Consultation",
//   //     icon: (
//   //       <Image
//   //         src="/images/Consultation.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     name: "Woodwork",
//   //     icon: (
//   //       <Image
//   //         src="/images/Woodwork.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     name: "Installation",
//   //     icon: (
//   //       <Image
//   //         src="/images/Installation.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     name: "Furnishing",
//   //     icon: (
//   //       <Image
//   //         src="/images/Furnishing.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     name: "Partitioning",
//   //     icon: (
//   //       <Image
//   //         src="/images/Partitioning.png"
//   //         width={200}
//   //         height={200}
//   //         className="h-10 w-10 object-contain"
//   //       />
//   //     ),
//   //   },
//   // ];
//   const data = [
//     {
//       name: "Custom Booth Design",
//       icon: (
//         <Image
//           src="/images/Furnishing.png"
//           width={200}
//           height={200}
//           className="h-14 w-14 object-contain"
//         />
//       ),
//     },
//     {
//       name: "Modular and Portable Booths",
//       icon: (
//         <Image
//           src="/images/demo4.jpg"
//           width={200}
//           height={200}
//           className="h-14 w-14 object-contain"
//         />
//       ),
//     },
//     {
//       name: "Booth Fabrication",
//       icon: (
//         <Image
//           src="/images/Woodwork.png"
//           width={200}
//           height={200}
//           className="h-14 w-14 object-contain"
//         />
//       ),
//     },
//     {
//       name: "End-to-End Project Management",
//       icon: (
//         <Image
//           src="/images/Installation.png"
//           width={200}
//           height={200}
//           className="h-14 w-14 object-contain"
//         />
//       ),
//     },
//   ];
//   const features = [
//     {
//       icon: <Sparkles className="w-6 h-6 text-primary" />,
//       title: "Innovative Designs",
//       description:
//         "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-primary" />,
//       title: "Exceptional Quality",
//       description:
//         "We pride ourselves on delivering booths that combine aesthetics with durability.",
//     },
//     {
//       icon: <Users className="w-6 h-6 text-primary" />,
//       title: "Customer Focus",
//       description:
//         "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
//     },
//     {
//       icon: <Globe className="w-6 h-6 text-primary" />,
//       title: "Global Reach",
//       description:
//         "Whether your event is local or international, our network and expertise ensure flawless execution.",
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-white py-10">
//       {/* Hero Section */}
//       <div className="relative h-[200px] bg-secondary">
//         <div className="absolute inset-0 bg-secondary">
//           <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
//             <h1 className="text-6xl font-bold text-white mb-2">About</h1>
//             <div className="text-white/80 flex items-center gap-2 text-sm">
//               <Link href="/" className="hover:text-white">
//                 HOME
//               </Link>
//               <span>/</span>
//               <span>ABOUT</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Single Row */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
//           {/* Stats Section */}
//           <div className="bg-secondary p-8 text-white w-full lg:w-1/5">
//             <div className="grid grid-cols-4 gap-2 mb-8">
//               {[...Array(16)].map((_, i) => (
//                 <div
//                   key={i}
//                   className={`aspect-square ${
//                     i < 10 ? "bg-white/20" : "bg-transparent"
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="space-y-2">
//               <h2 className="text-7xl font-bold">5K+</h2>
//               <h3 className="text-3xl font-bold leading-tight">
//                 Successful
//                 <br />
//                 Project
//                 <br />
//                 Completion
//               </h3>
//             </div>
//           </div>

//           {/* Study Room Image */}
//           <div className="w-full lg:w-1/5">
//             <Image
//               src="/images/14.jpeg"
//               alt="Study Room Design"
//               width={800}
//               height={500}
//               className="w-full h-[400px] object-cover"
//             />
//             {/* <h3 className="text-3xl font-bold mt-4">Study Room Designs</h3> */}
//           </div>

//           {/* About Section */}
//           <div className="w-full lg:w-1/2 lg:pl-20">
//             <span className="text-[#8B8165] font-semibold text-sm">
//               ABOUT US
//             </span>
//             <h2 className="text-5xl font-bold mt-2 mb-6 leading-tight">
//               Welcome to Exhibitia,
//             </h2>
//             <p className="text-gray-600 mb-8">
//               where creativity meets functionality in the world of exhibition
//               booth solutions. We are a team of dedicated professionals
//               passionate about helping brands make a lasting impression at trade
//               shows, conferences, and exhibitions. With a perfect blend of
//               innovation, craftsmanship, and customer-centricity, we design and
//               deliver booths that not only attract attention but also tell your
//               unique story.
//             </p>
//             <p className="text-gray-600 mb-8">
//               Our Mission Our mission is to transform your vision into reality,
//               creating dynamic and impactful exhibition spaces that captivate
//               audiences and foster meaningful connections. We are committed to
//               delivering high-quality, customized solutions that align with your
//               brand identity and marketing goals.
//             </p>

//             <p className="text-xl font-bold mt-2 mb-6 leading-tight">
//               What We Do At Exhibitia, we specialize in:
//             </p>
//             {/* Services Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {data.map((service) => (
//                 <div
//                   key={service.name}
//                   className="flex items-center gap-3 text-gray-800"
//                 >
//                   <span className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-lg">
//                     {service.icon}
//                   </span>
//                   <span className="text-sm">{service.name}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Know More Button */}
//             <button className="mt-8 bg-secondary text-white px-6 py-3 flex items-center gap-2 hover:bg-neutral-700 rounded-full transition-colors text-sm">
//               Know More
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl font-bold text-center mb-16 text-gray-900"
//             >
//               Why Choose Us?
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="bg-white border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                     <CardContent className="p-6">
//                       <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
//                         {feature.icon}
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                         {feature.title}
//                       </h3>
//                       <p className="text-gray-600">{feature.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-3 w-fit">
//                   <History className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Our Story
//                 </h3>
//                 <p className="text-gray-600">
//                   Founded in 2017, Exhibitia began with a simple idea: to
//                   revolutionize the way brands showcase themselves. Over the
//                   years, we have grown into a trusted partner for businesses
//                   across diverse industries, earning a reputation for excellence
//                   and reliability.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-3 w-fit">
//                   <Rocket className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Let's Create Something Amazing
//                 </h3>
//                 <p className="text-gray-600">
//                   We believe every brand has a story worth sharing, and we're
//                   here to help you tell it in the most compelling way. Let's
//                   collaborate to make your next event a memorable success.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-3 w-fit">
//                   <PhoneCall className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   Contact Us
//                 </h3>
//                 <p className="text-gray-600">
//                   Ready to elevate your exhibition presence? Get in touch with
//                   us today to discuss your project and discover how we can bring
//                   your vision to life.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </div> */}
//         {/* <Steps /> */}

//         <WhyChooseUs />
//         <Testimonials4 />
//         {/* <Team /> */}
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonials4 } from "../components/Testimonials4";
import { Team } from "../components/Team";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Users, Globe } from "lucide-react";
import { PenTool, Layers, Factory, ClipboardList } from "lucide-react";
import WhyChooseUs from "../components/WhyChooseUs";
import Parallax from "../components/Parallex";
const services = [
  {
    title: "Custom Booth Design",
    description:
      "We create custom booth designs that make your brand stand out at exhibitions, trade shows, and corporate events. From concept to execution, we craft visually stunning, functional, and interactive booths that attract and engage your audience. Our designs incorporate branding, technology, and smart layouts to maximize impact. Let’s build a booth that leaves a lasting impression!",
    icon: PenTool,
    image: "/images/bodycare7.jpg",
  },
  {
    title: "Modular and Portable Booths",
    description:
      "We design modular and portable booths that offer flexibility, convenience, and a premium look for trade shows, exhibitions, and events. With smart layouts and customizable designs, we ensure your brand stands out effortlessly. Elevate your event presence with our sleek and innovative booth solutions!",
    icon: Layers,
    image: "/images/twiga1.jpg",
  },
  {
    title: "Booth Fabrication",
    description:
      "Our booth fabrication services ensure high-quality, durable, and visually striking structures for exhibitions, trade shows, and events. Using premium materials and precise craftsmanship, we create booths that reflect your brand’s identity and enhance engagement. From custom builds to modular setups, we deliver seamless and impactful booth solutions.",
    icon: Factory,
    image: "/images/7.jpg",
  },
  {
    title: "End-to-End Project Management",
    description:
      "Our end-to-end project management services ensure a seamless execution of your exhibition or event booth, from concept to completion. We handle everything—design, fabrication, logistics, installation, and dismantling—so you can focus on your brand. With expert coordination and attention to detail, we deliver stress-free and on-time project execution.",
    icon: ClipboardList,
    image: "/images/interarch6.jpg",
  },
];
const features = [
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "Innovative Designs",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    iconColor: "text-purple-500",
    description:
      "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Exceptional Quality",
    color: "bg-red-100",
    textColor: "text-red-600",
    iconColor: "text-red-500",
    description:
      "We pride ourselves on delivering booths that combine aesthetics with durability.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Customer Focus",
    color: "bg-green-100",
    textColor: "text-green-600",
    iconColor: "text-green-500",
    description:
      "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Global Reach",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
    iconColor: "text-yellow-500",
    description:
      "Whether your event is local or international, our network and expertise ensure flawless execution.",
  },
];
export default function AboutPage() {
  // const data = [
  //   {
  //     name: "Custom Booth Design",
  //     icon: (
  //       <Image
  //         src="/images/Furnishing.png"
  //         width={200}
  //         height={200}
  //         className="h-14 w-14 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Modular and Portable Booths",
  //     icon: (
  //       <Image
  //         src="/images/demo4.jpg"
  //         width={200}
  //         height={200}
  //         className="h-14 w-14 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Booth Fabrication",
  //     icon: (
  //       <Image
  //         src="/images/Woodwork.png"
  //         width={200}
  //         height={200}
  //         className="h-14 w-14 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "End-to-End Project Management",
  //     icon: (
  //       <Image
  //         src="/images/Installation.png"
  //         width={200}
  //         height={200}
  //         className="h-14 w-14 object-contain"
  //       />
  //     ),
  //   },
  // ];

  return (
    <div className="min-h-screen  py-10">
      <div className="relative flex justify-around py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary -z-10 clip-diagonal"></div>
        <div className="px-4 h-full flex flex-col justify-end pb-8">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-bold text-white mb-2"
          >
            About
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/80 flex items-center gap-2 text-sm"
          >
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <span>/</span>
            <span>ABOUT</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/images/about.png"
            alt="carrer"
            width={1000}
            height={100}
            className="w-80 hidden sm:flex"
          />
        </motion.div>
      </div>

      {/* Main Content - Single Row */}
      <div className=" mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
        >
          <Image
            src="/images/bodycare12.jpg"
            alt="Bodycare"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </motion.div>
        <div className="flex flex-col flex-wrap lg:flex-nowrap gap-8 py-12">
          <div className="w-full pt-10 px-4 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mt-2 mb-6 leading-tight text-center "
            >
              Welcome to Exhibitia!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-600 mb-8 text-justify md:text-center px-4 lg:px-40 tracking-wide"
            >
              Where creativity meets functionality in the world of exhibition
              booth solutions. We are a team of dedicated professionals
              passionate about helping brands make a lasting impression at trade
              shows, conferences, and exhibitions. With a perfect blend of
              innovation, craftsmanship, and customer-centricity, we design and
              deliver booths that not only attract attention but also tell your
              unique story.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-600 mb-8 px-4 lg:px-40 tracking-wide text-justify md:text-center"
            >
              Our Mission is to transform your vision into reality, creating
              dynamic and impactful exhibition spaces that captivate audiences
              and foster meaningful connections. We are committed to delivering
              high-quality, customized solutions that align with your brand
              identity and marketing goals.
            </motion.p>

            <p className="text-2xl font-bold mt-2 mb-6 leading-tight pt-10">
              What We Do At Exhibitia, we specialize in:
            </p>
            {/* Services Grid */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 text-gray-800"
                >
                  <span className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                    {service.icon}
                  </span>
                  <span className="text-sm">{service.name}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-secondary text-white px-6 py-3 flex items-center gap-2 hover:bg-neutral-700 rounded-full transition-colors text-sm">
              Know More
              <ArrowRight className="w-4 h-4" />
            </button> */}
            <div className="min-h-screen md:bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className="relative group "
                    >
                      {/* Icon Container */}
                      <div className="absolute -top-4 left-4 z-10 text-orange-500 bg-white p-4 rounded-lg shadow-md border-2 border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                        {/* {service.icon} */}
                        <service.icon className="w-8 h-8 " />
                      </div>

                      {/* Card Content */}
                      <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen">
          <div className="relative h-screen overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url("/images/bodycare10.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                transform: `translateY(${offset * 0.5}px)`,
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Let's Start Work Today?
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
                We turn you on to pro lighting strategies to highlight features
                create intrigue and make the most of indoor and outdoor rooms
              </p>
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                Build Your Dream
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-white rounded-full p-1">
                <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
              </div>
            </div>
          </div>
        </div> */}
        <Parallax />
        {/* <WhyChooseUs /> */}
        <Card />
        <Testimonials4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    // <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <motion.h2
    //       initial={{ opacity: 0, y: 100 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       className="text-4xl font-bold text-center mb-16 text-gray-900"
    //     >
    //       Why Choose Us?
    //     </motion.h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {features.map((card, index) => (
    //         <motion.div
    //           initial={{ opacity: 0, y: 100 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ delay: index * 0.1 }}
    //           key={index}
    //           className="relative group"
    //         >
    //           <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    //             {/* Top colored section with icon */}
    //             <div className={`relative h-32 ${card.color} p-6`}>
    //               <div className={`${card.iconColor}`}>{card.icon}</div>
    //               {/* Background pattern */}
    //               <div className="absolute inset-0 opacity-10">
    //                 {[...Array(6)].map((_, i) => (
    //                   <div
    //                     key={i}
    //                     className={`absolute ${card.iconColor} opacity-20`}
    //                     style={{
    //                       transform: `rotate(${i * 30}deg)`,
    //                       left: `${i * 20 - 10}%`,
    //                       top: `${i * 15 - 20}%`,
    //                     }}
    //                   >
    //                     {card.icon}
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>

    //             {/* Content */}
    //             <div className="p-6">
    //               <h3
    //                 className={`text-lg font-semibold ${card.textColor} mb-2`}
    //               >
    //                 {card.title}
    //               </h3>
    //               <p className="text-gray-600 text-sm mb-4">
    //                 {card.description}
    //               </p>
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="h-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Top section with icon and circle */}
                <div className="relative h-32 p-6">
                  {/* Background circle */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 rounded-full ${card.color} opacity-90 transform translate-x-16 -translate-y-16`}
                  />

                  {/* Background pattern */}
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${card.bgColor} to-transparent opacity-30`}
                  >
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute ${card.iconColor} opacity-10`}
                        style={{
                          transform: `rotate(${i * 30}deg)`,
                          right: `${i * 20 - 10}%`,
                          top: `${i * 15 - 20}%`,
                        }}
                      >
                        {card.icon}
                      </div>
                    ))}
                  </div>

                  {/* Icon */}
                  <div className={`relative ${card.iconColor}`}>
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-lg font-semibold ${card.textColor} mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>

                  {/* Button */}
                  {/* <button
                    className={`inline-flex items-center ${card.buttonColor} ${card.textColor} px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
