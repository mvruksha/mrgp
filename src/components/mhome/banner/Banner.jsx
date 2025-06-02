"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiPhoneCall } from "react-icons/fi";

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  { ssr: false }
);

const slides = [
  "/assets/banner/banner1.jpg",
  "/assets/banner/banner2.jpg",
  "/assets/banner/banner3.jpg",
];

const titles = [
  "BUY | SELL PROPERTIES",
  "Land | Commercial | Residential",
  "Ddoddaballapura | Nandi Hills | Devenahalli",
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative mt-[115px] sm:mt-[115px] md:mt-[95px] lg:mt-[75px] xl:mt-[85px]">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3500}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows
        stopOnHover={false}
        onChange={setActiveSlide}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-[250px] md:h-[500px] lg:h-[550px] overflow-hidden"
          >
            {/* Background Image with slight zoom effect */}
            <div className="relative w-full h-full scale-110 animate-zoomSlow">
              <Image
                src={slide}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20 z-10 text-white">
              <h2 className="text-[14px] md:text-[22px] font-semibold tracking-wider font-montserrat mb-1 animate-fadeIn">
                {activeSlide === idx && (
                  <Typewriter
                    words={["PROPERTY CONSULTANT"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={20}
                  />
                )}
              </h2>

              <h1 className="text-[18px] md:text-[32px] font-bold font-montserrat text-yellow-400 animate-fadeIn delay-200">
                {activeSlide === idx && (
                  <Typewriter
                    words={[titles[idx]]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                  />
                )}
              </h1>

              <div className="flex gap-4 mt-6 animate-fadeIn delay-500 flex-wrap justify-center">
                <Link
                  href="/contact-us"
                  className="w-[128px] sm:w-[180px] md:w-[150px] lg:w-[160px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[45px] bg-[#ffac07] text-white rounded-[1px] flex items-center justify-center hover:bg-[#e69b05] transition-all text-center"
                >
                  Contact us
                </Link>

                <a
                  href="tel:+919986677996"
                  className="w-[128px] sm:w-[180px] md:w-[150px] lg:w-[160px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[45px] bg-gray-700 text-white rounded-[1px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
                >
                  <FiPhoneCall className="text-sm animate-pulse" />
                  9986677996
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
