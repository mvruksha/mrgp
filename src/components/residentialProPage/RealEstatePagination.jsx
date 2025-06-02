"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaCheckCircle,
  FaRupeeSign,
  FaWhatsapp,
} from "react-icons/fa";

import "./styles.css";
import EnquiryModal from "./EnquiryModal";
// import properties from "../../data/residential-properties/DataResidential";

const ITEMS_PER_PAGE = 6;

const RealEstatePagination = ({ properties }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [regionFilter, setRegionFilter] = useState("All");
  const router = useRouter();

  const uniqueRegions = ["All", ...new Set(properties.map((p) => p.region))];

  const filteredProperties =
    regionFilter === "All"
      ? properties
      : properties.filter((p) => p.region === regionFilter);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="pt-8 pb-2 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Region Filter Buttons */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-700 mb-3">
            Filter by Region:
          </h4>
          <div className="flex flex-wrap gap-3">
            {uniqueRegions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setRegionFilter(region);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
          ${
            regionFilter === region
              ? "bg-yellow-500 text-white border-yellow-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProperties.map((property, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white rounded-xs overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col"
              onClick={() => router.push(property.link)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                >
                  {property.images.map((imgSrc, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={imgSrc}
                        alt={property.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-60"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <Link href={property.link} className="block">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-yellow-500">
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
                    <FaCheckCircle className="mr-1" />
                    {property.availability}
                  </p>
                </div>

                <p className="text-lg font-bold text-gray-900 mb-5 flex items-center">
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
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10 gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>

          <div className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded">
            Page {currentPage} of {totalPages}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Property Statistics */}
        <div className="mb-10 mt-6 bg-white shadow-lg p-5 rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              {properties.length}
            </h4>
            <p className="text-sm text-gray-500">Total Properties</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600">
              {
                properties.filter(
                  (property) => property.availability !== "Sold Out"
                ).length
              }
            </h4>
            <p className="text-sm text-gray-500">Available Properties</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-red-500">
              {
                properties.filter(
                  (property) => property.availability === "Sold Out"
                ).length
              }
            </h4>
            <p className="text-sm text-gray-500">Sold Out</p>
          </div>
        </div>

        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
      </div>
    </div>
  );
};

export default RealEstatePagination;
