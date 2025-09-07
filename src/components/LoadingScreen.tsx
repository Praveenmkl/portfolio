"use client";
import { useEffect, useState } from "react";

const greetings = ["අයුබෝවන්", "Welcome", "Chao", "Hola", "Bonjour", "Namaste"];

const SplashScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  const greetingDuration = 300; // faster switching
  const extraDelay = 300;       // small delay before moving to home

  useEffect(() => {
    if (index < greetings.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, greetingDuration);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onFinish, extraDelay);
      return () => clearTimeout(timer);
    }
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 bg-[#0d1b1e] flex flex-col items-center justify-center z-50">
      {/* Greeting with small corner circle */}
      {index < greetings.length && (
        <div className="relative inline-block">
          {/* Circle */}
          <span className="absolute -top-3 -left-3 w-4 h-4 bg-[#ffb703] rounded-full"></span>

          {/* Text */}
          <h3 className="text-[#ffb703] md:text-6xl font-medium mb-6">
            {greetings[index]}
          </h3>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
