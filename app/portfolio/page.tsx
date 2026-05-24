'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  const caseStudies = [
    {
      title: 'AI-Powered Business Automation Platform',
      industry: 'Financial Services',
      problem: 'Manual data entry and workflow management was consuming 40% of team time with high error rates.',
      solution: 'Built an AI-powered automation platform with document intelligence, workflow orchestration, and ML-based validation.',
      technologies: ['Python', 'TensorFlow', 'Next.js', 'PostgreSQL', 'AWS'],
      results: ['85% reduction in manual work', '99.2% accuracy rate', '$2M annual savings'],
    },
    {
      title: 'SaaS Analytics Dashboard Platform',
      industry: 'E-commerce',
      problem: 'Clients needed real-time insights into customer behavior, sales trends, and inventory levels from multiple sources.',
      solution: 'Developed a comprehensive SaaS analytics platform with real-time data processing, custom dashboards, and predictive insights.',
      technologies: ['React', 'Node.js', 'TimescaleDB', 'Apache Kafka', 'Google Cloud'],
      results: ['500+ active users', '$750K ARR', '5x faster insight generation'],
    },
    {
      title: 'Pharmaceutical Business Intelligence Dashboard',
      industry: 'Healthcare/Pharma',
      problem: 'Scattered data across systems made it impossible to track clinical trials, compliance, and supply chain in real-time.',
      solution: 'Created an integrated BI platform consolidating all data with compliance tracking, reporting, and forecasting capabilities.',
      technologies: ['React', 'Python', 'Tableau', 'BigQuery', 'Azure'],
      results: ['98% data accuracy', 'Compliance audit: ZERO findings', '15 minutes for monthly reports (vs 5 days)'],
    },
    {
      title: 'Enterprise CRM/ERP System',
      industry: 'Logistics & Operations',
      problem: 'Three disparate systems (CRM, inventory, finance) couldn\'t communicate, causing delays and inaccuracies.',
      solution: 'Built integrated CRM/ERP system with unified data model, workflow automation, and real-time sync across departments.',
      technologies: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'AWS ECS'],
      results: ['Unified 3 systems into 1', '60% faster order processing', '250+ employees trained successfully'],
    },
    {
      title: 'Mobile-First Business App',
      industry: 'Real Estate',
      problem: 'Agents needed offline access to property data, lease documents, and client communications while in the field.',
      solution: 'Developed iOS/Android app with offline sync, document viewer, client CRM, and field analytics.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'DynamoDB'],
      results: ['30K+ agents using app', '4.8/5 app rating', '2x faster property viewings'],
    },
    {
      title: 'AI-Driven MVP for HR Tech Startup',
      industry: 'Human Resources',
      problem: 'Early-stage startup needed to validate AI-based employee engagement platform before major investment.',
      solution: 'Rapid MVP development with AI sentiment analysis, engagement scoring, and predictive retention modeling.',
      technologies: ['Next.js', 'Python', 'Hugging Face', 'Firebase'],
      results: ['MVP in 8 weeks', 'Secured Series A funding', '50% customer retention at year 2'],
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
            <h1 className="section-title">Portfolio & Case Studies</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              A showcase of projects that transformed businesses through intelligent software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="text-accent text-sm font-semibold">{study.industry}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-accent font-semibold mb-2">Challenge</h4>
                      <p className="text-slate-400 text-sm">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-accent font-semibold mb-2">Solution</h4>
                      <p className="text-slate-400 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-accent font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-accent font-semibold mb-3">Results Achieved</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                            <span className="text-accent mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Projects Delivered' },
              { number: '5+', label: 'Industries Served' },
              { number: '100+', label: 'Team Members Trained' },
              { number: '$50M+', label: 'Business Impact' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="gradient-text text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-slate-400">{stat.label}</p>
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
            <h2 className="section-title">Your Project Could Be Next</h2>
            <p className="section-subtitle max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve similar results.
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
