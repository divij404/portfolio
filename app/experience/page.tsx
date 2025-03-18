"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Briefcase } from "lucide-react"

// Sample experience data
const experiences = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Company Name",
    period: "2021 - Present",
    description:
      "Led the development of multiple web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality products on time and within budget.",
    type: "work",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Previous Company",
    period: "2018 - 2021",
    description:
      "Developed and maintained client websites and web applications. Worked with a variety of technologies including JavaScript, React, and Node.js.",
    type: "work",
  },
  {
    id: 3,
    title: "Bachelor of Science in Computer Science",
    company: "University Name",
    period: "2014 - 2018",
    description:
      "Studied computer science with a focus on software engineering and web development. Participated in various hackathons and coding competitions.",
    type: "education",
  },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2016 - 2018",
    description:
      "Worked with clients to develop websites and web applications. Managed projects from concept to completion, including client communication and project planning.",
    type: "work",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-gray-800 pl-8 ml-4">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  {experience.type === "work" ? (
                    <Briefcase size={16} className="text-red-600" />
                  ) : (
                    <GraduationCap size={16} className="text-red-600" />
                  )}
                </div>

                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{experience.period}</span>
                </div>

                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-red-600 mb-2">{experience.company}</p>
                <p className="text-gray-300">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

