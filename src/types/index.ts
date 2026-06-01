export interface Photographer {
  name: string;
  tagline: string;
  bio: string;
  shortBio: string;
  specializations: string[];
  experience: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon: number;
  socialLinks: SocialLink[];
  location: string;
  email: string;
  phone: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  date: string;
  client: string;
  location: string;
  featured: boolean;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  duration: string;
  image: string;
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  category: string;
  image: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  projectType: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'milestone' | 'award' | 'project' | 'education';
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLink[];
}

export interface Equipment {
  category: string;
  items: {
    name: string;
    brand: string;
    model: string;
    image: string;
  }[];
}
