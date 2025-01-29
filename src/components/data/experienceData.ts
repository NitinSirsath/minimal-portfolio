export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  link?: string;
  source?: string;
}

export interface PersonalProject {
  name: string;
  period: string;
  description: string;
  link?: string;
  source?: string;
}

// Work Experience Data
export const experience: Experience[] = [
  {
    company: 'Decision Automation',
    role: 'Frontend Developer',
    period: '2022 - Present',
    description:
      'Building scalable React applications, optimizing UI/UX, and enhancing data visualization for high-traffic platforms.',
  },
  {
    company: 'Antstack Inc',
    role: 'Frontend Developer',
    period: 'Aug 2022 – Dec 2022',
    description:
      'Worked on StackW3, developed custom templates, and created an advanced Template Customizer for enterprise clients.',
  },
];

// Company-Specific Projects
export const projects: Project[] = [
  {
    name: 'PowerBI-Portal / Share-My-Portal',
    period: 'Feb 2024 - Dec 2024',
    description:
      'Built a scalable UI with React & TypeScript, optimized API calls, and implemented Microsoft row-level security for report security.',
    link: 'https://portal.myreports.online/', // Example Live Link
    // source: 'https://github.com/NitinSirsath/powerbi-portal',
  },
  {
    name: 'ABEC Q-weld',
    period: 'May 2024 – Dec 2024',
    description:
      'Developed data visualization features, improved performance by 25%, and integrated custom Axios interceptors.',
    link: 'https://abec.q-weld.com/', // Example Live Link
    // source: 'https://github.com/NitinSirsath/powerbi-portal',
  },
  {
    name: 'Irish Rollforming (IRF) App',
    period: 'Oct 2023 - Jan 2024',
    description: 'Developed a React Native tablet app for inventory management and material requests.',
    link: 'https://www.irishrollforming.ie/', // Example Live Link
    // source: 'https://github.com/NitinSirsath/powerbi-portal',
  },
];

// Personal Projects
export const personalProjects: PersonalProject[] = [
  {
    name: 'Productivity App for Companies',
    period: 'Jan 2023 - Present',
    description:
      'A web-based productivity tool helping teams track tasks, set deadlines, and collaborate efficiently using AI-driven analytics.',
    source: 'https://github.com/NitinSirsath/productivity-app',
    link: 'https://productivity-app.com',
  },
  {
    name: 'Dev Blog Platform',
    period: 'Jul 2023 - Present',
    description:
      'Built a minimalist blogging platform where developers can share articles, get feedback, and collaborate on open-source projects.',
  },
  {
    name: 'AI-Powered Portfolio',
    period: 'Aug 2023 - Present',
    description:
      'A React/Next.js portfolio integrated with AI-driven personalized recommendations for hiring managers viewing my profile.',
    source: 'https://github.com/NitinSirsath/ai-portfolio',
  },
];
