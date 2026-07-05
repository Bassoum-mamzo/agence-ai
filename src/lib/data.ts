export const personalInfo = {
  name: "Mamoudou Bassoum",
  title: "Développeur IA & Automatisation",
  tagline: "Je connecte l'intelligence artificielle aux besoins réels des PME africaines.",
  location: "Kaolack / Dakar, Sénégal",
  age: 22,
  email: "mamadoubassoum414@gmail.com",
  whatsapp: "+221781234567",
  linkedin: "https://linkedin.com/in/mamoudou-bassoum",
  github: "https://github.com/bassoum-mamzo",
  languages: ["Français (natif)", "Wolof (natif)", "Anglais (en cours)", "Mandarin (débutant)"],
  certification: {
    title: "Formation Intensive en Développement Logiciel avec Compétences en IA",
    issuer: "GoMyCode",
    date: "28 octobre 2025",
  },
};

export const skills = [
  { category: "Développement Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python"] },
  { category: "Automatisation", items: ["n8n", "Make (Integromat)", "Zapier", "Webhooks", "API REST"] },
  { category: "Intelligence Artificielle", items: ["API Claude (Anthropic)", "Chatbots WhatsApp", "Prompt Engineering", "LLM Integration"] },
  { category: "Bases de données & CRM", items: ["Notion", "Airtable", "PostgreSQL", "Neo4j", "Redis"] },
  { category: "DevOps & Infrastructure", items: ["Docker", "VPS", "Grafana", "Linux", "Git"] },
];

export const projects = [
  {
    title: "Chatbot WhatsApp Immobilier",
    description: "Agent conversationnel propulsé par l'API Claude (Anthropic) pour qualifier automatiquement des prospects immobiliers via WhatsApp. Le bot collecte les besoins (budget, zone, type de bien), pré-qualifie le lead et notifie l'agent en temps réel.",
    stack: ["Claude API", "WhatsApp Business API", "Node.js", "n8n"],
    impact: "Démonstration live lors de rendez-vous clients — taux de qualification des prospects multiplié par 3",
    emoji: "🏠",
    highlight: true,
  },
  {
    title: "CRM Multi-secteurs Dakar",
    description: "Mise en place d'un CRM complet combinant Notion et Airtable avec des pipelines de prospection segmentés par secteur d'activité. Gestion d'une base de ~500 contacts d'entreprises dakároises avec automatisation des relances.",
    stack: ["Notion", "Airtable", "Make", "n8n", "WhatsApp"],
    impact: "500 entreprises contactées, pipelines automatisés par secteur (immobilier, santé, éducation)",
    emoji: "📊",
    highlight: false,
  },
  {
    title: "PRIMEMAX — Bug Bounty Automation",
    description: "Système automatisé de bug bounty hunting composé de ~61 modules Python orchestrés sous Docker. Stack complète avec Redis pour les queues, PostgreSQL pour la persistance, Neo4j pour la cartographie des vulnérabilités, et Grafana pour le monitoring en temps réel.",
    stack: ["Python", "Docker", "Redis", "PostgreSQL", "Neo4j", "Grafana"],
    impact: "~61 modules de reconnaissance, hébergé sur VPS dédié avec monitoring temps réel",
    emoji: "🔐",
    highlight: false,
  },
  {
    title: "Agence IA pour PME Sénégalaises",
    description: "Offres packagées d'automatisation IA pour les PME africaines — chatbots WhatsApp, CRM automatisés, intégrations n8n/Make. Cible : secteurs immobilier, santé, éducation et comptabilité à Dakar et Kaolack.",
    stack: ["n8n", "Make", "Claude API", "WhatsApp Business", "Notion", "Airtable"],
    impact: "Fondateur solo — développement de l'offre commerciale et des premières démos clients",
    emoji: "🚀",
    highlight: true,
  },
];

export const services = [
  {
    title: "Chatbot WhatsApp IA",
    description: "Un assistant intelligent sur WhatsApp Business qui répond à vos clients 24h/24, qualifie les prospects et transfère les leads chauds à votre équipe.",
    icon: "💬",
    features: ["Qualification automatique de leads", "Réponses instantanées 24h/24", "Intégration CRM", "Tableau de bord des conversations"],
  },
  {
    title: "CRM Automatisé",
    description: "Mise en place ou optimisation de votre CRM (Notion/Airtable) avec des workflows automatisés : relances, segmentation clients, suivi des opportunités.",
    icon: "📋",
    features: ["Pipelines de vente personnalisés", "Relances automatiques", "Segmentation par secteur", "Reporting hebdomadaire"],
  },
  {
    title: "Intégrations IA sur mesure",
    description: "Connectez vos outils métier avec l'intelligence artificielle. Automatisation des tâches répétitives, extraction de données, génération de rapports.",
    icon: "⚡",
    features: ["Connexion entre vos applications", "Automatisation des tâches répétitives", "Génération de contenu IA", "Support et formation inclus"],
  },
];
