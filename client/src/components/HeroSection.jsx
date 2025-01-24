import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-center py-20 h-screen overflow-hidden" id="home">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="src/assets/videos/video01.mp4" type="video/mp4" />
    {/* Adjust video path if necessary */}
  </video>

  {/* Content */}
  <div className="relative z-1 flex flex-col justify-center items-center h-full">
    <h1 className="text-6xl text-white font-bold drop-shadow-[3px_3px_6px_rgba(72,110,46,0.8)] select-none">
      Welcome to Firnas Welfare Foundation
    </h1>

    <p className="text-lg mt-4 text-white select-none drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] max-w-xl mx-auto">
      Your support can transform lives.
    </p>

    <a
      href="signup.html"
      className="mt-6 inline-block px-8 py-3 text-lg bg-[#04113a] text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-[#20641d] hover:-translate-y-1"
    >
      Get Started
    </a>
  </div>
</section>

  );
};

export default HeroSection;
