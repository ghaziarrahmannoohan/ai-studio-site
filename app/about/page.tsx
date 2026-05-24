'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const experts = [
    { role: 'Software Architects', count: '4+' },
    { role: 'Full-Stack Engineers', count: '5+' },
    { role: 'AI/ML Specialists', count: '2+' },
    { role: 'UI/UX Designers', count: '2+' },
    { role: 'DevOps Engineers', count: '1+' },
    { role: 'QA Specialists', count: '1+' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">About TechStudio</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              A team of visionary engineers and designers building intelligent software for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <Lightbulb className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital era.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <Target className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400">
                To be the trusted partner for businesses seeking transformative technology—delivering solutions that scale, evolve, and inspire innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <Users className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-slate-400">
                Excellence, integrity, innovation, collaboration, and customer success. We're committed to quality in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <p className="text-slate-300 mb-4 leading-relaxed">
              Founded over 6 years ago, TechStudio emerged from a simple idea: businesses deserve technology partners who truly understand their challenges and deliver solutions that make a difference.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              What started as a small team of passionate engineers has grown into a multi-disciplinary studio of architects, developers, AI specialists, and designers working across diverse industries—from healthcare and finance to e-commerce and enterprise operations.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Today, we're proud to have delivered 15+ custom systems, built scalable SaaS platforms, implemented AI-powered automation, and helped startups and enterprises achieve their technology vision. But more importantly, we've built lasting relationships with our clients based on trust, expertise, and mutual success.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We believe the best technology is the one that solves real problems, scales with your business, and creates lasting value. That's what we're here to build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              15+ experts dedicated to building world-class technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card text-center"
              >
                <div className="text-accent text-4xl font-bold mb-2">{expert.count}</div>
                <p className="text-white font-semibold">{expert.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">How We Build</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our approach ensures reliable, scalable, secure, and high-performance systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Reliability First',
                description: 'Every system we build is engineered for uptime, resilience, and predictable performance under load.',
              },
              {
                title: 'Scalability By Design',
                description: 'Built from the ground up to handle growth—from hundreds to millions of users without architectural compromises.',
              },
              {
                title: 'Security & Privacy',
                description: 'Data protection and security are embedded in every layer. We follow industry best practices and compliance standards.',
              },
              {
                title: 'Performance Optimized',
                description: 'Fast load times, optimized queries, efficient code, and continuous monitoring ensure optimal user experience.',
              },
              {
                title: 'Clean Architecture',
                description: 'Maintainable, testable, and well-documented code that your team can confidently own and evolve.',
              },
              {
                title: 'Continuous Innovation',
                description: 'We stay current with technology trends, evaluate emerging tools, and adopt what genuinely improves outcomes.',
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{principle.title}</h3>
                <p className="text-slate-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Let's Build Together</h2>
            <p className="section-subtitle max-w-2xl mx-auto mb-8">
              Ready to partner with a team that's passionate about your success?
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
