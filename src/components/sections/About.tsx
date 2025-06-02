import {
  GraduationCap,
  MapPin,
  Briefcase,
  Rocket,
  Search,
  PencilRuler,
  Code,
} from "lucide-react";

export function About() {
  return (
    <section id="sobre-mi" className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-16 font-bold text-3xl text-center section-title">
          Sobre mí
        </h2>
        <div className="flex md:flex-row flex-col items-center">
          <div className="mb-10 md:mb-0 md:pr-10 md:w-1/2">
            <p className="mb-6 text-gray-700 text-lg">
              Soy un desarrollador full stack con más de 5 años de experiencia
              creando aplicaciones web modernas. Me especializo en JavaScript,
              React y Node.js, pero siempre estoy aprendiendo nuevas
              tecnologías.
            </p>
            <p className="mb-6 text-gray-700 text-lg">
              Creo en el diseño limpio, el código mantenible y las experiencias
              de usuario intuitivas. Cada proyecto es una oportunidad para
              resolver problemas reales con soluciones elegantes.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-indigo-50 shadow-sm px-4 py-2 rounded-full text-indigo-700">
                <GraduationCap className="mr-2 h-4 w-4 inline" />
                Ing. en Sistemas
              </div>
              <div className="bg-indigo-50 shadow-sm px-4 py-2 rounded-full text-indigo-700">
                <MapPin className="mr-2 h-4 w-4 inline" />
                Buenos Aires, AR
              </div>
              <div className="bg-indigo-50 shadow-sm px-4 py-2 rounded-full text-indigo-700">
                <Briefcase className="mr-2 h-4 w-4 inline" />
                Disponible
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 shadow-md p-8 rounded-xl md:w-1/2 contact-card hover:translate-y-[-8px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="flex items-center mb-6 font-semibold text-indigo-600 text-xl">
              <Rocket className="mr-3 h-5 w-5" /> Mi metodología
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 mr-4 p-3 rounded-lg">
                  <Search className="text-indigo-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Investigación</h4>
                  <p className="text-gray-600">
                    Analizo a fondo los requisitos y contexto para proponer la
                    mejor solución técnica.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 mr-4 p-3 rounded-lg">
                  <PencilRuler className="text-indigo-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Diseño</h4>
                  <p className="text-gray-600">
                    Creo interfaces limpias y accesibles, priorizando la
                    experiencia de usuario.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 mr-4 p-3 rounded-lg">
                  <Code className="text-indigo-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Implementación</h4>
                  <p className="text-gray-600">
                    Desarrollo con código limpio, escalable y siguiendo las
                    mejores prácticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
