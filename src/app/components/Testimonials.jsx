// import Image from "next/image";
// // import { Button } from "@/components/ui/button";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// export function Testimonials() {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <Image
//               src="/images/1.jpg"
//               alt="Modern interior design"
//               width={800}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               Transforming Our Dreams Into Reality
//             </h2>
//             <blockquote className="mb-8">
//               <p className="text-lg text-muted-foreground mb-4">
//                 "Working with Upstairs was an absolute pleasure from start to
//                 finish. Our home has been transformed into a sanctuary that
//                 reflects our personality and style perfectly. We couldn't be
//                 happier with the results and highly recommend Upstairs to anyone
//                 looking for exceptional interior design service."
//               </p>
//               <footer className="flex items-center gap-4">
//                 <Image
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Sarah & John"
//                   width={48}
//                   height={48}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <cite className="font-medium">Sarah & John</cite>
//                   <p className="text-sm text-muted-foreground">
//                     Business Owner
//                   </p>
//                 </div>
//               </footer>
//             </blockquote>
//             <div className="flex gap-2">
//               <button className="p-4 bg-gray-100 rounded-full">
//                 <IoIosArrowBack className="h-4 w-4" />
//               </button>
//               <button className="p-4 bg-gray-100 rounded-full">
//                 <IoIosArrowForward className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//working
// "use client";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export const Testimonials = ({ testimonials, autoplay = false }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const isActive = (index) => {
//     return index === active;
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const interval = setInterval(handleNext, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [autoplay]);

//   const randomRotateY = () => {
//     return Math.floor(Math.random() * 21) - 10;
//   };
//   return (
//     <div className="max-w-sm md:max-w-full mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
//       <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
//         <div>
//           <div className="relative h-80 w-full">
//             <AnimatePresence>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.src}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: -100,
//                     rotate: randomRotateY(),
//                   }}
//                   animate={{
//                     opacity: isActive(index) ? 1 : 0.7,
//                     scale: isActive(index) ? 1 : 0.95,
//                     z: isActive(index) ? 0 : -100,
//                     rotate: isActive(index) ? 0 : randomRotateY(),
//                     zIndex: isActive(index)
//                       ? 40
//                       : testimonials.length + 2 - index,
//                     y: isActive(index) ? [0, -80, 0] : 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: 100,
//                     rotate: randomRotateY(),
//                   }}
//                   transition={{
//                     duration: 0.4,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 origin-bottom"
//                 >
//                   <Image
//                     src={testimonial.src}
//                     alt={testimonial.name}
//                     width={500}
//                     height={500}
//                     draggable={false}
//                     className="h-full w-full rounded-3xl object-cover object-center"
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//         <div className="flex justify-between flex-col py-4">
//           <motion.div
//             key={active}
//             initial={{
//               y: 20,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{
//               y: -20,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//           >
//             <h3 className="text-2xl font-bold text-black">
//               {testimonials[active].name}
//             </h3>
//             <p className="text-sm text-gray-500 ">
//               {testimonials[active].designation}
//             </p>
//             <motion.p className="text-lg text-gray-500 mt-8">
//               {testimonials[active].quote.split(" ").map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{
//                     filter: "blur(10px)",
//                     opacity: 0,
//                     y: 5,
//                   }}
//                   animate={{
//                     filter: "blur(0px)",
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: "easeInOut",
//                     delay: 0.02 * index,
//                   }}
//                   className="inline-block"
//                 >
//                   {word}&nbsp;
//                 </motion.span>
//               ))}
//             </motion.p>
//           </motion.div>
//           <div className="flex gap-4 pt-12 md:pt-0">
//             <button
//               onClick={handlePrev}
//               className="h-10 w-10 rounded-full bg-neutral-800  flex items-center justify-center group/button"
//             >
//               <FaArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center group/button"
//             >
//               <FaArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export const Testimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-sm md:max-w-full mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <motion.div
            className="relative h-80 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 ">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <motion.button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
