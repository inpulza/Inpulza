export default function PreFooterCTA() {
  return (
    <div className="relative z-10 -mb-[80px] flex w-full justify-center px-5 md:px-[50px]">
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-[30px] rounded-[30px] bg-[#fcdd33] px-5 py-[50px] text-center md:px-[80px] md:py-[60px]">
        
        <h4 className="text-[24px] font-semibold leading-[1.3] text-dark md:text-[32px]">
          ¿Necesita ayuda o tiene alguna pregunta sobre nuestro trabajo? Estamos aquí.
        </h4>
        
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          
          {/* Consulta Gratuita */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-[#6b6b6b]">
              <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z" />
            </svg>
            <p className="text-[18px] font-medium text-[#6b6b6b]">Consulta gratuita</p>
          </div>

          {/* Soporte 24/7 */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-[#6b6b6b]">
              <path d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z" />
            </svg>
            <p className="text-[18px] font-medium text-[#6b6b6b]">Soporte 24 h, 7 días a la semana</p>
          </div>

        </div>

      </div>
    </div>
  );
}
