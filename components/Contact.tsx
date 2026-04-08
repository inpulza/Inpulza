import Image from 'next/image';

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-stretch md:flex-row rounded-[30px] overflow-hidden">
        
        <div className="relative h-[400px] w-full md:h-auto md:w-1/2">
          <Image
            src="https://framerusercontent.com/images/bmfalh8fFNE8tzHhDTsXEzX8iE.jpg"
            alt="Bettys Sarmiento"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%,rgba(33,33,33,0.19)_0%,rgba(46,39,5,0.49)_99.99%,rgba(46,39,2,0.5)_100%)]" />
          
          <div className="absolute bottom-0 left-0 flex w-full flex-col items-start justify-end gap-5 p-10">
            <div className="h-[2px] w-[65px] bg-[#fcea81]/80" />
            <div className="flex flex-col gap-1">
              <h6 className="text-[20px] font-semibold leading-[1.2] text-white">Bettys Sarmiento</h6>
              <p className="text-[16px] font-medium leading-[1.6] text-[#fcdd33]">CEO BOtrust Services</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-8 bg-[#fcdd33] p-10 md:w-1/2 md:p-16">
          <div className="flex flex-col items-start gap-3 w-full">
            <p className="text-[16px] font-normal text-gray-text">Vamos a conectarnos</p>
            <h3 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">Listos para ayudarte</h3>
            <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
              ¿Necesita ayuda o tiene alguna pregunta sobre nuestro trabajo? Estamos aquí.
            </p>
          </div>

          <form className="flex w-full flex-col gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-dark">Nombre</span>
              <input 
                type="text" 
                placeholder="Jane Smith" 
                className="h-[50px] w-full rounded-[10px] border border-black/10 bg-[#f5f7fa]/70 px-4 text-[16px] text-dark outline-none placeholder:text-gray-400 focus:border-dark focus:ring-1 focus:ring-dark"
                required
              />
            </label>
            
            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-dark">Número</span>
              <input 
                type="tel" 
                placeholder="+1 305 639 0110" 
                className="h-[50px] w-full rounded-[10px] border border-black/10 bg-[#f5f7fa]/70 px-4 text-[16px] text-dark outline-none placeholder:text-gray-400 focus:border-dark focus:ring-1 focus:ring-dark"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-dark">Email</span>
              <input 
                type="email" 
                placeholder="jane@mail.com" 
                className="h-[50px] w-full rounded-[10px] border border-black/10 bg-[#f5f7fa]/70 px-4 text-[16px] text-dark outline-none placeholder:text-gray-400 focus:border-dark focus:ring-1 focus:ring-dark"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-medium text-dark">Coméntanos</span>
              <textarea 
                className="min-h-[120px] w-full rounded-[10px] border border-black/10 bg-[#f5f7fa]/70 p-4 text-[16px] text-dark outline-none focus:border-dark focus:ring-1 focus:ring-dark resize-y"
                required
              />
            </label>

            <button 
              type="submit"
              className="mt-2 h-[50px] w-full rounded-[10px] bg-[#333] text-[16px] font-semibold text-white transition-colors hover:bg-black"
            >
              Enviar
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
