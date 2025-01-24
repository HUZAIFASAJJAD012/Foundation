import React from "react";

const AboutUs = () => {
  return (
    <main className="about-container px-6 py-8">
      {/* About Us Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800">About Us</h1>

      {/* Mission & Vision Section */}
      <div className="section-title text-2xl font-bold mt-8 mb-4 text-[#04113a] uppercase">
        Mission & Vision
      </div>
      <div className="section-content mb-8 text-gray-600">
        <h3 className="text-xl font-bold text-[#1e5b16] uppercase mt-4">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our platform is dedicated to empowering individuals and organizations
          to make a positive impact through easy and transparent donation and
          campaign management. We aim to connect donors and causes to create a
          better, more compassionate world.
        </p>

        <h3 className="text-xl font-bold text-[#1e5b16] uppercase mt-4">Our Vision</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a future where every person can contribute to social good
          through a simple, reliable platform that maximizes the impact of each
          donation and supports causes around the globe.
        </p>
      </div>

      {/* Team Section */}
      <div className="section-title text-2xl font-bold mb-4 text-[#04113a] uppercase">
        Meet the Team
      </div>
      <div className="team-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Team Member */}
        {[
          {
            name: "ANEES UR REHMAN",
            role: "Director",
            imgSrc: "/images/ANEES-UR-REHMAN.png",
            description:
              "ANEES UR REHMAN is responsible for spreading the word about the platform, building relationships with partners, and engaging users.",
          },
          {
            name: "VISAL KHAN",
            role: "CEO",
            imgSrc: "/images/visal-bhai-hd-1.png",
            description:
              "Brings a wealth of technical knowledge and innovation, ensuring the platform remains secure, scalable, and efficient.",
          },
          {
            name: "TALHA ISRAR",
            role: "CEO & Founder",
            imgSrc: "/images/WhatsApp-Image-2024-12-27.jpg",
            description:
              "TALHA ISRAR is passionate about using technology to drive social change and has over 15 years of experience in nonprofit management.",
          },
          {
            name: "RABAIL",
            role: "Web Developer",
            imgSrc: "/images/rabail.jpg",
            description:
              "RABAIL is passionate about using technology to drive social change and has over 15 years of experience in nonprofit management.",
          },
          {
            name: "RUBA FARAZ",
            role: "Marketing Officer",
            imgSrc: "/images/ruba-faraz.jpg",
            description:
              "RUBA FARAZ is passionate about using technology to drive social change and has over 15 years of experience in nonprofit management.",
          },
          {
            name: "ABBAS KHIZER",
            role: "Sales Executive",
            imgSrc: "/images/lala.jpg",
            description:
              "ABBAS KHIZER is passionate about using technology to drive social change and has over 15 years of experience in nonprofit management.",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="team-member bg-white border border-gray-300 rounded-lg p-6 shadow-md text-center relative overflow-hidden transition duration-300 hover:bg-[#04113a] hover:shadow-lg hover:border-[#1e5b16]"
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-bold text-[#04113a] hover:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 hover:text-gray-200">
              {member.role}
            </p>
            <p className="text-sm text-gray-600 hover:text-gray-200 mt-2">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="statistics-section flex flex-wrap justify-around gap-6 mt-8">
        {[
          { title: "Total Donations", value: "$1,250,000+" },
          { title: "Active Campaigns", value: "350+" },
          { title: "Registered Users", value: "50,000+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="statistics-box bg-[#20641d] text-white p-6 rounded-lg text-center w-48"
          >
            <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
            <p className="text-lg">{stat.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutUs;
