'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Target, Lightbulb, Rocket } from 'lucide-react'

const stats = [
  { number: '25+', label: 'AI Projects Built', icon: Brain },
  { number: '15+', label: 'Models Deployed', icon: Target },
  { number: '99%', label: 'System Uptime', icon: Lightbulb },
  { number: '500M+', label: 'Tokens Processed', icon: Rocket },
]

const principles = [
  {
    title: 'Production-Grade AI Systems',
    description: 'Deploying enterprise-ready LLM solutions with 99.9% uptime, efficient resource utilization, and seamless scaling from prototype to production',
    icon: '⚡',
  },
  {
    title: 'MLOps & Model Governance',
    description: 'Implementing robust CI/CD pipelines for model deployment, automated testing frameworks, and comprehensive monitoring for model drift and performance',
    icon: '🔧',
  },
  {
    title: 'Agentic AI Architecture',
    description: 'Designing multi-agent systems with advanced reasoning capabilities, tool integration, and autonomous decision-making for complex business workflows',
    icon: '🤖',
  },
  {
    title: 'Performance Optimization',
    description: 'Leveraging quantization, LoRA/PEFT fine-tuning, and efficient inference techniques to maximize model performance while minimizing computational costs',
    icon: '📊',
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="about" className="relative py-16">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
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
              <span className="text-text-secondary font-light">About</span>{' '}
              <span className="gradient-text font-semibold">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-mono text-sm text-accent-primary/80 border-l-2 border-accent-primary/50 pl-4 py-2"
                >
                  {'// Defining intelligence through code'}
                </motion.div>

                <p className="text-base text-text-secondary leading-relaxed">
                  I'm a software engineer passionate about the intersection of{' '}
                  <span className="text-accent-primary font-medium">
                    artificial intelligence and practical applications
                  </span>
                  . Currently pursuing an undergraduate degree in Information Technology & Mathematics from{' '}
                  <span className="text-accent-primary/90 font-medium">University of Delhi</span>
                  , I focus on creating intelligent systems that bridge the gap between 
                  cutting-edge research and real-world impact.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-primary">What I Do</h4>
                  
                  <div className="space-y-3">
                    <div className="relative p-4 rounded-3xl bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 shadow-lg shadow-black/20 overflow-hidden">
                      {/* Animated light reflection overlay */}
                      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                        <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/5 blur-xl rounded-full animate-pulse" style={{ filter: 'blur(12px)' }} />
                      </div>
                      <p className="relative text-sm text-text-secondary leading-relaxed">
                        <span className="text-accent-primary font-semibold">AI Architecture & Systems:</span>{' '}
                        I architect and develop intelligent systems that leverage modern AI frameworks to solve complex problems. My focus lies in creating scalable, efficient solutions that integrate seamlessly with existing workflows and deliver measurable business impact.
                      </p>
                    </div>

                    <div className="relative p-4 rounded-3xl bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 shadow-lg shadow-black/20 overflow-hidden">
                      {/* Animated light reflection overlay */}
                      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                        <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/5 blur-xl rounded-full animate-pulse" style={{ filter: 'blur(12px)' }} />
                      </div>
                      <p className="relative text-sm text-text-secondary leading-relaxed">
                        <span className="text-accent-primary font-semibold">Model Development & Optimization:</span>{' '}
                        I specialize in building and fine-tuning machine learning models, implementing performance optimization techniques, and creating evaluation frameworks that ensure reliability and efficiency across diverse use cases and deployment environments.
                      </p>
                    </div>

                    <div className="relative p-4 rounded-3xl bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 shadow-lg shadow-black/20 overflow-hidden">
                      {/* Animated light reflection overlay */}
                      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                        <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/5 blur-xl rounded-full animate-pulse" style={{ filter: 'blur(12px)' }} />
                      </div>
                      <p className="relative text-sm text-text-secondary leading-relaxed">
                        <span className="text-accent-primary font-semibold">Full-Stack Innovation:</span>{' '}
                        From concept to deployment, I build end-to-end solutions that bridge the gap between research and production. My work encompasses data processing pipelines, intelligent automation systems, and user-centric applications designed for real-world impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MacOS-style Terminal experience */}
              <motion.div
                variants={itemVariants}
                className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl shadow-2xl shadow-black/30 p-0 overflow-hidden"
              >
                {/* Animated light reflection overlay */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/10 blur-2xl rounded-full animate-pulse" style={{ filter: 'blur(24px)' }} />
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-8 bg-accent-primary/10 blur-xl rounded-full animate-pulse" />
                </div>
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-xs font-mono text-text-secondary/70">experience.log</span>
                  <div className="w-3 h-3"></div>
                </div>
                <div className="px-5 pb-5 pt-1">
                  <div className="bg-background-secondary/20 rounded-2xl p-4 font-mono text-sm space-y-2">
                    <div>
                      <span className="text-accent-primary">$</span>{' '}
                      <span className="text-text-secondary/80">
                        python -c "import experience"
                      </span>
                    </div>
                    <div className="text-text-secondary/80 pl-3">
                      {'>'} Code for GovTech Mentee @ Protean eGov (Jun-Aug 2025)
                    </div>
                    <div className="text-text-secondary/80 pl-3">
                      {'>'} GenAI/NLP Engineer @ FiXit-AI (Jun-Dec 2024)
                    </div>
                    <div className="text-text-secondary/80 pl-3">
                      {'>'} Undergrad @ University of Delhi (2022-2026)
                    </div>
                    <div className="text-accent-primary pl-3">
                      {'>'} Status: Optimizing intelligence...
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats and Principles */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={statVariants}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl p-4 text-center group hover:border-accent-primary/50 transition-all duration-300 shadow-2xl shadow-black/30"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2 rounded-2xl bg-background-secondary/30 border border-background-tertiary/30">
                        <stat.icon className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="text-xl font-bold text-accent-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Core Principles */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Core Principles
                </h3>
                <div className="space-y-3">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      variants={itemVariants}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start space-x-3 p-4 rounded-3xl bg-background-primary/40 backdrop-blur-[10px] border border-background-tertiary/30 hover:border-accent-primary/50 transition-all duration-300 group shadow-lg"
                    >
                      <div className="text-lg p-2 rounded-xl bg-background-secondary/30 border border-background-tertiary/30 group-hover:scale-110 transition-transform duration-300">
                        {principle.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1 text-sm">
                          {principle.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 140, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary rounded-2xl transition-all duration-300 font-mono backdrop-blur-sm"
            >
              {'> explore_projects()'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-secondary/2 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-primary/2 rounded-full blur-2xl animate-float" />
    </section>
  )
} 