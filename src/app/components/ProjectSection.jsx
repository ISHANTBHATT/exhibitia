//working
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Header Section */}
//       <section className="container mx-auto px-4 py-12 text-center">
//         <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
//           PROJECTS
//         </h2>
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Transform Your Work And Living Space
//           <br />
//           With Style, Comfort And Functionality
//         </h2>
//       </section>

//       {/* Main Content Grid */}
//       <section className="container mx-auto px-4 grid md:grid-cols-2 gap-6 mb-6">
//         {/* Left Column */}
//         <div className="relative overflow-hidden rounded-xl">
//           <Image
//             src="/images/demo1.jpg"
//             alt="Modern kitchen with pendant lights"
//             width={800}
//             height={600}
//             className="object-cover w-full h-[500px]"
//           />
//           <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
//             <p className="text-white text-sm font-medium mb-2">
//               UNIQUE DESIGNS
//             </p>
//             <h2 className="text-white text-4xl font-bold">
//               Elevate Your Spaces Today
//             </h2>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="grid gap-6">
//           <div className="relative overflow-hidden rounded-xl">
//             <Image
//               src="/images/demo2.jpg"
//               alt="Minimalist kitchen design"
//               width={800}
//               height={300}
//               className="object-cover w-full h-[240px]"
//             />
//             <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
//               <p className="text-white text-sm font-medium mb-2">
//                 RUSTIC DESIGN
//               </p>
//               <h2 className="text-white text-4xl font-bold">
//                 Inspired Designs
//               </h2>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="bg-neutral-800 text-white p-8  rounded-xl">
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="text-5xl font-bold mb-2">210+</p>
//                 <p className="text-sm uppercase">Projects</p>
//               </div>
//               <div>
//                 <p className="text-5xl font-bold mb-2">200+</p>
//                 <p className="text-sm uppercase">Satisfy Customers</p>
//               </div>
//               <div>
//                 <p className="text-5xl font-bold mb-2">50</p>
//                 <p className="text-sm uppercase">Technical Teams</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
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
    <main className="min-h-screen" ref={ref}>
      {/* Header Section */}
      <motion.section
        className="container mx-auto px-4 py-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-sm uppercase tracking-wider text-gray-500 mb-4"
          variants={itemVariants}
        >
          PROJECTS
        </motion.h2>
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Transform Your Exhibition Presence
          <br />
          Custom booth designs that capture attention and drive engagement
        </motion.h2>
      </motion.section>

      {/* Main Content Grid */}
      <motion.section
        className="container mx-auto px-4 grid md:grid-cols-2 gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column */}
        <motion.div
          className="relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          variants={itemVariants}
        >
          <Image
            src="/images/demo1.jpg"
            alt="Modern kitchen with pendant lights"
            width={800}
            height={600}
            className="object-cover w-full h-[500px]"
          />
          <motion.div
            className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full"
            variants={itemVariants}
          >
            <p className="text-white text-sm font-medium mb-2">
              UNIQUE DESIGNS
            </p>
            <h2 className="text-white text-4xl font-bold">
              Elevate Your Spaces Today
            </h2>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="grid gap-6" variants={itemVariants}>
          <motion.div
            className="relative overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/demo2.jpg"
              alt="Minimalist kitchen design"
              width={800}
              height={300}
              className="object-cover w-full h-[240px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full"
              variants={itemVariants}
            >
              <p className="text-white text-sm font-medium mb-2">
                RUSTIC DESIGN
              </p>
              <h2 className="text-white text-4xl font-bold">
                Inspired Designs
              </h2>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="bg-secondary text-white p-8 rounded-xl"
            variants={itemVariants}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-5xl font-bold mb-2">210+</p>
                <p className="text-sm uppercase">Projects</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-5xl font-bold mb-2">200+</p>
                <p className="text-sm uppercase">Satisfy Customers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-5xl font-bold mb-2">50</p>
                <p className="text-sm uppercase">Technical Teams</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
