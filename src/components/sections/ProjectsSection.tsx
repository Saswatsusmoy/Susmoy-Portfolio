'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { useState } from 'react';

const projectCategories = {
  GenAI: [
    {
      title: 'LLM Benchmarking Suite with MCP',
      description:
        'Unified benchmarking system supporting OpenAI, Anthropic, HuggingFace with standardized evaluation metrics. Features 4-bit/8-bit quantization, LoRA/PEFT integration, and JSON-RPC 2.0 based Model Context Protocol server.',
      tags: ['LLM', 'Benchmarking', 'MCP', 'Quantization'],
      github: 'https://github.com/saswat/llm-benchmarking-suite',
      demo: 'https://benchmark.saswat.dev',
    },
    {
      title: 'Multilingual Semantic Search for NIC Codes',
      description:
        'AI-powered multi-lingual search engine for National Industrial Classification system with edge-device local inferencing. Achieved sub-100ms performance for English and Hindi queries with speech recognition. Top 5 solution nationwide.',
      tags: ['Semantic Search', 'NLP', 'Multilingual', 'Edge Computing'],
      github: 'https://github.com/saswat/multilingual-nic-search',
      demo: 'https://nicsearch.saswat.dev',
    },
    {
      title: 'FinanceScope - Finance Research Agent',
      description:
        'UI-based finance research platform with APIs for live stock data, specialized agents for technical analysis, risk assessment, news sentiment analysis, and automated report generation with real-time charts.',
      tags: ['Finance', 'Agents', 'LLMs'],
      github: 'https://github.com/saswat/financescope',
      demo: 'https://financescope.saswat.dev',
    },
    {
      title: 'Text-to-SQL Pipeline with Multi-Agent Validation',
      description:
        'Enterprise-grade natural language to SQL system with multi-agent validation framework. Features query optimization, semantic parsing, and compliance checking for database interactions with 95% accuracy on complex business queries.',
      tags: ['Text-to-SQL', 'Multi-Agent', 'Query Optimization', 'Enterprise'],
      github: 'https://github.com/saswat/text-to-sql-pipeline',
      demo: 'https://text-to-sql.saswat.dev',
    },
  ],
  'Web-Dev': [
    {
      title: 'Portfolio Manager',
      description:
        'A comprehensive web application for tracking investments, visualizing portfolio performance, and managing assets across multiple accounts. Features interactive charts, real-time data integration, and secure authentication.',
      tags: ['Finance', 'Dashboard', 'React'],
      github: 'https://github.com/saswat/portfolio-manager',
      demo: 'https://portfolio-manager.saswat.dev',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      tags: ['E-commerce', 'Full-Stack', 'Payments'],
      github: 'https://github.com/saswat/e-commerce-platform',
      demo: 'https://ecommerce.saswat.dev',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'A scalable real-time chat app built with React, Node.js, and Socket.io, supporting private and group messaging, typing indicators, and message persistence. Features responsive design and dark mode for a modern user experience.',
      tags: ['Chat', 'Socket.io', 'Real-time'],
      github: 'https://github.com/saswat/realtime-chat-app',
      demo: 'https://chat.saswat.dev',
    },
    {
      title: 'Personal Blog Platform',
      description:
        'A full-featured blog platform with Markdown support, user authentication, and a custom CMS. Built with Next.js and MongoDB, it offers SEO optimization, fast static generation, and a beautiful, minimal UI.',
      tags: ['Blog', 'Next.js', 'CMS'],
      github: 'https://github.com/saswat/personal-blog',
      demo: 'https://blog.saswat.dev',
    },
  ],
  'Machine Learning': [
    {
      title: 'Credit Card Fraud Detection',
      description:
        'A real-time fraud detection system using machine learning to analyze transaction patterns and identify anomalies with high accuracy, minimizing false positives.',
      tags: ['Fraud Detection', 'Classification', 'ML'],
      github: 'https://github.com/saswat/credit-card-fraud-detection',
      demo: 'https://fraud-detection-demo.saswat.dev',
    },
    {
      title: 'Plant Disease Detection on Raspberry Pi',
      description:
        'An IoT solution that leverages a lightweight CNN on a Raspberry Pi to identify plant diseases from leaf images, enabling rapid, on-site diagnostics for farmers.',
      tags: ['Plant Disease', 'CNN', 'IoT'],
      github: 'https://github.com/saswat/plant-disease-detection',
      demo: 'https://plant-disease-demo.saswat.dev',
    },
    {
      title: 'Handwriting Recognition Analysis',
      description:
        'A neural network that recognizes and transcribes handwritten text from images, using the MNIST dataset for training a robust character recognition model.',
      tags: ['Handwriting', 'CNN', 'PyTorch'],
      github: 'https://github.com/saswat/handwriting-recognition',
      demo: 'https://handwriting-demo.saswat.dev',
    },
    {
      title: 'Medical Image Segmentation with U-Net',
      description:
        'Developed a deep learning pipeline using the U-Net architecture for precise segmentation of medical images, enabling automated detection of anomalies in MRI and CT scans. The project demonstrates advanced preprocessing, data augmentation, and post-processing techniques for robust performance on real-world datasets.',
      tags: ['Segmentation', 'U-Net', 'Medical Imaging'],
      github: 'https://github.com/saswat/medical-image-segmentation',
      demo: 'https://medical-segmentation-demo.saswat.dev',
    },
  ],
};

