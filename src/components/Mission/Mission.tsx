"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = ["Compassion", "Integrity", "Empowerment", "Accessibility"];

const MissionSection = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 sm:px-12 bg-white relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#E0F7F6] rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#C0F8F7] rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Mission Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#00ADA9] to-[#017F7E] bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>

        {/* Mission Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We provide free and subsidized healthcare services, including checkups, diagnosis, and treatments, for individuals in need. We believe that even small acts of care can lead to significant change.
        </motion.p>

        {/* Vision Section */}
        <motion.div
          className="mt-12 bg-white shadow-lg border border-gray-200 p-8 sm:p-10 rounded-xl max-w-4xl mx-auto transform transition hover:scale-105 duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#017F7E]">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To create a healthier, more equitable community by providing accessible healthcare and lifestyle interventions.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.h3
          className="text-3xl font-extrabold bg-gradient-to-r from-[#017F7E] to-[#00ADA9] bg-clip-text text-transparent mt-16 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Values
        </motion.h3>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="w-full max-w-xs bg-white shadow-lg border border-gray-200 p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-10 h-10 text-[#00ADA9] mb-3 drop-shadow-lg" />
                  </motion.div>
                  <p className="text-lg font-semibold text-gray-700">{value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
