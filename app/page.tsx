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
  SiFastapi,
  SiDocker,
  SiDatabricks,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { Bot, Cloud, Database, Workflow } from "lucide-react";

const stats = [
  { label: "Years in AI products", value: "2+" },
  { label: "Production LLM systems", value: "10+" },
  { label: "Finance & Agentic workflows", value: "5+" },
  { label: "LeetCode solved", value: "350+" },
];

const projects = [
  {
    title: "BuildKaro",
    description:
      "A split-panel GenAI app builder where users describe an app in natural language and receive a live code preview generated with Gemini API, with auth and session persistence powered by Supabase.",
    date: "2025",
    image: "/images/next.jpeg",
    demoLink: "https://github.com/satyamgupta0704/BuildKaro",
    tags: ["Next.js", "Gemini API", "Supabase"],
  },
  {
    title: "PDF Convo",
    description:
      "A retrieval-augmented document chat system that chunks large PDFs, embeds them using OpenAI embeddings, and answers grounded questions over the document corpus with FAISS-based semantic search.",
    date: "2024",
    image: "/images/langpdf.avif",
    demoLink: "https://github.com/satyamgupta0704/pdf-convo-langchain.git",
    tags: ["LangChain", "FAISS", "Streamlit"],
  },
  {
    title: "Finance & Risk Intelligence Platform",
    description:
      "Production-grade agentic RAG and NL-to-SQL platform for GSK finance analysts, routing queries through Databricks Genie and Azure AI Search over 40+ SAP finance tables and 100+ policy docs.",
    date: "2025 - Present",
    image: "/images/rupee.png",
    demoLink: "#",
    tags: ["LangGraph", "Azure AI Search", "Databricks"],
  },
];

const experience = [
  {
    title: "GenAI Engineer",
    company: "Cognizant Technology Solutions | GSK (Finance Risk & Management Controls)",
    description: [
      "Designed and shipped production agentic workflows for controls testing automation, where LLM agents interpret ServiceNow reviewer comments and route rejection cases to the correct rework path using LangGraph.",
      "Built an agentic RAG + NL-to-SQL platform on Azure Web Apps that enables finance analysts to self-serve controls, compliance, and risk data without writing SQL.",
      "Created Azure AI Search indexing and ETL pipelines over 100+ finance and compliance documents, reducing embedding time by 66% through semantic chunking and optimized vector indexing.",
      "Implemented observability and evaluation pipelines for faithfulness, relevance, and latency to reduce hallucinations in production GenAI systems.",
    ],
    date: "Mar 2025 - Present",
    image: "/images/CU_LOGO.jpg",
  },
  {
    title: "Software Developer Intern",
    company: "Dzylo (Virtuate Technologies)",
    description: [
      "Built REST APIs in Node.js and deployed event-driven microservices to capture user device metadata and support OTP-based authentication with AWS SES and DynamoDB.",
      "Developed a warranty tracking module to monitor product expiry and trigger automated service alerts, reducing manual follow-ups and improving support efficiency.",
    ],
    date: "Jul 2024 - Mar 2025",
    image: "/images/dabotics.png",
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    description: "Chandigarh University, Mohali, Punjab",
    date: "2021 - 2025",
    image: "/images/CU_LOGO.jpg",
    meta: "CGPA: 8.21/10 | 350+ LeetCode problems | Top 15.47% globally",
  },
  {
    title: "Higher Secondary Education",
    description: "Sudhir Memorial Institute",
    date: "2018 - 2020",
    image: "/images/SMI.png",
    meta: "Science stream with strong academic grounding in mathematics and computing.",
  },
];

