import { Calendar } from "lucide-react";

const Avisos = () => {
  const avisos = [
    {
      fecha: "15 de Enero 2025",
      mensaje:
        "Recordamos a los padres de familia que el regreso a clases será el día lunes 20 de enero en horario regular. Por favor asegurarse de que los alumnos porten uniforme completo.",
    },
    {
      fecha: "28 de Febrero 2025",
      mensaje:
        "Inicia el periodo de inscripción y reinscripción para el ciclo escolar 2025-2026. Pueden realizar el proceso en la administración del plantel o vía correo electrónico.",
    },
    {
      fecha: "10 de Marzo 2025",
      mensaje:
        "Se llevará a cabo nuestra jornada deportiva anual. Los alumnos deberán asistir con ropa cómoda, gorra, termo y protector solar marcado con su nombre.",
    },
  ];

  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h2
        className="text-4xl font-bold mb-8"
      >
        Avisos
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        {avisos.map((aviso, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center text-red-800 mb-2 font-medium">
              <Calendar className="w-5 h-5 mr-2" />
              <p className="text-sm font-medium">{aviso.fecha}</p>
            </div>
            <p className="text-base leading-relaxed">
              {aviso.mensaje}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avisos;
