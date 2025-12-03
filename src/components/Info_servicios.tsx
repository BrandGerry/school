import { MapPin, Phone, Mail, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import ExtraCurri from "../images/Extracurri.jpg";
import ExtraCurri2 from "../images/ExtraCurri2.jpg";

const InfoServicios = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundColor: "var(--backgroundSec)",
      }}
    >
      <h2
        className="text-4xl font-bold mb-4"
        style={{
          color: "var(--foreground)",
        }}
      >
        Informacion de Servicios
      </h2>

      {/* Información principal */}
      <div className="mt-6">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Programa Escolar</h3>
            <ul className="list-disc list-outside text-lg space-y-1 pl-6">
              <li>
                Estimulación temprana para bebés desde los 45 días de nacidos
                siempre al cuidado de una enfermera
              </li>
              <li>
                Educación inicial para Maternales dirigidos por pedagoga y
                especialista en estimulación temprana
              </li>
              <li>
                Educación preescolar: Kínder I, Kínder II y Preprimaria a cargo
                de Licenciadas en Educación Preescolar
              </li>
              <li>
                Todos los grupos cuentan con un Asistente Educativo certificado
              </li>
              <li>
                Para Maternales y Educación preescolar el programa incluye:
                Inglés, Música, Computación y Educación Física
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Estancia Infantil</h3>
            <ul className="list-disc list-outside text-lg space-y-1 pl-6">
              <li>Horario de 7:00 a 20:00 horas</li>
              <li>Filtro médico diario con pediatra</li>
              <li>Talleres vespertinos (Zumba, Tae Kwon Do)</li>
              <li>Tareas dirigidas</li>
              <li>Actividades artísticas y manualidades</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Otras Actividades</h3>
            <ul className="list-disc list-outside text-lg space-y-1 pl-6">
              <li> Cursos de verano</li>
              <li>Festival anual en teatro</li>
              <li>Huerto Escolar</li>
              <li>Festivales de Navidad y Día de Muertos</li>
              <li>Celebración interna del Día del Niño</li>
            </ul>
          </div>

          <div className="flex justify-center gap-20">
            <Image
              src={ExtraCurri}
              alt="Niños aprendiendo en Tegüi"
              width={400}
              className="rounded-3xl shadow-lg object-cover"
            />
            <Image
              src={ExtraCurri2}
              alt="Niños aprendiendo en Tegüi"
              width={400}
              className="hidden md:flex rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoServicios;
