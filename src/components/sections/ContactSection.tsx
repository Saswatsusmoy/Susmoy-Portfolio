'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useState } from 'react'

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Saswatsusmoy',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/saswat-susmoy-sahoo/',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:saswatsusmoy8013@gmail.com',
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/SusmoySaswat',
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <section id="contact" className="relative py-16">
      <div className="max-w-4xl mx-auto px-8 flex flex-col items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-text-secondary font-light">Contact</span>{' '}
              <span className="gradient-text font-semibold">Me</span>
            </h2>
            <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating, hiring, or just want to talk GenAI? Drop a message or connect on socials!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Contact Form & Socials */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl p-6 shadow-2xl shadow-black/30 overflow-hidden"
            >
              {/* Animated light reflection overlay */}
              <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/10 blur-2xl rounded-full animate-pulse" style={{ filter: 'blur(24px)' }} />
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-8 bg-accent-primary/10 blur-xl rounded-full animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-sm text-text-secondary/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-2xl bg-background-secondary/30 backdrop-blur-sm border border-background-tertiary/30 text-text-primary focus:border-accent-primary/50 focus:bg-background-secondary/50 outline-none transition-all duration-300 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-sm text-text-secondary/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-2xl bg-background-secondary/30 backdrop-blur-sm border border-background-tertiary/30 text-text-primary focus:border-accent-primary/50 focus:bg-background-secondary/50 outline-none transition-all duration-300 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-sm text-text-secondary/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-2xl bg-background-secondary/30 backdrop-blur-sm border border-background-tertiary/30 text-text-primary focus:border-accent-primary/50 focus:bg-background-secondary/50 outline-none transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(255, 140, 0, 0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-accent-primary text-background-primary font-semibold rounded-2xl hover:bg-accent-primary/90 transition-all duration-300 disabled:opacity-60 shadow-lg"
                >
                  {loading ? 'Sending...' : submitted ? 'Sent!' : 'Send Message'}
                </motion.button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-primary font-mono text-sm mt-3 p-3 rounded-2xl bg-accent-primary/10 border border-accent-primary/20"
                  >
                    Thank you! I will get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.form>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8 items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {socials.map(({ name, icon: Icon, url }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-background-primary/40 backdrop-blur-[10px] border border-background-tertiary/30 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300 group shadow-lg"
                    aria-label={name}
                  >
                    <div className="p-3 rounded-2xl bg-background-secondary/30 border border-background-tertiary/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-sm font-medium">{name}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="text-center max-w-xs p-4 rounded-3xl bg-background-primary/40 backdrop-blur-[10px] border border-background-tertiary/30 shadow-lg"
              >
                <div className="font-mono text-sm text-text-secondary/80 leading-relaxed">
                  <span className="text-accent-primary">{'>'}</span> Let's build the future of intelligence together.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-24 right-10 w-24 h-24 bg-accent-secondary/2 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-24 left-10 w-32 h-32 bg-accent-primary/2 rounded-full blur-3xl animate-pulse" />
    </section>
  )
} 