"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";

export default function GalleryContent({ initialPhotos }) {
  const [activeGallery, setActiveGallery] = useState("photos");

  return (
    <>
      <div className="flex justify-center space-x-4 mb-12">
        {/* <Button
          variant={activeGallery === "photos" ? "default" : "outline"}
          onClick={() => setActiveGallery("photos")}
          className="px-6 py-2 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-secondary"
        >
          Photos
        </Button>
        <Button
          variant={activeGallery === "videos" ? "default" : "outline"}
          onClick={() => setActiveGallery("videos")}
          className="px-6 py-2 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-secondary"
        >
          Videos
        </Button> */}
        <Button
          onClick={() => setActiveGallery("photos")}
          className={`
            px-4 sm:px-8 py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out
            transform hover:scale-105 hover:shadow-lg
            ${
              activeGallery === "photos"
                ? "bg-secondary  shadow-[0_0_15px_rgba(var(--secondary),0.5)] scale-105 hover:bg-secondary"
                : "bg-neutral-700 text-neutral-100 hover:bg-neutral-600"
            }
          `}
        >
          <span className="relative z-10">Photos</span>
        </Button>
        <Button
          onClick={() => setActiveGallery("videos")}
          className={`
            px-4 sm:px-8 py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out
            transform hover:scale-105 hover:shadow-lg
            ${
              activeGallery === "videos"
                ? "bg-secondary  shadow-[0_0_15px_rgba(var(--secondary),0.5)] scale-105 hover:bg-secondary"
                : "bg-neutral-700 text-neutral-100 hover:bg-neutral-600"
            }
          `}
        >
          <span className="relative z-10">Videos</span>
        </Button>
        <Button
          onClick={() => setActiveGallery("projects")}
          className={`
            px-4 sm:px-8 py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out
            transform hover:scale-105 hover:shadow-lg
            ${
              activeGallery === "projects"
                ? "bg-secondary  shadow-[0_0_15px_rgba(var(--secondary),0.5)] scale-105 hover:bg-secondary"
                : "bg-neutral-700 text-neutral-100 hover:bg-neutral-600"
            }
          `}
        >
          <span className="relative z-10">3D Desgins</span>
        </Button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGallery}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* {activeGallery === "photos" ? (
            <PhotoGallery photos={initialPhotos} />
          ) : (
            <VideoGallery />
          )} */}
          {activeGallery === "photos" && <PhotoGallery api="photos" />}
          {activeGallery === "videos" && <VideoGallery />}
          {activeGallery === "projects" && <PhotoGallery api="projectImages" />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
