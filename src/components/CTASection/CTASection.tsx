import React from 'react';
import { Download, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#018380] to-[#00DAD4] py-20 overflow-hidden">
      {/* Decorative background elements with CSS animations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-slide-up">
              Your Health, Our Commitment
            </h2>
            <div className="w-32 h-1 bg-white/20 mx-auto rounded-full animate-expand" />
          </div>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-delay">
            Join PREPCO HOPE today and take charge of your health with ease and convenience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            {/* Download App Button */}
            <button className="group flex items-center gap-3 bg-white text-[#018380] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
              <Download className="w-5 h-5" />
              <span className="font-semibold">APP UNDER TESTING </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Contact Button */}
            <Link href={`/contact`}>
              <button className="group flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Additional Text */}
          <p className="text-white/80 mt-8 animate-fade-in-delay-2">
            We are here to help you live a healthier life!
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      </div>
    </section >
  );
};

export default CTASection;