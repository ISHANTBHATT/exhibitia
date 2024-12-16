// import Image from "next/image";
// // import { Button } from "@/components/ui/button"

// export function HeroSection() {
//   return (
//     <section className="pt-20 pb-12">
//       <div className="container mx-auto px-4">
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Explore Our Design Showcase
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl">
//             From modern minimalism to timeless elegance, our portfolio showcases
//             a spectrum of design styles and inspirations. Discover how we turn
//             visions into captivating realities, one space at a time.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <ProjectCard
//             title="Japanese Sushi Bar"
//             location="Jakarta"
//             category="Interior Design"
//             image="/images/1.jpg"
//           />
//           <ProjectCard
//             title="Japanese Sushi Bar"
//             location="Jakarta"
//             category="Interior Design"
//             image="/images/2.jpg"
//           />
//           <ProjectCard
//             title="Japanese Sushi Bar"
//             location="Jakarta"
//             category="Interior Design"
//             image="/images/3.jpg"
//           />
//           <ProjectCard
//             title="Japanese Sushi Bar"
//             location="Jakarta"
//             category="Interior Design"
//             image="/images/4.jpg"
//           />
//           {/* Add more ProjectCard components here */}
//         </div>
//         <div className="mt-12 text-center">
//           <button>More Projects</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ title, location, category, image }) {
//   return (
//     <div className="relative group overflow-hidden rounded-lg">
//       <Image
//         src={image}
//         alt={title}
//         width={600}
//         height={400}
//         className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//         <div className="absolute bottom-0 p-6">
//           <h3 className="text-xl font-bold text-white">{title}</h3>
//           <p className="text-sm text-white/80">
//             {location} • {category}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

//working

// import Image from "next/image";
// export function HeroSection() {
//   return (
//     <section className="pt-20 pb-12 sm:px-10 bg-neutral-800">
//       <div className="container mx-auto px-4">
//         <div className="mb-12 flex">
//           <div className="text-white">
//             <h2 className="text-lg font-semibold mb-2">OUR PROJECTS</h2>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               Explore Our Design Showcase
//             </h1>
//           </div>

//           <div className="flex flex-col justify-center">
//             <p className="text-lg text-muted-foreground max-w-2xl text-gray-400">
//               From modern minimalism to timeless elegance, our portfolio
//               showcases a spectrum of design styles and inspirations. Discover
//               how we turn visions into captivating realities, one space at a
//               time.
//             </p>
//           </div>
//         </div>
//         {/* <div className="grid grid-cols-12 gap-4">
//           <div className="col-span-12 md:col-span-8">
//             <ProjectCard
//               title="Japanese Sushi Bar"
//               location="Jakarta"
//               category="Interior Design"
//               image="/images/1.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Modern Living Room"
//               location="New York"
//               category="Interior Design"
//               image="/images/2.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Minimalist Bedroom"
//               location="London"
//               category="Interior Design"
//               image="/images/3.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Cozy Kitchen"
//               location="Paris"
//               category="Interior Design"
//               image="/images/4.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Luxurious Bathroom"
//               location="Dubai"
//               category="Interior Design"
//               image="/images/5.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-8">
//             <ProjectCard
//               title="Scandinavian Office"
//               location="Stockholm"
//               category="Interior Design"
//               image="/images/6.jpg"
//             />
//           </div>
//         </div> */}
//         <div className="grid grid-cols-12 gap-4">
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Japanese Sushi Bar"
//               location="Jakarta"
//               category="Interior Design"
//               image="/images/1.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4 md:row-span-2">
//             <ProjectCard
//               title="Modern Living Room"
//               location="New York"
//               category="Interior Design"
//               image="/images/2.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Minimalist Bedroom"
//               location="London"
//               category="Interior Design"
//               image="/images/3.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4 md:row-span-2">
//             <ProjectCard
//               title="Cozy Kitchen"
//               location="Paris"
//               category="Interior Design"
//               image="/images/4.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4 md:row-span-2">
//             <ProjectCard
//               title="Luxurious Bathroom"
//               location="Dubai"
//               category="Interior Design"
//               image="/images/5.jpg"
//             />
//           </div>
//           <div className="col-span-12 md:col-span-4">
//             <ProjectCard
//               title="Scandinavian Office"
//               location="Stockholm"
//               category="Interior Design"
//               image="/images/6.jpg"
//             />
//           </div>
//         </div>
//         <div className="mt-12 text-center ">
//           <button className="bg-buttoncolor hover:bg-neutral-700 text-white rounded-3xl px-4 py-3">
//             More Projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ title, location, category, image }) {
//   return (
//     <div className="relative group overflow-hidden rounded-lg h-full">
//       <Image
//         src={image}
//         alt={title}
//         width={800}
//         height={600}
//         className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//         <div>
//           <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//           <p className="text-sm text-white/80">
//             {location} • {category}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
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
    <section className="pt-20 pb-12 sm:px-10 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 flex"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-white">
            <motion.h2
              className="text-lg font-semibold mb-2"
              variants={itemVariants}
            >
              OUR PROJECTS
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Explore Our Design Showcase
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col justify-center"
            variants={itemVariants}
          >
            <p className="text-lg max-w-2xl text-gray-50">
              From modern minimalism to timeless elegance, our portfolio
              showcases a spectrum of design styles and inspirations. Discover
              how we turn visions into captivating realities, one space at a
              time.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="col-span-12 md:col-span-4"
            variants={itemVariants}
          >
            <ProjectCard
              title="Japanese Sushi Bar"
              location="Jakarta"
              category="Interior Design"
              image="/images/1.jpg"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4 md:row-span-2"
            variants={itemVariants}
          >
            <ProjectCard
              title="Modern Living Room"
              location="New York"
              category="Interior Design"
              image="/images/2.jpg"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4"
            variants={itemVariants}
          >
            <ProjectCard
              title="Minimalist Bedroom"
              location="London"
              category="Interior Design"
              image="/images/3.jpg"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4 md:row-span-2"
            variants={itemVariants}
          >
            <ProjectCard
              title="Cozy Kitchen"
              location="Paris"
              category="Interior Design"
              image="/images/4.jpg"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4 md:row-span-2"
            variants={itemVariants}
          >
            <ProjectCard
              title="Luxurious Bathroom"
              location="Dubai"
              category="Interior Design"
              image="/images/5.jpg"
            />
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4"
            variants={itemVariants}
          >
            <ProjectCard
              title="Scandinavian Office"
              location="Stockholm"
              category="Interior Design"
              image="/images/6.jpg"
            />
          </motion.div>
        </motion.div>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <motion.button
            className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-3xl px-4 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, location, category, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg h-full">
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-white/80">
            {location} • {category}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
