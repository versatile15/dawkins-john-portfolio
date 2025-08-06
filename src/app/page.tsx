'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, ExternalLink, Award, UserCheck, BookOpen, Code2, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "@/components/DarkModeToggle";

const projects = [
  {
    title: "Bitwise Web & Mobile Portal",
    stack: "React, Next.js, React Native, Node.js, Go, AWS, Ethers.js, GPT-4",
    summary: "A cross-platform app and web portal for institutional/retail crypto investors. Real-time analytics, blockchain data, mobile wallet, and AI chatbot support.",
    details: [
      "Architected and built both investor analytics web portal and mobile app.",
      "Designed mobile-first dashboards, push notifications, and Face/Touch ID login.",
      "Integrated Ethers.js and Solidity smart contract data for real-time on-chain analytics.",
      "Built AI-powered chatbot (OpenAI GPT-4, LangChain) and automated support flows.",
      "Drove CI/CD pipeline automation for both web and mobile (Expo, Fastlane, Docker, GitHub Actions)."
    ]
  },
  {
    title: "Cleo AI Apps",
    stack: "React Native, Node.js, Python, OpenAI API, Hugging Face",
    summary: "Conversational mobile budgeting, chatbot, push notifications, secure auth. Scaled to millions of users.",
    details: [
      "Led cross-platform development of Cleo's React Native apps (iOS/Android), enabling 3M+ users.",
      "Integrated OpenAI and Hugging Face NLP for AI-powered chat and personalized finance insights.",
      "Built secure authentication, deep linking, and mobile notifications.",
      "Ensured seamless web-to-mobile handoff for onboarding and user support."
    ]
  },
  {
    title: "Unqork No-Code Platform",
    stack: "Vue.js, TypeScript, Node.js, Django, .NET Core",
    summary: "Enterprise no-code workflows and admin apps—mobile-optimized, API-powered, supporting major finance/insurance clients.",
    details: [
      "Developed low-code application builder modules with Vue.js, TypeScript, Node.js.",
      "Integrated Salesforce, Stripe, .NET Core, and legacy systems.",
      "Migrated WordPress content to a custom headless CMS.",
      "Led internal API design and documentation, mentored junior devs."
    ]
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  type Project = typeof projects[number];
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleOpenModal = (project: any) => {
    setModalProject(project);
    setOpen(true);
  };

  return (
    <main className="bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-gray-950 min-h-screen py-10 px-2 md:px-0 transition-colors duration-300">
      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <header className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-700 dark:text-cyan-400 text-center drop-shadow-lg"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            >
              Dawkins John Tyler
            </motion.h1>
            <DarkModeToggle />
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-cyan-200 mb-3 text-center">
            Senior Full Stack Engineer <span className="text-orange-500 dark:text-orange-400">| U.S. Military Veteran</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center items-center mb-2">
            <a href="mailto:johntylerdawkins@gmail.com" className="hover:underline hover:text-orange-500 dark:hover:text-cyan-300 flex items-center gap-1">
              <Mail size={18} /> Email
            </a>
            <a href="https://linkedin.com/in/john-tyler-work" className="hover:text-orange-500 dark:hover:text-cyan-300 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/johnman" className="hover:text-orange-500 dark:hover:text-cyan-300 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href="tel:+12345678901" className="hover:underline hover:text-orange-500 dark:hover:text-cyan-300 flex items-center gap-1">
              <Phone size={18} /> +1 (385) 722-5044
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">TEMPE, AZ, United States</p>
        </header>

        {/* About Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
            <CardContent className="p-6 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="text-blue-600 dark:text-cyan-300" />
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">About Me</h3>
              </div>
              <p>
                I’m a senior full stack and mobile engineer with a decade of experience delivering scalable SaaS, fintech, AI/LLM, and blockchain products. My passion is solving complex business problems with modern tech—whether for web, mobile, or cross-platform. As a U.S. military veteran, I bring technical rigor, team leadership, and composure under pressure to every project.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
            <CardContent className="p-6 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="text-orange-500 dark:text-cyan-300" />
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Core Skills</h3>
              </div>
              <ul className="list-disc ml-6 grid grid-cols-1 md:grid-cols-2 gap-x-10">
                <li><b>Web & Mobile:</b> React, Next.js, React Native, Vue.js, Angular, Svelte, TypeScript, JavaScript, TailwindCSS</li>
                <li><b>Backend:</b> Node.js, Express, Python (Django/Flask/FastAPI), Go, Java (Spring Boot), C#/.NET Core, PHP (Laravel, WordPress), Rust</li>
                <li><b>DevOps/Cloud:</b> AWS, Azure, GCP, Docker, Kubernetes, CI/CD, PostgreSQL, MySQL, MongoDB, Redis</li>
                <li><b>AI/LLM:</b> OpenAI API (GPT-4), Hugging Face, LangChain, Pinecone</li>
                <li><b>Web3/Blockchain:</b> Solidity, Ethereum, Ethers.js, Polygon, Mobile Wallet Integration</li>
                <li><b>Other:</b> REST, GraphQL, Microservices, TDD, Agile, Security, Mentoring</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
            <CardContent className="p-6 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-orange-500 dark:text-cyan-300" />
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Featured Projects</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                  <motion.div
                    key={proj.title}
                    className="mb-4"
                    whileHover={{ scale: 1.05, boxShadow: "0 6px 32px rgba(62,247,192,0.18)" }}
                  >
                    <Card className="border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/95 dark:bg-gray-950 dark:shadow-lg transition-colors"
                      onClick={() => handleOpenModal(proj)}
                    >
                      <CardContent className="p-5 text-gray-900 dark:text-white">
                        <div className="text-lg font-semibold mb-1 text-blue-700 dark:text-cyan-200">{proj.title}</div>
                        <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">{proj.stack}</div>
                        <div className="text-gray-700 dark:text-gray-100 text-sm">{proj.summary}</div>
                        <Button size="sm" className="mt-3 bg-cyan-400 dark:bg-cyan-400 text-black dark:text-white font-bold hover:bg-orange-500 dark:hover:bg-orange-400">View Details</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              {/* Modal for Project Details */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-lg bg-white/95 dark:bg-gray-900 border-cyan-400 dark:border-cyan-400 rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-blue-700 dark:text-cyan-200">{modalProject?.title}</DialogTitle>
                    <DialogDescription className="text-orange-500 dark:text-cyan-200 mb-2">
                      {modalProject?.stack}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mb-2 text-gray-700 dark:text-white">{modalProject?.summary}</div>
                  <ul className="list-disc ml-6 mb-3 text-gray-800 dark:text-cyan-300">
                    {modalProject?.details?.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:bg-orange-400 dark:hover:text-black">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
            <CardContent className="p-6 text-gray-900 dark:text-white">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-orange-500 dark:text-cyan-300" />
                <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Professional Experience</h3>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-cyan-200">Bitwise Asset Management <span className="font-normal text-gray-500 dark:text-gray-400">2022–Present</span></h4>
                <div className="italic text-gray-500 dark:text-gray-400 mb-1">Senior Full Stack Engineer, San Francisco, CA</div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-white">
                  <li>Led cross-platform web and mobile builds using React/Next.js and React Native.</li>
                  <li>Integrated blockchain, AI, and cloud infrastructure at scale.</li>
                  <li>Mentored engineers, delivered features with 99.99% uptime.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-cyan-200">Cleo AI <span className="font-normal text-gray-500 dark:text-gray-400">2020–2022</span></h4>
                <div className="italic text-gray-500 dark:text-gray-400 mb-1">Lead Full Stack Engineer, Remote</div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-white">
                  <li>Engineered web and mobile apps (Angular, Vue.js, Java), microservices, and LLM integrations (OpenAI/Hugging Face).</li>
                  <li>Managed team of 10+ engineers, drove product and mobile roadmap.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-cyan-200">Unqork <span className="font-normal text-gray-500 dark:text-gray-400">2018–2020</span></h4>
                <div className="italic text-gray-500 dark:text-gray-400 mb-1">Full Stack Developer, New York, NY</div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-white">
                  <li>Built no-code platform components, mobile-friendly dashboards, and robust API integrations.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-blue-700 dark:text-cyan-200">Vultr <span className="font-normal text-gray-500 dark:text-gray-400">2016–2018</span></h4>
                <div className="italic text-gray-500 dark:text-gray-400 mb-1">Software Engineer, Remote</div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-white">
                  <li>Developed cloud dashboard and mobile web portal, automated cloud infrastructure (Go, Node.js, .NET Core).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-blue-700 dark:text-cyan-200">StackCommerce <span className="font-normal text-gray-500 dark:text-gray-400">2016</span></h4>
                <div className="italic text-gray-500 dark:text-gray-400 mb-1">Web Developer, Los Angeles, CA</div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-white">
                  <li>Built campaign analytics, mobile-optimized storefronts, and WordPress plugins.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Military/Education/Certs */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
              <CardContent className="p-6 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck className="text-orange-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Military Service</h3>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 dark:text-white">United States Armed Forces</span>
                  <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">IT Specialist, 2009–2012 (Honorably Discharged)</span>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-cyan-200">
                    <li>Managed secure networks, led technical teams, supported mobile comms.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
              <CardContent className="p-6 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="text-orange-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Education</h3>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-white">B.Sc. Computer Science</div>
                  <div className="text-gray-500 dark:text-gray-400">UC Santa Barbara (2012–2016)</div>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
              <CardContent className="p-6 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-orange-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Certifications</h3>
                </div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-cyan-200">
                  <li>AWS Solutions Architect – Associate (2020)</li>
                  <li>Azure Developer Associate (2019)</li>
                  <li>Blockchain Fundamentals, Coursera (2021)</li>
                  <li>Prompt Engineering for LLMs, DeepLearning.AI (2024)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Community/References */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
              <CardContent className="p-6 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="text-orange-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">Community & Open Source</h3>
                </div>
                <ul className="list-disc ml-6 text-gray-700 dark:text-cyan-200">
                  <li>Speaker: React LA, React Native EU, Node.js SF, Veteran Tech Meetups</li>
                  <li>Contributor: OpenAI Community, Web3.js, Cleo Open Source, Expo</li>
                  <li>Mentor: Women Who Code, Vets Who Code</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-8 border border-gray-200 dark:border-cyan-700 rounded-2xl shadow-soft bg-white/90 dark:bg-gray-950 dark:shadow-lg transition-colors">
              <CardContent className="p-6 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck className="text-orange-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-300">References</h3>
                </div>
                <p className="text-gray-700 dark:text-white">Available upon request</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
