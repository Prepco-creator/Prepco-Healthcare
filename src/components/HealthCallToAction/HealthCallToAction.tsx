"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, Heart, HandHeart } from 'lucide-react';

const HealthCallToAction = () => {
  const actions = [
    {
      title: 'Early Screening',
      icon: Stethoscope,
      description: 'Take control of your health through regular check-ups and early detection screenings. Prevention is better than cure.',
      buttonText: 'Schedule Screening'
    },
    {
      title: 'Healthy Living',
      icon: Heart,
      description: 'Embrace a healthier lifestyle with balanced nutrition and regular physical activity. Small changes lead to big results.',
      buttonText: 'Get Health Tips'
    },
    {
      title: 'Support the Cause',
      icon: HandHeart,
      description: 'Join our mission to combat lifestyle diseases in Tamil Nadu. Your support can make a difference in community health.',
      buttonText: 'Donate Now',
      
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-t from-[#f0faf9] to-white py-16">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 bottom-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#017F7E] sm:text-4xl">
            Take Action Today
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Together, we can combat the rising tide of lifestyle diseases in Tamil Nadu.
            Join us in creating a healthier future for our community.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {actions.map((action) => (
            <Card
              key={action.title}
              className="group relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Animated gradient circle */}
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
      `}</style>
    </section>
  );
};

export default HealthCallToAction;