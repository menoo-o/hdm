import React from 'react'
import Image from 'next/image'
import {  ArrowRight } from 'lucide-react'


function IntroProductRange() {
  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
         {/* Our Product Range Section */}
      <div className="py-16 px-8 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium ingredients, 
              sourced from trusted farmers and processed with the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pulses */}
            <div className="group cursor-pointer">
              <div className="text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/pulses.png"
                    alt="Pulses icon"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    Pulses
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Premium lentils, chickpeas, and beans packed with plant-based protein 
                    and essential nutrients for healthy living.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      High Protein
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      8+ Varieties
                    </span>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Rice */}
            <div className="group cursor-pointer">
              <div className="text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/rice.webp"
                    alt="Rice icon"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    Rice
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aromatic basmati, nutritious brown rice, and specialty varieties 
                    sourced from the finest paddy fields.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Aromatic
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      Premium Quality
                    </span>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Flour */}
            <div className="group cursor-pointer">
              <div className="text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/flour.webp"
                    alt="Flour icon"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Besan
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Besan is a finely milled flour produced from ground chickpeas, providing a nutritious and rich source of protein.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Stone Ground
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Fresh Milled
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
          </div>

        </div>
      </div>



    </div> 
    </>
  )
}

export default IntroProductRange
