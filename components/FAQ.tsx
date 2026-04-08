'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: '¿Cómo puedo asegurarme de que mis impuestos están correctamente gestionados?',
    answer: 'Description',
  },
  {
    question: '¿Cuánto tiempo toma obtener un permiso de trabajo?',
    answer: 'El tiempo puede variar dependiendo de su caso específico y los tiempos de procesamiento actuales de USCIS.',
  },
  {
    question: '¿Qué documentos necesito para aplicar al seguro de salud (Obamacare)?',
    answer: 'Generalmente necesitará prueba de identidad, estatus migratorio y comprobante de ingresos.',
  },
  {
    question: '¿Qué tipo de negocios pueden beneficiarse de los servicios de contabilidad?',
    answer: 'Cualquier tipo de negocio, desde pequeñas startups hasta corporaciones establecidas, puede beneficiarse de una gestión contable profesional.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[50px] md:flex-row md:gap-[80px]">
        
        {/* Left Column: Accordion */}
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`flex cursor-pointer flex-col rounded-[10px] p-6 transition-colors ${
                  isOpen ? 'bg-[#fcdd33]' : 'bg-[#f5f7f9]'
                }`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h6 className="text-[18px] font-semibold leading-[1.3] text-dark md:text-[20px]">
                    {faq.question}
                  </h6>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${
                    isOpen ? 'border border-dark bg-[#fcdd33]' : 'bg-black/10'
                  }`}>
                    {isOpen ? (
                      <Minus className="h-6 w-6 text-dark" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-6 w-6 text-dark" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div className="mt-4">
                    <p className="text-[16px] font-medium text-black/60">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Content */}
        <div className="flex w-full flex-col items-start gap-10 md:w-1/2">
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-normal text-gray-text">Centro de ayuda</p>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">
              Resuelve tus dudas y obtén claridad con nuestras respuestas
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-[24px] font-semibold text-dark md:text-[28px]">
                ¿No encontraste tu respuesta?
              </h4>
              <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios fiscales, migratorios y de seguros. Si tienes más preguntas, estamos aquí para ayudarte.
              </p>
            </div>
            
            <Link 
              href="/contact"
              className="rounded-[35px] bg-[#fcdd33] px-8 py-4 text-[16px] font-semibold text-dark transition-transform hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
