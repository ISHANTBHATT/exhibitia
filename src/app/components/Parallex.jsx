// import React, { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";

// function Parallax() {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setOffset(window.pageYOffset);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Parallax */}
//       <div className="relative h-screen overflow-hidden">
//         {/* Background Image with Parallax Effect */}
//         <div
//           className="absolute inset-0 w-full h-full"
//           style={{
//             backgroundImage:
//               'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070")',
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             transform: `translateY(${offset * 0.5}px)`,
//           }}
//         >
//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         {/* Content */}
//         <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
//             Let's Start Work Today?
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
//             We turn you on to pro lighting strategies to highlight features
//             create intrigue and make the most of indoor and outdoor rooms
//           </p>
//           <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
//             Build Your Dream
//             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <div className="w-6 h-10 border-2 border-white rounded-full p-1">
//             <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
//           </div>
//         </div>
//       </div>

//       {/* Additional content for scrolling */}
//       <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Our Services
//           </h2>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Parallax;

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Parallax() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/bodycare10.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        </div>

        {/* Content with Scroll Animation */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight transform transition duration-1000 hover:scale-105">
            Let&apos;s Start Work Today?
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 transition-opacity duration-500 hover:opacity-90">
            We turn you on to pro lighting strategies to highlight features
            create intrigue and make the most of indoor and outdoor rooms
          </p> */}
          <Link href="contact">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Build Your Booth
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Parallax Content Sections */}
      {/* <div className="relative h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gray-800 transform -translate-y-1/2"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2070")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative text-center max-w-4xl px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Modern Architecture
          </h2>
          <p className="text-gray-200 text-lg">
            Creating spaces that inspire and endure through innovative design
            and precision engineering.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Parallax;
