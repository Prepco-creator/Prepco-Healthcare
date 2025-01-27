import React from 'react';
import Image from 'next/image';
import  services  from '@/data/services';
import { Service } from '@/types';


const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FFFF] to-[#E3FFFE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#018380] to-[#00DAD4] bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#018380] to-[#00DAD4] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-32">
        {services.map((service: Service, index: number) => (
            <div
              key={service.id}
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-[#018380] group-hover:text-[#00DAD4] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-[#00DAD4] group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-[#121212] leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#018380]/20 to-transparent z-10" />
                  <div className={`absolute inset-0 bg-[#D0F2F3] opacity-10 ${index % 2 === 0 ? 'rounded-l-2xl' : 'rounded-r-2xl'}`} />
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
