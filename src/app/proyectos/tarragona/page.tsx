import Image from "next/image";
import ModeloCard from "@/components/ModeloCard";

export const metadata = {
  title: "Tarragona Residencial | Groen Inmobiliaria",
  description:
    "Tarragona Residencial — tu hogar también se vive afuera. Una comunidad en Nogales, Sonora, con espacios para convivir, disfrutar y crecer en familia.",
};

/*
  ⚠️ PROTOTIPOS — DATOS POR CONFIRMAR
  --------------------------------------------------------------------------
  Nombres según "GROEN Optimización de contenidos Web · V1.2" (Cambrils, Reus,
  Tarragones). El documento deja recámaras, baños y m² como [X], así que cada
  tarjeta lleva `pending: true` (badge "Datos por confirmar").
  La foto asignada a cada prototipo también está por confirmar.
*/
const modelos = [
  {
    nombre: "Cambrils",
    imagen: "/imagenes/Tarragona/Modelo-A.png",
    pending: true,
  },
  {
    nombre: "Reus",
    imagen: "/imagenes/Tarragona/Modelo-B.png",
    pending: true,
  },
  {
    nombre: "Tarragones",
    imagen: "/imagenes/Tarragona/Modelo-C.png",
    pending: true,
  },
];

const amenidades = [
  "Áreas verdes",
  "Dog Park",
  "Cancha de soccer",
  "Áreas de ejercicio",
  "Terrazas sociales",
  "Cancha de pádel (próximamente)",
];

// Renders ilustrativos de la nueva cancha de pádel
const galeriaPadel = [
  { src: "/imagenes/Tarragona/padel/padel-04.jpg", alt: "Vista aérea de la nueva cancha de pádel en Tarragona" },
  { src: "/imagenes/Tarragona/padel/padel-06.jpg", alt: "Partido en la nueva cancha de pádel de Tarragona" },
  { src: "/imagenes/Tarragona/padel/padel-02.jpg", alt: "Terraza social con asador junto a la cancha de pádel" },
  { src: "/imagenes/Tarragona/padel/padel-07.jpg", alt: "Pérgola con vista a la cancha de pádel" },
];

