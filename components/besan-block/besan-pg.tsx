"use client"

import { Card,  } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Award, Leaf, Shield, Factory, ChefHat } from "lucide-react"

export default function PulsesPage() {

const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Grade",
      description: "Made from carefully selected, premium-quality chickpeas",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Traditional Milling",
      description: "Stone-ground using traditional methods for superior texture",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Purity Guaranteed",
      description: "100% pure with no additives or artificial preservatives",
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Professional Grade",
      description: "Ideal for restaurants, bakeries, and food manufacturers",
    },
  ]

  

  return (
    <div className="min-h-screen bg-[var(--bg-ivory)]">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/products/besan-bg.jpg')`,
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
            
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">Besan</h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Finest gram flour made from premium chickpeas, traditionally milled for exceptional taste!
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>
        </div>
      </section>

       {/* Product Showcase Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                      <Image
                        src="/products/besan.webp"
                        alt="Premium besan flour in wooden bowl with scoop"
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
      
                    {/* Floating Quality Badge */}
                    
                  </div>
      
                  {/* Product Details */}
                  <div className="space-y-8">
                    <div>
                      <Badge variant="outline" className="mb-4 border-yellow-200 text-yellow-700">
                        Single Premium Variant
                      </Badge>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Premium Besan</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our Premium Besan is crafted from the finest chickpeas, meticulously selected and traditionally
                        stone-ground to achieve the perfect fineness. This superior gram flour delivers exceptional taste,
                        texture, and consistency that professional chefs and food manufacturers trust.
                      </p>
                    </div>
      
                    {/* Key Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
      
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">22-24g</div>
                        <div className="text-sm text-gray-600">Protein/100g</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">80-100</div>
                        <div className="text-sm text-gray-600">Mesh Fineness</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-sm text-gray-600">Months Shelf Life</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Quality Process */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Traditional Milling Excellence</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our time-honored process ensures every batch of Premium Besan meets the highest standards of fineness,
                    purity, and flavor.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center p-8 shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Leaf className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Selection</h3>
                    <p className="text-gray-600">
                      Only the finest, plump chickpeas are selected from certified farms, ensuring consistent quality and
                      superior taste.
                    </p>
                  </Card>
      
                  <Card className="text-center p-8 shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Factory className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Stone Grinding</h3>
                    <p className="text-gray-600">
                      Traditional stone mills preserve the natural oils and nutrients while achieving the perfect fineness for
                      professional applications.
                    </p>
                  </Card>
      
                  <Card className="text-center p-8 shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Rigorous testing ensures purity, protein content, and mesh consistency meet our premium standards before
                      packaging.
                    </p>
                  </Card>
                </div>
              </div>
            </section>    


    </div>
  )
}
