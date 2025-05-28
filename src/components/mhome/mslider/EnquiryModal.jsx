"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";

const EnquiryModal = ({ isOpen, onClose, property }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      ...formData,
      property_title: property?.title || "N/A",
      property_location: property?.location || "N/A",
    };

    // 1. Send main enquiry email to your business
    emailjs
      .send(
        "service_aq4unon", // Your EmailJS service ID
        "template_jire46f", // Your EmailJS main template ID (for you)
        emailParams,
        "OiXoyTDmt4KNq4cee" // Your EmailJS public key
      )
      .then(() => {
        // 2. After main email sent, send auto-reply to user
        return emailjs.send(
          "service_aq4unon",
          "template_bg7zpms", // Your EmailJS auto-reply template ID (to user)
          emailParams,
          "OiXoyTDmt4KNq4cee"
        );
      })
      .then(() => {
        alert("Enquiry sent successfully! Confirmation email sent to you.");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          city: "",
          mobile: "",
        });
        onClose();
      })
      .catch((error) => {
        alert("Failed to send enquiry. Please try again.");
        console.error(error.text);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-md rounded bg-white p-6 shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <Dialog.Title className="text-lg font-semibold text-gray-800 mb-2">
            Enquire Now
          </Dialog.Title>
          <p className="text-sm text-gray-600 mb-4">
            Fill in the following details and we will get back to you shortly.
          </p>

          <form className="space-y-3" onSubmit={sendEmail}>
            <input
              name="first_name"
              className="w-full border p-2 rounded"
              placeholder="First Name*"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              name="last_name"
              className="w-full border p-2 rounded"
              placeholder="Last Name*"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="city"
              className="w-full border p-2 rounded"
              placeholder="City*"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              type="tel"
              className="w-full border p-2 rounded"
              placeholder="Mobile Number*"
              value={formData.mobile}
              onChange={handleChange}
            />

            <div className="text-sm text-gray-700 font-medium bg-gray-100 p-2 rounded">
              {property?.title}, {property?.location}
            </div>

            <label className="inline-flex items-center mt-2">
              <input type="checkbox" className="mr-2" required />
              Yes, I would like to receive updates & promotions from MR Genuine
              Properties.
            </label>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EnquiryModal;
