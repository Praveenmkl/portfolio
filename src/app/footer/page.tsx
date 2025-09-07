import React from "react";
import { Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative bg-[#ffb703] text-gray-300 pt-16 pb-6 px-6 mt-12 sm:mt-16 lg:mt-24">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-medium text-[#0d1b1e] mb-10 tracking-wide">
          Praveen Kalansooriya
        </h1>
        
        {/* Navigation */}
        <nav className="mb-10">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[#0d1b1e] font-light">
            {["Home", "About", "Education", "Articles", "Experience", "Services", "Portfolio", "Contact"].map((item) => (
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
        <div className="flex justify-center gap-5 mb-8">
          {/* Linkedin */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white
                       shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-out"
          >
            <Linkedin size={20} />
          </a>

          {/* Github */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white
                       shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-out"
          >
            <Github size={20} />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white
                       shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-out"
          >
            <Twitter size={20} />
          </a>

          {/* Message */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white
                       shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ease-out"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#0d1b1e] text-sm tracking-wide">
          © {new Date().getFullYear()} Praveen Kalansooriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
