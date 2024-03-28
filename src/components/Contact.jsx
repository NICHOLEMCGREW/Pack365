import { forwardRef, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation.json';
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
} from 'react-icons/fa';

const Contact = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <section
      id="contact"
      className="contact flex flex-col md:flex-row items-center justify-center mt-8 mb-4"
    >
      <div className="contact-container flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto space-y-6 md:space-y-0 md:space-x-15">
        {/* Join Us Section */}
        <div className="max-w-[340px] w-full mx-auto md:w-1/2 p-6 bg-white border rounded-lg shadow-md">
          <h1 className="text-[#003f87] text-4xl font-semibold mb-4">
            Join Us
          </h1>
          <div className="line mb-7 w-16 border-t-4 border-[#ffb225]"></div>
          <p className="text-gray-700 mb-4">
            <FaClock className="inline-block mr-2 text-[#003f87]" />
            <span className="font-semibold">Meeting Time:</span> Tuesdays at
            7:00 PM
          </p>
          <p className="text-gray-700 mb-4">
            <FaMapMarkerAlt className="inline-block mr-2 text-[#003f87]" />
            <span className="font-semibold">Location:</span> Grace Episcopal
            Church, 600 N Mustang Rd, Yukon, OK, 73099{' '}
            <a
              href="https://maps.google.com/?q=Grace+Episcopal+Church,600+N+Mustang+Rd,Yukon,OK,73099"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003f87] hover:underline"
            >
              (Google Maps)
            </a>
          </p>
          <p className="text-gray-700 mb-1">
            Experience the fun and adventure of Cub Scouting. Contact us for
            more details!
          </p>
        </div>

        {/* Animation Section */}
        <div className="max-w-[350px] w-full mx-auto md:w-1/2 p-6 bg-white border rounded-lg shadow-md">
          <AnimationLottie ref={animationRef} />
        </div>

        {/* Contact Information Section */}
        <div className="max-w-[350px] w-full mx-auto md:w-1/2 p-6 bg-white border rounded-lg shadow-md">
          <h1 className="text-[#003f87] text-4xl font-semibold mb-4">
            Contact Us
          </h1>
          <div className="line mb-7 w-16 border-t-4 border-[#ffb225]"></div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-[#003f87]" />
              <a
                href="mailto:pack365yukon@gmail.com"
                className="text-[#003f87] hover:underline"
              >
                pack365yukon@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-[#003f87]" />
              <a
                href="tel:+14054762916"
                className="text-[#003f87] hover:underline"
              >
                405-476-2916
              </a>
            </div>
            <div className="flex items-center">
              <FaFacebook className="mr-3 text-[#003f87]" />
              <a
                href="https://www.facebook.com/cubscoutpack365yukon?mibextid=dGKdO6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003f87] hover:underline"
              >
                Cub Scout Pack 365 Yukon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimationLottie = forwardRef((props, ref) => (
  <Lottie animationData={Animation} loop autoplay ref={ref} />
));

export default Contact;
