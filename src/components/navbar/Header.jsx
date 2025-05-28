"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Container from "./Container";
import { navData } from "./Constrants/index";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (_id) => {
    setOpenSubMenus((prev) => {
      const isOpen = prev[_id];
      // If already open, close all
      if (isOpen) {
        return {};
      }
      // Open only the clicked one
      return { [_id]: true };
    });
  };

  const closeAllSubMenus = () => {
    setOpenSubMenus({});
  };

  return (
    <header
      className={`w-full fixed top-0 inset-x-0 transition-all duration-300 ease-in-out z-40 
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <nav>
        <Container className="relative flex flex-col lg:flex-row lg:items-center py-2">
          {/* Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto lg:mr-8">
            <Logo />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden mt-2 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-2 pb-2 min-w-full">
              {navData.map(({ _id, title, href, subMenu }) => (
                <div key={_id} className="relative">
                  {subMenu ? (
                    <>
                      <button
                        onClick={() => toggleSubMenu(_id)}
                        className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition flex items-center gap-1"
                      >
                        {title}
                        {openSubMenus[_id] ? (
                          <MdKeyboardArrowUp className="transition-transform duration-200 rotate-180" />
                        ) : (
                          <MdKeyboardArrowDown className="transition-transform duration-200" />
                        )}
                      </button>
                      {openSubMenus[_id] && (
                        <div className="relative mt-2 bg-white shadow-lg rounded-md border border-gray-200 animate-fade-in-down z-30">
                          {subMenu.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100 transition whitespace-nowrap"
                              onClick={closeAllSubMenus} // 🔑 This closes the submenu
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={href}
                      className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition"
                      onClick={closeAllSubMenus} // Also close all submenus here
                    >
                      {title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop NavLinks (centered) */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10">
            <NavLinks />
          </div>

          {/* Desktop Download Button check */}
          <div className="hidden lg:flex items-center lg:ml-8 space-x-4">
            <Link
              href="tel:9986677996"
              className="flex items-center gap-2 bg-gradient-to-r uppercase from-gray-900 to-gray-700 text-white font-semibold rounded-xs px-6 py-2 shadow hover:scale-105 transition-all duration-200"
            >
              +91 9986677996
              <FiPhoneCall className="text-lg animate-pulse" />
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
