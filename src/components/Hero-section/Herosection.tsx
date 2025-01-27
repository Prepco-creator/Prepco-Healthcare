import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, Shield, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F8FFFF] via-[#F0FFFF] to-[#E3FFFE] flex items-center py-8 sm:py-12 md:py-16">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative">
          {/* Decorative Element */}
          <div className="absolute -top-4 -left-8 w-20 h-20 bg-[#D0F2F3] rounded-full blur-3xl opacity-60" />
          
          <div className="inline-block px-4 py-2 bg-[#E3FFFE] rounded-full text-[#018380] text-sm font-medium mb-4 animate-fadeIn">
            🎉 Providing Quality Healthcare Since 2024
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#018380] leading-tight relative animate-slideDown">
            Welcome to PREPCO HOPE
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#018380] leading-tight relative animate-slideUp">
            Your Health,
            <span className="block text-[#00ADA9] animate-gradient bg-clip-text">Our Priority</span>
          </h2>
          
          <p className="text-[#505050] text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            At PREPCO HOPE, we are committed to providing accessible, affordable, and high-quality healthcare for everyone. Our mobile app makes it easy to manage your health, book appointments, access virtual consultations, and more—straight from your phone.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#018380] text-white rounded-xl hover:bg-[#00ADA9] transition-all duration-300 shadow-double-inset hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white border-2 border-[#D0F2F3] text-[#018380] rounded-xl hover:bg-[#E3FFFE] transition-all duration-300 flex items-center justify-center gap-2">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-[#018380]" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#018380]">₹50</p>
              <p className="text-sm sm:text-base text-[#505050]">Admission Fee</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-[#018380]" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#018380]">24/7</p>
              <p className="text-sm sm:text-base text-[#505050]">Support</p>
            </div>
            <div className="text-center col-span-2 sm:col-span-1 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-2">
                <Heart className="w-8 h-8 text-[#018380]" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#018380]">Free</p>
              <p className="text-sm sm:text-base text-[#505050]">Consultations</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto mt-8 lg:mt-0">
          <div className="relative w-full pt-[100%] sm:pt-[80%] lg:pt-[100%]">
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D0F2F3] rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00ADA9] rounded-full blur-3xl opacity-30" />
            
            <div className="absolute inset-0 bg-[#E3FFFE] rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-300" />
            <div className="absolute inset-0 bg-[#D0F2F3] rounded-3xl transform -rotate-3 transition-transform hover:-rotate-6 duration-300" />
            <div className="absolute inset-0">
              <Image
                src="/api/placeholder/600/500"
                alt="Healthcare Professional"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#018380] font-semibold text-lg">Virtual Consultations</p>
            <p className="text-[#505050] text-sm mt-1">Available 24/7</p>
          </div>
          
          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[220px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-[#018380] font-semibold text-lg">Easy Booking</p>
            <p className="text-[#505050] text-sm mt-1">Schedule in seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;