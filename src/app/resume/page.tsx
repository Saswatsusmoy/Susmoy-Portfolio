'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Briefcase, Download, Lightbulb } from 'lucide-react';
import jsPDF from 'jspdf';
import Navigation from '@/components/Navigation';

const resume = {
  name: 'Saswat Susmoy Sahoo',
  contact: {
    email: 'saswatsusmoy8013@gmail.com',
    phone: '+91 93481 87633',
    github: 'https://github.com/Saswatsusmoy',
    linkedin: 'https://www.linkedin.com/in/saswat-susmoy-sahoo/'
  },
  education: [
    {
      degree: 'BS, Data Science and Application',
      institution: 'Indian Institute of Technology, Madras',
      years: '2023 - 2026',
    },
    {
      degree: 'B.Tech, IT & Mathematical Innovations',
      institution: 'University of Delhi',
      years: '2022 - 2026',
    }
  ],
  experience: [
    {
      company: 'Protean eGov Technologies Ltd',
      role: 'Code for GovTech Mentee',
      duration: 'May 2025 - Jun 2025',
      achievements: [
        'Implemented a multi-agent RAG chatbot using Langchain, retrieving data from SQL tables to produce Business KPIs.',
        'Built a Text-to-SQL pipeline for efficient querying via natural language.',
        'Developed a dynamic dashboard for intuitive chatbot interaction and visualization.'
      ]
    },
    {
      company: 'FiXitAI',
      role: 'GenAI/NLP Engineer',
      duration: 'Jun 2024 - Dec 2024',
      achievements: [
        'Designed a multi-agent system with Langchain and LangGraph, identifying 200+ critical keywords and reducing latency by 10%.',
        'Developed a real-time feedback system using GPT-4, delivering suggestions in under 1s.',
        'Achieved 99.9% system uptime, cutting manual QA by 85% and boosting agent performance by 86%.'
      ]
    }
  ],
  projects: [
    {
      name: 'LLM Benchmarking Suite with MCP',
      technologies: ['Generative AI', 'MLOps'],
      details: [
        'Built a unified benchmarking system for major LLMs with standardized metrics.',
        'Implemented 4/8-bit quantization, LoRA/PEFT, and Flash Attention for efficiency.',
        'Architected a JSON-RPC 2.0 based server for enterprise integration.'
      ]
    },
    {
      name: 'Multilingual Semantic Search',
      technologies: ['NLP', 'GenAI'],
      details: [
        'Developed an AI-powered search engine for NIC codes with edge-device inferencing.',
        'Achieved <100ms performance for English/Hindi queries with Speech Recognition.',
        'Top 5 solution in India (MoSPI challenge) among 1400+ submissions.'
      ]
    },
    {
      name: 'FinanceScope - Finance Research Agent',
      technologies: ['Agentic Workflows', 'Finance', 'Web'],
      details: [
        'Built APIs for live stock data with 1-minute refresh intervals.',
        'Implemented specialized agents for technical analysis, risk assessment, and reporting.',
        'Developed a responsive web UI with portfolio tracking and real-time charts.'
      ]
    }
  ],
  skills: {
    'Programming': ['Python', 'C++', 'Javascript', 'R', 'MATLAB'],
    'AI/ML': ['PyTorch', 'TensorFlow', 'LLMs', 'NLP', 'RAGs', 'LangChain', 'LangGraphs', 'Agentic Workflows'],
    'Web Tech': ['HTML', 'CSS', 'JavaScript', 'React.js'],
    'Databases & VCS': ['MySQL', 'MongoDB', 'Git'],
  }
};

const Section: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({ icon, title, children }) => (
  <motion.section 
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
      <span className="text-accent-primary">{icon}</span>
      {title}
    </h2>
    {children}
  </motion.section>
);

