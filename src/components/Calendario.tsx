import { Calendar1 } from "lucide-react";

const Calendario = () => {
  return (
    <section
      className="flex flex-col items-center px-6 py-16 w-full"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Calendar1 className="w-10 h-10 text-blue-600" />
        <h2 className="text-4xl font-bold">Calendario</h2>
      </div>

      <div className="w-full max-w-5xl h-[75vh]">
        <iframe
          src="/Calendario.pdf"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Calendario;
