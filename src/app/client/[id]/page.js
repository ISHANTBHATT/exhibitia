// import Image from "next/image";
// import { notFound } from "next/navigation";

// // This would typically come from a database or API
// const clients = {
//   bodycare: {
//     title: "Bodycare",
//     location: "Jakarta",
//     category: "Interior Design",
//     BannerImage: "/images/bodycare5.jpg",
//     images: [
//       "/images/bodycare6.jpg",
//       "/images/bodycare7.jpg",
//       "/images/bodycare8.jpg",
//       "/images/bodycare9.jpg",
//       "/images/bodycare10.jpg",
//     ],
//     description:
//       "Bodycare is a leading personal care brand in Jakarta. We designed their flagship store to reflect their commitment to natural beauty and wellness.",
//   },
//   "saint-gobain": {
//     title: "Saint Gobain",
//     location: "New York",
//     category: "Interior Design",
//     BannerImage: "/images/saint.jpeg",
//     images: [
//       "/images/saint2.jpg",
//       "/images/saint3.jpg",
//       "/images/saint4.jpg",
//       "/images/saint5.jpg",
//       "/images/saint6.jpg",
//     ],
//     description:
//       "For Saint Gobain's New York office, we created a modern, collaborative space that showcases their innovative building materials.",
//   },
//   dupont: {
//     title: "Dupont",
//     location: "London",
//     category: "Interior Design",
//     BannerImage: "/images/dupont.jpg",
//     images: [
//       "/images/dupont2.jpg",
//       "/images/dupont3.jpg",
//       "/images/dupont4.jpg",
//       "/images/dupont5.jpg",
//       "/images/dupont6.jpg",
//     ],
//     description:
//       "Dupont's London headquarters features a sleek, professional design that emphasizes their commitment to cutting-edge science and sustainability.",
//   },
//   groversons: {
//     title: "Groversons",
//     location: "Paris",
//     category: "Interior Design",
//     BannerImage: "/images/Groversons.jpg",
//     images: [
//       "/images/Groversons2.jpg",
//       "/images/Groversons3.jpg",
//       "/images/Groversons4.jpg",
//       "/images/Groversons5.jpg",
//       "/images/Groversons6.jpg",
//       "/images/Groversons7.jpg",
//     ],
//     description:
//       "For Groversons' Paris boutique, we designed an elegant, intimate space that highlights their luxury lingerie collections.",
//   },
//   twiga: {
//     title: "Twiga",
//     location: "Dubai",
//     category: "Interior Design",
//     BannerImage: "/images/Twiga.jpg",
//     images: [
//       "/images/Twiga2.jpg",
//       "/images/Twiga3.jpg",
//       "/images/Twiga4.jpg",
//       "/images/Twiga5.jpg",
//       "/images/Twiga6.jpg",
//     ],
//     description:
//       "Twiga's Dubai restaurant combines contemporary design with African-inspired elements, creating a unique dining experience.",
//   },
//   "groz-beckert": {
//     title: "Groz-Beckert",
//     location: "Stockholm",
//     category: "Interior Design",
//     BannerImage: "/images/Groz.jpg",
//     images: ["images/Groz2.jpg", "images/Groz3.jpg", "images/Groz4.jpg"],
//     description:
//       "For Groz-Beckert's Stockholm office, we designed a space that reflects their precision engineering, with clean lines and a focus on functionality.",
//   },
// };

// export default function ClientPage({ params }) {
//   const client = clients[params.id];

