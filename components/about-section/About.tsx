'use client'

import RotatingScrollImage from "@/components/ImageScroll";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
   const statsRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
    const items = statsRef.current?.querySelectorAll(".stat-item");

    if (items) {
      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%", // triggers when 80% down the viewport
        },
      });
    }
  }, []);

 
  return (
    <section className="relative bg-[var(--bg-ivory)] min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--dark-moss)] mb-8 leading-tight">
            Hafiz Dal Mills
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold">Hafiz Dal Mills (HDM)</span> — established in 1980 — is one of Punjab and Rawalpindi’s
            leading grain trading companies. Specializing in the nationwide export
            of pulses, lentils, and besan, we’ve built a trusted network of farmers and suppliers
            who share our dedication to quality and sustainability.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mt-6">
            All our products are <span className="font-semibold">100% natural, non-GMO</span>, and free from artificial
            colors, flavors, and preservatives. With dependable nationwide delivery,
            HDM ensures consistency, freshness, and service you can count on.
          </p>

          {/* Stats Row */}
          <div
            ref={statsRef}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center md:text-left"
          >
            <div className="stat-item">
              <h3 className="text-3xl font-bold text-[var(--dark-moss)]">Since 1980</h3>
              <p className="text-lg text-gray-600">Serving with trust & quality</p>
            </div>
            <div className="stat-item">
              <h3 className="text-3xl font-bold text-[var(--dark-moss)]">10+ Products</h3>
              <p className="text-lg text-gray-600">Pulses, besan & rice</p>
            </div>
            <div className="stat-item">
              <h3 className="text-3xl font-bold text-[var(--dark-moss)]">100% Natural</h3>
              <p className="text-lg text-gray-600">Preservative-free</p>
            </div>
          </div>
        </div>

        {/* Rotating Image Scroll (Desktop) */}
        <div className="hidden md:block">
          <RotatingScrollImage />
        </div>
      </div>

      {/* Background Rotating Image (Mobile Only) */}
      <div className="md:hidden absolute inset-0 z-0 opacity-10 pointer-events-none">
        <RotatingScrollImage />
      </div>
    </section>
  );
};

export default AboutSection;

