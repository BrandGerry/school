import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm tracking-wide"
      style={{
        backgroundColor: "var(--backgroundFooter)",
      }}
    >
      {/* Texto principal */}
      <p className="text-center md:text-left">
        © 2025{" "}
        <span className="font-semibold">
          Centro de Desarrollo Infantil Bilingüe Tegüi, S.C.
        </span>
      </p>

      {/* Elaborado por */}
      <div className="flex items-center space-x-1 mt-2 md:mt-0">
        <p>Elaborado con</p>
        <Heart className="w-4 h-4 text-pink-400" />
        <p>
          por{" "}
          <a
            href="https://www.escuelasmetropolitanas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-200 transition-colors"
          >
            escuelasmetropolitanas.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
