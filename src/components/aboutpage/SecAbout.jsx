"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";

const SecAbout = () => {
  return (
    <section className="relative py-12 mt-12 text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <Image
              src="/assets/home/about/aboutimg.jpg"
              alt="About Us"
              width={400}
              height={240}
              className="rounded-md shadow-lg"
              priority
            />
          </motion.div>

          {/* Text Section */}
          <div className="space-y-6 text-start md:text-left">
            {/* Animated Section Title */}
            <div className="flex items-center justify-start md:justify-start">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 1 }}
                className="border-t-4 border-yellow-500 mr-3"
              ></motion.span>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg font-semibold text-gray-700 uppercase tracking-widest"
              >
                About Us
              </motion.p>
            </div>

            <motion.h2
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold text-gray-900"
            >
              Built on{" "}
              <span className="text-yellow-500">Trust & Transparency</span>
            </motion.h2>

            <motion.p
              initial="initial"
              whileInView="animate"
              className="text-gray-600 text-md leading-relaxed"
            >
              At the heart of our mission is a simple promise — to make property
              buying and selling effortless, transparent, and rewarding. We
              specialize in connecting people with the right properties in and
              around
              <strong className="text-gray-800">
                {" "}
                Doddaballapura, Rajanukunte, and Devanahalli
              </strong>
              . Whether you&apos;re investing in your dream home or letting go
              of a property, we&apos;re here to guide every step.
            </motion.p>

            <motion.ul
              initial="initial"
              whileInView="animate"
              className="text-gray-700 list-disc pl-5 space-y-1"
            >
              <li>Tailored property recommendations based on your budget</li>
              <li>Expert consulting for buying, selling & legal formalities</li>
              <li>Supportive guidance from first visit to final handshake</li>
            </motion.ul>

            <motion.div
              initial="initial"
              whileInView="animate"
              className="flex justify-start md:justify-start"
            >
              <motion.button
                initial="initial"
                whileInView="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="primary-btn p-3 bg-gray-700 text-white flex items-center gap-2 shadow-[5px_5px_0px_0px_#6c6c6c] transition-all duration-300 hover:bg-yellow-500 hover:shadow-[5px_5px_0px_0px_#4c4c4c]"
              >
                Contact Us <TbArrowUpRight className="text-lg" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecAbout;
