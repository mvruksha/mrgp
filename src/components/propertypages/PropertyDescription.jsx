"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function PropertyDescription({ description, images = [] }) {
  if (!description && images.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
      {description && (
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      )}

      {images.length > 0 && (
        <div className="relative">
          <Swiper
            navigation
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation]}
            className="property-slider"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                {src.endsWith(".mp4") ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
