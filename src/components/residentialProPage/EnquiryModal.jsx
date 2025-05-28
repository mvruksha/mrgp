"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Add this if you're using Heroicons

const EnquiryModal = ({ isOpen, onClose, property }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-md rounded bg-white p-6 shadow-lg">
          {/* Close Button */}
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

          <form className="space-y-3">
            <input
              className="w-full border p-2 rounded"
              placeholder="First Name*"
              required
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="Last Name*"
              required
            />
            <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Email*"
              required
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="City*"
              required
            />
            <input
              type="tel"
              className="w-full border p-2 rounded"
              placeholder="Mobile Number*"
            />

            {property && (
              <div className="text-sm text-gray-700 font-medium bg-gray-100 p-2 rounded">
                {property.title}, {property.location}
              </div>
            )}

            <label className="inline-flex items-center mt-2">
              <input type="checkbox" className="mr-2" required />
              Yes, I would like to receive updates & promotions from MR Geniune
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
