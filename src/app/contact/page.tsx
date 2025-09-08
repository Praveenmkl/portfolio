"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactMe = () => {
  return (
    <div id="contact">
      <section className="relative z-10 mt-12 px-4 sm:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide font-semibold">Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            <span className="text-[#ffb703]">Contact Me</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-300 max-w-full sm:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Feel free to reach out for collaborations, freelance projects, or just to say hello.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-12 max-w-7xl mx-auto">

          {/* Left: Contact Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center lg:items-start">
            {[
              { icon: <Mail size={28} />, title: "Email", info: "kalansooriya615@gmail.com" },
              { icon: <Phone size={28} />, title: "Phone", info: "+94 74 292 6978" },
              { icon: <MapPin size={28} />, title: "Location", info: "Galle, Sri Lanka" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 w-52 sm:w-64 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_8px_#00ffcc] hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon centered */}
                <div className="mb-2 sm:mb-3 text-[#00ffcc]">{card.icon}</div>
                <h3 className="text-xs sm:text-sm text-gray-400">{card.title}</h3>
                <p className="text-gray-200 mt-1 text-[12px] sm:text-sm break-words">{card.info}</p>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 w-full max-w-full sm:max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-10">
            <form className="flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 sm:p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 sm:p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="p-2 sm:p-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-max rounded-full bg-[#00ffcc] text-black font-semibold hover:bg-[#ffb703] transition shadow-lg"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactMe;
