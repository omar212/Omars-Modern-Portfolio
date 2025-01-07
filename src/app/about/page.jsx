"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { jobs } from "./jobs";
import Link from "next/link";
import JobExperience from "components/JobExperience";
import skills from "./skills";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isBiographyRefInView = useInView(containerRef, { margin: "-100px" });

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
      <div className="h-full w-full" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-8 w-full flex flex-col gap-10">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 items-center"
            >
              <Image
                src="/profile.jpg"
                alt=""
                width={150}
                height={150}
                className="w-28 h-28 rounded-full object-cover"
              />
              {/* BIOGRAPHY TITLE */}
              <h1 className="font-extrabold text-3xl">BIOGRAPHY</h1>
            </motion.div>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I&apos;m Omar Elnagdy, a passionate Full Stack Developer based in
              Staten Island, NY. With a Bachelor of Science in Computer Science
              from The City College of New York, I bring expertise in core
              languages like JavaScript, Java, and Python, as well as
              proficiency in web development technologies such as React,
              TypeScript, and Next.js. uring my tenure at Doran Jones and IBM, I
              spearheaded the development of innovative solutions, driving
              significant reductions in workload and boosting productivity. My
              projects, including the ChatGPT AI Voice Chatbot and My Blog App,
              showcase my creativity and technical acumen. I thrive in
              collaborative environments, possess strong communication skills,
              and am committed to delivering exceptional results.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              &quot;Innovating with code, I craft user-centric experiences that
              make a difference.&quot;
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Image src="/signature.png" alt="" width={185} height={77} />
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <div className="flex flex-col gap-4 items-center">
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-extrabold text-3xl"
              >
                SKILLS
              </motion.h1>
            </div>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isSkillRefInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: index * 0.1, // Delay for staggered effect
                            duration: 0.3, // Duration for smooth animation
                          },
                        }
                      : {}
                  }
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="
              h-100 
              flex 
              flex-col 
              gap-10 
              justify-center 
              "
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 items-center"
            >
              <div className="flex flex-col gap-2 items-center">
                <h1 className="font-extrabold text-2xl">WORK EXPERIENCE</h1>

                <span className="text-md italic">
                  [{jobs.length + 1}+ years]
                </span>
              </div>
              <span className="text-muted-foreground text-sm">
                My professional journey and contributions
              </span>
            </motion.div>

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
              <JobExperience jobs={jobs} />
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
      </div>
    </motion.div>
  );
};

export default About;
