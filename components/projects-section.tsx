"use client"

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects: Project[] = [
  {
    title: "Nifty Educate",
    image: "/project/nifty_educate.png",
    // github: "https://github.com/egadestaviano/fintech-dashboard",
    demo: "https://niftyforkids.com/",
  },
  {
    title: "Contenna",
    image: "/project/contenna.jpeg",
    // github: "https://github.com/egadestaviano/project-suite",
    demo: "https://contenna.egadestaviano.my.id",
  },
  {
    title: "Mentora",
    image: "/project/mentora.jpeg",
    // github: "https://github.com/egadestaviano/bi-platform",
    demo: "https://mentora.egadestaviano.my.id",
  },
  {
    title: "Invoice Generator",
    image: "/project/invoice_generator.jpeg",
    // github: "https://github.com/egadestaviano/social-connect",
    demo: "https://invoice-generator.egadestaviano.my.id",
  },
]


type Project = {
  title: string
  image: string
  demo: string
  github?: string
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Selected projects demonstrating modern web development and scalable solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col">
            {/* IMAGE */}
            <Link
              href={project.demo}
              target="_blank"
              className="relative aspect-video w-full group cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300"
              />

              {/* overlay biar keliatan bisa diklik */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                  Click to Preview
                </span>
              </div>
            </Link>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

              {/* BUTTONS (AMAN, GAK HILANG) */}
              <div className="mt-auto flex gap-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                )}

                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Preview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}