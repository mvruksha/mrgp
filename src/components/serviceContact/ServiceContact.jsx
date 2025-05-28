"use client";
import React from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const ServiceContact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-gray-600 via-gray-100 to-gray-700 text-white px-6 py-10 md:px-16 lg:px-28 2xl:px-40 overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 lg:gap-28">
        {/* Text + Form Block */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <span className="inline-block w-20 h-1 mb-4 bg-yellow-500 rounded-xs"></span>
            <h3 className="text-3xl md:text-2xl text-black lg:text-2xl font-bold font-montserrat leading-tight tracking-tight">
              Get a Free Consultation
            </h3>
            <p className="mt-2 text-gray-900 text-sm md:text-base font-light leading-relaxed">
              Leave your contact information below and we’ll reach out to
              schedule your consultation.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
            <input
              type="email"
              placeholder="Your Phone Number"
              className="col-span-1 md:col-span-2 px-5 py-3 rounded-sm bg-white text-black text-sm font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
            />
            <input
              type="text"
              placeholder="Name"
              className="px-5 py-3 rounded-sm bg-white text-black text-sm font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-5 py-3 rounded-sm bg-white text-black text-sm font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
            />

            <div className="md:col-span-2">
              <Button
                label="Request Callback"
                icon={
                  <BsArrowRight className="text-white text-md group-hover:translate-x-1 group-hover:text-yellow-400 transition-transform duration-300" />
                }
              />
            </div>
          </form>
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-[60%] flex justify-center relative">
          <div className="w-full mx-auto shadow-2xl rounded-sm overflow-hidden ring-1 ring-gray-600">
            <Image
              src="/assets/conatctservice/mrgroup.jpg"
              alt="Consultation Art"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;
