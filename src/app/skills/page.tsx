import React from "react";
import { Code, Palette, PenTool } from "lucide-react"; // Replace with your vector emojis if needed

const Skills = () => {
  return (
    <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-wide font-semibold">My Expertise</p>
        <h2 className="text-3xl sm:text-2xl font-semibold">
          <span className="text-[#f7941d]">Skills</span>
        </h2>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {/* UI/UX Design */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
          <PenTool 
            size={30} 
            className="mx-auto mb-3 text-[#f7941d] hover:drop-shadow-[0_0_12px_#f7941d] transition-all duration-300" 
          />
          <h3 className="text-sm text-gray-400">UI/UX Design</h3>
          <div className="mt-2">
            <p className="text-1xl">Figma, Adobe XD</p>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
          <Code 
            size={30} 
            className="mx-auto mb-3 text-[#f7941d]  hover:drop-shadow-[0_0_12px_#f7941d] transition-all duration-300" 
          />
          <h3 className="text-sm text-gray-400">Frontend Dev</h3>
          <div className="mt-2">
            <p className="text-1xl">React, Next.js, HTML,CSS,JS</p>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_5px_#f7941d] hover:scale-105 transition-all duration-300">
          <Palette 
            size={30} 
            className="mx-auto mb-3 text-[#f7941d] hover:drop-shadow-[0_0_12px_#f7941d] transition-all duration-300" 
          />
          <h3 className="text-sm text-gray-400">Graphic Design</h3>
          <div className="mt-2">
            <p className="text-1xl">Photoshop, Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

