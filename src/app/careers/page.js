"use client";
import CareersForm from "../components/CareersForm";
import { Lightbulb, Users, Rocket, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together to achieve greatness.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "We're committed to personal and professional development.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in our work.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen py-16">
      {/* <div className="flex justify-around bg-secondary text-white py-20">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl mb-8">
            Be part of something extraordinary. Shape the future with us.
          </p>
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
        </div>
        <Image
          src="/images/career2.png"
          alt=""
          width={300}
          height={100}
          className=""
        />
      </div> */}

      <div className="relative flex justify-around py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary -z-10 clip-diagonal"></div>
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl mb-8">
            Be part of something extraordinary. Shape the future with us.
          </p>
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
        </div>
        <Image
          src="/images/career2.png"
          alt="carrer"
          width={300}
          height={100}
          className=""
        />
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            src="/images/career.jpg"
            alt="carrer"
            width={500}
            height={500}
            className="w-full md:w-1/2"
          />
          <CareersForm />
        </div>
      </div>
    </div>
  );
}
