"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import riceProducts from "@/data/RiceData"

import Image from "next/image"


export default function RicePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[var(--bg-ivory)]">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/rice/rice-banner.jpeg')`,
          }}
        />
         {/* Overlay */}
       <div className="absolute inset-0 bg-black/40" /> 

       
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-[var(--bg-ivory)] px-6">
            <div className="inline-flex items-center gap-3 mb-6">
           
           <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent" />
              
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">Rice</h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Finest basmati rice, handpicked for exceptional aroma and taste.
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Rice Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark-moss)] mb-6">Our Premium Collection</h2>
            <p className="text-xl text-700 text-[var(--light-moss)] max-w-3xl mx-auto leading-relaxed">
                Discover our premium selection of rice varieties, each chosen for its exceptional aroma, long-grain quality, and authentic taste, sourced with care since 1980.
           </p>

            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {riceProducts.map((product) => (
    <Card
      key={product.id}
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="relative overflow-hidden h-52 sm:48">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-3 flex flex-wrap gap-2">
         {product.variants?.map((variant, index) => (
          <span
            key={index}
            className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
          >
            {variant}
          </span>
    ))}
  </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
      </div>

      <CardContent className="p-6">
        

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--dark-moss)] mb-2 group-hover:text-amber-600 transition-colors">
            {product.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-900 text-[var(--dark-moss)]">{product.protein}</div>
                      <div className="text-xs text-gray-500">Protein</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-sm font-medium text-900 text-[var(--dark-moss)] ">{product.cookTime}</div>
                      <div className="text-xs text-500 text-[var(--light-moss)]">Cook Time</div>
                    </div>
              </div>

      

          {/* Hover underline */}
          <div
            className={`w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transform origin-left transition-transform duration-300 ${
              hoveredCard === product.id ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
      </CardContent>
    </Card>
  ))}
</div>



        </div>
      </section>


    </div>
  )
}
