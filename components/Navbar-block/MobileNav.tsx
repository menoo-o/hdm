"use client"

import Link from "next/link"
import { X, Facebook, MessageCircle, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { useEffect } from "react";


interface MobileMenuProps {
  isMenuOpen: boolean
  closeMenu: () => void
  openContact: () => void
  navLinks: Array<{ name: string; href: string }>
}

export default function MobileHamburgerMenu({ isMenuOpen, closeMenu, openContact, navLinks }: MobileMenuProps) {
  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/+923318135543",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/HafizDaalMills",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [isMenuOpen]);

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed  md:hidden inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${ isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none" }`}  onClick={closeMenu} />

      {/* Side sheet menu */}
      <aside
        className={`fixed top-0 right-0 h-full bg-gradient-to-br md:hidden 
        from-[#faf9f6] to-[#f5f4f0] z-50 w-[85%] max-w-sm shadow-2xl 
        transform transition-all duration-500 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Decorative Header */}
        <div className="relative bg-gradient-to-r from-[#252919] to-[#525B37] p-6 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-4 w-20 h-20 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-2 left-4 w-16 h-16 bg-orange-200 rounded-full blur-lg"></div>
          </div>

          {/* Close Button */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center space-x-3">
              
              <div>
                <h3 className="text-[var(--bg-ivory)] font-bold text-lg">HDM</h3>
                <p className="text-white/80 text-xs">Since 1980</p>
              </div>
            </div>
            <button
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:rotate-90"
              onClick={closeMenu}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative Line */}
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Navigation Section */}
        <nav className="px-6 py-8 space-y-2">
          <h4 className="text-sm font-semibold text-[var(--dark-moss)] uppercase tracking-wider mb-4 flex items-center">
            <div className="w-4 h-px bg-[var(--safety-orange)] mr-2"></div>
            Explore
          </h4>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group flex items-center justify-between p-3 rounded-xl hover:bg-white/60 transition-all duration-300 hover:translate-x-1 ${
                isMenuOpen ? "animate-slide-in" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={closeMenu}
            >
              <span className="text-lg font-medium text-[var(--dark-moss)] group-hover:text-[#ff6b35] transition-colors">
                {link.name}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#ff6b35] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Decorative Divider */}
        <div className="mx-6 flex items-center space-x-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="w-2 h-2 bg-[var(--safety-orange)] rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Contact Info */}
        <div className="px-6 py-6 space-y-3">
          <h4 className="text-sm font-semibold text-[var(--dark-moss)] uppercase tracking-wider mb-4 flex items-center">
            <div className="w-4 h-px bg-[var(--safety-orange)] mr-2"></div>
            Quick Contact
          </h4>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-8 h-8 bg-[var(--black-olive)]/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-[var(--safety-orange)]" />
              </div>
              <span className="text-gray-600">+92 51 555 1060</span>
            </div>

            

            <div className="flex items-start space-x-3 text-sm">
              <div className="w-8 h-8 bg-[#525B37]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#ff6b35]" />
              </div>
              <span className="text-gray-600 leading-relaxed">
                J383+C3R, Hamilton Rd, Ganj Mandi Raja Bazar, 
                <br />
                Rawalpindi, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="px-6 py-4">
          <h4 className="text-sm font-semibold text-[#525B37] uppercase tracking-wider mb-4 flex items-center">
            <div className="w-4 h-px bg-[#F97A00] mr-2"></div>
            Follow Us
          </h4>

          <div className="flex space-x-3">
            {socialLinks.map(({ icon, label, href, color }) => (
              <Link
                href={href}
                key={label}
                aria-label={label}
                className={`w-12 h-12 rounded-xl ${color} text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-6 pb-8">
          <button
            className="w-full bg-gradient-to-r from-[#F97A00] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#ff6b35] text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            onClick={() => {
              closeMenu()
              openContact()
            }}
          >
            <Mail className="w-5 h-5" />
            <span>Get Quote Now</span>
          </button>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f3e5ab] via-[#ff6b35] to-[#f3e5ab]"></div>
      </aside>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
