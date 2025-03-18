"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
        setIsVisible(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Initial delay to match the main content animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply to hash links that point to sections on the same page
    if (href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Close mobile menu if open
        setIsMenuOpen(false)

        // Scroll to the element with smooth behavior
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update URL without causing a page reload
        window.history.pushState(null, "", href)
      }
    }
  }

  if (!isVisible) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
      } animate-fadeIn`}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-600">
          DA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/#about"
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => handleScrollToSection(e, "/#about")}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => handleScrollToSection(e, "/#projects")}
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => handleScrollToSection(e, "/#skills")}
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            className="text-gray-300 hover:text-white transition-colors"
            onClick={(e) => handleScrollToSection(e, "/#contact")}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm animate-fadeIn">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/#about"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={(e) => handleScrollToSection(e, "/#about")}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={(e) => handleScrollToSection(e, "/#projects")}
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={(e) => handleScrollToSection(e, "/#skills")}
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={(e) => handleScrollToSection(e, "/#contact")}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

