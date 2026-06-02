export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'case-studies'
  | 'blog'
  | 'audit'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'service-detail';

export interface Service {
  id: string;
  name: string;
  category: 'marketing' | 'performance' | 'development' | 'design' | 'strategy' | 'ai';
  shortDesc: string;
  longDesc: string;
  features: string[];
  subServices: string[];
  icon: string;
}

export interface IndustryData {
  id: string;
  name: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  caseSnippet: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  strategy: string;
  results: string[];
  roiMetric: string;
  duration: string;
  beforeAfter: { before: string; after: string };
  logoCode: string; // Tailwind bg color class
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
}

export interface LeadSubmission {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  budget: string;
  message: string;
}

export interface AuditResult {
  score: number;
  executiveSummary: string;
  pillars: {
    title: string;
    score: number;
    findings: string[];
    recommendations: string[];
  }[];
  roadmap: {
    term: 'immediate' | 'short-term' | 'medium-term';
    action: string;
    impact: 'High' | 'Medium' | 'Low';
  }[];
}
