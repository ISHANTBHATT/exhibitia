"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, RotateCw, ChevronRight } from "lucide-react";

const styles = [
  {
    id: 1,
    name: "Contemporary Modern",
    image: "/images/demo1.jpg",
  },
  {
    id: 2,
    name: "Modern Elegance",
    image: "/images/demo2.jpg",
  },
  {
    id: 3,
    name: "Clean Line Aesthetic",
    image: "/images/demo3.jpg",
  },
  {
    id: 4,
    name: "Traditional Luxury",
    image: "/images/demo4.jpg",
  },
  {
    id: 5,
    name: "Historical Elegance",
    image: "/images/demo1.jpg",
  },
  {
    id: 6,
    name: "Woodland Cozy",
    image: "/images/demo2.jpg",
  },
];

export default function CabinetShowcase() {
  const [activeStyle, setActiveStyle] = useState(styles[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-[#6A1E55]">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Behind The Scenes With A DuraBuild Cabinet
      </h1>

      <div className="grid md:grid-cols-[400px,1fr] gap-8">
        <div className="space-y-2 mt-32">
          {styles.map((style) => (
            <motion.button
              key={style.id}
              onClick={() => setActiveStyle(style)}
              className={`w-full text-left p-4 rounded-lg flex items-center justify-between group hover:bg-gray-100 transition-colors ${
                activeStyle.id === style.id ? "bg-gray-100" : ""
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">
                {style.id}. {style.name}
              </span>
              <ChevronRight
                className={`w-5 h-5 transition-transform ${
                  activeStyle.id === style.id
                    ? "rotate-90"
                    : "group-hover:translate-x-1"
                }`}
              />
            </motion.button>
          ))}
        </div>

        <div className="relative">
          <div className="flex items-center gap-10 mb-4">
            {/* <div className="text-amber-900">★</div> */}
            <h2 className="text-2xl md:text-3xl font-bold w-full">
              Your Dream Home, Our Design
            </h2>
            <p className="text-[#A64D79] mb-6">
              Hendrerit consectetur fames turpis egestas lectus. Nam risus fusce
              per eros sollicitudin turpis. Massa taciti ad morbi cursus ante
              convallis curabitur varius.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-video">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStyle.id}
                src={activeStyle.image}
                alt={activeStyle.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <motion.button
                onClick={toggleFullscreen}
                className="w-12 h-12 rounded-full bg-[#A64D79] text-white flex items-center justify-center hover:bg-[#6A1E55] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Expand className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
