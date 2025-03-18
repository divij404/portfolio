// app/page.tsx
import { getProjects, getCourses } from "@/lib/data";
import ClientSection from "@/components/ClientSection";

export default function Home() {
  const rawProjects = getProjects();
  const rawCourses = getCourses();

  const projects = Array.isArray(rawProjects) ? rawProjects.slice(0, 3) : [];
  const courses = Array.isArray(rawCourses) ? rawCourses : [];

  return <ClientSection projects={projects} courses={courses} />;
}
