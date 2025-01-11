"use client";

import { motion } from "framer-motion";
import TrueFocus from "components/Animations/TrueFocus/TrueFocus";
import ShinyText from "components/Animations/ShinyText/ShinyText";

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

  const words = ["Where", "Digital", "Dreams", "Come"];

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
        "
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
      <motion.h1
        className="
          w-full 
          text-5xl 
          font-extrabold
          flex 
          flex-wrap 
          gap-2
          md:text-5xl 
          lg:text-6xl
          items-center 
          justify-center"
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
            className="bg-clip-text cursor-pointer"
          >
            <ShinyText text={word} disabled={false} speed={3} />
          </motion.span>
        ))}

        <motion.span
          variants={growFromBottom}
          className="font-extrabold bg-clip-text cursor-pointer"
        >
          Alive.
        </motion.span>
      </motion.h1>
      <TrueFocus
        sentence="Code Passion Purpose"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      {/* <motion.div
        className="
          w-full 
          text-3xl 
          font-extrabold 
          leading-tight 
          flex 
          flex-wrap 
          gap-x-1 
          items-center 
          justify-center 

          "
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
      </motion.div> */}
    </motion.div>
  );
};
