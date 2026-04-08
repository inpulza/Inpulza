import Image from 'next/image';
import Link from 'next/link';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-white/50 transition-colors hover:fill-white">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-white/50 transition-colors hover:fill-white">
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-white/50 transition-colors hover:fill-white">
    <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-white/50 transition-colors hover:fill-white">
    <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-black px-5 pb-[60px] pt-[140px] text-white md:px-[50px] md:pb-[80px] md:pt-[160px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[80px]">
        
        {/* Top Section */}
        <div className="flex w-full flex-col items-start gap-[50px] md:flex-row md:justify-between">
          
          {/* Left Column: Logo, Text, Socials */}
          <div className="flex flex-col items-start gap-[30px] md:w-[45%]">
            <Link href="/" className="relative h-[45px] w-[200px]">
              <Image
                src="https://framerusercontent.com/images/BSRgcqXVBZBNnmjOdysQycXmR5s.png"
                alt="B&O Trust Services"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[16px] font-medium leading-[1.6] text-white/50">
              Nos especializamos en ayudarte a tomar decisiones clave sobre impuestos, seguros de salud, migración y más, para garantizar la seguridad y estabilidad de tu familia y negocios en los Estados Unidos
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61565322155205" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/bo_trust_service/reels/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.youtube.com/@BOtrustServices/shorts" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon />
              </a>
              <a href="https://www.tiktok.com/@botrust_services" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Pages */}
          <div className="flex flex-col items-start gap-[30px] md:w-[45%]">
            <h5 className="text-[24px] font-semibold text-white">Pages</h5>
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Home</Link>
                <Link href="/seguros-medicos-obamacare" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Seguros</Link>
                <Link href="/taxes" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Taxes</Link>
                <Link href="/blog" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Blog</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/service" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Services</Link>
                <Link href="/about" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">About</Link>
                <Link href="/política-de-privacidad" className="text-[16px] font-medium text-white/50 transition-colors hover:text-white">Política de Privacidad</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Contact */}
        <div className="flex w-full flex-col items-start gap-[30px]">
          <h5 className="text-[24px] font-semibold text-white">Contact</h5>
          
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[16px] font-medium text-white">Phone</p>
              <p className="text-[16px] font-medium text-white/50">+1 (305) 639-0110</p>
            </div>
            
            <div className="flex flex-col items-start gap-2">
              <p className="text-[16px] font-medium text-white">Mail</p>
              <p className="text-[16px] font-medium text-white/50">contacto@botrustservices.com</p>
            </div>
            
            <div className="flex flex-col items-start gap-2">
              <p className="text-[16px] font-medium text-white">Dirección</p>
              <p className="text-[16px] font-medium text-white/50">4811 Nw 79th Ave Unit 2 Doral FL 33166</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
