import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export const Footer = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <footer className="text-white py-10 px-5 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="w-full md:w-1/3"  data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm">
              Internee.pk kickstarts students' tech careers with first
              internships, providing industry exposure, practical skills, and
              networking opportunities, paving the way for their success in the
              tech industry.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3"  data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
            <h3 className="text-lg font-semibold mb-3">Have Questions?</h3>
            <p className="text-sm mb-2">
              Aiwan-e-Tijarat Rd, Seari Quarters, Karachi, Karachi City, Sindh 74000
            </p>
            <p className="text-sm mb-2">+92 312 3023645</p>
            <p className="text-sm">info@internee.pk</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full py-5 mt-6 text-center border-t border-white/20">
        <p className="text-sm">&copy; 2025 All rights reserved | internee.pk</p>
      </div>
    </footer>
  );
};

export default Footer;
