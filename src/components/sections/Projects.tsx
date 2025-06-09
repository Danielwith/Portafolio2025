import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
};

function Project({
  title,
  description,
  image,
  type,
  technologies,
  demoUrl,
  codeUrl,
}: ProjectProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition duration-300 flex flex-col flex-wrap">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-wrap justify-between grow">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <Badge
              variant="secondary"
              className="bg-indigo-100 text-indigo-700"
            >
              {type}
            </Badge>
          </div>
          <p className="mb-4 text-gray-600">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-100 text-gray-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-3">
            {demoUrl && (
              <Button
                variant="link"
                asChild
                className="text-indigo-600 hover:text-indigo-800 p-0"
              >
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" /> Demo
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button
                variant="link"
                asChild
                className="text-gray-600 hover:text-gray-800 p-0"
              >
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  Código
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Analytics Pro",
      description:
        "Plataforma de análisis de datos con visualizaciones interactivas y reportes personalizados.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "D3.js"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "UrbanShop",
      description:
        "Tienda online con carrito de compras, filtros avanzados y sistema de valoraciones.",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      type: "Frontend",
      technologies: ["Next.js", "Tailwind", "Stripe", "Redux"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "TaskFlow",
      description:
        "Aplicación de productividad con gestión de proyectos, tareas y recordatorios.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      type: "Mobile",
      technologies: ["React Native", "Firebase", "Expo", "Context API"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="proyectos" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-16 font-bold text-3xl text-center section-title">
          Proyectos
        </h2>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="bg-indigo-50 text-indigo-600 hover:text-indigo-800"
          >
            Ver todos los proyectos
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
