import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const images: GalleryImage[] = [
  { id: 1, src: "/Images/jpg/doctor-pulse-village-woman.jpg", alt: "doctor-pulse-village-woman", title: "Elderly Healthcare" },
  { id: 2, src: "/Images/jpg/doctor-checking-bp-girl.jpg", alt: "Gallery Image 2", title: "Community Support" },
  { id: 3, src: "/Images/jpg/doctor-testing-eye-2.jpg", alt: "Gallery Image 3", title: "Healthcare Services" },
  { id: 4, src: "/Images/jpg/medical-camp.jpg", alt: "Gallery Image 4", title: "Medical Camps" },
  { id: 5, src: "/Images/jpg/doctor-checking-village-man-2.jpg", alt: "Gallery Image 5", title: "Rural Healthcare" },
  { id: 6, src: "/Images/jpg/group-disccussion-street-volunteers.jpg", alt: "Gallery Image 6", title: "Awareness Programs" },
  { id: 7, src: "/Images/jpg/medical-camp-2.jpg", alt: "Gallery Image 7", title: "Community Events" },
  { id: 8, src: "/Images/jpg/doctor-prescription-old-lady.jpg", alt: "Gallery Image 8", title: "Health Education" },
];

const GridGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0faf9] to-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 animate-blob rounded-full bg-[#e0f7f6] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute right-0 top-0 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-[#c0f8f7] opacity-70 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-[#d5f5f4] opacity-70 mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="relative mb-6 inline-block text-4xl font-bold text-[#017F7E] sm:text-5xl">
            Siru Thuli Gallery
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00ADA9] to-[#017F7E]"></div>
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image) => (
              <div key={image.id} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00ADA9]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-[#017F7E]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-[#017F7E]" />
          </button>

          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === index
                  ? "bg-[#017F7E] w-6"
                  : "bg-[#017F7E]/30"
                  }`}
              />
            ))}
          </div>
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

export default GridGallery;