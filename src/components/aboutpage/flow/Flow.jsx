"use client";

import React from "react";
import Button1 from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { services } from "./Data";

const Flow = () => {
  return (
    <section
      id="services"
      className="w-full font-montserrat bg-slate-50 pb-10 lg:py-[6vh] md:py-[5vh] py-[6vh] px-6 md:px-12 lg:px-20"
    >
      <div className="flex flex-col w-full gap-5 md:gap-10">
        {/* Heading + CTA */}
        <div className="flex flex-col gap-5 mb-10 md:flex-row md:items-center md:justify-between">
          <h3 className="flex items-start justify-start max-w-xl gap-5 text-2xl font-bold text-center md:text-left lg:max-w-xl md:max-w-md md:text-3xl lg:text-4xl font-poppins">
            <div className="w-[80px] h-0.5 mt-5 hidden md:block bg-yellow-600"></div>{" "}
            Our streamlined real estate process — from search to sale
          </h3>
          <div className="mx-auto">
            <Button1
              label="More Details"
              icon={
                <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
              }
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid w-full grid-cols-1 grid-rows-5 gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((service) => {
            const { id, title, content, icon } = service;
            return (
              <div
                key={id}
                className="flex flex-col w-full h-full gap-8 p-5 bg-white rounded-xs shadow-lg md:py-8"
              >
                <div className="flex flex-row-reverse items-center justify-between gap-4 md:flex-col md:items-start">
                  <div className="flex items-center justify-center p-2 text-3xl text-yellow-600 border rounded-full shadow-inner w-14 h-14">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold md:pl-1 font-poppins">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-col-reverse items-start justify-between w-full gap-2 md:flex-row md:items-center">
                  <p className="max-w-sm text-gray-500 font-montserrat">
                    {content}
                  </p>
                  <p className="text-lg font-bold text-yellow-600 font-poppins">
                    0{id}.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Flow;
