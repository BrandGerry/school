import Image from "next/image";
import School1 from "../images/school1.jpg";
import Link from "next/link";

const Introduccion = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center px-3 py-10"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Contenido principal */}
      <div
        className="max-w-5xl grid md:grid-cols-2 gap-12 items-center"
        style={{
          color: "var(--ourText)",
        }}
      >
        {/* Texto descriptivo */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            En <span className="font-semibold text-green-900">Tegüi</span>{" "}
            acompañamos el desarrollo integral de los niños en sus primeros
            años, fortaleciendo sus emociones, relaciones y habilidades de
            pensamiento a través de un modelo constructivista y del juego como
            herramienta esencial para aprender.
          </p>
          <p className="text-lg leading-relaxed">
            Promovemos la comunicación constante con las familias, fomentando
            buenos hábitos y un aprendizaje feliz, responsable e independiente.
          </p>

          {/* Lista de niveles */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Niveles:</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Lactancia (desde 45 días de nacidos)</li>
              <li>Maternal</li>
              <li>Kínder I</li>
              <li>Kínder II</li>
              <li>Preprimaria</li>
            </ul>
          </div>

          <div className="mt-6 text-center md:text-start">
            <Link
              href="/Nosotros"
              className="px-5 py-2 bg-amber-500 rounded-md hover:bg-amber-600 transition-colors"
            >
              Ver más...
            </Link>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="flex justify-center">
          <Image
            src={School1}
            alt="Niños aprendiendo en Tegüi"
            width={450}
            height={350}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
