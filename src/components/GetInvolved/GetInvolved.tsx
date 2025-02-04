"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, HandHeart, Share2, ArrowRight, Mail } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      title: "Donate",
      icon: Heart,
      description: "Your donations directly support individuals in need, ensuring no one is turned away due to financial constraints.",
      action: "Donate Today",
      gradient: "from-[#00ADA9] to-[#017F7E]"
    },
    {
      title: "Volunteer",
      icon: HandHeart,
      description: "Join our team of dedicated volunteers and help make a difference in your community through direct service.",
      action: "Join Us",
      gradient: "from-[#017F7E] to-[#00ADA9]"
    },
    {
      title: "Spread Awareness",
      icon: Share2,
      description: "Help us reach more people by sharing our mission and impact with your network and community.",
      action: "Share Now",
      gradient: "from-[#00ADA9] to-[#017F7E]"
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Main Call to Action */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:bg-white/90 sm:p-12">
          <div className="text-center">
            <h1 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
              What We Can Do Together
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-gray-700">
            &apos;PREPCO HOPE&apos; we advocate for <span className="font-semibold">preventive healthcare</span> and lifestyle 
              interventions to reduce the burden of Lifestyle Diseases in Tamil Nadu. We encourage early screening, 
              regular monitoring, and promoting healthy diet and active living to reduce the risk of obesity, 
              hypertension, and diabetes.
            </p>
            <p className="text-xl font-medium text-[#00ADA9]">
            &quot;சிறு துளி பெரு வெள்ளம்&quot; - Small drops make a mighty ocean
            </p>
          </div>
        </div>

        {/* Ways to Help Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <div key={way.title} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${way.gradient} opacity-10 transition-all duration-300 group-hover:scale-150`}></div>
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-[#e0f7f6] p-3">
                        <way.icon className="h-8 w-8 text-[#00ADA9]" />
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-semibold text-[#017F7E]">{way.title}</h3>
                    <p className="text-center text-gray-600">{way.description}</p>
                    <button className="mx-auto mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E] px-6 py-2 text-white transition-transform hover:scale-105">
                      {way.action}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Join the Movement Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-[#00ADA9] p-8 text-white shadow-xl sm:p-12">
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Join the Movement</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed">
              Your involvement with PREPCO HOPE can change lives. Whether you are seeking healthcare services or want 
              to support our cause, we welcome you to be part of our journey toward better health for all.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-[#00ADA9] transition-transform hover:scale-105">
              <Mail className="h-5 w-5" />
              Contact Us for More Details
            </button>
          </div>
          <div className="absolute inset-0 -z-10 bg-[url('/pattern.svg')] opacity-10"></div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
        <p className="text-lg font-medium text-gray-700">
  Thank you for being part of the solution. Let&apos;s build a healthier tomorrow, today!
</p>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
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

export default GetInvolved;