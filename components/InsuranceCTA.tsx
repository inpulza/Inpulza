import Link from 'next/link';

export default function InsuranceCTA() {
  return (
    <section className="flex w-full flex-col items-center justify-center p-5 md:p-[50px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[30px] rounded-[30px] bg-[#fcde32]/30 py-[50px] md:gap-[50px]">
        
        <div className="flex w-[85%] flex-col items-center justify-center gap-[10px] md:w-[72%]">
          <h3 className="text-center text-[24px] font-black leading-[1.2] text-dark md:text-[30px]">
            Comparamos Seguros para Encontrar la Mejor Cobertura y Precio para Ti
          </h3>
          <p className="text-center text-[16px] font-medium leading-[1.4] text-dark">
            Analizamos y comparamos los mejores planes de salud y vida de diferentes aseguradoras para que no tengas que preocuparte por pagar de más o estar mal cubierto. Nuestro equipo te ayuda a seleccionar el seguro perfecto que se ajuste tanto a tus necesidades como a tu presupuesto.
          </p>
        </div>

        <Link 
          href="/contact"
          className="rounded-full bg-primary px-7 py-3 text-[16px] font-bold text-dark transition-transform hover:scale-105"
        >
          ¡Obtén tu Comparación!
        </Link>
        
      </div>
    </section>
  );
}
