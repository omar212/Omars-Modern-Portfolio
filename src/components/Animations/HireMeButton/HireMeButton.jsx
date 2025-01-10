"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const jobTitles = [
  "Sr. Full Stack Developer",
  "Sr. Software Engineer",
  "Frontend Developer",
  "Web Developer",
  "UI Designer",
];

const HireMeButton = ({ onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative hover:cursor-pointer" onClick={onClick}>
      {/* Rotating circle SVG */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        viewBox="0 0 300 300"
        className="w-48 h-48 md:w-[500px] md:h-[500px] pointer-events-none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="4,6"
        />
      </motion.svg>

      {/* Center Button */}
      <motion.div
        className="
          w-20 h-20 md:w-32 md:h-32 lg:w-38 lg:h-38
          absolute top-0 left-0 right-0 bottom-0 m-auto 
          rounded-full flex items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-500
          cursor-pointer text-white font-bold
          hover:shadow-lg hover:shadow-purple-500/30
          z-20
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 0px rgba(255,255,255,0.5)",
              "0 0 10px rgba(255,255,255,0.8)",
              "0 0 0px rgba(255,255,255,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          HIRE ME
        </motion.span>
      </motion.div>

      {/* Animated text - Now positioned below the button */}
      <div className="absolute left-0 right-0 bottom-[-15px] md:bottom-[25%] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold text-white text-center"
          >
            {jobTitles[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export { HireMeButton };
