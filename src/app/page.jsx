"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";

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
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Coding Journeys, Building Future Foundations.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Discover the essence of my career through my projects. Dive in and
            explore the breadth of my expertise, from sleek designs to robust
            solutions. Let&apos;s journey together into the heart of innovation!
          </p>
          {/* BUTTONS */}
          <div className="justify-center text-6 w-full flex gap-3 mb-5 font-medium md:justify-center lg:justify-start xl:justify-start">
            <Button
              onClick={() => handleNavigate("about")}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800"
            >
              Experience
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleNavigate("projects")}
              className="p-4 rounded-lg ring-1 ring-blue-400 bg-blue-400 text-black hover:bg-blue-600 hover:text-white"
            >
              Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavigate("contact")}
              className="p-4 rounded-lg ring-1 ring-white text-black bg-white hover:bg-gray-500"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
