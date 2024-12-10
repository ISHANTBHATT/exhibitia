// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function TeamSection() {
//   const team = [
//     {
//       name: "Interior Decorator",
//       role: "INTERIOR DECORATOR",
//       image: "/images/person.png",
//     },
//     {
//       name: "Production Designer",
//       role: "PRODUCTION DESIGNER",
//       image: "/images/person2.png",
//     },
//     {
//       name: "Manager",
//       role: "MANAGER",
//       image: "/images/person.png",
//     },
//     {
//       name: "Bath Designer",
//       role: "BATH DESIGNER",
//       image: "/images/person2.png",
//     },
//     {
//       name: "CEO",
//       role: "CEO",
//       image: "/images/person.png",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-neutral-800 text-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h3 className="text-muted-foreground mb-2">TOP PERFORMERS</h3>
//           <h2 className="text-4xl font-bold">Get To Know Our Leading Team</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {team.map((member) => (
//             <Card
//               key={member.name}
//               className="overflow-hidden bg-neutral-700 border-none"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-64 object-cover"
//               />
//               <CardContent className="p-4 text-center">
//                 <h3 className="font-semibold text-white">{member.name}</h3>
//                 <p className="text-sm text-muted-foreground">{member.role}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12 ">
//           <Button variant="outline" className="bg-neutral-700">
//             View Entire Team →
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const team = [
    {
      name: "Interior Decorator",
      role: "INTERIOR DECORATOR",
      image: "/images/person.png",
    },
    {
      name: "Production Designer",
      role: "PRODUCTION DESIGNER",
      image: "/images/person2.png",
    },
    {
      name: "Manager",
      role: "MANAGER",
      image: "/images/person.png",
    },
    {
      name: "Bath Designer",
      role: "BATH DESIGNER",
      image: "/images/person2.png",
    },
    {
      name: "CEO",
      role: "CEO",
      image: "/images/person.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="py-16 px-4 bg-secondary text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-muted-foreground mb-2"
            variants={itemVariants}
          >
            TOP PERFORMERS
          </motion.h3>
          <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
            Get To Know Our Leading Team
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="overflow-hidden bg-[#deb276] border-none">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Button
            variant="outline"
            className="bg-[#deb276]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Entire Team →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
