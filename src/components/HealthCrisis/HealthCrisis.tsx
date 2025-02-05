"use client";
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Activity, Heart, Cigarette, Wine, Scale, Footprints, HeartPulse, Dumbbell } from 'lucide-react';

const HealthCrisis = () => {
  const diseases = [
    {
      name: 'Diabetes',
      percentage: 17.6,
      description: 'Highest prevalence in India',
      icon: Activity,
      showPercentage: true
    },
    {
      name: 'Hypertension',
      percentage: 33.9,
      description: 'Leading to heart disease and stroke',
      icon: HeartPulse,
      showPercentage: true
    },
    {
      name: 'Cardiac Diseases',
      description: 'The leading cause of death in the region',
      icon: Heart,
      showPercentage: false
    }
  ];

  const riskFactors = [
    {
      name: 'Tobacco Use',
      percentage: 40,
      description: 'Among men',
      icon: Cigarette
    },
    {
      name: 'Alcohol',
      percentage: 39.1,
      description: 'Of individuals',
      icon: Wine
    },
    {
      name: 'Obesity',
      percentage: 11.4,
      description: 'Of individuals',
      icon: Scale
    },
    {
      name: 'Overweight',
      percentage: 28.5,
      description: 'Of Population',
      icon: Dumbbell
    },
    {
      name: 'Physical Inactivity',
      percentage: 28.5,
      description: 'Especially in urban areas',
      icon: Footprints
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-12">
      {/* Animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#017F7E] sm:text-5xl">
            Rising Lifestyle Diseases in Tamil Nadu
          </h1>
          <h1 className="mb-4 text-4xl font-bold text-[#017F7E] sm:text-5xl">
            The Crisis at Hand
          </h1>
          <div className="mx-auto mb-8 max-w-3xl">
            <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-700">
              <p className="text-xl font-semibold">
                75% of deaths are due to lifestyle diseases
              </p>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Prevalent Diseases */}
          <Card className="overflow-hidden backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#00ADA9] to-[#017F7E] p-6">
              <h2 className="text-2xl font-bold text-white">Prevalent Diseases</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {diseases.map((disease) => (
                  <div key={disease.name} className="flex items-center space-x-4 rounded-lg bg-white/50 p-4 shadow-sm">
                    <div className="rounded-full bg-[#e0f7f6] p-3">
                      <disease.icon className="h-6 w-6 text-[#00ADA9]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#017F7E]">
                        {disease.name}
                      </h3>
                      <p className="text-gray-600">
                        {disease.showPercentage ? `${disease.percentage}% - ` : ''}{disease.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="overflow-hidden backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#017F7E] to-[#00ADA9] p-6">
              <h2 className="text-2xl font-bold text-white">Risk Factors</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {riskFactors.map((factor) => (
                  <div key={factor.name} className="group relative overflow-hidden rounded-lg bg-white/50 p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#00ADA9] to-[#017F7E] opacity-10 transition-all duration-300 group-hover:scale-150"></div>
                    <div className="relative flex items-center space-x-4">
                      <div className="rounded-full bg-[#e0f7f6] p-3">
                        <factor.icon className="h-6 w-6 text-[#00ADA9]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#017F7E]">
                          {factor.name}
                        </h3>
                        <p className="text-gray-600">
                          {factor.percentage}% {factor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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

export default HealthCrisis;