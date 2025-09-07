import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Graphic Designer - Artemsphere",
      company: "Artemsphere",
      duration: "2024 - Present",
      location: "Colombo, Sri Lanka",
      description:
        "Created promotional content, social media designs, and branding materials for clients. Specialized in Photoshop manipulation and creative marketing designs.",
    },
    {
      role: "Banking Trainee Cashier - People's Bank",
      company: "People's Bank",
      duration: "2023",
      location: "Galle, Sri Lanka",
      description:
        "Handled daily cashier operations including deposits, withdrawals, and customer transactions. Gained practical experience in banking procedures, customer service, and ICT applications in the financial sector.",
    },
 
  ];

  return (
    <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-wide font-semibold">
          My Journey
        </p>
        <h2 className="text-3xl sm:text-2xl font-semibold">
          <span className="text-[#ffb703]">Experience</span>
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_5px_#00ffcc] hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-[#00ffcc]" size={24} />
              <h3 className="text-lg font-semibold">{exp.role}</h3>
            </div>
            <p className="text-gray-300 text-sm">{exp.company}</p>

            <div className="flex items-center text-gray-400 text-xs mt-1 gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {exp.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} /> {exp.location}
              </div>
            </div>

            <p className="text-gray-200 mt-3 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
