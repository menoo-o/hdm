'use client'

import RotatingScrollImage from "@/components/ImageScroll";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Award, Leaf } from "lucide-react"

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
    <section className="relative bg-[#faf9f6] min-h-screen flex items-center overflow-hidden" id='about' >
      <div className="relative z-10 container mx-auto px-6 md:px-24 py-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-8">
          {/* Heritage Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 shadow-sm">
            <Building2 className="w-4 h-4 text-green-700" />
            <span className="text-sm font-medium text-green-700">Est. 1980 • Trusted Heritage</span>
          </div>

          {/* Main Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2d4a2b] mb-4 leading-tight">Hafiz Dal Mills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Heritage Story */}
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded by <span className="font-semibold text-[#2d4a2b]">Haji Mukhtar in 1980</span>, Hafiz Dal Mills has
              grown from humble beginnings into one of Punjab and Rawalpindi&apos;s most trusted grain trading companies. For
              over four decades, we&apos;ve been the backbone of Asia&apos;s B2B pulse and lentil trade.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Our legacy is built on <span className="font-semibold text-[#2d4a2b]">unwavering quality</span> and
              sustainable partnerships with farmers across the region. Every product we deliver — from premium pulses to
              finest besan — carries the promise of{" "}
              <span className="font-semibold">100% natural, non-GMO excellence</span>, free from artificial additives.
            </p>
          </div>

          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="group text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#2d4a2b] group-hover:text-green-600 transition-colors">
                  Since 1980
                </h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Four decades of trusted excellence</p>
            </div>

            <div className="group text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#2d4a2b] group-hover:text-green-600 transition-colors">
                  10+ Products
                </h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Premium pulses, besan & rice</p>
            </div>

            <div className="group text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#2d4a2b] group-hover:text-green-600 transition-colors">
                  100% Natural
                </h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Preservative-free guarantee</p>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="pt-6 border-t border-green-100">
            <p className="text-lg text-gray-600 italic">
              Delivering consistency, freshness, and service across Pakistan —
              <span className="font-semibold text-[#2d4a2b]"> that&apos;s the HDM promise.</span>
            </p>
          </div>
        </div>

        {/* Rotating Image Scroll (Desktop) */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-4"></div>
            <div className="relative backdrop-blur-sm p-6">
              <RotatingScrollImage />
            </div>
          </div>
        </div>
      </div>

      {/* Background Rotating Image (Mobile Only) */}
      <div className="md:hidden absolute inset-0 z-0 opacity-15 pointer-events-none pt-30">
        <RotatingScrollImage />
      </div>

   
    </section>

   
  );
};

export default AboutSection;

