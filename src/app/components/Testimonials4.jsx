"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Saara",
    role: "TEACHER",
    image: "/images/person.png",
    quote:
      "Non diam phasellus vestibulum lorem sed. Proin libero nunc consequat interdum varius sit amet mattis. Enim diam vulputate ut pharetra. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed. Proin libero nunc consequat interdum varius sit amet mattis. Enim diam vulputate ut pharetra. Arcu non odio euismod lacinia at quis.",
  },
  {
    id: 2,
    name: "Laara",
    role: "Doctor",
    image: "/images/person2.png",
    quote:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam ridiculus convallis arcu quisque sem tempus auctor. Pulvinar diam arcu maximus dapibus quis. Leo consectetur sagittis est, magnis ornare penatibus nisi. Id ex vitae facilisis a leo. Laoreet tincidunt ad platea sociosqu dictum commodo! Arcu non odio euismod lacinia at quis.",
  },
  {
    id: 3,
    name: "aara",
    role: "Developer",
    image: "/images/person.png",
    quote:
      "Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Blandit aliquam etiam erat velit scelerisque. Mauris ultrices eros in cursus turpis massa. Imperdiet dui accumsan sit amet. Porta lorem mollis Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Blandit aliquam etiam erat velit scelerisque.",
  },
  {
    id: 4,
    name: "ara",
    role: "TEACHER",
    image: "/images/person.png",
    quote:
      "Non diam phasellus vestibulum lorem sed. Proin libero nunc consequat interdum varius sit amet mattis. Enim diam vulputate ut pharetra. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed. Proin libero nunc consequat interdum varius sit amet mattis. Enim diam vulputate ut pharetra. Arcu non odio euismod lacinia at quis.",
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
      <div className="bg-[#8B8165] text-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="">
          <p className="text-sm tracking-wider mb-4">CLIENT REVIEWS</p>
          <h2 className="text-5xl font-normal mb-8">Feedback From Clients</h2>
          <blockquote className="text-xl leading-relaxed mb-8">
            {testimonial.quote}
          </blockquote>
          <div className="mb-8">
            <h3 className="text-2xl font-normal mb-2">{testimonial.name}</h3>
            <p className="text-sm tracking-wider">{testimonial.role}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
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
