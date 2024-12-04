import React from "react";
import Navbar3 from "../components/Navbar3";
import Banner3 from "../components/Banner3";
import { AboutSection2 } from "../components/AboutSection2";
import { HeroSection2 } from "../components/HeroSection2";
import Clients from "../components/Clients";
import Footer3 from "../components/Footer3";
import Faq2 from "../components/Faq2";
import ProjectSection2 from "../components/ProjectSection2";
import Testimonials3 from "../components/Testimonials3";

function Page() {
  return (
    <div>
      <Navbar3 />
      <Banner3 />
      <AboutSection2 />
      <HeroSection2 />
      <ProjectSection2 />
      <Testimonials3 />
      <Clients />
      <Faq2 />
      <Footer3 />
    </div>
  );
}

export default Page;
