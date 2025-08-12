import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ContactOverlay from "@/components/Contact-Overlay/Contact-form";
import FooterBlock from "@/components/footer-section/footer";
import Image from "next/image";
import NavbarComp from "@/components/Navbar-block/NavbarBlock";
import Link from "next/link";


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDM- Hafiz Dal Mills",
  description: "Developed by DezzDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* <Navigation /> */}
      <NavbarComp />
      <ContactOverlay />

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/923318135543" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-8 z-[var(--z-contact-overlay)]"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp Contact"
          width={48}
          height={48}
          className="w-12 h-12 cursor-pointer hover:scale-105 transition-transform"
        />
      </Link>

      {children}
      <FooterBlock />
</body>

    </html>
  );
}
