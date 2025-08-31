"use client";
import { motion } from "framer-motion";
import { Code2, Star, MousePointerClick } from "lucide-react";

const floatAnimation = {
  y: [0, -20, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function Decorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* </> Code Icon */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-20 left-16 text-[#f7941d]"
      >
        <Code2 size={48} className="drop-shadow-xl" />
      </motion.div>

      {/* Star Icon */}
      <motion.div
        animate={floatAnimation}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-28 right-20 text-yellow-400"
      >
        <Star size={40} className="drop-shadow-xl" />
      </motion.div>

      {/* UI/UX Cursor */}
      <motion.div
        animate={floatAnimation}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-[70%] text-cyan-400"
      >
        <MousePointerClick size={44} className="drop-shadow-xl" />
      </motion.div>
    </div>
  );
}
