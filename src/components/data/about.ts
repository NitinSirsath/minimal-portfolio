export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  location: string;
}

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
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Skills {
  skills: string[];
}

export interface Tools {
  tools: string[];
}

export interface Languages {
  languages: string[];
}

// Now assigning types to the variables

export const personalInfo: PersonalInfo = {
  name: 'Nitin Sirsath',
  role: 'Frontend Developer | Motion Graphic Designer',
  bio: 'Frontend Developer with 2 years of experience in building responsive and scalable applications using ReactJS, TypeScript, and modern UI frameworks. Proficient in creating user-centric designs and optimizing performance for high-traffic platforms.',
  profileImage: '/path-to-your-image.jpg', // Replace with your actual image path
  contact: {
    email: 'nitinsirsath8855@gmail.com',
    phone: '+91-7507609484',
    website: 'https://nitinsirsath.netlify.app/',
  },
  location: 'Aurangabad, Maharashtra',
};

export const experience: Experience[] = [
  {
    company: 'Decision Automation',
    role: 'Frontend Developer',
    period: '2022 - Present',
    description:
      'Building scalable, high-performance React applications using TypeScript, Zustand, and MUI. Implementing UI optimizations and improving state management for complex applications.',
  },
  {
    company: 'Antstack Inc',
    role: 'Frontend Developer',
    period: 'Aug 2022 – Dec 2022',
    description:
      'Worked on cutting-edge web technologies, built custom React templates, and enhanced user experience for various SaaS products.',
  },
];

export const collegeLife = {
  description:
    'College life at MGM-JNEC was a blend of learning, building projects, and exploring new technologies. I actively participated in hackathons, tech events, and group discussions. It was during my college years that I discovered my love for frontend development and UI/UX design.',
};

export const photography = {
  description:
    "Photography is more than just a hobby for me—it's my way of capturing emotions, landscapes, and unique moments. I love street photography and often explore new places to capture stunning visuals. Follow my journey on Instagram for some of my best shots.",
};

export const projects: Project[] = [
  {
    name: 'PowerBI-Portal / Share-My-Portal',
    period: 'Feb 2024 - Dec 2024',
    description:
      'Led frontend development, built a scalable UI with React & TypeScript, optimized API calls, and implemented Microsoft row-level security for report security.',
  },
  {
    name: 'ABEC Q-weld',
    period: 'May 2024 – Dec 2024',
    description:
      'Delivered data visualization features, improved performance by 25%, and integrated custom Axios interceptors for faster API response.',
  },
  {
    name: 'Irish Rollforming (IRF) App',
    period: 'Oct 2023 - Jan 2024',
    description: 'Developed a React Native tablet app for inventory management, material requests, and purchase orders.',
  },
];

export const education: Education = {
  institution: 'Jawaharlal Nehru Engineering College',
  degree: 'B.Tech in Computer Science',
  period: '2017 - 2022',
  gpa: '7.6/10',
  coursework: ['Data Analysis', 'Software Engineering', 'Operating Systems', 'Algorithm', 'Artificial Intelligence'],
};

export const skills: Skills = {
  skills: [
    'ReactJS',
    'React Native',
    'TypeScript',
    'NextJS',
    'Node.js',
    'Express.js',
    'Zustand',
    'MUI',
    'Tailwind',
    'UI/UX Design',
    'RESTful APIs',
  ],
};

export const tools: Tools = {
  tools: ['GitHub', 'Git', 'VSCode', 'Figma', 'Premier Pro', 'Azure Data Studio', 'Postman', 'Android Studio'],
};

export const languages: Languages = {
  languages: ['English', 'Marathi', 'Hindi', 'German'],
};
