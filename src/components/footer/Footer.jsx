import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const company = "MR Geniune Properties";
  const phone = "9986677996";
  const email = "info@mrgroup.com";
  const address =
    "#0669, RMS Complex, TB Circle, Doddaballapura, Bengaluru Rural District. Landmark: Before Nandi Mori.";

  return (
    <footer className="bg-gray-100 text-gray-800 w-full px-6 xl:px-8 py-12 md:py-16 shadow-inner">
      {/* Content Wrapper with Max Width */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <Image
              src="/assets/logo/mlogo.svg"
              alt={`${company} Logo`}
              width={240}
              height={100}
              priority
            />
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for buying, selling, and investing in prime
            properties around Doddaballapura and Devanahalli.
          </p>
          <p className="text-sm mt-2 leading-relaxed">
            Expert advice. Seamless deals. Maximum returns.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="flex items-start gap-2 text-sm">
            <FaPhone className="mt-1" />
            <Link href={`tel:${phone}`} className="hover:underline break-words">
              {phone}
            </Link>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <FaEnvelope className="mt-1" />
            <Link
              href={`mailto:${email}`}
              className="hover:underline break-words"
            >
              {email}
            </Link>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1" />
            <span className="text-left break-words"></span>
            <Link
              href="https://maps.app.goo.gl/Q4CGqpNq6KtwrC1F9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              {address}
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl">
            <Link
              href="https://wa.me/9986677996"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="hover:text-green-600 transition"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="#"
              title="Instagram"
              className="hover:text-pink-600 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              title="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              title="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Follow us for updates and property insights!
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-sm w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <Link href="https://www.mvruksha.com">
          <p className="text-center sm:text-left">
            Made with ❤️ by mVruksha Softwares
          </p>
        </Link>
        <p className="text-center sm:text-right">
          &copy; {new Date().getFullYear()} {company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
