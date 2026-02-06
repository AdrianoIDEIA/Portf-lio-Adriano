export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
}

export interface FreelanceProject {
  title: string;
  review: string;
  stars: number;
  date: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  competencies?: string;
  url?: string;
}

export enum TabId {
  HOME = 'home.tsx',
  PROJECTS = 'projects.json',
  ABOUT = 'about.md',
  CERTIFICATES = 'certificates.ts',
  CONTACT = 'contact.css'
}

export interface TabConfig {
  id: TabId;
  label: string;
  icon: string;
  color: string;
}