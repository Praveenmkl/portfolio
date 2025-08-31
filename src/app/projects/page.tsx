"use client";
import React, { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "People's Bank App Redesign",
      tech: "Figma, UI/UX Design, Prototyping",
      description:
        "Redesigned the People's Bank mobile application with a modern and user-friendly interface. Focused on improving navigation, accessibility with intuitive layouts and responsive components.",
      image: "/pb.png",
      link: "https://www.behance.net/yourportfolio",
    },

    {
      title: "Car Rental Full-Stack Project",
      tech: "React.js, Node.js, Express, MongoDB",
      description:
        "A full-stack car rental web application where users can browse, book, and manage car rentals online. Includes user authentication, booking management, and an admin dashboard for vehicle and reservation control.",
      image: "/carrent.jpg",
      link: "https://github.com/Praveenmkl/CarRental.git", // GitHub repo
      live: "https://car-rental-wehg.vercel.app/", // Vercel live demo
    },

   {
  title: "Currency Converter App",
  tech: "React.js, API Integration, Tailwind CSS",
  description:
"A real-time currency converter app with live exchange rates, featuring a clean and responsive UI for quick and accurate conversions. convert between currencies in real time using live exchange rate APIs.",
  image: "/cc.jpg", // replace with your project screenshot
  link: "https://github.com/yourusername/currency-converter", // update with your GitHub repo
  live: "https://currency-converter-yourname.vercel.app", // optional: Vercel live demo
},

   {
  title: "PowerFit UI Design",
  tech: "Figma, UI/UX Design, Prototyping",
  description:
    "Designed a modern and engaging fitness app interface called PowerFit. The UI focuses on workout tracking, nutrition plans, and progress monitoring with a clean, user-friendly design that motivates users to stay active and healthy.",
  image: "/pf.png", // replace with your PowerFit UI screenshot
  link: "https://www.behance.net/yourportfolio", // update with your Behance/Dribbble link
},

  ];

  const cardsPerView = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-wide font-semibold">
          My Work
        </p>
        <h2 className="text-3xl sm:text-2xl font-semibold">
          <span className="text-[#f7941d]">Projects</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="px-3 w-[calc(100%/3)] flex-shrink-0">
              <div className="rounded-lg bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_5px_#f7941d] transition-all duration-300 overflow-hidden">
                {/* Rectangle Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.tech}</p>
                  <p className="text-gray-200 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#f7941d] text-sm hover:underline"
                      >
                        View Code <ExternalLink size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex place-items-center gap-2  text-[#f7941d] text-sm hover:underline"
                      >
                        Live Demo <Globe size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({
          length: projects.length - cardsPerView + 1,
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === i ? "bg-[#f7941d] scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
