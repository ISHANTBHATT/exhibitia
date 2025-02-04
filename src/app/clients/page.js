import React from "react";
import MemberCard from "../components/MemberCard";

export const members = [
  {
    id: 1,
    name: "Bodycare Creations",
    img: "/images/client17.webp",
    link: "https://ebodycare.in/",
  },
  {
    id: 2,
    name: "Saint Gobain",
    img: "/images/client1.png",
    link: "https://www.algolchemicals.com/",
  },
  {
    id: 3,
    name: "Ribble International",
    img: "/images/client7.png",
    link: "https://www.andritz.com/",
  },
  {
    id: 4,
    name: "Komal Texfab",
    img: "/images/client18.png",
    link: "https://www.cargotec.com/",
  },
  {
    id: 5,
    name: "Pathways",
    img: "/images/client3.png",
    link: "https://coredogroup.com/",
  },
  {
    id: 6,
    name: "Interarch",
    img: "/images/client10.png",
    link: "https://dentalmammoth.com/en-us/",
  },
  {
    id: 7,
    name: "Bodycare X Perfume",
    img: "/images/client14.png",
    link: "https://eageelectronics.com/",
  },
  {
    id: 8,
    name: "UP TWIGA",
    img: "/images/client14.png",
    link: "https://www.elematic.com/",
  },
  {
    id: 9,
    name: "GROVERSONS PARIS BEAUTY",
    img: "/images/client15.png",
    link: "https://www.ensto.com/en-in/",
  },
  {
    id: 10,
    name: "DUPONT",
    img: "./images/client2.png",
    link: "https://www.finnair.com/en",
  },
  {
    id: 11,
    name: "UPES",
    img: "./images/client1.png",
    link: "https://www.orionpharma.in/",
  },
  {
    id: 12,
    name: "ALTANOVA GROUP",
    img: "./images/client1.png",
    link: "https://www.fortum.in/",
  },
  {
    id: 12,
    name: "AIRON",
    img: "./images/client1.png",
    link: "https://www.fortum.in/",
  },
  {
    id: 12,
    name: "ALTANOVA GROUP",
    img: "./images/client1.png",
    link: "https://www.fortum.in/",
  },
  {
    id: 12,
    name: "ALTANOVA GROUP",
    img: "./images/client1.png",
    link: "https://www.fortum.in/",
  },
  {
    id: 12,
    name: "ALTANOVA GROUP",
    img: "./images/client1.png",
    link: "https://www.fortum.in/",
  },
];

function Page() {
  return (
    <div className="w-full h-full bg-[#f5f3f3]">
      <div className="flex justify-center items-center bg-gradient-to-r from-neutral-800 to-neutral-700 pt-28 pb-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold">Clients</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-14">
        {members.map((e) => (
          <MemberCard key={e.id} name={e.name} img={e.img} link={e.link} />
        ))}
      </div>
    </div>
  );
}

export default Page;
