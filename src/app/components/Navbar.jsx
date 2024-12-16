"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
// import AnimatedMenu from "./AnimatedMenu";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = pathname === "/";
  return (
    <header
      className={`fixed w-full z-50 sm:px-6  font-cormorant border-b-[0.1px] border-gray-300 ${
        isScrolled || !isHomePage
          ? "bg-secondary text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 border-r-[0.1px] border-gray-300">
              {/* <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={150}
                className=""
              /> */}
              {isScrolled || !isHomePage ? (
                <img src="/images/logo2.png" alt="logo" className="w-40" />
              ) : (
                <img src="/images/logo.png" alt="logo" className="w-40" />
              )}
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex w-full space-x-20 px-10">
              <a href="#" className="text-lg font-medium hover:text-gray-500">
                Home
              </a>
              <a
                href="/gallery"
                className="text-lg font-medium hover:text-gray-500"
              >
                Gallery
              </a>
              <a
                href="/home3"
                className="text-lg font-medium hover:text-gray-500"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-lg font-medium hover:text-gray-500"
              >
                Contact
              </a>
              <a
                href="/about"
                className="text-lg font-medium hover:text-gray-500"
              >
                About
              </a>
            </div>

            <button className="p-2 ">
              <RiMenu2Line className="h-6 w-6" />
            </button>
            {/* <AnimatedMenu /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
