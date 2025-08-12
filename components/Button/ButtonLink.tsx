// components/ButtonLink.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  text: string;
  icon?: ReactNode;
  color?: string; // Tailwind color name, e.g., 'amber-600'
  target?: string;
  rel?: string;
}

export default function ButtonLink({
  href,
  text,
  icon = <ArrowRight className="w-5 h-5 text-[var(--bg-ivory)]" />,
  color = "amber-600",
  target = "_blank",
  rel = "noopener noreferrer",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={text}
      className={`relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-semibold text-${color} border-2 border-${color} group hover:text-white hover:bg-${color} transition-colors`}
    >
      {/* Hover background animation */}
      <span
        className={`absolute left-0 block w-full h-0 transition-all bg-${color} opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out`}
      ></span>

      {/* Sliding icon */}
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        {icon}
      </span>

      {/* Text */}
      <span className="relative flex items-start z-10">{text}</span>
    </Link>
  );
}
