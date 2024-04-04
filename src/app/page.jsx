"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-4">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2 ">
          <Image 
            src="/homeprofile.png" 
            alt="" 
            width="0"
            height="0"
            sizes="100vw"
            className="w-fit h-auto ml-auto mr-[-17px] md:lg:xl:m-auto" 
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Coding Journeys, Building Future Foundations.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Discover the essence of my career through my projects. 
              Dive in and explore the breadth of my expertise, from sleek designs to robust solutions. Let&apos;s journey together into the heart of innovation!
            </p>
            {/* BUTTONS */}
            <div className="
              justify-center
              text-6 
              w-full 
              flex 
              gap-3 
              mb-5
              font-medium
              
              md:justify-start
              lg:justify-start
              xl:justify-start
              ">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800">
                <Link href="/about">Experience</Link>
              </button>
              <button className="p-4 rounded-lg ring-1 ring-blue-400 bg-blue-400 text-black hover:bg-blue-600 hover:text-white">
                <Link href="/projects">Projects</Link>
              </button>
              <button className="p-4 rounded-lg ring-1 ring-white bg-white hover:bg-gray-200">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
      </div> 
    </motion.div>
  )
};

export default Homepage;
