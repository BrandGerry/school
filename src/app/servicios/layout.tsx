import Informacion from "@/components/Informacion";
import React from "react";

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Informacion/>
    </div>
  );
}
