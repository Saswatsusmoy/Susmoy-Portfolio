export type NavigationItem = { name: string; href: string; symbol?: string };
export type Socials = { github?: string; linkedin?: string; x?: string; email?: string };

export type SiteData = {
  site: {
    title: string;
    description: string;
    domain: string;
  };
  person: {
    name: string;
    alias?: string;
    headline: string;
    location?: string;
  };
  socials: Socials;
  hero: {
    greeting: string;
    role: string;
    typewriter_topics: string[];
    code_snippets_cycle: string[];
  };
  about: {
    tagline: string;
    stats: { number: string; label: string }[];
  };
  resume: {
    education: { 
      degree: string; 
      institution: string; 
      years: string; 
      coursework?: { semester: string; courses: string[] }[];
    }[];
    experience: { company: string; role: string; duration: string; achievements: string[] }[];
  };
  skills: {
    tech_stack_categories: { title: string; techs: string[] }[];
  };
  projects: {
    categories: Record<string, { title: string; description: string; tags: string[]; github?: string; demo?: string }[]>;
    all_projects: { title: string; description: string; status: string; timeline: string; link: string }[];
  };
  contact_section: {
    blurb: string;
    socials: { name: string; url: string }[];
  };
  blogs: {
    posts: {
      id: string;
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      tags: string[];
      slug: string;
    }[];
  };
  recommendations: {
    categories: Record<string, {
      title: string;
      description: string;
      tags: string[];
      link?: string;
      linkType?: 'youtube' | 'paper' | 'book' | 'movie' | 'website';
      detailedExplanation: string;
    }[]>;
    icons: Record<string, string>;
  };
};

