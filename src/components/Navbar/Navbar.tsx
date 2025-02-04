"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

  const navLinks = [
    { title: "Home", route: "/" },
    { title: "About Us", route: "/about" },
    { title: "Services", route: "/services" },
    { title: "Health", route: "/health" },
    { title: "Contact", route: "/contact" }
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Dummy spacer to prevent content overlap */}
      {pathname !== "/" && <div className="h-[72px] w-full"></div>}

      {/* Navbar */}
      <nav
        className={` shadow-md duration-500 ease-in-out ${isMenuOpen ? "bg-white text-white" : "bg-white"
          } rounded-br-3xl rounded-bl-3xl fixed w-full z-20 top-0 start-0 border-none`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={isMenuOpen ? images.svgs.logo : images.svgs.logo}
                alt="Flowbite Logo"
                width={133}
                height={43}
                className="h-8"
              />
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="#">
              <button className="group mt-2 sm:mt-0 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#018380] text-white rounded-xl hover:bg-[#00ADA9] transition-all duration-300 shadow-double-inset hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-300"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMenuOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out transform md:transition-none ${isMenuOpen
              ? "max-h-screen translate-y-0 opacity-100"
              : "max-h-0 -translate-y-10 opacity-0"
              } items-center overflow-hidden justify-between w-full md:flex md:w-auto md:order-1 lg:static lg:opacity-100 lg:max-h-full lg:translate-y-0`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navLinks.map(({ title, route }) => (
                <li key={route}>
                  <Link href={route} passHref>
                    <div
                      className={`capitalize block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-teal-600 ${pathname === route
                        ? "text-teal-600 font-bold"
                        : "text-teal-800"
                        } transition-colors duration-300`}
                      aria-current={pathname === route ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
