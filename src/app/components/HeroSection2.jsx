import Image from "next/image";
// import { Button } from "@/components/ui/button"

export function HeroSection2() {
  return (
    <section
      className="pt-20 pb-12 sm:px-10 

    bg-[#AD49E1]
    "
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex">
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-2">OUR PROJECTS</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Our Design Showcase
            </h1>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg max-w-2xl text-gray-50">
              From modern minimalism to timeless elegance, our portfolio
              showcases a spectrum of design styles and inspirations. Discover
              how we turn visions into captivating realities, one space at a
              time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <ProjectCard
              title="Japanese Sushi Bar"
              location="Jakarta"
              category="Interior Design"
              image="/images/1.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:row-span-2">
            <ProjectCard
              title="Modern Living Room"
              location="New York"
              category="Interior Design"
              image="/images/2.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProjectCard
              title="Minimalist Bedroom"
              location="London"
              category="Interior Design"
              image="/images/3.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:row-span-2">
            <ProjectCard
              title="Cozy Kitchen"
              location="Paris"
              category="Interior Design"
              image="/images/4.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:row-span-2">
            <ProjectCard
              title="Luxurious Bathroom"
              location="Dubai"
              category="Interior Design"
              image="/images/5.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProjectCard
              title="Scandinavian Office"
              location="Stockholm"
              category="Interior Design"
              image="/images/6.jpg"
            />
          </div>
        </div>
        <div className="mt-12 text-center ">
          {/* <button className="bg-buttoncolor hover:bg-neutral-700 text-white rounded-3xl px-4 py-3">
            More Projects
          </button> */}
          <button className="text-red rounded-full hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-[#7A1CAC] bg-white px-3 text-[#7A1CAC] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#7A1CAC] before:transition-all before:duration-500 hover:text-white hover:shadow-[#7A1CAC] hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">More Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, location, category, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg h-full">
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-white/80">
            {location} • {category}
          </p>
        </div>
      </div>
    </div>
  );
}
