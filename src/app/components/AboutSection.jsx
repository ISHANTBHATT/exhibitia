//working
// "use client";
// import Image from "next/image";

// export function AboutSection() {
//   return (
//     <section className="py-16 md:py-24 sm:px-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Text Content */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-800">
//                 ABOUT US
//               </h2>
//               <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900">
//                 Crafting Inspired Spaces for Over 15 Years
//               </h3>
//             </div>
//             <p className="text-lg text-muted-foreground max-w-xl text-textcolor">
//               Established with a passion for creativity and a commitment to
//               excellence, Upstairs has been transforming spaces since 2009. With
//               a keen eye for detail and a focus on innovation, we strive to
//               exceed our clients' expectations with every project we undertake.
//             </p>
//             <button className="bg-buttoncolor hover:bg-neutral-700 text-white rounded-full px-8 py-2">
//               Read More
//             </button>
//           </div>

//           {/* Image Grid */}
//           {/* <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-12 md:col-span-8">
//               <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/1.jpg"
//                   alt="Modern kitchen design"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="col-span-6 md:col-span-4">
//               <div className="relative aspect-square overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/2.jpg"
//                   alt="Living room design"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="col-span-6 md:col-span-4 md:col-start-9">
//               <div className="relative aspect-square overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/3.jpg"
//                   alt="Interior design detail"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div> */}
//           <div className="grid grid-cols-12 grid-rows-12 gap-4">
//             <div className="row-span-12 col-span-6">
//               <div className="relative w-full h-full overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/demo1.jpg"
//                   alt="Modern kitchen design"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="row-span-6 col-span-6 col-start-7">
//               <div className="relative aspect-square overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/demo2.jpg"
//                   alt="Interior design detail"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="row-span-6 col-span-6 row-start-7  col-start-7">
//               {" "}
//               <div className="relative aspect-square overflow-hidden rounded-2xl">
//                 <Image
//                   src="/images/demo3.jpg"
//                   alt="Interior design detail"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 sm:px-10 " ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <motion.h2
                className="text-lg font-semibold uppercase tracking-wider text-neutral-800"
                variants={itemVariants}
              >
                ABOUT US
              </motion.h2>
              <motion.h3
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900"
                variants={itemVariants}
              >
                Why Choose Us?
              </motion.h3>
            </div>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl text-textcolor font-bold"
              variants={itemVariants}
            >
              Innovative Designs:
              <span className="font-normal">
                {" "}
                Our team of experienced designers will work closely with you to
                develop creative, eye-catching booth designs that reflect your
                brand’s identity and engage your audience.
              </span>
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl text-textcolor font-bold"
              variants={itemVariants}
            >
              Custom Solutions:
              <span className="font-normal">
                {" "}
                We understand that every event is different. That's why we offer
                customized booth solutions, including modular designs,
                interactive displays, and immersive experiences tailored to your
                specific goals.
              </span>
            </motion.p>
            <motion.div
              className="text-lg text-muted-foreground max-w-xl text-textcolor font-bold"
              variants={itemVariants}
            >
              Comprehensive Services:
              <span className="font-normal">
                {" "}
                From concept to execution, we manage every aspect of your
                exhibition booth. Our services include:
                <ul className="list-disc pl-8">
                  <li>Booth design and fabrication </li>
                  <li>Setup and teardown </li>
                  <li>AV and technology integration </li>
                  <li>Logistics and transportation </li>
                  <li>On-site support </li>
                </ul>
              </span>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl text-textcolor font-bold"
              variants={itemVariants}
            >
              Expert Guidance:
              <span className="font-normal">
                {" "}
                Our dedicated team has extensive experience in the exhibition
                industry. We provide expert advice to help you maximize your
                booth's potential and ensure a successful event.
              </span>
            </motion.p>
            <motion.button
              className="bg-secondary hover:bg-neutral-700 text-white rounded-full px-8 py-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-12 grid-rows-12 gap-4"
            variants={containerVariants}
          >
            <motion.div
              className="row-span-12 col-span-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo1.jpg"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="row-span-6 col-span-6 col-start-7"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo2.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="row-span-6 col-span-6 row-start-7 col-start-7"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo3.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// pages/index.js
// import React from "react";

// export function AboutSection() {
//   return (
//     <div className="bg-gray-50 min-h-screen flex justify-center items-center">
//       <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Text Section */}
//         <div>
//           <h3 className="text-green-600 font-semibold text-lg uppercase mb-2">
//             About Us
//           </h3>
//           <h1 className="text-gray-900 font-bold text-4xl sm:text-5xl mb-6">
//             Crafting Inspired Spaces for Over 15 Years
//           </h1>
//           <p className="text-gray-600 leading-relaxed mb-6">
//             Established with a passion for creativity and a commitment to
//             excellence, Upstairs has been transforming spaces since 2009. With a
//             keen eye for detail and a focus on innovation, we strive to exceed
//             our clients' expectations with every project we undertake.
//           </p>
//           <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition">
//             Read More
//           </button>
//         </div>

//         {/* Image Grid Section */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="col-span-1 row-span-2">
//             <img
//               src="/images/1.jpg"
//               alt="Modern kitchen design"
//               className="rounded-lg w-full object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/2.jpg"
//               alt="Living room with orange chair"
//               className="rounded-lg w-full object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/3.jpg"
//               alt="Room with plants and mirror"
//               className="rounded-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;
