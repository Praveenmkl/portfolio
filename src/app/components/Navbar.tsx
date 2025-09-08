"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import menuIcon from "../../../public/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu((prev) => !prev);

  // Define navbar items with custom offsets
  const navItems = [
    { name: "home", offset: -80 },
    { name: "about", offset: -260 },
    { name: "skills", offset: -80 },
    { name: "projects", offset: -10 },
    { name: "contact", offset: -20 },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 py-2 transition-all ${sticky ? "bg-[#0d1b1e]/90 shadow-md backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-white text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.name}
                smooth={true}
                duration={500}
                offset={item.offset}
                className="cursor-pointer hover:text-[#ffb703] transition-colors capitalize"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Image src={menuIcon} alt="Menu" className="w-8 cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <ul className="flex flex-col items-center gap-6 text-white text-lg py-6 bg-[#0d1b1e]/95 backdrop-blur-lg md:hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.name}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-[#ffb703] transition-colors capitalize"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;






























{/*
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
        <Link href="/" className="hover:text-[#ffb703] transition-colors">
          About
        </Link>
        <Link href="/" className="hover:text-[#ffb703] transition-colors">
          Skills
        </Link>
        <Link href="/" className="hover:text-[#ffb703] transition-colors">
          Projects
        </Link>
        
        <Link href="/" className="hover:text-[#ffb703] transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar; */}
