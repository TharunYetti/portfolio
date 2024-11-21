import React from "react";

const Home = () => {
  return (
    <section className="h-screen bg-center relative flex items-center justify-center text-white text-center bg-gradient-to-r from-blue-500 to-purple-500" >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:scale-110 transition-all duration-500 ease-in-out">
          Hi, I'm Tharun Yetti
        </h1>
        <p className="mt-4 text-xl opacity-75 hover:opacity-100 transition-opacity duration-300">
          A passionate full-stack developer and an AI/ML enthusiast
        </p>
        <a href="#about" className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-110 transition-transform duration-300">
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Home;