"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "- Bodycare Creations",
    image: "/images/bodycare.jpg",
    quote:
      "The team truly understood our vision and brought it to life with an incredible booth that attracted so many leads!",
  },
  {
    id: 2,
    name: "- Ribbel International",
    image: "/images/ribbel.jpeg",
    quote:
      "Their attention to detail and commitment to excellence made all the difference in our event experience.",
  },
];

export function Testimonials4() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-20">
      <div className="relative w-full h-[600px] lg:h-full">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-secondary text-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="">
          <p className="text-sm tracking-wider mb-4">CLIENT REVIEWS</p>
          <h2 className="text-5xl font-normal mb-8">Feedback From Clients</h2>

          <blockquote className="text-xl leading-relaxed mb-8">
            <span className="text-4xl">“</span>
            {testimonial.quote}
            <span className="text-4xl">”</span>
          </blockquote>
          <div className="mb-8">
            <h3 className="text-2xl font-normal mb-2">{testimonial.name}</h3>
            {/* <p className="text-sm tracking-wider">{testimonial.role}</p> */}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
