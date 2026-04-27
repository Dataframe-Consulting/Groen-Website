"use client";

import { useState } from "react";
import Image from "next/image";

type Propuesta = {
  imagen: string;
  titulo: string;
  descripcion: string;
  escalaImagen?: string;
  posicionImagen?: string;
};

export default function PropuestaCard({ p, priority }: { p: Propuesta; priority?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const tieneEscala = "escalaImagen" in p;

  return (
    <div
      className="rounded-2xl border border-gray-100 transition-all duration-300 overflow-hidden"
      style={{
        borderColor: hovered ? "var(--color-groen-green)" : "",
        boxShadow: hovered ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={p.imagen}
          alt={p.titulo}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className={`object-cover transition-transform duration-500 ${p.escalaImagen ?? ""} ${p.posicionImagen ?? ""}`}
          style={{
            transform: hovered
              ? tieneEscala ? "scale(1.32)" : "scale(1.05)"
              : tieneEscala ? "scale(1.25)" : "scale(1)",
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-groen-dark mb-2">{p.titulo}</h3>
        <p className="text-groen-gray text-sm leading-relaxed">{p.descripcion}</p>
      </div>
    </div>
  );
}
