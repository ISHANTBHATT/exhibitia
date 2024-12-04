"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    rating: 3,
    image: "/images/person.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Mark Adair",
    rating: 5,
    image: "/images/person2.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Simon Konecki",
    rating: 4,
    image: "/images/person.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
  {
    name: "Simon Konecki",
    rating: 4,
    image: "/images/person2.png",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
  },
];

export default function Testimonials3() {
  return (
    <div className="py-12 px-4 bg-[#AD49E1] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What our happy client say</h2>
        <p className="text-gray-50 max-w-3xl mx-auto">
          Veniam proident aute magna anim excepteur et ex consectetur velit
          ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem
          minim. Officia do aliqua adipisicing ullamco in.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-6 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-red-500" />
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-red-500 fill-red-500"
                              : "text-gray-300 fill-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block text-[#7A1CAC]">
          <CarouselPrevious className="h-12 w-12 left-0 -top-10" />
          <CarouselNext className="h-12 w-12 right-0 -top-10" />
        </div>
      </Carousel>
    </div>
  );
}
