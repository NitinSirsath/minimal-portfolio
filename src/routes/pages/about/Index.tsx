import { Box, Typography, Divider, Avatar, Chip, Stack, Tooltip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../components/wrappers/CenterWrapper';
import { personalInfo, skills, tools, languages, collegeLife, photography } from '../../../components/data/about';
import {
  Call as CallIcon,
  PinDrop as PinDropIcon,
  ContactMail as ContactMailIcon,
  PermIdentity as PermIdentityIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  X as XIcon,
} from '@mui/icons-material';

const AboutPage = () => {
  return (
    <CenterWrapper>
      {/* Profile Section */}
      <Box textAlign="left" sx={{ mb: 4 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Avatar src={personalInfo.profileImage} sx={{ width: 200, height: 200, mb: 2 }} />
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
