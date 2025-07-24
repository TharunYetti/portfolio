import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBrain, FaMedal} from 'react-icons/fa';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaRankingStar } from 'react-icons/fa6';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const Achievements = () => {
  // Sample achievements (replace with your own)
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'AIR 6009 in GATE 2025',
      description: 'Secured an All India Rank of 6009 in GATE 2025 CS/IT Paper with an intense prepation of 10 days! proving my proficiency in this domain',
      date: 'March 2025',
      icon: <FaRankingStar className="text-4xl text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      description: 'Secured First place in the Aadhya Hackathon 2.0 conducted at our campus.',
      date: 'February 2025',
      icon: <FaMedal className="text-4xl text-amber-500" />,
    },
    {
      id: 3,
      title: 'Tech Quiz and SQL',
      description: 'Winner in the Tech Quiz and Runner Up in SQL Contest conducted in our college in Abhiyanth Technical Fest.',
      date: 'February 2025',
      icon: <FaBrain className="text-4xl text-blue-500" />,
    },
    {
      id: 4,
      title: 'Java Content Development',
      description: 'Completed developing core java content for freshers that is being used in a company of my internship.',
      date: 'December 2024',
      icon: <FaAward className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section id="achievements" className="section-container py-28 overflow-hidden">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-lightNavy rounded-lg p-6 flex gap-4 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/30"
          >
            <div className="flex-shrink-0">{achievement.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-lightestSlate mb-2">{achievement.title}</h3>
              <p className="text-lightSlate mb-3">{achievement.description}</p>
              <p className="text-secondary text-sm">{achievement.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
{/*
      <motion.div
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-lightestSlate mb-12 text-center">What People Say</h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-lightNavy text-secondary p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <BsChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-lightNavy text-secondary p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <BsChevronRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden p-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                  <div className="bg-lightNavy rounded-lg p-8 relative shadow-lg">
                    <FaQuoteLeft className="absolute top-6 left-6 text-secondary/20 text-4xl" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-secondary/30"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-lightestSlate">{testimonial.name}</h4>
                        <p className="text-secondary">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lightSlate text-lg italic relative z-10 mb-4">
                      "{testimonial.text}"
                    </p>
                    
                    <FaQuoteRight className="absolute bottom-6 right-6 text-secondary/20 text-4xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-secondary scale-125' : 'bg-lightSlate/30'
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div> 
        </div>
      </motion.div>
*/}
    </section>
  );
};

export default Achievements; 