// import Image from "next/image";
// import React from "react";

// function Page() {
//   return (
//     <div>
//       <div className="w-full h-96">
//         <Image
//           src="/images/1.jpg"
//           width={1000}
//           height={1000}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default Page;
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonials4 } from "../components/Testimonials4";
import { Team } from "../components/Team";
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
import WhyChooseUs from "../components/WhyChooseUs";
export default function AboutPage() {
  // const data = [
  //   {
  //     name: "Planning",
  //     icon: (
  //       <Image
  //         src="/images/Planning.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Consultation",
  //     icon: (
  //       <Image
  //         src="/images/Consultation.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Woodwork",
  //     icon: (
  //       <Image
  //         src="/images/Woodwork.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Installation",
  //     icon: (
  //       <Image
  //         src="/images/Installation.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Furnishing",
  //     icon: (
  //       <Image
  //         src="/images/Furnishing.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  //   {
  //     name: "Partitioning",
  //     icon: (
  //       <Image
  //         src="/images/Partitioning.png"
  //         width={200}
  //         height={200}
  //         className="h-10 w-10 object-contain"
  //       />
  //     ),
  //   },
  // ];
  const data = [
    {
      name: "Custom Booth Design",
      icon: (
        <Image
          src="/images/Furnishing.png"
          width={200}
          height={200}
          className="h-14 w-14 object-contain"
        />
      ),
    },
    {
      name: "Modular and Portable Booths",
      icon: (
        <Image
          src="/images/demo4.jpg"
          width={200}
          height={200}
          className="h-14 w-14 object-contain"
        />
      ),
    },
    {
      name: "Booth Fabrication",
      icon: (
        <Image
          src="/images/Woodwork.png"
          width={200}
          height={200}
          className="h-14 w-14 object-contain"
        />
      ),
    },
    {
      name: "End-to-End Project Management",
      icon: (
        <Image
          src="/images/Installation.png"
          width={200}
          height={200}
          className="h-14 w-14 object-contain"
        />
      ),
    },
  ];
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Innovative Designs",
      description:
        "Our creative team stays ahead of trends to bring fresh, eye-catching ideas to life.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Exceptional Quality",
      description:
        "We pride ourselves on delivering booths that combine aesthetics with durability.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Customer Focus",
      description:
        "Your success is our priority, and we're dedicated to providing an outstanding experience from start to finish.",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Global Reach",
      description:
        "Whether your event is local or international, our network and expertise ensure flawless execution.",
    },
  ];
  return (
    <div className="min-h-screen bg-white py-10">
      {/* Hero Section */}
      <div className="relative h-[200px] bg-secondary">
        <div className="absolute inset-0 bg-secondary">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <h1 className="text-6xl font-bold text-white mb-2">About</h1>
            <div className="text-white/80 flex items-center gap-2 text-sm">
              <Link href="/" className="hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span>ABOUT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Single Row */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
          {/* Stats Section */}
          <div className="bg-secondary p-8 text-white w-full lg:w-1/5">
            <div className="grid grid-cols-4 gap-2 mb-8">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square ${
                    i < 10 ? "bg-white/20" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-7xl font-bold">5K+</h2>
              <h3 className="text-3xl font-bold leading-tight">
                Successful
                <br />
                Project
                <br />
                Completion
              </h3>
            </div>
          </div>

          {/* Study Room Image */}
          <div className="w-full lg:w-1/5">
            <Image
              src="/images/1.jpg"
              alt="Study Room Design"
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />
            {/* <h3 className="text-3xl font-bold mt-4">Study Room Designs</h3> */}
          </div>

          {/* About Section */}
          <div className="w-full lg:w-1/2 lg:pl-20">
            <span className="text-[#8B8165] font-semibold text-sm">
              ABOUT US
            </span>
            <h2 className="text-5xl font-bold mt-2 mb-6 leading-tight">
              Welcome to Exhibitia,
            </h2>
            <p className="text-gray-600 mb-8">
              where creativity meets functionality in the world of exhibition
              booth solutions. We are a team of dedicated professionals
              passionate about helping brands make a lasting impression at trade
              shows, conferences, and exhibitions. With a perfect blend of
              innovation, craftsmanship, and customer-centricity, we design and
              deliver booths that not only attract attention but also tell your
              unique story.
            </p>
            <p className="text-gray-600 mb-8">
              Our Mission Our mission is to transform your vision into reality,
              creating dynamic and impactful exhibition spaces that captivate
              audiences and foster meaningful connections. We are committed to
              delivering high-quality, customized solutions that align with your
              brand identity and marketing goals.
            </p>

            <p className="text-xl font-bold mt-2 mb-6 leading-tight">
              What We Do At Exhibitia, we specialize in:
            </p>
            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 text-gray-800"
                >
                  <span className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                    {service.icon}
                  </span>
                  <span className="text-sm">{service.name}</span>
                </div>
              ))}
            </div>

            {/* Know More Button */}
            <button className="mt-8 bg-secondary text-white px-6 py-3 flex items-center gap-2 hover:bg-neutral-700 rounded-full transition-colors text-sm">
              Know More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
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
                  <Card className="bg-white border-gray-100 hover:shadow-lg transition-shadow duration-300">
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
                  <History className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Story
                </h3>
                <p className="text-gray-600">
                  Founded in 2017, Exhibitia began with a simple idea: to
                  revolutionize the way brands showcase themselves. Over the
                  years, we have grown into a trusted partner for businesses
                  across diverse industries, earning a reputation for excellence
                  and reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Let's Create Something Amazing
                </h3>
                <p className="text-gray-600">
                  We believe every brand has a story worth sharing, and we're
                  here to help you tell it in the most compelling way. Let's
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
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Contact Us
                </h3>
                <p className="text-gray-600">
                  Ready to elevate your exhibition presence? Get in touch with
                  us today to discuss your project and discover how we can bring
                  your vision to life.
                </p>
              </motion.div>
            </div>
          </div>
        </div> */}

        <WhyChooseUs />
        <Testimonials4 />
        <Team />
      </div>
    </div>
  );
}
