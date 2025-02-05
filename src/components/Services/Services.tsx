/* eslint-disable react/no-unescaped-entities */

"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  PlusCircle,
  Crown,
  Plus,
  Apple,
  TestTube,
  Activity as Therapy,
  Users,
} from "lucide-react";
import Image from 'next/image';
import { images } from '../../../public/assets';

const Services = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 animate-blob rounded-full bg-[#e0f7f6] opacity-40 mix-blend-multiply blur-3xl"></div>
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-40 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-40 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Main Services Introduction */}
        <div className="mb-16 text-center">
          <h2 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
            Our Services
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
            At PREPCO HOPE, we offer a wide range of healthcare services aimed at preventing and managing Lifestyle diseases,
            including diabetes, hypertension, and cardiac diseases. Our services focus on early detection, regular monitoring,
            and providing preventive care to the underprivileged, especially those at risk due to sedentary lifestyles and poor diet.
          </p>
        </div>

        {/* Siru Thuli Scheme */}
        <div className="mb-16" id='siru'>
          <Card className="group overflow-hidden">
            <CardContent className="relative p-8">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-transform duration-500 group-hover:scale-150"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image Section */}
                <div className="md:col-span-4 relative h-[300px] md:h-[400px]">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={images.jpgs.dental}
                      alt="Dental services"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-8">
                  <div className="mb-6 flex items-center">
                    <Crown className="mr-4 h-8 w-8 text-[#00ADA9]" />
                    <h3 className="text-3xl font-bold text-[#017F7E]">SIRU THULI SCHEME - fully exempted</h3>
                  </div>

                  <p className="mb-8 text-lg text-gray-700">
                    The 'Siru Thuli Scheme' embodies the belief that small efforts can lead to significant impacts. This initiative was born from the struggles of our own elders—fathers and grandfathers—who faced difficulties in meeting their basic healthcare needs due to financial issues. In response, we launched the 'Siru Thuli Scheme' to provide free medical services to individuals above the age of 50.
                  </p>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Eligibility */}
                    <div className="space-y-4 rounded-xl bg-[#f0faf9] p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-semibold text-[#017F7E]">Eligibility</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <PlusCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#00ADA9]" />
                          <span>Individuals above 50 years under BPL criteria (income below ₹1L)</span>
                        </li>
                        <li className="flex items-start">
                          <PlusCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#00ADA9]" />
                          <span>Exceptions for those above 40 years with medical certification and BPL proof</span>
                        </li>
                        <li className="flex items-start">
                          <PlusCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#00ADA9]" />
                          <span>Seniors, orphans, and other underprivileged individuals qualify</span>
                        </li>
                      </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4 rounded-xl bg-[#f0faf9] p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-semibold text-[#017F7E]">Services Offered</h4>
                      <div className="grid gap-4">
                        {/* Service items */}
                        <div className="flex items-start rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <Activity className="mr-3 h-6 w-6 text-[#00ADA9]" />
                          <div>
                            <h5 className="font-semibold text-[#017F7E]">Diabetic Care & BP</h5>
                            <p className="text-sm text-gray-600">Consultations, Diabetic tests, Insulin therapy</p>
                          </div>
                        </div>
                        {/* Repeat for other services */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nalame Valam Scheme */}
        <div className="mb-16">
          <Card className="group overflow-hidden">
            <CardContent className="relative p-8">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#017F7E] to-[#00ADA9] opacity-10 transition-transform duration-500 group-hover:scale-150"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image Section */}


                {/* Content Section */}
                <div className="md:col-span-8">
                  <div className="mb-6 flex items-center">
                    <Users className="mr-4 h-8 w-8 text-[#00ADA9]" />
                    <h3 className="text-3xl font-bold text-[#017F7E]">Nalame Valam SCHEME</h3>
                  </div>

                  <p className="mb-8 text-lg text-gray-700">
                    The 'Nalame Valam Scheme' was launched after the success and growth of the "Siru Thuli Scheme." Our team recognized the need to support people of all age groups who are unable to afford their healthcare expenses. We provide a 50% discount from the subsidised cost of treatment or services.
                  </p>

                  {/* Previous code remains the same until Nalame Valam content section */}

                  {/* Inside Nalame Valam's Content Section, replace the last div with: */}
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Eligibility */}
                    <div className="space-y-4 rounded-xl bg-[#f0faf9] p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-semibold text-[#017F7E]">Eligibility</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <PlusCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#00ADA9]" />
                          <span>Individuals of any age with BPL proof & Income certificate</span>
                        </li>
                        <li className="flex items-start">
                          <PlusCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#00ADA9]" />
                          <span>For children, proof of parent&apos;s BPL status and medical certificate required</span>
                        </li>
                      </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4 rounded-xl bg-[#f0faf9] p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-semibold text-[#017F7E]">Services Offered (50% off On subsidized rates)</h4>
                      <div className="grid gap-4">
                        <div className="flex items-start rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <Plus className="mr-3 h-6 w-6 text-[#00ADA9]" />
                          <div>
                            <h5 className="font-semibold text-[#017F7E]">Dental Care</h5>
                            <p className="text-sm text-gray-600">Cleaning, filling, and extractions</p>
                          </div>
                        </div>
                        <div className="flex items-start rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <Apple className="mr-3 h-6 w-6 text-[#00ADA9]" />
                          <div>
                            <h5 className="font-semibold text-[#017F7E]">Nutrition</h5>
                            <p className="text-sm text-gray-600">Kids and adult nutrition services</p>
                          </div>
                        </div>
                        <div className="flex items-start rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <TestTube className="mr-3 h-6 w-6 text-[#00ADA9]" />
                          <div>
                            <h5 className="font-semibold text-[#017F7E]">Health Tests</h5>
                            <p className="text-sm text-gray-600">Blood/liver/lipid/cholesterol testing, Women&apos;s health checkups</p>
                          </div>
                        </div>
                        <div className="flex items-start rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <Therapy className="mr-3 h-6 w-6 text-[#00ADA9]" />
                          <div>
                            <h5 className="font-semibold text-[#017F7E]">Physical Therapy</h5>
                            <p className="text-sm text-gray-600">Physiotherapy sessions, doctor consultations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                <div className="md:col-span-4 relative h-[300px] md:h-[400px]">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={images.jpgs.dental}
                      alt="Dental services"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animations */}
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

export default Services;