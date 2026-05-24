'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card hover:border-accent/50 transition-all duration-300 group"
    >
      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="text-slate-400 text-sm flex items-start">
            <span className="text-accent mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn-secondary text-sm mt-4">Learn More</button>
    </motion.div>
  )
}
