// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import PhotoGallery from "../components/PhotoGallery";
// import VideoGallery from "../components/VideoGallery";

// export default function GalleryPage() {
//   const [activeGallery, setActiveGallery] = useState("photos");

//   return (
//     <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
//       <motion.h1
//         className="text-4xl font-bold mb-8 text-center text-indigo-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Inspiring Gallery
//       </motion.h1>
//       <div className="flex justify-center space-x-4 mb-12">
//         <Button
//           variant={activeGallery === "photos" ? "default" : "outline"}
//           onClick={() => setActiveGallery("photos")}
//           className="px-6 py-2 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//         >
//           Photos
//         </Button>
//         <Button
//           variant={activeGallery === "videos" ? "default" : "outline"}
//           onClick={() => setActiveGallery("videos")}
//           className="px-6 py-2 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//         >
//           Videos
//         </Button>
//       </div>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeGallery}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {activeGallery === "photos" ? <PhotoGallery /> : <VideoGallery />}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

import { Suspense } from "react";
import { getPhotos } from "../components/Photodata";
import GalleryContent from "../components/GalleryContent";

export default async function GalleryPage() {
  const photos = await getPhotos();

  return (
    <div className="container mx-auto py-12 bg-[#FFFAE7] min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">
        Inspiring Gallery
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <GalleryContent initialPhotos={photos} />
      </Suspense>
    </div>
  );
}
