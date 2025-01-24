import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-[#001f3f] text-white p-2 md:p-4 flex justify-between items-center shadow-md sticky top-0 z-10">
      <img
        src="src\assets\images\Firnas-Logo.png"
        alt="Firnas Welfare Foundation Logo"
        className="max-w-[120px] h-auto"
      />
      <ul className="list-none flex m-0 p-0">
        <li className="mx-3">
          <Link
          to="/"            
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Home
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/login"
            
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Sign Up/Login
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/donationform"
            
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Donate
          </Link>
        </li>
        <li className="mx-3">
          <Link
          to="/donationregister"
            href="registration.html"
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Registration
          </Link>
        </li>
        <li className="mx-3">
          <Link
          to="/causes"
            href="causes.html"
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Causes
          </Link>
        </li>
        <li className="mx-3">
          <Link
          to="/registrationform"
            href="New Member.html"
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Add Members
          </Link>
        </li>
        <li className="mx-3">
          <Link
          to="/aboutus"
            href="about.html"
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            About Us
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/contactform"
            className="text-white no-underline text-lg transition-colors duration-300 hover:text-[#20641d]"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
