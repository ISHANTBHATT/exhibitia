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

export default function AboutPage() {
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
          <div className="w-full lg:w-1/2 pl-20">
            <span className="text-[#8B8165] font-semibold text-sm">
              ABOUT US
            </span>
            <h2 className="text-5xl font-bold mt-2 mb-6 leading-tight">
              Best Way To Design Your Home, Office, Etc.
            </h2>
            <p className="text-gray-600 mb-8">
              We provide professional services at exhibition shows . Our
              original Concepts allow you to focus on promoting your brand while
              we deliver highly innovative exhibition stand installations within
              timescales and budgets. Exhibitia Retail Branding & Interiors
              designs are based on detailed market research, its preferences and
              sensibilities. Our integrated retail branding approach balances
              business and aesthetics needs. We at exhibitia Retail designs,
              build and install interiors including wide range of furniture and
              lighting solutions, we also create point of purchase, in-store
              branding containing kiosks, menu boards and display units. We are
              offering wide range of retail services having design and market
              strategy, visual communication design, conceptual positioning,
              brand/logo identity, development and implementation, material
              procurement, furniture/fixture and construction administration. We
              assist organizations to make their brands Breathe. Exhibitia
              produces superb corporate events: creatively conceived,
              strategically planned and beautifully executed. Impeccable in
              every detail of design and ambience, we provide a Perfect Platform
              for building your brand and the relationships most important to
              you.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  name: "Planning",
                  icon: (
                    <Image
                      src="/images/Planning.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
                {
                  name: "Consultation",
                  icon: (
                    <Image
                      src="/images/Consultation.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
                {
                  name: "Woodwork",
                  icon: (
                    <Image
                      src="/images/Woodwork.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
                {
                  name: "Installation",
                  icon: (
                    <Image
                      src="/images/Installation.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
                {
                  name: "Furnishing",
                  icon: (
                    <Image
                      src="/images/Furnishing.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
                {
                  name: "Partitioning",
                  icon: (
                    <Image
                      src="/images/Partitioning.png"
                      width={200}
                      height={200}
                      className="h-10 w-10 object-contain"
                    />
                  ),
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 text-gray-800"
                >
                  <span className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-lg">
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
        <Testimonials4 />
        <Team />
      </div>
    </div>
  );
}
