import Image from "next/image";
import Link from "next/link";
import ProyectosCarousel from "@/components/ProyectosCarousel";
import PropuestaCard from "@/components/PropuestaCard";

const proyectos = [
  {
    nombre: "Bilbao Residencial",
    ciudad: "Hermosillo, Sonora",
    descripcion: "Espacios funcionales dentro de una comunidad consolidada, pensados para aprovechar mejor cada momento de tu día.",
    href: "/proyectos/bilbao",
    imagen: "/imagenes/Bilbao/BILBAO-PORTADA.png",
    etiqueta: "Hermosillo",
  },
  {
    nombre: "Tarragona Residencial",
    ciudad: "Nogales, Sonora",
    descripcion: "Un entorno residencial donde tu hogar se complementa con espacios para convivir, disfrutar y crecer en familia.",
    href: "/proyectos/tarragona",
    imagen: "/imagenes/TARRAGONA-PORTADA.png",
    etiqueta: "Nogales",
  },
  {
    nombre: "Villa Altamira",
    ciudad: "Hermosillo",
    descripcion: "Desarrollo residencial con amplios espacios y acabados premium en Hermosillo.",
    href: "/proyectos/villa-altamira",
    imagen: "/imagenes/PROXIMAMENTE.png",
    etiqueta: "Hermosillo",
  },
  {
    nombre: "Distrito Norte",
    ciudad: "Hermosillo",
    descripcion: "Moderno desarrollo en la zona norte de Hermosillo, diseñado para el estilo de vida contemporáneo.",
    href: "/proyectos/distrito-norte",
    imagen: "/imagenes/PROXIMAMENTE.png",
    etiqueta: "Hermosillo",
  },
  {
    nombre: "Málaga",
    ciudad: "Hermosillo",
    descripcion: "Residencial con inspiración mediterránea y espacios diseñados para el confort familiar.",
    href: "/proyectos/malaga",
    imagen: "/imagenes/PROXIMAMENTE.png",
    etiqueta: "Hermosillo",
  },
  {
    nombre: "Teruel",
    ciudad: "Hermosillo",
    descripcion: "",
    href: "/proyectos/teruel",
    imagen: "/imagenes/TERUEL-PORTADA.png",
    etiqueta: "Hermosillo",
    soldOut: true,
  },
  {
    nombre: "Asturias",
    ciudad: "Hermosillo",
    descripcion: "",
    href: "/proyectos/asturias",
    imagen: "/imagenes/ASTURIAS-PORTADA.png",
    etiqueta: "Hermosillo",
    soldOut: true,
  },
  {
    nombre: "Pueblitos",
    ciudad: "Hermosillo",
    descripcion: "",
    href: "/proyectos/pueblitos",
    imagen: "/imagenes/PUEBLITOS-PORTADA.png",
    etiqueta: "Hermosillo",
    soldOut: true,
  },
];

