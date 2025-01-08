// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Masonry from "react-masonry-css";

// // Generate random photos with varying heights
// const generatePhotos = (count) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i,
//     src: `/placeholder.svg?height=${Math.floor(
//       Math.random() * 300 + 200
//     )}&width=300&text=Photo ${i + 1}`,
//     height: Math.floor(Math.random() * 300 + 200),
//   }));
// };

// const photos = generatePhotos(20);

// export default function PhotoGallery() {
//   const [selectedId, setSelectedId] = useState(null);

//   const breakpointColumnsObj = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1,
//   };

//   return (
//     <div className="px-4">
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="flex w-auto -ml-4"
//         columnClassName="pl-4 bg-clip-padding"
//       >
//         {photos.map((photo) => (
//           <motion.div
//             key={photo.id}
//             layoutId={`photo-${photo.id}`}
//             onClick={() => setSelectedId(photo.id)}
//             className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Image
//               src={photo.src}
//               alt={`Photo ${photo.id + 1}`}
//               width={300}
//               height={photo.height}
//               className="object-cover w-full"
//             />
//           </motion.div>
//         ))}
//       </Masonry>

//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div
//             layoutId={`photo-${selectedId}`}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setSelectedId(null)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Image
//                 src={photos[selectedId].src}
//                 alt={`Photo ${selectedId + 1}`}
//                 width={600}
//                 height={photos[selectedId].height * 2}
//                 className="object-contain w-full h-full"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

//working
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Masonry from "react-masonry-css";

// export default function PhotoGallery({ photos }) {
//   const [selectedId, setSelectedId] = useState(null);

//   const breakpointColumnsObj = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1,
//   };

//   return (
//     <div className="px-4">
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="flex w-auto -ml-4"
//         columnClassName="pl-4 bg-clip-padding"
//       >
//         {photos.map((photo) => (
//           <motion.div
//             key={photo.id}
//             layoutId={`photo-${photo.id}`}
//             onClick={() => setSelectedId(photo.id)}
//             className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Image
//               src={photo.src}
//               alt={`Photo ${photo.id + 1}`}
//               width={300}
//               height={photo.height}
//               className="object-cover w-full"
//             />
//           </motion.div>
//         ))}
//       </Masonry>

//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div
//             layoutId={`photo-${selectedId}`}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setSelectedId(null)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Image
//                 src={photos[selectedId].src}
//                 alt={`Photo ${selectedId + 1}`}
//                 width={600}
//                 height={photos[selectedId].height * 2}
//                 className="object-contain w-full h-full"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import UploadForm from "./UploadForm";

export default function PhotoGallery({ api }) {
  const [photos, setPhotos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1,
  };

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      console.log("fetching photos", api);
      // const res = await fetch("/api/photos");
      const res = await fetch(`/api/${api}`);
      if (!res.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await res.json();
      setPhotos(data);
      setError(null);
    } catch (err) {
      setError("Error fetching photos. Please try again later.");
      console.error("Error fetching photos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [api]);

  const handleUploadComplete = () => {
    fetchPhotos();
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="px-4 overflow-hidden">
      {/* <UploadForm onUploadComplete={handleUploadComplete} /> */}
      {photos.length === 0 ? (
        <div className="text-center py-4">
          No photos available. Upload some!
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              onClick={() => setSelectedId(photo.id)}
              className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={photo.src}
                alt={`Photo ${photo.id + 1}`}
                width={1000}
                height={photo.height || 200}
                className="object-cover w-full"
              />
            </motion.div>
          ))}
        </Masonry>
      )}

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={`photo-${selectedId}`}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg max-w-4xl max-h-[100vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedId]?.src || ""}
                alt={`Photo ${selectedId + 1}`}
                width={900}
                height={(photos[selectedId]?.height || 200) * 2}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
