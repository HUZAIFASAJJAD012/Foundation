import React from "react";

const DonationRegister = () => {
  return (
    <div className="relative min-h-screen p-20 ">
      {/* Background Image */}
      <img
        src="src/assets/images/02.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="Background"
      />

      {/* Form Section */}
      <div className="py-10 px-5 mx-auto max-w-4xl rounded-xl bg-white opacity-85 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#001f3f]">Register for Donation</h1>
        </div>
        <form
          className="space-y-4"
          action="/register"
          method="post"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-2 border-2 border-[#001f3f] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border-2 border-[#001f3f] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-2 border-2 border-[#001f3f] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full p-2 border-2 border-[#001f3f] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <input
            type="number"
            name="donation_amount"
            placeholder="Donation Amount"
            required
            className="w-full p-2 border-2 border-[#001f3f] rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#001f3f] text-white rounded-md text-lg font-medium hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationRegister;
