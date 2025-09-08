import React from "react";
import { Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (


    
    <footer className="w-full relative bg-[#ffb703] text-gray-300 pt-12 sm:pt-16 lg:pt-24 pb-6 px-4 sm:px-6 lg:px-6 mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Name */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0d1b1e] mb-6 sm:mb-8 lg:mb-10 tracking-wide">
          Praveen Kalansooriya
        </h1>

        {/* Navigation */}
        <nav className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 text-[#0d1b1e] font-light text-sm sm:text-base">
            {["Home", "About",  "Articles", "Experience",  "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-6 sm:mb-8">
          {[Linkedin, Github, Twitter, MessageCircle].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black text-white
                         shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-out"
            >
              <Icon size={18} sm={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#0d1b1e] text-xs sm:text-sm tracking-wide">
          © {new Date().getFullYear()} Praveen Kalansooriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
