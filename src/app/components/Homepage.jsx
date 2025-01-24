import React from "react";
import Banner from "./Banner";
import Clients from "./Clients";
import { Testimonials } from "./Testimonials";
import { StyleSection } from "./StyleSection";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import Faq from "./Faq";
import Feedback from "./Feedback";
import Footer2 from "./Footer2";
import ProjectSection from "./ProjectSection";
import TeamSection from "./TeamSection";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

function Homepage() {
  const testimonials = [
    {
      quote:
        "The team truly understood our vision and brought it to life with an incredible booth that attracted so many leads!",
      name: "Bodycare Creations",
      designation: "Marketing Manager at Bodycare Creations",
      src: "/images/bodycare.jpg",
    },
    {
      quote:
        "Their attention to detail and commitment to excellence made all the difference in our event experience.",
      name: "Ribbel International",
      designation: "CTO at Ribbel International",
      src: "/images/2.jpg",
    },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Clients />
      <AboutSection />
      <HeroSection />
      {/* <StyleSection /> */}
      <ProjectSection />
      <Testimonials testimonials={testimonials} />
      {/* <TeamSection /> */}
      <Faq />
      {/* <Feedback /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
