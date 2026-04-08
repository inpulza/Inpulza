import { ChevronsUp } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Soluciones Fiscales y Empresariales',
    items: [
      'Taxes Personales y Corporativos',
      'Agente de Aceptación CAA',
      'Start-Up Empresarial',
    ],
  },
  {
    title: 'Seguros de Vida y Salud',
    items: [
      'Seguros de Vida',
      'Seguros de Salud (Obamacare)',
      'Seguros Personalizados',
    ],
  },
  {
    title: 'Soluciones Migratorias y Legales',
    items: [
      'Servicios Migratorios',
      'Permisos de Trabajo',
      'Notario Público',
    ],
  },
];

export default function Services() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[60px]">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3 md:w-2/3">
            <p className="text-[16px] font-normal text-gray-text">Nuestras capacidades</p>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">
              Soluciones Especializadas para Todas Tus Necesidades
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:w-1/3 md:items-start">
            <p className="text-[16px] font-medium leading-[1.6] text-gray-text md:text-left">
              Desde impuestos hasta migración, ofrecemos un servicio integral para asegurar que todos tus trámites y gestiones estén en las mejores manos.
            </p>
            <Link 
              href="/service"
              className="w-fit rounded-[35px] bg-dark px-8 py-4 text-[16px] font-semibold text-[#f5f7f9] transition-transform hover:scale-105"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid w-full gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="relative flex flex-col rounded-[10px] bg-[#f5f7f9] p-6 pt-12">
              {/* Badge positioned at top right with offset */}
              <div className="absolute top-0 right-6 flex h-[50px] w-[40px] items-start justify-center rounded-bl-[30px] rounded-br-[30px] bg-[#fcdd33]">
                <ChevronsUp className="mt-2 h-6 w-6 text-dark" />
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <h5 className="text-[20px] font-semibold leading-[1.2] text-dark">
                  {service.title}
                </h5>
              </div>
              
              <ul className="mt-8 flex flex-col gap-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="flex shrink-0 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 text-black/30 fill-current">
                        <path d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                      </svg>
                    </div>
                    <span className="text-[16px] font-medium text-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
