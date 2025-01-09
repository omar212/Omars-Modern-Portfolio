"use client";
import { motion } from "framer-motion";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import { AnimatedHeading } from "components/AnimatedHeading";
import Squares from "components/Animations/Squares/Squares";
import CountUp from "components/Animations/CountUp/CountUp";
import { useState } from "react";

const Homepage = () => {
  const router = useRouter();
  const [counterFinished, setCounterFinished] = useState(false);

  const handleNavigate = (page) => {
    router.push(`/${page}`);
  };

  const triggerDelayedEnd = () => {
    setTimeout(() => {
      setCounterFinished(true);
    }, 1600);
  };
  return (
    <motion.div
      className="min-h-[90vh] flex items-center justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {!counterFinished ? (
        <CountUp
          from={0}
          to={101}
          separator="%"
          direction="up"
          duration={3}
          className="count-up-text"
          onEnd={() => triggerDelayedEnd()}
        />
      ) : (
        <>
          <Squares
            speed={0.5}
            squareSize={80}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="RGB(88, 95, 240)"
            hoverFillColor="inherit"
          />

          <div
            className="
            flex 
            flex-col 
            mx-auto
            items-center
            justify-center
            p-2
            gap-4
            "
          >
            {/* IMAGE CONTAINER */}
            {/* <div className="h-full lg:h-full lg:w-1/2 flex justify-center items-center">
          
        </div> */}
            {/* <Image
          src="/homeprofile.png"
          alt=""
          width="0"
          height="0"
          sizes="100%"
          className="w-28 h-28 rounded-full mx-auto object-center"
        /> */}

            {/* TEXT CONTAINER */}
            <div className="w-full h-full mx-auto flex flex-col gap-8 items-center justify-center text-center">
              {/* TITLE */}

              <AnimatedHeading />

              {/* DESC */}
              <p className="text-sm font-extralight px-14 font-sans md:text-lg">
                Curious about my skills and expertise? Dive into my projects to
                uncover the innovation and creativity that define my journey!
              </p>

              {/* BUTTONS */}
              <div className="justify-center text-6 w-full flex gap-3 mb-5 font-medium ">
                <Button
                  onClick={() => handleNavigate("about")}
                  className="
                  bg-gradient-to-r from-purple-600 to-blue-600
                  text-white 
                  font-extrabold
                  hover:bg-blue-600 
                  hover:text-white 
                  transition-transform 
                  duration-300 
                  ease-in-out 
                  hover:scale-105 
                  active:scale-95
                  rounded-full
                "
                >
                  Explore My Journey
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Homepage;
