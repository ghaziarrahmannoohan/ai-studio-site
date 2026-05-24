'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Code, Brain, Gauge, Smartphone, BarChart3 } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
import ProcessStep from '@/components/ProcessStep'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-accentViolet/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accentBlue/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title bg-gradient-to-r from-accent via-accentBlue to-accentViolet bg-clip-text text-transparent mb-6">
              Build Intelligent Software That Transforms Your Business
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              We design, develop, and deploy custom software solutions, AI-powered systems, SaaS platforms, and enterprise applications that drive growth, automation, and innovation across your organization.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Project <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="glass-card">
              <Zap className="text-accent mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-300">Fast Deployment</p>
            </div>
            <div className="glass-card">
              <Code className="text-accent mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-300">Custom Development</p>
            </div>
            <div className="glass-card">
              <Brain className="text-accent mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-300">AI Integration</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From AI systems to complete enterprise solutions, we deliver technology that matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Brain size={32} />}
              title="AI Integration & Automation"
              description="Intelligent systems that automate workflows, enhance decision-making, and unlock new capabilities."
              features={['Machine Learning Models', 'Workflow Automation', 'Business Logic Optimization']}
            />
            <ServiceCard
              icon={<Code size={32} />}
              title="Custom Software Development"
              description="Tailored solutions built from the ground up to solve your unique business challenges."
              features={['Enterprise Applications', 'API Development', 'System Integration']}
            />
            <ServiceCard
              icon={<Gauge size={32} />}
              title="SaaS Platforms"
              description="Scalable, multi-tenant platforms designed for growth and long-term success."
              features={['Cloud Architecture', 'User Management', 'Analytics & Reporting']}
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose TechStudio</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Experience, expertise, and a commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 6 years delivering enterprise-grade software to diverse industries',
              },
              {
                title: 'Expert Team',
                description: '15+ technical experts: architects, engineers, AI specialists, and designers',
              },
              {
                title: 'Scalable Solutions',
                description: 'Built for growth—from MVPs to enterprise systems handling millions of users',
              },
              {
                title: 'Full-Stack Expertise',
                description: 'From UI/UX to cloud infrastructure, we handle the complete technology stack',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From concept to deployment, we follow a structured approach to ensure success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Discovery"
              description="We understand your goals, challenges, and technical requirements."
              icon={<Brain size={24} />}
            />
            <ProcessStep
              number={2}
              title="Design"
              description="We create detailed architecture and UI/UX designs tailored to your needs."
              icon={<Code size={24} />}
            />
            <ProcessStep
              number={3}
              title="Development"
              description="Expert developers build your solution using modern best practices."
              icon={<Gauge size={24} />}
            />
            <ProcessStep
              number={4}
              title="Deploy & Support"
              description="We launch your product and provide ongoing support and optimization."
              icon={<Zap size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Success stories from businesses we've helped transform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah Chen"
              company="InnovateTech"
              role="CEO"
              text="TechStudio transformed our business with an AI-powered automation platform. The quality and speed of delivery were exceptional."
              rating={5}
            />
            <TestimonialCard
              name="Michael Rodriguez"
              company="GrowthScale"
              role="CTO"
              text="Their expertise in SaaS architecture was invaluable. We launched our platform 2 months ahead of schedule."
              rating={5}
            />
            <TestimonialCard
              name="Emily Thompson"
              company="DataFlow Solutions"
              role="Product Manager"
              text="Professional team, great communication, and incredibly skilled developers. Highly recommended for enterprise projects."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accentViolet/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to Build Something Great?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Book a Free Consultation <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
