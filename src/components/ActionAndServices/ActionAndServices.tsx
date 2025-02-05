"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {  Stethoscope, Heart, Subtitles } from 'lucide-react';
import Link from 'next/link';
const ActionAndServices = () => {
//   const actions = [
//     {
//       title: 'Get Involved',
//       icon: HeartHandshake,
//       description: 'Join our community of healthcare advocates',
//       buttonText: 'Join Now'
//     },
//     {
//       title: 'Donate',
//       icon: Wallet,
//       description: 'Support our mission with your contribution',
//       buttonText: 'Donate'
//     },
//     {
//       title: 'Volunteer',
//       icon: Users,
//       description: 'Share your time and skills to help others',
//       buttonText: 'Volunteer'
//     },
//     {
//       title: 'Join the Movement',
//       icon: Move,
//       description: 'Be part of the healthcare revolution',
//       buttonText: 'Join Movement'
//     }
//   ];

  const services = [
    {
      title: 'Siru Thuli Scheme',
      subtitle: "fully exempted",
      icon: Stethoscope,
      description: 'Comprehensive healthcare support for underprivileged families, providing essential medical services and preventive care.',
      features: ['Regular health check-ups', 'Medication support', 'Specialist consultations']
    },
    {
      title: 'Nalame Valam Scheme',
      subtitle : '50% off On subsidized rates',
      icon: Heart,
      description: 'Focused on preventive healthcare and wellness programs for communities, promoting healthy lifestyle practices.',
      features: ['Wellness programs', 'Health education', 'Preventive care']
    },
   
  ];

  return (
    <>
      {/* Call to Action Section */}
      {/* <section className="relative w-full bg-gradient-to-b from-[#f0faf9] to-white py-16">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
          <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#017F7E] sm:text-4xl">
              Join Us in Making a Difference
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <Card 
                key={action.title}
                className="group overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-all duration-300 group-hover:scale-150"></div>
                  
                  <div className="relative space-y-4">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-[#e0f7f6] p-4">
                        <action.icon className="h-8 w-8 text-[#00ADA9]" />
                      </div>
                    </div>
                    
                    <h3 className="text-center text-xl font-semibold text-[#017F7E]">
                      {action.title}
                    </h3>
                    
                    <p className="text-center text-gray-600">
                      {action.description}
                    </p>
                    
                    <button className="w-full rounded-lg bg-gradient-to-r from-[#00ADA9] to-[#017F7E] px-6 py-3 text-white transition-all duration-300 hover:shadow-md">
                      {action.buttonText}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Services Section */}
      <section className="relative w-full bg-gradient-to-t from-[#f0faf9] to-white py-16">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#017F7E] sm:text-4xl">
              Our Featured Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Comprehensive healthcare solutions designed to serve our community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-all duration-300 group-hover:scale-150"></div>
                  
                  <div className="relative space-y-6">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-[#e0f7f6] p-4">
                        <service.icon className="h-8 w-8 text-[#00ADA9]" />
                      </div>
                    </div>
                    
                    <h3 className="text-center text-2xl font-semibold text-[#017F7E]">
                      {service.title}
                    </h3>
                    <h3 className="text-center text-lg font-semibold text-[#017F7E]">
                      {service.subtitle}
                    </h3>
                    <p className="text-center text-gray-600">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center justify-center space-x-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#00ADA9]"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services">
                    <button  className="w-full mt-8 rounded-lg border-2 border-[#00ADA9] px-6 py-3 text-[#017F7E] transition-all duration-300 hover:bg-[#00ADA9] hover:text-white">
                      Learn More
                    </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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
    </>
  );
};

export default ActionAndServices;