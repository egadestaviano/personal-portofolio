"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto max-xl:px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            ED<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Button asChild size="sm" className="ml-2">
              <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-1">
            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary"
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary"
            >
              Projects
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
