import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Contacta con Nosotros',
    description: 'Programa una consulta inicial gratuita para contarnos sobre tus necesidades fiscales, migratorias o de seguros.',
    active: true,
  },
  {
    number: '02',
    title: 'Evaluación Personalizada',
    description: 'Analizamos tu situación específica y te ofrecemos soluciones personalizadas para tus desafíos.',
    active: false,
  },
  {
    number: '03',
    title: 'Plan de Acción',
    description: 'Desarrollamos un plan detallado y claro para ayudarte a alcanzar tus objetivos.',
    active: false,
  },
  {
    number: '04',
    title: 'Implementación y Seguimiento',
    description: 'Llevamos a cabo el plan y realizamos un seguimiento continuo para mayor garantía',
    active: true,
  },
];

export default function Process() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#f5f7f9] px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-[40px] md:flex-row md:gap-[80px]">
        
        <div className="relative h-[400px] w-full overflow-hidden rounded-[30px] md:h-auto md:w-1/2 md:flex-grow">
          <Image
            src="https://framerusercontent.com/images/dX0YMIBbMJl6ubVheRrOyh5zds.jpg"
            alt="Nuestro proceso"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[40px] md:w-1/2 md:py-4">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-normal text-gray-text">Nuestro proceso</p>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">
              Proceso para Obtener Nuestros Servicios
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`flex w-full flex-col items-start justify-start gap-4 rounded-[20px] p-8 ${
                  step.active ? 'bg-[#fcdd33] border-none' : 'bg-transparent border border-black/20'
                }`}
              >
                <span className="text-[80px] font-semibold leading-[1] text-black/10">
                  {step.number}
                </span>
                <h6 className="text-[20px] font-semibold leading-[1.2] text-dark">
                  {step.title}
                </h6>
                <p className="text-[16px] font-medium leading-[1.6] text-black/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
