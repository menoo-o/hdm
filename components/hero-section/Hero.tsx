import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Bean } from "lucide-react"
// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-ivory)]">
      {/* Background Image - positioned to the right */}
     {/* Mobile Background Image */}
    <div
    className="absolute inset-0 bg-bottom-left bg-no-repeat opacity-65 block md:hidden"
    style={{
        backgroundImage: "url('/hero3.png')", // Mobile-optimized image
    }}
    ></div>

    {/* Desktop Background Image */}
    <div
    className="hidden md:block md:absolute md:inset-0 md:bg-cover md:bg-right md:bg-no-repeat md:opacity-90"
    style={{
        backgroundImage: "url('/hero.png')", // Desktop-optimized image
    }}
    ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-gray-900">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[var(--dark-moss)]">
              Wholesale 
              <span className="block text-[var(--safety-orange)]">Essentials </span>
              <span className="block text-[var(--dark-moss)]">for Every Shelf</span>
            </h1>

             {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                From pulses to flour — we power businesses that feed millions
              </p>


            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Wholesale Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <Bean className="mr-2 h-5 w-5" />
                 Browse Products
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  ISO Certified
                </span>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* <Link href="https://wa.me/923248518400" className="absolute bottom-4 right-4 bg-[var(--safety-orange)] text-black" target="_blank" rel="noopener noreferrer">
        clik me
    </Link> */}
    </section>

    
  )
}
