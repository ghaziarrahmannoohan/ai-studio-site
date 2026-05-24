'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Code, Gauge, Smartphone, BarChart3, CreditCard, Zap, Lightbulb } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Brain size={32} />,
      title: 'AI Integration & Automation',
      description: 'Intelligent systems that learn, adapt, and automate your business processes.',
      features: ['Machine Learning Models', 'Workflow Automation', 'Predictive Analytics', 'Process Optimization'],
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software Development',
      description: 'Bespoke solutions built from scratch to solve your unique challenges.',
      features: ['Enterprise Applications', 'API & Backend Development', 'System Integration', 'Legacy Modernization'],
    },
    {
      icon: <Gauge size={32} />,
      title: 'SaaS Platform Development',
      description: 'Scalable, multi-tenant platforms ready for global growth.',
      features: ['Cloud Architecture', 'User Management', 'Payment Integration', 'Analytics Dashboard'],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users.',
      features: ['iOS & Android Development', 'Cross-Platform Solutions', 'Real-time Sync', 'Offline Support'],
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Business Intelligence Dashboards',
      description: 'Transform raw data into actionable insights with custom dashboards.',
      features: ['Real-time Analytics', 'Data Visualization', 'Custom Reporting', 'KPI Tracking'],
    },
    {
      icon: <CreditCard size={32} />,
      title: 'CRM & ERP Solutions',
      description: 'Complete systems to manage customers, operations, and finances.',
      features: ['Customer Management', 'Inventory Tracking', 'Financial Management', 'Workflow Automation'],
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'MVP Development',
      description: 'Launch your idea quickly with a focused, scalable minimum viable product.',
      features: ['Rapid Development', 'Core Feature Focus', 'User Validation', 'Growth Ready'],
    },
    {
      icon: <Zap size={32} />,
      title: 'IT Consulting & Strategy',
      description: 'Expert guidance to navigate technology decisions and digital transformation.',
      features: ['Technology Roadmap', 'Architecture Planning', 'Team Augmentation', 'Technical Due Diligence'],
    },
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
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Our Services Stand Out</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every engagement is backed by our commitment to quality and your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'End-to-End Solutions',
                description: 'From strategy and design to development and deployment, we handle it all.',
              },
              {
                title: 'Scalable Architecture',
                description: 'Built to grow—systems that scale from startup to enterprise without redesign.',
              },
              {
                title: 'Agile Methodology',
                description: 'Flexible development process that keeps you involved and ensures rapid iterations.',
              },
              {
                title: 'Latest Technologies',
                description: 'We use cutting-edge tools and frameworks to build future-proof solutions.',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and continuous optimization ensure reliability and performance.',
              },
              {
                title: '24/7 Support',
                description: 'Ongoing maintenance, monitoring, and support to keep your systems running smoothly.',
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
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
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle max-w-2xl mx-auto mb-8">
              Let's discuss which services are right for your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
