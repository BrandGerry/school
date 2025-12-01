import Informacion from "@/components/Informacion";
import Servicios from "@/components/Servicios";
import React from "react";

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <Servicios />
      <Informacion />
    </div>
  );
}
