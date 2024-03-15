import React from 'react';
import { Link } from 'react-scroll';
import home from '../assets/imgs/home.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-[#003f87] bg-gray-50">
      <div className="mt-10 flex flex-col md:flex-row items-center justify-around w-full max-w-screen-lg md:gap-8">
        <div className="text-center mb-8 md:mb-0 md:max-w-md">
          <h1 className="text-[#003f87] text-5xl font-semibold mb-10 sm:mt-8 md:mt-4 hover:text-[#ffb225]">Welcome to Cub Scouts Pack 365</h1>
          <p className="text-base md:text-lg mb-8 md:mb-8 text-gray">Explore the world of adventure and learning with us!</p>
          <ScrollLink to="contact" smooth="true" duration={500} className=" hover:text-[#ffb225] duration-500 cursor-pointer py-2 px-6 mt-2 text-[#003f87]  bg-[#ffb225] hover:bg-[#003f87] border border-[#ffb225] hover:border-[#ffb225] rounded-full font-semibold text-lg transition ease-in-out">
              Join Pack 365
            </ScrollLink>
        </div>
        <div className="md:ml-8">
          <img
            src={home}
            alt="Cub Scouts Pack 365"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
