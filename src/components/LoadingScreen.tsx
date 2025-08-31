"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="fixed inset-0 bg-[#000814] flex flex-col items-center justify-center z-50">
      
      {/* Greeting */}
      {index < greetings.length && (
        <h3 className="text-[#f7941d]  md:text-6xl font-medium mb-6">
          {greetings[index]}
        </h3>
      )}

      {/* Image below greeting */}
      <div>
        <Image
          src="/portfolio welcome.png"  // ✅ image path relative to /public
          alt="Splash Image"
          width={320}                   // set width
          height={320}                  // set height
          className="object-contain"    // removes rounded/border
        />
      </div>
    </div>
  );
};

export default SplashScreen;

