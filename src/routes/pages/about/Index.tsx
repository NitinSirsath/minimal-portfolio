import { Box, Typography, Divider, Avatar, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import {
  experience,
  personalInfo,
  skills,
  tools,
  languages,
  collegeLife,
  photography,
} from '../../../components/data/about';

const AboutPage = () => {
  return (
    <CenterWrapper>
      {/* Profile Section */}
      <Box textAlign="left" sx={{ mb: 4 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Avatar src={personalInfo.profileImage} sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FCD44C' }}>
            {personalInfo.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {personalInfo.role}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {personalInfo.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            📍 {personalInfo.location}
          </Typography>
          <Typography variant="body2">
            📧 <a href={`mailto:${personalInfo.contact.email}`}>{personalInfo.contact.email}</a>
          </Typography>
          <Typography variant="body2">
            📞 <a href={`tel:${personalInfo.contact.phone}`}>{personalInfo.contact.phone}</a>
          </Typography>
          <Typography variant="body2">
            🌐 <a href={personalInfo.contact.website}>{personalInfo.contact.website}</a>
          </Typography>
        </motion.div>
      </Box>
      <Divider sx={{ my: 4 }} />

      {/* College Life Section */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          College Life
        </Typography>
        <Box>
          <Typography variant="body1">{collegeLife.description}</Typography>
        </Box>
      </motion.div>

      <Divider sx={{ my: 4 }} />
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Photography Passion 📸
        </Typography>
        <Box>
          <Typography variant="body1">{photography.description}</Typography>
        </Box>
      </motion.div>

      <Divider sx={{ my: 4 }} />

      {/* Work Experience - Timeline */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Work Experience
        </Typography>
        <Timeline position="alternate">
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index !== experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box sx={{ padding: 2, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.role} | {exp.period}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>

      <Divider sx={{ my: 4 }} />

      {/* Photography Section */}

      {/* Skills Section */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Skills & Tools
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {[...skills.skills, ...tools.tools].map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Languages Section */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Languages
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {languages.languages.map((lang, index) => (
          <Chip key={index} label={lang} variant="outlined" />
        ))}
      </Box>
    </CenterWrapper>
  );
};

export default AboutPage;
