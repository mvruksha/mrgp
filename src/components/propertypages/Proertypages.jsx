"use client";

import Image from "next/image";
import React from "react";

const Proertypages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-xl rounded-xs overflow-hidden">
      {/* Left side image */}
      <div className="h-96 relative">
        <Image
          src="/assets/home/properties/bhk3.jpg" // Make sure you have a nice image in public/contact.jpg
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="rounded-xs"
        />
      </div>

      {/* Right side form */}
      <div className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-6">Enquire Now</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xs p-3 focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-xs p-3 focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border rounded-xs p-3 focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-xs p-3 focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 rounded-xs hover:bg-yellow-600 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Proertypages;
