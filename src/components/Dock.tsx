'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const socialLinks = [
  { icon: faGithub, href: 'https://github.com/Saswatsusmoy' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/saswat-susmoy-sahoo/' },
  { icon: faXTwitter, href: 'https://x.com/SusmoySaswat' },
  { icon: faEnvelope, href: 'mailto:saswatsusmoy8013@gmail.com' },
];

const Dock = () => {
  return (
    <motion.div 
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-background-primary/80 backdrop-blur-xl border border-background-tertiary/50 rounded-2xl shadow-2xl shadow-black/20 p-2 flex-col space-y-2 hidden md:flex"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 1 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl hover:bg-background-secondary/60 text-text-secondary hover:text-accent-primary transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Dock; 