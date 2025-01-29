import { Divider, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const ProfessionalJourney = () => {
  const theme = useTheme();

  const timelineData = [
    {
      year: '2022',
      title: 'Started My Journey 🚀',
      description:
        'Began my career as a Frontend Developer at Decision Automation, learning React, TypeScript, and scalable architectures.',
    },
    {
      year: '2023',
      title: 'Expanding My Expertise 📈',
      description:
        'Worked on complex UI systems, optimized performance, and built scalable state management solutions with Zustand.',
    },
    {
      year: '2024',
      title: 'Future Aspirations 🌍',
      description:
        'Deep dive into Backend & Full-Stack Development, exploring AI-driven workflows, problem-solving at scale, and improving architectural skills.',
    },
  ];

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          My Professional Journey & Future Goals 🚀
        </Typography>

        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2, duration: 0.6 }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              My journey in tech started with **curiosity and a passion for problem-solving**. Over the years, I've honed my
              skills in frontend development, building scalable, high-performance applications.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              I believe in **continuous learning and pushing boundaries**—whether it's experimenting with new tech, refining
              architectures, or optimizing user experiences.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              Looking ahead, I aspire to **deepen my backend expertise, work with AI-powered solutions, and build impactful
              products that scale.**
            </Typography>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <Timeline position="alternate" sx={{ mt: 4 }}>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                {item.year} - {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default ProfessionalJourney;
