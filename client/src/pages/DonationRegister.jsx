import React from "react";

const DonationRegister = () => {
  return (
    <div className="max-w-md mx-auto mt-32 mb-8 p-8 bg-white bg-opacity-90 rounded-lg shadow-md opacity-84">
        <img
        src="src/assets/images/pexels-vicky.jpg"
        className="absolute top-0 mt-15 left-0 w-full blur- h-full object-cover -z-10"
        alt="Background"
      />
      <div className="">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#001f3f]">Register for Donation</h1>
      </div>
      <form
        className="space-y-4 "
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
