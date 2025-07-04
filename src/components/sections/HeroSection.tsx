'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Brain, Zap, Code, MessageSquare, Database, Bot } from 'lucide-react'

const typewriterTexts = [
  'Generative AI',
  'Agentic AI Systems',
  'RAG Pipelines',
  'LLM Benchmarking', 
  'Multilingual NLP',
  'Conversational AI'
]

const codeSnippets = [
  '// Building LLM benchmarking suite...',
  'from langchain import LangGraph',
  'import torch.nn.functional as F',
  'agent = MultiAgentRAG()',
  'benchmark.evaluate_models()',
  'sql_query = text_to_sql(prompt)',
  '// Optimizing with LoRA/PEFT...',
  'vector_store.similarity_search()',
  '// System achieving 99.9% uptime'
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [codeIndex, setCodeIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [particlePositions, setParticlePositions] = useState<{left: string, top: string}[]>([])
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Ensure component is mounted before showing animations
  useEffect(() => {
    setMounted(true)
    // Generate random positions for floating particles only on client
    const positions = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setParticlePositions(positions)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!mounted) return
    
    const currentText = typewriterTexts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, mounted])

  // Code animation
  useEffect(() => {
    if (!mounted) return
    
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [mounted])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background-primary">
        {/* Blurred glowing background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-8">
          {/* MacOS-style glass window with expressive glassmorphism */}
          <div className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl shadow-2xl shadow-black/30 max-w-xs mx-auto min-w-[320px] overflow-hidden">
            {/* Animated light reflection overlay */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/10 blur-2xl rounded-full animate-pulse" style={{ filter: 'blur(24px)' }} />
            </div>
            {/* MacOS window bar with animated traffic lights */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-xs font-mono text-text-secondary/70 tracking-wide">saswatsusmoy</span>
              <div className="w-3 h-3"></div>
            </div>
            <div className="px-7 pb-7 pt-2 flex flex-col items-center">
              {/* Bouncing dot loader */}
              <div className="flex space-x-2 mb-4 mt-2 h-6">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="inline-block w-3 h-3 rounded-full bg-accent-primary/80 animate-bounce"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
              <span className="font-mono text-base text-text-primary/90 mb-1">Waking up intelligence…</span>
              <span className="text-xs text-text-secondary/70 font-mono">Initializing ...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Subtle animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-secondary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent-primary/2 to-transparent rounded-full animate-pulse" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Terminal-style header */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-sm text-text-secondary/80 mb-6 hidden sm:block"
          >
            <span className="text-accent-primary">saswat@genai</span>
            <span className="text-text-secondary/60">:</span>
            <span className="text-accent-secondary">~</span>
            <span className="text-text-secondary/80">$ ./profile.sh</span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-text-primary font-light">Hi, I'm </span>
              <span className="gradient-text glow-text font-semibold">Saswat</span>
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl font-light text-text-secondary leading-relaxed">
              <span className="font-light">Software Engineer specializing in </span>
              <div className="inline-block min-w-[260px] text-left">
                <span className="text-accent-primary font-mono font-medium">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* MacOS style terminal window with expressive glassmorphism and highlight */}
          <motion.div
            variants={itemVariants}
            className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl shadow-2xl shadow-black/30 p-0 max-w-md mx-auto overflow-hidden"
          >
            {/* Animated light reflection overlay */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/10 blur-2xl rounded-full animate-pulse" style={{ filter: 'blur(24px)' }} />
              {/* Floating highlight */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-8 bg-accent-primary/10 blur-xl rounded-full animate-pulse" />
            </div>
            {/* MacOS style window bar */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
              </div>
              <span className="text-xs font-mono text-text-secondary/70">neural_network.py</span>
              <div className="w-3 h-3"></div> {/* Spacer for centering */}
            </div>
            <div className="px-5 pb-5 pt-1">
              <motion.div
                key={codeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-sm text-text-primary/90 bg-background-secondary/30 rounded-xl p-3"
              >
                {codeSnippets[codeIndex]}
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons with glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.a
              href="https://www.notion.so/21cd07e417cf801cb32cefa87f4d13dd?v=21cd07e417cf808c98f9000c9f2ac5f8&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 140, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-background-primary/60 backdrop-blur-[12px] text-accent-primary font-semibold rounded-2xl border border-accent-primary/30 hover:bg-accent-primary/10 transition-all duration-300 shadow-lg"
            >
              View Projects
            </motion.a>
            <motion.button
              onClick={() => window.open('/resume', '_blank')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255, 140, 0, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-accent-primary/50 text-accent-primary bg-background-primary/40 backdrop-blur-[12px] hover:bg-accent-primary/5 hover:border-accent-primary/70 rounded-2xl transition-all duration-300 shadow-lg"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Tech stack icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-10 mt-8"
          >
            {[
              { Icon: Brain, label: 'MLOps' },
              { Icon: Database, label: 'LLMs' },
              { Icon: Bot, label: 'Agents' }
            ].map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center space-y-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
              >
                <div className="relative p-3 rounded-2xl bg-background-secondary/30 backdrop-blur-sm border border-background-tertiary/30">
                  <Icon size={24} className="drop-shadow-lg" />
                </div>
                <span className="text-xs font-mono font-medium tracking-wide">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col items-center mt-6"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-text-secondary/70"
            >
              <span className="text-xs font-mono">scroll to explore</span>
              <div className="p-2 rounded-full bg-background-secondary/30 backdrop-blur-sm border border-background-tertiary/30">
                <ChevronDown size={14} className="text-accent-primary" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/20 rounded-full"
            style={pos}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
} 