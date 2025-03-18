import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  githubLink?: string
  imageUrl: string
}

export default function ProjectCard({ title, description, tags, link, githubLink, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative border border-gray-800 hover:border-red-600 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-black/50 text-gray-300 text-xs border border-gray-800">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={link}
            className="text-red-600 hover:text-red-400 transition-colors flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            View Project
          </Link>
          {githubLink && (
            <Link
              href={githubLink}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              Code
            </Link>
          )}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  )
}

