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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2 ">
          <Image 
            src="/arab-hero.png" 
            alt="" 
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" 
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
            <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                <Link href="/projects">View Projects</Link>
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
      </div> 
    </motion.div>
  )
};

export default Homepage;
