"use client";
import Iframe from "react-iframe";
import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-lg shadow-lg">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
        <Iframe
          id="faith-map-frame"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5964207285274!2d77.54516710000001!3d13.3131322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1dfca438c9b09%3A0x9ca86727fa1f7687!2sJ.C.N%20CONVENTION%20Hall!5e0!3m2!1sen!2sin!4v1748417992647!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactMap;
