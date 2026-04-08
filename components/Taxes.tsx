import Image from 'next/image';

export default function Taxes() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bg-light px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[30px] md:flex-row md:items-center md:gap-[50px]">
        
        <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] md:h-[auto] md:w-1/2 md:aspect-[4/3]">
          <Image
            src="https://framerusercontent.com/images/tnXHRgJ3adzB53o5I8sKPJYZwY.jpg"
            alt="Taxes"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[30px] md:w-1/2 md:gap-[40px]">
          <div className="flex w-full flex-col items-start gap-[15px] md:gap-[20px]">
            <p className="text-[18px] font-normal text-gray-text">¿Sabías que...?</p>
            <h2 className="text-[27px] font-semibold leading-[1.2] tracking-tight text-dark md:text-[40px]">
              Un error en tu declaración de impuestos puede costarte miles de dólares en multas y sanciones. No arriesgues tu tranquilidad financiera.
            </h2>
            <p className="text-[16px] font-medium leading-[1.4] text-gray-text">
              En B&O, optimizamos tu declaración fiscal para maximizar tus beneficios y minimizar tus riesgos. ¡Deja tus impuestos en manos expertas!
            </p>
          </div>

          <div className="flex w-full flex-row items-center justify-center gap-[10px] md:justify-start">
            <div className="flex flex-col items-center justify-center gap-[10px] flex-1">
              <span className="text-[42px] font-medium text-dark">10+</span>
              <span className="text-[14px] font-medium text-gray-text text-center">Años de experiencia</span>
            </div>
            
            <div className="h-[80px] w-[1px] bg-black/10" />
            
            <div className="flex flex-col items-center justify-center gap-[10px] flex-1">
              <span className="text-[42px] font-medium text-dark">90%</span>
              <span className="text-[14px] font-medium text-gray-text text-center">Clientes satisfechos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
