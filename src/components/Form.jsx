import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log('Form data:', formData);
      // Clear form fields
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 bg-white border rounded-lg shadow-md mb-10">
      <h1 className="text-[#003f87] text-4xl font-semibold mb-2">Message Us</h1>
      <div className="line mb-7 w-16 border-t-4 border-[#ffb225]"></div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none ${
              errors.name ? 'border-red-500' : 'focus:border-[#ffb225]'
            }`}
            required
            type="text"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@email.com"
            className={`w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none ${
              errors.email ? 'border-red-500' : 'focus:border-[#ffb225]'
            }`}
            required
            type="email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Type your message here..."
            className={`w-full px-2 py-1 border rounded-lg bg-gray-100 focus:outline-none ${
              errors.message ? 'border-red-500' : 'focus:border-[#ffb225]'
            }`}
            required
            type="text"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
};

export default Form;
