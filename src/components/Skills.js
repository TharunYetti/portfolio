import React from "react";

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="group hover:bg-blue-500 transition-all duration-300 p-6 rounded-lg shadow-md">
            <i className="fab fa-js-square text-4xl text-yellow-500 group-hover:text-white"></i>
            <p className="mt-2 text-gray-800 group-hover:text-white">JavaScript</p>
          </div>
          <div className="group hover:bg-blue-500 transition-all duration-300 p-6 rounded-lg shadow-md">
            <i className="fab fa-react text-4xl text-blue-500 group-hover:text-white"></i>
            <p className="mt-2 text-gray-800 group-hover:text-white">React</p>
          </div>
          <div className="group hover:bg-blue-500 transition-all duration-300 p-6 rounded-lg shadow-md">
            <i className="fab fa-node text-4xl text-green-500 group-hover:text-white"></i>
            <p className="mt-2 text-gray-800 group-hover:text-white">Node.js</p>
          </div>
          <div className="group hover:bg-blue-500 transition-all duration-300 p-6 rounded-lg shadow-md">
            <i className="fab fa-python text-4xl text-blue-500 group-hover:text-white"></i>
            <p className="mt-2 text-gray-800 group-hover:text-white">Python</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;