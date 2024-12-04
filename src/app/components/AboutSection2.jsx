"use client";
import Image from "next/image";
// import { Button } from "@/components/ui/button"

export function AboutSection2() {
  return (
    <section className="py-16 md:py-24 sm:px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-wider text-[#7A1CAC]">
                ABOUT US
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#7A1CAC]">
                Crafting Inspired Spaces for Over 15 Years
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl text-gray-50">
              Established with a passion for creativity and a commitment to
              excellence, Upstairs has been transforming spaces since 2009. With
              a keen eye for detail and a focus on innovation, we strive to
              exceed our clients' expectations with every project we undertake.
            </p>
            {/* <button className="bg-buttoncolor hover:bg-neutral-700 text-white rounded-full px-8 py-2">
              Read More
            </button> */}
            <button className="text-red rounded-full hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-[#7A1CAC] bg-white px-3 text-[#7A1CAC] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#7A1CAC] before:transition-all before:duration-500 hover:text-white hover:shadow-[#7A1CAC] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Read More</span>
            </button>
          </div>
          <div className="grid grid-cols-12 grid-rows-12 gap-4">
            <div className="row-span-12 col-span-6">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo1.jpg"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="row-span-6 col-span-6 col-start-7">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo2.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="row-span-6 col-span-6 row-start-7  col-start-7">
              {" "}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/demo3.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
