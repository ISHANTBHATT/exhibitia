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
        <Button
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
          {activeGallery === "photos" ? (
            <PhotoGallery photos={initialPhotos} />
          ) : (
            <VideoGallery />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
