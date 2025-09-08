"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutSection from "./about/page.tsx";
import Skills from "./skills/page.tsx";
import { useState, useEffect } from "react";
import Experience from "./experience/page.tsx";
import Projects from "./projects/page.tsx";
import Contactus from "./contact/page.tsx";
import LoadingScreen from "../components/LoadingScreen";
import SplineScene from "../components/spline.tsx";
import SocialSidebar from "./components/Socialsidebar.tsx";
import ScrollDown from "./components/Scrolldown.tsx";
import Footer from "./footer/page.tsx";


export default function Home() {
  // Typewriter Animation
  const roles = ["Praveen Kalansooriya", "Graphic Designer", "Frontend Developer", "UI/UX Designer"];
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


    <main className="relative min-h-screen bg-[#0d1b1e] text-white flex flex-col items-center justify-center  py-10 pb-0 overflow-hidden">

      {/* <div className="absolute -top-10 right-300 m-6 w-60 h-60 bg-[#ffb703] rounded-[40%] blur-2xl opacity-100"></div>*/}
      {/* Hero Section */}
      <section id="home" className="text-center max-w-sm sm:max-w-3xl relative z-10 py-10 mt-10">

        {/* Profile Image */}
        <div className="flex justify-center pb-6">
          <Image
            src="/praveen_profile.jpg"
            alt="Praveen Profile"
            width={300}
            height={300}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-3 sm:border-4 border-[#00ffcc] shadow-lg object-cover"
          />




        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-0 leading-tight">
          Hi, I'm
        </h1>

        {/* Animated Roles */}
        <p className="text-2xl sm:text-3xl md:text-5xl text-gray-300 mb-8 leading-relaxed px-4 font-semibold">
          <span className="text-[#ffb703]">{text}</span>
          <span className="blink">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/Praveen_CV.pdf"
            download
            className="px-6 py-3 rounded-full bg-[#00ffcc] text-black font-semibold hover:bg-[#ffb703] transition shadow-lg text-center"
          >
            Download CV
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc] hover:text-black transition shadow-lg text-center"
          >
            Let's Talk
          </Link>
        </div>

        <section className="max-w-xs sm:max-w-2xl text-center text-gray-300 relative z-10 px-4 py-2 mt-10">



          <p className="text-sm sm:text-base leading-relaxed">
            With a strong background in graphic design and content creation, I
            specialize in crafting digital experiences that combine creativity
            with functionality. From sleek websites to engaging visuals, I bring
            ideas to life through design and code.
          </p>
        </section>

      </section>

      {/* About / Short Intro */}

      <SplineScene
        url="https://prod.spline.design/fwjY59Rl0N2qLavr/scene.splinecode"

      />

      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
      <Contactus />
      <SocialSidebar />
      <ScrollDown />
      <Footer />





      {/* Cursor Blink CSS */}
      <style jsx>{`
        .blink {
          display: inline-block;
          margin-left: 2px;
          width: 1px;
          background-color: #00ffcc;
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
