import Image from "next/image";

const styles = [
  {
    title: "Scandinavian Style",
    description:
      "Clean lines, natural light, and a focus on functionality create spaces that embody a timeless simplicity.",
    image: "/images/demo1.jpg",
  },
  {
    title: "Japanese Style",
    description:
      "From meditative rooms to zen interiors, our Japanese-inspired spaces embody harmony, simplicity, and a deep connection to nature.",
    image: "/images/demo2.jpg",
  },
  {
    title: "Industrial Style",
    description:
      "Uncover urban charm, our industrial-inspired designs feature exposed brick, metal accents, and raw minimalist flair decors.",
    image: "/images/demo3.jpg",
  },
  {
    title: "Minimalist Style",
    description:
      "Experience the Beauty of Minimalism: Clean Lines, Neutral Tones, and Functional Design Bring Calm and Clarity to Your Space.",
    image: "/images/demo4.jpg",
  },
];

export function StyleSection() {
  return (
    <section className="py-12  text-[#6A1E55]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-semibold">CATEGORY</p>
          <h2 className="text-4xl font-bold mb-4">
            Discover Your Signature Style
          </h2>
          <p className=" text-[#A64D79]">
            At Upstairs, we pride ourselves on our versatility and ability to
            bring various design styles to life.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={style.image}
                  alt={style.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{style.title}</h3>
              <p className="text-muted-foreground">{style.description}</p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-12 gap-4 lg:px-10">
          <div className="col-span-12 md:col-span-5 md:row-span-6">
            <Card
              title="Scandinavian Style"
              description="Clean lines, natural light, and a focus on functionality create spaces that embody a timeless simplicity."
              image="/images/demo1.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-7 md:row-span-6 md:col-start-6">
            <Card
              title="Japanese Style"
              description="From meditative rooms to zen interiors, our Japanese-inspired spaces embody harmony, simplicity, and a deep connection to nature."
              image="/images/demo2.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-7 md:row-span-6 md:row-start-7">
            <Card
              title="Industrial Style"
              description="Uncover urban charm, our industrial-inspired designs feature exposed brick, metal accents, and raw minimalist flair decors."
              image="/images/demo3.jpg"
            />
          </div>
          <div className="col-span-12 md:col-span-5 md:row-span-6 md:col-start-8 md:row-start-7">
            <Card
              title="Minimalist Style"
              description="Experience the Beauty of Minimalism: Clean Lines, Neutral Tones, and Functional Design Bring Calm and Clarity to Your Space."
              image="/images/demo4.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, image }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover w-full h-[450px] transition-transform group-hover:scale-105"
        />
        {/* <img
          src={image}
          alt={title}
          className="object-cover w-full h-[450px] transition-transform group-hover:scale-105"
        /> */}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className=" text-[#A64D79]">{description}</p>
    </div>
  );
}
