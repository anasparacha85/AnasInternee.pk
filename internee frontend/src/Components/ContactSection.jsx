import contactbg from '../../public/contactbg.jpg'
const ContactSection = () => {
    return (
      <div className="flex flex-col md:flex-row lg:h-[800px]  items-center justify-between px-6 md:px-16 py-10 gap-8" style={{backgroundImage: `url(${contactbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 text-center md:text-left h-[80%]">
          <h1 className="text-4xl font-bold text-gray-400">Get in Touch</h1>
          <p className="text-gray-300 mt-4 text-xl">
          Our doors are always open! Drop by and let’s discuss how we can help you achieve your goals. We’re excited to hear from you! Whether you have a question, need assistance, or want to collaborate, our team is here to help.
          </p>
  
          {/* Address & Contact Info */}
          <div className="mt-6 space-y-4 text-xl text-gray-200">
            <p className="flex items-center gap-3">
              📍 <span>Address: NIC Karachi, NED University Karachi, Pakistan</span>
            </p>
            <p className="flex items-center gap-3">
              📞 <span>+123 456 7890</span>
            </p>
            <p className="flex items-center gap-3">
              ✉ <span>contact@example.com</span>
            </p>
          </div>
  
          {/* Get in Touch Button */}
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
            Contact Us
          </button>
  
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <img width="40" height="40"  className="cursor-pointer"  src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
          <img width="40" height="40" className="cursor-pointer" src="https://img.icons8.com/color/48/twitterx--v1.png" alt="twitterx--v1"/>
            <img width="40" height="40" className="cursor-pointer" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>
            <img width="40" height="40" className="cursor-pointer" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new"/>
          </div>
        </div>
  
        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg h-[80%]">
        <h1 className='text-2xl font-bold'>Contact Form
       </h1>
        <p className='text-xl mt-5 mb-8'> Ask us everything and we would love to hear from you</p>
          <form className="space-y-4 h-full" >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactSection;
  