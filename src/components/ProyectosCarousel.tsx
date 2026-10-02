"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Proyecto = {
  nombre: string;
  ciudad: string;
  descripcion?: string;
  href: string;
  imagen: string;
  soldOut?: boolean;
};

export default function ProyectosCarousel({ proyectos }: { proyectos: Proyecto[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Flecha izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-groen-green hover:text-white transition-colors"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Track */}
      <div
        ref={ref}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {proyectos.map((p) => (
          <Link
            key={p.nombre}
            href={p.href}
            className="group flex-shrink-0 w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 block"
          >
            {/* Imagen */}
            <div
              className="relative rounded-t-2xl overflow-hidden"
              style={{ height: "176px", width: "288px" }}
            >
              {p.soldOut && (
                <div className="absolute top-3 left-3 z-10 bg-groen-dark text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Sold Out
                </div>
              )}
              {p.imagen ? (
                <div
                  className="transition-transform duration-500 group-hover:scale-105"
                  style={{
                    position: "absolute",
                    top: "-10%",
                    left: "-10%",
                    width: "120%",
                    height: "120%",
                    backgroundImage: `url(${p.imagen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-groen-green-light flex items-center justify-center">
                  <svg className="w-12 h-12 text-groen-green/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-bold text-groen-dark text-base group-hover:text-groen-green transition-colors">
                {p.nombre}
              </h3>
              <p className="text-groen-gray text-sm mt-0.5">{p.ciudad}</p>
              {p.descripcion && !p.soldOut && (
                <>
                  <p className="text-groen-gray text-sm leading-relaxed mt-3">{p.descripcion}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-groen-green-dark group-hover:text-groen-green transition-colors">
                    Conocer proyecto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="mt-10 mx-1 h-0.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-groen-green rounded-full transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Flecha derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-groen-green hover:text-white transition-colors"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
