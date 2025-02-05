import { motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface NumberCTAPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function NumberCTAPopup({ isOpen, setIsOpen }: NumberCTAPopupProps) {
  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
    >
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm text-center relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Get in Touch!</h2>

      

        {/* Call Now Button */}
        <button
          onClick={() => window.location.href = "tel:+918685757475"}
          className="mt-4 w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300"
        >
          📞 Call Now: +91 8685757475
        </button>
      </div>
    </motion.div>
  );
}
