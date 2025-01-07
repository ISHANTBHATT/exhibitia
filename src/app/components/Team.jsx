import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Spas Markus",
    role: "INTERIOR DECORATOR",
    image: "/images/men.jpg",
  },
  {
    name: "Agnes Arlette",
    role: "PRODUCTION DESIGNER",
    image: "/images/women.png",
  },
  {
    name: "Deneb Anzor",
    role: "MANAGER",
    image: "/images/women.png",
  },
  {
    name: "Ayanda Marte",
    role: "CEO",
    image: "/images/men.jpg",
  },
];

export function Team() {
  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-wider text-gray-600 mb-4">TALENTED</p>
        <h2 className="text-4xl lg:text-5xl font-display">Technical Experts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative w-full aspect-square mb-6 group">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-display mb-2">{member.name}</h3>
            <p className="text-sm tracking-wider text-gray-600">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
