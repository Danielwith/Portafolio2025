import { Code, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TbSend } from "react-icons/tb";

export function Hero() {
  const scrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 md:py-32 text-white"
    >
      <div className="flex md:flex-row flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 md:mb-0 md:w-1/2 text-left">
          <h1 className="mb-4 font-bold text-4xl md:text-5xl ">
            Hola, soy <span className="text-indigo-200">Daniel Orosco</span>
          </h1>
          <h2 className="mb-6 font-semibold text-2xl md:text-3xl">
            Desarrollador Web
          </h2>
          <p className="mb-8 max-w-lg text-indigo-100 text-lg">
            Construyo soluciones digitales innovadoras con código limpio y
            experiencias de usuario excepcionales.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className={cn(
                "bg-transparent hover:bg-white border border-white text-white hover:text-indigo-600 transition duration-300"
              )}
            >
              <Download className="mr-2 h-4 w-4" /> Descargar CV
            </Button>
            <Button
              className="bg-transparent hover:bg-white border border-white text-white hover:text-indigo-600 transition duration-300"
              onClick={() => scrollToSection("#contacto")}
            >
              <TbSend className="mr-2 h-4 w-4" /> Contáctame
            </Button>

            <Button
              variant="outline"
              className="bg-transparent hover:bg-white border border-white text-white hover:text-indigo-600 transition duration-300"
              onClick={() => scrollToSection("#proyectos")}
            >
              <Eye className="mr-2 h-4 w-4" /> Ver proyectos
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center md:w-1/2">
          <div className="relative">
            {/* Temporal */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Foto de perfil"
              className="shadow-xl border-4 border-white rounded-full w-64 md:w-80 h-64 md:h-80 object-cover"
            />
            <div className="flex items-center floating-badge absolute -right-3 -bottom-3 bg-gradient-to-r bg-white shadow-lg px-4 py-2 rounded-full font-medium text-black animate-[float_3s_ease-in-out_infinite]">
              <Code className="mr-2 h-4 w-4 inline" /> Disponible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
