import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center overflow-hidden px-5 py-20 md:h-[601px] md:flex-row md:px-20">
      <div className="flex w-full flex-col items-start justify-center gap-5 md:w-[600px] md:flex-1">
        <h1 className="text-[41px] font-semibold leading-[1.15] tracking-tight text-dark md:text-[60px]">
          Expertos en <span className="text-blue">TAXES</span> y <span className="text-blue">SEGUROS DE SALUD.</span>
        </h1>
        
        <div className="h-[1px] w-3/4 rounded-full bg-gradient-to-l from-transparent via-dark/20 to-[#eae8e1]/20" />
        
        <p className="text-[18px] font-medium leading-[1.4] text-gray-text md:w-[80%]">
          Ahorra en tus impuestos y asegura la salud de tu familia con asesoría experta y personalizada. Te ayudamos con los Taxes y a elegir el mejor seguro de salud, todo con un proceso sencillo y sin complicaciones.
        </p>
        
        <div className="mt-4">
          <Link 
            href="/contact"
            className="rounded-full bg-primary px-7 py-3 text-[16px] font-bold text-dark transition-transform hover:scale-105 inline-block"
          >
            Contactanos
          </Link>
        </div>
      </div>
      
      <div className="relative mt-10 h-[400px] w-full md:mt-0 md:h-[600px] md:flex-[0.8]">
        <Image
          src="https://framerusercontent.com/images/7sGIpgIqS0Kg9OVrhWP5tdZHyU.png"
          alt="Expertos en Taxes y Seguros"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
