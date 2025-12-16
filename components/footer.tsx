"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0 py-16">
        {/* Grid utama */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold">Ega Destaviano</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software developer specializing in building reliable and scalable web applications.
            </p>

            <div className="flex gap-3 pt-2">
              {/* Social links */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <nav className="space-y-3 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Frontend Engineering</li>
              <li>UI Implementation</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Semarang, Indonesia</p>
              <a
                href="mailto:pastilaku121@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                pastilaku121@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Ega Destaviano. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="h-8 px-3 text-xs bg-transparent"
          >
            Back to top
            <ArrowUp className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
