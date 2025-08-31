"use client";
import { motion } from "framer-motion";
import { Code2, Star, MousePointerClick } from "lucide-react";

export default function Decorations() {
  return (
    <div style={{ position: "absolute", inset: "0", pointerEvents: "none", overflow: "hidden" }}>
      {/* </> Code Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "5rem",
          left: "4rem",
          color: "#f7941d"
        }}
      >
        <Code2 size={48} style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))" }} />
      </motion.div>

      {/* Star Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "7rem",
          right: "5rem",
          color: "#fbbf24"
        }}
      >
        <Star size={40} style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))" }} />
      </motion.div>

      {/* UI/UX Cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "70%",
          color: "#22d3ee"
        }}
      >
        <MousePointerClick size={44} style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))" }} />
      </motion.div>
    </div>
  );
}