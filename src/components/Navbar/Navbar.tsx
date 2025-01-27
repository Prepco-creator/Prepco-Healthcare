"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets";
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      {/* Dummy spacer to prevent content overlap */}
      <div className="h-[72px] w-full"></div>

      {/* Navbar */}
      <nav
        className={`transition-[background] shadow-md duration-500 ease-in-out bg-white rounded-br-3xl rounded-bl-3xl fixed w-full z-20 top-0 start-0 border-none`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={images.svgs.logo} // Replace with your logo's path
                alt="Logo"
                width={133}
                height={43}
                className="h-8"
              />
            </div>
          </Link>

          {/* Right Button */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="#contact">
              <button className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#018380] text-white rounded-xl hover:bg-[#00ADA9] transition-all duration-300 shadow-double-inset hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base">
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
