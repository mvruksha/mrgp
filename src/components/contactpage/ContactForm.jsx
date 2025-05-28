"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const emailParams = {
      first_name: form.name.value,
      email: form.email.value,
      city: form.message.value,
    };

    try {
      // Send email to business
      await emailjs.send(
        "service_aq4unon",
        "template_jire46f",
        emailParams,
        "OiXoyTDmt4KNq4cee"
      );

      // Send auto-reply to user
      await emailjs.send(
        "service_aq4unon",
        "template_bg7zpms",
        emailParams,
        "OiXoyTDmt4KNq4cee"
      );

      setStatusMessage(
        "✅ Enquiry sent successfully! Confirmation email sent to you."
      );
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error.text || error);
      setStatusMessage("❌ Failed to send enquiry. Please try again.");
    }
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 dark:bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase dark:text-black">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your trusted partner for buying, selling, and investing in prime
            properties around Doddaballapura and Devanahalli.
          </p>
          <p className="text-gray-700 font-medium dark:text-gray-400">
            Expert advice. Seamless deals. Maximum returns.
          </p>

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-3">
              <FiPhone className="text-xl text-primary" />
              <div>
                <h4 className="text-md font-semibold text-gray-900 dark:text-black">
                  Contact
                </h4>
                <Link
                  href="tel:9986677996"
                  className="text-gray-600 hover:underline dark:text-gray-400"
                >
                  9986677996
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-xl text-primary" />
              <div>
                <h4 className="text-md font-semibold text-gray-900 dark:text-black">
                  Email
                </h4>
                <Link
                  href="mailto:info@mrgroup.com"
                  className="text-gray-600 hover:underline dark:text-gray-400"
                >
                  info@mrgroup.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-xl text-primary" />
              <div>
                <h4 className="text-md font-semibold text-gray-900 dark:text-black">
                  Address
                </h4>
                <Link
                  href="https://maps.app.goo.gl/Q4CGqpNq6KtwrC1F9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline dark:text-gray-400"
                >
                  #0669, RMS Complex, TB Circle, Doddaballapura, Bengaluru Rural
                  District. Landmark: Before Nandi Mori.
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-0 pb-2 border-0 border-b border-gray-300 dark:border-gray-600 text-sm text-gray-800 bg-transparent focus:ring-0 focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-0 pb-2 border-0 border-b border-gray-300 dark:border-gray-600 text-sm text-gray-800 bg-transparent focus:ring-0 focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-0 pb-2 border-0 border-b border-gray-300 dark:border-gray-600 text-sm text-gray-800 bg-transparent focus:ring-0 focus:border-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-gray-900 rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Send Your Message
                </button>
              </div>
            </div>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-4 text-center text-sm font-semibold text-gray-800 dark:text-gray-900">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
