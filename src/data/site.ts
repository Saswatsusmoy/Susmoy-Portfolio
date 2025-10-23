
export type SiteData = {
  site: {
    title: string;
    domain: string;
  };
  person: {
    name: string;
    alias?: string;
  };
  resume: {
    experience: { company: string; role: string; duration: string }[];
  };
  projects: {
    categories: Record<string, { title: string; description: string; tags: string[]; github?: string; demo?: string }[]>;
    all_projects: { title: string; description: string; status: string; timeline: string; link: string }[];
  };
  contact_section: {
    socials: { name: string; url: string }[];
  };
};

export const data: SiteData = {
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
  projects: {
    categories: {
      GenAI: [
        {
          title: "AarogyaAI - AI-Powered Healthcare Platform",
          description:
            "Open-source healthcare platform with video consultations, AI-powered diagnostics, and telemedicine for remote areas.",
          tags: ["Healthcare", "AI", "Telemedicine", "Video Consultations"],
          github: "https://github.com/Saswatsusmoy/AarogyaAI",
          demo: "#",
        },
        {
          title: "LLM Benchmarking Suite with MCP",
          description:
            "Unified benchmarking supporting OpenAI, Anthropic, HF; quantization; LoRA/PEFT; MCP server.",
          tags: ["LLM", "Benchmarking", "MCP", "Quantization"],
          github: "https://github.com/Saswatsusmoy/LLM-Benchmarking-with-MCP",
          demo: "#",
        },
        {
          title: "Multilingual Semantic Search for NIC Codes",
          description:
            "Multi-lingual search engine with edge inferencing; sub-100ms; speech recognition; top 5 nationwide.",
          tags: ["Semantic Search", "NLP", "Multilingual", "Edge Computing"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "LLM Fact Checker",
          description:
            "Advanced AI-powered fact-checking system with RAG, semantic search, and multi-source verification against 25+ trusted RSS feeds.",
          tags: ["Fact-Checking", "RAG", "NLP", "AI Verification"],
          github: "https://github.com/Saswatsusmoy/LLM-Fact-Checker",
          demo: "#",
        },
        {
          title: "TalkDocs2",
          description: "Intelligent document processing system with voice interaction and automated document analysis.",
          tags: ["Document Processing", "Voice Interface", "NLP", "Automation"],
          github: "https://github.com/Saswatsusmoy/TalkDocs2",
          demo: "#",
        },
      ],
      "Machine Learning": [
        {
          title: "Credit Card Fraud Detection",
          description: "Real-time anomaly detection for transactions.",
          tags: ["Fraud Detection", "Classification", "ML"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "Plant Disease Detection on Raspberry Pi",
          description: "Lightweight CNN on Raspberry Pi for leaf disease detection.",
          tags: ["Plant Disease", "CNN", "IoT"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "Medical Image Segmentation with U-Net",
          description: "U-Net pipeline for MRI/CT segmentation with robust preprocessing.",
          tags: ["Segmentation", "U-Net", "Medical Imaging"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "Multi-Lang Character Recognition CIC",
          description: "Advanced character recognition system supporting multiple languages with high accuracy OCR capabilities.",
          tags: ["OCR", "Multi-Language", "Computer Vision", "Character Recognition"],
          github: "https://github.com/Saswatsusmoy/Multi-Lang-Character-Recognition-CIC",
          demo: "#",
        },
      ],
      "Web-Dev": [
        {
          title: "FinanceScope - Finance Research Agent",
          description: "Finance research platform with agents, live data APIs, and automated reporting.",
          tags: ["Finance", "Agents", "LLMs", "Web Platform"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "Portfolio Manager",
          description: "Investment tracking, performance visualization, multi-account management.",
          tags: ["Finance", "Dashboard", "React"],
          github: "https://github.com/Saswatsusmoy",
          demo: "#",
        },
        {
          title: "Voice-Based Banking POC",
          description: "Interactive voice banking system with natural language processing for secure financial transactions.",
          tags: ["Voice Banking", "NLP", "Fintech", "Voice Interface"],
          github: "https://github.com/Saswatsusmoy/Voice-Based-Banking-POC",
          demo: "#",
        },
      ],
    },
    all_projects: [
      {
        title: "LLM Benchmarking Suite with MCP",
        description:
          "Unified benchmarking system with standardized metrics, quantization, and LoRA/PEFT integration.",
        status: "Completed",
        timeline: "Q2 2024",
        link: "https://github.com/Saswatsusmoy/LLM-Benchmarking-with-MCP",
      },
      {
        title: "Multilingual Semantic Search for NIC Codes",
        description:
          "AI-powered search for NIC codes with edge-device inferencing and sub-100ms performance.",
        status: "Completed",
        timeline: "Q1 2024",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "AarogyaAI - AI-Powered Healthcare Platform",
        description:
          "Open-source healthcare platform with video consultations, AI-powered diagnostics, and telemedicine for remote areas.",
        status: "Completed",
        timeline: "Q4 2024",
        link: "https://github.com/Saswatsusmoy/AarogyaAI",
      },
      {
        title: "FinanceScope - Finance Research Agent",
        description:
          "Finance research platform with agents, live data APIs, and automated reporting.",
        status: "Completed",
        timeline: "Q3 2024",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "Portfolio Manager",
        description:
          "A comprehensive web application for tracking investments and visualizing portfolio performance.",
        status: "Completed",
        timeline: "Q3 2023",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "Credit Card Fraud Detection",
        description:
          "A real-time fraud detection system using machine learning to analyze transaction patterns.",
        status: "Completed",
        timeline: "Q3 2022",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "Plant Disease Detection on Raspberry Pi",
        description:
          "An IoT solution leveraging a lightweight CNN to identify plant diseases from leaf images.",
        status: "Completed",
        timeline: "Q2 2022",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "Medical Image Segmentation with U-Net",
        description:
          "A deep learning pipeline using the U-Net architecture for precise segmentation of medical images.",
        status: "Completed",
        timeline: "Q4 2021",
        link: "https://github.com/Saswatsusmoy",
      },
      {
        title: "LLM Fact Checker",
        description:
          "Advanced AI-powered fact-checking system with RAG, semantic search, and multi-source verification against 25+ trusted RSS feeds.",
        status: "Completed",
        timeline: "Q2 2024",
        link: "https://github.com/Saswatsusmoy/LLM-Fact-Checker",
      },
      {
        title: "Voice-Based Banking POC",
        description:
          "Interactive voice banking system with natural language processing for secure financial transactions.",
        status: "Completed",
        timeline: "Q1 2024",
        link: "https://github.com/Saswatsusmoy/Voice-Based-Banking-POC",
      },
      {
        title: "Multi-Lang Character Recognition CIC",
        description:
          "Advanced character recognition system supporting multiple languages with high accuracy OCR capabilities.",
        status: "Completed",
        timeline: "Q3 2023",
        link: "https://github.com/Saswatsusmoy/Multi-Lang-Character-Recognition-CIC",
      },
      {
        title: "TalkDocs2",
        description:
          "Intelligent document processing system with voice interaction and automated document analysis.",
        status: "Completed",
        timeline: "Q4 2023",
        link: "https://github.com/Saswatsusmoy/TalkDocs2",
      },
    ],
  },
  contact_section: {
    socials: [
      { name: "GitHub", url: "https://github.com/Saswatsusmoy" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/saswat-susmoy-sahoo/" },
      { name: "Email", url: "mailto:tech@saswatsusmoy.in" },
      { name: "X", url: "https://x.com/SusmoySaswat" },
    ],
  },
};


