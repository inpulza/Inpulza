import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Asesoría Personalizada y Multidisciplinaria',
    desc: 'Nos adaptamos a tus necesidades específicas, ya sea en temas fiscales, migratorios o de salud. Nuestro equipo multidisciplinario asegura que recibas la mejor orientación en cada área.',
  },
  {
    title: 'Experiencia y Confianza',
    desc: 'Más de 10 años ayudando a personas y empresas a alcanzar estabilidad financiera y legal.',
  },
  {
    title: 'Facilidad y Accesibilidad',
    desc: 'Ofrecemos servicios accesibles tanto en línea como presencialmente, con consultas gratuitas para que tomes decisiones informadas sin compromiso.',
  },
  {
    title: 'Acompañamiento Continuo',
    desc: 'No solo resolvemos problemas, sino que te acompañamos en cada paso, asegurando que tu vida en EE.UU. sea estable y exitosa.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#fdfbf2] px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-[50px] md:flex-row md:gap-[80px]">
        
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2">
          <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">
            ¿Por Qué Elegir Nuestros Servicios?
          </h2>
          
          <div className="h-px w-full bg-black/10" />
          
          <div className="flex flex-col gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex shrink-0 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-[#fcdd33] fill-current">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-[20px] font-semibold leading-[1.2] text-dark">
                    {reason.title}
                  </h6>
                  <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-black/10 mt-4" />

          <div className="flex w-full flex-col gap-8 mt-2">
            
            <div className="flex flex-col gap-3">
              <div className="flex w-full items-center justify-between">
                <h6 className="text-[20px] font-semibold leading-[1.2] text-dark">Professional Consultant</h6>
                <h6 className="text-[20px] font-semibold leading-[1.2] text-gray-text">98%</h6>
              </div>
              <div className="h-2 w-full bg-black/30">
                <div className="h-full w-[98%] bg-[#fcdd33]" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex w-full items-center justify-between">
                <h6 className="text-[20px] font-semibold leading-[1.2] text-dark">Client Satisfaction</h6>
                <h6 className="text-[20px] font-semibold leading-[1.2] text-gray-text">92%</h6>
              </div>
              <div className="h-2 w-full bg-black/30">
                <div className="h-full w-[92%] bg-[#3552ea]" />
              </div>
            </div>

          </div>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-[30px] md:h-auto md:w-1/2 md:flex-grow">
          <Image
            src="https://framerusercontent.com/images/AOTHs2UGjpplvSOBaoVTledUtBw.jpg"
            alt="Familia feliz"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
