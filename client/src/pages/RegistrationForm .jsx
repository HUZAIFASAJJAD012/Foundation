import React from "react";

const RegistrationForm = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/assets/images/02.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50  -z-10"></div> {/* Optional overlay for readability */}
     <div className="w-full h-full pt-20 pb-10">
      <div className="max-w-xl mx-auto   p-10  bg-white rounded-lg shadow-md relative">
        <h2 className="text-2xl font-bold text-center text-[#04113a] mb-6">
          Join Our Platform
        </h2>

        <form action="#" method="post" className="">
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="full-name"
              className="text-lg text-gray-700 block mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-[#04113a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5b16] text-gray-700"
            />
          </div>

          {/* Father's Name */}
          <div className="mb-6">
            <label
              htmlFor="fathers-name"
              className="text-lg text-gray-700 block mb-2"
            >
              Father's Name (optional):
            </label>
            <input
              type="text"
              id="fathers-name"
              name="fathers-name"
              placeholder="Enter father's name (if necessary)"
              className="w-full p-3 border border-[#04113a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5b16] text-gray-700"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label
              htmlFor="phone-number"
              className="text-lg text-gray-700 block mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              placeholder="Enter your phone number"
              required
              className="w-full p-3 border border-[#04113a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5b16] text-gray-700"
            />
          </div>

          {/* Experience */}
          <div className="mb-6">
            <label
              htmlFor="experience"
              className="text-lg text-gray-700 block mb-2"
            >
              Experience (optional):
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              placeholder="Share your experience if relevant"
              className="w-full p-3 border border-[#04113a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5b16] text-gray-700"
            />
          </div>

          {/* Purpose of Registration */}
          <div className="mb-6">
            <label
              htmlFor="purpose"
              className="text-lg text-gray-700 block mb-2"
            >
              Purpose of Registration:
            </label>
            <textarea
              id="purpose"
              name="purpose"
              placeholder="Write your purpose for registering..."
              required
              className="w-full p-3 border border-[#04113a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e5b16] text-gray-700 resize-none h-28"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#04113a] text-white rounded-md text-lg font-medium hover:bg-[#1e5b16] transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-sm text-center text-gray-600 mt-6">
          <p>
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
