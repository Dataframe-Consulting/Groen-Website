import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nosotros | Groen Inmobiliaria",
  description:
    "Conoce Groen Inmobiliaria: desarrolladora de vivienda en Hermosillo y Nogales, Sonora, comprometida con la calidad, el diseño y la confianza.",
};

const valores = [
  {
    titulo: "Ubicaciones estratégicas",
    descripcion:
      "Desarrollamos en las zonas con mayor crecimiento y conectividad de Hermosillo y Nogales, cerca de escuelas, hospitales y vialidades principales.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    titulo: "Diseño de calidad",
    descripcion:
      "Cada detalle de nuestros hogares está pensado para ofrecerte confort, funcionalidad y estilo, con acabados de primera.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    titulo: "Satisfacción garantizada",
    descripcion:
      "Tu satisfacción es nuestra prioridad. Te acompañamos desde el primer día hasta la entrega de tu nuevo hogar.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    titulo: "Respaldo y confianza",
    descripcion:
      "Somos una empresa seria, con proyectos entregados a tiempo y con la calidad prometida a cada familia.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-end justify-start overflow-hidden rounded-b-3xl mx-6 mt-0" style={{ height: "70vh" }}>
        <Image
          src="/imagenes/GROEN-TRATO.jpg"
          alt="Groen Inmobiliaria"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 px-8 pb-16 max-w-7xl mx-auto w-full">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
            Nosotros
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-5xl md:text-7xl font-bold text-white leading-none mb-6">
            Construimos espacios.
            <span className="block font-light">Creamos comunidad.</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            En Groen desarrollamos proyectos residenciales pensando en algo más que una vivienda. Creamos espacios funcionales y comunidades donde las familias puedan crecer, convivir y construir su futuro con confianza.
          </p>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Quiénes somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark leading-tight mb-6">
              Construimos pensando en las personas.
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed mb-8">
              Combinamos experiencia, planeación y acompañamiento para estar presentes desde
              que conoces nuestros desarrollos hasta que encuentras el lugar que quieres
              convertir en hogar.
            </p>
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 bg-groen-green-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Conoce nuestros proyectos
            </Link>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/imagenes/CALIDAD-GROEN.jpg"
              alt="Calidad Groen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ── */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Misión
            </p>
            <h3 className="text-2xl font-bold text-groen-dark mb-4">
              Hogares que mejoran vidas
            </h3>
            <p className="text-groen-gray text-lg leading-relaxed">
              Ofrecer a las familias de Sonora hogares de calidad, bien ubicados y
              accesibles, brindando acompañamiento y confianza en cada paso hacia su
              patrimonio.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Visión
            </p>
            <h3 className="text-2xl font-bold text-groen-dark mb-4">
              Crecer con cada comunidad
            </h3>
            <p className="text-groen-gray text-lg leading-relaxed">
              Ser una de las desarrolladoras de mayor confianza en el noroeste de México,
              reconocida por la calidad de sus proyectos y por el compromiso con las
              personas que los habitan.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Lo que nos define
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Nuestros valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-groen-green-light flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-groen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {v.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-groen-dark mb-2">{v.titulo}</h3>
                <p className="text-groen-gray text-sm leading-relaxed">{v.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESENCIA ── */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/imagenes/UBICACION-GROEN.jpg"
              alt="Presencia de Groen en Sonora"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Dónde estamos
            </p>
            <h2 className="text-4xl font-bold text-groen-dark mb-6">
              Presencia en Sonora
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed mb-8">
              Desarrollamos proyectos residenciales en dos de las ciudades más importantes
              del estado, con la vista puesta en las zonas de mayor crecimiento.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-groen-green mb-1">Hermosillo</p>
                <p className="text-groen-gray text-sm">Bilbao Residencial</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-groen-green mb-1">Nogales</p>
                <p className="text-groen-gray text-sm">Tarragona Residencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-groen-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-4">
            Da el siguiente paso
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Quieres conocer nuestros proyectos?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Nuestro equipo está listo para asesorarte sin compromiso y ayudarte a encontrar
            el hogar ideal para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/526671040239?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20GROEN%20Inmobiliaria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-groen-dark transition-all duration-200 hover:scale-105"
            >
              Conoce nuestros proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
