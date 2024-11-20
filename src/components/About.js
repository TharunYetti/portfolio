import React from "react";

const About = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I am a full-stack developer passionate about building creative and scalable applications. I love learning new technologies and solving real-world problems.
        </p>
        <div className="mt-6 flex justify-center space-x-8">
          <div className="hover:scale-110 transition-transform duration-300">
            <i className="fas fa-laptop-code text-4xl text-blue-600"></i>
            <p className="mt-2">Web Development</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <i className="fas fa-robot text-4xl text-green-500"></i>
            <p className="mt-2">AI & ML</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <i className="fas fa-database text-4xl text-yellow-500"></i>
            <p className="mt-2">Database Management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;