import Informacion from "@/components/Informacion";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Nosotros/>
      <Servicios/>
      <Informacion/>
    </div>
  );
}
