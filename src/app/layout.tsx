import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import { StagewiseToolbar } from '@stagewise/toolbar-next'
import { ReactPlugin } from '@stagewise-plugins/react'
import Dock from '@/components/Dock';
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Saswat Susmoy Sahoo | GenAI/NLP Engineer',
  description: 'Portfolio of Saswat Susmoy Sahoo - GenAI/NLP Engineer specializing in multi-agent systems, LLM benchmarking, and Text-to-SQL pipelines.',
  keywords: ['GenAI', 'NLP Engineer', 'Machine Learning', 'Portfolio', 'Artificial Intelligence', 'LLM', 'Multi-Agent Systems', 'RAG', 'Text-to-SQL'],
  authors: [{ name: 'Saswat Susmoy Sahoo' }],
  creator: 'Saswat Susmoy Sahoo',
  publisher: 'Saswat Susmoy Sahoo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saswat.dev',
    title: 'Saswat Susmoy Sahoo | GenAI/NLP Engineer',
    description: 'Portfolio of Saswat Susmoy Sahoo - GenAI/NLP Engineer specializing in multi-agent systems and LLM optimization.',
    siteName: 'Saswat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saswat Susmoy Sahoo | GenAI/NLP Engineer',
    description: 'Portfolio of Saswat Susmoy Sahoo - GenAI/NLP Engineer specializing in multi-agent systems and LLM optimization.',
    creator: '@saswat_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="msapplication-navbutton-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-background-primary text-text-primary antialiased font-sans`}>
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Logo in top left corner */}
            <div className="fixed top-6 left-6 z-50">
              <Link href="/" className="block">
                <div className="flex items-center space-x-2 bg-background-primary/80 backdrop-blur-xl border border-background-tertiary/50 rounded-2xl shadow-2xl shadow-black/20 px-4 py-2 hover:bg-background-secondary/80 transition-colors cursor-pointer">
                <span className="text-accent-primary font-mono text-lg font-bold">{'{'}</span>
                <span className="text-text-primary font-sans font-semibold text-lg">saswat</span>
                <span className="text-accent-primary font-mono text-lg font-bold">{'}'}</span>
                </div>
              </Link>
            </div>
          
          <Navigation />
          {children}
          <ScrollToTop />
          <Dock />
        </div>
        <StagewiseToolbar 
          config={{
            plugins: [ReactPlugin]
          }}
        />
      </body>
    </html>
  )
}