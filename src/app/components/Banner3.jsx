"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  ArrowLeft,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    category: "DECOR TRENDS",
    title: "Design Beyond Limits",
    description:
      "Erat euismod molestie faucibus accumsan senectus rhoncus venenatis parturient amet.Erat varius parturient elit ullamcorper tellus lectus porta dapibus.",
    backgroundImage: "/images/demo2.jpg",
    videoThumbnail: "/images/1.jpg",
    videoUrl: "/videoplayback.mp4",
  },
  {
    category: "INTERIOR DESIGN",
    title: "Modern Living Spaces",
    description:
      "Create stunning interior spaces that blend functionality with aesthetic appeal. Our modern design approaches focus on clean lines and natural materials.",
    backgroundImage: "/images/demo3.jpg",
    videoThumbnail: "/images/2.jpg",
    videoUrl: "/videoplayback.mp4",
  },
  {
    category: "ARCHITECTURE",
    title: "Innovative Structures",
    description:
      "Explore groundbreaking architectural designs that push the boundaries of conventional building methods while maintaining practical living spaces.",
    backgroundImage: "/images/demo1.jpg",
    videoThumbnail: "/images/3.jpg",
    videoUrl: "/videoplayback.mp4",
  },
];

const animateSlowZoomOut = `
@keyframes slowZoomOut {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.animate-slow-zoom-out {
  animation: slowZoomOut 3s ease-out forwards;
}
`;

export default function Banner3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Add the keyframe animation styles on the client-side
    const styleElement = document.createElement("style");
    styleElement.textContent = animateSlowZoomOut;
    document.head.appendChild(styleElement);

    return () => {
      // Cleanup: remove the style element when the component unmounts
      document.head.removeChild(styleElement);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimationKey((prev) => prev + 1);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimationKey((prev) => prev + 1);
    setIsPlaying(false);
  };

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#f5f5f5]">
      {/* Social Media Sidebar */}
      {/* <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-10">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Facebook className="h-5 w-5 text-[#A64D79]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Instagram className="h-5 w-5 text-[#A64D79]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Twitter className="h-5 w-5 text-[#A64D79]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Youtube className="h-5 w-5 text-[#A64D79]" />
        </Button>
      </div> */}

      {/* Main Content */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          key={animationKey}
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 ">
          <div className="container mx-auto px-8 py-16 h-full flex items-center justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-[#7A1CAC] text-sm tracking-wide">
                  {slides[currentSlide].category}
                </p>
                <h1 className="text-[#7A1CAC] text-4xl md:text-6xl font-bold tracking-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-[#7A1CAC] max-w-xl">
                  {slides[currentSlide].description}
                </p>
                <Button className="bg-[#AD49E1] hover:bg-[#7A1CAC] text-white mt-4 group">
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Video Section */}
              <div className="relative mt-8 md:mt-0">
                {isPlaying ? (
                  <video
                    autoPlay
                    controls
                    className="w-full rounded-lg shadow-xl"
                    src={slides[currentSlide].videoUrl}
                  />
                ) : (
                  <div className="relative flex justify-end">
                    <img
                      src={slides[currentSlide].videoThumbnail}
                      alt="Video thumbnail"
                      className="w-56 h-32 rounded-lg shadow-xl"
                    />
                    <Button
                      onClick={toggleVideo}
                      className="absolute top-1/2 right-12 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-16 h-16"
                    >
                      <Play className="h-6 w-6 text-[#7A1CAC]" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        className="absolute right-20 bottom-5 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12"
        size="icon"
      >
        <ArrowLeft className="h-6 w-6 text-[#7A1CAC]" />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-4 bottom-5 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12"
        size="icon"
      >
        <ArrowRight className="h-6 w-6 text-[#7A1CAC]" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "bg-[#7A1CAC] w-8" : "bg-neutral-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// const animateSlowZoomOut = `
// @keyframes slowZoomOut {
//   from {
//     transform: scale(1.1);
//   }
//   to {
//     transform: scale(1);
//   }
// }

// .animate-slow-zoom-out {
//   animation: slowZoomOut 3s ease-out forwards;
// }
// `;

// const styleElement = document.createElement("style");
// styleElement.textContent = animateSlowZoomOut;
// document.head.appendChild(styleElement);
