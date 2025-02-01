import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          I am a highly motivated full-stack developer with a passion for building creative and scalable applications. I enjoy exploring new technologies, solving real-world problems, and crafting intuitive user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
          My journey spans across web development, AI & ML, and database management, allowing me to work on diverse and impactful projects.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="group w-48 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <i className="fas fa-laptop-code text-5xl text-blue-600 group-hover:scale-110 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Web Development
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              Expertise in building responsive, user-friendly web applications.
            </p>
          </div>
          <div className="group w-48 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <i className="fas fa-robot text-5xl text-green-500 group-hover:scale-110 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-green-500 transition-colors duration-300">
              AI & ML
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              Experience with machine learning models and AI-driven solutions.
            </p>
          </div>
          <div className="group w-48 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <i className="fas fa-database text-5xl text-yellow-500 group-hover:scale-110 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
              Database Management
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              Skilled in designing and managing robust database systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;