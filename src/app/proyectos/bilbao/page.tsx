import Link from "next/link";
import Image from "next/image";
import ModeloCard from "@/components/ModeloCard";

export const metadata = {
  title: "Bilbao | Groen Inmobiliaria",
  description:
    "Residencial Bilbao — diseño contemporáneo y acabados de alta calidad en el corazón de Hermosillo, Sonora.",
};

const modelos = [
  {
    nombre: "Begoña 1P",
    m2Construccion: "69.50 m²",
    m2Lote: "120.25 m²",
    recamaras: 2,
    banos: 2,
    extras: ["Sala", "Comedor", "Estacionamiento"],
    imagen: "/imagenes/Bilbao/Begoña-Modelo.jpeg",
  },
  {
    nombre: "Lambarri 2R",
    m2Construccion: "55.38 m²",
    m2Lote: "125.80 m²",
    recamaras: 2,
    banos: 1,
    extras: ["Sala", "Comedor", "Estacionamiento"],
    imagen: "/imagenes/Bilbao/Lambarri-Modelo.jpg",
  },
  {
    nombre: "Vizcaya",
    m2Construccion: "96.80 m²",
    m2Lote: "120.25 m²",
    recamaras: 3,
    banos: 2.5,
    extras: ["Sala", "Comedor", "2 cajones de estacionamiento"],
    imagen: "/imagenes/Bilbao/Vizcaya-Modelo.jpeg",
    objectPosition: "center 25%",
  },
  {
    nombre: "Teruel",
    m2Construccion: "111.75 m²",
    m2Lote: "120.25 m²",
    recamaras: 3,
    banos: 2.5,
    extras: ["Walk-in closet", "Sala", "Comedor", "2 cajones de estacionamiento"],
    imagen: "/imagenes/Bilbao/Teruel-Modelo.jpg",
  },
];

const amenidades = [
  "Área de alberca",
  "Jardines y áreas verdes",
  "Seguridad 24/7",
  "Acceso controlado",
  "Estacionamiento techado",
  "Alumbrado LED",
  "Vialidades pavimentadas",
  "Red de agua y drenaje",
];

export default function BilbaoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-end justify-start overflow-hidden rounded-b-3xl mx-6 mt-0" style={{ height: "95vh" }}>
        <Image
          src="/imagenes/Bilbao/BILBAO-HERO.png"
          alt="Residencial Bilbao"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 px-8 pb-20 max-w-7xl mx-auto w-full">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
            Hermosillo, Sonora
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-6xl md:text-8xl font-bold text-white leading-none mb-6">
            Bilbao
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-8">
            Residencial con diseño contemporáneo y acabados de alta calidad en el corazón de Hermosillo.
          </p>
          <a
            href="https://wa.me/526629487134?text=Hola%2C%20me%20interesa%20el%20residencial%20Bilbao."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-groen-green text-white px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Quiero más información
          </a>
        </div>
      </section>

      {/* ── RESUMEN DEL PROYECTO ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              El proyecto
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark leading-tight mb-6">
              Vive diferente en Bilbao
            </h2>
            <p className="text-groen-gray text-lg leading-relaxed mb-6">
              Residencial Bilbao es un desarrollo diseñado para familias que buscan calidad, seguridad y un estilo de vida moderno en Hermosillo. Cada casa fue pensada con espacios amplios, acabados de primera y amenidades que hacen la diferencia.
            </p>
            <p className="text-groen-gray text-lg leading-relaxed">
              Ubicado estratégicamente en la ciudad, con fácil acceso a escuelas, hospitales, centros comerciales y las principales vialidades.
            </p>
          </div>

          {/* Imagen — agregar después */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/imagenes/Bilbao/BILBAO-VIVE.png"
              alt="Residencial Bilbao"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {[
            { valor: "4", label: "Modelos disponibles" },
            { valor: "2 años", label: "Garantía de construcción" },
            { valor: "24/7", label: "Seguridad" },
            { valor: "100%", label: "Financiable" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-groen-green mb-1">{s.valor}</p>
              <p className="text-groen-gray text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODELOS ── */}
      <section className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Elige el tuyo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Modelos de casa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelos.map((m) => (
              <ModeloCard key={m.nombre} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Conoce Bilbao
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Galería
            </h2>
          </div>

          {/* Collage de galería */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative col-span-2 h-72 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Bilbao/galeria/10.png"
                alt="Familias en Residencial Bilbao"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Bilbao/galeria/9.png"
                alt="Interior de casa en Bilbao"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Bilbao/galeria/8.png"
                alt="Acceso a Residencial Bilbao"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Bilbao/galeria/11.png"
                alt="Vista aérea de Residencial Bilbao"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/imagenes/Bilbao/galeria/12.png"
                alt="Área de juegos en Residencial Bilbao"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
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
              src="/imagenes/Bilbao/BILBAO-AMENIDADES.png"
              alt="Amenidades de Residencial Bilbao"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
              Lo que incluye
            </p>
            <h2 className="text-4xl font-bold text-groen-dark mb-8">
              Amenidades del residencial
            </h2>
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
              Dónde estamos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-groen-dark">
              Ubicación
            </h2>
            <p className="mt-4 text-groen-gray text-lg max-w-xl mx-auto">
              Estratégicamente ubicado en Hermosillo, con acceso a todo lo que necesitas.
            </p>
          </div>

          {/* Mapa */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Ubicación de Residencial Bilbao"
              src="https://maps.google.com/maps?q=29.16056,-110.99751&z=16&hl=es&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=29.16056,-110.99751"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-groen-dark text-groen-dark px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-groen-dark hover:text-white transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cómo llegar
            </a>
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
            ¿Te interesa Bilbao?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Habla con uno de nuestros asesores y descubre cómo hacer de Bilbao tu nuevo hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/526629487134?text=Hola%2C%20me%20interesa%20el%20residencial%20Bilbao."
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
              href="/contacto"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-groen-dark transition-all duration-200 hover:scale-105"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
