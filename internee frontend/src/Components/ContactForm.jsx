import { useState } from "react";
import BaseInput from "./Inputs/BaseInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:px-32 ">
      {/* Left Side - Map */}
      <div className="w-full md:w-1/2 h-64 md:h-[440px]">
        <iframe
          className="w-full h-full rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9559283155042!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df64c4d89%3A0x1d3b6f3a80b7f28d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1624462875052!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <BaseInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
          
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <BaseInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
             
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        <div className="w-full flex justify-start">
        <button
            type="submit"
            className="w-1/3 bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </div>
          
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
