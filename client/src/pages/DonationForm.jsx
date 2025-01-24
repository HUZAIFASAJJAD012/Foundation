import React from "react";

const DonationForm = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="src/assets/images/01.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="Background"
      />

      {/* Main Content */}
      <div className="py-10 px-5 mx-auto max-w-4xl rounded-xl opacity-85">
        <div id="donate" className="bg-[#001f3f] bg-opacity-70 p-6 rounded-xl">
          <h1 className="text-center text-white text-3xl mb-6">Donation Page</h1>
          <form className="flex flex-col gap-4">
            <label htmlFor="cause" className="font-bold text-white">
              Select Cause:
            </label>
            <select
              id="cause"
              name="cause"
              className="p-3 rounded-md bg-white text-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="orphanage">Orphanage</option>
              <option value="social_welfare">Social Welfare</option>
            </select>

            <label htmlFor="amount" className="font-bold text-white">
              Donation Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter amount"
              className="p-3 rounded-md bg-white text-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="name" className="font-bold text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white text-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="email" className="font-bold text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white text-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="phone" className="font-bold text-white">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="p-3 rounded-md bg-white text-lg border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="message" className="font-bold text-white">
              Message (Optional):
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              className="p-3 rounded-md text-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="py-3 bg-[#025DB3FF] text-white rounded-md hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Donate
            </button>
          </form>
        </div>

        <div
          id="donation-history"
          className="mt-12 bg-black bg-opacity-70 p-6 rounded-xl"
        >
          <h1 className="text-center text-white text-3xl mb-6">Donation History</h1>
          <table className="w-full border-collapse text-white">
            <thead>
              <tr>
                <th className="border border-white p-4 text-left bg-[#001f3f]">
                  Cause Name
                </th>
                <th className="border border-white p-4 text-left bg-[#001f3f]">
                  Donation Amount
                </th>
                <th className="border border-white p-4 text-left bg-[#001f3f]">
                  Date of Donation
                </th>
                <th className="border border-white p-4 text-left bg-[#001f3f]">
                  Transaction Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-opacity-20">
                <td className="border border-white p-4">Education for All</td>
                <td className="border border-white p-4">$50</td>
                <td className="border border-white p-4">2024-12-01</td>
                <td className="border border-white p-4">Successful</td>
              </tr>
              <tr className="bg-opacity-20">
                <td className="border border-white p-4">Healthcare Support</td>
                <td className="border border-white p-4">$100</td>
                <td className="border border-white p-4">2024-11-15</td>
                <td className="border border-white p-4">Pending</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
