import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  target?: string;
}

export default function ButtonLink({ href, text, icon, target }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target || "_self"}
      rel="noopener noreferrer"
      aria-label={text}
      className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-semibold text-amber-600 border-2 border-amber-600 group hover:text-white hover:bg-amber-50 transition-colors"
    >
      {/* Background Fill Animation */}
      <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>

      {/* Slide-in Icon */}
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        {icon || <ArrowRight className="w-5 h-5 text-white" />}
      </span>

      {/* Text */}
      <span className="relative flex items-start z-10">{text}</span>
    </Link>
  );
}
