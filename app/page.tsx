"use client"

import { useRef } from "react"
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { getProjects } from "@/utils/csv-parser"
import { getCourses } from "@/utils/csv-parser"

export default function Home() {
  const projects = getProjects().slice(0, 3) // Get only the first 3 projects for the homepage

  const courses = getCourses()

  // Refs for scroll animations
  const containerRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.7)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Red accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>

        {/* Hero Content */}
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-red-600">Divij</span> Agarwal
          </h1>
          <p className="text-xl text-gray-400 mb-8">First-Year Computer Science Student</p>
          <div className="absolute bottom-8 animate-bounce z-20">
            <ChevronDown className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-red-600">Divij</span> Agarwal
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">First-Year Computer Science Student</h2>
            <div className="max-w-2xl">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Passionate about technology and learning. Currently exploring web development, data structures, and
                algorithms while pursuing my undergraduate degree.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-none px-6 py-6">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600/10 rounded-none px-6 py-6"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 w-4 h-4 bg-red-600 rounded-full"></div>
        <div className="absolute left-1/3 bottom-1/4 w-2 h-2 bg-red-600 rounded-full"></div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-6 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 inline-block relative">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-600"></span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a first-year undergraduate student at University of Wisconsin-Madison studying Computer Science.
                  My journey in technology began with building simple websites, and I've been passionate about creating
                  digital experiences ever since.
                </p>
                <p>
                  Currently, I'm focused on building a strong foundation in programming fundamentals, data structures,
                  and algorithms. I'm also exploring web development and machine learning.
                </p>
                <p>
                  Outside of academics, I enjoy...
                </p>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-600"></div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="mb-6">
                  <div className="text-lg font-medium">Bachelor of Science in Computer Science</div>
                  <div className="text-red-600">University of Wisconsin-Madison</div>
                  <div className="text-gray-500">Expected Graduation: 2028</div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
                <ul className="space-y-2 text-gray-300">
                  
                  {courses.map((course) => (
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">▹</span>
                    {course.name}
                  </li>
                  )
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-600"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  githubLink={project.githubLink}
                  imageUrl={project.imageUrl}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 rounded-none px-6 py-6"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-32 px-6 bg-black/80 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              Skills
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-600"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl">Technologies and tools I've been working with</p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-red-600">Programming Languages</h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="Python" level="Intermediate" />
                <SkillBadge name="JavaScript" level="Beginner" />
                <SkillBadge name="Java" level="Beginner" />
                <SkillBadge name="HTML/CSS" level="Intermediate" />
                <SkillBadge name="SQL" level="Beginner" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-red-600">Technologies & Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="React" level="Beginner" />
                <SkillBadge name="Next.js" level="Beginner" />
                <SkillBadge name="Git" level="Beginner" />
                <SkillBadge name="Tailwind CSS" level="Intermediate" />
                <SkillBadge name="Flask" level="Beginner" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-red-600">Soft Skills</h3>
              <div className="flex flex-wrap gap-4">
                <SkillBadge name="Problem Solving" />
                <SkillBadge name="Teamwork" />
                <SkillBadge name="Communication" />
                <SkillBadge name="Time Management" />
                <SkillBadge name="Adaptability" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-600"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl">Feel free to reach out if you'd like to connect or collaborate</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <p className="text-gray-300">
                  I'm always open to connecting with fellow students, mentors, and technology enthusiasts. Whether you
                  have a question, want to collaborate on a project, or just want to say hi, I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-red-600">Email</h3>
                    <a
                      href="mailto:06.divij.agarwal@gmail.com"
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      06.divij.agarwal@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-red-600">Location</h3>
                    <p className="text-white">Madison, WI</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-red-600">Connect</h3>
                    <div className="flex gap-6 mt-2">
                      <a
                        href="https://github.com/thebinarybard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        GitHub <ExternalLink size={14} />
                      </a>
                      <a
                        href="https://linkedin.com/in/divij-agarwal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600"></div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-none text-white focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-none text-white focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-none text-white focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none py-6">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 top-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Divij Agarwal. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/thebinarybard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/divij-agarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

