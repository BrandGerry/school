import Doc from "../images/Doc.jpg";
import Escenario from "../images/Escenario.jpg";
import Extracurri from "../images/Extracurri.jpg";
import Maestra from "../images/Maestra.jpg";
import Manualidades from "../images/Manualidades.jpg";
import Saludable from "../images/Saludable.jpg";
import Tareas from "../images/Tareas.jpg";
import Verano from "../images/Verano.jpg";
import Image from "next/image";

const Servicios = () => {
  const servicios = [
    { img: Doc, nombre: "Filtro Medico" },
    { img: Escenario, nombre: "Festival Anual de Teatro" },
    { img: Extracurri, nombre: "Talleres Vespertinos" },
    { img: Maestra, nombre: "Personal Educativo Certificado" },
    { img: Manualidades, nombre: "Manualidades" },
    { img: Saludable, nombre: "Alimentación Saludable" },
    { img: Tareas, nombre: "Tareas Dirigidas" },
    { img: Verano, nombre: "Curso de Verano" },
  ];

  return (
    <div
      className="mx-auto px-4 py-8"
      style={{
        backgroundColor: "var(--backgroundSec)",
      }}
    >
      <h3 className="text-4xl font-bold text-center mb-8">Servicios</h3>

      <div className="flex flex-wrap justify-center gap-10">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col items-center w-32 md:w-60">
            <div className="w-20 h-20 md:w-48 md:h-48 rounded-full border-4 md:border-8 border-blue-500 overflow-hidden mb-3">
              <Image
                src={servicio.img}
                alt={servicio.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm md:text-lg font-medium">
              {servicio.nombre}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
