import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaPaperPlane, FaInstagram, FaCode, FaTerminal } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const contactEmail = 'tharunyetti24@gmail.com';
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/TharunYetti' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/tharun-yetti-9775a0280/' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/tharun.3014/' },
    { name: 'Email', icon: <FaEnvelope />, url: `mailto:${contactEmail}` },
    { name: 'Leetcode', icon: <FaCode />, url: 'https://leetcode.com/u/TharunY' },
    { name: 'Hackerrank', icon: <FaTerminal/>, url: 'https://www.hackerrank.com/profile/tharunyetti24' },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    fetch("https://tharuny.app.n8n.cloud/webhook/form-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `Message from ${formData.name}`,
        message: formData.message
      })
    });
    
    toast.success("Thanks for Your Valuable Time!");

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-container py-28">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-lightestSlate mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lightSlate mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightNavy border border-slate/50 rounded-md focus:outline-none focus:border-secondary text-lightestSlate"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lightSlate mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightNavy border border-slate/50 rounded-md focus:outline-none focus:border-secondary text-lightestSlate"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-lightSlate mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightNavy border border-slate/50 rounded-md focus:outline-none focus:border-secondary text-lightestSlate"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lightSlate mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightNavy border border-slate/50 rounded-md focus:outline-none focus:border-secondary text-lightestSlate resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2 py-3"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-lightestSlate mb-6">Contact Information</h3>
            
            <p className="text-lightSlate mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you as soon as possible!
            </p>
            
            <div className="mb-8">
              <p className="text-lg text-lightestSlate mb-2">Email:</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-secondary hover:underline break-words"
              >
                {contactEmail}
              </a>
            </div>
            
            <div>
              <p className="text-lg text-lightestSlate mb-4">Location:</p>
              <p className="text-lightSlate">Chilamkur</p>
              <p className="text-lightSlate">Yerraguntla</p>
              <p className="text-lightSlate">Kadapa Dist.</p>
              <p className="text-lightSlate">Andhra Pradesh</p>
              <p className="text-lightSlate">Pincode - 516310</p>
              <p className="text-lightSlate">India</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-lightestSlate mb-4">Connect With Me:</h3>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lightNavy text-secondary hover:text-primary hover:bg-secondary rounded-full p-3 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 