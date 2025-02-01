import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaGitAlt, FaLink, FaDatabase,
  FaCode, FaRobot, FaGit, FaEnvelopeOpenText
} from "react-icons/fa";
import { SiIntellijidea, SiVisualstudiocode,SiMongodb, SiTypescript, SiKubernetes, SiMysql, SiPostgresql, SiSpringboot, SiTailwindcss } from "react-icons/si";
// import { DiHtml5, DiCss3, DiBootstrap, DiC } from "react-icons/di";

// Skills organized into categories
const skills = {
  "Programming Languages": [
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "C Language", icon: <FaCode className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }
  ],
  "Web Development": [
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
  ],
  "Development": [
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Express.js", icon: <FaNode className="text-green-500" /> },
  { name: "REST APIs", icon: <FaLink className="text-blue-500" /> }, // Replace with an appropriate icon if available
  { name: "JPA/Hibernate", icon: <FaDatabase className="text-orange-600" /> },
  { name: "Prompt Engineering", icon: <FaRobot className="text-green-500" /> }
  ],
  "Development Tools": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    { name: "Postman", icon: <FaEnvelopeOpenText className="text-orange-600" /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-blue-500" /> },
    { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-600" /> }
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  ],
};

const Skills = () => {
  return (
    <section id = "skills" className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800">My Skills</h2>
        <p className="mt-4 text-lg text-gray-600">
          A collection of technologies and tools I specialize in.
        </p>
        
        {/* Iterate over categories */}
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="mt-12">
            <h3 className="text-3xl font-semibold text-indigo-700">{category}</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-r from-gray-200 to-blue-300 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center items-center">
                    <div className="text-5xl">{skill.icon}</div>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</p>
                  <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300"></div>
                  <div className="absolute inset-0 border-4 border-indigo-500 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;