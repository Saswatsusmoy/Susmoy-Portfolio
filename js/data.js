// Site data and configuration
const siteData = {
  site: {
    title: "saswatsusmoy",
    domain: "https://www.saswatsusmoy.in",
  },
  person: {
    name: "Saswat Susmoy Sahoo",
    alias: "saswatsusmoy",
  },
  resume: {
    experience: [
      {
        company: "Protean eGov Technologies Ltd",
        role: "Code for GovTech Intern",
        duration: "May 2025 - Aug 2025",
      },
      {
        company: "FiXitAI",
        role: "GenAI/NLP Engineer",
        duration: "Jun 2024 - Dec 2024",
      },
    ],
  },
  projects: [
    {
      id: "aarogya-ai",
      title: "AarogyaAI - AI-Powered Healthcare Platform",
      description: "Open-source healthcare platform with video consultations, AI-powered diagnostics, and telemedicine for remote areas.",
      github: "https://github.com/Saswatsusmoy/AarogyaAI",
      tags: ["AI", "Healthcare", "Telemedicine"],
      featured: true,
    },
    {
      id: "talkdocs2",
      title: "TalkDocs2",
      description: "Intelligent document processing system with voice interaction and automated document analysis.",
      github: "https://github.com/Saswatsusmoy/TalkDocs2",
      tags: ["AI", "Document Processing", "Voice"],
      featured: true,
    },
    {
      id: "llm-benchmarking",
      title: "LLM Benchmarking Suite with MCP",
      description: "Unified benchmarking supporting OpenAI, Anthropic, HF; quantization; LoRA/PEFT; MCP server.",
      github: "https://github.com/Saswatsusmoy/LLM-Benchmarking-with-MCP",
      tags: ["AI", "Benchmarking", "MCP"],
      featured: true,
    },
    {
      id: "ai-agent-framework",
      title: "AI Agent Framework",
      description: "Comprehensive framework for building and deploying AI agents with multi-modal capabilities.",
      github: "https://github.com/Saswatsusmoy/ai-agent-framework",
      tags: ["AI", "Agents", "Framework"],
      featured: false,
    },
    {
      id: "nlp-toolkit",
      title: "NLP Toolkit",
      description: "Collection of natural language processing utilities and pre-trained models.",
      github: "https://github.com/Saswatsusmoy/nlp-toolkit",
      tags: ["NLP", "Machine Learning", "Tools"],
      featured: false,
    },
    {
      id: "web-scraper",
      title: "Intelligent Web Scraper",
      description: "AI-powered web scraping tool with intelligent content extraction and data processing.",
      github: "https://github.com/Saswatsusmoy/web-scraper",
      tags: ["Web Scraping", "AI", "Data Processing"],
      featured: false,
    },
  ],
  blogs: [
    {
      id: "stop-treating-ai-agents-like-functions",
      title: "Stop Treating AI Agents Like Functions",
      slug: "stop-treating-ai-agents-like-functions",
      excerpt: "The fundamental mistake we're making in AI agent design: treating autonomous systems like deterministic functions...",
      date: "October 2025",
      featured: true,
    },
    {
      id: "pre-ai-stack-overflow",
      title: "I never knew the life of pre-AI stack-overflow developers",
      slug: "i-never-knew-the-life-of-pre-ai-stack-overflow-developers",
      excerpt: "I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums...",
      date: "August 2025",
      featured: true,
    },
  ],
  social: {
    github: "https://github.com/Saswatsusmoy",
    linkedin: "https://www.linkedin.com/in/saswat-susmoy-sahoo/",
    email: "tech@saswatsusmoy.in",
    x: "https://x.com/SusmoySaswat",
  },
  theme: {
    default: "dark",
    options: ["light", "dark"],
  },
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
