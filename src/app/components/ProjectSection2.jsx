import Image from "next/image";

export default function ProjectSection2() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-sm uppercase tracking-wider text-[#7A1CAC] mb-4">
          PROJECTS
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7A1CAC]">
          Transform Your Work And Living Space
          <br />
          With Style, Comfort And Functionality
        </h2>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/demo1.jpg"
            alt="Modern kitchen with pendant lights"
            width={800}
            height={600}
            className="object-cover w-full h-[500px]"
          />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
            <p className="text-white text-sm font-medium mb-2">
              UNIQUE DESIGNS
            </p>
            <h2 className="text-white text-4xl font-bold">
              Elevate Your Spaces Today
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-6">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/demo2.jpg"
              alt="Minimalist kitchen design"
              width={800}
              height={300}
              className="object-cover w-full h-[240px]"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
              <p className="text-white text-sm font-medium mb-2">
                RUSTIC DESIGN
              </p>
              <h2 className="text-white text-4xl font-bold">
                Inspired Designs
              </h2>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#AD49E1] text-white p-8  rounded-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">210+</p>
                <p className="text-sm uppercase">Projects</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">200+</p>
                <p className="text-sm uppercase">Satisfy Customers</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">50</p>
                <p className="text-sm uppercase">Technical Teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
