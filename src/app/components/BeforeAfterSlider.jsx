"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Building2, Lightbulb, PaintBucket } from "lucide-react";

const categories = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    beforeImage: "/images/demo1.jpg",
    afterImage: "/images/demo2.jpg",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
    beforeImage: "/images/demo2.jpg",
    afterImage: "/images/demo2.jpg",
  },
  {
    id: "lighting",
    label: "Lighting Design",
    icon: Lightbulb,
    beforeImage: "/images/demo3.jpg",
    afterImage: "/images/demo3.jpg",
  },
  {
    id: "artdeco",
    label: "Art Deco",
    icon: PaintBucket,
    beforeImage: "/images/demo4.jpg",
    afterImage: "/images/demo4.jpg",
  },
];

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleMouseUpGlobal);
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
          BEFORE AND AFTER MAGIC
        </p>
        <h1 className="text-4xl font-bold mb-8">
          Witness The Design Evolution
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={
                  selectedCategory.id === category.id ? "default" : "outline"
                }
                className={`flex items-center gap-2 hover:bg-secondary hover:text-white ${
                  selectedCategory.id === category.id ? "bg-secondary" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[400px] sm:h-[600px] overflow-hidden rounded-lg cursor-ew-resize "
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* After Image */}
        {/* <Image
          src={selectedCategory.afterImage}
          alt={`After ${selectedCategory.label} transformation`}
          layout="fill"
          objectFit="cover"
        /> */}
        <Image
          fill
          draggable={false}
          priority
          src={selectedCategory.afterImage}
          alt={`After ${selectedCategory.label} transformation`}
        />

        {/* Before Image */}

        <div
          className="absolute top-0 left-0 right-0 w-full h-[600px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt={`Before ${selectedCategory.label} transformation`}
            src={selectedCategory.beforeImage}
          />
        </div>
        {/* <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={selectedCategory.beforeImage}
            alt={`Before ${selectedCategory.label} transformation`}
            layout="fill"
            objectFit="cover"
          />
        </div> */}

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-1 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>

        {/* Drag Label */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          DRAG
        </div>

        {/* Before and After Labels */}
        <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          After
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function Slider() {
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMove = (event) => {
//     if (!isDragging) return;

//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
//     const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

//     setSliderPosition(percent);
//   };

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div className="w-full relative" onMouseUp={handleMouseUp}>
//       <div
//         className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
//         onMouseMove={handleMove}
//         onMouseDown={handleMouseDown}
//       >
//         <Image alt="" fill draggable={false} priority src="/images/demo1.jpg" />

//         <div
//           className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
//           style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
//         >
//           <Image
//             fill
//             priority
//             draggable={false}
//             alt=""
//             src="/images/demo2.jpg"
//           />
//         </div>

//         <div
//           className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
//           style={{
//             left: `calc(${sliderPosition}% - 1px)`,
//           }}
//         >
//           <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
//         </div>
//       </div>
//     </div>
//   );
// }
