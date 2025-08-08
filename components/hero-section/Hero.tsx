import Link from "next/link"
import { ArrowRight } from "lucide-react"
// import Link from "next/link";



export default function HeroSection() {
  return (
   <section className="pt-16 h-[calc(100vh-4rem)] flex items-center bg-white">



     {/* Mobile Background Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-45 block md:hidden"
        style={{
          backgroundImage: "url('/mobile-bg5.png')",
        }}
    ></div>

    {/* Desktop Background Image */}
<div
  className="hidden md:block md:absolute md:top-22 md:left-12 md:w-full md:h-[calc(100vh-4rem)] md:bg-cover md:bg-top-left md:bg-no-repeat md:opacity-80"
  style={{
    backgroundImage: "url('/hero-bg1.png')",
  }}
></div>


      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-16 3xl:px-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 md:py-12 relative -translate-y-18 md:-translate-y-0">

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
        <div className="flex flex-col sm:flex-row gap-8 md:pt-6 pt-28 md:pb-4">
          <Link
            href="#_"
            className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-semibold text-amber-600 border-2 border-amber-600 rounded-full group hover:text-white hover:bg-amber-50 transition-colors"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>

            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>

            <span className="relative flex items-center z-10"> Get Wholesale Quote </span>
          </Link>
        </div>


            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200 md:block hidden">
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Farm Direct Sourcing
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Quality Guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Timely Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Image space (handled by background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>



  
    
    </section>

    
  )
}
