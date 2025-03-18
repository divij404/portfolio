// components/ClientSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClientSection({ projects, courses }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.7)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-red-600">Divij</span> Agarwal
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            First-Year Computer Science Student
          </p>
          <div className="absolute bottom-8 animate-bounce z-20">
            <ChevronDown className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-red-600">Divij</span> Agarwal
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            First-Year Computer Science Student
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Passionate about technology and learning. Currently exploring web
            development, data structures, and algorithms while pursuing my
            undergraduate degree.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white rounded-none px-6 py-6"
            >
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-600"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of my recent work. Each project represents a unique
            challenge and solution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                githubLink={project.githubLink}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add other sections like About, Skills, Contact, Footer here */}
      {/* Example: Courses in About Section */}
      <section id="about" className="py-32 px-6 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <ul className="space-y-2 text-gray-300">
            {courses.map((course) => (
              <li key={course.name}>{course.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
