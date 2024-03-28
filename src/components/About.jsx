import zoo from '../assets/imgs/zoo.jpg';
import hike from '../assets/imgs/hike.jpg';
import popcorn from '../assets/imgs/popcorn.jpg';
import parade from '../assets/imgs/parade.jpg';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about flex flex-col items-center justify-center mt-8 mx-auto max-w-screen-xl lg:flex-row lg:justify-between lg:items-center">
      <div className="about-content text-center lg:pr-8">
        <h1 className="text-[#003f87] text-5xl font-semibold mb-4 sm:mt-8 md:mt-4">About Us</h1>
        <div className="line mb-7 w-16 border-t-4 border-[#ffb225] mx-auto"></div>
        <p className="lg:mx-auto max-w-[800px] text-center text-gray m-5 mb-7">
          Welcome to Cub Scout Pack 365! We are a passionate and dedicated community, striving to offer scouts unforgettable experiences that foster growth, learning, and, above all, fun. Our mission is to inspire young minds, instilling values of teamwork, leadership, and exploration. Join us on this exciting journey as we embark on adventures that will leave a lasting impact and create memories to treasure for a lifetime.
        </p>
        <ScrollLink to="contact" smooth="true" duration={500} className="hover:text-[#ffb225] duration-500 cursor-pointer py-2 px-6 mt-2 text-[#003f87]  bg-[#ffb225] hover:bg-[#003f87] border border-[#ffb225] hover:border-[#ffb225] rounded-full font-semibold text-lg transition ease-in-out">
          Learn More
        </ScrollLink>
      </div>
      <div className="image-grid mt-8 lg:mr-10 lg:ml-10 lg:mt-0 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-full max-w-md rounded-lg shadow-lg p-4">
          <img src={zoo} alt="Zoo" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full max-w-md rounded-lg shadow-lg p-4">
          <img src={hike} alt="hike" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full max-w-md rounded-lg shadow-lg p-4">
          <img src={popcorn} alt="Popcorn" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full max-w-md rounded-lg shadow-lg p-4">
          <img src={parade} alt="Parade" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
