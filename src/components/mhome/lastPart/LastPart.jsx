import React from "react";
import Image from "next/image";
import Link from "next/link";

const homeProduct = [
  {
    id: "1",
    image: "/assets/home/cat/residential.jpg",
    path: "/mproperties/residential-plots",
    title: "Expert Property Management",
    description:
      "We handle every aspect of your property with care and precision.",
  },
  {
    id: "2",
    image: "/assets/home/lastpart/commercial.jpg",
    title: "Modern Commercial Interiors",
    description:
      "Transforming commercial spaces with sleek, functional design.",
    path: "/mproperties/commercial-plots",
  },
  {
    id: "3",
    image: "/assets/home/lastpart/land.jpg",
    title: "Rural Land Enhancements",
    description:
      "Improving rural landscapes through smart, sustainable solutions.",
    path: "/mproperties/agricultural-farmland",
  },
  {
    id: "4",
    image: "/assets/home/lastpart/rents.jpg",
    title: "Rent or Lease Properties",
    description:
      "Find the ideal space to rent or lease with ease and confidence.",
    path: "/mproperties/rent-lease",
  },
];

const LastPart = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mx-auto px-4">
        {homeProduct.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className="relative shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden rounded-xs"
          >
            <div className="relative w-full h-80">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform filter brightness-50 duration-500 ease-in-out hover:scale-110"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-950 text-white transition-opacity duration-500 p-4 opacity-100 hover:opacity-100">
                <h2 className="text-xl font-bold mb-2 drop-shadow-md">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base mb-4 drop-shadow-md">
                  {item.description}
                </p>
                <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 text-white rounded-xs shadow-lg hover:shadow-xl text-sm">
                  See More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default LastPart;
