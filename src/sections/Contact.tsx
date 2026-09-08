import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane, FaInstagram, FaCode, FaTerminal } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const contactEmail = 'tharunyetti24@gmail.com';
  const formspreeEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) || 'https://formspree.io/f/xeaqpzll';
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/TharunYetti' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/tharun-yetti' },
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
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeEndpoint) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject || `Message from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: formData.subject || `Message from ${formData.name}` }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      toast.success('Message sent. Thanks for reaching out!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Could not send the message. Please email me directly.');
    } finally {
      setIsSending(false);
    }
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

            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            
            <button
              type="submit"
              disabled={isSending}
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane />
              {isSending ? 'Sending...' : 'Send Message'}
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
              I’m open to thoughtful conversations, product ideas, and opportunities to build useful software with good people.
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
              <p className="text-lightSlate">Hyderabad, Telangana</p>
              <p className="text-lightSlate">500032, India</p>
              <p className="text-lightSlate mt-2">Open to relocate</p>
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
