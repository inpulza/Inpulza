import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-5 py-[60px] md:px-[50px] md:py-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[30px] md:gap-[35px]">
        
        <div className="flex flex-col items-start gap-0">
          <Quote className="h-[70px] w-[70px] rotate-180 text-black/10" />
          <h2 className="text-[27px] font-black leading-[1.2] tracking-tight text-dark md:text-[45px]">
            Clientes Satisfechos
          </h2>
        </div>

        <div className="h-[450px] w-full md:w-[90%]">
          {/* Placeholder for Elfsight widget */}
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-black/20 bg-gray-50">
            <p className="text-gray-text">Google Reviews Widget Placeholder</p>
          </div>
        </div>

      </div>
    </section>
  );
}
