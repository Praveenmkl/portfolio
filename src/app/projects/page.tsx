"use client";
import React, { useRef } from "react";
import { ExternalLink, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "People's Bank App Redesign",
      tech: "Figma, UI/UX Design, Prototyping",
      description:
        "Redesigned the People's Bank mobile application with a modern and user-friendly interface, improving navigation, accessibility, and responsive layouts.",
      image: "/pb.png",
      link: "https://www.behance.net/yourportfolio",
    },
    {
      title: "Car Rental Full-Stack Project",
      tech: "React.js, Node.js, Express, MongoDB",
      description:
        "A full-stack car rental web application for browsing, booking, and managing rentals online. Includes authentication, booking management, and an admin dashboard.",
      image: "/carrent.jpg",
      link: "https://github.com/Praveenmkl/CarRental.git",
      live: "https://car-rental-wehg.vercel.app/",
    },
    // Placeholder for future projects
    {},
  ];

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth / 3; // scroll one card at a time
      carouselRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="projects">
    <section className="relative z-10 mt-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 tracking-wide font-semibold">My Work</p>
        <h2 className="text-3xl sm:text-2xl font-semibold">
          <span className="text-[#ffb703]">Projects</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
          A showcase of my UI/UX, frontend, and full-stack projects. Designed for clarity, usability, and modern aesthetics.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-[#ffb703]/20 text-[#ffb703] transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-none gap-6 py-4 px-2 scroll-smooth"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`min-w-[250px] sm:min-w-[300px] lg:min-w-[300px] aspect-square p-5 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_10px_#00ffcc] hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between ${
                !project.title ? "bg-white/2 border-dashed border-2 border-gray-500/40 text-gray-400 text-center" : ""
              }`}
            >
              {project.title ? (
                <>
                  {/* Image */}
                  <div className="relative w-full h-1/2 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-lg font-semibold text-gray-200 text-center">{project.title}</h3>
                  <p className="text-sm text-[#00ffcc] mt-1 text-center">{project.tech}</p>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed text-center flex-1">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3 mt-3 flex-wrap justify-center">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#00ffcc] text-sm hover:underline"
                      >
                        View Code <ExternalLink size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#00ffcc] text-sm hover:underline"
                      >
                        Live Demo <Globe size={14} />
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-center font-medium text-gray-400">More Comming Soon</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-[#ffb703]/20 text-[#ffb703] transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
    </div>
  );
};

export default Projects;
