"use client";
import React from "react";
import { ArrowRight, Phone } from "lucide-react";
// import { Videos } from "../../../public/assets";
import Link from "next/link";
import VideoPlayer from "../Videoplayer/Videoplayer";


const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7] flex items-center py-16 sm:py-14 md:py-20">
      <div className="w-11/12 mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative">
          {/* Decorative Element */}
          <div className="absolute -top-6 -left-10 w-24 h-24 bg-[#D0F2F3] rounded-full blur-3xl opacity-50" />

          <h1 className="mt-6 sm:mt-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#017F7E] leading-tight relative animate-slideDown">
            PREPCO HOPE
          </h1>
          <h1 className="mt-2 sm:mt-0 text-lg sm:text-xl lg:text-3xl font-extrabold leading-snug relative animate-slideDown text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 rounded-2xl px-8 py-3">
            Small Steps, Big Changes
          </h1>


          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#017F7E] leading-tight relative animate-slideUp">
            Fighting the Rise of{" "}
            <span className="block text-[#00ADA9] animate-gradient bg-clip-text">
              LIFESTYLE Diseases in Tamil Nadu
            </span>
          </h2>

          <p className="text-[#505050] text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to PREPCO HOPE, a mission-driven initiative dedicated to making quality healthcare accessible for the underprivileged in Tamil Nadu. We believe that every individual deserves the right to healthcare, regardless of their financial background.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/about" passHref>
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#017F7E] text-white rounded-xl hover:bg-[#00ADA9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact" passHref>
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-white border-2 border-[#D0F2F3] text-[#017F7E] rounded-xl hover:bg-[#E3FFFE] transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                Contact Us
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content (Video Section) */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto mt-10 lg:mt-0">
          <div className="relative w-full pt-[100%] sm:pt-[80%] lg:pt-[100%]">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D0F2F3] rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#00ADA9] rounded-full blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-300" />
            <div className="absolute inset-0 bg-[#259ba1] rounded-3xl transform -rotate-3 transition-transform hover:-rotate-6 duration-300" />
            {/* Video Container */}
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-2 transition-transform hover:rotate-3 duration-300 shadow-lg overflow-hidden flex items-center justify-center">
              <VideoPlayer />
            </div>
          </div>

          {/* Floating Info Boxes */}
          <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg">Free Consultations</p>
            <p className="text-[#505050] text-sm mt-1">Available 24/7</p>
          </div>

          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#017F7E] font-semibold text-lg">Free Medicines</p>
            <p className="text-[#505050] text-sm mt-1">Schedule in seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
