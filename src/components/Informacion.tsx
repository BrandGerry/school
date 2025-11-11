import { MapPin, Phone, Mail, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import Logo from "../images/Logo.png";
import Link from "next/link";

const Informacion = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <h2
        className="text-4xl font-bold mb-4"
        style={{
          color: "var(--foreground)",
        }}
      >
        Informacion
      </h2>
      {/* Logo */}
      <div className="mb-8">
        <Image
          src={Logo}
          alt="Logo Tegüi"
          width={180}
          height={180}
          className="rounded-full shadow-md"
        />
      </div>

      {/* Información principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="w-8 h-8 md:w-5 md:h-5 text-green-700" />
          <p>
            Cerrada de Félix Cuevas #15, entre las calles Fresas y San Francisco
          </p>
        </div>

        <p>Colonia Del Valle, C.P. 03200</p>
        <p>Benito Juárez, CDMX</p>

        <div className="flex items-center justify-center space-x-2">
          <Phone className="w-5 h-5 text-green-700" />
          <p>55 5575 2830</p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Mail className="w-5 h-5 text-green-700" />
          <p>cenditegui@hotmail.com</p>
        </div>
      </div>

      {/* Enlaces inferiores */}
      <div className="mt-10 flex flex-col md:flex-row">
        <Link
          href="/calendario"
          className="flex items-center text-green-700 hover:text-green-900 transition space-x-1 px-2 mb-3 md:mb-0"
        >
          <Calendar className="w-5 h-5" />
          <p>Calendario Escolar</p>
        </Link>

        <Link
          href="/aviso-privacidad"
          className="flex items-center justify-end text-green-700 hover:text-green-900 transition space-x-1 px-2"
        >
          <FileText className="w-5 h-5" />
          <p>Aviso de Privacidad</p>
        </Link>
      </div>
    </section>
  );
};

export default Informacion;
