'use client'

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import navLinks from "@/data/NavLinks" 
import { useOverlayStore } from '@/stores/useOverlay';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 


export default function NavbarComp() {
    const openContact = useOverlayStore((s) => s.openContact);
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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
          <div className="flex items-center">
           <Image 
             src="/logo.svg"
             alt="HDM Logo"
             width={65}
             height={65}
            className="object-contain sm:w-24 sm:h-24"
           />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--dark-moss)] hover:text-amber-600 font-semibold transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
             <button 
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full"
                 onClick={openContact}  
              >
               
                Enquiry
              </button>
          </div>

        </div>
      </div>
    </nav>
  )
}