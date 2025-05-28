"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaTools, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  {
    title: "Residential Properties in Doddaballapura",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
    description:
      "Find your perfect residential property in Doddaballapura at unbeatable prices and great locations.",
  },
  {
    title: "Residential Properties in Chikkaballapur",
    icon: <FaBullseye className="text-yellow-500 text-3xl" />,
    description:
      "Explore high-value properties in Chikkaballapur with peace, nature, and connectivity.",
  },
  {
    title: "Residential Properties in Bangalore",
    icon: <FaEye className="text-yellow-500 text-3xl" />,
    description:
      "Premium housing options in Bangalore’s top neighborhoods — modern, accessible, and secure.",
  },
  {
    title: "Residential Properties in Devanahalli",
    icon: <FaTools className="text-yellow-500 text-3xl" />,
    description:
      "Invest in rapidly developing Devanahalli — ideal for families and long-term growth.",
  },
];

const ResidentialPro = () => {
  return (
    <section className=" py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Residential Properties at Prices That Suit You
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We&apos;re more than property dealers — we&apos;re your trusted
          partners in finding a home where memories are made.
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

export default ResidentialPro;
