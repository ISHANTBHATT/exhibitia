import { Card } from "@/components/ui/card";

export default function Feedback() {
  const partners = [
    { name: "Furniture Minimalist", logo: "/images/client1.png" },
    { name: "Gray House", logo: "/images/client2.png" },
    { name: "Simple House", logo: "/images/client3.png" },
    { name: "Houselux", logo: "/images/client4.png" },
    { name: "Interior Design", logo: "/images/client5.png" },
    { name: "Housetica", logo: "/images/client6.jpg" },
    { name: "Interior", logo: "/images/client1.png" },
    { name: "Furniture", logo: "/images/client2.png" },
  ];

  return (
    <section className="py-16 px-4 text-[#6A1E55]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className=" mb-2">OUR PARTNERS</h3>
          <h2 className="text-4xl font-bold">Top Collaborators</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[160px] h-auto"
              />
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center ">
          <button className="bg-[#A64D79] hover:bg-[#6A1E55] text-white rounded-3xl px-4 py-3">
            See More Clients
          </button>
        </div>
      </div>
    </section>
  );
}
