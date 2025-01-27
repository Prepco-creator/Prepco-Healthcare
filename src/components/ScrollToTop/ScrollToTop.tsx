"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#018380] hover:bg-[#00ADA9] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 group"
          aria-label="Scroll to top"
        >
          <ChevronUp 
            className="w-6 h-6 group-hover:animate-bounce" 
            strokeWidth={2.5}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;