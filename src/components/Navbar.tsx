"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const proyectos = {
  Hermosillo: [{ nombre: "Bilbao", href: "/proyectos/bilbao" }],
  Nogales: [{ nombre: "Tarragona", href: "/proyectos/tarragona" }],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20 py-5"
          : "bg-transparent py-8"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/groen-verde.png"
            alt="Groen Inmobiliaria"
            width={200}
            height={80}
            className={`h-10 w-auto transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 absolute"}`}
          />
          <Image
            src="/logos/groen-blanco.png"
            alt="Groen Inmobiliaria"
            width={200}
            height={80}
            className={`h-10 w-auto transition-opacity duration-300 ${scrolled ? "opacity-0 absolute" : "opacity-100"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Dropdown Proyectos */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 font-medium transition-colors ${
                scrolled ? "text-groen-dark hover:text-groen-green" : "text-white hover:text-groen-green"
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {Object.entries(proyectos).map(([ciudad, items]) => (
                <div key={ciudad}>
                  <p className="px-4 pt-3 pb-1 text-xs font-semibold text-groen-gray uppercase tracking-wider">
                    {ciudad}
                  </p>
                  {items.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-2 text-groen-dark hover:bg-groen-green-light hover:text-groen-green transition-colors"
                    >
                      {p.nombre}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/nosotros"
            className={`font-medium transition-colors ${
              scrolled ? "text-groen-dark hover:text-groen-green" : "text-white hover:text-groen-green"
            }`}
          >
            Nosotros
          </Link>

          <a
            href="https://wa.me/526629487134?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20proyectos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-groen-dark" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-groen-dark" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-groen-dark" : "bg-white"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <p className="text-xs font-semibold text-groen-gray uppercase tracking-wider">Proyectos</p>
          {Object.entries(proyectos).map(([ciudad, items]) => (
            <div key={ciudad}>
              <p className="text-xs text-groen-gray mb-1">{ciudad}</p>
              {items.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block py-1.5 text-groen-dark hover:text-groen-green font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {p.nombre}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/nosotros"
            className="block py-1.5 text-groen-dark hover:text-groen-green font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="block w-full text-center bg-groen-green text-white px-5 py-2.5 rounded-full font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
