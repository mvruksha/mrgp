"use client";

import React, { useRef } from "react";
import { reviews } from "./Data";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const Review = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="flex 2xl:px-22 bg-white items-center justify-center lg:py-[12vh] md:py-[10vh] py-[12vh] w-full px-4 md:px-12 lg:px-14 flex-col gap-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-between w-full px-2 md:flex-row">
        <h3 className="flex items-start justify-start max-w-xl gap-5 text-2xl font-bold text-center md:text-left lg:max-w-xl md:max-w-md md:text-3xl lg:text-4xl font-poppins">
          <div className="w-[80px] h-0.5 mt-5 hidden md:block bg-gray-700"></div>
          Our work process make your dream true
        </h3>
        <div className="items-center hidden gap-5 font-bold text-gray-500 md:flex text-7xl">
          . . . .
        </div>
      </div>

      {/* Review Cards Container with Horizontal Scroll */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[90%] md:auto-cols-[45%] lg:auto-cols-[30%] gap-5 overflow-x-auto scroll-smooth px-2 no-scrollbar"
        >
          {reviews.map(({ id, name, review, company, url, rating }) => (
            <div
              key={id}
              className="flex flex-col px-5 py-6 rounded-sm shadow-md md:px-12 shadow-gray-300 bg-gray-50"
            >
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src={url}
                  width={64}
                  height={64}
                  className="object-cover w-16 h-16 bg-center rounded-full shadow-sm"
                  alt={`${name} from ${company}`}
                />
                <div>
                  <h4 className="font-semibold text-md font-poppins">{name}</h4>
                  <p className="text-sm text-gray-400 font-montserrat">
                    {company}
                  </p>
                </div>
              </div>

              <p className="max-w-lg text-sm text-gray-500 font-montserrat mb-7">
                {review}
              </p>

              <div className="flex items-center gap-1 font-semibold text-gray-700 font-montserrat">
                ({rating}){" "}
                {Array.from({ length: rating }, (_, i) => (
                  <AiFillStar key={i} className="text-xl text-yellow-600" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center mt-10 gap-4 text-white">
          <BiSolidLeftArrow
            onClick={() => scroll(-350)}
            className="p-2 cursor-pointer hover:opacity-80 bg-gray-500 text-2xl"
          />
          <BiSolidRightArrow
            onClick={() => scroll(350)}
            className="p-2 cursor-pointer hover:opacity-80 bg-gray-700 text-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
