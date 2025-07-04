'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { socialLinks } from './Dock' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navItems = [
  { name: 'home', href: '#home', symbol: '~' },
  { name: 'projects', href: '#projects', symbol: '*' },
  { name: 'about', href: '#about', symbol: '>' },
  { name: 'skills', href: '#skills', symbol: '#' },
]

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const observers = navItems.map(item => {
      const section = document.querySelector(item.href)
      if (!section) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.name)
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(section)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [pathname])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (pathname === '/') {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/' + href)
    }
  }
  
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="bg-background-primary/80 backdrop-blur-xl border border-background-tertiary/50 rounded-2xl shadow-2xl shadow-black/20 px-2 sm:px-4 py-2"
        >
          <div className="flex items-center justify-center">
            <motion.div 
              className="flex items-center space-x-1"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-2 sm:px-3 py-2 rounded-xl font-mono text-xs sm:text-sm transition-all duration-300',
                    'hover:bg-background-secondary/60 hover:text-accent-primary',
                    activeSection === item.name
                      ? 'text-accent-primary bg-background-secondary/60 shadow-md'
                      : 'text-text-secondary'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1 sm:mr-2 text-accent-primary opacity-70">{item.symbol}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-accent-primary/10 rounded-xl border border-accent-primary/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="fixed top-4 right-4 z-[60] md:hidden">
        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-background-primary/80 backdrop-blur-xl border border-background-tertiary/50 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isMenuOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background-primary/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center gap-6 text-center">
              {navItems.map(item => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="font-mono text-2xl text-text-secondary hover:text-accent-primary transition-colors"
                  variants={itemVariants}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 pt-6 border-t border-background-tertiary/20 flex items-center gap-6"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 