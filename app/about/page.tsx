import Image from "next/image"
import Link from "next/link"
import { Play, Download } from "lucide-react"

export default function AboutPage() {
  // Sample skills data
  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"] },
    { category: "Design", items: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "Other", items: ["Git", "Agile/Scrum", "Responsive Design", "Performance Optimization", "SEO"] },
  ]

  return (
    <div className="min-h-screen bg-netflix-black text-white pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="md:col-span-1">
            <div className="bg-netflix-card rounded-md overflow-hidden sticky top-24">
              <div className="relative aspect-square">
                <Image src="/placeholder.svg?height=600&width=600" alt="Profile" fill className="object-cover" />
              </div>

              <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">YOUR NAME</h1>
                <p className="text-netflix-red mb-4">Developer & Designer</p>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-netflix-red text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                  >
                    <Play size={18} />
                    Contact Me
                  </Link>
                  <Link
                    href="/resume.pdf"
                    className="w-full py-3 bg-gray-700 text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors"
                  >
                    <Download size={18} />
                    Download Resume
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <div className="text-xl font-bold">5+</div>
                      <div className="text-sm text-gray-400">Years Exp.</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">50+</div>
                      <div className="text-sm text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">20+</div>
                      <div className="text-sm text-gray-400">Clients</div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>

            <div className="bg-netflix-card rounded-md p-6 mb-8">
              <p className="text-lg mb-4">
                Hi there! I'm a passionate developer and designer with over 5 years of experience creating digital
                products that people love to use.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in building modern web applications using React, Next.js, and Node.js. My approach combines
                clean code with intuitive design to create exceptional user experiences.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities. I'm always open to new opportunities and collaborations, so feel free to
                reach out!
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-netflix-card rounded-md p-6">
                  <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-netflix-dark text-gray-300 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Experience</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-netflix-card rounded-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Senior Developer</h3>
                  <span className="text-netflix-red">2021 - Present</span>
                </div>
                <h4 className="text-gray-400 mb-4">Company Name</h4>
                <p className="text-gray-300">
                  Led the development of multiple web applications using React and Next.js. Collaborated with
                  cross-functional teams to deliver high-quality products on time and within budget. Mentored junior
                  developers and implemented best practices for code quality and performance.
                </p>
              </div>

              <div className="bg-netflix-card rounded-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Web Developer</h3>
                  <span className="text-netflix-red">2018 - 2021</span>
                </div>
                <h4 className="text-gray-400 mb-4">Previous Company</h4>
                <p className="text-gray-300">
                  Developed and maintained client websites and web applications. Worked with a variety of technologies
                  including JavaScript, React, and Node.js. Collaborated with designers to implement responsive and
                  accessible user interfaces.
                </p>
              </div>

              <div className="bg-netflix-card rounded-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Freelance Designer</h3>
                  <span className="text-netflix-red">2016 - 2018</span>
                </div>
                <h4 className="text-gray-400 mb-4">Self-employed</h4>
                <p className="text-gray-300">
                  Provided design and development services for small businesses and startups. Created brand identities,
                  websites, and marketing materials. Built a client base through networking and referrals.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Education</h2>

            <div className="bg-netflix-card rounded-md p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
                <span className="text-netflix-red">2012 - 2016</span>
              </div>
              <h4 className="text-gray-400">University Name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