type ProjectCategory = keyof typeof projectCategories;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('GenAI');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleCategoryChange = (category: ProjectCategory) => {
    console.log('Category changed to:', category);
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    console.log('Dropdown closed after category change.');
  };

  const toggleDropdown = () => {
    console.log('Dropdown toggled. Current state before toggle:', isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
    console.log('Dropdown state after toggle:', !isDropdownOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <section id="projects" className="relative py-16">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full"
        >
          {/* Section Header with Dropdown */}
          <motion.div variants={cardVariants} className="text-center mb-12 relative">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight cursor-pointer hover:cursor-pointer inline-flex items-center"
              onClick={toggleDropdown}
            >
              <span className="text-text-secondary font-light mr-3">{selectedCategory}</span>
              <span className="gradient-text font-semibold">Projects</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-3"
              >
                <ChevronDown size={36} />
              </motion.div>
            </h2>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-background-primary border border-background-tertiary rounded-lg shadow-lg z-20">
                {['GenAI', 'Machine Learning', 'Web-Dev'].map((category) => (
                  <div
                    key={category}
                    onClick={() => handleCategoryChange(category as ProjectCategory)}
                    className="px-4 py-2 text-text-secondary hover:bg-background-secondary cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
            <p className="text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A selection of my work in {selectedCategory.toLowerCase()}, LLMs, and intelligent automation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projectCategories[selectedCategory].map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-background-primary/60 backdrop-blur-[18px] border border-background-tertiary/40 rounded-3xl p-6 shadow-2xl shadow-black/30 group transition-all duration-300 overflow-hidden hover:border-accent-primary/50"
              >
                {/* Animated light reflection overlay */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <div className="absolute left-1/4 top-0 w-1/2 h-1/3 bg-white/10 blur-2xl rounded-full animate-pulse" style={{ filter: 'blur(24px)' }} />
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-8 bg-accent-primary/10 blur-xl rounded-full animate-pulse" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-2xl bg-background-secondary/30 border border-background-tertiary/30 mr-3">
                      <span className="text-xl">🤖</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed text-sm min-h-[60px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-background-secondary/40 backdrop-blur-sm text-accent-primary rounded-xl text-xs font-mono border border-background-tertiary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-2xl bg-background-secondary/30 border border-background-tertiary/30 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-2xl bg-background-secondary/30 border border-background-tertiary/30 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-24 left-10 w-24 h-24 bg-accent-primary/2 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-24 right-10 w-32 h-32 bg-accent-secondary/2 rounded-full blur-3xl animate-pulse" />
    </section>
  );
} 