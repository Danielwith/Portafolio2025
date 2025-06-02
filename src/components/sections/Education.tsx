import { GraduationCap, Award } from "lucide-react";

type EducationItemProps = {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: "graduation" | "certificate";
};

function EducationItem({
  title,
  institution,
  period,
  description,
  icon,
}: EducationItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        {icon === "graduation" ? (
          <GraduationCap size={10} />
        ) : (
          <Award size={10} />
        )}
      </div>
      <div className="pl-8">
        <h3 className="mb-2 font-bold text-gray-800 text-xl">{title}</h3>
        <p className="mb-1 font-medium text-indigo-600">{institution}</p>
        <p className="mb-2 text-gray-500">{period}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function Education() {
  const educationItems: EducationItemProps[] = [
    {
      title: "Ingeniería en Sistemas de Información",
      institution: "Universidad Tecnológica Nacional",
      period: "2015 - 2020 | Buenos Aires, Argentina",
      description:
        "Especialización en desarrollo de software y arquitectura de sistemas. Graduado con honores.",
      icon: "graduation",
    },
    {
      title: "Especialización en Inteligencia Artificial",
      institution: "Universidad de Buenos Aires",
      period: "2018 - 2019 | Buenos Aires, Argentina",
      description:
        "Programa avanzado enfocado en aprendizaje automático, redes neuronales y procesamiento de lenguaje natural.",
      icon: "certificate",
    },
    {
      title: "Full Stack Web Developer",
      institution: "Platzi & Udemy",
      period: "2021 | Cursos en línea",
      description:
        "Programa intensivo de 6 meses con proyectos prácticos en JavaScript, React, Node.js y bases de datos.",
      icon: "certificate",
    },
    {
      title: "Diseño UX/UI Avanzado",
      institution: "Interaction Design Foundation",
      period: "2022 | Cursos en línea",
      description:
        "Curso especializado en investigación de usuarios, diseño de interfaces y pruebas de usabilidad.",
      icon: "certificate",
    },
  ];

  return (
    <section id="formacion" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-16 font-bold text-3xl text-center section-title">
          Formación Académica
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="bg-white shadow-md p-8 rounded-2xl contact-card hover:translate-y-[-8px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
            {educationItems.map((item, index) => (
              <EducationItem
                key={index}
                title={item.title}
                institution={item.institution}
                period={item.period}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
