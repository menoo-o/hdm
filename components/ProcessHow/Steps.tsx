import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Factory, Truck, Home, CheckCircle, Award } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Certified Farm Network",
      description:
        "We maintain partnerships with over 200 certified farms, ensuring consistent supply volumes and quality standards for your business needs.",
      highlight: "Reliable Supply",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Harvesting",
      description:
        "Crops are harvested using standardized protocols that ensure batch-to-batch consistency and meet commercial quality specifications.",
      highlight: "Consistent Quality",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Commercial Processing",
      description:
        "Our ISO-certified facilities process large volumes while maintaining strict quality controls and traceability for wholesale distribution.",
      highlight: "ISO Certified",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing and certification ensure every batch meets food safety standards and your brand's quality requirements.",
      highlight: "Certified Quality",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics & Distribution",
      description:
        "Efficient supply chain management ensures on-time delivery to your warehouses, stores, or distribution centers.",
      highlight: "On-Time Delivery",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Your Business Success",
      description:
        "Premium quality products that help you serve your customers better and build lasting brand loyalty.",
      highlight: "Business Growth",
    },
  ]

  return (
    <section className="py-20 px-8 bg-[var(--bg-ivory)]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
            Our Process
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-900 text-[var(--dark-moss)] mb-6 leading-tight">
            How We Bring the Best, Purest Food
            <span className="text-orange-600 block">to Your Table?</span>
          </h2>
          <p className="text-lg text-600 text-[var(--light-moss)] max-w-3xl mx-auto leading-relaxed">
            From farm to your business operations, every step of our process is designed to ensure consistent quality,
            reliable supply, and the premium standards your customers expect from your brand.
          </p>
        </div>



        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                      {index + 1}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs bg-white/50">
                    {step.highlight}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Progress indicator */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 rounded-full transition-all duration-500 group-hover:from-orange-600 group-hover:to-yellow-600"
                      style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



  
      </div>
    </section>
  )
}
