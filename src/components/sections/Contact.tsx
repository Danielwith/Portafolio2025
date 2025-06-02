import { Plane as PaperPlane, Download } from "lucide-react";
// import {
//   LinkedInLogoIcon,
//   GitHubLogoIcon,
//   TwitterLogoIcon,
//   InstagramLogoIcon,
// } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-16 font-bold text-3xl text-left section-title">
          Contacto
        </h2>

        <div className="flex lg:flex-row flex-col gap-12">
          <div className="bg-white shadow-md p-8 rounded-xl lg:w-1/2">
            <h3 className="mb-6 font-semibold text-xl">Envíame un mensaje</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid not-[]:items-center gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input type="text" id="subject" />
              </div>
              <div className="grid items-center gap-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  rows={5}
                  maxLength={2}
                  className="px-4 py-3 border border-gray-300 focus:border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                />
              </div>
              <Button
                type="submit"
                className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg w-full font-medium text-white transition duration-300"
              >
                <PaperPlane className="mr-2 h-4 w-4" /> Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="bg-indigo-50 shadow-md p-8 rounded-xl lg:w-1/2">
            <h3 className="mb-6 font-semibold text-xl">
              Información de contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <i className="mr-4 min-w-6 text-indigo-600 text-2xl fas fa-envelope"></i>
                <div>
                  <h4 className="font-medium text-gray-900 text-left">
                    Correo
                  </h4>
                  <p className="text-gray-600">daniel.orosco.sc2@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="mr-4 min-w-6 text-indigo-600 text-2xl fas fa-phone-alt"></i>
                <div>
                  <h4 className="font-medium text-gray-900 text-left">
                    Teléfono
                  </h4>
                  <p className="text-gray-600">+51 933177664</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="mr-4 min-w-6 text-indigo-600 text-2xl fas fa-map-marker-alt"></i>
                <div>
                  <h4 className="font-medium text-gray-900 text-left">
                    Ubicación
                  </h4>
                  <p className="text-gray-600">Lima, Peru</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 font-medium text-gray-900">Redes sociales</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-indigo-600 shadow-md rounded-xl text-gray-700 hover:text-white transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-indigo-600 shadow-md rounded-xl text-gray-700 hover:text-white transition duration-300"
                >
                  <i className="fab fa-github"></i>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-indigo-600 shadow-md rounded-xl text-gray-700 hover:text-white transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white hover:bg-indigo-600 shadow-md rounded-xl text-gray-700 hover:text-white transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-gray-200 border-t">
              <h4 className="mb-4 font-medium text-gray-900">
                ¡Trabajemos juntos!
              </h4>
              <Button className="bg-indigo-600 hover:bg-indigo-700  transition duration-300">
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
