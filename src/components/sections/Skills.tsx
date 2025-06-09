import {
  BrainCircuit,
  Users,
  Laptop as LaptopCode,
  Lightbulb,
  ClipboardList,
  Handshake,
  Shield,
} from "lucide-react";
import { DiMsqlServer } from "react-icons/di";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 size={40} className="text-orange-400" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={40} className="text-blue-400" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill size={40} className="text-cyan-400" />,
  },
  { name: "Angular", icon: <FaAngular size={40} className="text-red-400" /> },
  { name: "React", icon: <SiReact size={40} className="text-blue-400" /> },
  {
    name: "Vite",
    icon: <TbBrandVite size={40} className="text-yellow-400" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={40} className="text-green-500" />,
  },
  {
    name: "Express",
    icon: <SiExpress size={40} className="text-gray-500" />,
  },
  {
    name: ".NET",
    icon: <SiDotnet size={40} className="text-purple-500" />,
  },
  { name: "C#", icon: <PiFileCSharp size={40} className="text-green-500" /> },
  { name: "REST API", icon: <FaServer size={40} className="text-blue-500" /> },
  { name: "SQL", icon: <DiMsqlServer size={40} className="text-red-600" /> },
  { name: "Azure", icon: <VscAzure size={40} className="text-blue-600" /> },
  { name: "Git", icon: <SiGit size={40} className="text-orange-600" /> },
  { name: "Figma", icon: <SiFigma size={40} className="text-purple-500" /> },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt size={40} className="text-teal-500" />,
  },
];

type PersonalSkillProps = {
  icon: React.ReactNode;
  name: string;
};

function PersonalSkill({ icon, name }: PersonalSkillProps) {
  return (
    <div className="flex flex-col items-center bg-white shadow-sm p-6 border border-gray-100 rounded-xl">
      <div className="mb-2 text-indigo-600">{icon}</div>
      <span className="font-medium text-lg">{name}</span>
    </div>
  );
}

export function Skills() {
  const personalSkills = [
    { name: "Comunicación", icon: <BrainCircuit className="h-6 w-6" /> },
    { name: "Liderazgo", icon: <Users className="h-6 w-6" /> },
    {
      name: "Resolución de problemas",
      icon: <LaptopCode className="h-6 w-6" />,
    },
    { name: "Creatividad", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Organización", icon: <ClipboardList className="h-6 w-6" /> },
    { name: "Trabajo en equipo", icon: <Handshake className="h-6 w-6" /> },
    { name: "Adaptabilidad", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Responsabilidad", icon: <Shield className="h-6 w-6" /> },
  ];

  return (
    <section id="habilidades" className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-16 font-bold text-3xl text-center section-title">
          Habilidades
        </h2>

        {/* Tecnologías */}
        <div className="mb-16">
          <h3 className="mb-8 font-semibold text-gray-700 text-xl text-center">
            Tecnologías que domino
          </h3>
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                {tech.icon}
                <span className="font-medium text-lg mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades personales */}
        <div>
          <h3 className="mb-8 font-semibold text-gray-700 text-xl text-center">
            Habilidades personales
          </h3>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {personalSkills.map((skill, index) => (
              <PersonalSkill key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
