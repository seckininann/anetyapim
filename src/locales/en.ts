const en = {
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About Us",
    contact: "Contact",
    contactBtn: "Contact Us",
  },
  hero: {
    badge: "⚡ AnetYapım — Digital Engineering Studio",
    title: "Nothing Is",
    titleHighlight: "Impossible.",
    titleEnd: "",
    subtitle:
      "From fintech systems to AI platforms, IoT infrastructures to blockchain networks — no matter how complex, we engineer solutions to engineering problems.",
    ctaPrimary: "Let's Discuss Your Project",
    ctaSecondary: "View Our Work",
    stat1Value: "250+",
    stat1Label: "Completed Projects",
    stat2Value: "40+",
    stat2Label: "Technologies & Frameworks",
    stat3Value: "10+",
    stat3Label: "Years of Experience",
  },
  services: {
    badge: "Our Expertise",
    title: "Solutions at Any Scale",
    subtitle:
      "From a simple landing page to ultra-complex enterprise systems — no technical limits.",
    items: [
      {
        title: "Enterprise Web & SaaS Platforms",
        desc: "High-traffic, scalable SaaS products and enterprise web platforms. Microservice architecture, CDN optimization and 99.9% uptime guarantee.",
      },
      {
        title: "Fintech & Crypto Systems",
        desc: "Crypto exchange interfaces, DeFi dashboards, wallet management panels, algorithmic trading visualization and real-time price feed systems.",
      },
      {
        title: "AI & Machine Learning Integration",
        desc: "GPT-based chatbot and assistant integrations, recommendation engines, image analysis, natural language processing and custom AI model interfaces.",
      },
      {
        title: "Real-Time Monitoring & IoT",
        desc: "Live data stream dashboards, IoT sensor monitoring systems, WebSocket-based real-time notifications and anomaly detection interfaces.",
      },
      {
        title: "Blockchain & Web3",
        desc: "Smart contract interfaces, NFT marketplaces, multi-chain token systems, DAO governance panels and decentralized application (dApp) development.",
      },
      {
        title: "API Architecture & Backend Development",
        desc: "REST / GraphQL / WebSocket API design, microservice architecture, database optimization and third-party service integrations.",
      },
      {
        title: "Security Audit & Penetration Testing",
        desc: "Web application security analysis, OWASP Top 10 scanning, vulnerability reporting and penetration testing services.",
      },
      {
        title: "Mobile App (iOS & Android)",
        desc: "Native and cross-platform mobile apps with complex business logic. React Native, real-time sync and offline-first architecture.",
      },
    ],
  },
  portfolio: {
    badge: "Portfolio",
    title: "What We've Built",
    subtitle: "Each one is the solution to a real engineering challenge.",
    viewAll: "View All",
    viewLess: "Show Less",
    filters: ["All", "Fintech", "AI/ML", "IoT", "Web3", "Enterprise", "Security"],
    projects: [
      {
        title: "Algorithmic Trading Dashboard",
        category: "Fintech",
        desc: "Real-time crypto exchange data visualization, live order book with 50ms latency, PnL analytics.",
        tags: ["WebSocket", "React", "Node.js", "Redis"],
        detail: "A trading panel integrated with Binance and FTX APIs, capable of processing 10,000+ transactions per second. Per-user customizable widget system.",
      },
      {
        title: "AI-Powered Customer Analytics Panel",
        category: "AI/ML",
        desc: "Customer feedback analysis with NLP, behavioral prediction and churn scoring.",
        tags: ["Python", "GPT-4", "Next.js", "PostgreSQL"],
        detail: "AI analytics platform processing 500K+ daily customer records, predicting churn probability with 87% accuracy and generating automated reports.",
      },
      {
        title: "Smart Factory Monitoring System",
        category: "IoT",
        desc: "Real-time anomaly detection and alert system processing data from 500+ IoT sensors.",
        tags: ["MQTT", "WebSocket", "React", "InfluxDB"],
        detail: "System monitoring 500+ sensors embedded on the factory floor with millisecond latency, detecting machine failures with 94% accuracy in advance.",
      },
      {
        title: "DeFi Protocol Interface",
        category: "Web3",
        desc: "Liquidity pool management, staking, yield farming and multi-wallet integration.",
        tags: ["Solidity", "Web3.js", "React", "Ethers.js"],
        detail: "User interface for a DeFi protocol running on Ethereum and Polygon, managing 10M$+ TVL. MetaMask, WalletConnect and Coinbase Wallet support.",
      },
      {
        title: "Enterprise ERP Platform",
        category: "Enterprise",
        desc: "Modular architecture ERP system with 10,000+ user capacity. HR, accounting, logistics modules.",
        tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
        detail: "Enterprise platform supporting 10,000+ active users with role-based access control, 15 different business modules and real-time reporting.",
      },
      {
        title: "Vulnerability Scanner Platform",
        category: "Security",
        desc: "Automated OWASP Top 10 scanning, CVE database integration and detailed security report generation.",
        tags: ["Python", "React", "Docker", "PostgreSQL"],
        detail: "Security automation tool that scans target URLs within minutes to detect SQL injection, XSS, CSRF and other critical vulnerabilities, generating PDF reports.",
      },
      {
        title: "Real-Time Logistics Tracking",
        category: "IoT",
        desc: "Map-based vehicle and cargo tracking, route optimization and delivery prediction engine.",
        tags: ["WebSocket", "Mapbox", "Node.js", "Redis"],
        detail: "Logistics management system simultaneously tracking 1000+ vehicles and cargo tasks, calculating estimated arrival times with artificial intelligence.",
      },
      {
        title: "Multi-Chain NFT Marketplace",
        category: "Web3",
        desc: "NFT buy-sell platform running on Ethereum and Solana with lazy minting support.",
        tags: ["Solidity", "Rust", "React", "IPFS"],
        detail: "NFT marketplace working seamlessly on two different blockchains, storing metadata on IPFS and using Layer 2 solutions for low gas fees.",
      },
    ],
  },
  about: {
    badge: "About Us",
    title: "We Start Where Limits End",
    subtitle:
      "10+ years of experience, 250+ complex projects and we've never said 'we can't do this'.",
    description:
      "What sets us apart from standard software studios: we don't say 'this project is too hard'. Algorithmic trading systems, real-time IoT platforms, AI integrations, blockchain infrastructure — these are engineering tasks for us. We apply NDA protection, enterprise SLA and DevSecOps standards in every project.",
    features: [
      "10+ years of enterprise software development experience",
      "250+ complex projects successfully delivered",
      "Full confidentiality and IP protection with NDA",
      "Enterprise SLA — 99.9% uptime guarantee",
      "Secure development with DevSecOps standards",
      "24/7 technical support and proactive monitoring",
    ],
    ctaText: "Let's Discuss Your Project",
  },
  contact: {
    badge: "Contact",
    title: "Let's Talk About Your Project",
    subtitle:
      "No matter how complex — write us now for a free technical consultation.",
    whatsappBtn: "Message on WhatsApp",
    whatsappDesc: "Prefer WhatsApp for a quick response",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone (Optional)",
      message: "Describe Your Project",
      messagePlaceholder:
        "Briefly describe your project. What kind of system do you need?",
      submit: "Send via WhatsApp",
      sending: "Redirecting...",
      success: "Opening WhatsApp! Your message is ready.",
      error: "An error occurred. Please try again.",
    },
  },
  footer: {
    description:
      "Elite engineering studio building complex digital systems at any scale.",
    links: "Quick Links",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    madeWith: "Built with ⚡",
  },
  floatingBtn: "Message on WhatsApp",
};

export default en;
