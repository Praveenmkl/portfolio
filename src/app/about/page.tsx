import React from 'react';
import { Award, Globe, FolderKanban } from "lucide-react";

const AboutMePage = () => {
  return (
    <div id='about'>
      {/* About Me Section */}
      <section className="relative z-10 -mt-80 sm:-mt-40 px-4 sm:px-8 mx-auto max-w-[260px] sm:max-w-full">

        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-base text-gray-400 tracking-wide font-semibold">Get To Know</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            <span className="text-[#ffb703]">About Me</span>
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 sm:mb-10">
          
          {/* Experience */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#00ffcc] hover:scale-105 transition-all duration-300">
            <Award size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-sm sm:text-base text-gray-400">Experience</h3>
            <p className="text-md sm:text-md font-semibold">2+ Years</p>
            <p className="text-md sm:text-md font-semibold">Working</p>
          </div>

          {/* Clients */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#00ffcc] hover:scale-105 transition-all duration-300">
            <Globe size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-sm sm:text-base text-gray-400">Clients</h3>
            <p className="text-lg sm:text-md font-semibold">Worldwide</p>
          </div>

          {/* Projects */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#00ffcc] hover:scale-105 transition-all duration-300">
            <FolderKanban size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-sm sm:text-base text-gray-400">Projects</h3>
            <p className="text-lg sm:text-md font-semibold">10+</p>
            <p className="text-lg sm:text-md font-semibold">Completed</p>
          </div>
        </div>

        {/* About Text */}
        <div className="text-center max-w-full sm:max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
          <p className="text-sm sm:text-base">
            I’m Praveen Kalansooriya, a passionate UI/UX Designer and Frontend Developer who enjoys blending creativity with functionality. I specialize in building user-friendly websites and engaging digital experiences that leave a lasting impact.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a 
            href="/contact" 
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#00ffcc] text-black font-semibold hover:bg-[#ffb703] transition shadow-lg text-sm sm:text-base"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutMePage;
