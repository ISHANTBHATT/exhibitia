// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// const photos = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/images/5.jpg",
//   "/images/6.jpg",
// ];

// export default function PhotoGallery() {
//   const [selectedId, setSelectedId] = useState(null);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {photos.map((photo, index) => (
//         <motion.div
//           key={index}
//           layoutId={`photo-${index}`}
//           onClick={() => setSelectedId(index)}
//           className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Image
//             src={photo}
//             alt={`Photo ${index + 1}`}
//             width={600}
//             height={400}
//             className="object-cover w-full h-full"
//           />
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div
//             layoutId={`photo-${selectedId}`}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setSelectedId(null)}
//           >
//             <motion.div
//               className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Image
//                 src={photos[selectedId]}
//                 alt={`Photo ${selectedId + 1}`}
//                 width={1200}
//                 height={800}
//                 className="object-contain w-full h-full"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

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

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";

export default function PhotoGallery({ photos }) {
  const [selectedId, setSelectedId] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="px-4">
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
              width={300}
              height={photo.height}
              className="object-cover w-full"
            />
          </motion.div>
        ))}
      </Masonry>

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
              className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedId].src}
                alt={`Photo ${selectedId + 1}`}
                width={600}
                height={photos[selectedId].height * 2}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