//   if (!client) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4">{client.title}</h1>
//       <div className="w-full">
//         <div>
//           <Image
//             src={client.BannerImage}
//             alt={client.title}
//             width={2000}
//             height={800}
//             className="rounded-lg object-cover w-full h-[400px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// This would typically come from a database or API
const clients = {
  bodycare: {
    title: "Bodycare",
    location: "Jakarta",
    category: "Interior Design",
    BannerImage: "/images/bodycare12.jpg",
    images: [
      "/images/bodycare12.jpg",
      "/images/bodycare13.jpg",
      "/images/bodycare14.jpg",
      "/images/bodycare15.jpg",
      "/images/bodycare16.jpg",
      "/images/bodycare17.jpg",
      "/images/bodycare18.jpg",
      "/images/bodycare19.jpg",
      "/images/bodycare20.jpg",
      "/images/bodycare21.jpg",
      "/images/bodycare22.jpg",
    ],
    description:
      "Bodycare is a leading personal care brand in Jakarta. We designed their flagship store to reflect their commitment to natural beauty and wellness. Our team worked closely with Bodycare to create a space that not only showcases their products but also provides an immersive experience for customers. The design incorporates natural materials, soothing colors, and ample natural light to create a calming atmosphere that aligns with Bodycare's ethos.",
    otherImages: [
      "/images/bodycare2.jpg",
      "/images/bodycare3.jpg",
      "/images/bodycare4.jpg",
      "/images/bodycare6.jpg",
    ],
  },
  "saint-gobain": {
    title: "Saint Gobain",
    location: "New York",
    category: "Interior Design",
    BannerImage: "/images/saint.jpeg",
    images: ["/images/saint.jpeg", "/images/saint0.jpeg"],
    description:
      "For Saint Gobain's New York office, we created a modern, collaborative space that showcases their innovative building materials. The design emphasizes open spaces, flexible work areas, and cutting-edge technology integration. We incorporated Saint Gobain's own products throughout the office, demonstrating their practical applications and aesthetic appeal. The result is a dynamic workspace that fosters creativity, collaboration, and reflects Saint Gobain's position as a leader in sustainable building solutions.",
    otherImages: [
      "/images/saint1.jpg",
      "/images/saint2.jpg",
      "/images/saint3.jpg",
      "/images/saint4.jpg",
    ],
  },
  dupont: {
    title: "Dupont",
    location: "London",
    category: "Interior Design",
    BannerImage: "/images/dupont9.jpg",
    images: [
      "/images/dupont.jpg",
      "/images/dupont2.jpg",
      "/images/dupont3.jpg",
      "/images/dupont4.jpg",
    ],
    description:
      "Dupont's London headquarters features a sleek, professional design that emphasizes their commitment to cutting-edge science and sustainability. Our design team focused on creating a space that balances functionality with inspiration, incorporating Dupont's innovative materials throughout the office. The layout promotes collaboration and creativity, with state-of-the-art laboratories, flexible meeting spaces, and areas dedicated to showcasing Dupont's latest innovations. Sustainable design principles were applied throughout, reflecting Dupont's commitment to environmental responsibility.",
    otherImages: [
      "/images/dupont5.jpg",
      "/images/dupont6.jpg",
      "/images/dupont7.jpg",
      "/images/dupont10.jpg",
    ],
  },
  groversons: {
    title: "Groversons",
    location: "Paris",
    category: "Interior Design",
    BannerImage: "/images/Groversons.jpg",
    images: [
      "/images/Groversons2.jpg",
      "/images/Groversons3.jpg",
      "/images/Groversons4.jpg",
      "/images/Groversons5.jpg",
      "/images/Groversons6.jpg",
      "/images/Groversons7.jpg",
    ],
    description:
      "For Groversons' Paris boutique, we designed an elegant, intimate space that highlights their luxury lingerie collections. The interior combines classic Parisian charm with modern sophistication, creating an atmosphere of refined luxury. Soft lighting, plush fabrics, and carefully curated display areas showcase Groversons' exquisite pieces while ensuring customer comfort and privacy. The boutique's layout guides customers through a journey of discovery, with each section telling a unique story of style and craftsmanship.",
  },
  twiga: {
    title: "Twiga",
    location: "Dubai",
    category: "Interior Design",
    BannerImage: "/images/Twiga.jpg",
    images: [
      "/images/Twiga2.jpg",
      "/images/Twiga3.jpg",
      "/images/Twiga4.jpg",
      "/images/Twiga5.jpg",
      "/images/Twiga6.jpg",
    ],
    description:
      "Twiga's Dubai restaurant combines contemporary design with African-inspired elements, creating a unique dining experience. Our design team drew inspiration from the diverse landscapes and rich cultural heritage of Africa, incorporating warm earth tones, natural textures, and striking geometric patterns. The space features custom-made furniture, vibrant artwork, and ambient lighting that together create an immersive atmosphere. The layout balances intimate dining areas with more social spaces, catering to various dining preferences while maintaining a cohesive aesthetic throughout.",
  },
  interarch: {
    title: "Interarch",
    location: "Stockholm",
    category: "Interior Design",
    BannerImage: "/images/interarch6.jpg",
    images: [
      "/images/interarch5.jpg",
      "/images/interarch6.jpg",
      "/images/interarch7.jpg",
      "/images/interarch8.jpg",
      "/images/interarch9.jpg",
      "/images/interarch10.jpg",
    ],
    description:
      "For Groz-Beckert's Stockholm office, we designed a space that reflects their precision engineering, with clean lines and a focus on functionality. The interior embodies Groz-Beckert's commitment to innovation and efficiency in the textile industry. We created a minimalist yet warm environment, using a palette of cool grays accented with the company's signature blue. The office layout promotes collaboration and knowledge sharing, with open work areas, dedicated project rooms, and a state-of-the-art showroom for demonstrating Groz-Beckert's cutting-edge textile machinery and components.",
    otherImages: [
      "/images/interarch1.jpeg",
      "/images/interarch2.jpeg",
      "/images/interarch3.jpeg",
      "/images/interarch4.jpeg",
    ],
  },
};

