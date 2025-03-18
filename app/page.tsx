// app/page.tsx
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import { getProjects, getCourses } from "@/lib/data"; // Updated path
import ClientSection from "@/components/ClientSection"; // New client component

export default function Home() {
  const projects = getProjects().slice(0, 3); // Server-side data fetching
  const courses = getCourses();

  return (
    <div className="bg-black text-white">
      {/* Pass data to Client Component */}
      <ClientSection projects={projects} courses={courses} />
      {/* Add server-rendered sections here if needed */}
    </div>
  );
}
