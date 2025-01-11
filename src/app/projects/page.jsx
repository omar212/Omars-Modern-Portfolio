"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { items } from "./projects";
import { useRouter } from "next/navigation";
import { HireMeButton } from "components/Animations/HireMeButton/HireMeButton";
import DecryptedText from "components/Animations/DecryptedText/DecryptedText";

const jobTitles = [
  "Sr. Full Stack Developer",
  "Sr. Software Engineer",
  "Frontend Developer",
  "Web Developer",
  "UI Designer",
];

const PortfolioPage = () => {
  const ref = useRef();
  const ctaRef = useRef();
  // Adjusted threshold to trigger earlier and removed margin
  const isInView = useInView(ctaRef, {
    once: true,
    threshold: 0.1,
  });
  const [currentJobTitle, setCurrentJobTitle] = useState(0);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentJobTitle((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const skillImages = {
    React: "/react.png",
    TypeScript: "/typescript.png",
    Tailwind: "/tailwind.png",
    Python: "/python.png",
    OpenAI: "/openai.png",
    "Material UI": "/material-ui.png",
    EmailJS: "/envelope.png",
    MongoDB: "/mongo-db.png",
    CSS: "/css.png",
    Firebase: "/firebase.png",
    "Next.js": "/next-js.png",
    JSON: "/json.png",
    "Snapchat Lens Studio": "/snapchat.png",
    Github: "/github.png",
    "React Native": "/react-native.png",
    Expo: "/expo-cli.png",
  };

  const doesSkillImageExist = (skill) => {
    return Object.prototype.hasOwnProperty.call(skillImages, skill);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center">
          <span className="text-4xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xl:text-8xl">
            Personal Projects
          </span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center" />
            <div className="h-screen w-screen flex items-center justify-center" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col m-2 gap-8">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="hidden md:lg:xl:block relative w-100 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[350px]">
                    <Image src={`/${item.img}`} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex flex-col gap-4 text-gray-700">
                    <span className="font-bold">Skills Used:</span>
                    <div className="flex flex-col sm:md:lg:xl:flex-row gap-4">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="flex gap-2 bg-gray-300 p-2 rounded justify-center items-center"
                        >
                          {doesSkillImageExist(skill) && (
                            <Image
                              src={`${skillImages[skill]}`}
                              alt=""
                              width={40}
                              height={40}
                              className=""
                            />
                          )}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold mb-8 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section with improved centering and animations */}
      <div
        ref={ctaRef}
        className="w-full min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center"
          >
            DO YOU HAVE A PROJECT?
          </motion.h1>

          <div className="flex flex-col items-center space-y-8 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center"
            >
              DO YOU NEED A
            </motion.h2>

            <div className="h-16 md:h-20 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentJobTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
                >
                  {jobTitles[currentJobTitle]}?
                </motion.h2>
              </AnimatePresence>
            </div>

            <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
              THEN LET&apos;S{" "}
            </span>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-2xl lg:text-3xl font-extrabold text-center flex flex-wrap lg:flex-1 items-center justify-center gap-2"
            >
              <DecryptedText
                text="TRANSFORM"
                animateOn="view"
                speed={100}
                maxIterations={35}
                className="text-purple-400 text-4xl md:text-5xl lg:text-6xl"
                revealDirection="center"
              />{" "}
              your{" "}
              <DecryptedText
                text="VISION"
                animateOn="view"
                speed={200}
                maxIterations={35}
                className="text-purple-400 text-4xl md:text-5xl lg:text-6xl"
                revealDirection="center"
              />{" "}
              into{" "}
              <DecryptedText
                text="REALITY!"
                animateOn="view"
                speed={300}
                maxIterations={35}
                className="text-purple-400 text-4xl md:text-5xl lg:text-6xl"
                revealDirection="center"
              />
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full"
          >
            <HireMeButton onClick={handleNavigate} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
