"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useInView } from "framer-motion";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="p-6 lg:p-14 bg-white">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto"
      >
        {/* Founder Image */}
        <motion.div variants={fadeInUp} className="w-full lg:w-1/3">
          <Image
            src="/assets/founder/founder.jpg"
            width={450}
            height={450}
            alt="Mr. Mahesh - Founder of MR Geniune Properties"
            className="rounded-xs shadow-lg object-cover w-full h-auto"
            priority
          />
        </motion.div>

        {/* Founder Info */}
        <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
          <p className="text-sm uppercase text-gray-500 mb-2 tracking-wider">
            Meet Our Founder
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Mr. Mahesh
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-sm mb-6">
            Mr. Ragav is a seasoned real estate visionary with over 15 years of
            industry experience. He has successfully led diverse residential and
            commercial projects, combining market insight with a strong
            client-first approach. There leadership is defined by a passion for
            excellence, innovation, and long-term value creation.
          </p>

          <p className="text-gray-900 font-medium text-base md:text-lg mb-6">
            At{" "}
            <span className="text-yellow-600 font-bold">
              MR Geniune Properties
            </span>
            , we believe every property holds untapped potential. Our mission is
            to transform that potential into enduring value through expert
            design, strategic planning, and personalized service. From concept
            to completion, we deliver seamless experiences and exceptional
            results.
          </p>

          <motion.button
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn p-2 bg-gray-700 text-white flex items-center gap-2 shadow-[5px_5px_0px_0px_#6c6c6c] transition-all duration-300 hover:bg-yellow-500 hover:shadow-[5px_5px_0px_0px_#4c4c4c]"
          >
            Contact Us <TbArrowUpRight className="text-lg" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Founder;
