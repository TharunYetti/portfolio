import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => (
  <section id="about" className="section-container">
    <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
      <div>
        <p className="eyebrow text-coral text-sm mb-4">01 / About</p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Curious by default.<br /><span className="text-ink/40">Useful by design.</span>
        </motion.h2>
      </div>
      <div className="space-y-7 text-lg text-ink/70 max-w-2xl">
        <p>I’m a Computer Science undergraduate who likes understanding how things work, then making them simpler for the people who use them.</p>
        <p>My work moves between polished React interfaces, dependable backend services, practical AI features, and the cloud infrastructure that keeps them reliable. I care about clean architecture, automated delivery, fast feedback loops, and shipping work that has a real job to do.</p>
        <div className="grid sm:grid-cols-3 gap-3 pt-4">
          {[
            [<FaGraduationCap />, '9.43 CGPA', 'B.Tech CSE'],
            [<FaCode />, 'Full lifecycle', 'Code to cloud'],
            [<FaMapMarkerAlt />, 'Based in', 'Hyderabad, India'],
          ].map(([icon, title, detail]) => <div key={title as string} className="bg-white/60 border border-ink/10 rounded-2xl p-4"><span className="text-coral text-xl">{icon}</span><p className="font-extrabold mt-3 text-ink">{title}</p><p className="text-sm text-ink/60">{detail}</p></div>)}
        </div>
      </div>
    </div>
  </section>
);

export default About;
