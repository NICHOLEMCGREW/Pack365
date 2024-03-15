import React from 'react';

const Form = () => {
  return (
    <div className="max-w-md w-full mx-auto p-4 bg-white border rounded-lg shadow-md mb-10">
      <h1 className="text-[#003f87] text-4xl font-semibold mb-2">Message Us</h1>
      <div className="line mb-7 w-16 border-t-4 border-[#ffb225]"></div>
      <form action="">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none focus:border-[#ffb225]"
            required
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="childName">
            Child's Name
          </label>
          <input
            id="childName"
            name="childName"
            placeholder="Your Child's Name"
            className="w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none focus:border-[#ffb225]"
            required
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="email@email.com"
            className="w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none focus:border-[#ffb225]"
            required
            type="email"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Type your message here..."
            className="w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none focus:border-[#ffb225]"
            required
            type="text"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 border mt-2 bg-[#003f87] text-[#ffb225] hover:bg-[#ffb225] hover:text-blue-800 rounded-full font-semibold text-sm transition duration-300 ease-in-out cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
