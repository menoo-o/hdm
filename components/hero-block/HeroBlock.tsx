import Image from "next/image"

import { ArrowRight, } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pl-2  md:pl-8 bg-white">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden lg:hidden">
        <Image
          src="/mobile-bg6.png"
          alt="Variety of pulses, legumes and grains in bowls and sacks"
          fill
          className="object-cover object-center translate-y-30"
          priority
          quality={95}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-transparent" />
      </div>

      {/* desktop Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
      <div className="relative w-[120%] h-full translate-x-40">
      <Image
        src="/hero-bg1.png"
        alt="Variety of pulses, legumes and grains in bowls and sacks"
        fill
        className="object-cover object-center translate-x-30"
        priority
        quality={90}
    />
  </div>
       </div>


        {/* Content Container */}
          <div className="relative z-20 -mt-60 md:-mt-20 space-y-4 md:space-y-2 text-gray-900 md:pt-8">

             <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 md:py-12 relative -mt-36">
     
               {/* Left Content */}
               <div className="space-y-4 md:space-y-2 text-gray-900 md:pt-8">
                 {/* Main Headline */}
                 <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[var(--dark-moss)]">
                   Wholesale 
                   <span className="block text-[var(--safety-orange)]">Essentials </span>
                   <span className="block text-[var(--dark-moss)]">for Every Shelf</span>
                 </h1>
     
                  {/* Subheadline */}
                   <p className="text-xl lg:text-2xl text-[var(--dark-moss)] leading-relaxed max-w-lg font-medium">
                     From pulses to flour — we power businesses that feed millions
                   </p>
     
     
                 {/* Call to Action Buttons */}
             {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 md:pt-6 pt-8 md:pb-4 pr-8 pl-2">

               <Link
                 href="https://wa.me/923318135543" // Replace with your WhatsApp number
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Chat on WhatsApp"
                 className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-semibold text-amber-600 border-2 border-amber-600 group  hover:text-white hover:bg-amber-50 transition-colors">
                 <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
     
                 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                   <ArrowRight className="w-5 h-5 text-[var(--bg-ivory)]" />
                 </span>
     
                 <span className="relative flex items-start z-10"> Get Wholesale Quote </span>
               </Link>
             </div>
     
               </div>
     
               {/* Right side - Image space (handled by background) */}
               <div className="hidden lg:block"></div>
             </div>
           </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
