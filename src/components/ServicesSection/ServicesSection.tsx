import React from 'react';
import Image from 'next/image';
import { Service } from '@/types';


const services: Service[] = [
  {
    id: 1,
    title: "Dental Care",
    description: "At PREPCO HOPE, we offer free dental services including consultation, X-rays, and cleaning & scaling. Minimal charges apply for other treatments such as fillings, extractions, and root canals. Specialized treatments require pre-booking.",
    imageUrl: "/images/dental-care.jpg",
  },
  {
    id: 2,
    title: "General Medical Care & Free Consultations",
    description: "Our team of experienced doctors offers free general consultations to address common health concerns. Whether it’s a routine checkup or a specific health issue, our medical professionals are here to guide you toward better health.",
    imageUrl: "/images/general-medical-care.jpg",
  },
  {
    id: 3,
    title: "Physiotherapy & Rehabilitation",
    description: "We offer free physiotherapy services, including consultations, personalized exercise programs, mobility training, and rehabilitation services to improve strength, balance, and flexibility. Advanced treatments are available for minimal charges.",
    imageUrl: "/images/physiotherapy.jpg",
  },
  {
    id: 4,
    title: "Specialized Consultations",
    description: "We offer access to specialized care in dermatology, cardiology, pediatrics, mental health, orthopedics, and many other fields. Pre-booking is required, and consultations are available through our easy-to-use mobile app.",
    imageUrl: "/images/specialized-consultations.jpg",
  },
  {
    id: 5,
    title: "Fitness Services",
    description: "Stay fit with free fitness sessions such as yoga, Pilates, Zumba, and Tabata, available both online and in-person. Track your fitness progress and routines through our PREPCO HOPE mobile app, making it easier to stay committed to your health goals.",
    imageUrl: "/images/fitness-services.jpg",
  },
  {
    id: 6,
    title: "Doctor on Call",
    description: "Our Doctor on Call service offers consultations with a general physician and pediatrician, available at your convenience. For more specialized concerns, we help redirect you to the right expert.",
    imageUrl: "/images/doctor-on-call.jpg",
  },
  {
    id: 7,
    title: "Affordable Medications & Home Delivery",
    description: "PREPCO HOPE ensures that essential medicines are affordable, offering subsidized medications with the added convenience of home delivery services, available through the mobile app.",
    imageUrl: "/images/affordable-medications.jpg",
  },
  {
    id: 8,
    title: "Health Checkups",
    description: "We provide free health checkups, including screenings for key health markers like cholesterol and glucose levels.",
    imageUrl: "/images/health-checkups.jpg",
  },
  {
    id: 9,
    title: "Lab Services",
    description: "We offer free health checkups for everyone at PREPCO HOPE, which include screenings for blood pressure, cholesterol, glucose levels, and other key health markers.",
    imageUrl: "/images/lab-services.jpg",
  },
  {
    id: 10,
    title: "Nutrition & Diet Planning",
    description: "We offer personalized nutrition consultations and monthly diet charts to support specific health goals, especially for children and senior citizens. Track your progress and stay on top of your diet with the help of our app.",
    imageUrl: "/images/nutrition-diet.jpg",
  },
  {
    id: 11,
    title: "Home-Based Care for the Elderly",
    description: "Our geriatrics program offers home-based treatments for elderly patients, ensuring that they receive the care they need in the comfort of their own homes. Physiotherapy and other care services are available at affordable rates.",
    imageUrl: "/images/home-based-care.jpg",
  },
  {
    id: 12,
    title: "Pharmacist on Call",
    description: "Our pharmacists are available to answer any questions regarding your medications whether it’s about dosage, potential side effects, or interactions. Get expert advice at PREPCO HOPE via Pharmacist on Call.",
    imageUrl: "/images/pharmacist-on-call.jpg",
  },
  {
    id: 13,
    title: "Mobile Clinics & Virtual Services",
    description: "To make healthcare even more accessible, we bring healthcare to you with our mobile clinics, mobile labs, and mobile dental services. Virtual consultations are also available for added convenience. All services can be booked and managed through the PREPCO HOPE app.",
    imageUrl: "/images/mobile-clinics.jpg",
  },
  {
    id: 14,
    title: "Family Medical History Maintenance",
    description: "Keep track of your family's medical history and important health data with ease. Complete family medical history can be maintained within the PREPCO HOPE mobile application and accessed for a lifetime, for free. This feature helps ensure that any hereditary health risks are identified and managed, and it can be a vital tool for personalized healthcare.",
    imageUrl: "/images/family-medical-history.jpg",
  },
  {
    id: 15,
    title: "Follow-Ups & Health Reminders",
    description: "Stay on top of your health with personalized follow-ups and appointment reminders, all managed through the PREPCO HOPE app. Our customer service team is available to assist you, ensuring you never miss an important health task.",
    imageUrl: "/images/follow-ups.jpg",
  },
];

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
          {services.map((service, index) => (
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
