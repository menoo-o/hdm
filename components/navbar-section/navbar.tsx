"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "What we do", href: "#whatwedo" },
    { name: "Proteins", href: "#proteins" },
    { name: "Products", href: "#products" },  
]

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
           <div className="flex items-center h-16 lg:h-20">
              <Image 
                src="/logo.svg"
                alt="HDM Logo"
                width={74}
                height={74}
                className="object-contain sm:w-24 sm:h-24"
              />
           </div>
        
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu} />

          {/* Mobile Menu Sheet */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">PulseWholesale</span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="block px-6 py-4 text-lg font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Button */}
              <div className="p-6 border-t border-gray-200">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full"
                  onClick={toggleMobileMenu}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
