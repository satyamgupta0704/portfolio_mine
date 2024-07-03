"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { LinkPreview } from "@/components/ui/link-preview";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import {
  SiGithub,
  SiLeetcode,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const projects = [
  {
    title: "Kharcha Management",
    description: "MERN based Expense Tracker WebApp",
    date: "2023",
    image: "/images/kharcha.ico",
  },
  {
    title: "PDF : Convo",
    description: "A PDF Conversation Application Using Streamlit and Langchain",
    date: "2024",
    image: "/images/langpdf.avif",
  },
  {
    title: "RoBo",
    description: "MERN based Robotics Education Platform",
    date: "2024",
    image: "/images/robos.png",
  },
  {
    title: "Portfolio",
    description: "Personal Portfolio using Next.Js",
    date: "2024",
    image: "/images/next.jpeg",
  },
];

const experience = [
  {
    title: "Web Developer | Intern",
    description: (
      <>
        <div>Dabotics India Pvt Ltd</div>
        <div className="text-sm">
          Successfully led projects to completion in a leadership role, notably contributing in the
          <br />
          overhaul of a company website during an Internship
        </div>
      </>
    ),
    date: "Aug'23 - Sept'23",
    image: "/images/dabotics.png",
  },
];

const education = [
  {
    title: "Bachelor of Engineering (CSE)",
    description: "Chandigarh University",
    date: "2021-2025",
    image: "/images/CU_LOGO.jpg",
  },
  {
    title: "High School (10+2)",
    description: "Sudhir Memorial Institute",
    date: "2018-2020",
    image: "/images/SMI.png",
  },
];

const skills = [
  { title: "C++", icon: <SiCplusplus className="h-12 w-12 text-blue-500" /> },
  { title: "Python", icon: <SiPython className="h-12 w-12 text-yellow-500" /> },
  { title: "JavaScript", icon: <SiJavascript className="h-12 w-12 text-yellow-300" /> },
  { title: "React", icon: <SiReact className="h-12 w-12 text-blue-400" /> },
  { title: "Node.js", icon: <SiNodedotjs className="h-12 w-12 text-green-500" /> },
  { title: "MongoDB", icon: <SiMongodb className="h-12 w-12 text-green-600" /> },
  { title: "Next.js", icon: <RiNextjsLine className="h-12 w-12 text-white" /> },
  { title: "GitHub", icon: <SiGithub className="h-12 w-12 text-white" /> },
  
];

const navbar = [
  { title: "Projects", link: "projects" },
  { title: "Skills", link: "skills" },
  { title: "Work Experience", link: "work" },
  { title: "Education", link: "education" },
];

export default function Home() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <div className="overflow-x-hidden">
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 2 }}
    className="relative min-h-screen w-full overflow-x-hidden"
  >
    <div className="absolute inset-0 z-[-10] h-full w-full items-center px-5 py-24 bg-slate-950">
    <div className="relative h-full w-full bg-slate-950">
  <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full" style={{ backgroundImage: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))' }}></div>
  <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full" style={{ backgroundImage: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))' }}></div>
</div>
    </div>

        <motion.div
          animate={isHidden ? "hidden" : "visible"}
          whileHover="visible"
          onFocusCapture={() => setIsHidden(false)}
          variants={{
            hidden: { y: "-90%" },
            visible: { y: "0%" },
          }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 z-10 md:flex w-full justify-center pt-3 hidden"
        >
          <div className="flex bg-white gap-x-4 p-4 items-center rounded-xl">
            {navbar.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className="border px-4 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                {item.title}
              </ScrollLink>
            ))}
          </div>
        </motion.div>

        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-20">
          <div className="md:flex md:gap-x-10 items-center md:pt-28">
            <Image
              src={"/images/mine4.jpeg"}
              alt="Satyam"
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4"
            />
            <div className="space-y-2">
              <motion.div
                style={{ paddingRight: "15px", display: "inline-block" }}
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 0 }}
                className="text-4xl my-4"
              >
                👋
              </motion.div>
              <h1 className="text-xl lg:text-4xl font-semibold text-white">
                <Typewriter
                  words={["Hi, I am Satyam! I build things for the web."]}
                  cursor
                />
              </h1>

              <p className="text-muted-foreground text-lg md:pr-8 text-white">
                Passionate Computer Science student showcasing expertise in Data Structures and
                Algorithms, along with proficiency in C/C++, Python, JavaScript, and Full-stack
                development with MERN. <br />
                Eager to apply analytical and technical skills in delivering impactful solutions as
                a Software Engineer.
              </p>
              <p className="text-muted-foreground text-lg">
                Check out my profiles{" "}
                <LinkPreview url="https://github.com/satyamgupta0704" className="font-bold">
                  <SiGithub className="h-6 w-6 inline text-green-500" />{" "}
                  <span className="text-green-500 underline">GitHub</span>
                </LinkPreview>{" "}
                <LinkPreview url="https://github.com/satyamgupta0704" className="font-bold">
                  <SiLeetcode className="h-6 w-6 inline text-yellow-500" />{" "}
                  <span className="text-yellow-500 underline">LeetCode</span>
                </LinkPreview>{" "}
              </p>

              <p className="text-muted-foreground text-lg">
                Feel free to reach out to me on{" "}
                <LinkPreview
                  url="https://www.linkedin.com/in/satyam-gupta-1a4b64228/"
                  className="font-bold"
                >
                  <PiLinkedinLogoFill className="h-6 w-6 inline text-sky-700" />{" "}
                  <span className="text-sky-700 underline">LinkedIn</span>
                </LinkPreview>{" "}
              </p>
            </div>
          </div>

          <Element
          name="projects"
          
          >
            <h2 className="text-xl pt-10 font-semibold text-white">Projects</h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border rounded-xl p-4 bg-white"
                >
                  <div className="md:flex items-center justify-between">
                    <div className="md:flex items-center gap-x-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="rounded-md w-16 h-16"
                      />

                      <div className="flex flex-col ">
                        <h2 className="text-md font-semibold ">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Element>

          <Element name="skills">
            <h2 className="text-xl pt-10 font-semibold text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {skills.map((skill) => (
                <div key={skill.title} className="flex flex-col items-center">
                  {skill.icon}
                  <p className="text-white mt-2">{skill.title}</p>
                </div>
              ))}
            </div>
          </Element>

          <Element name="work">
            <h2 className="text-xl pt-10 font-semibold text-white">Work Experience</h2>
            {experience.map((item) => (
              <div key={item.title} className="my-4">
                <div className="md:flex justify-between cursor-pointer items-center border rounded-2xl p-4 bg-white">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md w-20 p-2"
                    />
                    <div className="">
                      <h2 className="text-md font-semibold mt-4 md:mt-0">{item.title}</h2>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </Element>

          <Element name="education">
            <h2 className="text-xl pt-10 font-semibold text-white">Education</h2>
            {education.map((item) => (
              <div key={item.title} className="my-4">
                <div className="md:flex justify-between cursor-pointer items-center border rounded-2xl p-4 bg-white">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md w-20"
                    />
                    <div className="">
                      <h2 className="text-md font-semibold mt-4 md:mt-0">{item.title}</h2>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </Element>
        </div>
      </motion.div>
    </div>
  );
}

