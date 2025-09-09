import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaPalette, 
  FaCloud, FaPython, FaJava,
  FaNetworkWired,
  FaPhp,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';

import { SiTypescript, SiJavascript, SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiLangchain, SiOpenai, SiFastapi, SiPytorch, SiScikitlearn, SiSqlite, SiFirebase, SiReact, SiVite, SiGooglecloud, SiCloudinary, SiC, SiTensorflow, SiSpring, SiKubernetes, SiJenkins, SiRedis, SiPostman, SiWebrtc, SiPostgresql } from 'react-icons/si';
import { FaGears } from 'react-icons/fa6';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-3xl" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'React Native'],
      color: 'from-blue-500/20 to-cyan-400/20',
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="text-3xl" />,
      skills: ['Node.js', 'Springboot','Express','REST APIs', 'Fast API'],
      color: 'from-green-500/20 to-emerald-400/20',
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-3xl" />,
      skills: ['MongoDB', 'MySQL', 'AWS', 'PostgreSQL'],
      color: 'from-amber-500/20 to-yellow-400/20',
    },
    {
      title: 'Machine Learning',
      icon: <FaGears className="text-3xl" />,
      skills: ['Regression', 'KNN', 'Decision Trees', 'Naive Bayes', 'SVM', 'Clustering', 'Scikit-Learn', 'LLMs'],
      color: 'from-indigo-500/20 to-purple-400/20',
    },
    {
      title: 'DevOps',
      icon: <FaNetworkWired className="text-3xl" />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Github Actions', 'Vercel', 'Render'],
      color: 'from-red-500/20 to-pink-400/20',
    },
    {
      title: 'Tools & Libraries',
      icon: <FaPalette className="text-3xl" />,
      skills: ['VS Code','Figma','Jupyter Notebook','Cursor','IntelliJ', 'Canva', 'Git', 'GitHub'],
      color: 'from-purple-500/20 to-violet-400/20',
    },
  ];

  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="section-container py-28">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <p className="text-lightSlate max-w-3xl mb-12">
        I've worked with a wide range of technologies. 
        From designing user interfaces to developing robust systems, here's a snapshot of my technical expertise:
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-lg p-6 border border-lightNavy hover:border-secondary transition-all duration-300 shadow-lg`}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-3 text-secondary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-lightestSlate">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span className="text-lightSlate">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional skills or proficiency indicators */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-lightestSlate mb-6">Tools & Languages</h3>
        
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center">
            <FaJava className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <SiC className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">C</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVite className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Vite</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSpring className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFastapi className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">FastAPI</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center">
            <FaCloud className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiOpenai className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">LLMs</span>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">scikit-learn</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">React Native</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGooglecloud className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">GCP</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiKubernetes className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">Kubernetes</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-secondary mb-2" />
            <span className="text-lightSlate text-sm">GitHub</span>
         </div>
         <div className="flex flex-col items-center">
          <SiJenkins className="text-4xl text-secondary mb-2" />
          <span className="text-lightSlate text-sm">Jenkins</span>
        </div>
        <div className="flex flex-col items-center">
          <SiRedis className="text-4xl text-secondary mb-2" />
          <span className="text-lightSlate text-sm">Redis</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPostman className="text-4xl text-secondary mb-2" />
          <span className="text-lightSlate text-sm">Postman</span>
        </div>
        <div className="flex flex-col items-center">
          <SiWebrtc className="text-4xl text-secondary mb-2" />
          <span className="text-lightSlate text-sm">LiveKit</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCloudinary className="text-4xl text-secondary mb-2" />
          <span className="text-lightSlate text-sm">Cloudinary</span>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Skills; 