export default function ResumePage() {
  const generatePdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 10;
    const leftColX = margin;
    const leftColW = 65;
    const rightColX = leftColW + margin + 5;
    const rightColW = pageW - rightColX - margin;

    let yLeft = margin + 10;
    let yRight = margin + 10;
    
    // --- Helpers ---
    const addWrappedText = (text: string, x: number, y: number, width: number, options: any = {}) => {
      const lines = doc.splitTextToSize(text, width);
      doc.text(lines, x, y, options);
      return y + (lines.length * (options.fontSize || 10) / 2.5);
    };
    
    // --- Left Column ---
    doc.setFont('helvetica', 'bold').setFontSize(18).text(resume.name, leftColX, yLeft);
    yLeft += 8;
    doc.setFont('helvetica', 'normal').setFontSize(10).text('GenAI/NLP Engineer', leftColX, yLeft);
    yLeft += 10;

    doc.setFont('helvetica', 'bold').setFontSize(12).text('Contact', leftColX, yLeft);
    yLeft += 6;
    doc.setFont('helvetica', 'normal').setFontSize(9);
    doc.setTextColor(0, 102, 204);
    doc.textWithLink(resume.contact.email, leftColX, yLeft, { url: `mailto:${resume.contact.email}`});
    yLeft += 5;
    doc.textWithLink('GitHub Profile', leftColX, yLeft, { url: resume.contact.github });
    yLeft += 5;
    doc.textWithLink('LinkedIn Profile', leftColX, yLeft, { url: resume.contact.linkedin });
    yLeft += 10;
    doc.setTextColor(0,0,0);

    doc.setFont('helvetica', 'bold').setFontSize(12).text('Education', leftColX, yLeft);
    yLeft += 6;
    resume.education.forEach(edu => {
      doc.setFont('helvetica', 'bold').setFontSize(10).text(edu.degree, leftColX, yLeft);
      yLeft += 4;
      doc.setFont('helvetica', 'normal').setFontSize(9).text(edu.institution, leftColX, yLeft);
      yLeft += 4;
      doc.setFontSize(8).setTextColor(100).text(edu.years, leftColX, yLeft);
      yLeft += 8;
    });
    doc.setTextColor(0,0,0);

    doc.setFont('helvetica', 'bold').setFontSize(12).text('Skills', leftColX, yLeft);
    yLeft += 6;
    Object.entries(resume.skills).forEach(([cat, skills]) => {
      doc.setFont('helvetica', 'bold').setFontSize(10).text(cat, leftColX, yLeft);
      yLeft += 5;
      doc.setFont('helvetica', 'normal').setFontSize(9);
      yLeft = addWrappedText(skills.join(', '), leftColX, yLeft, leftColW) + 4;
    });

    // --- Right Column ---
    doc.setFont('helvetica', 'bold').setFontSize(14).text('Experience', rightColX, yRight);
    yRight += 8;
    resume.experience.forEach(exp => {
      doc.setFont('helvetica', 'bold').setFontSize(11).text(exp.role, rightColX, yRight);
      doc.setFont('helvetica', 'normal');
      doc.text(`@ ${exp.company}`, rightColX + doc.getTextWidth(exp.role) + 2, yRight);
      yRight += 5;
      doc.setFontSize(9).setTextColor(100).text(exp.duration, rightColX, yRight);
      yRight += 5;
      exp.achievements.forEach(ach => {
        yRight = addWrappedText(`• ${ach}`, rightColX + 2, yRight, rightColW - 2);
      });
      yRight += 8;
    });
    
    doc.setFont('helvetica', 'bold').setFontSize(14).text('Projects', rightColX, yRight);
    yRight += 8;
    resume.projects.forEach(proj => {
      doc.setFont('helvetica', 'bold').setFontSize(11).text(proj.name, rightColX, yRight);
      yRight += 5;
      doc.setFont('helvetica', 'bold').setFontSize(9).setTextColor(100).text(proj.technologies.join(' | '), rightColX, yRight);
      yRight += 5;
      doc.setFont('helvetica', 'normal').setTextColor(0,0,0);
      proj.details.forEach(det => {
        yRight = addWrappedText(`• ${det}`, rightColX + 2, yRight, rightColW - 2);
      });
      yRight += 8;
    });

    doc.save('Saswat_Sahoo_Resume.pdf');
  };

  return (
    <>
      <Navigation />
      <div className="h-16 md:h-24" /> {/* Spacer */}
      <main className="min-h-screen bg-background-primary text-text-primary p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:col-span-1 bg-background-secondary/50 backdrop-blur-md border border-background-tertiary/30 rounded-2xl p-6 h-fit md:sticky md:top-28" // Simplified classes
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-1">{resume.name}</h1>
            <p className="text-md text-text-secondary">GenAI/NLP Engineer</p>
          </div>

          <div className="space-y-4 text-sm">
            <h2 className="text-lg font-semibold text-accent-primary border-b border-accent-primary/20 pb-1 mb-2">Contact</h2>
            <a href={`mailto:${resume.contact.email}`} className="flex items-center gap-3 hover:text-accent-primary transition-colors"><Mail size={16} />{resume.contact.email}</a>
            <a href={`tel:${resume.contact.phone}`} className="flex items-center gap-3 hover:text-accent-primary transition-colors"><Phone size={16} />{resume.contact.phone}</a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent-primary transition-colors"><Github size={16} />GitHub Profile</a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent-primary transition-colors"><Linkedin size={16} />LinkedIn Profile</a>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-accent-primary border-b border-accent-primary/20 pb-1 mb-2">Education</h2>
            {resume.education.map((edu, i) => (
              <div key={i}>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-text-secondary">{edu.institution}</p>
                <p className="text-xs text-text-secondary/70">{edu.years}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-accent-primary border-b border-accent-primary/20 pb-1 mb-2">Skills</h2>
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-md mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="bg-background-primary/70 text-xs text-text-secondary px-2 py-1 rounded-md border border-background-tertiary/20">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={generatePdf}
            className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent-primary text-background-primary font-semibold rounded-lg hover:bg-accent-primary/80 transition-all duration-300 shadow-lg"
          >
            <Download size={16} />
            Download as PDF
          </button>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-2 bg-background-secondary/50 backdrop-blur-md border border-background-tertiary/30 rounded-2xl p-6 md:p-8"
        >
          <Section icon={<Briefcase />} title="Experience">
            <div className="relative border-l-2 border-accent-primary/20 pl-6 space-y-10">
              {resume.experience.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[34px] top-1 h-4 w-4 bg-accent-primary rounded-full border-4 border-background-secondary"></div>
                  <p className="text-lg font-semibold">{exp.role} <span className="text-text-secondary font-normal">@ {exp.company}</span></p>
                  <p className="text-sm text-text-secondary/70 mb-2">{exp.duration}</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 text-sm">
                    {exp.achievements.map(ach => <li key={ach}>{ach}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={<Lightbulb />} title="Projects">
            <div className="space-y-6">
              {resume.projects.map(proj => (
                <div key={proj.name}>
                  <h3 className="text-lg font-semibold">{proj.name}</h3>
                  <div className="flex flex-wrap gap-2 my-1">
                    {proj.technologies.map(tech => (
                      <span key={tech} className="bg-background-primary/70 text-xs text-accent-primary px-2 py-1 rounded-md border border-background-tertiary/20">{tech}</span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-text-secondary space-y-1 text-sm">
                    {proj.details.map(det => <li key={det}>{det}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>
      </div>
    </main>
    </>
  );
} 