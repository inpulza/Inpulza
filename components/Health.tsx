import Image from 'next/image';
import Link from 'next/link';

export default function Health() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#f5f7f9] px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[40px] md:flex-row md:items-stretch md:gap-[80px]">
        
        {/* Text Content */}
        <div className="flex w-full flex-col items-start justify-center gap-[30px] md:w-1/2">
          <div className="flex w-full flex-col items-start gap-[15px]">
            <p className="text-[18px] font-normal text-gray-text">¿Tienes la protección que tu familia necesita?</p>
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-tight text-dark md:text-[45px]">
              Elige el mejor seguro de salud y vida para garantizar su bienestar y tranquilidad.
            </h2>
            <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
              No arriesgues la seguridad de tu familia. Con nuestro asesoramiento personalizado, te ayudamos a elegir el plan de salud <span className="font-bold text-dark">(Obamacare)</span> o de vida que mejor se adapta a tus necesidades y presupuesto.
            </p>
          </div>

          <Link 
            href="/contact"
            className="rounded-[35px] bg-dark px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:scale-105"
          >
            Consulta gratuita
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative flex w-full md:w-1/2">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[30px] md:h-auto md:flex-grow">
            <Image
              src="https://framerusercontent.com/images/eI3TmZ7gO7rOogxckvPdwv8Ok1o.jpg"
              alt="Familia feliz"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
