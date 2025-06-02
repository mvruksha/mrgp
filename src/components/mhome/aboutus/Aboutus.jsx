"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <section className="bg-white font-montserrat pb-10 pt-14 sm:pt-12 md:pt-12 lg:pt-15 xl:pt-15 px-6 sm:px-10 lg:px-15">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-yellow-600 text-sm font-semibold uppercase tracking-wide">
            <span className="w-10 h-0.5 bg-yellow-600"></span>
            Who We Are
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Building <span className="text-yellow-600">Futures</span> on Solid
            Foundations
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At Surya Vruksha Property Junction, we specialize in buying and selling
            properties across Doddaballapura, Rajanukunte, Chikkaballapura, Nandi Hills, and Devanahalli. We
            align your needs, budget, and aspirations to find the perfect match.
            Our advisory and consulting services ensure that every property
            decision you make is informed, confident, and rewarding.
          </p>

          {/* Custom Button */}
          <Link
            href="aboutus"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-sm shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            Discover More
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          <Image
            src="/assets/home/about/aboutus.jpg"
            alt="Surya Vruksha Property Junction - Property Experts"
            className=""
            width={700}
            height={500}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mt-12 mx-auto text-center space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-gray-800">275+</p>
            <p className="text-yellow-600 mt-2 text-lg">Properties Listed</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-gray-800">425+</p>
            <p className="text-yellow-600 mt-2 text-lg">Happy Clients</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-gray-800">100%</p>
            <p className="text-yellow-600 mt-2 text-lg">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-gray-800">4.8/5</p>
            <p className="text-yellow-600 mt-2 text-lg">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
