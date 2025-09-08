import React from "react";
import { Code, Palette, PenTool } from "lucide-react";

const Skills = () => {
  return (
    <div id='skills'>
      <section className="relative z-10  px-4 sm:px-8 max-w-5xl mx-auto mt-25">

        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide font-semibold">What I Do</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            <span className="text-[#ffb703]">Skills</span>
          </h2>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">

          {/* UI/UX Design */}
          <div className="w-full max-w-[260px] sm:max-w-full mx-auto p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center
                          hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
            <PenTool size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-xs sm:text-sm text-gray-400">UI/UX Design</h3>

            <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-1 sm:gap-2">
              {["Figma", "Adobe XD", "Wireframing", "Prototyping"].map((skill) => (
                <span key={skill} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="w-full max-w-[260px] sm:max-w-full mx-auto p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center
                          hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
            <Code size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-xs sm:text-sm text-gray-400">Frontend Development</h3>

            <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-1 sm:gap-2">
              {["React.js", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Graphic Design */}
          <div className="w-full max-w-[260px] sm:max-w-full mx-auto p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg text-center
                          hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300">
            <Palette size={28} className="mx-auto mb-2 sm:mb-3 text-[#00ffcc]" />
            <h3 className="text-xs sm:text-sm text-gray-400">Graphic Design</h3>

            <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-1 sm:gap-2">
              {["Photoshop", "Illustrator", "InDesign", "Canva"].map((skill) => (
                <span key={skill} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* About Text */}
        <div className="text-center mb-6 sm:mb-10 px-2 sm:px-0">
          <p className="text-sm sm:text-base text-gray-300 max-w-full sm:max-w-2xl mx-auto leading-relaxed">
            I specialize in combining creativity with technology to deliver impactful digital solutions.
            From crafting user-friendly interfaces and modern web applications to designing engaging
            visuals, my skillset allows me to bring ideas to life with both precision and creativity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
