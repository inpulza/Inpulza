import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

const blogPosts = [
  {
    title: "Cómo Evitar Errores en tu Declaración de Impuestos y Maximizar tu Devolución en 2024",
    category: "Gestión Financiera",
    date: "5 sept 2024",
    image: "https://framerusercontent.com/images/0QDeMnvEf6G9exjBFc17js0jw40.jpg",
    link: "/blog/como-evitar-errores",
    colSpan: "lg:col-span-3 md:col-span-1",
  },
  {
    title: "¿Cómo Obtener un Permiso de Trabajo en EE.UU.? Guía Completa para Evitar Errores",
    category: "Migración y Permisos",
    date: "5 sept 2024",
    image: "https://framerusercontent.com/images/JFMWSMkbj74Fp6b97pFc3B6zQ.jpg",
    link: "/blog/obtener-permiso-trabajo",
    colSpan: "lg:col-span-3 md:col-span-1",
  },
  {
    title: "Aspectos Fiscales Clave para Iniciar tu Negocio en EE.UU",
    category: "Asesoría Fiscal",
    date: "3 sept 2024",
    image: "https://framerusercontent.com/images/Kquh0Xgf9ZD2wiucR1EEyZyoOo0.jpg",
    link: "/blog/aspectos-fiscales-negocio",
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    title: "Servicios Notariales: Todo lo que Necesitas Saber para Validar tus Documentos Legales",
    category: "Servicios Legales",
    date: "1 sept 2024",
    image: "https://framerusercontent.com/images/Y1CHG8VqdjSoGUQQAsmrJ2LC4Gs.jpg",
    link: "/blog/servicios-notariales",
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    title: "Cómo Obtener el Mejor Seguro de Salud a través de Obamacare",
    category: "Seguros de Salud",
    date: "22 feb 2023",
    image: "https://framerusercontent.com/images/a0BL6AAaX3LTH71NcnuJE4TcZU.jpg",
    link: "/blog/seguro-salud-obamacare",
    colSpan: "lg:col-span-2 md:col-span-1",
  }
];

export default function Blog() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-5 py-[60px] md:px-[50px] md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[50px]">
        
        {/* Header */}
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-3 md:w-1/2">
            <p className="text-[16px] font-normal text-gray-text">Mantente Informado y Toma Mejores Decisiones</p>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-dark md:text-[45px]">
              Descubre Información Útil en Nuestro Blog
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[16px] font-medium leading-[1.6] text-gray-text">
              Explora nuestros artículos donde te proporcionamos consejos y guías prácticas sobre impuestos, migración, seguros de salud y más. Aprende cómo nuestros servicios pueden ayudarte a alcanzar tus objetivos con la información más reciente y relevante.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {blogPosts.map((post, i) => (
            <Link 
              key={i} 
              href={post.link}
              className={`group relative flex min-h-[350px] w-full flex-col justify-end overflow-hidden rounded-[20px] p-8 md:min-h-[400px] ${post.colSpan}`}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="rounded-full bg-[#fcdd33] px-4 py-1.5">
                  <span className="text-[14px] font-semibold text-dark">{post.category}</span>
                </div>
                
                <h5 className="text-[20px] font-semibold leading-[1.3] text-white md:text-[24px]">
                  {post.title}
                </h5>
                
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4" />
                  <span className="text-[14px] font-medium">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-4 flex justify-center">
          <Link 
            href="/blog"
            className="rounded-[35px] bg-dark px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-dark/80"
          >
            Leer más
          </Link>
        </div>

      </div>
    </section>
  );
}
