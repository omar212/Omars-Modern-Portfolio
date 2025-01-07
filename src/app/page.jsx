"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import { AnimatedHeading } from "components/AnimatedHeading";

const Homepage = () => {
  const router = useRouter(); // Initialize the router

  const handleNavigate = (page) => {
    router.push(`/${page}`); // Navigate to /contact page
  };
  return (
    <motion.div
      className="min-h-[90vh] flex items-center justify-center" // Centering the content
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col p-2 lg:flex-row gap-4 items-center justify-center lg:gap-8 xl:gap-16">
        {/* IMAGE CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/homeprofile.png"
            alt=""
            width="0"
            height="0"
            sizes="100%"
            className="w-fit h-fit mx-auto" // Centering the image
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
          {/* TITLE */}

          <AnimatedHeading />

          {/* DESC */}
          <p className="text-sm md:text-lg">
            Discover the essence of my career through my projects. Dive in and
            explore the breadth of my expertise, from sleek designs to robust
            solutions. Let&apos;s journey together into the heart of innovation!
          </p>
          {/* BUTTONS */}
          <div className="justify-center text-6 w-full flex gap-3 mb-5 font-medium md:justify-center lg:justify-start xl:justify-start">
            <Button
              onClick={() => handleNavigate("about")}
              className="
                  p-4 
                  rounded-lg 
                  ring-1 
                  bg-gradient-to-r from-purple-600 to-blue-600
                   
                  bg-blue-400 
                  text-white 
                  hover:bg-blue-600 
                  hover:text-white 
                  transition-transform 
                  duration-300 
                  ease-in-out 
                  hover:scale-105 
                  active:scale-95
                "
            >
              Explore My Journey
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
