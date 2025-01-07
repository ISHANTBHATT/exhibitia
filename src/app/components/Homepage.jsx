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
import ProjectsSection from "./ProjectSection";
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
      src: "/images/1.jpg",
    },
    {
      quote:
        "Their attention to detail and commitment to excellence made all the difference in our event experience.",
      name: "Ribbel International",
      designation: "CTO at Ribbel International",
      src: "/images/2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/3.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/4.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/5.jpg",
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
      <ProjectsSection />
      <Testimonials testimonials={testimonials} />
      <TeamSection />
      <Faq />
      {/* <Feedback /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
