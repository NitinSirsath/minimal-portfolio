import { Box, Typography, Divider, Button, Stack, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { Experience, experience, personalProjects, projects } from '../../../components/data/experienceData';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { skills, tools } from '../../../components/data/about';

const ExperiencePage = () => {
  return (
    <CenterWrapper widthPercentage={50}>
      {/* Work Experience Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Work Experience
        </Typography>
        <Stack spacing={4}>
          {experience.map((exp: Experience, index) => (
            <motion.div transition={{ duration: 0.3 }} key={index}>
              <Box sx={{ p: 2, borderLeft: '3px solid #FCD44C' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.role} | {exp.period}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {exp.description}
                </Typography>

                {/* Projects under Decision Automation */}
                {exp.company === 'Decision Automation' && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                      Projects at {exp.company}
                    </Typography>
                    {projects.map((project, idx) => (
                      <Box key={idx} sx={{ mt: 2, pl: 2, borderLeft: '2px solid #FCD44C' }}>
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
                    ))}
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Stack>
      </motion.div>

      <Divider sx={{ my: 4 }} />

      {/* Personal Projects Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Personal Projects 🚀
        </Typography>
        <Stack spacing={4}>
          {personalProjects.map((project, index) => (
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} key={index}>
              <Box sx={{ p: 2, borderLeft: '3px solid #FCD44C' }}>
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
      <Box marginTop={2}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Skills & Tools
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {[...skills.skills, ...tools.tools].map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
        </Box>
      </Box>
    </CenterWrapper>
  );
};

export default ExperiencePage;
