"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaChartLine,
  FaMapMarkerAlt,
  FaIndustry,
} from "react-icons/fa";

const features = [
  {
    title: "Commercial Spaces in Doddaballapura",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
    description:
      "Discover affordable commercial plots and offices in Doddaballapura — ideal for growing businesses.",
  },
  {
    title: "Commercial Properties in Chikkaballapur",
    icon: <FaIndustry className="text-yellow-500 text-3xl" />,
    description:
      "Strategic locations in Chikkaballapur for industrial and retail ventures with promising returns.",
  },
  {
    title: "Commercial Projects in Bangalore",
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    description:
      "Premium office and retail spaces in Bangalore’s business districts — high visibility and access.",
  },
  {
    title: "Commercial Investments in Devanahalli",
    icon: <FaChartLine className="text-yellow-500 text-3xl" />,
    description:
      "Tap into Devanahalli’s commercial growth with smart investments in developing business zones.",
  },
];

const CommercialPro = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Commercial Properties That Drive Business Growth
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Whether you&apos;re setting up shop or expanding your empire, we help
          you secure the right location for success.
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

export default CommercialPro;
