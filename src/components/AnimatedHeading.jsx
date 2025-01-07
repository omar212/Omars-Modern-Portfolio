"use client";

import { motion } from "framer-motion";
import { CodeIcon, FlameIcon } from "lucide-react";

export const AnimatedHeading = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const scaleItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const growFromBottom = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.2,
        ease: "easeInOut",
      },
    },
  };

  const words = ["Where", "Digital"];
  const afterDreamsWords = ["Come"];

  return (
    <motion.div
      className="
        w-full
        flex 
        flex-col 
        gap-4 
        items-center 
        justify-center 
        text-center 
        lg:items-start 
        lg:justify-start 
        lg:text-left"
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
      <motion.h1
        className="
          w-full 
          text-4xl 
          font-extrabold
          flex 
          flex-wrap 
          gap-2
          md:text-3xl 
          lg:text-[2.3rem]
          items-center 
          justify-center 
          lg:justify-start"
        variants={fadeIn}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: i * 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-transparent bg-clip-text cursor-pointer"
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            delay: 2 * 0.4,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-transparent bg-clip-text cursor-pointer"
        >
          Dreams
        </motion.span>
        {afterDreamsWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: (i + 3) * 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-transparent bg-clip-text cursor-pointer"
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          variants={growFromBottom}
          className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-transparent bg-clip-text cursor-pointer"
        >
          Alive
        </motion.span>
      </motion.h1>

      <motion.div
        className="
          w-full 
          text-2xl 
          md:text-4xl 
          font-extrabold 
          leading-tight 
          flex 
          flex-wrap 
          gap-x-2 
          items-center 
          justify-center 
          lg:justify-start"
      >
        <motion.span
          variants={scaleItem}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text cursor-pointer"
        >
          Code
        </motion.span>

        <div className="flex items-center justify-center">
          <CodeIcon
            className="text-gray-400 dark:text-white mx-2"
            size="16px"
          />
        </div>

        <motion.span
          variants={scaleItem}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text cursor-pointer"
        >
          Passion
        </motion.span>

        <div className="flex items-center justify-center">
          <FlameIcon
            className="text-gray-400 dark:text-white mx-2"
            size="16px"
          />
        </div>

        <motion.span
          variants={scaleItem}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text cursor-pointer"
        >
          Purpose
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
