// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

// export default function VideoGallery() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
//         const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
//         const apiURL = process.env.NEXT_PUBLIC_YOUTUBE_API_URL;
//         console.log({ apiKey, apiURL, channelId });
//         const response = await fetch(
//           `${apiURL}?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch videos");
//         }

//         const data = await response.json();
//         const fetchedVideos = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));
//         console.log(data);
//         setVideos(fetchedVideos);
//       } catch (err) {
//         setError("Failed to load videos. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-center text-2xl text-indigo-600">
//         Loading amazing videos...
//       </div>
//     );
//   if (error)
//     return <div className="text-center text-2xl text-red-500">{error}</div>;

//   return (
//     <motion.div
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ staggerChildren: 0.1 }}
//     >
//       {videos.map((video) => (
//         <motion.div
//           key={video.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//             <CardContent className="p-0">
//               <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg line-clamp-2 text-indigo-800">
//                   {video.title}
//                 </h3>
//                 <a
//                   href={`https://www.youtube.com/watch?v=${video.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors duration-300"
//                 >
//                   Watch Video
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Play } from "lucide-react";

// export default function VideoGallery() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
//         const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
//         const apiURL = process.env.NEXT_PUBLIC_YOUTUBE_API_URL;
//         console.log({ apiKey, apiURL, channelId });
//         const response = await fetch(
//           `${apiURL}?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch videos");
//         }

//         const data = await response.json();
//         const fetchedVideos = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));
//         console.log(data);
//         setVideos(fetchedVideos);
//       } catch (err) {
//         setError("Failed to load videos. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-center text-2xl text-primary animate-pulse">
//         Loading amazing videos...
//       </div>
//     );
//   if (error)
//     return <div className="text-center text-2xl text-destructive">{error}</div>;

//   return (
//     <motion.div
//       className="flex flex-wrap justify-around"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ staggerChildren: 0.1 }}
//     >
//       {videos.map((video) => (
//         <motion.div
//           key={video.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-96 h-96"
//         >
//           <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
//             <CardContent className="p-0">
//               <div className="relative group">
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <Play className="text-white w-16 h-16" />
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-lg line-clamp-2 text-neutral-800 mb-4">
//                   {video.title}
//                 </h3>
//                 <a
//                   href={`https://www.youtube.com/watch?v=${video.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center w-full bg-neutral-800 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800/90 transition-colors duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Watch Video
//                   <Play className="ml-2 w-4 h-4" />
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube-videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const fetchedVideos = await response.json();
        setVideos(fetchedVideos);
      } catch (err) {
        setError("Failed to load videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading)
    return (
      <div className="text-center text-2xl text-primary animate-pulse">
        Loading amazing videos...
      </div>
    );
  if (error)
    return <div className="text-center text-2xl text-destructive">{error}</div>;

  return (
    <>
      <motion.div
        className="flex flex-wrap justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-96 h-96"
          >
            <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
              <CardContent className="p-0">
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="relative group"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="text-white w-16 h-16" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg line-clamp-2 text-neutral-800 mb-4">
                    {video.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="inline-flex items-center justify-center w-full bg-neutral-800 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800/90 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Watch Video
                    <Play className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="sm:max-w-[800px] p-0">
          <VisuallyHidden>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </VisuallyHidden>
          <div className="relative pt-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo?.id}`}
              title={selectedVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          {/* <DialogClose className="absolute top-2 right-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
