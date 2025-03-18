"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  image: string
  year: string
  category: string
}

interface ProjectRowProps {
  title: string
  projects: Project[]
}

export default function ProjectRow({ title, projects }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current
      const scrollAmount = clientWidth * 0.8

      if (direction === "left") {
        rowRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        })
      } else {
        rowRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        })
      }

      // Check if we need to show/hide arrows after scrolling
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftArrow(rowRef.current.scrollLeft > 0)
          setShowRightArrow(rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10)
        }
      }, 300)
    }
  }

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0)
      setShowRightArrow(rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10)
    }
  }

  return (
    <div className="my-8 relative group">
      <h2 className="text-xl md:text-2xl font-medium mb-4">{title}</h2>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 z-10 bg-black/50 p-2 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 z-10 bg-black/50 p-2 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Project Cards */}
      <div ref={rowRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide" onScroll={handleScroll}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="flex-none w-[250px] md:w-[280px] group/card"
          >
            <div className="relative aspect-[3/2] rounded-md overflow-hidden transition-transform duration-300 group-hover/card:scale-105 group-hover/card:shadow-xl">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-300">
                    {project.year} • {project.category}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

