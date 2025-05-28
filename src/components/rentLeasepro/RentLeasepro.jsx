"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaMapMarkerAlt, FaKey } from "react-icons/fa";

const features = [
  {
    title: "Rental Homes in Doddaballapura",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
    description:
      "Affordable rental homes in Doddaballapura — ideal for families, professionals, and students.",
  },
  {
    title: "Leased Spaces in Chikkaballapur",
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    description:
      "Choose from a range of leased commercial and residential spaces in peaceful Chikkaballapur.",
  },
  {
    title: "Rentals Near Bangalore",
    icon: <FaHome className="text-yellow-500 text-3xl" />,
    description:
      "Well-connected rental options near Bangalore with modern amenities and flexible terms.",
  },
  {
    title: "Lease Opportunities in Devanahalli",
    icon: <FaKey className="text-yellow-500 text-3xl" />,
    description:
      "Secure lease deals in Devanahalli — from shops and offices to family-friendly homes.",
  },
];

const RentLeasepro = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Rent & Lease Properties for Every Need
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          From cozy rentals to strategic commercial leases, we connect you with
          spaces that match your lifestyle and business goals.
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

export default RentLeasepro;