const skills = [
  { title: "Python", icon: <SiPython className="h-10 w-10 text-yellow-500" /> },
  { title: "JavaScript", icon: <SiJavascript className="h-10 w-10 text-yellow-300" /> },
  { title: "C/C++", icon: <SiCplusplus className="h-10 w-10 text-blue-500" /> },
  { title: "React", icon: <SiReact className="h-10 w-10 text-cyan-400" /> },
  { title: "Next.js", icon: <RiNextjsLine className="h-10 w-10 text-white" /> },
  { title: "Node.js", icon: <SiNodedotjs className="h-10 w-10 text-green-500" /> },
  { title: "FastAPI", icon: <SiFastapi className="h-10 w-10 text-teal-400" /> },
  { title: "LangChain", icon: <Bot className="h-10 w-10 text-violet-400" /> },
  { title: "LangGraph", icon: <Bot className="h-10 w-10 text-emerald-400" /> },
  { title: "Azure AI Search", icon: <Cloud className="h-10 w-10 text-sky-500" /> },
  { title: "Databricks", icon: <SiDatabricks className="h-10 w-10 text-blue-600" /> },
  { title: "SQL/NoSQL", icon: <Database className="h-10 w-10 text-sky-500" /> },
  { title: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-green-600" /> },
  { title: "Supabase", icon: <SiSupabase className="h-10 w-10 text-emerald-500" /> },
  { title: "Docker", icon: <SiDocker className="h-10 w-10 text-sky-400" /> },
  { title: "GitHub", icon: <SiGithub className="h-10 w-10 text-white" /> },
  { title: "Workflow", icon: <Workflow className="h-10 w-10 text-yellow-500" /> },
  { title: "ETL", icon: <SiGit className="h-10 w-10 text-orange-500" /> },
];

const navbar = [
  { title: "About", link: "about" },
  { title: "Experience", link: "experience" },
  { title: "Projects", link: "projects" },
  { title: "Skills", link: "skills" },
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
    <div className="overflow-x-hidden bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen w-full overflow-x-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-slate-950" />
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.2),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.15),_transparent_30%)]" />

        <motion.div
          animate={isHidden ? "hidden" : "visible"}
          whileHover="visible"
          onFocusCapture={() => setIsHidden(false)}
          variants={{
            hidden: { y: "-110%" },
            visible: { y: "0%" },
          }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 z-20 hidden w-full justify-center pt-3 md:flex"
        >
          <div className="flex items-center gap-x-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md shadow-lg shadow-slate-900/30">
            {navbar.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className="cursor-pointer rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                {item.title}
              </ScrollLink>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 lg:px-12">
          <section className="pt-16 md:pt-20">
            <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
              <Image
                src="/images/mine6.jpeg"
                alt="Satyam Gupta"
                width={180}
                height={180}
                className="h-36 w-36 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-indigo-500/10 md:h-44 md:w-44"
              />

              <div className="space-y-5">
                <motion.div
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                  className="inline-block text-4xl"
                >
                  👋
                </motion.div>

                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  <Typewriter words={["Hi, I’m Satyam Gupta.", "I build AI systems for real-world impact."]} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={40} delaySpeed={1200} />
                </h1>

                <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                  GenAI Engineer with industrial experience building production-grade LLM systems in the financial and regulatory sector. I design agentic workflows, intelligent SQL agents, and autonomous controls-testing automation that help teams move faster while staying aligned with governance and compliance.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                  <LinkPreview url="https://github.com/satyamgupta0704" className="font-bold">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10">
                      <SiGithub className="h-4 w-4 text-white" />
                      GitHub
                    </span>
                  </LinkPreview>

                  <LinkPreview url="https://linkedin.com/in/satyam-gupta-1a4b64228" className="font-bold">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sky-200 transition hover:bg-sky-500/20">
                      <PiLinkedinLogoFill className="h-4 w-4" />
                      LinkedIn
                    </span>
                  </LinkPreview>

                  <LinkPreview url="https://leetcode.com/guptasatyam0704/" className="font-bold">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-2 text-yellow-200 transition hover:bg-yellow-500/20">
                      <SiLeetcode className="h-4 w-4" />
                      LeetCode
                    </span>
                  </LinkPreview>

                  <a
                    href="https://drive.google.com/file/d/1lTNYWiSWZRw3zGR2OHW0h9sNhUY2JiNN/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-indigo-200 transition hover:bg-indigo-500/20"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <Element name="about" className="mt-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/20">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                About Me
              </div>
              <p className="text-lg leading-8 text-slate-200">
                I’m a software engineer who enjoys turning complex business problems into reliable, user-friendly AI products. My work sits at the intersection of GenAI, backend engineering, and product thinking — building systems that translate real-world workflows into autonomous, measurable outcomes.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                At GSK, I’ve shipped live production systems that allow finance analysts to ask questions in natural language, get trusted answers grounded in enterprise data, and automate repetitive compliance-driven workflows without writing SQL. I’m especially motivated by building AI systems that are useful, interpretable, and aligned with governance, ethics, and operational impact.
              </p>
            </div>
          </Element>

          <Element name="experience" className="mt-20">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Experience
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                      {item.date}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200 md:text-base">
                    {item.description.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Element>

          <Element name="projects" className="mt-20">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Projects
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                    <Image src={project.image} alt={project.title} width={600} height={320} className="h-44 w-full object-cover" />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.demoLink !== "#" ? (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-sm text-cyan-300 underline underline-offset-4">
                        Demo
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">Private</span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 md:text-[15px]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-slate-900 px-2.5 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Element>

          <Element name="skills" className="mt-20">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Skills
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                  <div className="flex justify-center">{skill.icon}</div>
                  <p className="mt-3 text-sm font-medium text-slate-200">{skill.title}</p>
                </div>
              ))}
            </div>
          </Element>

          <Element name="education" className="mt-20">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Education & Certifications
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.meta}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-slate-100">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Certification</div>
              <p className="mt-2 text-lg font-medium">Databricks Certified Generative AI Engineer Associate</p>
            </div>
          </Element>
        </div>
      </motion.div>
    </div>
  );
}
