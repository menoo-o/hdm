"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import Image from "next/image"

const brands = [
  { name: "Acme Corp", logo: "/brands/brand1.jpg" },
  { name: "TechFlow", logo: "/brands/brand2.jpg" },
  { name: "Innovate Co", logo: "/brands/brand3.jpg" },
  { name: "Digital Plus", logo: "/brands/brand4.jpg" },
  { name: "Future Labs", logo: "/brands/brand5.jpeg" },
  { name: "Smart Solutions", logo: "/brands/brand6.png" },
  { name: "Global Tech", logo: "/brands/brand7.jpg" },
  { name: "NextGen", logo: "/brands/brand8.jpg" },
  { name: "NextGen1", logo: "/brands/brand9.jpg" },
]

export default function TrustedBrands() {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!firstRowRef.current || !secondRowRef.current) return

    // Create seamless infinite scroll animation
    const firstRow = firstRowRef.current
    const secondRow = secondRowRef.current

    // Set initial position for second row
    gsap.set(secondRow, { x: "100%" })

    // Create timeline for smooth infinite loop
    const tl = gsap.timeline({ repeat: -1 })

    tl.to([firstRow, secondRow], {
      x: "-100%",
      duration: 20,
      ease: "none",
    })
      .set(firstRow, { x: "100%" })
      .set(secondRow, { x: "0%" }, "<")

    // Pause animation on hover for better UX
    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", () => tl.pause())
      container.addEventListener("mouseleave", () => tl.resume())
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-stone-50 to-amber-50/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-moss)] mb-4">
          Trusted by Leading Brands
     </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of companies that rely on us for quality and service. Our trusted partners include industry leaders across various sectors.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative overflow-hidden" role="region" aria-label="Brand logos carousel">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-amber-50/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling rows */}
          <div className="flex">
            <div ref={firstRowRef} className="flex items-center gap-8 md:gap-12 lg:gap-16 flex-shrink-0">
              {brands.map((brand, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 group">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
                    <div className="w-full h-full rounded-full bg-transparent shadow-sm p-3 md:p-4 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        width={90}
                        height={90}
                        className="w-full h-full object-contain rounded-full filter transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div ref={secondRowRef} className="flex items-center gap-8 md:gap-12 lg:gap-16 flex-shrink-0">
              {brands.map((brand, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 group">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
                    <div className="w-full h-full rounded-full bg-transparent shadow-sm p-3 md:p-4 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        width={90}
                        height={90}
                        className="w-full h-full object-contain rounded-full filter transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
    
      </div>
    </section>
  )
}
