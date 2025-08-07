"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X} from "lucide-react"
import Image from "next/image"
import navLinks from "@/data/NavLinks" // Assuming you have a NavLinks data file
import { useOverlayStore } from '@/stores/useOverlay';


import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   const openContact = useOverlayStore((s) => s.openContact);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  // nav gsap
  const navRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);


  useGSAP(()=>{
        const nav = navRef.current;
          // Slide the navbar back down into view (if it was hidden).
        const showNavbar = () => {
            if (!isHidden.current) return;
            isHidden.current = false;
            gsap.to(nav, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            });
        };

        // Slide the navbar up and out of sight.
        const hideNavbar = () => {
            if (isHidden.current) return;
            isHidden.current = true;
            gsap.to(nav, {
            opacity: 0,
            y: -60,
            duration: 0.4,
            ease: 'power2.in',
            });
        };

        // Watch how the user scrolls — and decide what animations to trigger
        const handleScroll = () => {
        // if (isOpen) return;

        const currentY = window.scrollY;
        const goingDown = currentY > lastScrollY.current;

        if (goingDown && currentY > window.innerHeight * 0.5) {
            hideNavbar();
        } else if (!goingDown) {
            showNavbar();
        }

        lastScrollY.current = currentY;
        };
      

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, [])

  return (
    <>
      {/* Main Navigation */}
     <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg rounded-b-xl backdrop-saturate-150" 
        ref={navRef}
      >
        <div className="container mx-auto px-4 md:px-15 3xl:px-20">
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
              <button 
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full"
                 onClick={openContact}  
              >
               
                Enquiry
              </button>
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
                
                Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
