import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

const profiles = [
  "https://framerusercontent.com/images/NAHQeAiwfEN4CaojaI8QwRg95aE.jpg",
  "https://framerusercontent.com/images/bzl9vAWsj1kC8ho9yBMW8p4Y8.jpg",
  "https://framerusercontent.com/images/0fIye34SgGyxgnzkZsAK0HgIFg.jpg",
  "https://framerusercontent.com/images/Y8cPbzJoeEYeotAkpX7Ae32qkws.jpg"
];

export default function CTA() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[40px] rounded-[30px] bg-[#fdf8cc] px-5 py-[60px] text-center md:px-[100px] md:py-[80px]">
        
        <div className="flex max-w-[900px] flex-col items-center gap-[20px]">
          <h3 className="text-[32px] font-semibold leading-[1.2] tracking-tight text-dark md:text-[45px]">
            Listo para tomar el control de tus finanzas, salud y migración?
          </h3>
          <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
            Nuestro equipo está aquí para ayudarte a simplificar y mejorar cada aspecto de tu vida en Estados Unidos. Ya sea que necesites asesoría fiscal, seguros de salud o apoyo con tus trámites migratorios, estamos a tu disposición. ¡Agenda una consulta gratuita y da el primer paso hacia un futuro seguro y estable!
          </p>
        </div>

        <Link 
          href="/contact"
          className="rounded-[35px] bg-[#fcdd33] px-8 py-4 text-[16px] font-semibold text-dark transition-transform hover:scale-105"
        >
          ¡Conecta con Nosotros Hoy!
        </Link>

        <div className="mt-4 flex flex-col items-center justify-center gap-[20px] md:flex-row md:gap-[30px]">
          
          {/* Profiles Container */}
          <div className="flex items-center justify-center rounded-[58px] bg-[#fcdd33]/40 p-[10px]">
            <div className="flex -space-x-4">
              {profiles.map((src, i) => (
                <div key={i} className="relative h-[55px] w-[55px] overflow-hidden rounded-full border-2 border-[#fdf8cc]">
                  <Image
                    src={src}
                    alt={`Customer ${i + 1}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center gap-[5px] md:items-start">
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#fcdd33] text-[#fcdd33]" />
              ))}
            </div>
            <p className="text-[16px] font-medium text-gray-text">
              10k+ clientes felices
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
