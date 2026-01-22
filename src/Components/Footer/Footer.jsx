import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">MarketPlace</h1>
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Chayon Sarker. All rights reserved.
          </p>
        </div>


        <div className="flex gap-6 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
            Jobs
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
            About
          </a>
          <a href="#" className="hover:text-yellow-500 transition-colors duration-300">
            Contact
          </a>
        </div>


        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-yellow-500 transition-transform transform hover:scale-125">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-500 transition-transform transform hover:scale-125">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-500 transition-transform transform hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-500 transition-transform transform hover:scale-125">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
