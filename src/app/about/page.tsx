import React from 'react';
import { Award, Globe, FolderKanban } from "lucide-react";

const AboutMePage = () => {
  return (
    <div>
      {/* About Me Section */}
      <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400 tracking-wide font-semibold">Get To Know</p>
          <h2 className="text-3xl sm:text-2xl font-semibold">
            <span className="text-[#f7941d]">About Me</span>
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          
          {/* Experience */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
            <Award size={30} className="mx-auto mb-3 text-[#f7941d]" />
            <h3 className="text-sm text-gray-400">Experience</h3>
            <p className="text-1xl">2+ Years</p>
            <p className="text-1xl">Working</p>
          </div>

          {/* Clients */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
            <Globe size={30} className="mx-auto mb-3 text-[#f7941d]" />
            <h3 className="text-sm text-gray-400">Clients</h3>
            <p className="text-1xl">Worldwide</p>
          </div>

          {/* Projects */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                          hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
            <FolderKanban size={30} className="mx-auto mb-3 text-[#f7941d]" />
            <h3 className="text-sm text-gray-400">Projects</h3>
            <p className="text-1xl">10+</p>
            <p className="text-1xl">Completed</p>
          </div>
        </div>

        {/* About Text */}
        <div className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
          <p>
            I’m Praveen Kalansooriya, a passionate UI/UX Designer and Frontend Developer who enjoys blending creativity with functionality. I specialize in building user-friendly websites and engaging digital experiences that leave a lasting impact.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a 
            href="/contact" 
            className="px-6 py-3 rounded-full bg-[#f7941d] text-black font-semibold hover:bg-[#ffa94d] transition shadow-lg"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutMePage;
