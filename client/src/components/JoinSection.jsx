import { useEffect, useState } from 'react';

const JoinSection = () => {
  // Scroll animation trigger state
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('joinSection');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="joinSection"
      className={` py-16 px-4 text-center bg-[#012A53FF] bg-opacity-80`}
    >
        <div className={`join-section py-16 px-4 text-center  bg-opacity-80 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
      <h2 className="text-4xl text-white font-semibold">Join Firnas as a Volunteer</h2>
      <p className="text-lg text-white mt-4">
        Join Firnas and be a beacon of hope for those in need.
      </p>
      <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
        As a volunteer, you'll have the opportunity to make a real difference in the lives of the less fortunate,
        bringing light to their darkest days. Together, let's pave the way for a brighter future, where every step
        we take uplifts those who need it most.
      </p>
      </div>
    </section>
  );
};

export default JoinSection;