export default function ClientPage({ params }) {
  const unwrappedParams = React.use(params);
  const client = clients[unwrappedParams.id];
  const [selectedImage, setSelectedImage] = useState(0);
  //   const client = clients[params.id];

  if (!client) {
    notFound();
  }

  return (
    // <div className="min-h-screen bg-gray-100 py-16">
    //   <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
    //     <Image
    //       src={client.BannerImage}
    //       alt={client.title}
    //       layout="fill"
    //       objectFit="cover"
    //       className="brightness-50"
    //     />
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <motion.h1
    //         className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         {client.title}
    //       </motion.h1>
    //     </div>
    //   </div>
    //   <div className="container mx-auto px-4 py-12">
    //     <motion.div
    //       className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: 0.2 }}
    //     >
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         <div>
    //           <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
    //           <p className="text-gray-600 mb-2">
    //             <span className="font-medium">Location:</span> {client.location}
    //           </p>
    //           <p className="text-gray-600 mb-4">
    //             <span className="font-medium">Category:</span> {client.category}
    //           </p>
    //           <p className="text-gray-700 leading-relaxed">
    //             {client.description}
    //           </p>
    //         </div>
    //         <div>
    //           <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
    //           <div className="grid grid-cols-2 gap-4">
    //             {client.images.map((image, index) => (
    //               <motion.div
    //                 key={index}
    //                 className="relative h-40 rounded-lg overflow-hidden"
    //                 initial={{ opacity: 0, scale: 0.9 }}
    //                 animate={{ opacity: 1, scale: 1 }}
    //                 transition={{ duration: 0.3, delay: 0.1 * index }}
    //               >
    //                 <Image
    //                   src={image}
    //                   alt={`${client.title} - Image ${index + 1}`}
    //                   layout="fill"
    //                   objectFit="cover"
    //                   className="transition-transform duration-300 hover:scale-110"
    //                 />
    //               </motion.div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={client.BannerImage}
          alt={client.title}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {client.title}
          </motion.h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              {/* <p className="text-gray-600 mb-2">
                <span className="font-medium">Location:</span> {client.location}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Category:</span> {client.category}
              </p> */}
              <p className="text-gray-700 leading-relaxed">
                {client.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
              <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={client.images[selectedImage]}
                  alt={`${client.title} - Featured Image`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                />
              </div>
              {/* <div className="grid grid-cols-5 gap-2">
                {client.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === index ? "ring-2 ring-blue-500" : ""
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${client.title} - Thumbnail ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div> */}

              <div className="overflow-x-auto pb-4">
                <div
                  className="flex space-x-4"
                  style={{ width: `${client.images.length * 120}px` }}
                >
                  {client.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden cursor-pointer ${
                        selectedImage === index ? "ring-2 ring-blue-500" : ""
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${client.title} - Thumbnail ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={client.BannerImage}
          alt={client.title}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div> */}
      {/* <div className="grid grid-cols-12 grid-rows-12 gap-4 w-full h-full">
        <div className="col-span-12 row-span-4 relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {" "}
          <Image
            src={client.BannerImage}
            alt={client.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="col-span-6 row-span-4 row-start-5 relative">
          {" "}
          <Image
            src={client.BannerImage}
            alt={client.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="col-span-6 row-span-4 col-start-7 row-start-5 relative ">
          {" "}
          <Image
            src={client.BannerImage}
            alt={client.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="col-span-12 row-span-4 row-start-9 relative ">
          {" "}
          <Image
            src={client.BannerImage}
            alt={client.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-12 grid-rows-12 gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="col-span-12 row-span-4 relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src={
                client.otherImages && client.otherImages[0]
                  ? client.otherImages[0]
                  : client.BannerImage
              }
              alt={client.title}
              //   layout="fill"
              width={2000}
              height={1000}
              //   objectFit="cover"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 row-span-4 row-start-5 relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src={
                client.otherImages && client.otherImages[1]
                  ? client.otherImages[1]
                  : client.BannerImage
              }
              alt={`${client.title} - Additional Image 1`}
              width={2000}
              height={1000}
              //   layout="fill"
              //   objectFit="cover"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-4 col-start-7 row-start-5 relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src={
                client.otherImages && client.otherImages[2]
                  ? client.otherImages[2]
                  : client.BannerImage
              }
              alt={`${client.title} - Additional Image 2`}
              //   layout="fill"
              //   objectFit="cover"
              width={2000}
              height={1000}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 row-span-4 row-start-9 relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src={
                client.otherImages && client.otherImages[3]
                  ? client.otherImages[3]
                  : client.BannerImage
              }
              alt={`${client.title} - Additional Image 3`}
              //   layout="fill"
              //   objectFit="cover"
              width={2000}
              height={1000}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
