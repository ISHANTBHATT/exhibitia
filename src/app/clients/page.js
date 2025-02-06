import React from "react";
import MemberCard from "../components/MemberCard";

export const members = [
  {
    id: 1,
    name: "Bodycare Creations",
    img: "/images/client1.png",
    link: "https://ebodycare.in/",
  },
  {
    id: 2,
    name: "Saint Gobain",
    img: "/images/client2.png",
    link: "",
  },
  {
    id: 3,
    name: "Ribble International",
    img: "/images/client3.png",
    link: "",
  },
  {
    id: 4,
    name: "Komal Texfab",
    img: "/images/client4.png",
    link: "",
  },
  {
    id: 5,
    name: "Pathways",
    img: "/images/client5.png",
    link: "",
  },
  {
    id: 6,
    name: "Interarch",
    img: "/images/client6.png",
    link: "",
  },
  {
    id: 7,
    name: "Bodycare X Perfume",
    img: "/images/client7.png",
    link: "",
  },
  {
    id: 8,
    name: "UP TWIGA",
    img: "/images/client8.png",
    link: "",
  },
  {
    id: 9,
    name: "GROVERSONS PARIS BEAUTY",
    img: "/images/client9.png",
    link: "",
  },
  {
    id: 10,
    name: "DUPONT",
    img: "./images/client10.png",
    link: "",
  },
  {
    id: 11,
    name: "UPES",
    img: "./images/client11.png",
    link: "",
  },
  {
    id: 12,
    name: "ALTANOVA GROUP",
    img: "./images/client12.png",
    link: "",
  },
  {
    id: 13,
    name: "AIRON",
    img: "./images/client13.png",
    link: "",
  },
  {
    id: 14,
    name: "ALTANOVA GROUP",
    img: "./images/client14.png",
    link: "",
  },
  {
    id: 15,
    name: "ALTANOVA GROUP",
    img: "./images/client15.png",
    link: "",
  },
  {
    id: 16,
    name: "ALTANOVA GROUP",
    img: "./images/client16.png",
    link: "",
  },
  {
    id: 17,
    name: "ALTANOVA GROUP",
    img: "./images/client17.png",
    link: "",
  },
  {
    id: 18,
    name: "ALTANOVA GROUP",
    img: "./images/client18.png",
    link: "",
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
