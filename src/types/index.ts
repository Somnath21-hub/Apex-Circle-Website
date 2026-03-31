export interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
  location: string;
  time: string;
  status: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  team: string;
  category: string;
  hackathon: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  category: string;
  desc: string;
}
