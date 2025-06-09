import { RiGraduationCapFill } from "react-icons/ri";
import { TbAwardFilled } from "react-icons/tb";

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
          <RiGraduationCapFill size={14} />
        ) : (
          <TbAwardFilled size={14} />
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
      title: "Ingeniería de Sistemas",
      institution: "Universidad Peruana de Ciencias Aplicadas",
      period: "2024 - Actualidad | Lima, Perú",
      description:
        "Especialización en desarrollo de software y arquitectura de sistemas.",
      icon: "graduation",
    },
    {
      title: "Técnico en Computación e Informática",
      institution: "Instituto Superior Tecnológico Cibertec",
      period: "2020 - 2023 | Lima, Perú",
      description:
        "Desarrollo de habilidades en programación avanzada, bases de datos, servicios web y calidad de software.",
      icon: "graduation",
    },
    // {
    //   title: "Full Stack Web Developer",
    //   institution: "Platzi & Udemy",
    //   period: "2021 | Cursos en línea",
    //   description:
    //     "Programa intensivo de 6 meses con proyectos prácticos en JavaScript, React, Node.js y bases de datos.",
    //   icon: "certificate",
    // },
    {
      title: "Web Design y Diseño UX/UI",
      institution: "Calarts",
      period: "2024 | Cursos en línea",
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
