import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
// import Link from "next/link";


export default function HeroSection() {
  return (
   <section className="pt-16 h-[calc(100vh-4rem)] flex items-center bg-[var(--bg-ivory)]">



     {/* Mobile Background Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-45 block md:hidden"
        style={{
          backgroundImage: "url('/mobile-bg5.png')",
        }}
    ></div>

    {/* Desktop Background Image */}
<div
  className="hidden md:block md:absolute md:top-22 md:left-0 md:w-full md:h-[calc(100vh-4rem)] md:bg-cover md:bg-top-left md:bg-no-repeat md:opacity-80"
  style={{
    backgroundImage: "url('/hero-bg1.png')",
  }}
></div>


      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-4 3xl:px-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-25 relative -translate-y-18 md:-translate-y-2">

          {/* Left Content */}
          <div className="space-y-4 md:space-y-2 text-gray-900">
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
            <div className="flex flex-col sm:flex-row gap-8 md:pt-6 pt-28 md:pb-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Wholesale Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
