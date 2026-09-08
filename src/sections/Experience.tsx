import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  { role: 'Member of Technical Staff', company: 'AmbitOS (AI Prof Private Ltd)', date: 'May 2026 — Present', note: 'Own production healthcare systems across AI agents, medical coding automation, real-time voice, secure FastAPI APIs, and cloud infrastructure. Build Dockerized services, Terraform-managed AWS resources, GitHub Actions CI/CD with security gates, and AWS observability. Voice infrastructure supports 500+ calls, 50–80 concurrent calls, 70% pickup, and under 3% pipeline errors.' },
  { role: 'Full Stack Developer Intern', company: 'Hitloop, now AmbitOS', date: 'May 2025 — Apr 2026', note: 'Built compliance-driven healthcare features covering PHI access control, audit logging, data residency, role-based dashboards, real-time voice AI, and cryptographic integrations. Redesigned event handling and API flow to reduce interaction latency by about 30%.' },
  { role: 'Technical Intern', company: 'MAANG Technologies', date: 'May 2024 — May 2025', note: 'Developed Spring Boot microservices, REST APIs, Dockerized services, and basic Kubernetes deployments. Contributed Java learning content for freshers.' },
];

const Experience = () => <section id="experience" className="section-container">
  <div className="flex items-end justify-between mb-12"><div><p className="eyebrow text-coral text-sm mb-4">04 / Experience</p><h2 className="section-title mb-0">Where I’ve learned<br />to build.</h2></div><span className="hidden md:block eyebrow text-ink/40 text-xs">2023 — now</span></div>
  <div className="max-w-4xl border-l-2 border-coral/30 ml-2">
    {experiences.map((item, index) => <motion.article key={item.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="relative pl-8 pb-10 last:pb-0">
      <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-coral border-4 border-paper" />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2"><div><p className="eyebrow text-coral text-xs mb-2">{item.date}</p><h3 className="text-2xl font-extrabold text-ink">{item.role}</h3><p className="text-lg font-semibold text-ink/60">{item.company}</p></div><FaBriefcase className="hidden md:block text-coral/60 mt-2" /></div>
      <p className="text-ink/65 mt-3 max-w-2xl">{item.note}</p>
    </motion.article>)}
  </div>
</section>;

export default Experience;
