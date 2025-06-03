"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mblog = () => {
  const cardData = [
    {
      title: "Residential Properties",
      description:
        "Explore a range of dream homes and premium plots tailored to your lifestyle. From modern apartments to spacious villas – find your perfect space today.",
      imgSrc: "/assets/home/cat/residential.jpg",
      link: "/mproperties/residential-properties",
    },
    {
      title: "Commercial Properties",
      description:
        "Boost your business presence with prime commercial spaces. Discover offices, retail units, and investment-worthy assets in the best locations.",
      imgSrc: "/assets/home/cat/commercial.jpg",
      link: "/mproperties/commercial-properties",
    },
    {
      title: "Agricultural Land",
      description:
        "Looking for farmland or future investment? Browse our curated listings of fertile, legally-clear agricultural land in strategic rural zones.",
      imgSrc: "/assets/home/cat/agri.jpg",
      link: "/mproperties/agricultural-land",
    },
    {
      title: "Rent or Lease Properties",
      description:
        "Explore verified residential and commercial rental and lease properties with flexible terms, transparent agreements, and prime locations to suit your needs.",
      imgSrc: "/assets/home/cat/rent&lease.jpg",
      link: "/mproperties/rent-lease",
    },
  ];

  return (
    <section className="mx-auto p-6 md:p-12 bg-white antialiased">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-black/80 lg:text-3xl mb-4">
          Discover Properties by Category
        </h2>
        <p className="text-sm text-[#4B5563] max-w-4xl mx-auto">
          Whether you are looking to invest, buy your dream home, or find a
          place to lease, Surya Vruksha Property Junction offers a curated
          selection of real estate options to match every need. Begin your
          property journey with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <Link href={card.link} key={index} passHref>
            <article className="flex flex-col md:flex-row items-center shadow-lg group cursor-pointer transform duration-500 hover:-translate-y-1 rounded-sm overflow-hidden border">
              <div className="relative w-full md:w-1/2 h-48">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500"
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-lg font-semibold text-gray-800 mt-4 md:mt-0">
                    {card.title}
                  </h1>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-blue-700 transition self-start"
                >
                  Explore
                </button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Mblog;
