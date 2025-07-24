import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-36 section-container min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-medium mb-5"
          >
            Hey there, I am
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-lightestSlate mb-4"
          >
            Tharun Yetti
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-slate mb-6"
          >
            I love exploring tech
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate max-w-xl text-lg mb-12"
          >
            I'm a CS undergrad passionate about building smart, scalable, and user-first digital experiences.
            Currently exploring the intersection of full-stack development and AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#projects" 
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Check out my work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image with Curved Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">
            {/* Curved Background */}
            <div className="absolute inset-0 bg-secondary rounded-full blur-3xl opacity-10"></div>
            
            {/* Curved Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary rounded-full -z-10"></div>
            
            {/* Image Container with Curved Shape */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-secondary/20">
              <img 
                src="/images/image-1.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>

            {/* Decorative Curved Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-secondary/60 rounded-tl-3xl -translate-x-6 -translate-y-6"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary/60 rounded-br-3xl translate-x-6 translate-y-6"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
      >
        <a href="#about" className="text-secondary">
          <svg 
            className="w-6 h-12" 
            viewBox="0 0 24 44" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M13.0607 43.0607C12.4749 43.6464 11.5251 43.6464 10.9393 43.0607L1.3934 33.5147C0.807611 32.9289 0.807611 31.9792 1.3934 31.3934C1.97919 30.8076 2.92893 30.8076 3.51472 31.3934L12 39.8787L20.4853 31.3934C21.0711 30.8076 22.0208 30.8076 22.6066 31.3934C23.1924 31.9792 23.1924 32.9289 22.6066 33.5147L13.0607 43.0607ZM13.5 0V42H10.5V0H13.5Z" 
              fill="#64ffda"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 