export default function TarragonaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-end justify-start overflow-hidden rounded-b-3xl mx-6 mt-0" style={{ height: "95vh" }}>
        <Image
          src="/imagenes/Tarragona/TARRAGONA-PORTADA.png"
          alt="Residencial Tarragona"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 px-8 pb-20 max-w-7xl mx-auto w-full">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
            Nogales, Sonora
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-6xl md:text-8xl font-bold text-white leading-none mb-6">
            Tarragona <span className="font-light">Residencial</span>
          </h1>
          <p className="text-white text-2xl font-semibold max-w-xl mb-3">
            Tu hogar también se vive afuera.
          </p>
          <p className="text-white/80 text-lg max-w-xl mb-8">
            Una comunidad en Nogales donde tu casa se complementa con espacios para convivir, disfrutar y crecer en familia.
          </p>
          <a
            href="#proyecto"
            className="inline-flex items-center gap-2 bg-groen-green text-white px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Conoce Tarragona
          </a>
        </div>
      </section>

      {/* ── RESUMEN DEL PROYECTO ── */}
      <section id="proyecto" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              El proyecto
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark leading-tight mb-6">
              Una comunidad pensada más allá de tu casa.
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed">
              En Tarragona Residencial, tu espacio continúa después de la puerta. Vive en un entorno planeado para disfrutar más momentos con tu familia y formar parte de una verdadera comunidad.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/imagenes/Tarragona/TARRAGONA-INTERIOR.png"
              alt="Interior de casa en Residencial Tarragona"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Indicadores — ⚠️ el documento V1.2 los deja como [NÚMERO / DATO OFICIAL] */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {[
            { valor: "01", label: "Dato por confirmar" },
            { valor: "02", label: "Dato por confirmar" },
            { valor: "03", label: "Dato por confirmar" },
            { valor: "04", label: "Dato por confirmar" },
          ].map((s) => (
            <div key={s.valor} className="text-center">
              <p className="text-4xl font-bold text-groen-green mb-1">{s.valor}</p>
              <p className="text-groen-dark font-medium">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="max-w-7xl mx-auto mt-6 text-center text-xs text-amber-600">
          * Indicadores pendientes de datos oficiales de Tarragona.
        </p>
      </section>

      {/* ── MODELOS ── */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Prototipos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Encuentra el hogar para tu siguiente etapa.
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-2xl mx-auto">
              Conoce nuestros tres prototipos y encuentra los espacios que mejor se adapten a ti y a tu familia.
            </p>
          </div>

          {/* Aviso de contenido placeholder */}
          <div className="mx-auto mb-12 max-w-2xl rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-center text-sm text-amber-800">
            <span className="font-semibold">Datos por confirmar.</span> Las especificaciones (recámaras, baños y m²)
            y la foto de cada prototipo están{" "}
            <span className="font-semibold">pendientes de datos oficiales</span> de Tarragona.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modelos.map((m) => (
              <ModeloCard key={m.nombre} m={m} proyecto="Tarragona" />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Galería
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Descubre Tarragona
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-2xl mx-auto">
              Conoce los espacios, amenidades y ambientes que hacen de Tarragona un lugar para disfrutar dentro y fuera de casa.
            </p>
          </div>

          {/* Collage de galería */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative col-span-2 h-72 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Tarragona/galeria/10.png"
                alt="Áreas verdes y área de eventos en Residencial Tarragona"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Tarragona/galeria/13.png"
                alt="Interior de casa en Tarragona"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Tarragona/galeria/11.png"
                alt="Calle del Residencial Tarragona"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Tarragona/galeria/12.png"
                alt="Cancha de fútbol en Residencial Tarragona"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Tarragona/galeria/9.png"
                alt="Dog park en Residencial Tarragona"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Próximamente: cancha de pádel */}
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
              <div>
                <span className="inline-block rounded-full bg-groen-green px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-3">
                  Próximamente
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-groen-dark">
                  Nueva cancha de pádel
                </h3>
              </div>
              <p className="text-xs text-groen-gray">
                Imágenes ilustrativas. El proyecto puede cambiar en el tiempo.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative col-span-2 h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/imagenes/Tarragona/padel/padel-01.jpg"
                  alt="Nueva cancha de pádel con terraza social en Tarragona"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              {galeriaPadel.map((img, i) => (
                <div key={img.src} className={`relative rounded-2xl overflow-hidden ${i === 0 ? "h-52 md:h-72" : "h-52"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENIDADES ── */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Imagen amenidad */}
          <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/imagenes/Tarragona/TARRAGONA-AMENIDADES.png"
              alt="Amenidades de Residencial Tarragona"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Amenidades
            </p>
            <h2 className="text-4xl font-bold text-groen-dark mb-4">
              Más espacios para disfrutar tu comunidad.
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed mb-8">
              Tarragona está pensado para que disfrutes más allá de tu hogar, con áreas para convivir, mantenerte activo y compartir tiempo en familia.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenidades.map((a) => (
                <li key={a} className="flex items-center gap-3 text-groen-gray">
                  <svg className="w-5 h-5 text-groen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Ubicación
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Una ubicación que conecta tu día.
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-xl mx-auto">
              Vive en Nogales con acceso a vialidades y servicios que te permiten mantenerte conectado con los lugares que forman parte de tu rutina.
            </p>
          </div>

          {/* Mapa — ⚠️ ubicación aproximada de Nogales; falta dirección exacta */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Ubicación de Residencial Tarragona (aproximada)"
              src="https://maps.google.com/maps?q=Nogales,+Sonora&z=13&hl=es&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Nogales,+Sonora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-groen-dark text-groen-dark px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-groen-dark hover:text-white transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ver ubicación
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-amber-600">
            * Ubicación aproximada (Nogales). Falta la dirección/coordenadas exactas del residencial.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-groen-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-4">
            Da el siguiente paso
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Descubre tu próximo hogar en Tarragona.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Agenda una visita y conoce una comunidad diseñada para disfrutar cada etapa de tu vida.
          </p>
          <a
            href="https://wa.me/526671040239?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20a%20Tarragona%20Residencial."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-groen-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Agenda tu visita
          </a>
        </div>
      </section>
    </>
  );
}
