import zoo from '../assets/imgs/zoo.jpg';
import hike from '../assets/imgs/hike.jpg';
import popcorn from '../assets/imgs/popcorn.jpg';
import parade from '../assets/imgs/parade.jpg';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about mx-mobile flex items-center justify-center mt-4">
      <div className="about-container flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="about-content pr-8 text-center max-w-screen-xl mx-auto md:mt-4 sm:mt-8 lg:mt-0">
          <h1 className="text-[#003f87] text-5xl font-semibold mb-4 sm:mt-8 md:mt-4">About Us</h1>
          <div className="line mb-7 w-16 border-t-4 border-[#ffb225] mx-auto"></div>
          <p className="mx-auto max-w-[800px] text-gray m-5 mb-7">
          Welcome to Cub Scout Pack 365! We are a passionate and dedicated community, striving to offer scouts unforgettable experiences that foster growth, learning, and, above all, fun. Our mission is to inspire young minds, instilling values of teamwork, leadership, and exploration. Join us on this exciting journey as we embark on adventures that will leave a lasting impact and create memories to treasure for a lifetime.
          </p>
          <ScrollLink to="contact" smooth="true" duration={500} className=" hover:text-[#ffb225] duration-500 cursor-pointer py-2 px-6 mt-2 text-[#003f87]  bg-[#ffb225] hover:bg-[#003f87] border border-[#ffb225] hover:border-[#ffb225] rounded-full font-semibold text-lg transition ease-in-out">
              Learn More
            </ScrollLink>
        </div>
        <div className="image-grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid gap-5 lg:mr-40 mt-8">
          <img src={zoo} alt="Zoo" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
          <img src={hike} alt="hike" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
          <img src={popcorn} alt="Popcorn" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
          <img src={parade} alt="Parade" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
