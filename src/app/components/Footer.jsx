"use client";
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { IoLogoInstagram, IoIosMail } from "react-icons/io";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={150}
                height={150}
                className=""
              />
              {/* <span className="text-2xl font-bold">UPSTAIRS</span> */}
            </div>
            <p className="text-sm text-white mt-2">
              Elevate Your Space with Our Interior Design Services
            </p>
            <div className="flex space-x-6 mt-6">
              <a
                href="#"
                className="text-white  bg-neutral-700 hover:bg-neutral-600 rounded-full p-4"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white bg-neutral-700 hover:bg-neutral-600 rounded-full p-4"
              >
                <IoLogoInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white bg-neutral-700 hover:bg-neutral-600 rounded-full p-4"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white bg-neutral-700 hover:bg-neutral-600 rounded-full p-4"
              >
                <IoIosMail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex space-x-6">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <IoIosMail className="h-5 w-5" />
            </a> */}

            <p className="text-gray-400 hover:text-white cursor-pointer">
              Home
            </p>
            <p className="text-gray-400 hover:text-white cursor-pointer">
              Gallery
            </p>
            <p className="text-gray-400 hover:text-white cursor-pointer">
              Services
            </p>
            <p className="text-gray-400 hover:text-white cursor-pointer">
              Contact
            </p>
            <p className="text-gray-400 hover:text-white cursor-pointer">
              About
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-white">
          <p>Exhibitia © 2024. All Rights Reserved</p>
          <div className="mt-2 space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
