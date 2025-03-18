import Link from "next/link"
import Image from "next/image"
import { Play, Info } from "lucide-react"

interface FeaturedProjectProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-netflix-dark/80 text-gray-300 rounded-sm text-xs">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

        <div className="flex gap-4">
          <Link
            href={project.link}
            className="px-6 py-3 bg-white text-black rounded-md font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Play size={20} />
            View Project
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-gray-600/80 text-white rounded-md font-medium flex items-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <Info size={20} />
            More Info
          </Link>
        </div>
      </div>
    </div>
  )
}

