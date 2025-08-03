import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"


export default function FooterBlock() {
  return (
   <footer className="relative bg-[var(--bg-ivory)] text-[var(--black-olive)]">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full opacity-5 bg-no-repeat bg-cover bg-center pointer-events-none"
    style={{ backgroundImage: "url('/footer-bg.png')" }}
  />

  {/* Top Accent Line */}
  <div className="w-full h-1 bg-gradient-to-r from-[var(--vanilla)] via-[var(--safety-orange)] to-[var(--vanilla)]" />

  <div className="relative z-10 container mx-auto px-4 md:px-20 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Brand Info */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-2xl font-bold text-[var(--dark-moss)]">Hafiz Dal Mills</h3>
            <p className="text-sm text-[var(--black-olive)]">Premium Pulses & Grains</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed max-w-xs">
          Serving Pakistan with 100% natural pulses, lentils & grains since 1980. Trusted by generations for purity, quality, and timely delivery.
        </p>
      </div>

      {/* Explore Links */}
      <div className="flex flex-col space-y-4">
        <h4 className="text-lg font-semibold text-[var(--dark-moss)] border-b border-[var(--vanilla)] pb-2">Explore</h4>
        <nav className="flex flex-col space-y-2 text-sm">
          {[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Products', href: '/products' },
            { label: 'Quality Assurance', href: '/quality' },
            { label: 'Contact', href: '/contact' },
          ].map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[var(--safety-orange)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Contact + Socials */}
      <div className="flex flex-col space-y-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-[var(--safety-orange)] mt-1" />
            <span>
              Industrial Area, Sector 15<br />
              Karachi, Pakistan
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-[var(--safety-orange)]" />
            <span>+92 21 1234 5678</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-[var(--safety-orange)]" />
            <span>info@hafizdalmill.com</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-2">
          {[
            { icon: <Facebook />, label: "Facebook" },
            { icon: <Instagram />, label: "Instagram" },
            {
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="..." /> {/* Same WhatsApp path */}
                </svg>
              ),
              label: "WhatsApp",
            },
          ].map(({ icon, label }) => (
            <Link
              href="#"
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-full bg-[var(--vanilla)] hover:bg-[var(--safety-orange)] text-[var(--black-olive)] flex items-center justify-center transition-colors"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-10 pt-6 border-t border-[var(--vanilla)] flex flex-col md:flex-row justify-between items-center text-sm text-[var(--black-olive)] space-y-2 md:space-y-0">
      <p>© {new Date().getFullYear()} Hafiz Dal Mills. All rights reserved.</p>
      <div className="flex space-x-6">
        <Link href="/privacy" className="hover:text-[var(--safety-orange)]">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-[var(--safety-orange)]">Terms of Service</Link>
      </div>
    </div>
  </div>

  {/* Bottom Accent Line */}
  <div className="w-full h-2 bg-gradient-to-r from-[var(--vanilla)] via-[var(--safety-orange)] to-[var(--vanilla)] opacity-20" />
</footer>

  )
}
