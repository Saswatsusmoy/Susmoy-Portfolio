'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GanttChartSquare, CheckCircle, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';

const allProjects = [
  // GenAI
  {
    title: 'LLM Benchmarking Suite with MCP',
    description: 'Unified benchmarking system with standardized metrics, quantization, and LoRA/PEFT integration.',
    status: 'Completed',
    timeline: 'Q2 2024',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Multilingual Semantic Search for NIC Codes',
    description: 'AI-powered search for NIC codes with edge-device inferencing and sub-100ms performance.',
    status: 'Completed',
    timeline: 'Q1 2024',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'FinanceScope - Finance Research Agent',
    description: 'UI-based finance research platform with specialized agents for data analysis and report generation.',
    status: 'In Progress',
    timeline: 'Q3 2024',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Text-to-SQL Pipeline with Multi-Agent Validation',
    description: 'Enterprise-grade natural language to SQL system with a multi-agent validation framework.',
    status: 'Completed',
    timeline: 'Q4 2023',
    link: 'https://github.com/Saswatsusmoy',
  },
  // Web-Dev
  {
    title: 'Portfolio Manager',
    description: 'A comprehensive web application for tracking investments and visualizing portfolio performance.',
    status: 'Completed',
    timeline: 'Q3 2023',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    status: 'Completed',
    timeline: 'Q2 2023',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A scalable real-time chat app built with React, Node.js, and Socket.io.',
    status: 'In Progress',
    timeline: 'Q1 2023',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Personal Blog Platform',
    description: 'A full-featured blog platform with Markdown support, a custom CMS, and SEO optimization.',
    status: 'Completed',
    timeline: 'Q4 2022',
    link: 'https://github.com/Saswatsusmoy',
  },
  // Machine Learning
  {
    title: 'Credit Card Fraud Detection',
    description: 'A real-time fraud detection system using machine learning to analyze transaction patterns.',
    status: 'Completed',
    timeline: 'Q3 2022',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Plant Disease Detection on Raspberry Pi',
    description: 'An IoT solution that leverages a lightweight CNN to identify plant diseases from leaf images.',
    status: 'Completed',
    timeline: 'Q2 2022',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Handwriting Recognition Analysis',
    description: 'A neural network that recognizes and transcribes handwritten text from images.',
    status: 'Completed',
    timeline: 'Q1 2022',
    link: 'https://github.com/Saswatsusmoy',
  },
  {
    title: 'Medical Image Segmentation with U-Net',
    description: 'A deep learning pipeline using the U-Net architecture for precise segmentation of medical images.',
    status: 'Completed',
    timeline: 'Q4 2021',
    link: 'https://github.com/Saswatsusmoy',
  },
];

const StatusPill = ({ status }: { status: string }) => {
  const statusConfig = {
    Completed: {
      icon: <CheckCircle size={14} className="text-green-400" />,
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-300',
    },
    'In Progress': {
      icon: <Clock size={14} className="text-yellow-400" />,
      bgColor: 'bg-yellow-500/10',
      textColor: 'text-yellow-300',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Completed;

  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full ${config.bgColor}`}>
      {config.icon}
      <span className={`text-xs font-mono font-medium ${config.textColor}`}>{status}</span>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background-primary text-text-primary p-4 md:p-8 pt-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <GanttChartSquare size={32} className="text-accent-primary" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">All Projects</h1>
          </motion.div>

          {/* Desktop Table View */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block bg-background-secondary/30 backdrop-blur-md border border-background-tertiary/20 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm table-fixed">
                <thead className="border-b border-background-tertiary/20">
                  <tr className="font-mono text-xs uppercase text-text-secondary/80">
                    <th className="p-4 text-left w-12">Sl No</th>
                    <th className="p-4 text-left">Project Title</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left hidden md:table-cell">Timeline</th>
                    <th className="p-4 text-left hidden md:table-cell">Description</th>
                    <th className="p-4 text-right">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {allProjects.map((project, index) => (
                    <motion.tr
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="border-b border-background-tertiary/20 last:border-b-0 hover:bg-background-secondary/20 transition-colors duration-200"
                    >
                      <td className="p-4 text-text-secondary">{index + 1}</td>
                      <td className="p-4 font-semibold text-text-primary break-words">{project.title}</td>
                      <td className="p-4">
                        <StatusPill status={project.status} />
                      </td>
                      <td className="p-4 text-text-secondary hidden md:table-cell">{project.timeline}</td>
                      <td className="p-4 text-text-secondary break-words">{project.description}</td>
                      <td className="p-4 text-right">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block p-2 text-text-secondary hover:text-accent-primary transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-background-secondary/30 backdrop-blur-md border border-background-tertiary/20 rounded-2xl p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-text-primary break-words pr-2">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 text-text-secondary hover:text-accent-primary transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-xs text-text-secondary break-words mb-3">{project.description}</p>
                <div className="flex justify-between items-center text-xs font-mono">
                  <StatusPill status={project.status} />
                  <span className="text-text-secondary">{project.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 