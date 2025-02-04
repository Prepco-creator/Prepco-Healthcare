"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Check, Users, Accessibility } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* About Us Card */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:bg-white/90 sm:p-12">
          <div className="text-center">
            <h2 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
              About Us
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
              At PREPCO HOPE, we believe that quality healthcare is a right, not a privilege. With rising rates of Lifestyle 
              Diseases in Tamil Nadu, we are committed to ensuring that healthcare is accessible to all—especially those who 
              face financial barriers. Our mission is to provide free and subsidized healthcare services, including checkups, 
              diagnosis, and treatments, for individuals in need. We believe that even small acts of care can lead to 
              significant change. By impacting one person each day, we are transforming lives and making a healthier 
              community a reality.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative mb-16">
          <div className="absolute inset-0 transform">
            <div className="h-full w-full rotate-3 rounded-3xl bg-[#00ADA9] opacity-10"></div>
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-[#00ADA9]"></div>
          </div>
          
          <div className="relative z-10 p-8 sm:p-12">
            <div className="text-center">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Our Vision</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white">
                To create a healthier, more equitable community by providing accessible healthcare and lifestyle interventions.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Compassion",
              icon: Heart,
              description: "Showing empathy and care for every individual's health journey",
              gradient: "from-[#00ADA9] to-[#017F7E]"
            },
            {
              title: "Integrity",
              icon: Check,
              description: "Maintaining transparency and ethical standards in all our services",
              gradient: "from-[#017F7E] to-[#00ADA9]"
            },
            {
              title: "Empowerment",
              icon: Users,
              description: "Enabling communities to take control of their health outcomes",
              gradient: "from-[#00ADA9] to-[#017F7E]"
            },
            {
              title: "Accessibility",
              icon: Accessibility,
              description: "Making quality healthcare available to everyone in Tamil Nadu",
              gradient: "from-[#017F7E] to-[#00ADA9]"
            }
          ].map((value) => (
            <div key={value.title} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${value.gradient} opacity-10 transition-all duration-300 group-hover:scale-150`}></div>
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-[#e0f7f6] p-3">
                        <value.icon className="h-8 w-8 text-[#00ADA9]" />
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-semibold text-[#017F7E]">{value.title}</h3>
                    <p className="text-center text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
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

export default AboutUs;