'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialProps {
  name: string
  company: string
  role: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, company, role, text, rating }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="text-slate-300 mb-6 italic">"{text}"</p>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-slate-400 text-sm">{role} at {company}</p>
      </div>
    </motion.div>
  )
}
