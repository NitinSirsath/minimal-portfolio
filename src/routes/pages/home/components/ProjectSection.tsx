import { Box, Typography, Button, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { personalProjects } from '../../../../components/data/experienceData';

const ProjectSection = () => {
  return (
    <CenterWrapper widthPercentage={50}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h3">Personal Projects</Typography>
        <Typography className="py-3" variant="caption" color="textSecondary">
          Below is a selection of recent blogs that I've written.
        </Typography>
        <Stack spacing={4}>
          {personalProjects.map((project, index) => (
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} key={index}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {project.period}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  {project.source && (
                    <Button
                      component={Link}
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{ textTransform: 'none', fontSize: '0.8rem', color: 'text.secondary' }}
                    >
                      Source
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      component={Link}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon />}
                      sx={{ textTransform: 'none', fontSize: '0.8rem', color: 'text.secondary' }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </CenterWrapper>
  );
};

export default ProjectSection;
