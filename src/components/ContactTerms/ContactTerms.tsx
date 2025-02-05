"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, Wallet, Heart, Users, Activity } from "lucide-react";

const DecorativeWave = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillOpacity="0.1" fill="#00ADA9" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
);

const HealthcareIllustration = () => (
  <svg className="absolute right-0 top-20 h-64 w-64 opacity-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20L120 80H180L130 120L150 180L100 140L50 180L70 120L20 80H80L100 20Z" fill="#00ADA9" fillOpacity="0.2"/>
    <circle cx="100" cy="100" r="60" stroke="#00ADA9" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

const ContactTerms = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const termsSection = [
    {
      title: "1. General Information",
      content: "PREPCO HOPE is a non-profit organization dedicated to providing healthcare services and support to underprivileged individuals, focusing on preventing and managing non-communicable diseases (Lifestyle Diseases) in Tamil Nadu. These Terms and Conditions govern your use of our website, services, and participation in our initiatives."
    },
    {
      title: "2. Eligibility for Services",
      content: `• SIRU THULI SCHEME: This scheme is available to individuals who meet the eligibility criteria under the Government's Below Poverty Line (BPL) classification. Eligibility verification will require the submission of valid documents such as a ration card and income certificate.
• Nalame Valam SCHEME: This scheme is available to individuals of any age under the BPL criteria, with appropriate documentation proving eligibility. Children require parental BPL proof and a medical certificate.`
    },
    {
      title: "3. Service Access and Membership",
      content: `• Membership: Upon successful verification, eligible individuals will receive a membership card valid for two years.
• Mobile Number Tracking: Membership is linked to a unique mobile number to track and manage services for the enrolled individual.`
    },
    {
      title: "4. Services Provided",
      content: `PREPCO HOPE provides a range of free and subsidized healthcare services, including consultations, screenings, treatments, and diagnostics. The specific services available depend on the scheme under which the individual is enrolled:
• SIRU THULI SCHEME: Free services include diabetic care, blood pressure management, cardiac investigations, and master health checkups.
• Nalame Valam SCHEME: Subsidized services include dental care, blood/liver tests, women's health checkups, physiotherapy sessions, and more.`
    },
    {
      title: "5. Donations and Financial Contributions",
      content: `• Donations are voluntary and non-refundable
• Tax exemption Under sec. 80(G) of the Income Tax Act,1961
• Funds are used exclusively for healthcare services and supporting our programs`
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
        <HealthcareIllustration />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Contact Section with Enhanced Design */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:bg-white/90 sm:p-12">
          <div className="relative">
            <h1 className="relative mb-8 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
              Contact Us
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
            </h1>
            
            <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#e0f7f6]">
              <Activity className="h-10 w-10 text-[#00ADA9]" />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Phone, title: "Phone", content: "+91 9884555335" },
              { icon: Mail, title: "Email", content: "Info@prepcohope.org" },
              { 
                icon: MapPin, 
                title: "Address", 
                content: "Anbalayaa Complex, 2nd Floor, #50/22, Thirumangalam Rd, Kambar Colony, Anna Nagar, Chennai - 600040." 
              }
              
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-all duration-300 group-hover:scale-150"></div>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-[#e0f7f6] p-3">
                    <item.icon className="h-6 w-6 text-[#00ADA9]" />
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-[#017F7E]">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Donate Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-[#00ADA9] p-8 text-white shadow-xl sm:p-12">
          <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-5"></div>
          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-4">
              <Heart className="h-8 w-8 animate-pulse" />
              <Wallet className="h-12 w-12" />
              <Users className="h-8 w-8 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold">Donate Today</h2>
            <p className="max-w-3xl text-lg">
              Your donations will go directly toward supporting individuals in need, ensuring that no one is turned 
              away due to financial constraints. Together, we can make a lasting impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <p className="rounded-full bg-white/20 px-4 py-2 text-sm">
                Tax exemption Under sec. 80(G)
              </p>
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-[#00ADA9] transition-transform hover:scale-105">
                Make a Donation
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Terms Section */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
          <div className="absolute right-0 top-0 -z-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#00ADA9" strokeWidth="2" strokeDasharray="8 8" opacity="0.2"/>
              <circle cx="100" cy="100" r="60" stroke="#00ADA9" strokeWidth="2" strokeDasharray="6 6" opacity="0.2"/>
              <circle cx="100" cy="100" r="40" stroke="#00ADA9" strokeWidth="2" strokeDasharray="4 4" opacity="0.2"/>
            </svg>
          </div>
          
          <h2 className="mb-8 text-3xl font-bold text-[#017F7E]">Terms and Conditions</h2>
          
          <div className="space-y-4">
            {termsSection.map((section, index) => (
              <div 
                key={index}
                className="group rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left font-semibold text-[#017F7E]"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e0f7f6] text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </span>
                  {expandedSection === index ? (
                    <ChevronUp className="h-5 w-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                  )}
                </button>
                {expandedSection === index && (
                  <div className="border-t border-gray-200 p-4 text-gray-600">
                    <p className="whitespace-pre-line">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <DecorativeWave />

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

export default ContactTerms;