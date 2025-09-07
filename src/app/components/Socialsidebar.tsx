"use client";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import medium from "next/image"

export default function SocialSidebar() {
    return (


        <div className="absolute left-50 top-30 flex flex-col items-center space-y-6 text-[#ffb703] z-50">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/praveen-kalansooriya-219198303/?originalSubdomain=lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb703] transition-colors duration-300"
            >
                <FaLinkedin size={28} />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/Praveenmkl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb703] transition-colors duration-300"
            >
                <FaGithub size={28} />
            </a>

            {/* Medium */}
            <a
                href="https://medium.com/@kalansooriya615"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition duration-300"
            >
                <img
                    src="/medium.png" 
                    alt="Medium"
                    className="w-8 h-4.5"
                />
            </a>

            {/* Line */}
            <div className="w-px h-16 bg-[#ffb703] mt-4"></div>
        </div>
    );
}
