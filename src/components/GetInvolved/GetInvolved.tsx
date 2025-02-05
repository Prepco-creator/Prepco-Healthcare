"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, HandHeart, Share2, ArrowRight, Mail, X } from "lucide-react";

const GetInvolved = () => {
  const [showPopup, setShowPopup] = useState(false);

  const ways = [
    {
      title: "Donate",
      icon: Heart,
      description: "Your donations directly support individuals in need...",
      action: "Donate Today",
      gradient: "from-[#00ADA9] to-[#017F7E]",
      link: "https://yourdonationpage.com"
    },
    {
      title: "Volunteer",
      icon: HandHeart,
      description: "Join our team of dedicated volunteers...",
      action: "Join Us",
      gradient: "from-[#017F7E] to-[#00ADA9]",
      link: "#",
      onClick: () => setShowPopup(true) // Show the contact popup on click
    },
    {
      title: "Spread Awareness",
      icon: Share2,
      description: "Help us reach more people by sharing our mission...",
      action: "Share Now",
      gradient: "from-[#00ADA9] to-[#017F7E]",
      link: "#",
      onClick: () => shareLink()
    }
  ];

  const shareLink = () => {
    const shareData = {
      title: "PREPCO Charity",
      text: "Join us in making a difference! Visit: https://prepco-charity.vercel.app/",
      url: "https://prepco-charity.vercel.app/"
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Fallback: Open WhatsApp with predefined text
      window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text)}`, "_blank");
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Main Call to Action */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl sm:p-12">
          <div className="text-center">
            <h1 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
              What We Can Do Together
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-gray-700">
              &apos;PREPCO HOPE&apos; advocates for <span className="font-semibold">preventive healthcare</span> and lifestyle interventions...
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
                    <button
                      onClick={way.onClick ? way.onClick : undefined}
                      className="mx-auto mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E] px-6 py-2 text-white transition-transform hover:scale-105"
                    >
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
              Your involvement with PREPCO HOPE can change lives...
            </p>
            <button onClick={() => setShowPopup(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-[#00ADA9] transition-transform hover:scale-105">
              <Mail className="h-5 w-5" />
              Contact Us for More Details
            </button>
          </div>
        </div>

        {/* Contact Number Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-96 rounded-lg bg-white p-6 shadow-lg">
              <button onClick={() => setShowPopup(false)} className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
                <X className="h-5 w-5" />
              </button>
              <h2 className="mb-4 text-xl font-semibold text-[#017F7E]">Contact Us</h2>
              <p className="text-lg text-gray-700">📞 Call us at: <span className="font-bold">+91 98765 43210</span></p>
              <p className="text-lg text-gray-700">📧 Email: <a href="mailto:contact@prepco.org" className="text-[#00ADA9] hover:underline">contact@prepco.org</a></p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GetInvolved;
