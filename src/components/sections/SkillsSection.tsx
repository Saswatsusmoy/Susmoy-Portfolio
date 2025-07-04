'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript, 
  SiR, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiHtml5, 
  SiCss3
} from 'react-icons/si'
import { 
  DiGoogleCloudPlatform 
} from 'react-icons/di'
import { 
  FaDatabase,
  FaReact,
  FaProjectDiagram,
  FaNetworkWired,
  FaRobot,
  FaBrain,
  FaCodeBranch,
  FaPython,
  FaJsSquare
} from 'react-icons/fa'

type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number; description: string }[];
};

const skillCategories: SkillCategory[] = [];

const techStackCategories = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'Python', icon: FaPython, color: '#3776ab' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
      { name: 'R', icon: SiR, color: '#276DC3' },
      { name: 'MATLAB', icon: FaProjectDiagram, color: '#0076A8' }, // Using a generic icon for MATLAB
    ]
  },
  {
    title: 'AI/ML Frameworks',
    techs: [
      { name: 'PyTorch', icon: FaBrain, color: '#ee4c2c' },
      { name: 'TensorFlow', icon: FaBrain, color: '#ff6f00' },
      { name: 'LangChain', icon: FaNetworkWired, color: '#1c3b57' },
      { name: 'LangGraphs', icon: FaNetworkWired, color: '#1c3b57' },
      { name: 'Transformers', icon: FaRobot, color: '#ff9d00' },
      { name: 'NLP', icon: FaBrain, color: '#412991' },
      { name: 'Agentic Workflows', icon: FaCodeBranch, color: '#412991' },
      { name: 'MCP Agents', icon: FaCodeBranch, color: '#412991' },
      { name: 'Data Science Libraries', icon: FaDatabase, color: '#f7931e' },
    ]
  },
  {
    title: 'Web Technologies',
    techs: [
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss3, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
    ]
  },
  {
    title: 'Database Systems',
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    ]
  },
  {
    title: 'Version Control',
    techs: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
    ]
  }
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [activeCategory, setActiveCategory] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.2,
      },
    }),
  }

  return (
    <section id="skills" className="relative py-16">
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
              <span className="text-text-secondary font-light">Technical</span>{' '}
              <span className="gradient-text font-semibold">Expertise</span>
            </h2>
            <p className="text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Specialized in cutting-edge AI technologies and modern development practices
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col space-y-4">
              {techStackCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-background-primary/80 backdrop-blur-sm border border-background-tertiary/30 rounded-2xl p-4 hover:border-accent-primary/50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <h4 className="font-medium text-text-primary mb-2 text-center text-base">
                    {category.title}
                  </h4>
                  <div className="flex overflow-x-auto space-x-4 py-2">
                    {category.techs.map((tech, techIndex) => {
                      const IconComponent = tech.icon
                      return (
                        <motion.div 
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center space-x-2 p-2 rounded-xl hover:bg-background-secondary/30 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 p-1 rounded-lg bg-background-secondary/30 border border-background-tertiary/30">
                            <IconComponent 
                              className="w-5 h-5" 
                              style={{ color: tech.color }}
                            />
                          </div>
                          <span className="font-medium text-text-primary text-sm">
                            {tech.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-2xl font-semibold transition-all duration-300 border text-sm ${
                    activeCategory === index
                      ? 'bg-accent-primary text-background-primary border-accent-primary shadow-lg'
                      : 'bg-background-primary/50 backdrop-blur-sm border-background-tertiary/30 text-text-secondary hover:border-accent-primary/50 hover:bg-background-secondary/30'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Active Category Skills */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {skillCategories[activeCategory] && skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl p-4 hover:border-accent-primary/50 transition-all duration-300 shadow-2xl shadow-black/30"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-text-primary text-base">
                      {skill.name}
                    </h4>
                    <span className="text-accent-primary font-mono text-xs bg-accent-primary/10 px-2 py-1 rounded-xl border border-accent-primary/20">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="relative h-2 bg-background-secondary/30 rounded-full overflow-hidden border border-background-tertiary/30">
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      custom={skill.level}
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 h-full w-1 bg-white/50 animate-pulse rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* MacOS-style Terminal Command */}
          <motion.div
            variants={itemVariants}
            className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl p-0 max-w-xl mx-auto shadow-2xl shadow-black/30 overflow-hidden"
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
              <span className="text-xs font-mono text-text-secondary/70">skills_summary.py</span>
              <div className="w-3 h-3"></div>
            </div>
            <div className="px-5 pb-5 pt-1">
              <div className="bg-background-secondary/20 rounded-2xl p-4 font-mono text-sm space-y-2">
                <div>
                  <span className="text-accent-primary">$</span>{' '}
                  <span className="text-text-secondary/80">python skills_summary.py</span>
                </div>
                <div className="text-text-secondary/80 pl-3">
                  {'>'} Analyzing neural network expertise...
                </div>
                <div className="text-text-secondary/80 pl-3">
                  {'>'} Compiling AI/ML knowledge base...
                </div>
                <div className="text-accent-primary pl-3">
                  {'>'} Status: Ready to build intelligent systems 🚀
                </div>
                <motion.div
                  animate={mounted ? { opacity: [1, 0, 1] } : { opacity: 1 }}
                  transition={{ duration: 1, repeat: mounted ? Infinity : 0 }}
                  className="text-accent-primary inline-block pl-3"
                >
                  |
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-accent-primary/2 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-accent-secondary/2 rounded-full blur-3xl animate-pulse" />
    </section>
  )
} 