"use client";

import { useState } from "react";
import Image from "next/image";

type Modelo = {
  nombre: string;
  m2Construccion: string;
  m2Lote: string;
  recamaras: number;
  banos: number;
  extras: string[];
  imagen: string;
  objectPosition?: string;
};

export default function ModeloCard({ m }: { m: Modelo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/526629487134?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(m.nombre)}%20de%20Bilbao.`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen */}
      <Image
        src={m.imagen}
        alt={`Modelo ${m.nombre}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500"
        style={{
          objectPosition: m.objectPosition ?? "center",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Gradiente */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      />

      {/* Contenido */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <h3 className="text-xl font-bold mb-2">{m.nombre}</h3>
        <div className="space-y-1 text-sm text-white/80 mb-3">
          <p>{m.recamaras} recámaras · {m.banos} baños</p>
          <p>Construcción: {m.m2Construccion}</p>
          <p>Lote: {m.m2Lote}</p>
        </div>
        <ul className="space-y-0.5 mb-4">
          {m.extras.map((e) => (
            <li key={e} className="flex items-center gap-1.5 text-xs text-white/70">
              <svg className="w-3 h-3 text-groen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {e}
            </li>
          ))}
        </ul>
        <span className="inline-block w-full text-center border border-white/60 text-white text-sm font-semibold px-4 py-2 rounded-lg">
          Cotizar este modelo
        </span>
      </div>
    </a>
  );
}
