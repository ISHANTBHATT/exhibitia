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
      icon: <Sparkles className="w-6 h-6 text-neutral-700" />,
      title: "Innovative Designs",
      description:
        "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
    },
    {
      icon: <Shield className="w-6 h-6 text-neutral-700" />,
      title: "Exceptional Quality",
      description:
        "We pride ourselves on delivering booths that combine aesthetics with durability.",
    },
    {
      icon: <Users className="w-6 h-6 text-neutral-700" />,
      title: "Customer Focus",
      description:
        "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
    },
    {
      icon: <Globe className="w-6 h-6 text-neutral-700" />,
      title: "Global Reach",
      description:
        "Whether your event is local or international, our network and expertise ensure flawless execution.",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
