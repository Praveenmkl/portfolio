"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Contact, PenTool } from "lucide-react";
import AboutSection from "./about/page.tsx";
import Skills from "./skills/page.tsx";
import { useState, useEffect } from "react";
import Experience from "./experience/page.tsx";
import Projects from "./projects/page.tsx";
import Contactus from "./contact/page.tsx";
import LoadingScreen from "../components/LoadingScreen";
export default function Home() {
  // Typewriter Animation
  const roles = ["Praveen Kalansooriya","Graphic Designer", "Frontend Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

    useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText((prev) => prev + roles[index][charIndex]);
        if (charIndex + 1 === roles[index].length) setDeleting(true);
        else setCharIndex(charIndex + 1);
      } else {
        setText((prev) => prev.slice(0, -1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      }
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, roles, text]);
  
  // floating animation config
const float = (duration = 4, y = 20) => ({
  y: [0, -y, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});
  const [loading, setLoading] = useState(true);
  // ...existing state declarations...

  useEffect(() => {
    // Simulate loading time (you can remove setTimeout if you want it to load instantly)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Shows loading screen for 2 seconds
  }, []);

  // Add loading check
  if (loading) {
    return <LoadingScreen />;
  }



  return (
     
    <main className="relative min-h-screen bg-[#000814] text-white flex flex-col items-center justify-center px-6 py-10 overflow-hidden">
      {/* Floating Decorations */}
      <motion.div
        animate={float(5, 15)}
        className="absolute top-20 left-130 text-[#f7941d] hidden sm:block"
      >
        <Code2 size={40} className="drop-shadow-[0_0_12px_#f7941d]" />
      </motion.div>

      <motion.div
        animate={float(6, 15)}
        className="absolute top-52 right-130 text-[#f7941d] hidden sm:block"
      >
        <PenTool size={42} className="drop-shadow-[0_0_12px_#f7941d]" />
      </motion.div>

      {/* Hero Section */}
      <section className="text-center max-w-sm sm:max-w-3xl relative z-10 py-10">
        {/* Profile Image */}
        <div className="flex justify-center pb-6">
          <Image
            src="/profile_img.png"
            alt="Praveen Profile"
            width={180}
            height={180}
            className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-2 sm:border-4 border-[#f7941d] shadow-lg object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-0 leading-tight">
          Hi, I'm
        </h1>

        {/* Animated Roles */}
        <p className="text-2xl sm:text-lg md:text-4xl text-gray-300 mb-8 leading-relaxed px-4 font-Semibold">
          <span className="text-[#f7941d]">{text}</span>
          <span className="blink">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/Praveen_CV.pdf"
            download
            className="px-6 py-3 rounded-full bg-[#f7941d] text-black font-semibold hover:bg-[#ffa94d] transition shadow-lg text-center"
          >
            Download CV
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-[#f7941d] text-[#f7941d] hover:bg-[#f7941d] hover:text-black transition shadow-lg text-center"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* About / Short Intro */}
      <section className="max-w-xs sm:max-w-2xl text-center text-gray-300 relative z-10 px-4 py-2">
        <p className="text-sm sm:text-base leading-relaxed">
          With a strong background in graphic design and content creation, I
          specialize in crafting digital experiences that combine creativity
          with functionality. From sleek websites to engaging visuals, I bring
          ideas to life through design and code.
        </p>
      </section>

      <AboutSection />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contactus/>
    

      {/* Cursor Blink CSS */}
      <style jsx>{`
        .blink {
          display: inline-block;
          margin-left: 2px;
          width: 1px;
          background-color: #f7941d;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </main>
  );
}
