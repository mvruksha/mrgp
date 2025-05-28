"use client";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import CountUp from "react-countup";

const Scrollbg = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/founder/team.jpg')" }}
    >
      <div className="w-full bg-black/60 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 text-white">
          {/* Left: Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl text-center shadow-md">
              <p className="text-[36px] font-bold">
                <CountUp start={0} end={500} duration={2.75} />+
              </p>
              <p className="text-lg font-medium">Properties</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-center shadow-md">
              <p className="text-[36px] font-bold">
                <CountUp start={0} end={10} duration={2.75} />
                k+
              </p>
              <p className="text-lg font-medium">Cups of Coffee</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-center shadow-md">
              <p className="text-[36px] font-bold">
                <CountUp start={0} end={100} duration={2.75} />%
              </p>
              <p className="text-lg font-medium">Satisfaction</p>
            </div>
          </div>

          {/* Right: Subscribe */}
          <div>
            <h2 className="text-2xl font-semibold">Stay Updated With Us</h2>
            <p className="mt-4 text-gray-200">
              Join our mailing list to receive the latest updates and insights
              from our team.
            </p>
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-4 pr-14 rounded-full text-black"
              />
              <button className="absolute top-1/2 right-3 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full text-white">
                <AiOutlineSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrollbg;
