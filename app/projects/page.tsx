import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { getProjects } from "@/utils/csv-parser"

export default function ProjectsPage() {
  // Get projects from CSV file
  const projects = getProjects()

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-gray-400 hover:text-white mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of projects I've worked on during my first year as an undergraduate student. These include
            coursework, personal projects, and collaborative work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
    </div>
  )
}

