"use client";
import Brain from "@/components/brain";
import Card from "@/components/card";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { jobs } from "./jobs";
import Link from "next/link";
import JobSwiper from "@/components/jobSwiper";
import skills from "./skills";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full w-full overflow-scroll " ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 w-full sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 md:w-full lg:gap-48 xl:gap-24 lg:w-2/3 lg:pr-0 xl:w-full">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpg"
              alt=""
              width={150}
              height={150}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I&apos;m Omar Elnagdy, a passionate Full Stack Developer based in Staten Island, NY. 
              With a Bachelor of Science in Computer Science from The City College of New York, I bring expertise in core languages like JavaScript, Java, and Python, as well as proficiency in web development technologies such as React, TypeScript, and Next.js. 
              uring my tenure at Doran Jones and IBM, I spearheaded the development of innovative solutions, driving significant reductions in workload and boosting productivity. 
              My projects, including the ChatGPT AI Voice Chatbot and My Blog App, showcase my creativity and technical acumen. 
              I thrive in collaborative environments, possess strong communication skills, and am committed to delivering exceptional results.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              &quot;Innovating with code, I craft user-centric experiences that make a difference.&quot;
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
                <Image src="/signature.png" alt="" width={185} height={77} />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="
              h-100
              border-2  
              flex 
              flex-col 
              gap-10 
              justify-center 
              "
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="
                flex 
                flex-col 
                gap-8
                h-100vh
                w-full
                justify-between

                sm:flex-row 
                
                md:flex-row"
            >
              <JobSwiper />
            </motion.div>
            
            {/* Check Out My Projects that I don't get paid for :) */}
            <motion.div 
                initial={{ x: "-600px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
            >
              <Link
                href="/projects"
                className="
                  flex
                  justify-center
                  p-3 
                  text-center 
                  text-white 
                  rounded-full
                  bg-gradient-to-r from-blue-300 to-blue-500
                  font-semi-bold

                  md:flex
                  md:justify-center
                  md:align-center
                  md:m-auto
                  md:w-1/2
                  "
              >
                Check Out My Personal Projects 
              </Link>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        {/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div> */}
      </div>
      <footer className="footer">
        © 2024 Omar Elnagdy
        <p className="power">Powered by NextJS</p>
      </footer> 
    </motion.div>
  );
};

export default AboutPage;