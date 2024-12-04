"use client";
import Link from "next/link";
import { MapPin, Phone, Clock, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar3() {
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
  const isHomePage = pathname === "/home3";
  return (
    <>
      <header
        className={` w-full  fixed z-50 ${
          isScrolled || !isHomePage
            ? "bg-[#f5f5f3] text-white"
            : "bg-transparent text-neutral-800"
        }`}
      >
        {/* Top Info Bar */}
        <div className="w-full bg-gradient-to-r from-[#7A1CAC] to-[#AD49E1] text-white px-4 py-2">
          <div className="container mx-auto hidden md:flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>58 A, Madison St, Baltimore, USA - 4508.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>000 - 123 - 456789</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon To Sat 9:00 AM to 8:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-80">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className=""
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-800 hover:text-[#7A1CAC]">
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-[#7A1CAC]"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-[#7A1CAC]"
              >
                About Us
              </Link>
              <Link
                href="/designs"
                className="text-gray-800 hover:text-[#7A1CAC]"
              >
                Gallery
              </Link>
              <Link
                href="/pages"
                className="text-gray-800 hover:text-[#7A1CAC]"
              >
                Pages
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-[#7A1CAC]"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <Button className="bg-[#7A1CAC] text-white hover:bg-[#7A1CAC]/90">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="h-[100px]"></div> */}
    </>
  );
}

// import Link from "next/link";
// import { MapPin, Phone, Clock, Search, ShoppingBag, User } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Header() {
//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 w-full bg-[#f5f5f3] z-50">
//         {/* Top Info Bar */}
//         <div className="w-full bg-[#8B8455] text-white px-4 py-2">
//           <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
//             <div className="flex flex-wrap items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4" />
//                 <span className="hidden sm:inline">
//                   58 A, Madison St, Baltimore, USA - 4508.
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>000 - 123 - 456789</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span className="hidden md:inline">
//                   Mon To Sat 9:00 AM to 8:00 PM
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <Link href="#" className="hover:opacity-80">
//                 <svg
//                   className="h-4 w-4 fill-current"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <svg
//                   className="h-4 w-4 fill-current"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <svg
//                   className="h-4 w-4 fill-current"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <svg
//                   className="h-4 w-4 fill-current"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Main Header */}
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <div className="text-[#8B8455]">
//                 <svg
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   />
//                   <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" />
//                   <path d="M8 21V8" stroke="currentColor" strokeWidth="1.5" />
//                 </svg>
//               </div>
//               <span className="text-2xl font-bold text-[#8B8455]">Welcome</span>
//             </Link>

//             {/* Navigation */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link href="/" className="text-gray-600 hover:text-[#8B8455]">
//                 Home
//               </Link>
//               <Link
//                 href="/projects"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/designs"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 Our Designs
//               </Link>
//               <Link
//                 href="/pages"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 Pages
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 Contact
//               </Link>
//             </nav>

//             {/* Right Side Icons */}
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 <User className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 <ShoppingBag className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-gray-600 hover:text-[#8B8455]"
//               >
//                 <Search className="h-5 w-5" />
//               </Button>
//               <Button className="bg-[#8B8455] text-white hover:bg-[#8B8455]/90">
//                 Request A Quote
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* Spacer to prevent content from being hidden behind fixed header */}
//       <div className="h-[100px]"></div>
//     </>
//   );
// }
