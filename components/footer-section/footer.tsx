import Link from "next/link"
import { MapPin, Phone, Facebook, MessageCircle } from "lucide-react"

export default function FooterBlock() {
  const currentYear = new Date().getFullYear()



  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/+923318135543",
      color: "hover:bg-green-500",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/HafizDaalMills",
      color: "hover:bg-blue-600",
    },
  ]

  return (
    <footer className="relative bg-[var(--black-olive)] text-[var(--vanilla)] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full blur-3xl"></div>
      </div>

      {/* Top Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-[var(--vanilla)] via-[var(--safety-orange)] to-[var(--bg-nyanza)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3"> 
                <div>
                  <h3 className="text-3xl font-bold text-[var(--vanilla)] leading-tight">Hafiz Dall Mill</h3>
                  <p className="text-[#ff6b35] font-semibold text-sm tracking-wide">PREMIUM PULSES & GRAINS</p>
                </div>
              </div>

              <p className="text-600 text-[var(--vanilla)] leading-relaxed max-w-md text-lg">
                Serving Pakistan with{" "}
                <span className="font-semibold text-[var(--light-moss)]">100% natural pulses, lentils & grains since 1980</span>.
                Trusted by generations for purity, quality, and timely delivery across Pakistan.
              </p>
            </div>


          </div>


          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-[var(--vanilla)] mb-4 relative">
                Get In Touch
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--safety-orange)] to-transparent"></div>
              </h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ff6b35]/20 transition-colors">
                    <MapPin className="w-4 h-4 text-[var(--safety-orange)]" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-[var(--vanilla)]">Head Office</p>
                    <p className="text-600 text-[var(--light-moss)] leading-relaxed">
                       J383+C3R, Hamilton Rd, Ganj Mandi Raja Bazar, 
                      <br />
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ff6b35]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[--safety-orange]" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-[var(--light-moss)]">+92 51 555 1060</p>  
                    <p className="font-medium text--[var(--light-moss)]]">+92 331 813 5543</p>
                    <p className="font-medium text-[var(--light-moss)]">+92 334 835 0623</p>
                  </div>
                </div>

        
              </div>
            </div>
          </div>

          <div className="space-y-6">
           {/* Social Media */}
            <div>
             <h4 className="text-xl font-bold text-[--vanilaa] mb-4 relative">
                Follow Us
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[var(--safety-orange)] to-transparent"></div>
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon, label, href, color }) => (
                  <Link
                    href={href}
                    key={label}
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl bg-white shadow-md hover:shadow-lg text-gray-600 ${color} hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Enhanced Copyright Section */}
        <div className="mt-16 pt-4 border-t border-[#f3e5ab]/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-sm text-600">
                © {currentYear} <span className="font-semibold text-[--light-moss]">Hafiz Dall Mill</span>. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">Crafted with care for quality and sustainability</p>
            </div>

      <div className="flex items-center space-x-6 text-sm">
        <Link
          href="https://dezzdev.vercel.app"
          className="text-gray-600 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ffbc00] transition-all duration-300"
        >
          Developed by <span className="font-semibold">@DezzDev</span>
        </Link>
      </div>
          </div>
        </div>
      </div>

    
    </footer>
  )
}
