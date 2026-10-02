"use client";

import { useState } from "react";

const proyectos = ["Bilbao Residencial", "Tarragona Residencial"];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-groen-dark placeholder:text-groen-gray/60 focus:border-groen-green focus:outline-none focus:ring-2 focus:ring-groen-green/20";
const labelClass = "block text-xs font-semibold uppercase tracking-widest text-groen-dark mb-2";

/*
  No hay backend de formularios todavía: al enviar se abre WhatsApp con los
  datos capturados como mensaje para el asesor.
*/
export default function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", proyecto: "", mensaje: "" });

  const update = (campo: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [campo]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      "Hola, quiero recibir información.",
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Correo: ${form.correo}`,
      `Proyecto de interés: ${form.proyecto}`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/526671040239?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="nombre" className={labelClass}>Nombre</label>
        <input id="nombre" required placeholder="Nombre" value={form.nombre} onChange={update("nombre")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="telefono" className={labelClass}>Teléfono</label>
        <input id="telefono" type="tel" required placeholder="Teléfono" value={form.telefono} onChange={update("telefono")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="correo" className={labelClass}>Correo electrónico</label>
        <input id="correo" type="email" required placeholder="Correo electrónico" value={form.correo} onChange={update("correo")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="proyecto" className={labelClass}>Proyecto de interés</label>
        <select id="proyecto" required value={form.proyecto} onChange={update("proyecto")} className={inputClass}>
          <option value="" disabled>Selecciona un desarrollo</option>
          {proyectos.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="mensaje" className={labelClass}>Mensaje</label>
        <textarea id="mensaje" rows={5} placeholder="Cuéntanos qué estás buscando" value={form.mensaje} onChange={update("mensaje")} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-groen-green-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          Quiero recibir información
        </button>
      </div>
    </form>
  );
}
