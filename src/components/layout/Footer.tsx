import { NAV_LINKS } from "@/lib/constants/sections";
import { Code } from "lucide-react";

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 py-12 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="mb-6 md:mb-0 md:text-left text-center">
            <span className="flex justify-center md:justify-start items-center font-bold text-indigo-400 text-xl">
              <Code className="mr-2 text-indigo-400" size={24} />
              Daniel Orosco
            </span>
            <p className="mt-2 text-indigo-200">Desarrollador Web</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-wrap justify-center space-x-6 mb-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-indigo-200 hover:text-white"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-indigo-200 text-sm">
              © {new Date().getFullYear()} Portafolio Web. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
