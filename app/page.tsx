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
  SiFastapi,
  SiDocker,
  SiDatabricks,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

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
    demoLink: "https://github.com/satyamgupta0704/BuildKaro",
    tags: ["Next.js", "Gemini API", "Supabase"],
  },
  {
    title: "PDF Convo",
    description:
      "A retrieval-augmented document chat system that chunks large PDFs, embeds them using OpenAI embeddings, and answers grounded questions over the document corpus with FAISS-based semantic search.",
    date: "2024",
    demoLink: "https://github.com/satyamgupta0704/pdf-convo-langchain.git",
    tags: ["LangChain", "FAISS", "Streamlit"],
  },
  {
    title: "Finance & Risk Intelligence Platform",
    description:
      "Production-grade agentic RAG and NL-to-SQL platform for GSK finance analysts, routing queries through Databricks Genie and Azure AI Search over 40+ SAP finance tables and 100+ policy docs.",
    date: "2025 - Present",
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
  },
  {
    title: "Software Developer Intern",
    company: "Dzylo (Virtuate Technologies)",
    description: [
      "Built REST APIs in Node.js and deployed event-driven microservices to capture user device metadata and support OTP-based authentication with AWS SES and DynamoDB.",
      "Developed a warranty tracking module to monitor product expiry and trigger automated service alerts, reducing manual follow-ups and improving support efficiency.",
    ],
    date: "Jul 2024 - Mar 2025",
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    description: "Chandigarh University, Mohali, Punjab",
    date: "2021 - 2025",
    meta: "CGPA: 8.21/10 | 350+ LeetCode problems | Top 15.47% globally",
  },
  {
    title: "Higher Secondary Education",
    description: "Sudhir Memorial Institute",
    date: "2018 - 2020",
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

const skillGroups = [
  {
    title: "GenAI & orchestration",
    description: "Building reliable agentic systems around models, tools, and evaluation.",
    icon: <BrainCircuit className="h-5 w-5 text-violet-300" />,
    skills: ["LLM applications", "LangChain", "LangGraph", "Agentic RAG", "Prompt engineering"],
  },
  {
    title: "Data & retrieval",
    description: "Grounding answers in structured and unstructured enterprise data.",
    icon: <Database className="h-5 w-5 text-cyan-300" />,
    skills: ["NL-to-SQL", "Azure AI Search", "FAISS", "SQL / NoSQL", "ETL pipelines"],
  },
  {
    title: "Cloud & product engineering",
    description: "Shipping maintainable products from API to deployment and observability.",
    icon: <Cloud className="h-5 w-5 text-sky-300" />,
    skills: ["Python", "FastAPI", "Node.js", "Next.js", "Azure", "Docker"],
  },
];

const navbar = [
  { title: "About", link: "about" },
  { title: "Experience", link: "experience" },
  { title: "Projects", link: "projects" },
  { title: "Skills", link: "skills" },
  { title: "Education", link: "education" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
    <div className="relative overflow-x-hidden bg-[#050816] text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen w-full overflow-x-hidden"
      >
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
          <div className="flex items-center gap-x-3 rounded-2xl border border-white/10 bg-slate-950/70 p-3 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            {navbar.map((item) => (
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className="cursor-pointer rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/5 hover:text-white"
              >
                {item.title}
              </ScrollLink>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 lg:px-12">
          <section className="pt-16 md:pt-24">
            <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-transparent blur-2xl" />
                <Image
                  src="/images/mine6.jpeg"
                  alt="Satyam Gupta"
                  width={180}
                  height={180}
                  className="relative h-36 w-36 rounded-[28px] border border-white/10 object-cover shadow-2xl shadow-violet-900/30 md:h-44 md:w-44"
                />
              </motion.div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  GenAI Engineer · building responsible AI products
                </div>

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
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/30 hover:bg-white/10">
                      <SiGithub className="h-4 w-4 text-white" />
                      GitHub
                    </span>
                  </LinkPreview>

                  <LinkPreview url="https://linkedin.com/in/satyam-gupta-1a4b64228" className="font-bold">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sky-200 transition hover:border-sky-400/50 hover:bg-sky-500/20">
                      <PiLinkedinLogoFill className="h-4 w-4" />
                      LinkedIn
                    </span>
                  </LinkPreview>

                  <LinkPreview url="https://leetcode.com/guptasatyam0704/" className="font-bold">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-2 text-yellow-200 transition hover:border-yellow-400/60 hover:bg-yellow-500/20">
                      <SiLeetcode className="h-4 w-4" />
                      LeetCode
                    </span>
                  </LinkPreview>

                  <a
                    href="https://drive.google.com/file/d/1lTNYWiSWZRw3zGR2OHW0h9sNhUY2JiNN/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-indigo-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/20"
                  >
                    Resume
                  </a>
                </div>

                <ScrollLink
                  to="projects"
                  smooth
                  duration={500}
                  className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white"
                >
                  Explore selected work
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </ScrollLink>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-slate-950/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          <Element name="about" className="mt-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="grid gap-6 lg:grid-cols-[1.35fr,0.65fr]"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/20">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  About me
                </div>
                <p className="text-lg leading-8 text-slate-200">
                  I’m a software engineer who enjoys turning complex business problems into reliable, user-friendly AI products. My work sits at the intersection of GenAI, backend engineering, and product thinking — building systems that translate real-world workflows into autonomous, measurable outcomes.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  At GSK, I’ve shipped live production systems that allow finance analysts to ask questions in natural language, get trusted answers grounded in enterprise data, and automate repetitive compliance-driven workflows without writing SQL.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[28px] border border-violet-400/20 bg-violet-400/10 p-6 shadow-lg shadow-violet-950/20">
                  <ShieldCheck className="h-6 w-6 text-violet-200" />
                  <h3 className="mt-5 font-semibold text-white">Useful by design</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">AI systems should be grounded, observable, and aligned with governance.</p>
                </div>
                <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-lg shadow-cyan-950/20">
                  <Workflow className="h-6 w-6 text-cyan-200" />
                  <h3 className="mt-5 font-semibold text-white">From workflow to workflow</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">I enjoy translating messy business processes into robust automation and safe AI experiences.</p>
                </div>
              </div>
            </motion.div>
          </Element>

          <Element name="experience" className="mt-24">
            <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Experience
            </div>

            <div className="relative space-y-8 pl-8">
              <div className="absolute bottom-4 left-[11px] top-2 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="group relative rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <span className="absolute -left-[29px] top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#050816] bg-cyan-300 shadow-lg shadow-cyan-300/50 transition duration-300 group-hover:scale-125 group-hover:bg-white" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{exp.date}</div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{exp.title}</h3>
                      <p className="mt-2 text-base text-cyan-200">{exp.company}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.description.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300 md:text-[15px]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Element>

          <Element name="projects" className="mt-24">
            <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Featured projects
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))] p-4 shadow-2xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.35),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.25),_transparent_40%)]" />
                    <div className="relative flex h-48 items-center justify-center">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase shadow-lg shadow-cyan-500/10">
                        {project.title}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.date}</div>
                    {project.demoLink !== "#" ? (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-cyan-300 transition hover:text-cyan-200">
                        View <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">Private</span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 md:text-[15px]">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Element>

          <Element name="skills" className="mt-20">
            <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Skills
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-slate-950/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2">{group.icon}</div>
                    <h3 className="font-semibold text-white">{group.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              {skills.map((skill) => (
                <span key={skill.title} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                  <span className="scale-50">{skill.icon}</span>
                  {skill.title}
                </span>
              ))}
            </div>
          </Element>

          <Element name="education" className="mt-20">
            <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Education & certifications
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-slate-950/20">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.meta}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-cyan-500/20 bg-cyan-500/10 p-5 text-slate-100 shadow-lg shadow-cyan-500/10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Certification</div>
              <p className="mt-2 text-lg font-medium">Databricks Certified Generative AI Engineer Associate</p>
            </div>
          </Element>

          <motion.section
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="mt-24 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.12),rgba(15,23,42,0.95))] p-8 md:p-10"
          >
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Let’s build something useful</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Have a workflow that could be smarter?</h2>
              <p className="mt-4 leading-7 text-slate-300">I’m always interested in conversations about GenAI products, agentic systems, and engineering problems with real-world impact.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:satyamgupta0704@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a href="https://github.com/satyamgupta0704" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com/in/satyam-gupta-1a4b64228" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.section>

          <footer className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Satyam Gupta</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Built with Next.js, Tailwind & Framer Motion</span>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}
