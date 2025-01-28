// blogData.js
export interface BlogDataType {
  id: number;
  title: string;
  publishedOn: string;
  description: string;
}

export const blogData: BlogDataType[] = [
  {
    id: 1,
    title: 'Getting Started with React: A Beginner’s Practice Session',
    publishedOn: 'May 17, 2024',
    description: 'Quick Approach to getting started with ReactJS.',
  },
  {
    id: 2,
    title: 'Getting Started with React: A Beginner’s Practice Session',
    publishedOn: 'May 21, 2024',
    description: 'Quick Approach to getting started with ReactJS.',
  },
  {
    id: 3,
    title: 'Getting Started with React: A Beginner’s Practice Session',
    publishedOn: 'May 27, 2024',
    description: 'Quick Approach to getting started with ReactJS.',
  },
];
