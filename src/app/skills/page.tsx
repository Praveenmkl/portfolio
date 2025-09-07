import React from "react";
import { Code, Palette, PenTool } from "lucide-react";

const Skills = () => {
  return (
    <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-7xl mx-auto">

      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-wide font-semibold">What I Do</p>
        <h2 className="text-3xl sm:text-2xl font-semibold">
          <span className="text-[#ffb703]">Skills</span>
        </h2>

      </div>

      {/* Skills Cards */}
      <div className="w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

        {/* UI/UX Design */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
          <PenTool size={30} className="mx-auto mb-3 text-[#00ffcc]" />
          <h3 className="text-sm text-gray-400">UI/UX Design</h3>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {["Figma", "Adobe XD", "Wireframing", "Prototyping"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend Development */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
          <Code size={30} className="mx-auto mb-3 text-[#00ffcc]" />
          <h3 className="text-sm text-gray-400">Frontend Development</h3>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {["React.js", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Graphic Design */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center 
                        hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
          <Palette size={30} className="mx-auto mb-3 text-[#00ffcc]" />
          <h3 className="text-sm text-gray-400">Graphic Design</h3>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {["Photoshop", "Illustrator", "InDesign", "Canva"].map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mb-10">
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
          I specialize in combining creativity with technology to deliver impactful digital solutions.
          From crafting user-friendly interfaces and modern web applications to designing engaging
          visuals, my skillset allows me to bring ideas to life with both precision and creativity.
        </p>
      </div>
    </section>
  );
};

export default Skills;
