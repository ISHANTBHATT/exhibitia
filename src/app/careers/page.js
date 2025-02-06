"use client";
import CareersForm from "../components/CareersForm";
import { Lightbulb, Users, Rocket, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas.",
    gradient: "from-pink-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together to achieve greatness.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "We're committed to personal and professional development.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in our work.",
    gradient: "from-red-500 to-orange-500",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="relative flex justify-around py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary -z-10 clip-diagonal"></div>
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl mb-8"
          >
            Be part of something extraordinary. Shape the future with us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("application-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-neutral-700 text-white hover:bg-neutral-600"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/images/career2.png"
            alt="carrer"
            width={900}
            height={100}
            className="w-80 hidden sm:flex"
          />
        </motion.div>
      </div>

      <div className=" mx-auto py-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Our Values
          </motion.h2>
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <value.icon className="w-12 h-12 text-secondary mb-2" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="h-full bg-gray-100 py-16 ">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {values.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Gradient Header */}
                      <div
                        className={`h-16 bg-gradient-to-r ${item.gradient} relative`}
                      >
                        {/* Icon Circle */}
                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                          <div className="bg-white p-3 rounded-full shadow-lg">
                            <Icon className="w-10 h-10  text-[#269FCB]" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 pt-10 pb-6">
                        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/career.jpg"
              alt="carrer"
              width={1000}
              height={500}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-full md:w-1/2"
          >
            <CareersForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
