import React from "react";

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Project 1</h3>
            <p className="mt-4 text-gray-600">Short description of the project.</p>
            <a href="#" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View Project
            </a>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;