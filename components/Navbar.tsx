import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[95px] w-full max-w-[1440px] items-center justify-between px-5 md:px-[50px]">
        <Link href="/" className="flex items-center">
          <div className="relative h-[35px] w-[164px]">
            <Image
              src="https://framerusercontent.com/images/K3lVsytFaROfvS2Eqn9hrQL89RA.png"
              alt="B&O Trust Services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="font-inter text-[16px] font-medium text-[#19191d] hover:text-blue transition-colors">
            Home
          </Link>
          <Link href="/taxes" className="font-inter text-[16px] font-medium text-[#19191d] hover:text-blue transition-colors">
            Taxes
          </Link>
          <Link href="/seguros-medicos-obamacare" className="font-inter text-[16px] font-medium text-[#19191d] hover:text-blue transition-colors">
            Seguros
          </Link>
          <Link href="/service" className="font-inter flex items-center gap-1 text-[16px] font-medium text-[#19191d] hover:text-blue transition-colors">
            <span>Otros Servicios</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/contact"
            className="rounded-[35px] bg-[#fcdd33] px-7 py-3 text-[16px] font-medium text-[#19191d] transition-transform hover:scale-105"
          >
            Contactar
          </Link>
          <div className="relative flex items-center justify-center rounded-[10px] bg-[#eeeeee] px-[15px] py-[10px]">
            <select className="appearance-none bg-transparent text-[14px] font-medium text-[#19191d] outline-none cursor-pointer pr-4">
              <option value="es">Spanish</option>
              <option value="en">English (United States)</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden">
          <div className="h-[2px] w-6 rounded-full bg-[#6b6b6b]" />
          <div className="h-[2px] w-6 rounded-full bg-[#6b6b6b]" />
          <div className="h-[2px] w-6 rounded-full bg-[#6b6b6b]" />
        </button>
      </div>
    </header>
  );
}
