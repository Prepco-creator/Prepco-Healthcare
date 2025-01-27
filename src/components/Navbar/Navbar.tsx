"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets";

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
              <button
                type="button"
                className="p-2 rounded-lg text-white bg-custom-gradient shadow-double-inset hover:bg-none hover:text-primary hover:shadow-none border-primary border-[2px] transition-all duration-300 ease-in-out"
              >
                Book a consultant
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
