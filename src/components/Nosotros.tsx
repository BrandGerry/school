import Image from "next/image";
import School1 from "../images/school1.jpg";
import School2 from "../images/school2.jpg";
import School3 from "../images/school3.jpg";
import School4 from "../images/school4.jpg";

const Nosotros = () => {
  // Crear un array con las imágenes importadas
  const galleryImages = [School2, School3, School4];

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center px-3 py-10"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Encabezado principal */}
      <div className="max-w-4xl text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            color: "var(--foreground)",
          }}
        >
          Nosotros
        </h2>
        <p
          className="text-sm tracking-wide"
          style={{
            color: "var(--ourText)",
          }}
        >
          Acuerdo de Incorporación al Sistema Educativo Nacional:
          PRER-09180029CT
        </p>
      </div>

      {/* Bloque principal */}
      <div
        className="max-w-5xl grid md:grid-cols-2 gap-12 items-center"
        style={{
          color: "var(--ourText)",
        }}
      >
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            En <span className="font-semibold text-green-900">Tegüi</span>{" "}
            guiamos el desarrollo integral de los niños a través del juego, la
            curiosidad y el descubrimiento.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro enfoque constructivista fomenta la confianza, la autonomía y
            el aprendizaje feliz.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={School1}
            alt="Niños felices en Tegüi"
            width={450}
            height={350}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Bloque amarillo */}
      <div
        className="mt-12 md:mt-20 text-center py-8 px-4 rounded-3xl shadow-xl max-w-3xl"
        style={{
          color: "var(--foreground)",
          background:"var(--yellowBackground)"
        }}
      >
        <p className="text-xl font-light text">
          Formamos niños independientes, responsables y seguros...
        </p>
        <h3 className="text-4xl md:text-2xl font-bold mt-3 tracking-wide">
          ¡Felices!
        </h3>
      </div>

      {/* Galería minimalista */}
      <div className="mt-20 hidden md:grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={img}
              alt={`Imagen ${i + 2}`}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nosotros;
