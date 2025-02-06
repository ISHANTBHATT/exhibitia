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
            <Link href="/">
              <div className="flex items-center gap-2 border-r-[0.1px] border-gray-300">
                {/* <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={150}
                className=""
              /> */}
                {isScrolled || !isHomePage ? (
                  <img src="/images/logo4.png" alt="logo" className="w-40" />
                ) : (
                  <img src="/images/logo4.png" alt="logo" className="w-40" />
                )}
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex w-full space-x-20 px-10">
              <Link href="/">
                <p className="text-lg font-medium hover:text-gray-500">Home</p>
              </Link>
              <Link href="/about">
                <p className="text-lg font-medium hover:text-gray-500">About</p>
              </Link>
              <Link href="/services">
                <p className="text-lg font-medium hover:text-gray-500">
                  Services
                </p>
              </Link>
              <Link href="/gallery">
                <p className="text-lg font-medium hover:text-gray-500">
                  Gallery
                </p>
              </Link>
              <Link href="/careers">
                <p className="text-lg font-medium hover:text-gray-500">
                  Careers
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-lg font-medium hover:text-gray-500">
                  Contact
                </p>
              </Link>
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
