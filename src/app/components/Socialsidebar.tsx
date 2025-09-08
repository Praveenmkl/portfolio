"use client";


export default function SocialSidebar() {
    return (
        <div className="hidden md:flex absolute left-50 top-30 flex-col items-center space-y-6 text-[#ffb703] z-50">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/praveen-kalansooriya-219198303/?originalSubdomain=lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb703] transition-colors duration-300"
            >
                 <img
                    src="/linkedin.png"
                    alt="linkedin"
                    className="w-6 h-6"
                />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/Praveenmkl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb703] transition-colors duration-300"
            >
                <img
                    src="/github.png"
                    alt="github"
                    className="w-11 h-6"
                />
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
                    className="w-7 h-3.5"
                />
            </a>

            {/* Line */}
            <div className="w-px h-16 bg-[#ffb703] mt-4"></div>
        </div>
    );
}
