"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center bg-[#0d1b1e]">
      <nav
        className="mt-6 text-white px-6 md:px-12 py-4 flex flex-wrap justify-center gap-4 md:gap-10 text-base md:text-lg
        rounded-full bg-white/10 backdrop-blur-lg shadow-lg max-w-[95%] md:max-w-none"
      >
        <Link href="/" className="hover:text-[#ffb703] transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#ffb703] transition-colors">
          About
        </Link>
        <Link href="/skills" className="hover:text-[#ffb703] transition-colors">
          Skills
        </Link>
        <Link href="/projects" className="hover:text-[#ffb703] transition-colors">
          Projects
        </Link>
        
        <Link href="/contact" className="hover:text-[#ffb703] transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
