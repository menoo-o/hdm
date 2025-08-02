"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function RotatingFlowers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const topFlowerRef = useRef<HTMLImageElement>(null)
  const bottomFlowerRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Top image: rotates clockwise
      gsap.to(topFlowerRef.current, {
        rotate: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Bottom image: rotates counter-clockwise
      gsap.to(bottomFlowerRef.current, {
        rotate: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-80 h-80 mx-auto">
      {/* Bottom flower (rotates anti-clockwise) */}
      <Image
        ref={bottomFlowerRef}
        src="/index-bg.png"
        alt="Bottom Flower"
        fill
        className="object-contain z-0 scale-140"
      />

      {/* Top flower (rotates clockwise) */}
      <Image
        ref={topFlowerRef}
        src="/index-forward.png"
        alt="Top Flower"
        fill
        className="object-contain z-10 scale-80"
      />
    </div>
  )
}
