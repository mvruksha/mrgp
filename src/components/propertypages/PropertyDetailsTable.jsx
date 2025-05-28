"use client";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineMapPin,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";

const EnquiryModal = dynamic(
  () => import("../residentialProPage/EnquiryModal"),
  {
    ssr: false,
  }
);

export default function PropertyDetailsTable({ property, images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!property) return null;

  const Row = ({ label, value, highlight = false }) => (
    <tr
      className={`border-b ${
        highlight ? "bg-green-50 font-semibold" : "hover:bg-gray-50"
      }`}
    >
      <th className="text-gray-700 py-2 px-4 text-sm font-medium w-1/3 whitespace-nowrap">
        {label}
      </th>
      <td className="py-2 px-4 text-gray-800 text-sm">{value}</td>
    </tr>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 border rounded-md shadow-md p-4 mb-8">
      {/* Image Slider section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[400px] rounded overflow-hidden border flex">
        {images && images.length > 0 ? (
          <>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop
              className="w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover rounded"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button className="custom-swiper-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition z-10">
              <HiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="custom-swiper-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition z-10">
              <HiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
            No Image Available
          </div>
        )}
      </div>

      {/* Table section */}
      <div className="w-full md:w-1/2 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody>
            <Row
              label="Price"
              value={`₹ ${property.price.toLocaleString("en-IN")}`}
              highlight
            />
            {property.availability && (
              <Row
                label="Availability"
                value={
                  <span
                    className={`font-semibold ${
                      property.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {property.availability}
                  </span>
                }
              />
            )}

            {property.sites ? (
              <Row label="Site Size" value={property.sites} />
            ) : property.acre || property.guntas ? (
              <>
                {property.acre && <Row label="Acres" value={property.acre} />}
                {property.guntas && (
                  <Row label="Guntas" value={property.guntas} />
                )}
              </>
            ) : (
              <>
                {property.bedrooms && (
                  <Row label="Bedrooms" value={property.bedrooms} />
                )}
                {property.bathrooms && (
                  <Row label="Bathrooms" value={property.bathrooms} />
                )}
              </>
            )}

            {property.dimensions && (
              <Row label="Dimensions" value={property.dimensions} />
            )}

            <Row label="Property Type" value={property.propertyType} />

            {property.location && (
              <Row label="Location" value={property.location} />
            )}

            <Row label="Owner Name" value={property.ownerName} />
            <Row label="Phone Number" value={property.phoneNumber} />

            {property.dcConversion && (
              <Row label="DC Conversion" value={property.dcConversion} />
            )}

            {property.revenueSite && (
              <Row label="Revenue Site" value={property.revenueSite} />
            )}

            {property.googleMapLink && (
              <tr className="border-b hover:bg-gray-50">
                <th className="py-2 px-4 text-sm font-medium text-black">
                  Location
                </th>
                <td className="py-2 px-4">
                  <Link
                    href={property.googleMapLink}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <HiOutlineMapPin className="w-4 h-4" />
                    <span className="underline">Open in Maps</span>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-4">
          <button
            onClick={handleOpenModal}
            className="px-8 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-lg transition"
          >
            Enquire Now
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        property={property}
      />
    </div>
  );
}
