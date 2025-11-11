import Informacion from "@/components/Informacion";
import Introduccion from "@/components/Introduccion";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Introduccion/>
      <Servicios/>
      <Informacion/>
    </div>
  );
}
