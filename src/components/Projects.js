import React from "react";

const projects = [
  {
    title: "University Department Information System",
    description: "A responsive web design for the department in our university using MERN tech stack, worked as a Full Stack Developer",
    link: "https://udis-client.vercel.app/",
    image: "https://via.placeholder.com/300x200",
  },{
    title: "Shopping Cart Backend Application - Microservices",
    description: "A shopping cart microservices application along with the usage of docker and kubernetes,I worked as Backend Developer",
    link: "https://udis-client.vercel.app/",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Helping Hands Organization Webiste",
    description: "A responsive web design for an organization in our college using MERN tech stack, worked as a Full Stack Developer",
    link: "https://github.com/Student-Recreation-Center-CSE-RKV/HHO-API",
    link2: "https://github.com/Student-Recreation-Center-CSE-RKV/HHO-Client",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    title: "CS Connect",
    description: "Developed a simple web application to showcase CSE department-related activities, using traditional frontend and PHP for backend with MySQL database, as part of our academics.",
    link: "https://github.com/TharunYetti/wt-project",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "IPL Conduct & Commentry",
    description: "A Java Application which automatically schedules the matches and conduct every match with some random values of score for each player in each match and produce finale winner",
    link: "https://github.com/TharunYetti/Java",
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Five creative JAVA Applications",
    description: "As part of my Java Developer Internship, Five applications are developed using core java,swing,OOPs concepts",
    link: "https://github.com/TharunYetti?tab=repositories&q=LGM&type=&language=&sort=",
    image: "https://via.placeholder.com/300x200"
  }
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
                {project.link2 && (
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ml-4" // Added margin-left
                  >
                    View Project 2
                  </a>
                )}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;