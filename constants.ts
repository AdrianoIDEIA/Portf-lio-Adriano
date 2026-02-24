import { TabId, TabConfig, FreelanceProject, Certification } from './types';

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/dri-dev',
  FREELAS: 'https://www.99freelas.com.br/user/Adriano_Camargo',
  GITHUB: 'https://github.com/Dritcmg',
};

export const CONTACT_INFO = {
  PHONE: '15981189090',
  PHONE_FORMATTED: '(15) 98118-9090',
  EMAIL: 'adrianocamargooliver@gmail.com',
  WHATSAPP_URL: 'https://wa.me/5515981189090?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'
};

// Repositories you explicitly want to show. 
// If empty, the app will fallback to showing top starred repos.
export const PINNED_REPOS = [
  'n8n-automation', 
  'portfolio-v2',
  'bi-dashboard-sales', 
  'python-rpa-suite'
];

export const TABS: TabConfig[] = [
  { id: TabId.HOME, label: 'home.tsx', icon: '⚛️', color: 'text-blue-400' },
  { id: TabId.TEAM, label: 'team.json', icon: '👥', color: 'text-purple-400' },
  { id: TabId.ABOUT, label: 'README.md', icon: '📝', color: 'text-yellow-400' },
  { id: TabId.PROJECTS, label: 'repos.json', icon: '📦', color: 'text-orange-400' },
  { id: TabId.CERTIFICATES, label: 'certificates.ts', icon: '📜', color: 'text-green-400' },
  { id: TabId.CONTACT, label: 'contact.css', icon: '#', color: 'text-blue-300' },
];

export const HERO_TEXT = "Soluções inteligentes em automação e dados para negócios que querem crescer.";

export const FREELANCE_PROJECTS: FreelanceProject[] = [
  {
    title: "Integração N8N com Base44",
    review: "Sem palavras, dedicou 1000% ao projeto. Entrega com excelência. Indico a todos!",
    stars: 5.0,
    date: "jan. 2026 - fev. 2026"
  },
  {
    title: "Técnico de informática: diagnóstico remoto e inventário",
    review: "Rápido e preciso",
    stars: 5.0,
    date: "jan. 2026 - jan. 2026"
  },
  {
    title: "Planilha inteligente de gestão de treinos (G5 Futebol)",
    review: "Adriano foi muito atencioso desenvolvendo a planilha de gestão de treinos. Não teve preguiça de continuar tentando e buscando soluções para algumas demandas que se apresentaram como necessária. Estarei iniciando o uso das planilhas agora na proxima semana. Agradeco a atencao do profissional",
    stars: 5.0,
    date: "jan. 2026 - jan. 2026"
  },
  {
    title: "Leitor de XML",
    review: "Recomendo, me atendeu muito bem",
    stars: 5.0,
    date: "jan. 2026 - jan. 2026"
  },
  {
    title: "Planilha Excel para controle de costureiras",
    review: "Trabalho muito bem feito, planilha organizada e funcional. Entrega rápida e ótima comunicação. Recomendo!",
    stars: 4.6,
    date: "dez. 2025 - dez. 2025"
  },
  {
    title: "Migração de banco de dados Supabase",
    review: "Ótimo profissional! Entregas consistentes e objetivas.",
    stars: 5.0,
    date: "out. 2025 - nov. 2025"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Arquitetura de rede", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "N2MX6F6GGY9X",
    url: "https://www.coursera.org/account/accomplishments/verify/N2MX6F6GGY9X"
  },
  { 
    name: "Working Effectively with Stakeholders", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "1OG99THOYL0U",
    url: "https://www.coursera.org/account/accomplishments/records/1OG99THOYL0U"
  },
  { 
    name: "Introduction to AI", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "4FYKDXINUDVD",
    url: "https://www.coursera.org/account/accomplishments/records/4FYKDXINUDVD"
  },
  { 
    name: "Start Writing Prompts like a Pro", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "ZYY91SYG6L0C",
    url: "https://www.coursera.org/account/accomplishments/records/ZYY91SYG6L0C"
  },
  { 
    name: "Create a High-Performing Team", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "XU2M9I0VOW5L",
    url: "https://www.coursera.org/account/accomplishments/records/XU2M9I0VOW5L"
  },
  { 
    name: "Introduction to Microsoft Azure Cloud Services", 
    issuer: "Microsoft", 
    date: "dez. 2025", 
    credentialId: "81Y2B6W2LSWY",
    url: "https://www.coursera.org/account/accomplishments/records/81Y2B6W2LSWY"
  },
  { 
    name: "Introduction to Artificial Intelligence (AI)", 
    issuer: "IBM", 
    date: "dez. 2025", 
    credentialId: "CUZWJB3TM97L",
    url: "https://www.coursera.org/account/accomplishments/records/CUZWJB3TM97L"
  },
  { 
    name: "AWS Cloud Technical Essentials", 
    issuer: "Amazon Web Services (AWS)", 
    date: "dez. 2025", 
    credentialId: "4Y5JMVEZNZBW",
    url: "https://www.coursera.org/account/accomplishments/records/4Y5JMVEZNZBW"
  },
  { 
    name: "Python Project for Data Science", 
    issuer: "IBM", 
    date: "dez. 2025", 
    credentialId: "TLMMNBO1N9WD", 
    competencies: "Data Science e Análise de dados",
    url: "https://www.coursera.org/account/accomplishments/records/TLMMNBO1N9WD"
  },
  { 
    name: "Introduction to Front-End Development", 
    issuer: "Meta", 
    date: "dez. 2025", 
    credentialId: "Z9HVKP8AD697", 
    competencies: "CSS, JavaScript e mais 7 competências",
    url: "https://www.coursera.org/account/accomplishments/records/Z9HVKP8AD697"
  },
  { 
    name: "Olá, Python!", 
    issuer: "Google", 
    date: "dez. 2025", 
    credentialId: "4A4PHIFH73LH", 
    competencies: "Data Science, Package and Software Management e mais 2 competências",
    url: "https://www.coursera.org/account/accomplishments/records/4A4PHIFH73LH"
  },
];