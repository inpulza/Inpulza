import Image from 'next/image';

const logos = [
  { name: 'Cigna', src: 'https://framerusercontent.com/images/2rOb1QqV333DnIyu0yU34foK91Y.png' },
  { name: 'Doctors', src: 'https://framerusercontent.com/images/l0OQ76udIuQjCZm65HIkytGPvWg.png' },
  { name: 'Medicare', src: 'https://framerusercontent.com/images/H8oBZrqr8i71RhafzchtGH9cc.png' },
  { name: 'First Health', src: 'https://framerusercontent.com/images/IsRfEvjy1Lphxp8mHcoN3Nx0.png' },
  { name: 'Florida Blue', src: 'https://framerusercontent.com/images/CpJgi78WaZs7SB5Voy4LqHEyVo.png' },
  { name: 'Medicaid', src: 'https://framerusercontent.com/images/tZmU5vXvxOof5BQ52F0Z1Cno5jc.png' },
  { name: 'United Healthcare', src: 'https://framerusercontent.com/images/PLQagj9qllbybgQtyMgcHmYOSM.png' },
  { name: 'Oscar', src: 'https://framerusercontent.com/images/w0dpTWZn0MLjqkH62yGZAXr2o.png' },
  { name: 'Aetna', src: 'https://framerusercontent.com/images/nEhWAAXwGuokxfhvAOCghvZGg.png' },
];

export default function Logos() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 p-5 md:p-10">
      <h3 className="text-center text-[26px] font-semibold text-dark">
        Tenemos +20 compañías de seguro disponibles para ti
      </h3>
      
      {/* Container with mask for fading edges */}
      <div className="relative flex w-full max-w-[1440px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12.5%,black_87.5%,transparent)]">
        {/* Infinite scrolling animation */}
        <div className="flex animate-scroll items-center gap-16">
          {/* Render logos multiple times to ensure seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="relative h-[77px] w-[150px] shrink-0 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={102}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
