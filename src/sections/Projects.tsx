import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects = () => {
  // Sample projects data (replace with your own)
  const projectsData: Project[] = [
    {
      title: 'Pharma-Coach',
      description: 'An AI-Powered Application, offering AI Coaching for the sales representatives of the pharma company to train them well for the sales publishing. Integrated Livekit for real time AI voice response.',
      image: 'images/pharma-coach.png',
      technologies: ['React', 'FastAPI', 'MongoDB', 'Livekit', 'Gemini', 'TailwindCSS'],
      github: 'https://pharma-dev.hitloop.com/',
      demo: 'https://pharma-dev.hitloop.com/',
      featured: true,
    },
    {
      title: 'Resume-Hub',
      description: 'An AI-Powered Application, offering ATS checking, job recommendations, and instant interview questions — all based on the users resume. Integrated GeminiAPI for advanced resume parsing and AI-driven features.',
      image: 'images/resume-hub.png',
      technologies: ['React', 'Node', 'Express', 'TailwindCSS','MongoDB', 'Gemini'],
      github: 'https://github.com/TharunYetti/resume-frontend',
      demo: 'https://resumehubrbt.netlify.app/',
      featured: true,
    },
    {
      title: 'Back-End Application for Shopping Cart',
      description: 'A back-end implementation of a shopping cart application, developed using a microservices architecture with Spring Boot. It is containerized with Docker and orchestrated using Kubernetes for efficient deployment and scalability.',
      image: 'images/springboot.png',
      technologies: ['Springboot', 'Microservices', 'Docker', 'Kubernetes', 'Jenkins'],
      github: 'https://github.com/TharunYetti/ShoppingCart-Backend-SpringBootMicroservices',
      demo: 'https://github.com/TharunYetti/ShoppingCart-Backend-SpringBootMicroservices',
      featured: true,
    },
    {
      title: 'University Discussion & Collaboration Platform',
      description: 'Designed and developed a responsive web application for a university, enabling features like student-mentor discussions, schedule and seating updates, result publication, and more. Built as part of a college hackathon, where the project secured 1st place.',
      image: 'images/UDCP.png',
      technologies: ['React', 'Node', 'Express', 'MongoDB','TailwindCSS'],
      github: 'https://github.com/TharunYetti/frontend',
      demo: 'http://3.110.117.152',
      featured: true,
    },
    {
      title: 'HHO Project',
      description: 'This project is a web application developed for a college-level organization named HHO. I contributed as a Full Stack Developer, handling both front-end and back-end development.',
      image: 'images/hho.png',
      technologies: ['React', 'Node', 'TypeScript','MongoDB','TailwindCSS'],
      github: 'https://github.com/TharunYetti/HHO-Client',
      demo: 'https://github.com/TharunYetti/HHO-API',
      featured: true,
    },
    {
      title: 'University Department Information System',
      description: 'A Modern centralized platform built to address departmental activities all at one place. Especially designed for our CSE Dept.',
      image: 'images/udis-project.png',
      technologies: ['React', 'Node', 'TypeScript','MongoDB','TailwindCSS'],
      github: 'https://github.com/TharunYetti/Team-13',
      demo: 'https://udis-client.vercel.app/',
      featured: false,
    },
    {
      title: 'CS Connect',
      description: 'A web application for hosting departmental events and updates, enhancing communication among 1000+ students and faculty.',
      image: 'images/csconnect-project.png',
      technologies: ['HTML & CSS', 'Javascript', 'PHP', 'SQLite3'],
      github: 'https://github.com/TharunYetti/wt-project',
      demo: 'https://github.com/TharunYetti/wt-project',
      featured: false,
    },
    {
      title: 'Personal Portfolio',
      description: 'Developed an attractive and responsive personalized portfolio website.',
      image: 'images/portfolio-project.png',
      technologies: ['Vite', 'React', 'Javascript'],
      github: 'https://github.com/TharunYetti/portfolio',
      demo: 'https://tharunyetti.github.io/portfolio/',
      featured: false,
    },
    {
      title: 'Heart-Disease-Classification-Using-ML',
      description: 'Implemented a machine learning pipeline to predict the likelihood of heart disease in patients using various clinical parameters. Utilized multiple classification models and integrated their outputs through a majority voting ensemble to deliver accurate and reliable predictions.',
      image: 'images/ml-project.jpeg',
      technologies: ['Scikit Learn', 'Pandas', 'KNN', 'Decision Tree', 'SVM'],
      github: 'https://github.com/TharunYetti/Heart-Disease-Classification-Using-ML',
      demo: 'https://github.com/TharunYetti/Heart-Disease-Classification-Using-ML',
      featured: false,
    },
    {
      title: 'IPL Conduct & Commentry',
      description: 'A Java Application which automatically schedules the matches and conduct every match with some random values of score for each player in each match and produce finale winner.',
      image: 'images/java.jpeg',
      technologies: ['Next.js', 'Firebase'],
      github: 'https://github.com/TharunYetti/Java/blob/main/Project_K_.zip',
      demo: 'https://github.com/TharunYetti/Java',
      featured: false,
    },
    {
      title: 'Five creative JAVA Applications',
      description: 'As part of my Java Developer Internship, Five applications are developed using core java,swing,OOPs concepts.',
      image: 'images/swing.jpg',
      technologies: ['React Native', 'Tailwind', 'Firebase', 'openAI'],
      github: 'https://github.com/TharunYetti?tab=repositories&q=LGM&type=&language=&sort=',
      demo: 'https://github.com/TharunYetti?tab=repositories&q=LGM&type=&language=&sort=',
      featured: false,
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);
  const displayedProjects = showAll ? projectsData : featuredProjects;

  return (
    <section id="projects" className="section-container py-28">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-lightNavy rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative overflow-hidden h-60">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  { project.github &&  (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors bg-primary/80 p-3 rounded-full"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {
                    project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors bg-primary/80 p-3 rounded-full"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lightestSlate text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-lightSlate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-primary px-2 py-1 rounded-md text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && otherProjects.length > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary flex items-center gap-2"
          >
            <FaFolder /> Show All Projects
          </button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(false)}
            className="btn-primary flex items-center gap-2"
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects; 