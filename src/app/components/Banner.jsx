// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Banner() {
//   const router = useRouter();
//   return (
//     <div className="min-h-screen relative overflow-hidden font-sans text-white">
//       {/* <Image
//         src="/images/13_edited.jpg"
//         alt="Luxury resort"
//         fill
//         className="object-cover"
//         priority
//       /> */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 object-cover w-full h-full"
//       >
//         <source src="videoplayback.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div></div>

//       <div className="relative min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-40 gap-4">
//         <p className="font-bold">ART OF LIVING</p>
//         <h1 className="text-5xl lg:text-6xl font-bold px-4 lg:px-40 text-center mb-8 font-outfit">
//           Save 10% on Your Next Interior Transformation!
//         </h1>
//         <p className="text-center font-medium px-4 md:px-40 lg:px-72 xl:px-96 text-lg">
//           Vel nam enim inceptos pharetra eget inceptos aliquam lacus? Volutpat
//           euismod turpis curabitur amet a penatibus nullam etiam. Volutpat
//           euismod turpis curabitur amet a penatibus nullam etiam
//         </p>
//         <button></button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
// import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { IoLogoInstagram, IoIosMail } from "react-icons/io";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  {
    subtitle: "UNIQUE DESIGN",
    title: "Crafting Beautiful Spaces With A Personal Touch",
    description:
      "Gravida nulla luctus enim ut mauris neque dapibus gravida parturient. Vivamus commodo nisl elementum eu iaculis ultrices urna ultricies. Vivamus commodo nisl elementum eu iaculis ultrices urna ultricies.",
  },
  {
    subtitle: "INTERIOR DESIGN",
    title: "Transform Your Space Into Something Extraordinary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    subtitle: "CUSTOM SOLUTIONS",
    title: "Bringing Your Vision To Life With Excellence",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/images/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Social Links */}
      <div className="absolute left-2 lg:left-6 top-2/3 -translate-y-1/2 hidden md:flex md:flex-col gap-6 text-white z-10 ">
        <div className="flex flex-col gap-4 ">
          <div className="w-10 h-10 border-[1px] rounded-lg border-white flex items-center justify-center -rotate-90 hover:bg-secondary hover:text-black">
            <FaFacebookF className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="w-10 h-10 border-[1px] rounded-lg border-white flex items-center justify-center -rotate-90 hover:bg-secondary hover:text-black">
            <IoLogoInstagram className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="w-10 h-10 border-[1px] rounded-lg border-white flex items-center justify-center -rotate-90 hover:bg-secondary hover:text-black">
            <FaYoutube className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="w-10 h-10 border-[1px] rounded-lg border-white flex items-center justify-center -rotate-90 hover:bg-secondary hover:text-black">
            <IoIosMail className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <span className="writing-mode-vertical text-xl font-bold tracking-widest rotate-180 flex items-center">
          FOLLOW US ON :
        </span>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="  font-bold tracking-widest mb-4 ">
            {slides[currentSlide].subtitle}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
            {slides[currentSlide].description}
          </p>
          {/* <button className="bg-[#8B8567] text-white px-8 py-3 inline-flex items-center gap-2 hover:bg-[#736F56] transition-colors">
            Know More
            <span className="ml-2">→</span>
          </button> */}
          <button className="bg-secondary hover:bg-neutral-700 text-white px-8 py-3 inline-flex items-center gap-2 rounded-full transition-colors">
            Know More
            <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll More */}
      <div className="hidden md:flex absolute right-8 top-2/3 -translate-y-1/2 z-10">
        <span className="writing-mode-vertical text-white text-lg font-bold tracking-widest">
          SCROLL MORE
        </span>
      </div>

      {/* Custom CSS for vertical text */}
      <style jsx global>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
