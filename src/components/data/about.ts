import myDP from '../../assets/NOBGME.webp';

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

// export interface Experience {
//   company: string;
//   role: string;
//   period: string;
//   description: string;
// }

// export interface Project {
//   name: string;
//   period: string;
//   description: string;
// }

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

export const personalInfo = {
  name: 'Nitin Sirsath',
  role: 'Frontend Developer',
  bio: 'Frontend Developer with 2 years of experience in building scalable applications using ReactJS, TypeScript, and modern UI frameworks. Passionate about design, development, and storytelling through visuals.',
  profileImage: myDP,
  contact: {
    email: 'nitinsirsath8855@gmail.com',
    phone: '+91-7507609484',
    website: 'https://nitinsirsath.netlify.app/',
  },
  location: 'Aurangabad, Maharashtra',
  socials: {
    linkedin: 'https://www.linkedin.com/in/nitin-s-254294119/',
    x: 'https://x.com/lostNIII3',
    instagram: 'https://www.instagram.com/i_madeyouwonder/',
    youtube: 'https://www.youtube.com/@lostniii3',
  },
};

// export const experience: Experience[] = [
//   {
//     company: 'Decision Automation',
//     role: 'Frontend Developer',
//     period: 'Mar 2023 - Jan 2025',
//     description:
//       'Building scalable, high-performance React applications using TypeScript, Zustand, and MUI. Implementing UI optimizations and improving state management for complex applications.',
//   },
//   {
//     company: 'Antstack Inc',
//     role: 'Frontend Developer',
//     period: 'Aug 2022 – Dec 2022',
//     description:
//       'Worked on cutting-edge web technologies, built custom React templates, and enhanced user experience for various SaaS products.',
//   },
// ];

export const collegeLife = {
  description1:
    'College life at MGM-JNEC was a rollercoaster of emotions, experiences, and unforgettable memories. I started as an enthusiastic student and quickly found myself getting involved in various activities beyond academics. In my first year, I joined Pratibimb, the photography and filmmaking club. Through this, we explored places like Bibi Ka Maqbara, Carnival, and the stunning Ajanta & Ellora caves, capturing moments and learning the art of storytelling through visuals.',

  description2:
    'As I progressed into my second year, academics became more structured. We had some challenging subjects like Data Structures & Algorithms (DSA), Discrete Mathematics, and Database Management Systems (DBMS). These subjects laid the foundation of my programming knowledge, and while they were tough, they gave me a new perspective on problem-solving. I still remember the whole class taking an impromptu trip to the mountains, flying kites, and just living in the moment.',

  description3:
    'By the time I reached my final year, things got serious. I worked on an internship, gained real-world exposure, and as a group, we built our final-year project—an AI-driven **Customer Segmentation System**. The idea was to categorize customers based on their purchasing behavior and preferences. This project pushed us to dive into machine learning models and data analytics, which was an exciting learning curve.',

  description4:
    'Looking back, I miss those days—the chai breaks that turned into hours of deep conversations, the late-night coding sessions, and even the backlogs that made life stressful but worth it. I was one of those who would **bunk college just for chai and cigarettes**. Some of the best moments were the spontaneous road trips to the outskirts of the city. It’s funny how those small escapes from routine are now some of my most cherished memories.',
};

export const photography = {
  description1:
    'My journey into photography began somewhere around **6th or 8th standard**, when I first experienced Adobe Photoshop. I was fascinated by how I could remove backgrounds, change colors, and enhance images. It was like magic to me, and I loved experimenting with editing tools.',

  description2:
    'Things took a turn after **12th standard**, when my dad gifted me a **Xiaomi Redmi Note 4**. That phone became my companion, and my love for photography skyrocketed. I was crazy about capturing anything and everything—street life, landscapes, random objects—anything that had a story to tell. I would constantly look for unique frames, lighting conditions, and compositions.',

  description3:
    'But as time passed, especially around **my 3rd and 4th year of engineering**, my interest started shifting from photography to videography. Cinematography fascinated me—the way movements, lighting, and storytelling combined to create an impact. This transition felt natural, and I started exploring video editing, motion graphics, and short storytelling techniques.',
};

// export const projects: Project[] = [
//   {
//     name: 'PowerBI-Portal / Share-My-Portal',
//     period: 'Feb 2024 - Dec 2024',
//     description:
//       'Led frontend development, built a scalable UI with React & TypeScript, optimized API calls, and implemented Microsoft row-level security for report security.',
//   },
//   {
//     name: 'ABEC Q-weld',
//     period: 'May 2024 – Dec 2024',
//     description:
//       'Delivered data visualization features, improved performance by 25%, and integrated custom Axios interceptors for faster API response.',
//   },
//   {
//     name: 'Irish Rollforming (IRF) App',
//     period: 'Oct 2023 - Jan 2024',
//     description: 'Developed a React Native tablet app for inventory management, material requests, and purchase orders.',
//   },
// ];

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

{
  /* Work Experience - Timeline */
}
//   <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//   <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
//     Work Experience
//   </Typography>
//   <Timeline position="alternate">
//     {experience.map((exp, index) => (
//       <TimelineItem key={index}>
//         <TimelineSeparator>
//           <TimelineDot color="primary" />
//           {index !== experience.length - 1 && <TimelineConnector />}
//         </TimelineSeparator>
//         <TimelineContent>
//           <Box sx={{ padding: 2, borderRadius: 2 }}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//               {exp.company}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               {exp.role} | {exp.period}
//             </Typography>
//             <Typography variant="body2" sx={{ mt: 1 }}>
//               {exp.description}
//             </Typography>

//             {exp.company === 'Decision Automation' && (
//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
//                   Projects at {exp.company}
//                 </Typography>
//                 <List>
//                   {projects.map((project, index) => (
//                     <ListItem key={index}>
//                       <ListItemText primary={project.name} secondary={`${project.period} - ${project.description}`} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Box>
//             )}
//           </Box>
//         </TimelineContent>
//       </TimelineItem>
//     ))}
//   </Timeline>
// </motion.div>

// <Divider sx={{ my: 4 }} />
