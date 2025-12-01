import { Handshake } from "lucide-react";

const Convenio = () => {
  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Handshake className="w-10 h-10 text-blue-600" />
        <h2 className="text-4xl font-bold">Convenio</h2>
      </div>

      <p className="text-lg text-center mb-8 max-w-3xl">
        Ofrecemos beneficios exclusivos a colaboradores de empresas con
        convenio.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full text-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Convenios con Empresas
        </h3>

        <p className="mb-6">Otorgamos los siguientes descuentos:</p>

        <ul className="list-disc list-inside mb-6 ml-4">
          <li>10% en inscripciones</li>
          <li>10% en colegiaturas</li>
        </ul>

        <p className="mb-4 font-semibold">
          Aplican para colaboradores de las siguientes empresas y dependencias:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          <span>Manpower</span>
          <span>BASF</span>
          <span>Club IBM México</span>
          <span>Club de Empleados Kyndryl</span>
          <span>AAPAUNAM</span>
          <span>Pemex</span>
          <span>Grupo Carso</span>
          <span>Grupo Televisa</span>
          <span>Comisión Federal de Electricidad (CFE)</span>
        </div>

        <h4 className="text-xl font-semibold mb-4 text-blue-600">
          Requisitos para hacer válidos los convenios:
        </h4>

        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            Aplica únicamente para alumnos de nuevo ingreso y familiares
            directos de trabajadores, jubilados o miembros directivos de
            empresas en convenio.
          </li>
          <li>
            Presentar credencial vigente en original y copia que acredite el
            vínculo. En caso de familiares, adjuntar acta de nacimiento y
            credencial de elector.
          </li>
          <li>
            Empleados de PEMEX deben presentar Carta de Postulación expedida por
            Protec-salario.
          </li>
          <li>
            Cumplir con las políticas académicas y administrativas del colegio.
          </li>
          <li>No aplica retroactivo ni descuento sobre descuento.</li>
          <li>Estar al corriente en los pagos.</li>
        </ul>
      </div>
    </section>
  );
};

export default Convenio;
