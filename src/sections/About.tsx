import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple debounce utility
const debounce = (func: any, wait: any) => {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const containerRef = useRef(null);
  const sectionsRef = useRef({});
  const aboutSectionRef = useRef(null);

  // Check if about section is in view
  const isInViewport = useCallback(() => {
    if (!aboutSectionRef.current) return false;
    const rect = aboutSectionRef.current.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.2 && rect.bottom >= 0;
  }, []);

  // IntersectionObserver for section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-20% 0px' }
    );

    Object.values(sectionsRef.current).forEach((section:any) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section: any) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to section
  const scrollToSection = useCallback((id) => {
    const section = sectionsRef.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  }, []);

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      if (!containerRef.current) return;
      if (isInViewport()) {
        containerRef.current.classList.add('scrolled');
      } else {
        containerRef.current.classList.remove('scrolled');
      }
    }, 100),
    [isInViewport]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const sections = [
    {
      id: 'about',
      title: 'Who I Am',
      content: (
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m a passionate developer who thrives on crafting <span className="text-blue-400 font-semibold">intelligent systems</span> and immersive digital experiences.
Driven by curiosity, I continuously explore emerging technologies, from AI and microservices to cloud-native architecture, to build impactful solutions that bridge innovation and real-world needs.
          </p>
        </motion.div>
      ),
    },
    {
      id: 'skills',
      title: 'Domains & Skills',
      content: (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {['Full-Stack Development', 'Microservices & Cloud Architecture', 'Artificial Intelligence / Machine Learning', 'DevOps & Deployment', 'Automation', 'Cloud Services & APIs', 'Competitve Programming & DSA'].map((skill, i) => (
            <motion.div
              key={skill}
              className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 text-sm md:text-base transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="relative w-full min-h-screen bg-primary text-lightestSlate py-16"
    >
      {/* Sticky Header Navigation for Mobile and Desktop */}
      <motion.nav
        className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md py-4 px-6 shadow-lg border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex justify-center md:justify-start gap-4 md:gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Go to ${section.title} section`}
              aria-current={activeSection === section.id ? 'true' : 'false'}
              className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div ref={containerRef} className="pt-8 px-4 md:px-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionsRef.current[section.id] = el)}
            className="min-h-[80vh] flex flex-col justify-center items-center py-12 md:py-16"
          >
            <div className="max-w-6xl w-full mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-400 mb-8 md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {section.title}
              </motion.h2>
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed right-4 md:right-8 bottom-8 bg-navy/90 backdrop-blur-sm rounded-full p-2 border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-label="Scroll progress indicator"
      >
        <div className="w-2 h-12 bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-blue-500"
            initial={{ height: '20%' }}
            animate={{ height: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;