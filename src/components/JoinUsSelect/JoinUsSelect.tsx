"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import NumberCTAPopup from '../NumberCTAPopup/NumberCTAPopup';
import { X } from 'lucide-react';

const JoinUsSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Main content container */}
        <div className="group relative rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white/90 sm:p-12">
          {/* Floating elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 animate-float rounded-lg bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 animate-float-delayed rounded-lg bg-gradient-to-br from-[#017F7E] to-[#00ADA9] opacity-20"></div>

          {/* Title section */}
          <div className="mb-12 text-center">
            <h2 className="relative mb-4 text-4xl font-bold tracking-tight text-[#017F7E] transition-all duration-300 group-hover:scale-105 sm:text-5xl">
              Join Our Healthcare Mission
              <span className="absolute -bottom-2 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-[#00ADA9] to-[#017F7E] transition-all duration-500 group-hover:w-48"></span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Together, we can transform healthcare accessibility and make a lasting impact on communities in need.
            </p>
          </div>

          {/* Action cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Donate card */}
            <Link href="#donate" className="group/card">
              <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#e0f7f6] transition-all duration-300 group-hover/card:scale-150"></div>
                  <div className="relative">
                    <h3 className="mb-2 text-2xl font-semibold text-[#017F7E]">Make a Donation</h3>
                    <p className="mb-4 text-gray-600">Support our mission with a contribution that helps provide essential healthcare services.</p>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#00ADA9] text-white transition-all duration-300 hover:bg-[#017F7E]">
                      <a href="#">
                        Donate Now
                      </a>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Volunteer card */}
            <div onClick={() => setShowPopup(true)} className="group/card cursor-pointer">
              <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#c0f8f7] transition-all duration-300 group-hover/card:scale-150"></div>
                  <div className="relative">
                    <h3 className="mb-2 text-2xl font-semibold text-[#017F7E]">Volunteer With Us</h3>
                    <p className="mb-4 text-gray-600">Join our team of dedicated volunteers and help make healthcare accessible to all.</p>
                    <Button onClick={() => setShowPopup(true)} className="bg-[#00ADA9] text-white transition-all duration-300 hover:bg-[#017F7E]">
                      Join Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Contact Number Popup */}
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-96 rounded-lg bg-white p-6 shadow-lg">
                  <button onClick={() => setShowPopup(false)} className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
                    <X className="h-5 w-5" />
                  </button>
                  <h2 className="mb-4 text-xl font-semibold text-[#017F7E]">Contact Us</h2>
                  <p className="text-lg text-gray-700">📞 Call us at: <span className="font-bold">+91 9884555335</span></p>
                  <p className="text-lg text-gray-700">📧 Email: <a href="mailto:contact@prepco.org" className="text-[#00ADA9] hover:underline">Info@prepcohope.org</a></p>
                </div>
              </div>
            )}
          </div>

          {/* Learn more section */}
          <div className="mt-12 text-center">
            <Link href="/about" className="group/learn inline-block">
              <span className="relative inline-block text-lg font-medium text-[#017F7E] transition-all duration-300 group-hover/learn:text-[#00ADA9]">
                Learn More About Our Impact
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ADA9] transition-all duration-300 group-hover/learn:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default JoinUsSection;