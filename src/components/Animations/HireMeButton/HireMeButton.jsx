"use client";

import { motion } from "framer-motion";
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
      {/* Center Button */}
      <motion.div
        className="
          w-32 h-32 md:w-32 md:h-32 lg:w-38 lg:h-38
          rounded-full flex items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-500
          cursor-pointer text-white font-bold
          hover:shadow-lg hover:shadow-purple-500/30
          mb-4
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
    </div>
  );
};

export { HireMeButton };
