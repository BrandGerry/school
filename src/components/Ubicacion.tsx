import { MapPin, Phone, Mail } from "lucide-react";

const Ubicacion = () => {
  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h2 className="text-4xl font-bold mb-8">Ubicación</h2>

      {/* Información de contacto */}
      <div className="text-center mb-8 space-y-1 text-lg leading-relaxed">
        <p>Cerrada de Félix Cuevas #15</p>
        <p>Entre las calles de Fresas y San Francisco</p>
        <p>Colonia Del Valle C.P. 03200</p>
        <p>Benito Juárez, CDMX</p>

        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> 55.5575.2830
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> cenditegui@hotmail.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Ubicación en Google Maps
          </p>
        </div>
      </div>

      {/* Mapa embebido */}
      <div className="w-full max-w-3xl h-96 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Cerrada%20de%20F%C3%A9lix%20Cuevas%2015,%20Del%20Valle,%2003200%20Benito%20Ju%C3%A1rez,%20CDMX&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </section>
  );
};

export default Ubicacion;
