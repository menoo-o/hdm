import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export type ProductRangeSectionProps = {
  title: string
  reverse?:boolean
  highlight: string
  description: string
  imageSrc: string
  stats?: {
    varieties?: string
    protein: string
    natural: string
  }
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export default function ProductRangeSection({
  title,
  highlight,
  description,
  imageSrc,
  stats,
  primaryCta,
  secondaryCta,
  reverse
}: ProductRangeSectionProps) {
  return (
    <section className="relative z-10 min-h-screen bg-transparent">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Content Side */}
        <div
          className={`flex items-center justify-center p-8 lg:p-12 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="max-w-xl w-full space-y-8">
            
            {/* Heading & Description */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
                <span className="text-orange-600 block">{highlight}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                {stats.varieties && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stats.varieties}</div>
                    <div className="text-sm text-gray-600">Varieties</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stats.protein}</div>
                  <div className="text-sm text-gray-600">Protein/100g</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stats.natural}</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              {secondaryCta && (
                <Button asChild size="lg" variant="outline">
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Image Side */}
       <div
          className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <Image
            src={imageSrc}
            alt={`${highlight} product image`}
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  )
}
