"use client";

import { useEffect, useState } from "react";

const Contacto = () => {
  //ESTADO DE DATA
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    comentarios: "",
    privacidad: false,
    captcha: "",
  });
  //ESTADO DE VALOR CAPTCHA
  const [captchaValue] = useState(
    Math.floor(1000 + Math.random() * 9000).toString()
  );
  //ESTADO PARA MENSAJE
  const [mensaje, setMensaje] = useState("");

  //CAMBIO DEL INPUT
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    if (!mensaje) return;

    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [mensaje]);

  //SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //SI EL CAPTCHA ES INCORRECTO MANDA UN MSJ
    if (formData.captcha !== captchaValue) {
      setMensaje("El captcha es incorrecto.");
      return;
    }
    //DEBE ACEPTAR EL AVISO DE PRIVACIDAD
    if (!formData.privacidad) {
      setMensaje("Debe aceptar el aviso de privacidad.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          destinatario: "gerry.marquet@gmail.com",
        }),
      });

      if (response.ok) {
        setMensaje("Mensaje enviado correctamente. Gracias por contactarnos.");
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          comentarios: "",
          privacidad: false,
          captcha: "",
        });
      } else {
        setMensaje("Hubo un error al enviar. Intente más tarde.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error de conexión. Intente más tarde.");
    }
  };

  return (
    <section
      className="flex flex-col items-center px-6 py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <h2 className="text-4xl font-bold mb-8">Contacto</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl shadow-lg rounded-xl p-8 space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Comentarios</label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 h-32"
          ></textarea>
        </div>

        {/* Checkbox Aviso de Privacidad */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="privacidad"
            checked={formData.privacidad}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-sm">
            Conozca los términos de nuestro Aviso de Privacidad y acepte
            seleccionando la casilla de verificación para llenar el formulario.
          </label>
        </div>

        {/* Captcha */}
        <div>
          <label className="block font-medium mb-1">
            Captcha: Escriba el siguiente número →{" "}
            <span className="font-bold">{captchaValue}</span>
          </label>
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Enviar
        </button>

        {mensaje && (
          <p
            className={`text-right text-sm mt-4 font-bold ${
              mensaje.startsWith("Mensaje") ? "text-green-700" : "text-red-700"
            }`}
          >
            {mensaje}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contacto;
