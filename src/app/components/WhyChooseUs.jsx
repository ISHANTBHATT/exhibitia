"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Users,
  Globe,
  History,
  Rocket,
  PhoneCall,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles className="w-10 h-10 text-orange-500" />,
      title: "Innovative Designs",
      description:
        "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Exceptional Quality",
      description:
        "We pride ourselves on delivering booths that combine aesthetics with durability.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Customer Focus",
      description:
        "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Global Reach",
      description:
        "Whether your event is local or international, our network and expertise ensure flawless execution.",
    },
  ];
  // const features = [
  //   {
  //     number: "1",
  //     icon: <Sparkles className="w-6 h-6 text-neutral-700" />,
  //     // icon: Sparkles,
  //     title: "Innovative Designs",
  //     color: "bg-[#F15A3C]",
  //     textColor: "text-[#F15A3C]",
  //     description:
  //       "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
  //     position: "bottom",
  //   },
  //   {
  //     number: "2",
  //     icon: <Shield className="w-6 h-6 text-neutral-700" />,
  //     // icon: Shield,
  //     title: "Exceptional Quality",
  //     color: "bg-[#0B9AF1]",
  //     textColor: "text-[#0B9AF1]",
  //     description:
  //       "We pride ourselves on delivering booths that combine aesthetics with durability.",
  //     position: "top",
  //   },
  //   {
  //     number: "3",
  //     icon: <Users className="w-6 h-6 text-neutral-700" />,
  //     // icon: Users,
  //     title: "Customer Focus",
  //     color: "bg-[#00D671]",
  //     textColor: "text-[#00D671]",
  //     description:
  //       "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
  //     position: "bottom",
  //   },
  //   {
  //     number: "4",
  //     icon: <Globe className="w-6 h-6 text-neutral-700" />,
  //     // icon: Globe,
  //     title: "Global Reach",
  //     color: "bg-[#8C52FF]",
  //     textColor: "text-[#8C52FF]",
  //     description:
  //       "Whether your event is local or international, our network and expertise ensure flawless execution.",
  //     position: "top",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white h-full border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="relative">
      
            <div className="absolute top-[108px] left-0 right-0 h-[2px] border-t-2 border-dashed border-gray-300" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {features.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col items-center ${
                    step.position === "top"
                      ? "md:flex-col-reverse"
                      : "md:flex-col"
                  }`}
                >
            
                  <div
                    className={`flex flex-col items-center ${
                      step.position === "top" ? "md:mb-4" : "md:mt-16"
                    }`}
                  >
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`${step.color} text-white font-bold rounded-lg w-8 h-8 flex items-center justify-center`}
                      >
                        {step.number}
                      </div>
                      <h3 className={`${step.textColor} font-semibold`}>
                        {step.title}
                      </h3>
                    </div>

                   
                    <p className="text-gray-600 text-sm text-center">
                      {step.description}
                    </p>
                  </div>

                  
                  <div
                    className={`${step.color} w-16 h-16 rounded-lg flex items-center justify-center relative z-10 bg-white border-4 ${step.color}`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>  */}
        {/* <div className="w-full max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-gray-300" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-0 gap-x-8 md:h-[60vh]">
              {features.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col items-center ${
                    index % 2 !== 0 ? "md:flex-col-reverse" : ""
                  }`}
                >
                  <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2">
                    <div
                      className={`bg-orange-500 w-16 h-16 rounded-lg flex items-center justify-center`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div
                    className={` ${
                      index % 2 !== 0
                        ? "md:mb-10 lg:mb-16"
                        : "md:mt-10 lg:mt-16"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`bg-orange-500 text-white font-bold rounded-lg w-8 h-8 flex items-center justify-center`}
                        >
                          {step.number}
                        </div>
                        <h3 className={`text-neutral-800 font-semibold`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="rounded-full bg-primary/10 p-3 w-fit">
              <History className="w-6 h-6 text-neutral-700" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2017, Exhibitia began with a simple idea: to
              revolutionize the way brands showcase themselves. Over the years,
              we have grown into a trusted partner for businesses across diverse
              industries, earning a reputation for excellence and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-full bg-primary/10 p-3 w-fit">
              <Rocket className="w-6 h-6 text-neutral-700" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Let&apos;s Create Something Amazing
            </h3>
            <p className="text-gray-600">
              We believe every brand has a story worth sharing, and we&apos;re
              here to help you tell it in the most compelling way. Let&apos;s
              collaborate to make your next event a memorable success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="rounded-full bg-primary/10 p-3 w-fit">
              <PhoneCall className="w-6 h-6 text-neutral-700" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
            <p className="text-gray-600">
              Ready to elevate your exhibition presence? Get in touch with us
              today to discuss your project and discover how we can bring your
              vision to life.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