export const data: SiteData = {
  site: {
    title: "saswatsusmoy",
    description:
      "Portfolio of Saswat Susmoy Sahoo - Full-stack developer who speaks fluent binary and occasionally dreams in code. Specializing in turning coffee into functional applications.",
    domain: "https://www.saswat.in",
  },
  person: {
    name: "Saswat Susmoy Sahoo",
    alias: "saswatsusmoy",
    headline: "Code Wizard & Digital Alchemist",
    location: "India",
  },
  socials: {
    github: "https://github.com/Saswatsusmoy",
    linkedin: "https://www.linkedin.com/in/saswat-susmoy-sahoo/",
    x: "https://x.com/SusmoySaswat",
    email: "mailto:tech@saswatsusmoy.in",
  },
  hero: {
    greeting: "Hello World, I'm",
    role: "Code Wizard & Digital Alchemist",
    typewriter_topics: [
      "Coffee-to-Code Converter",
      "Bug Hunter Extraordinaire", 
      "Stack Overflow Survivor",
      "Compiler Whisperer",
      "Digital Problem Solver"
    ],
    code_snippets_cycle: [
      "while (coffee > 0) {\n  code += '// TODO: Fix this later';\n  coffee--;\n}",
      "if (bug.found) {\n  console.log('It works on my machine!');\n  return 'Ship it anyway';\n}",
      "const developer = {\n  skills: ['Googling', 'Copy-paste', 'Prayer'],\n  motto: 'It compiles, ship it!'\n};"
    ]
  },
  about: {
    tagline: "Turning caffeine into code since 2022",
    stats: [
      { number: "∞", label: "Cups of Coffee Consumed" },
      { number: "42", label: "Meaning of Life (in binary)" },
      { number: "99%", label: "Time Spent Debugging" },
      { number: "1", label: "Working Computer (barely)" },
    ],
  },
  resume: {
    education: [
      {
        degree: "Bachelor of Technology, IT & Mathematics",
        institution: "University of Delhi",
        years: "2022 - 2026",
        coursework: [
          {
            semester: "Semester 1 (2022)",
            courses: [
              "Programming Fundamentals",
              "Single & Multivariable Calculus",
              "Discrete Mathematics & Application",
              "Engineering Physics - I",
              "Environmental Science: Theory into practice - I",
              "Science and Society",
              "Creative Writing"
            ]
          },
          {
            semester: "Semester 2 (2023)",
            courses: [
              "Data Structures and Design",
              "Object-Oriented Programming",
              "Linear Algebra",
              "Engineering Physics - II",
              "Innovation & Entrepreneurship",
              "Vedic Mathematics - I",
            ]
          },
          {
            semester: "Semester 3 (2023)",
            courses: [
              "Operating Systems",
              "Computer Systems Architecture",
              "Ordinary Differential Equations",
              "Flow of Information in Living Systems",
              "Environmental Science: Theory into practice - II",
              "Ayurveda & Nutrition"
            ]
          },
          {
            semester: "Semester 4 (2023)",
            courses: [
              "Analyis and Design of Algorithms",
              "Database Management Systems",
              "Probability and Statistics",
              "In-Silico Biology",
              "Vedic Mathematics - II",
            ]
          },
          {
            semester: "Semester 5 (2024)",
            courses: [
              "Data Communication & Networking",
              "Software Engineering",
              "IOT, Security & Machine Learning",
              "Linear Programming & Game Theory",
              "Circuit Analysis & Synthesis"
            ]
          },
          {
            semester: "Semester 6 (2024)",
            courses: [
              "Information Security",
              "Artificial Intelligence",
              "Numerical Methods for Computational Mathematics",
              "Technological Solutions for Society",
              "Control Systems",
            ]
          },
          {
            semester: "Semester 7 (2025)",
            courses: [
              "Data Mining & Warehousing",
              "Deep Learning & Applications",
              "Biological Networks & Data Analysis",
              "Nanotechnology"
            ]
          }
        ]
      },
    ],
    experience: [
      {
        company: "Protean eGov Technologies Ltd",
        role: "Code for GovTech Intern",
        duration: "May 2025 - Aug 2025",
        achievements: [
          "Implemented a multi-agent RAG chatbot using LangChain.",
          "Built an end-to-end Text-to-SQL pipeline for natural language querying.",
          "Developed a dynamic dashboard for chatbot interaction and visualization.",
          "Built MCP servers for advanced LLM tool calling."
        ],
      },
      {
        company: "FiXitAI",
        role: "GenAI/NLP Engineer",
        duration: "Jun 2024 - Dec 2024",
        achievements: [
          "Designed a multi-agent system with LangChain/LangGraph; identified 200+ keywords; reduced latency by 10%.",
          "Developed a real-time feedback system using GPT-4 with <1s response.",
          "Achieved 99.9% system uptime; reduced manual QA by 85%; improved agent performance by 86%.",
        ],
      },
    ],
  },
  skills: {
    tech_stack_categories: [
      {
        title: "Programming Languages",
        techs: ["Python", "C++", "JavaScript", "R", "MATLAB"],
      },
      {
        title: "AI/ML Frameworks",
        techs: [
          "PyTorch",
          "TensorFlow",
          "LangChain",
          "LangGraphs",
          "Transformers",
          "NLP",
          "Agentic Workflows",
          "MCP Agents",
          "Data Science Libraries",
        ],
      },
      { title: "Web Technologies", techs: ["HTML", "CSS", "JavaScript", "React.js"] },
      { title: "Database Systems", techs: ["MySQL", "MongoDB", "PostgreSQL"] },
      { title: "Version Control", techs: ["Git"] },
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
          title: "Text-to-SQL Pipeline with Multi-Agent Validation",
          description:
            "Enterprise natural language to SQL with multi-agent validation and compliance checking.",
          tags: ["Text-to-SQL", "Multi-Agent", "Query Optimization", "Enterprise"],
          github: "#",
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
        title: "Text-to-SQL Pipeline with Multi-Agent Validation",
        description:
          "Enterprise-grade natural language to SQL system with a multi-agent validation framework.",
        status: "Completed",
        timeline: "Q4 2023",
        link: "https://github.com/Saswatsusmoy",
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
    blurb: "Want to collaborate, hire a code wizard, or just discuss the latest Reddit Tech News?",
    socials: [
      { name: "GitHub", url: "https://github.com/Saswatsusmoy" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/saswat-susmoy-sahoo/" },
      { name: "Email", url: "mailto:tech@saswatsusmoy.in" },
      { name: "X", url: "https://x.com/SusmoySaswat" },
    ],
  },
  blogs: {
    posts: [
      {
        id: "ai-coding",
        title: "I never knew the life of pre-AI stack-overflow developers (And Why I'm Mad About It)",
        excerpt: "I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started...",
        date: "August 2025",
        readTime: "5 min read",
        tags: ["Development"],
        slug: "ai-coding"
      }
    ]
  },
  recommendations: {
    categories: {
      movies: [
        {
          title: "Life is Beautiful",
          description: "Roberto Benigni's masterpiece about a father's love and humor in the face of unimaginable tragedy during the Holocaust.",
          tags: [],
          linkType: "movie",
          detailedExplanation: "This film is a testament to the power of love, humor, and human resilience in the darkest of times. Roberto Benigni's performance is extraordinary - he manages to find moments of genuine comedy within one of history's greatest tragedies without ever diminishing the horror of the Holocaust. The film's central message about protecting innocence and finding joy even in despair resonates deeply with me. As someone who works with technology that can sometimes feel overwhelming or dehumanizing, this film reminds me of the importance of maintaining humanity and hope. The father's creative storytelling to shield his son from the reality of their situation shows how love can transcend even the most brutal circumstances. It's a film that makes you laugh and cry in equal measure, ultimately leaving you with a profound appreciation for the strength of the human spirit."
        },
        {
          title: "Tenet",
          description: "Christopher Nolan's mind-bending thriller about time inversion and the nature of cause and effect.",
          tags: [],
          linkType: "movie",
          detailedExplanation: "Tenet represents Christopher Nolan at his most ambitious and intellectually challenging. The film's exploration of time inversion and temporal mechanics is not just a gimmick - it's a profound meditation on the nature of causality and free will. What I find fascinating is how the film forces you to think in ways that challenge your understanding of time and reality. The complex narrative structure mirrors the kind of problem-solving and pattern recognition that's essential in AI and machine learning. As someone working with algorithms that process information in complex ways, I appreciate how the film demonstrates that sometimes the most elegant solutions come from thinking about problems from completely different angles. The visual effects and sound design create an immersive experience that makes abstract concepts tangible. It's the kind of film that rewards multiple viewings and deep thinking."
        },
        {
          title: "Schindler's List",
          description: "Steven Spielberg's powerful portrayal of Oskar Schindler and his efforts to save Jewish lives during the Holocaust.",
          tags: [],
          linkType: "movie",
          detailedExplanation: "Schindler's List is one of the most important films ever made, not just for its historical significance but for its profound exploration of human nature. The film masterfully balances the horror of the Holocaust with the extraordinary acts of courage and compassion that emerged from it. Liam Neeson's portrayal of Oskar Schindler shows how ordinary people can be transformed by circumstances and how one person can make an enormous difference. The film's black and white cinematography creates a stark, documentary-like quality that makes the historical events feel immediate and real. As someone working in technology, this film reminds me of the responsibility that comes with knowledge and resources. Schindler's transformation from a profit-seeking businessman to a savior of lives demonstrates how moral choices can define a person's legacy. It's essential viewing for understanding both the depths of human cruelty and the heights of human compassion."
        },
        {
          title: "Casablanca",
          description: "The classic romantic drama set during WWII, featuring Humphrey Bogart and Ingrid Bergman in one of cinema's greatest love stories.",
          tags: [],
          linkType: "movie",
          detailedExplanation: "Casablanca is a masterclass in storytelling, character development, and emotional resonance. The film's dialogue is legendary for good reason - every line feels perfectly crafted and memorable. What makes it timeless is how it balances personal love with larger moral questions about sacrifice and duty. Humphrey Bogart's Rick is one of cinema's most complex characters - cynical yet ultimately heroic, selfish yet capable of great sacrifice. The film's setting in wartime Casablanca creates a perfect backdrop for exploring themes of exile, loyalty, and the choices people make under pressure. As someone who works with complex systems and decision-making algorithms, I'm fascinated by how the film presents moral choices that aren't simply black and white. The famous ending, where Rick chooses duty over love, represents the kind of difficult decisions that define character. It's a film that proves that great storytelling transcends time and continues to resonate across generations."
        }
      ],
      books: [
        {
          title: "A Mind for Numbers",
          description: "Barbara Oakley's guide to learning how to learn, with practical techniques for mastering math and science.",
          tags: [],
          linkType: "book",
          detailedExplanation: "This book fundamentally changed how I approach learning and problem-solving. Barbara Oakley's insights into how the brain processes information, particularly in mathematical and scientific contexts, are invaluable for anyone working in technical fields. The book explains the difference between focused and diffuse thinking modes and how to use both effectively. What I found most transformative is the concept of 'chunking' - breaking complex problems into smaller, manageable pieces that the brain can process more efficiently. The techniques for overcoming procrastination and building effective study habits have been crucial for my work in AI and machine learning. The book's emphasis on the importance of rest and sleep for learning resonates with my experience - some of my best insights come when I step away from a problem and let my subconscious work on it. It's not just about math; it's about developing a growth mindset and learning how to learn effectively."
        },
        {
          title: "The Pragmatic Programmer",
          description: "Your journey to mastery by David Thomas and Andrew Hunt. A timeless guide to becoming a better programmer.",
          tags: [],
          linkType: "book",
          detailedExplanation: "This book is about the art and philosophy of programming, not just the technical skills. Hunt and Thomas distill decades of software development experience into practical wisdom that's as relevant today as when it was written. The concept of being a 'pragmatic programmer' - someone who balances technical excellence with practical business needs - resonates deeply with my approach to development. The book's emphasis on continuous learning, automation, and building systems that can evolve has shaped how I approach every project. The 'DRY' principle (Don't Repeat Yourself) and the idea of 'broken windows' in code have become fundamental to my development philosophy. It's not just about writing code; it's about developing a mindset that leads to long-term success in the software industry."
        },
        {
          title: "How Does Government Listen to Scientists",
          description: "An exploration of the relationship between science, policy, and governance in modern society.",
          tags: [],
          linkType: "book",
          detailedExplanation: "This book provides crucial insights into how scientific knowledge translates into policy decisions, which is increasingly relevant as AI and technology reshape society. The book examines the complex relationship between scientific expertise and political decision-making, highlighting both the opportunities and challenges of evidence-based policy. What I find particularly valuable is how it addresses the communication gap between scientists and policymakers - a challenge that's equally relevant in tech. The book explores how scientific uncertainty is often misrepresented or misunderstood in political contexts, and how this affects public trust in science and technology. As someone working in AI, where the societal implications of our work are profound, this book helps me understand how to communicate complex technical concepts to non-technical audiences. It's essential reading for anyone who wants their work to have a positive impact on society."
        }
      ],
      youtube_channels: [
        {
          title: "ThePrimeTime",
          description: "A software engineer sharing insights about the industry, career advice, and technical deep-dives into programming concepts.",
          tags: [],
          link: "https://www.youtube.com/@ThePrimeTimeagen",
          linkType: "youtube",
          detailedExplanation: "ThePrimeTime offers invaluable insights into the software engineering industry from the perspective of someone who's navigated the field successfully. What I appreciate most is the honest, no-nonsense approach to discussing both the technical and career aspects of software development. The channel covers everything from coding tutorials and system design to salary negotiations and industry trends. The content is particularly valuable for understanding the realities of working in tech - the challenges, opportunities, and how to navigate your career effectively. As someone working in AI and software development, I find the discussions about industry practices, company cultures, and career growth strategies incredibly helpful. The channel strikes a perfect balance between technical content and practical career advice, making it essential viewing for anyone serious about their career in technology."
        },
        {
          title: "3Blue1Brown",
          description: "Grant Sanderson's channel makes complex mathematical concepts accessible through beautiful animations and clear explanations.",
          tags: [],
          link: "https://www.youtube.com/c/3blue1brown",
          linkType: "youtube",
          detailedExplanation: "Grant Sanderson has revolutionized how we think about mathematical education. His visual approach to explaining complex concepts like neural networks, linear algebra, and calculus makes abstract ideas tangible and intuitive. What sets 3Blue1Brown apart is the combination of mathematical rigor with stunning visual storytelling. His series on neural networks helped me understand backpropagation in a way that textbooks never could. The way he builds intuition through animation and then connects it to the underlying mathematics is masterful. For anyone working in AI or data science, this channel is essential for building the mathematical foundations needed to truly understand what's happening in your models. It's not just educational - it's beautiful."
        },
        {
          title: "LEMMiNO",
          description: "High-quality documentary-style videos exploring mysteries, science, history, and thought-provoking topics with exceptional production value.",
          tags: [],
          link: "https://www.youtube.com/c/LEMMiNO",
          linkType: "youtube",
          detailedExplanation: "LEMMiNO creates some of the most compelling and well-researched content on YouTube. The channel's documentary-style approach to exploring mysteries, scientific phenomena, and historical events is exceptional. What sets it apart is the meticulous research, attention to detail, and production quality that rivals professional documentaries. The content often explores topics that challenge conventional thinking and present multiple perspectives on complex issues. As someone working in AI and technology, I appreciate how the channel demonstrates the importance of critical thinking, research, and presenting information in an engaging way. The videos often deal with topics that require careful analysis and evidence evaluation - skills that are crucial in both scientific research and technology development. It's a masterclass in how to communicate complex information effectively."
        },
        {
          title: "Veritasium",
          description: "Derek Muller's channel explores science, engineering, and the human side of discovery with engaging experiments and interviews.",
          tags: [],
          link: "https://www.youtube.com/c/veritasium",
          linkType: "youtube",
          detailedExplanation: "Veritasium excels at making science accessible and exciting through Derek Muller's engaging presentation style and well-designed experiments. What I find most valuable is how the channel explores not just the 'what' of scientific phenomena, but the 'how' and 'why' behind discoveries. The content often features interviews with leading researchers and scientists, providing insights into the process of scientific discovery and the human stories behind breakthroughs. The channel's approach to science communication is particularly relevant for anyone working in technical fields, as it demonstrates how to explain complex concepts to broader audiences. As someone in AI, I appreciate how Veritasium tackles topics like artificial intelligence, quantum mechanics, and engineering in ways that are both scientifically accurate and entertaining. It's a perfect example of how to make technical content engaging without sacrificing depth."
        }
      ],
      podcasts: [
        {
          title: "Lex Fridman Podcast",
          description: "Deep conversations with researchers, engineers, and entrepreneurs working on AI, robotics, and the future of humanity.",
          tags: [],
          link: "https://lexfridman.com/podcast/",
          linkType: "website",
          detailedExplanation: "Lex Fridman's podcast represents the gold standard for technical interviews. His conversations go beyond surface-level discussions to explore the deeper philosophical and technical aspects of AI, robotics, and technology. What makes his interviews exceptional is his preparation and ability to ask probing questions that reveal insights you won't find elsewhere. The guests range from AI researchers and engineers to philosophers and entrepreneurs, providing diverse perspectives on technology's impact on society. His discussions about AGI, consciousness, and the future of humanity are particularly thought-provoking. As someone working in AI, these conversations challenge my assumptions and expand my understanding of the broader implications of the work we do."
        },
        {
          title: "Waveform",
          description: "MKBHD's podcast covering the latest in technology, gadgets, and the tech industry with expert guests and deep discussions.",
          tags: [],
          link: "https://open.spotify.com/show/6o81QuW22s5m2nfcXWjucc",
          linkType: "website",
          detailedExplanation: "Waveform offers a unique perspective on technology from someone who's deeply embedded in the consumer tech space. Marques Brownlee's approach combines technical expertise with consumer-focused insights, making complex topics accessible to broader audiences. What I appreciate most is how the podcast covers both the technical aspects of new technologies and their real-world impact on users. The discussions often feature industry experts and provide insights into how companies approach product development and innovation. As someone working in AI and technology, I find the discussions about user experience, product design, and the intersection of technology and daily life particularly valuable. The podcast strikes a great balance between being informative for tech enthusiasts while remaining accessible to general audiences."
        },
        {
          title: "Zero Shot",
          description: "A podcast exploring the latest developments in AI, machine learning, and their implications for society and the future.",
          tags: [],
          link: "https://the-ken.com/podcasts/zero-shot/",
          linkType: "website",
          detailedExplanation: "Zero Shot provides thoughtful analysis of AI developments with a focus on their broader implications for society. The podcast excels at breaking down complex technical concepts while maintaining a critical perspective on how these technologies might impact our world. What sets it apart is the emphasis on ethical considerations, societal implications, and the human side of technological advancement. The discussions often explore topics like AI safety, bias in machine learning, and the future of work in an AI-driven world. As someone working in AI, I appreciate how the podcast encourages thinking beyond just the technical implementation to consider the broader context and consequences of our work. It's essential listening for anyone who wants to understand not just what AI can do, but what it should do."
        }
      ],
    },
    icons: {
      movies: "",
      books: "",
      youtube_channels: "",
      podcasts: ""
    }
  },
};


