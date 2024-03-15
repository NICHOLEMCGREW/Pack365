import React from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import bsaImage from '../assets/imgs/bsa.png';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="min-h-100px py-10 flex flex-col items-center justify-center border-t-2 border-[#ffb225] bg-[#003f87] text-center md:text-left">
      <ul className="flex items-center mb-4 mt-2 space-x-4">
        {/* Social Icons */}
        <li>
          <a href="https://www.facebook.com/cubscoutpack365yukon?mibextid=dGKdO6" target="_blank" rel="noopener noreferrer" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.scouting.org/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <img src={bsaImage} alt="BSA" className="w-8 h-8 object-contain" />
          </a>
        </li>
        <li>
          <a href="mailto:pack365yukon@gmail.com" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaEnvelope />
          </a>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-4">
        <li className="text-xl my-2 md:my-0">
          <ScrollLink to="home" smooth="true" duration={500} className="text-white hover:text-[#ffb225] duration-500 cursor-pointer">Home</ScrollLink>
        </li>
        <li className="text-xl my-2 md:my-0">
          <ScrollLink to="about" smooth="true" duration={500} className="text-white hover:text-[#ffb225] duration-500 cursor-pointer">About</ScrollLink>
        </li>
        <li className="text-xl my-2 md:my-0">
          <ScrollLink to="events" smooth="true" duration={500} className="text-white hover:text-[#ffb225] duration-500 cursor-pointer">Events</ScrollLink>
        </li>
        <li className="text-xl my-2 md:my-0">
          <ScrollLink to="contact" smooth="true" duration={500} className="text-white hover:text-[#ffb225] duration-500 cursor-pointer">Contact</ScrollLink>
        </li>
      </ul>

      <hr className="md:block border border-gray-400 my-4 mt-10 w-full" />

      {/* Copyright Section */}
      <div className="copyright text-white mt-2">
        <p>&copy; 2024 Cub Scouts Pack 365. All rights reserved | Site designed and maintained by <a href="https://nicholemcgrew.netlify.app" target="_blank" className="text-blue-500">Nichole McGrew.</a></p>
      </div>
    </footer>
  );
};

export default Footer;
