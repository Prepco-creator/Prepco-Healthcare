"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ServiceLocations = () => {
  const locationData = [
    { region: 'Central Chennai', locations: 12 },
    { region: 'North Chennai', locations: 7 },
    { region: 'South Chennai', locations: 9 },
    { region: 'West Chennai', locations: 8 }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements - reusing from AboutUs */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Service Locations Card */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:bg-white/90 sm:p-12">
          <div className="text-center">
            <h2 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
              HOPE Service Locations
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">
              Our service locations across Chennai are strategically placed to ensure maximum accessibility 
              for all communities. We continue to expand our presence to reach more people in need.
            </p>
          </div>

          {/* Chart Container */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="region" 
                  tick={{ fill: '#017F7E' }}
                  interval={0}
                />
                <YAxis 
                  tick={{ fill: '#017F7E' }}
                  label={{ 
                    value: 'Number of Locations',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#017F7E'
                  }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #00ADA9'
                  }}
                />
                <Bar 
                  dataKey="locations" 
                  fill="#00ADA9"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Location Statistics Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {locationData.map((region) => (
            <div key={region.region} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-all duration-300 group-hover:scale-150"></div>
                  <div className="relative space-y-4">
                    <h3 className="text-center text-xl font-semibold text-[#017F7E]">{region.region}</h3>
                    <p className="text-center text-3xl font-bold text-[#00ADA9]">{region.locations}</p>
                    <p className="text-center text-gray-600">Service Centers</p>
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

export default ServiceLocations;