import ContactoForm from "@/components/ContactoForm";

export const metadata = {
  title: "Contacto | Groen Inmobiliaria",
  description:
    "Hablemos de tu próximo hogar. Un asesor Groen puede ayudarte a conocer nuestros desarrollos en Hermosillo y Nogales, Sonora.",
};

export default function ContactoPage() {
  return (
    <section className="pt-40 pb-24 px-6 bg-groen-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-groen-green font-semibold tracking-widest uppercase text-sm mb-3">
            Contacto
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Hablemos de tu próximo hogar.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Cuéntanos qué estás buscando. Un asesor Groen puede ayudarte a conocer nuestros desarrollos y encontrar una opción para ti.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          <ContactoForm />
        </div>
      </div>
    </section>
  );
}
