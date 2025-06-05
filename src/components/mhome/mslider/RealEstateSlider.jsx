"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaRupeeSign, FaWhatsapp } from "react-icons/fa";
import { FaRulerCombined, FaCheckCircle } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";

import "./styles.css";
import EnquiryModal from "./EnquiryModal";
import { getPropertiesByVariant } from "../../../data/allProperties";

const RealEstateSlider = ({
  heading,
  viewAllLabel,
  viewAllLink,
  variant = "all",
}) => {
  const properties = getPropertiesByVariant(variant);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const router = useRouter();

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="py-8 bg-gray-100">
      <div className="px-4">
        <div className="group flex justify-between items-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {heading}
          </h2>
          <Link
            href={viewAllLink}
            className="flex underline items-center gap-1 text-base md:text-lg font-semibold text-yellow-600 group-hover:text-blue-400"
          >
            {viewAllLabel} <IoArrowRedoSharp className="text-xl" />
          </Link>
        </div>

        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index} onClick={() => router.push(property.link)}>
              <div className="cursor-pointer bg-white rounded-xs overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col">
                <div className="relative">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                      nextEl: `.next-${index}`,
                      prevEl: `.prev-${index}`,
                    }}
                    modules={[Navigation]}
                    className="propertyImageSlider"
                  >
                    {property.images.map((mediaSrc, mediaIndex) => (
                      <SwiperSlide key={mediaIndex}>
                        {mediaSrc.endsWith(".mp4") ? (
                          <video
                            src={mediaSrc}
                            controls
                            preload="metadata"
                            className="w-full h-60 object-cover"
                          />
                        ) : (
                          <Image
                            src={mediaSrc}
                            alt={property.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-60"
                          />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 transform -translate-y-1/2 z-10">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className={`prev-${index} bg-white p-1 rounded-sm shadow-md hover:bg-gray-300 transition`}
                    >
                      ◀
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className={`next-${index} bg-white p-1 rounded-sm shadow-md hover:bg-gray-300 transition`}
                    >
                      ▶
                    </button>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <Link href={property.link} className="block">
                    <h3 className="text-base font-semibold text-gray-800 mb-2 hover:text-orange-500">
                      {property.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-500 flex items-center mb-4">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    {property.location}
                  </p>

                  <div className="flex justify-between flex-wrap gap-2 mb-3">
                    <p className="flex items-center text-gray-600 text-sm">
                      <FaRulerCombined className="mr-1 text-purple-500" />
                      {property.dimensions}
                    </p>
                    <p
                      className={`flex items-center text-sm ${
                        property.availability === "Sold Out"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <FaCheckCircle
                        className={`mr-1 ${
                          property.availability === "Sold Out"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      />
                      {property.availability}
                    </p>
                  </div>

                  <p className="text-base text-gray-900 mb-5 flex items-center">
                    <FaRupeeSign className="mr-1" />
                    {property.price.toLocaleString("en-IN")}
                  </p>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(property);
                      }}
                      className="flex-1 bg-gray-800 text-white text-sm py-2 rounded-xs shadow-md hover:bg-yellow-500 transition-all"
                    >
                      Enquire Now
                    </button>

                    <Link
                      href={`https://wa.me/919986677996?text=Hi, I'm interested in the ${property.title} located at ${property.location}. Could you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-green-500 text-white text-sm py-2 rounded-xs shadow-md hover:bg-green-600 flex justify-center items-center transition-all"
                    >
                      <FaWhatsapp className="mr-2" /> WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
