"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
  const isHomePage = pathname === "/home2";

  return (
    <header
      className={` font-[sans-serif] tracking-wide fixed w-full z-50 ${
        isScrolled || !isHomePage
          ? "bg-[#6A1E55] text-white"
          : "bg-transparent text-neutral-800"
      }`}
    >
      <div className="flex flex-wrap items-center gap-4 px-10 py-4 relative bg-transparent min-h-[70px]">
        <a href="#" className="hidden max-lg:block">
          {isScrolled ? (
            <img src="/images/logo2.png" alt="logo" className="w-40" />
          ) : (
            <img src="/images/logo.png" alt="logo" className="w-40" />
          )}
        </a>

        <div
          id="collapseMenu"
          className={`w-full lg:!block ${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            onClick={handleToggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li className="mb-6 hidden max-lg:block">
                {isScrolled ? (
                  <img src="/images/logo2.png" alt="logo" className="w-40" />
                ) : (
                  <img src="/images/logo.png" alt="logo" className="w-40" />
                )}
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  Home
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  Gallery
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  Team
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="m-auto absolute lg:left-2/4 lg:top-1/4 lg:-translate-x-1/2 max-lg:hidden"
            >
              {isScrolled ? (
                <img src="/images/logo2.png" alt="logo" className="w-40" />
              ) : (
                <img src="/images/logo.png" alt="logo" className="w-40" />
              )}
            </a>

            <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto">
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  Contact
                </a>
              </li>
              <li className="text-[15px] max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#6A1E55] font-semibold  block text-[15px]"
                >
                  Clients
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex ml-auto lg:hidden">
          <button id="toggleOpen" onClick={handleToggleMenu}>
            {/* <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg> */}
            <HiMenuAlt1
              className={`w-8 h-8 ${
                isScrolled ? "text-white" : "text-neutral-800"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
