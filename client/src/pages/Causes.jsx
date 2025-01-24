import React from "react";

const Causes = () => {
  const causes = [
    {
      title: "Education for Orphans",
      description: "Provide educational resources for underprivileged children.",
      progress: 70,
    },
    {
      title: "Food Supplies",
      description: "Ensure nutritious meals for orphaned children.",
      progress: 40,
    },
    {
      title: "Healthcare Services",
      description: "Provide medical checkups and healthcare support.",
      progress: 60,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-32 mb-8 p-8 bg-white bg-opacity-90 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-[#001f3f] mb-8">
        Support a Cause
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {causes.map((cause, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 border-2 border-[#001f3f]"
          >
            <h2 className="text-2xl font-semibold text-[#001f3f] mb-2">
              {cause.title}
            </h2>
            <p className="text-gray-600 mb-4">{cause.description}</p>
            <div className="bg-gray-300 rounded-full h-2 mb-4 relative">
              <div
                className="bg-[#001f3f] h-2 rounded-full"
                style={{ width: `${cause.progress}%` }}
              ></div>
            </div>
            <button className="px-6 py-2 bg-[#001f3f] text-white rounded-md hover:bg-green-600 transition duration-300">
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Causes;
