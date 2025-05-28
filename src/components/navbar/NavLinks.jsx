"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "./Constrants/index";

const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {navData.map(({ _id, title, href, subMenu }) => (
        <div
          key={_id}
          className="relative group inline-block"
          onMouseEnter={() => setHoveredIndex(_id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={href}
            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-base text-black transition-colors hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === _id && (
                <motion.span
                  className="absolute inset-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                  style={{
                    borderBottom: "2px solid orange",
                  }}
                />
              )}
            </AnimatePresence>
            <span
              className={`relative z-10 uppercase font-semibold ${
                isScrolled ? "text-black" : "text-black"
              }`}
            >
              {title}
            </span>
          </Link>

          {subMenu && (
            <AnimatePresence>
              {hoveredIndex === _id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50"
                >
                  <ul className="py-2">
                    {subMenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
