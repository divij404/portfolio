// app/page.tsx
import { useRef } from "react";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import { getProjects, getCourses } from "@/lib/data"; // Updated import path

// Client-side component for animations
function HeroSection({ projects, courses }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-black text-white">
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero content */}
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

      {/* Rest of the page */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Intro Section */}
        {/* ... (rest of your JSX) */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
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

      {/* Courses in About Section */}
      <section id="about" className="py-32 px-6 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <ul>
            {courses.map((course) => (
              <li key={course.name}>{course.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
}

// Server Component to fetch data
export default function Home() {
  const projects = getProjects();
  const courses = getCourses();

  return <HeroSection projects={projects} courses={courses} />;
}
