"use client";
import React from "react";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";
import Link from "next/link";

const Catalogue = () => {
  const items = [
    {
      id: "01",
      category: "Residential Properties",
      title: "Expert Property Management",
      image: "/assets/home/cat/residential.jpg",
      path: "/mproperties/residential-plots",
      description:
        "We handle every aspect of your property with care and precision.",
    },
    {
      id: "02",
      category: "Commercial Properties",
      title: "Modern Commercial Interiors",
      image: "/assets/home/cat/commercial.jpg",
      path: "/mproperties/commercial-plots",
      description:
        "Transforming commercial spaces with sleek, functional design.",
    },
    {
      id: "03",
      category: "Agricultural Land",
      title: "Rural Land Enhancements",
      image: "/assets/home/cat/agri.jpg",
      path: "/mproperties/agricultural-farmland",
      description:
        "Improving rural landscapes through smart, sustainable solutions.",
    },
    {
      id: "04",
      category: "Rent or Lease Properties",
      title: "Quick Turnaround Services",
      image: "/assets/home/cat/rent&lease.jpg",
      path: "/mproperties/rent-lease",
      description:
        "Find the ideal space to rent or lease with ease and confidence.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group rounded-xs overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
        >
          {/* Image */}
          <div className="relative w-full h-56 sm:h-64 md:h-72">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 transform group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority
            />
          </div>

          {/* Category + ID Badge */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center bg-white/90 text-gray-900 text-xs sm:text-sm font-semibold px-3 py-1 rounded-xs z-20 shadow-md backdrop-blur-md">
            <span className="truncate max-w-[70%]">{item.category}</span>
            <span className="text-[10px] px-2 py-0.5 bg-gray-800 text-white rounded-xs shadow-sm">
              {item.id}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-30 p-4 flex flex-col justify-end text-white">
            <div>
              <h3 className="text-lg text-black sm:text-xl font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-black mb-3">{item.description}</p>
              <Link
                href={item.path}
                className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:text-blue-600 transition-all duration-300"
              >
                See Details
                <TbArrowNarrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
