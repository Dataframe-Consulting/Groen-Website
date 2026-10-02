"use client";

import { useState } from "react";
import Image from "next/image";

type Modelo = {
  nombre: string;
  m2Construccion?: string;
  recamaras?: number;
  banos?: number;
  imagen: string;
  objectPosition?: string;
  /** Marca el modelo como "datos por confirmar" (placeholder visible) */
  pending?: boolean;
};

export default function ModeloCard({ m, proyecto = "Bilbao" }: { m: Modelo; proyecto?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/526671040239?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(m.nombre)}%20de%20${encodeURIComponent(proyecto)}.`}
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

      {/* Badge de placeholder — datos por confirmar */}
      {m.pending && (
        <span className="absolute top-3 left-3 z-30 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-950 shadow">
          Datos por confirmar
        </span>
      )}

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
        <div className="space-y-1 text-sm text-white/80 mb-4">
          <p className="font-semibold text-white">
            {m.recamaras ?? "—"} recámaras · {m.banos ?? "—"} baños
          </p>
          <p>{m.m2Construccion ?? "—"} m² de construcción</p>
        </div>
        <span className="inline-block w-full text-center border border-white/60 text-white text-sm font-semibold px-4 py-2 rounded-lg">
          Conoce {m.nombre}
        </span>
      </div>
    </a>
  );
}
