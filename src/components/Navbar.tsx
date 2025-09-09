import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Resume options
  const resumeOptions = [
    { name: 'SDE Resume', file: '/resumes/TharunYetti.pdf' },
    // { name: 'ML Resume', file: '/resumes/ml_resume.pdf' },
    // { name: 'AI Resume', file: '/resumes/academic_resume.pdf' },
  ];

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Toggle resume options dropdown
  const toggleResumeOptions = () => setShowResumeOptions(!showResumeOptions);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
      setShowResumeOptions(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent event propagation to avoid closing when clicking on the menus
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-bold text-secondary"
          >
            TharunYetti
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-lightSlate hover:text-secondary transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Resume Download Button with Dropdown */}
            <div className="relative" onClick={handleMenuClick}>
              <button
                onClick={toggleResumeOptions}
                className="btn-primary flex items-center gap-2"
              >
                <BiDownload /> Resume
              </button>
              
              {/* Resume Options Dropdown */}
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-lightNavy ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                >
                  <div className="py-1">
                    {resumeOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.file}
                        download
                        className="block px-4 py-2 text-sm text-lightSlate hover:bg-secondary/10 hover:text-secondary"
                      >
                        {option.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" onClick={handleMenuClick}>
            <button
              onClick={toggleMenu}
              className="text-lightSlate hover:text-secondary focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full right-0 w-3/4 h-screen bg-lightNavy shadow-lg"
          onClick={handleMenuClick}
        >
          <div className="flex flex-col py-8 px-4 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lightSlate hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            
            {/* Resume Download Options */}
            <div className="pt-4 border-t border-gray-700">
              <p className="text-lightestSlate mb-4">Download Resume:</p>
              {resumeOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.file}
                  download
                  className="block mb-3 text-sm text-lightSlate hover:text-secondary"
                >
                  {option.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;