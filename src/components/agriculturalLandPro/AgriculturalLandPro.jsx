"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTractor, FaSeedling, FaMapMarkerAlt, FaWater } from "react-icons/fa";

const features = [
  {
    title: "Agricultural Land in Doddaballapura",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
    description:
      "Fertile farmland in Doddaballapura perfect for long-term cultivation or organic farming projects.",
  },
  {
    title: "Farm Land in Chikkaballapur",
    icon: <FaTractor className="text-yellow-500 text-3xl" />,
    description:
      "Explore expansive agricultural plots in Chikkaballapur ideal for orchards, plantations, or investment.",
  },
  {
    title: "Agricultural Property Near Bangalore",
    icon: <FaSeedling className="text-yellow-500 text-3xl" />,
    description:
      "Productive lands near Bangalore that blend countryside peace with city connectivity.",
  },
  {
    title: "Irrigated Land in Devanahalli",
    icon: <FaWater className="text-yellow-500 text-3xl" />,
    description:
      "Irrigation-ready plots in Devanahalli with great potential for sustainable farming and returns.",
  },
];

const AgriculturalLandPro = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Agricultural Lands That Cultivate Prosperity
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Whether you&apos;re planning a farm, a retreat, or a green investment,
          we offer the best rural properties to match your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-sm shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AgriculturalLandPro;
