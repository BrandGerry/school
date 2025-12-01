import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await resend.emails.send({
      from: "Contacto Tegüi <onboarding@resend.dev>",
      to: "gerry.marquet@gmail.com",
      subject: `Nuevo mensaje de contacto de ${data.nombre}`,
      text: `
        Nombre: ${data.nombre}
        Teléfono: ${data.telefono}
        Correo: ${data.correo}
        Comentarios:
        ${data.comentarios}
              `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