const propuestas = [
  {
    imagen: "/imagenes/UBICACION-GROEN.jpg",
    titulo: "Ubicaciones Estratégicas",
    descripcion: "Desarrollamos en las zonas con mayor crecimiento y conectividad de Hermosillo y Nogales.",
  },
  {
    imagen: "/imagenes/TARRAGONES-PLUS1.png",
    titulo: "Diseño de Calidad",
    descripcion: "Cada detalle de nuestros hogares está pensado para ofrecerte confort, funcionalidad y estilo.",
    escalaImagen: "scale-125",
    posicionImagen: "-translate-y-6",
  },
  {
    imagen: "/imagenes/SATISFACCION-GROEN.jpg",
    titulo: "Satisfacción Garantizada",
    descripcion: "Tu satisfacción es nuestra prioridad. Nos comprometemos contigo desde el primer día hasta la entrega.",
  },
  {
    imagen: "/imagenes/CALIDAD-GROEN.jpg",
    titulo: "Respaldo y Confianza",
    descripcion: "Somos una empresa seria con proyectos entregados a tiempo y con la calidad prometida.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background video */}
        <div className="absolute inset-0 bg-groen-dark overflow-hidden rounded-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/HERO-VIDEO.mp4" type="video/mp4" />
          </video>
          {/* Overlay oscuro para legibilidad del texto */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-4">
            Groen Inmobiliaria
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-5xl md:text-7xl font-normal text-white leading-tight mb-6">
            Creamos espacios para
            <span className="block text-white">construir tu futuro.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Desarrollamos comunidades pensadas para vivir, crecer y disfrutar cada etapa de tu vida.
          </p>

          {/* Ver proyectos */}
          <a
            href="#proyectos"
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
          >
            <span className="text-white/80 text-sm font-medium tracking-widest uppercase group-hover:text-white transition-colors">
              Conoce nuestros proyectos
            </span>
            <div className="animate-bounce">
              <svg className="w-5 h-5 text-white/70 group-hover:text-groen-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* ── PROYECTOS DESTACADOS ─────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div id="proyectos" className="text-center mb-16 scroll-mt-30">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Proyectos Groen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Encuentra tu espacio para crecer.
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-2xl mx-auto">
              Conoce nuestros desarrollos residenciales en Sonora y descubre una comunidad pensada para tu estilo de vida.
            </p>
          </div>

          <ProyectosCarousel proyectos={proyectos} />
        </div>
      </section>

      {/* ── TRATO GROEN ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="w-full md:w-1/2 relative h-96 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/imagenes/GROEN-TRATO.jpg"
              alt="Trato Groen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-light text-groen-dark leading-tight mb-6">
              Tu nuevo hogar empieza con{" "}
              <span className="text-groen-green-dark font-bold">una buena decisión.</span>
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed mb-8">
              Nuestro equipo te acompaña para conocer las opciones disponibles y encontrar el hogar que mejor se adapte a ti y a tu familia.
            </p>
            <a
              href="https://wa.me/526671040239?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-groen-green-dark text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Habla con un asesor
            </a>
          </div>
        </div>
      </section>

      {/* ── PROPUESTA DE VALOR ──────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Por qué elegirnos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Construimos más que casas.
              <span className="block text-groen-green-dark">Creamos comunidad.</span>
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-2xl mx-auto">
              Cada desarrollo Groen nace pensando en las personas que lo convertirán en hogar: espacios funcionales, entornos para convivir y comunidades diseñadas para crecer contigo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propuestas.map((p) => (
              <PropuestaCard
                key={p.titulo}
                p={p}
                priority={p.imagen === "/imagenes/UBICACION-GROEN.jpg"}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 border-2 border-groen-dark text-groen-dark px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-groen-dark hover:text-white transition-all duration-200 hover:scale-105"
            >
              Conoce Groen
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────── */}
      <div className="flex justify-center bg-white">
        <hr className="w-3/4 border-t border-gray-300" />
      </div>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
<div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-groen-dark mb-5">
            Tu siguiente etapa puede comenzar aquí.
          </h2>
          <p className="text-groen-gray text-lg mb-10 max-w-2xl mx-auto">
            Conoce nuestros desarrollos y encuentra el espacio que quieres convertir en hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 bg-groen-green-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Conoce nuestros proyectos
            </a>
            <a
              href="https://wa.me/526671040239?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-groen-dark text-groen-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-groen-dark hover:text-white transition-all duration-200 hover:scale-105"
            >
              Habla con un asesor
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-groen-dark border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + descripción */}
          <div className="md:col-span-2">
            <Image
              src="/logos/groen-blanco.png"
              alt="Groen Inmobiliaria"
              width={160}
              height={64}
              className="mb-4 h-auto"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Desarrolladora inmobiliaria con proyectos residenciales en Hermosillo y Nogales, Sonora.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-groen-green transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-groen-green transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Proyectos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Proyectos</h4>
            <ul className="space-y-2">
              <li><p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hermosillo</p></li>
              <li><Link href="/proyectos/bilbao" className="text-white/60 hover:text-groen-green text-sm transition-colors">Bilbao</Link></li>
              <li><p className="text-white/40 text-xs uppercase tracking-wider mt-3 mb-1">Nogales</p></li>
              <li><Link href="/proyectos/tarragona" className="text-white/60 hover:text-groen-green text-sm transition-colors">Tarragona</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/526671040239?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20GROEN%20Inmobiliaria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-groen-green transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L0 24l6.335-1.508A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.817 9.817 0 01-5.001-1.368l-.36-.214-3.724.977.995-3.634-.234-.374A9.819 9.819 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                  667 104 0239
                </a>
              </li>
              <li>
                <a
                  href="mailto:diegoperaza@groen.com.mx"
                  className="text-white/60 hover:text-groen-green transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  diegoperaza@groen.com.mx
                </a>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/60 hover:text-groen-green transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/60 hover:text-groen-green transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2025 Groen Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/aviso-privacidad" className="text-white/30 hover:text-white/60 text-sm transition-colors">Aviso de privacidad</Link>
            <Link href="/terminos" className="text-white/30 hover:text-white/60 text-sm transition-colors">Términos</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
