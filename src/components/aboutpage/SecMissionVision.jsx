"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaTools } from "react-icons/fa";

const features = [
  {
    title: "Our Mission",
    icon: <FaBullseye className="text-yellow-500 text-3xl" />,
    description:
      "To provide seamless, transparent, and client-centric property services, ensuring each transaction is built on trust and value.",
  },
  {
    title: "Our Vision",
    icon: <FaEye className="text-yellow-500 text-3xl" />,
    description:
      "To be the most reliable and innovative real estate partner in North Bangalore, empowering clients through knowledge and clarity.",
  },
  {
    title: "Our Capabilities",
    icon: <FaTools className="text-yellow-500 text-3xl" />,
    description:
      "From market analysis to legal consultation, our expert team ensures every buyer and seller gets end-to-end professional support.",
  },
];

const SecMissionVision = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          Mission, Vision & Capabilities
        </motion.h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We are committed to more than just property deals — we build long-term
          relationships rooted in values and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xs shadow-lg hover:shadow-2xl transition duration-300"
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

export default SecMissionVision;
