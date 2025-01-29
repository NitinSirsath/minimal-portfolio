import { Box, Typography, Divider, Avatar, Chip, Stack, Tooltip, IconButton, CircularProgress, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { personalInfo, skills, tools, languages, collegeLife, photography } from '../../../components/data/about';
import {
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  X as XIcon,
} from '@mui/icons-material';
import gif1 from '../../../assets/arya.webp';
import gif2 from '../../../assets/class.webp';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [gif1Loaded, setGif1Loaded] = useState(false);
  const [gif2Loaded, setGif2Loaded] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setGif1Loaded(true), 5000); // 5s timeout in case of loading failure
    const timeout2 = setTimeout(() => setGif2Loaded(true), 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <CenterWrapper>
      {/* Profile Section */}
      <Box textAlign="left" sx={{ mb: 4 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Avatar src={personalInfo.profileImage} sx={{ width: 200, height: 200, mb: 2, border: '4px solid #FCD44C' }} />
          </motion.div>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FCD44C' }}>
            {personalInfo.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {personalInfo.role}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {personalInfo.bio}
          </Typography>

          {/* Contact Information with Proper Icon Alignment */}
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              {/* <Tooltip title="Location" arrow>
                <PinDropIcon fontSize="small" />
              </Tooltip> */}
              <Typography variant="body2">{personalInfo.location}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              {/* <Tooltip title="Email" arrow>
                <ContactMailIcon fontSize="small" />
              </Tooltip> */}
              <Typography variant="body2">
                <a href={`mailto:${personalInfo.contact.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {personalInfo.contact.email}
                </a>
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              {/* <Tooltip title="Phone" arrow>
                <CallIcon fontSize="small" />
              </Tooltip> */}
              <Typography variant="body2">
                <a href={`tel:${personalInfo.contact.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {personalInfo.contact.phone}
                </a>
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              {/* <Tooltip title="Portfolio Website" arrow>
                <PermIdentityIcon fontSize="small" />
              </Tooltip> */}
              <Typography variant="body2">
                <a
                  href={personalInfo.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {personalInfo.contact.website}
                </a>
              </Typography>
            </Stack>
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Tooltip title="LinkedIn" arrow>
              <IconButton component="a" href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon color="disabled" />
              </IconButton>
            </Tooltip>

            <Tooltip title="X (Twitter)" arrow>
              <IconButton component="a" href={personalInfo.socials.x} target="_blank" rel="noopener noreferrer">
                <XIcon color="disabled" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram" arrow>
              <IconButton component="a" href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon color="disabled" />
              </IconButton>
            </Tooltip>

            <Tooltip title="YouTube" arrow>
              <IconButton component="a" href={personalInfo.socials.youtube} target="_blank" rel="noopener noreferrer">
                <YouTubeIcon color="disabled" />
              </IconButton>
            </Tooltip>
          </Stack>
        </motion.div>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* College Life Section */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          College Life 🎓
        </Typography>
        <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          {/* GIF 1 */}
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              width: 250,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F4F4F4',
            }}
          >
            {!gif1Loaded && <CircularProgress />}
            <img
              src={gif1}
              alt="College Memories 1"
              loading="lazy"
              style={{
                display: gif1Loaded ? 'block' : 'none',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onLoad={() => setGif1Loaded(true)}
              onError={() => setGif1Loaded(true)} // Force load in case of error
            />
          </Paper>

          {/* GIF 2 */}
          <Paper
            elevation={3}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              width: 250,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F4F4F4',
            }}
          >
            {!gif2Loaded && <CircularProgress />}
            <img
              src={gif2}
              alt="College Memories 2"
              loading="lazy"
              style={{
                display: gif2Loaded ? 'block' : 'none',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onLoad={() => setGif2Loaded(true)}
              onError={() => setGif2Loaded(true)}
            />
          </Paper>
        </Stack>
        <Box>
          {Object.values(collegeLife).map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </motion.div>

      <Divider sx={{ my: 4 }} />

      {/* Photography Passion Section */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Photography Passion 📸
        </Typography>
        <Box>
          {Object.values(photography).map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </motion.div>

      <Divider sx={{ my: 4 }} />

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
