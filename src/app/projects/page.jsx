"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { items } from "./projects";
import { useRouter } from "next/navigation";

const PortfolioPage = () => {
  const ref = useRef();

  const router = useRouter(); // Initialize the router

  const handleNavigate = () => {
    router.push("/contact"); // Navigate to /contact page
  };

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
                <div className="flex flex-col m-2 gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="hidden md:lg:xl:block relative w-100 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[350px]">
                    <Image src={`/${item.img}`} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  {/* Create Skills Used Section */}
                  <div className="flex flex-col gap-4 text-gray-700 ">
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
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <span>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-8xl">
            Do you have a project?
          </h1>
        </span>
        <div className="relative hover:cursor-pointer" onClick={handleNavigate}>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer
              </textPath>
            </text>
          </motion.svg>

          <div
            className="w-24 h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-10"
            style={{ pointerEvents: "auto" }} // Ensure the button is clickable
          >
            <Link href="/contact">
              {" "}
              <span>Hire Me</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
