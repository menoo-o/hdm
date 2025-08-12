import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react";

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
}

export default function ProductRangeSection({
  title,
  highlight,
  description,
  imageSrc,
  stats,
  primaryCta,

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
            <div className="flex flex-col sm:flex-row gap-4 md:pr-0 sm:justify-start justify-center">
  <Link
    href={primaryCta.href}
    aria-label={`Explore ${primaryCta.label}`}
    className="
      relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-semibold
      border-2 transition-colors
      text-amber-600 border-amber-600
      bg-white
      sm:bg-transparent sm:hover:bg-amber-50 sm:hover:text-white
      group
    "
  >
    {/* Background overlay for hover (desktop only) */}
    <span
      className="
        absolute left-0 block w-full h-0 bg-amber-600 opacity-100
        sm:transition-all sm:duration-400 sm:ease-in-out
        sm:group-hover:h-full sm:top-0 top-0
      "
    ></span>

    {/* Arrow — visible by default on mobile, slides in on desktop hover */}
    <span
      className="
        absolute right-0 flex items-center justify-start w-10 h-10
        transform translate-x-0
        sm:translate-x-full sm:duration-300 sm:ease
        sm:group-hover:translate-x-0
      "
    >
      <ArrowRight className="w-5 h-5 text-amber-600 sm:text-[var(--bg-ivory)]" />
    </span>

    {/* Label */}
    <span className="relative z-10">{primaryCta.label}</span>
  </Link>
</div>

          </div>
        </div>

        {/* Image Side */}
      <div
  className={`relative ${reverse ? "lg:order-1" : "lg:order-2"} h-72 sm:h-88 lg:h-auto`}
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
